"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLaxTextMatcher = createLaxTextMatcher;
exports.createStrictTextMatcher = createStrictTextMatcher;
exports.createRegexTextMatcher = createRegexTextMatcher;
exports.elementText = elementText;
exports.elementMatchesText = elementMatchesText;
exports.parentElementOrShadowHost = parentElementOrShadowHost;
exports.isVisible = isVisible;
exports.SelectorEvaluatorImpl = void 0;

var _selectorParser = require("../common/selectorParser");

/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class SelectorEvaluatorImpl {
  constructor(extraEngines) {
    this._engines = new Map();
    this._cacheQueryCSS = new Map();
    this._cacheMatches = new Map();
    this._cacheQuery = new Map();
    this._cacheMatchesSimple = new Map();
    this._cacheMatchesParents = new Map();
    this._cacheCallMatches = new Map();
    this._cacheCallQuery = new Map();
    this._cacheQuerySimple = new Map();
    this._cacheText = new Map();
    this._scoreMap = void 0;
    this._retainCacheCounter = 0;

    for (const [name, engine] of extraEngines) this._engines.set(name, engine);

    this._engines.set('not', notEngine);

    this._engines.set('is', isEngine);

    this._engines.set('where', isEngine);

    this._engines.set('has', hasEngine);

    this._engines.set('scope', scopeEngine);

    this._engines.set('light', lightEngine);

    this._engines.set('visible', visibleEngine);

    this._engines.set('text', textEngine);

    this._engines.set('text-is', textIsEngine);

    this._engines.set('text-matches', textMatchesEngine);

    this._engines.set('has-text', hasTextEngine);

    this._engines.set('right-of', createPositionEngine('right-of', boxRightOf));

    this._engines.set('left-of', createPositionEngine('left-of', boxLeftOf));

    this._engines.set('above', createPositionEngine('above', boxAbove));

    this._engines.set('below', createPositionEngine('below', boxBelow));

    this._engines.set('near', createPositionEngine('near', boxNear));

    this._engines.set('nth-match', nthMatchEngine);

    const allNames = [...this._engines.keys()];
    allNames.sort();
    const parserNames = [..._selectorParser.customCSSNames];
    parserNames.sort();
    if (allNames.join('|') !== parserNames.join('|')) throw new Error(`Please keep customCSSNames in sync with evaluator engines: ${allNames.join('|')} vs ${parserNames.join('|')}`);
  }

  begin() {
    ++this._retainCacheCounter;
  }

  end() {
    --this._retainCacheCounter;

    if (!this._retainCacheCounter) {
      this._cacheQueryCSS.clear();

      this._cacheMatches.clear();

      this._cacheQuery.clear();

      this._cacheMatchesSimple.clear();

      this._cacheMatchesParents.clear();

      this._cacheCallMatches.clear();

      this._cacheCallQuery.clear();

      this._cacheQuerySimple.clear();

      this._cacheText.clear();
    }
  }

  _cached(cache, main, rest, cb) {
    if (!cache.has(main)) cache.set(main, []);
    const entries = cache.get(main);
    const entry = entries.find(e => rest.every((value, index) => e.rest[index] === value));
    if (entry) return entry.result;
    const result = cb();
    entries.push({
      rest,
      result
    });
    return result;
  }

  _checkSelector(s) {
    const wellFormed = typeof s === 'object' && s && (Array.isArray(s) || 'simples' in s && s.simples.length);
    if (!wellFormed) throw new Error(`Malformed selector "${s}"`);
    return s;
  }

  matches(element, s, context) {
    const selector = this._checkSelector(s);

    this.begin();

    try {
      return this._cached(this._cacheMatches, element, [selector, context.scope, context.pierceShadow], () => {
        if (Array.isArray(selector)) return this._matchesEngine(isEngine, element, selector, context);
        if (!this._matchesSimple(element, selector.simples[selector.simples.length - 1].selector, context)) return false;
        return this._matchesParents(element, selector, selector.simples.length - 2, context);
      });
    } finally {
      this.end();
    }
  }

  query(context, s) {
    const selector = this._checkSelector(s);

    this.begin();

    try {
      return this._cached(this._cacheQuery, selector, [context.scope, context.pierceShadow], () => {
        if (Array.isArray(selector)) return this._queryEngine(isEngine, context, selector); // query() recursively calls itself, so we set up a new map for this particular query() call.

        const previousScoreMap = this._scoreMap;
        this._scoreMap = new Map();

        let elements = this._querySimple(context, selector.simples[selector.simples.length - 1].selector);

        elements = elements.filter(element => this._matchesParents(element, selector, selector.simples.length - 2, context));

        if (this._scoreMap.size) {
          elements.sort((a, b) => {
            const aScore = this._scoreMap.get(a);

            const bScore = this._scoreMap.get(b);

            if (aScore === bScore) return 0;
            if (aScore === undefined) return 1;
            if (bScore === undefined) return -1;
            return aScore - bScore;
          });
        }

        this._scoreMap = previousScoreMap;
        return elements;
      });
    } finally {
      this.end();
    }
  }

  _markScore(element, score) {
    // HACK ALERT: temporary marks an element with a score, to be used
    // for sorting at the end of the query().
    if (this._scoreMap) this._scoreMap.set(element, score);
  }

  _matchesSimple(element, simple, context) {
    return this._cached(this._cacheMatchesSimple, element, [simple, context.scope, context.pierceShadow], () => {
      const isPossiblyScopeClause = simple.functions.some(f => f.name === 'scope' || f.name === 'is');
      if (!isPossiblyScopeClause && element === context.scope) return false;
      if (simple.css && !this._matchesCSS(element, simple.css)) return false;

      for (const func of simple.functions) {
        if (!this._matchesEngine(this._getEngine(func.name), element, func.args, context)) return false;
      }

      return true;
    });
  }

  _querySimple(context, simple) {
    if (!simple.functions.length) return this._queryCSS(context, simple.css || '*');
    return this._cached(this._cacheQuerySimple, simple, [context.scope, context.pierceShadow], () => {
      let css = simple.css;
      const funcs = simple.functions;
      if (css === '*' && funcs.length) css = undefined;
      let elements;
      let firstIndex = -1;

      if (css !== undefined) {
        elements = this._queryCSS(context, css);
      } else {
        firstIndex = funcs.findIndex(func => this._getEngine(func.name).query !== undefined);
        if (firstIndex === -1) firstIndex = 0;
        elements = this._queryEngine(this._getEngine(funcs[firstIndex].name), context, funcs[firstIndex].args);
      }

      for (let i = 0; i < funcs.length; i++) {
        if (i === firstIndex) continue;

        const engine = this._getEngine(funcs[i].name);

        if (engine.matches !== undefined) elements = elements.filter(e => this._matchesEngine(engine, e, funcs[i].args, context));
      }

      for (let i = 0; i < funcs.length; i++) {
        if (i === firstIndex) continue;

        const engine = this._getEngine(funcs[i].name);

        if (engine.matches === undefined) elements = elements.filter(e => this._matchesEngine(engine, e, funcs[i].args, context));
      }

      return elements;
    });
  }

  _matchesParents(element, complex, index, context) {
    if (index < 0) return true;
    return this._cached(this._cacheMatchesParents, element, [complex, index, context.scope, context.pierceShadow], () => {
      const {
        selector: simple,
        combinator
      } = complex.simples[index];

      if (combinator === '>') {
        const parent = parentElementOrShadowHostInContext(element, context);
        if (!parent || !this._matchesSimple(parent, simple, context)) return false;
        return this._matchesParents(parent, complex, index - 1, context);
      }

      if (combinator === '+') {
        const previousSibling = previousSiblingInContext(element, context);
        if (!previousSibling || !this._matchesSimple(previousSibling, simple, context)) return false;
        return this._matchesParents(previousSibling, complex, index - 1, context);
      }

      if (combinator === '') {
        let parent = parentElementOrShadowHostInContext(element, context);

        while (parent) {
          if (this._matchesSimple(parent, simple, context)) {
            if (this._matchesParents(parent, complex, index - 1, context)) return true;
            if (complex.simples[index - 1].combinator === '') break;
          }

          parent = parentElementOrShadowHostInContext(parent, context);
        }

        return false;
      }

      if (combinator === '~') {
        let previousSibling = previousSiblingInContext(element, context);

        while (previousSibling) {
          if (this._matchesSimple(previousSibling, simple, context)) {
            if (this._matchesParents(previousSibling, complex, index - 1, context)) return true;
            if (complex.simples[index - 1].combinator === '~') break;
          }

          previousSibling = previousSiblingInContext(previousSibling, context);
        }

        return false;
      }

      if (combinator === '>=') {
        let parent = element;

        while (parent) {
          if (this._matchesSimple(parent, simple, context)) {
            if (this._matchesParents(parent, complex, index - 1, context)) return true;
            if (complex.simples[index - 1].combinator === '') break;
          }

          parent = parentElementOrShadowHostInContext(parent, context);
        }

        return false;
      }

      throw new Error(`Unsupported combinator "${combinator}"`);
    });
  }

  _matchesEngine(engine, element, args, context) {
    if (engine.matches) return this._callMatches(engine, element, args, context);
    if (engine.query) return this._callQuery(engine, args, context).includes(element);
    throw new Error(`Selector engine should implement "matches" or "query"`);
  }

  _queryEngine(engine, context, args) {
    if (engine.query) return this._callQuery(engine, args, context);
    if (engine.matches) return this._queryCSS(context, '*').filter(element => this._callMatches(engine, element, args, context));
    throw new Error(`Selector engine should implement "matches" or "query"`);
  }

  _callMatches(engine, element, args, context) {
    return this._cached(this._cacheCallMatches, element, [engine, context.scope, context.pierceShadow, ...args], () => {
      return engine.matches(element, args, context, this);
    });
  }

  _callQuery(engine, args, context) {
    return this._cached(this._cacheCallQuery, engine, [context.scope, context.pierceShadow, ...args], () => {
      return engine.query(context, args, this);
    });
  }

  _matchesCSS(element, css) {
    return element.matches(css);
  }

  _queryCSS(context, css) {
    return this._cached(this._cacheQueryCSS, css, [context.scope, context.pierceShadow], () => {
      let result = [];

      function query(root) {
        result = result.concat([...root.querySelectorAll(css)]);
        if (!context.pierceShadow) return;
        if (root.shadowRoot) query(root.shadowRoot);

        for (const element of root.querySelectorAll('*')) {
          if (element.shadowRoot) query(element.shadowRoot);
        }
      }

      query(context.scope);
      return result;
    });
  }

  _getEngine(name) {
    const engine = this._engines.get(name);

    if (!engine) throw new Error(`Unknown selector engine "${name}"`);
    return engine;
  }

}

exports.SelectorEvaluatorImpl = SelectorEvaluatorImpl;
const isEngine = {
  matches(element, args, context, evaluator) {
    if (args.length === 0) throw new Error(`"is" engine expects non-empty selector list`);
    return args.some(selector => evaluator.matches(element, selector, context));
  },

  query(context, args, evaluator) {
    if (args.length === 0) throw new Error(`"is" engine expects non-empty selector list`);
    let elements = [];

    for (const arg of args) elements = elements.concat(evaluator.query(context, arg));

    return args.length === 1 ? elements : sortInDOMOrder(elements);
  }

};
const hasEngine = {
  matches(element, args, context, evaluator) {
    if (args.length === 0) throw new Error(`"has" engine expects non-empty selector list`);
    return evaluator.query({ ...context,
      scope: element
    }, args).length > 0;
  } // TODO: we do not implement "relative selectors", as in "div:has(> span)" or "div:has(+ span)".
  // TODO: we can implement efficient "query" by matching "args" and returning
  // all parents/descendants, just have to be careful with the ":scope" matching.


};
const scopeEngine = {
  matches(element, args, context, evaluator) {
    if (args.length !== 0) throw new Error(`"scope" engine expects no arguments`);
    if (context.scope.nodeType === 9
    /* Node.DOCUMENT_NODE */
    ) return element === context.scope.documentElement;
    return element === context.scope;
  },

  query(context, args, evaluator) {
    if (args.length !== 0) throw new Error(`"scope" engine expects no arguments`);

    if (context.scope.nodeType === 9
    /* Node.DOCUMENT_NODE */
    ) {
        const root = context.scope.documentElement;
        return root ? [root] : [];
      }

    if (context.scope.nodeType === 1
    /* Node.ELEMENT_NODE */
    ) return [context.scope];
    return [];
  }

};
const notEngine = {
  matches(element, args, context, evaluator) {
    if (args.length === 0) throw new Error(`"not" engine expects non-empty selector list`);
    return !evaluator.matches(element, args, context);
  }

};
const lightEngine = {
  query(context, args, evaluator) {
    return evaluator.query({ ...context,
      pierceShadow: false
    }, args);
  },

  matches(element, args, context, evaluator) {
    return evaluator.matches(element, args, { ...context,
      pierceShadow: false
    });
  }

};
const visibleEngine = {
  matches(element, args, context, evaluator) {
    if (args.length) throw new Error(`"visible" engine expects no arguments`);
    return isVisible(element);
  }

};
const textEngine = {
  matches(element, args, context, evaluator) {
    if (args.length !== 1 || typeof args[0] !== 'string') throw new Error(`"text" engine expects a single string`);
    const matcher = createLaxTextMatcher(args[0]);
    return elementMatchesText(evaluator, element, matcher) === 'self';
  }

};
const textIsEngine = {
  matches(element, args, context, evaluator) {
    if (args.length !== 1 || typeof args[0] !== 'string') throw new Error(`"text-is" engine expects a single string`);
    const matcher = createStrictTextMatcher(args[0]);
    return elementMatchesText(evaluator, element, matcher) !== 'none';
  }

};
const textMatchesEngine = {
  matches(element, args, context, evaluator) {
    if (args.length === 0 || typeof args[0] !== 'string' || args.length > 2 || args.length === 2 && typeof args[1] !== 'string') throw new Error(`"text-matches" engine expects a regexp body and optional regexp flags`);
    const matcher = createRegexTextMatcher(args[0], args.length === 2 ? args[1] : undefined);
    return elementMatchesText(evaluator, element, matcher) === 'self';
  }

};
const hasTextEngine = {
  matches(element, args, context, evaluator) {
    if (args.length !== 1 || typeof args[0] !== 'string') throw new Error(`"has-text" engine expects a single string`);
    if (shouldSkipForTextMatching(element)) return false;
    const matcher = createLaxTextMatcher(args[0]);
    return matcher(elementText(evaluator, element));
  }

};

function createLaxTextMatcher(text) {
  text = text.trim().replace(/\s+/g, ' ').toLowerCase();
  return elementText => {
    const s = elementText.full.trim().replace(/\s+/g, ' ').toLowerCase();
    return s.includes(text);
  };
}

function createStrictTextMatcher(text) {
  text = text.trim().replace(/\s+/g, ' ');
  return elementText => {
    return elementText.immediate.some(s => s.trim().replace(/\s+/g, ' ') === text);
  };
}

function createRegexTextMatcher(source, flags) {
  const re = new RegExp(source, flags);
  return elementText => {
    return re.test(elementText.full);
  };
}

function shouldSkipForTextMatching(element) {
  return element.nodeName === 'SCRIPT' || element.nodeName === 'STYLE' || document.head && document.head.contains(element);
}

function elementText(evaluator, root) {
  let value = evaluator._cacheText.get(root);

  if (value === undefined) {
    value = {
      full: '',
      immediate: []
    };

    if (!shouldSkipForTextMatching(root)) {
      let currentImmediate = '';

      if (root instanceof HTMLInputElement && (root.type === 'submit' || root.type === 'button')) {
        value = {
          full: root.value,
          immediate: [root.value]
        };
      } else {
        for (let child = root.firstChild; child; child = child.nextSibling) {
          if (child.nodeType === Node.TEXT_NODE) {
            value.full += child.nodeValue || '';
            currentImmediate += child.nodeValue || '';
          } else {
            if (currentImmediate) value.immediate.push(currentImmediate);
            currentImmediate = '';
            if (child.nodeType === Node.ELEMENT_NODE) value.full += elementText(evaluator, child).full;
          }
        }

        if (currentImmediate) value.immediate.push(currentImmediate);
        if (root.shadowRoot) value.full += elementText(evaluator, root.shadowRoot).full;
      }
    }

    evaluator._cacheText.set(root, value);
  }

  return value;
}

function elementMatchesText(evaluator, element, matcher) {
  if (shouldSkipForTextMatching(element)) return 'none';
  if (!matcher(elementText(evaluator, element))) return 'none';

  for (let child = element.firstChild; child; child = child.nextSibling) {
    if (child.nodeType === Node.ELEMENT_NODE && matcher(elementText(evaluator, child))) return 'selfAndChildren';
  }

  if (element.shadowRoot && matcher(elementText(evaluator, element.shadowRoot))) return 'selfAndChildren';
  return 'self';
}

function boxRightOf(box1, box2, maxDistance) {
  const distance = box1.left - box2.right;
  if (distance < 0 || maxDistance !== undefined && distance > maxDistance) return;
  return distance + Math.max(box2.bottom - box1.bottom, 0) + Math.max(box1.top - box2.top, 0);
}

function boxLeftOf(box1, box2, maxDistance) {
  const distance = box2.left - box1.right;
  if (distance < 0 || maxDistance !== undefined && distance > maxDistance) return;
  return distance + Math.max(box2.bottom - box1.bottom, 0) + Math.max(box1.top - box2.top, 0);
}

function boxAbove(box1, box2, maxDistance) {
  const distance = box2.top - box1.bottom;
  if (distance < 0 || maxDistance !== undefined && distance > maxDistance) return;
  return distance + Math.max(box1.left - box2.left, 0) + Math.max(box2.right - box1.right, 0);
}

function boxBelow(box1, box2, maxDistance) {
  const distance = box1.top - box2.bottom;
  if (distance < 0 || maxDistance !== undefined && distance > maxDistance) return;
  return distance + Math.max(box1.left - box2.left, 0) + Math.max(box2.right - box1.right, 0);
}

function boxNear(box1, box2, maxDistance) {
  const kThreshold = maxDistance === undefined ? 50 : maxDistance;
  let score = 0;
  if (box1.left - box2.right >= 0) score += box1.left - box2.right;
  if (box2.left - box1.right >= 0) score += box2.left - box1.right;
  if (box2.top - box1.bottom >= 0) score += box2.top - box1.bottom;
  if (box1.top - box2.bottom >= 0) score += box1.top - box2.bottom;
  return score > kThreshold ? undefined : score;
}

function createPositionEngine(name, scorer) {
  return {
    matches(element, args, context, evaluator) {
      const maxDistance = args.length && typeof args[args.length - 1] === 'number' ? args[args.length - 1] : undefined;
      const queryArgs = maxDistance === undefined ? args : args.slice(0, args.length - 1);
      if (args.length < 1 + (maxDistance === undefined ? 0 : 1)) throw new Error(`"${name}" engine expects a selector list and optional maximum distance in pixels`);
      const box = element.getBoundingClientRect();
      let bestScore;

      for (const e of evaluator.query(context, queryArgs)) {
        if (e === element) continue;
        const score = scorer(box, e.getBoundingClientRect(), maxDistance);
        if (score === undefined) continue;
        if (bestScore === undefined || score < bestScore) bestScore = score;
      }

      if (bestScore === undefined) return false;

      evaluator._markScore(element, bestScore);

      return true;
    }

  };
}

const nthMatchEngine = {
  query(context, args, evaluator) {
    let index = args[args.length - 1];
    if (args.length < 2) throw new Error(`"nth-match" engine expects non-empty selector list and an index argument`);
    if (typeof index !== 'number' || index < 1) throw new Error(`"nth-match" engine expects a one-based index as the last argument`);
    const elements = isEngine.query(context, args.slice(0, args.length - 1), evaluator);
    index--; // one-based

    return index < elements.length ? [elements[index]] : [];
  }

};

function parentElementOrShadowHost(element) {
  if (element.parentElement) return element.parentElement;
  if (!element.parentNode) return;
  if (element.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE && element.parentNode.host) return element.parentNode.host;
}

function parentElementOrShadowHostInContext(element, context) {
  if (element === context.scope) return;
  if (!context.pierceShadow) return element.parentElement || undefined;
  return parentElementOrShadowHost(element);
}

function previousSiblingInContext(element, context) {
  if (element === context.scope) return;
  return element.previousElementSibling || undefined;
}

function isVisible(element) {
  // Note: this logic should be similar to waitForDisplayedAtStablePosition() to avoid surprises.
  if (!element.ownerDocument || !element.ownerDocument.defaultView) return true;
  const style = element.ownerDocument.defaultView.getComputedStyle(element);
  if (!style || style.visibility === 'hidden') return false;
  const rect = element.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}

function sortInDOMOrder(elements) {
  const elementToEntry = new Map();
  const roots = [];
  const result = [];

  function append(element) {
    let entry = elementToEntry.get(element);
    if (entry) return entry;
    const parent = parentElementOrShadowHost(element);

    if (parent) {
      const parentEntry = append(parent);
      parentEntry.children.push(element);
    } else {
      roots.push(element);
    }

    entry = {
      children: [],
      taken: false
    };
    elementToEntry.set(element, entry);
    return entry;
  }

  elements.forEach(e => append(e).taken = true);

  function visit(element) {
    const entry = elementToEntry.get(element);
    if (entry.taken) result.push(element);

    if (entry.children.length > 1) {
      const set = new Set(entry.children);
      entry.children = [];
      let child = element.firstElementChild;

      while (child && entry.children.length < set.size) {
        if (set.has(child)) entry.children.push(child);
        child = child.nextElementSibling;
      }

      child = element.shadowRoot ? element.shadowRoot.firstElementChild : null;

      while (child && entry.children.length < set.size) {
        if (set.has(child)) entry.children.push(child);
        child = child.nextElementSibling;
      }
    }

    entry.children.forEach(visit);
  }

  roots.forEach(visit);
  return result;
}