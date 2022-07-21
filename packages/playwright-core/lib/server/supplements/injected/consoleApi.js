"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ConsoleAPI = void 0;

var _stringUtils = require("../../../utils/stringUtils");

var _selectorGenerator = require("../../injected/selectorGenerator");

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
function createLocator(injectedScript, initial, options) {
  class Locator {
    constructor(selector, options) {
      this.selector = void 0;
      this.element = void 0;
      this.elements = void 0;
      this.selector = selector;

      if (options !== null && options !== void 0 && options.hasText) {
        const text = options.hasText;
        if (text instanceof RegExp) this.selector += ` >> :scope:text-matches(${(0, _stringUtils.escapeWithQuotes)(text.source, '"')}, "${text.flags}")`;else this.selector += ` >> :scope:has-text(${(0, _stringUtils.escapeWithQuotes)(text)})`;
      }

      if (options !== null && options !== void 0 && options.has) this.selector += ` >> has=` + JSON.stringify(options.has.selector);
      const parsed = injectedScript.parseSelector(this.selector);
      this.element = injectedScript.querySelector(parsed, document, false);
      this.elements = injectedScript.querySelectorAll(parsed, document);
    }

    locator(selector, options) {
      return new Locator(this.selector ? this.selector + ' >> ' + selector : selector, options);
    }

  }

  return new Locator(initial, options);
}

class ConsoleAPI {
  constructor(injectedScript) {
    this._injectedScript = void 0;
    this._injectedScript = injectedScript;
    if (window.playwright) return;
    window.playwright = {
      $: (selector, strict) => this._querySelector(selector, !!strict),
      $$: selector => this._querySelectorAll(selector),
      locator: (selector, options) => createLocator(this._injectedScript, selector, options),
      inspect: selector => this._inspect(selector),
      selector: element => this._selector(element),
      resume: () => this._resume()
    };
  }

  _querySelector(selector, strict) {
    if (typeof selector !== 'string') throw new Error(`Usage: playwright.query('Playwright >> selector').`);

    const parsed = this._injectedScript.parseSelector(selector);

    return this._injectedScript.querySelector(parsed, document, strict);
  }

  _querySelectorAll(selector) {
    if (typeof selector !== 'string') throw new Error(`Usage: playwright.$$('Playwright >> selector').`);

    const parsed = this._injectedScript.parseSelector(selector);

    return this._injectedScript.querySelectorAll(parsed, document);
  }

  _inspect(selector) {
    if (typeof selector !== 'string') throw new Error(`Usage: playwright.inspect('Playwright >> selector').`);
    window.inspect(this._querySelector(selector, false));
  }

  _selector(element) {
    if (!(element instanceof Element)) throw new Error(`Usage: playwright.selector(element).`);
    return (0, _selectorGenerator.generateSelector)(this._injectedScript, element, true).selector;
  }

  _resume() {
    window._playwrightResume().catch(() => {});
  }

}

exports.ConsoleAPI = ConsoleAPI;
var _default = ConsoleAPI;
exports.default = _default;