var pwExport =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/supplements/injected/consoleApi.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/common/cssParser.ts":
/*!****************************************!*\
  !*** ./src/server/common/cssParser.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCSS = parseCSS;
exports.serializeSelector = serializeSelector;

var css = _interopRequireWildcard(__webpack_require__(/*! ./cssTokenizer */ "./src/server/common/cssTokenizer.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
function parseCSS(selector, customNames) {
  let tokens;

  try {
    tokens = css.tokenize(selector);
    if (!(tokens[tokens.length - 1] instanceof css.EOFToken)) tokens.push(new css.EOFToken());
  } catch (e) {
    const newMessage = e.message + ` while parsing selector "${selector}"`;
    const index = (e.stack || '').indexOf(e.message);
    if (index !== -1) e.stack = e.stack.substring(0, index) + newMessage + e.stack.substring(index + e.message.length);
    e.message = newMessage;
    throw e;
  }

  const unsupportedToken = tokens.find(token => {
    return token instanceof css.AtKeywordToken || token instanceof css.BadStringToken || token instanceof css.BadURLToken || token instanceof css.ColumnToken || token instanceof css.CDOToken || token instanceof css.CDCToken || token instanceof css.SemicolonToken || // TODO: Consider using these for something, e.g. to escape complex strings.
    // For example :xpath{ (//div/bar[@attr="foo"])[2]/baz }
    // Or this way :xpath( {complex-xpath-goes-here("hello")} )
    token instanceof css.OpenCurlyToken || token instanceof css.CloseCurlyToken || // TODO: Consider treating these as strings?
    token instanceof css.URLToken || token instanceof css.PercentageToken;
  });
  if (unsupportedToken) throw new Error(`Unsupported token "${unsupportedToken.toSource()}" while parsing selector "${selector}"`);
  let pos = 0;
  const names = new Set();

  function unexpected() {
    return new Error(`Unexpected token "${tokens[pos].toSource()}" while parsing selector "${selector}"`);
  }

  function skipWhitespace() {
    while (tokens[pos] instanceof css.WhitespaceToken) pos++;
  }

  function isIdent(p = pos) {
    return tokens[p] instanceof css.IdentToken;
  }

  function isString(p = pos) {
    return tokens[p] instanceof css.StringToken;
  }

  function isNumber(p = pos) {
    return tokens[p] instanceof css.NumberToken;
  }

  function isComma(p = pos) {
    return tokens[p] instanceof css.CommaToken;
  }

  function isCloseParen(p = pos) {
    return tokens[p] instanceof css.CloseParenToken;
  }

  function isStar(p = pos) {
    return tokens[p] instanceof css.DelimToken && tokens[p].value === '*';
  }

  function isEOF(p = pos) {
    return tokens[p] instanceof css.EOFToken;
  }

  function isClauseCombinator(p = pos) {
    return tokens[p] instanceof css.DelimToken && ['>', '+', '~'].includes(tokens[p].value);
  }

  function isSelectorClauseEnd(p = pos) {
    return isComma(p) || isCloseParen(p) || isEOF(p) || isClauseCombinator(p) || tokens[p] instanceof css.WhitespaceToken;
  }

  function consumeFunctionArguments() {
    const result = [consumeArgument()];

    while (true) {
      skipWhitespace();
      if (!isComma()) break;
      pos++;
      result.push(consumeArgument());
    }

    return result;
  }

  function consumeArgument() {
    skipWhitespace();
    if (isNumber()) return tokens[pos++].value;
    if (isString()) return tokens[pos++].value;
    return consumeComplexSelector();
  }

  function consumeComplexSelector() {
    skipWhitespace();
    const result = {
      simples: [{
        selector: consumeSimpleSelector(),
        combinator: ''
      }]
    };

    while (true) {
      skipWhitespace();

      if (isClauseCombinator()) {
        result.simples[result.simples.length - 1].combinator = tokens[pos++].value;
        skipWhitespace();
      } else if (isSelectorClauseEnd()) {
        break;
      }

      result.simples.push({
        combinator: '',
        selector: consumeSimpleSelector()
      });
    }

    return result;
  }

  function consumeSimpleSelector() {
    let rawCSSString = '';
    const functions = [];

    while (!isSelectorClauseEnd()) {
      if (isIdent() || isStar()) {
        rawCSSString += tokens[pos++].toSource();
      } else if (tokens[pos] instanceof css.HashToken) {
        rawCSSString += tokens[pos++].toSource();
      } else if (tokens[pos] instanceof css.DelimToken && tokens[pos].value === '.') {
        pos++;
        if (isIdent()) rawCSSString += '.' + tokens[pos++].toSource();else throw unexpected();
      } else if (tokens[pos] instanceof css.ColonToken) {
        pos++;

        if (isIdent()) {
          if (!customNames.has(tokens[pos].value.toLowerCase())) {
            rawCSSString += ':' + tokens[pos++].toSource();
          } else {
            const name = tokens[pos++].value.toLowerCase();
            functions.push({
              name,
              args: []
            });
            names.add(name);
          }
        } else if (tokens[pos] instanceof css.FunctionToken) {
          const name = tokens[pos++].value.toLowerCase();

          if (!customNames.has(name)) {
            rawCSSString += `:${name}(${consumeBuiltinFunctionArguments()})`;
          } else {
            functions.push({
              name,
              args: consumeFunctionArguments()
            });
            names.add(name);
          }

          skipWhitespace();
          if (!isCloseParen()) throw unexpected();
          pos++;
        } else {
          throw unexpected();
        }
      } else if (tokens[pos] instanceof css.OpenSquareToken) {
        rawCSSString += '[';
        pos++;

        while (!(tokens[pos] instanceof css.CloseSquareToken) && !isEOF()) rawCSSString += tokens[pos++].toSource();

        if (!(tokens[pos] instanceof css.CloseSquareToken)) throw unexpected();
        rawCSSString += ']';
        pos++;
      } else {
        throw unexpected();
      }
    }

    if (!rawCSSString && !functions.length) throw unexpected();
    return {
      css: rawCSSString || undefined,
      functions
    };
  }

  function consumeBuiltinFunctionArguments() {
    let s = '';

    while (!isCloseParen() && !isEOF()) s += tokens[pos++].toSource();

    return s;
  }

  const result = consumeFunctionArguments();
  if (!isEOF()) throw new Error(`Error while parsing selector "${selector}"`);
  if (result.some(arg => typeof arg !== 'object' || !('simples' in arg))) throw new Error(`Error while parsing selector "${selector}"`);
  return {
    selector: result,
    names: Array.from(names)
  };
}

function serializeSelector(args) {
  return args.map(arg => {
    if (typeof arg === 'string') return `"${arg}"`;
    if (typeof arg === 'number') return String(arg);
    return arg.simples.map(({
      selector,
      combinator
    }) => {
      let s = selector.css || '';
      s = s + selector.functions.map(func => `:${func.name}(${serializeSelector(func.args)})`).join('');
      if (combinator) s += ' ' + combinator;
      return s;
    }).join(' ');
  }).join(', ');
}

/***/ }),

/***/ "./src/server/common/cssTokenizer.js":
/*!*******************************************!*\
  !*** ./src/server/common/cssTokenizer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/*
 * Original at https://github.com/tabatkins/parse-css
 * licensed under http://creativecommons.org/publicdomain/zero/1.0/
 *
 * Modifications copyright (c) Microsoft Corporation.
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
// Changes from https://github.com/tabatkins/parse-css
//   - Tabs are replaced with two spaces.
//   - Everything not related to tokenizing - below the first exports block - is removed.
// @ts-nocheck
(function (root, factory) {
  // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js,
  // Rhino, and plain browser loading.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(void 0, function (exports) {
  var between = function (num, first, last) {
    return num >= first && num <= last;
  };

  function digit(code) {
    return between(code, 0x30, 0x39);
  }

  function hexdigit(code) {
    return digit(code) || between(code, 0x41, 0x46) || between(code, 0x61, 0x66);
  }

  function uppercaseletter(code) {
    return between(code, 0x41, 0x5a);
  }

  function lowercaseletter(code) {
    return between(code, 0x61, 0x7a);
  }

  function letter(code) {
    return uppercaseletter(code) || lowercaseletter(code);
  }

  function nonascii(code) {
    return code >= 0x80;
  }

  function namestartchar(code) {
    return letter(code) || nonascii(code) || code == 0x5f;
  }

  function namechar(code) {
    return namestartchar(code) || digit(code) || code == 0x2d;
  }

  function nonprintable(code) {
    return between(code, 0, 8) || code == 0xb || between(code, 0xe, 0x1f) || code == 0x7f;
  }

  function newline(code) {
    return code == 0xa;
  }

  function whitespace(code) {
    return newline(code) || code == 9 || code == 0x20;
  }

  function badescape(code) {
    return newline(code) || isNaN(code);
  }

  var maximumallowedcodepoint = 0x10ffff;

  var InvalidCharacterError = function (message) {
    this.message = message;
  };

  InvalidCharacterError.prototype = new Error();
  InvalidCharacterError.prototype.name = 'InvalidCharacterError';

  function preprocess(str) {
    // Turn a string into an array of code points,
    // following the preprocessing cleanup rules.
    var codepoints = [];

    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);

      if (code == 0xd && str.charCodeAt(i + 1) == 0xa) {
        code = 0xa;
        i++;
      }

      if (code == 0xd || code == 0xc) code = 0xa;
      if (code == 0x0) code = 0xfffd;

      if (between(code, 0xd800, 0xdbff) && between(str.charCodeAt(i + 1), 0xdc00, 0xdfff)) {
        // Decode a surrogate pair into an astral codepoint.
        var lead = code - 0xd800;
        var trail = str.charCodeAt(i + 1) - 0xdc00;
        code = Math.pow(2, 16) + lead * Math.pow(2, 10) + trail;
        i++;
      }

      codepoints.push(code);
    }

    return codepoints;
  }

  function stringFromCode(code) {
    if (code <= 0xffff) return String.fromCharCode(code); // Otherwise, encode astral char as surrogate pair.

    code -= Math.pow(2, 16);
    var lead = Math.floor(code / Math.pow(2, 10)) + 0xd800;
    var trail = code % Math.pow(2, 10) + 0xdc00;
    return String.fromCharCode(lead) + String.fromCharCode(trail);
  }

  function tokenize(str) {
    str = preprocess(str);
    var i = -1;
    var tokens = [];
    var code; // Line number information.

    var line = 0;
    var column = 0; // The only use of lastLineLength is in reconsume().

    var lastLineLength = 0;

    var incrLineno = function () {
      line += 1;
      lastLineLength = column;
      column = 0;
    };

    var locStart = {
      line: line,
      column: column
    };

    var codepoint = function (i) {
      if (i >= str.length) {
        return -1;
      }

      return str[i];
    };

    var next = function (num) {
      if (num === undefined) num = 1;
      if (num > 3) throw "Spec Error: no more than three codepoints of lookahead.";
      return codepoint(i + num);
    };

    var consume = function (num) {
      if (num === undefined) num = 1;
      i += num;
      code = codepoint(i);
      if (newline(code)) incrLineno();else column += num; //console.log('Consume '+i+' '+String.fromCharCode(code) + ' 0x' + code.toString(16));

      return true;
    };

    var reconsume = function () {
      i -= 1;

      if (newline(code)) {
        line -= 1;
        column = lastLineLength;
      } else {
        column -= 1;
      }

      locStart.line = line;
      locStart.column = column;
      return true;
    };

    var eof = function (codepoint) {
      if (codepoint === undefined) codepoint = code;
      return codepoint == -1;
    };

    var donothing = function () {};

    var parseerror = function () {
      console.log("Parse error at index " + i + ", processing codepoint 0x" + code.toString(16) + ".");
      return true;
    };

    var consumeAToken = function () {
      consumeComments();
      consume();

      if (whitespace(code)) {
        while (whitespace(next())) consume();

        return new WhitespaceToken();
      } else if (code == 0x22) return consumeAStringToken();else if (code == 0x23) {
        if (namechar(next()) || areAValidEscape(next(1), next(2))) {
          var token = new HashToken();
          if (wouldStartAnIdentifier(next(1), next(2), next(3))) token.type = "id";
          token.value = consumeAName();
          return token;
        } else {
          return new DelimToken(code);
        }
      } else if (code == 0x24) {
        if (next() == 0x3d) {
          consume();
          return new SuffixMatchToken();
        } else {
          return new DelimToken(code);
        }
      } else if (code == 0x27) return consumeAStringToken();else if (code == 0x28) return new OpenParenToken();else if (code == 0x29) return new CloseParenToken();else if (code == 0x2a) {
        if (next() == 0x3d) {
          consume();
          return new SubstringMatchToken();
        } else {
          return new DelimToken(code);
        }
      } else if (code == 0x2b) {
        if (startsWithANumber()) {
          reconsume();
          return consumeANumericToken();
        } else {
          return new DelimToken(code);
        }
      } else if (code == 0x2c) return new CommaToken();else if (code == 0x2d) {
        if (startsWithANumber()) {
          reconsume();
          return consumeANumericToken();
        } else if (next(1) == 0x2d && next(2) == 0x3e) {
          consume(2);
          return new CDCToken();
        } else if (startsWithAnIdentifier()) {
          reconsume();
          return consumeAnIdentlikeToken();
        } else {
          return new DelimToken(code);
        }
      } else if (code == 0x2e) {
        if (startsWithANumber()) {
          reconsume();
          return consumeANumericToken();
        } else {
          return new DelimToken(code);
        }
      } else if (code == 0x3a) return new ColonToken();else if (code == 0x3b) return new SemicolonToken();else if (code == 0x3c) {
        if (next(1) == 0x21 && next(2) == 0x2d && next(3) == 0x2d) {
          consume(3);
          return new CDOToken();
        } else {
          return new DelimToken(code);
        }
      } else if (code == 0x40) {
        if (wouldStartAnIdentifier(next(1), next(2), next(3))) {
          return new AtKeywordToken(consumeAName());
        } else {
          return new DelimToken(code);
        }
      } else if (code == 0x5b) return new OpenSquareToken();else if (code == 0x5c) {
        if (startsWithAValidEscape()) {
          reconsume();
          return consumeAnIdentlikeToken();
        } else {
          parseerror();
          return new DelimToken(code);
        }
      } else if (code == 0x5d) return new CloseSquareToken();else if (code == 0x5e) {
        if (next() == 0x3d) {
          consume();
          return new PrefixMatchToken();
        } else {
          return new DelimToken(code);
        }
      } else if (code == 0x7b) return new OpenCurlyToken();else if (code == 0x7c) {
        if (next() == 0x3d) {
          consume();
          return new DashMatchToken();
        } else if (next() == 0x7c) {
          consume();
          return new ColumnToken();
        } else {
          return new DelimToken(code);
        }
      } else if (code == 0x7d) return new CloseCurlyToken();else if (code == 0x7e) {
        if (next() == 0x3d) {
          consume();
          return new IncludeMatchToken();
        } else {
          return new DelimToken(code);
        }
      } else if (digit(code)) {
        reconsume();
        return consumeANumericToken();
      } else if (namestartchar(code)) {
        reconsume();
        return consumeAnIdentlikeToken();
      } else if (eof()) return new EOFToken();else return new DelimToken(code);
    };

    var consumeComments = function () {
      while (next(1) == 0x2f && next(2) == 0x2a) {
        consume(2);

        while (true) {
          consume();

          if (code == 0x2a && next() == 0x2f) {
            consume();
            break;
          } else if (eof()) {
            parseerror();
            return;
          }
        }
      }
    };

    var consumeANumericToken = function () {
      var num = consumeANumber();

      if (wouldStartAnIdentifier(next(1), next(2), next(3))) {
        var token = new DimensionToken();
        token.value = num.value;
        token.repr = num.repr;
        token.type = num.type;
        token.unit = consumeAName();
        return token;
      } else if (next() == 0x25) {
        consume();
        var token = new PercentageToken();
        token.value = num.value;
        token.repr = num.repr;
        return token;
      } else {
        var token = new NumberToken();
        token.value = num.value;
        token.repr = num.repr;
        token.type = num.type;
        return token;
      }
    };

    var consumeAnIdentlikeToken = function () {
      var str = consumeAName();

      if (str.toLowerCase() == "url" && next() == 0x28) {
        consume();

        while (whitespace(next(1)) && whitespace(next(2))) consume();

        if (next() == 0x22 || next() == 0x27) {
          return new FunctionToken(str);
        } else if (whitespace(next()) && (next(2) == 0x22 || next(2) == 0x27)) {
          return new FunctionToken(str);
        } else {
          return consumeAURLToken();
        }
      } else if (next() == 0x28) {
        consume();
        return new FunctionToken(str);
      } else {
        return new IdentToken(str);
      }
    };

    var consumeAStringToken = function (endingCodePoint) {
      if (endingCodePoint === undefined) endingCodePoint = code;
      var string = "";

      while (consume()) {
        if (code == endingCodePoint || eof()) {
          return new StringToken(string);
        } else if (newline(code)) {
          parseerror();
          reconsume();
          return new BadStringToken();
        } else if (code == 0x5c) {
          if (eof(next())) {
            donothing();
          } else if (newline(next())) {
            consume();
          } else {
            string += stringFromCode(consumeEscape());
          }
        } else {
          string += stringFromCode(code);
        }
      }
    };

    var consumeAURLToken = function () {
      var token = new URLToken("");

      while (whitespace(next())) consume();

      if (eof(next())) return token;

      while (consume()) {
        if (code == 0x29 || eof()) {
          return token;
        } else if (whitespace(code)) {
          while (whitespace(next())) consume();

          if (next() == 0x29 || eof(next())) {
            consume();
            return token;
          } else {
            consumeTheRemnantsOfABadURL();
            return new BadURLToken();
          }
        } else if (code == 0x22 || code == 0x27 || code == 0x28 || nonprintable(code)) {
          parseerror();
          consumeTheRemnantsOfABadURL();
          return new BadURLToken();
        } else if (code == 0x5c) {
          if (startsWithAValidEscape()) {
            token.value += stringFromCode(consumeEscape());
          } else {
            parseerror();
            consumeTheRemnantsOfABadURL();
            return new BadURLToken();
          }
        } else {
          token.value += stringFromCode(code);
        }
      }
    };

    var consumeEscape = function () {
      // Assume the the current character is the \
      // and the next code point is not a newline.
      consume();

      if (hexdigit(code)) {
        // Consume 1-6 hex digits
        var digits = [code];

        for (var total = 0; total < 5; total++) {
          if (hexdigit(next())) {
            consume();
            digits.push(code);
          } else {
            break;
          }
        }

        if (whitespace(next())) consume();
        var value = parseInt(digits.map(function (x) {
          return String.fromCharCode(x);
        }).join(''), 16);
        if (value > maximumallowedcodepoint) value = 0xfffd;
        return value;
      } else if (eof()) {
        return 0xfffd;
      } else {
        return code;
      }
    };

    var areAValidEscape = function (c1, c2) {
      if (c1 != 0x5c) return false;
      if (newline(c2)) return false;
      return true;
    };

    var startsWithAValidEscape = function () {
      return areAValidEscape(code, next());
    };

    var wouldStartAnIdentifier = function (c1, c2, c3) {
      if (c1 == 0x2d) {
        return namestartchar(c2) || c2 == 0x2d || areAValidEscape(c2, c3);
      } else if (namestartchar(c1)) {
        return true;
      } else if (c1 == 0x5c) {
        return areAValidEscape(c1, c2);
      } else {
        return false;
      }
    };

    var startsWithAnIdentifier = function () {
      return wouldStartAnIdentifier(code, next(1), next(2));
    };

    var wouldStartANumber = function (c1, c2, c3) {
      if (c1 == 0x2b || c1 == 0x2d) {
        if (digit(c2)) return true;
        if (c2 == 0x2e && digit(c3)) return true;
        return false;
      } else if (c1 == 0x2e) {
        if (digit(c2)) return true;
        return false;
      } else if (digit(c1)) {
        return true;
      } else {
        return false;
      }
    };

    var startsWithANumber = function () {
      return wouldStartANumber(code, next(1), next(2));
    };

    var consumeAName = function () {
      var result = "";

      while (consume()) {
        if (namechar(code)) {
          result += stringFromCode(code);
        } else if (startsWithAValidEscape()) {
          result += stringFromCode(consumeEscape());
        } else {
          reconsume();
          return result;
        }
      }
    };

    var consumeANumber = function () {
      var repr = [];
      var type = "integer";

      if (next() == 0x2b || next() == 0x2d) {
        consume();
        repr += stringFromCode(code);
      }

      while (digit(next())) {
        consume();
        repr += stringFromCode(code);
      }

      if (next(1) == 0x2e && digit(next(2))) {
        consume();
        repr += stringFromCode(code);
        consume();
        repr += stringFromCode(code);
        type = "number";

        while (digit(next())) {
          consume();
          repr += stringFromCode(code);
        }
      }

      var c1 = next(1),
          c2 = next(2),
          c3 = next(3);

      if ((c1 == 0x45 || c1 == 0x65) && digit(c2)) {
        consume();
        repr += stringFromCode(code);
        consume();
        repr += stringFromCode(code);
        type = "number";

        while (digit(next())) {
          consume();
          repr += stringFromCode(code);
        }
      } else if ((c1 == 0x45 || c1 == 0x65) && (c2 == 0x2b || c2 == 0x2d) && digit(c3)) {
        consume();
        repr += stringFromCode(code);
        consume();
        repr += stringFromCode(code);
        consume();
        repr += stringFromCode(code);
        type = "number";

        while (digit(next())) {
          consume();
          repr += stringFromCode(code);
        }
      }

      var value = convertAStringToANumber(repr);
      return {
        type: type,
        value: value,
        repr: repr
      };
    };

    var convertAStringToANumber = function (string) {
      // CSS's number rules are identical to JS, afaik.
      return +string;
    };

    var consumeTheRemnantsOfABadURL = function () {
      while (consume()) {
        if (code == 0x29 || eof()) {
          return;
        } else if (startsWithAValidEscape()) {
          consumeEscape();
          donothing();
        } else {
          donothing();
        }
      }
    };

    var iterationCount = 0;

    while (!eof(next())) {
      tokens.push(consumeAToken());
      iterationCount++;
      if (iterationCount > str.length * 2) return "I'm infinite-looping!";
    }

    return tokens;
  }

  function CSSParserToken() {
    throw "Abstract Base Class";
  }

  CSSParserToken.prototype.toJSON = function () {
    return {
      token: this.tokenType
    };
  };

  CSSParserToken.prototype.toString = function () {
    return this.tokenType;
  };

  CSSParserToken.prototype.toSource = function () {
    return '' + this;
  };

  function BadStringToken() {
    return this;
  }

  BadStringToken.prototype = Object.create(CSSParserToken.prototype);
  BadStringToken.prototype.tokenType = "BADSTRING";

  function BadURLToken() {
    return this;
  }

  BadURLToken.prototype = Object.create(CSSParserToken.prototype);
  BadURLToken.prototype.tokenType = "BADURL";

  function WhitespaceToken() {
    return this;
  }

  WhitespaceToken.prototype = Object.create(CSSParserToken.prototype);
  WhitespaceToken.prototype.tokenType = "WHITESPACE";

  WhitespaceToken.prototype.toString = function () {
    return "WS";
  };

  WhitespaceToken.prototype.toSource = function () {
    return " ";
  };

  function CDOToken() {
    return this;
  }

  CDOToken.prototype = Object.create(CSSParserToken.prototype);
  CDOToken.prototype.tokenType = "CDO";

  CDOToken.prototype.toSource = function () {
    return "<!--";
  };

  function CDCToken() {
    return this;
  }

  CDCToken.prototype = Object.create(CSSParserToken.prototype);
  CDCToken.prototype.tokenType = "CDC";

  CDCToken.prototype.toSource = function () {
    return "-->";
  };

  function ColonToken() {
    return this;
  }

  ColonToken.prototype = Object.create(CSSParserToken.prototype);
  ColonToken.prototype.tokenType = ":";

  function SemicolonToken() {
    return this;
  }

  SemicolonToken.prototype = Object.create(CSSParserToken.prototype);
  SemicolonToken.prototype.tokenType = ";";

  function CommaToken() {
    return this;
  }

  CommaToken.prototype = Object.create(CSSParserToken.prototype);
  CommaToken.prototype.tokenType = ",";

  function GroupingToken() {
    throw "Abstract Base Class";
  }

  GroupingToken.prototype = Object.create(CSSParserToken.prototype);

  function OpenCurlyToken() {
    this.value = "{";
    this.mirror = "}";
    return this;
  }

  OpenCurlyToken.prototype = Object.create(GroupingToken.prototype);
  OpenCurlyToken.prototype.tokenType = "{";

  function CloseCurlyToken() {
    this.value = "}";
    this.mirror = "{";
    return this;
  }

  CloseCurlyToken.prototype = Object.create(GroupingToken.prototype);
  CloseCurlyToken.prototype.tokenType = "}";

  function OpenSquareToken() {
    this.value = "[";
    this.mirror = "]";
    return this;
  }

  OpenSquareToken.prototype = Object.create(GroupingToken.prototype);
  OpenSquareToken.prototype.tokenType = "[";

  function CloseSquareToken() {
    this.value = "]";
    this.mirror = "[";
    return this;
  }

  CloseSquareToken.prototype = Object.create(GroupingToken.prototype);
  CloseSquareToken.prototype.tokenType = "]";

  function OpenParenToken() {
    this.value = "(";
    this.mirror = ")";
    return this;
  }

  OpenParenToken.prototype = Object.create(GroupingToken.prototype);
  OpenParenToken.prototype.tokenType = "(";

  function CloseParenToken() {
    this.value = ")";
    this.mirror = "(";
    return this;
  }

  CloseParenToken.prototype = Object.create(GroupingToken.prototype);
  CloseParenToken.prototype.tokenType = ")";

  function IncludeMatchToken() {
    return this;
  }

  IncludeMatchToken.prototype = Object.create(CSSParserToken.prototype);
  IncludeMatchToken.prototype.tokenType = "~=";

  function DashMatchToken() {
    return this;
  }

  DashMatchToken.prototype = Object.create(CSSParserToken.prototype);
  DashMatchToken.prototype.tokenType = "|=";

  function PrefixMatchToken() {
    return this;
  }

  PrefixMatchToken.prototype = Object.create(CSSParserToken.prototype);
  PrefixMatchToken.prototype.tokenType = "^=";

  function SuffixMatchToken() {
    return this;
  }

  SuffixMatchToken.prototype = Object.create(CSSParserToken.prototype);
  SuffixMatchToken.prototype.tokenType = "$=";

  function SubstringMatchToken() {
    return this;
  }

  SubstringMatchToken.prototype = Object.create(CSSParserToken.prototype);
  SubstringMatchToken.prototype.tokenType = "*=";

  function ColumnToken() {
    return this;
  }

  ColumnToken.prototype = Object.create(CSSParserToken.prototype);
  ColumnToken.prototype.tokenType = "||";

  function EOFToken() {
    return this;
  }

  EOFToken.prototype = Object.create(CSSParserToken.prototype);
  EOFToken.prototype.tokenType = "EOF";

  EOFToken.prototype.toSource = function () {
    return "";
  };

  function DelimToken(code) {
    this.value = stringFromCode(code);
    return this;
  }

  DelimToken.prototype = Object.create(CSSParserToken.prototype);
  DelimToken.prototype.tokenType = "DELIM";

  DelimToken.prototype.toString = function () {
    return "DELIM(" + this.value + ")";
  };

  DelimToken.prototype.toJSON = function () {
    var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
    json.value = this.value;
    return json;
  };

  DelimToken.prototype.toSource = function () {
    if (this.value == "\\") return "\\\n";else return this.value;
  };

  function StringValuedToken() {
    throw "Abstract Base Class";
  }

  StringValuedToken.prototype = Object.create(CSSParserToken.prototype);

  StringValuedToken.prototype.ASCIIMatch = function (str) {
    return this.value.toLowerCase() == str.toLowerCase();
  };

  StringValuedToken.prototype.toJSON = function () {
    var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
    json.value = this.value;
    return json;
  };

  function IdentToken(val) {
    this.value = val;
  }

  IdentToken.prototype = Object.create(StringValuedToken.prototype);
  IdentToken.prototype.tokenType = "IDENT";

  IdentToken.prototype.toString = function () {
    return "IDENT(" + this.value + ")";
  };

  IdentToken.prototype.toSource = function () {
    return escapeIdent(this.value);
  };

  function FunctionToken(val) {
    this.value = val;
    this.mirror = ")";
  }

  FunctionToken.prototype = Object.create(StringValuedToken.prototype);
  FunctionToken.prototype.tokenType = "FUNCTION";

  FunctionToken.prototype.toString = function () {
    return "FUNCTION(" + this.value + ")";
  };

  FunctionToken.prototype.toSource = function () {
    return escapeIdent(this.value) + "(";
  };

  function AtKeywordToken(val) {
    this.value = val;
  }

  AtKeywordToken.prototype = Object.create(StringValuedToken.prototype);
  AtKeywordToken.prototype.tokenType = "AT-KEYWORD";

  AtKeywordToken.prototype.toString = function () {
    return "AT(" + this.value + ")";
  };

  AtKeywordToken.prototype.toSource = function () {
    return "@" + escapeIdent(this.value);
  };

  function HashToken(val) {
    this.value = val;
    this.type = "unrestricted";
  }

  HashToken.prototype = Object.create(StringValuedToken.prototype);
  HashToken.prototype.tokenType = "HASH";

  HashToken.prototype.toString = function () {
    return "HASH(" + this.value + ")";
  };

  HashToken.prototype.toJSON = function () {
    var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
    json.value = this.value;
    json.type = this.type;
    return json;
  };

  HashToken.prototype.toSource = function () {
    if (this.type == "id") {
      return "#" + escapeIdent(this.value);
    } else {
      return "#" + escapeHash(this.value);
    }
  };

  function StringToken(val) {
    this.value = val;
  }

  StringToken.prototype = Object.create(StringValuedToken.prototype);
  StringToken.prototype.tokenType = "STRING";

  StringToken.prototype.toString = function () {
    return '"' + escapeString(this.value) + '"';
  };

  function URLToken(val) {
    this.value = val;
  }

  URLToken.prototype = Object.create(StringValuedToken.prototype);
  URLToken.prototype.tokenType = "URL";

  URLToken.prototype.toString = function () {
    return "URL(" + this.value + ")";
  };

  URLToken.prototype.toSource = function () {
    return 'url("' + escapeString(this.value) + '")';
  };

  function NumberToken() {
    this.value = null;
    this.type = "integer";
    this.repr = "";
  }

  NumberToken.prototype = Object.create(CSSParserToken.prototype);
  NumberToken.prototype.tokenType = "NUMBER";

  NumberToken.prototype.toString = function () {
    if (this.type == "integer") return "INT(" + this.value + ")";
    return "NUMBER(" + this.value + ")";
  };

  NumberToken.prototype.toJSON = function () {
    var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
    json.value = this.value;
    json.type = this.type;
    json.repr = this.repr;
    return json;
  };

  NumberToken.prototype.toSource = function () {
    return this.repr;
  };

  function PercentageToken() {
    this.value = null;
    this.repr = "";
  }

  PercentageToken.prototype = Object.create(CSSParserToken.prototype);
  PercentageToken.prototype.tokenType = "PERCENTAGE";

  PercentageToken.prototype.toString = function () {
    return "PERCENTAGE(" + this.value + ")";
  };

  PercentageToken.prototype.toJSON = function () {
    var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
    json.value = this.value;
    json.repr = this.repr;
    return json;
  };

  PercentageToken.prototype.toSource = function () {
    return this.repr + "%";
  };

  function DimensionToken() {
    this.value = null;
    this.type = "integer";
    this.repr = "";
    this.unit = "";
  }

  DimensionToken.prototype = Object.create(CSSParserToken.prototype);
  DimensionToken.prototype.tokenType = "DIMENSION";

  DimensionToken.prototype.toString = function () {
    return "DIM(" + this.value + "," + this.unit + ")";
  };

  DimensionToken.prototype.toJSON = function () {
    var json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
    json.value = this.value;
    json.type = this.type;
    json.repr = this.repr;
    json.unit = this.unit;
    return json;
  };

  DimensionToken.prototype.toSource = function () {
    var source = this.repr;
    var unit = escapeIdent(this.unit);

    if (unit[0].toLowerCase() == "e" && (unit[1] == "-" || between(unit.charCodeAt(1), 0x30, 0x39))) {
      // Unit is ambiguous with scinot
      // Remove the leading "e", replace with escape.
      unit = "\\65 " + unit.slice(1, unit.length);
    }

    return source + unit;
  };

  function escapeIdent(string) {
    string = '' + string;
    var result = '';
    var firstcode = string.charCodeAt(0);

    for (var i = 0; i < string.length; i++) {
      var code = string.charCodeAt(i);

      if (code == 0x0) {
        throw new InvalidCharacterError('Invalid character: the input contains U+0000.');
      }

      if (between(code, 0x1, 0x1f) || code == 0x7f || i == 0 && between(code, 0x30, 0x39) || i == 1 && between(code, 0x30, 0x39) && firstcode == 0x2d) {
        result += '\\' + code.toString(16) + ' ';
      } else if (code >= 0x80 || code == 0x2d || code == 0x5f || between(code, 0x30, 0x39) || between(code, 0x41, 0x5a) || between(code, 0x61, 0x7a)) {
        result += string[i];
      } else {
        result += '\\' + string[i];
      }
    }

    return result;
  }

  function escapeHash(string) {
    // Escapes the contents of "unrestricted"-type hash tokens.
    // Won't preserve the ID-ness of "id"-type hash tokens;
    // use escapeIdent() for that.
    string = '' + string;
    var result = '';
    var firstcode = string.charCodeAt(0);

    for (var i = 0; i < string.length; i++) {
      var code = string.charCodeAt(i);

      if (code == 0x0) {
        throw new InvalidCharacterError('Invalid character: the input contains U+0000.');
      }

      if (code >= 0x80 || code == 0x2d || code == 0x5f || between(code, 0x30, 0x39) || between(code, 0x41, 0x5a) || between(code, 0x61, 0x7a)) {
        result += string[i];
      } else {
        result += '\\' + code.toString(16) + ' ';
      }
    }

    return result;
  }

  function escapeString(string) {
    string = '' + string;
    var result = '';

    for (var i = 0; i < string.length; i++) {
      var code = string.charCodeAt(i);

      if (code == 0x0) {
        throw new InvalidCharacterError('Invalid character: the input contains U+0000.');
      }

      if (between(code, 0x1, 0x1f) || code == 0x7f) {
        result += '\\' + code.toString(16) + ' ';
      } else if (code == 0x22 || code == 0x5c) {
        result += '\\' + string[i];
      } else {
        result += string[i];
      }
    }

    return result;
  } // Exportation.


  exports.tokenize = tokenize;
  exports.IdentToken = IdentToken;
  exports.FunctionToken = FunctionToken;
  exports.AtKeywordToken = AtKeywordToken;
  exports.HashToken = HashToken;
  exports.StringToken = StringToken;
  exports.BadStringToken = BadStringToken;
  exports.URLToken = URLToken;
  exports.BadURLToken = BadURLToken;
  exports.DelimToken = DelimToken;
  exports.NumberToken = NumberToken;
  exports.PercentageToken = PercentageToken;
  exports.DimensionToken = DimensionToken;
  exports.IncludeMatchToken = IncludeMatchToken;
  exports.DashMatchToken = DashMatchToken;
  exports.PrefixMatchToken = PrefixMatchToken;
  exports.SuffixMatchToken = SuffixMatchToken;
  exports.SubstringMatchToken = SubstringMatchToken;
  exports.ColumnToken = ColumnToken;
  exports.WhitespaceToken = WhitespaceToken;
  exports.CDOToken = CDOToken;
  exports.CDCToken = CDCToken;
  exports.ColonToken = ColonToken;
  exports.SemicolonToken = SemicolonToken;
  exports.CommaToken = CommaToken;
  exports.OpenParenToken = OpenParenToken;
  exports.CloseParenToken = CloseParenToken;
  exports.OpenSquareToken = OpenSquareToken;
  exports.CloseSquareToken = CloseSquareToken;
  exports.OpenCurlyToken = OpenCurlyToken;
  exports.CloseCurlyToken = CloseCurlyToken;
  exports.EOFToken = EOFToken;
  exports.CSSParserToken = CSSParserToken;
  exports.GroupingToken = GroupingToken;
});

/***/ }),

/***/ "./src/server/common/selectorParser.ts":
/*!*********************************************!*\
  !*** ./src/server/common/selectorParser.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSelector = parseSelector;
exports.customCSSNames = void 0;

var _cssParser = __webpack_require__(/*! ./cssParser */ "./src/server/common/cssParser.ts");

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
const customCSSNames = new Set(['not', 'is', 'where', 'has', 'scope', 'light', 'visible', 'text', 'text-matches', 'text-is', 'has-text', 'above', 'below', 'right-of', 'left-of', 'near', 'nth-match']);
exports.customCSSNames = customCSSNames;

function parseSelector(selector) {
  const result = parseSelectorString(selector);
  const parts = result.parts.map(part => {
    if (part.name === 'css' || part.name === 'css:light') {
      if (part.name === 'css:light') part.body = ':light(' + part.body + ')';
      const parsedCSS = (0, _cssParser.parseCSS)(part.body, customCSSNames);
      return {
        name: 'css',
        body: parsedCSS.selector
      };
    }

    return part;
  });
  return {
    capture: result.capture,
    parts
  };
}

function parseSelectorString(selector) {
  let index = 0;
  let quote;
  let start = 0;
  const result = {
    parts: []
  };

  const append = () => {
    const part = selector.substring(start, index).trim();
    const eqIndex = part.indexOf('=');
    let name;
    let body;

    if (eqIndex !== -1 && part.substring(0, eqIndex).trim().match(/^[a-zA-Z_0-9-+:*]+$/)) {
      name = part.substring(0, eqIndex).trim();
      body = part.substring(eqIndex + 1);
    } else if (part.length > 1 && part[0] === '"' && part[part.length - 1] === '"') {
      name = 'text';
      body = part;
    } else if (part.length > 1 && part[0] === "'" && part[part.length - 1] === "'") {
      name = 'text';
      body = part;
    } else if (/^\(*\/\//.test(part) || part.startsWith('..')) {
      // If selector starts with '//' or '//' prefixed with multiple opening
      // parenthesis, consider xpath. @see https://github.com/microsoft/playwright/issues/817
      // If selector starts with '..', consider xpath as well.
      name = 'xpath';
      body = part;
    } else {
      name = 'css';
      body = part;
    }

    let capture = false;

    if (name[0] === '*') {
      capture = true;
      name = name.substring(1);
    }

    result.parts.push({
      name,
      body
    });

    if (capture) {
      if (result.capture !== undefined) throw new Error(`Only one of the selectors can capture using * modifier`);
      result.capture = result.parts.length - 1;
    }
  };

  if (!selector.includes('>>')) {
    index = selector.length;
    append();
    return result;
  }

  while (index < selector.length) {
    const c = selector[index];

    if (c === '\\' && index + 1 < selector.length) {
      index += 2;
    } else if (c === quote) {
      quote = undefined;
      index++;
    } else if (!quote && (c === '"' || c === '\'' || c === '`')) {
      quote = c;
      index++;
    } else if (!quote && c === '>' && selector[index + 1] === '>') {
      append();
      index += 2;
      start = index;
    } else {
      index++;
    }
  }

  append();
  return result;
}

/***/ }),

/***/ "./src/server/injected/selectorEvaluator.ts":
/*!**************************************************!*\
  !*** ./src/server/injected/selectorEvaluator.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

var _selectorParser = __webpack_require__(/*! ../common/selectorParser */ "./src/server/common/selectorParser.ts");

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

/***/ }),

/***/ "./src/server/supplements/injected/consoleApi.ts":
/*!*******************************************************!*\
  !*** ./src/server/supplements/injected/consoleApi.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ConsoleAPI = void 0;

var _selectorGenerator = __webpack_require__(/*! ./selectorGenerator */ "./src/server/supplements/injected/selectorGenerator.ts");

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
class ConsoleAPI {
  constructor(injectedScript) {
    this._injectedScript = void 0;
    this._injectedScript = injectedScript;
    if (window.playwright) return;
    window.playwright = {
      $: (selector, strict) => this._querySelector(selector, !!strict),
      $$: selector => this._querySelectorAll(selector),
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
    return (0, _selectorGenerator.generateSelector)(this._injectedScript, element).selector;
  }

  _resume() {
    window._playwrightResume().catch(() => {});
  }

}

exports.ConsoleAPI = ConsoleAPI;
var _default = ConsoleAPI;
exports.default = _default;

/***/ }),

/***/ "./src/server/supplements/injected/selectorGenerator.ts":
/*!**************************************************************!*\
  !*** ./src/server/supplements/injected/selectorGenerator.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.querySelector = querySelector;
exports.generateSelector = generateSelector;

var _selectorEvaluator = __webpack_require__(/*! ../../injected/selectorEvaluator */ "./src/server/injected/selectorEvaluator.ts");

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
const cacheAllowText = new Map();
const cacheDisallowText = new Map();

function querySelector(injectedScript, selector, ownerDocument) {
  try {
    const parsedSelector = injectedScript.parseSelector(selector);
    return {
      selector,
      elements: injectedScript.querySelectorAll(parsedSelector, ownerDocument)
    };
  } catch (e) {
    return {
      selector,
      elements: []
    };
  }
}

function generateSelector(injectedScript, targetElement) {
  injectedScript._evaluator.begin();

  try {
    targetElement = targetElement.closest('button,select,input,[role=button],[role=checkbox],[role=radio]') || targetElement;
    const targetTokens = generateSelectorFor(injectedScript, targetElement);
    const bestTokens = targetTokens || [cssFallback(injectedScript, targetElement)];
    const selector = joinTokens(bestTokens);
    const parsedSelector = injectedScript.parseSelector(selector);
    return {
      selector,
      elements: injectedScript.querySelectorAll(parsedSelector, targetElement.ownerDocument)
    };
  } finally {
    cacheAllowText.clear();
    cacheDisallowText.clear();

    injectedScript._evaluator.end();
  }
}

function filterRegexTokens(textCandidates) {
  // Filter out regex-based selectors for better performance.
  return textCandidates.filter(c => c[0].selector[0] !== '/');
}

function generateSelectorFor(injectedScript, targetElement) {
  if (targetElement.ownerDocument.documentElement === targetElement) return [{
    engine: 'css',
    selector: 'html',
    score: 1
  }];

  const calculate = (element, allowText) => {
    const allowNthMatch = element === targetElement;
    let textCandidates = allowText ? buildTextCandidates(injectedScript, element, element === targetElement).map(token => [token]) : [];

    if (element !== targetElement) {
      // Do not use regex for parent elements (for performance).
      textCandidates = filterRegexTokens(textCandidates);
    }

    const noTextCandidates = buildCandidates(injectedScript, element).map(token => [token]); // First check all text and non-text candidates for the element.

    let result = chooseFirstSelector(injectedScript, targetElement.ownerDocument, element, [...textCandidates, ...noTextCandidates], allowNthMatch); // Do not use regex for chained selectors (for performance).

    textCandidates = filterRegexTokens(textCandidates);

    const checkWithText = textCandidatesToUse => {
      // Use the deepest possible text selector - works pretty good and saves on compute time.
      const allowParentText = allowText && !textCandidatesToUse.length;
      const candidates = [...textCandidatesToUse, ...noTextCandidates].filter(c => {
        if (!result) return true;
        return combineScores(c) < combineScores(result);
      }); // This is best theoretically possible candidate from the current parent.
      // We use the fact that widening the scope to grand-parent makes any selector
      // even less likely to match.

      let bestPossibleInParent = candidates[0];
      if (!bestPossibleInParent) return;

      for (let parent = parentElementOrShadowHost(element); parent; parent = parentElementOrShadowHost(parent)) {
        const parentTokens = calculateCached(parent, allowParentText);
        if (!parentTokens) continue; // Even the best selector won't be too good - skip this parent.

        if (result && combineScores([...parentTokens, ...bestPossibleInParent]) >= combineScores(result)) continue; // Update the best candidate that finds "element" in the "parent".

        bestPossibleInParent = chooseFirstSelector(injectedScript, parent, element, candidates, allowNthMatch);
        if (!bestPossibleInParent) return;
        const combined = [...parentTokens, ...bestPossibleInParent];
        if (!result || combineScores(combined) < combineScores(result)) result = combined;
      }
    };

    checkWithText(textCandidates); // Allow skipping text on the target element, and using text on one of the parents.

    if (element === targetElement && textCandidates.length) checkWithText([]);
    return result;
  };

  const calculateCached = (element, allowText) => {
    const cache = allowText ? cacheAllowText : cacheDisallowText;
    let value = cache.get(element);

    if (value === undefined) {
      value = calculate(element, allowText);
      cache.set(element, value);
    }

    return value;
  };

  return calculateCached(targetElement, true);
}

function buildCandidates(injectedScript, element) {
  const candidates = [];

  for (const attribute of ['data-testid', 'data-test-id', 'data-test']) {
    if (element.hasAttribute(attribute)) candidates.push({
      engine: 'css',
      selector: `[${attribute}=${quoteString(element.getAttribute(attribute))}]`,
      score: 1
    });
  }

  if (element.nodeName === 'INPUT') {
    const input = element;
    if (input.placeholder) candidates.push({
      engine: 'css',
      selector: `[placeholder=${quoteString(input.placeholder)}]`,
      score: 10
    });
  }

  if (element.hasAttribute('aria-label')) candidates.push({
    engine: 'css',
    selector: `[aria-label=${quoteString(element.getAttribute('aria-label'))}]`,
    score: 10
  });
  if (element.getAttribute('alt') && ['APPLET', 'AREA', 'IMG', 'INPUT'].includes(element.nodeName)) candidates.push({
    engine: 'css',
    selector: `${element.nodeName.toLowerCase()}[alt=${quoteString(element.getAttribute('alt'))}]`,
    score: 10
  });
  if (element.hasAttribute('role')) candidates.push({
    engine: 'css',
    selector: `${element.nodeName.toLocaleLowerCase()}[role=${quoteString(element.getAttribute('role'))}]`,
    score: 50
  });
  if (element.getAttribute('name') && ['BUTTON', 'FORM', 'FIELDSET', 'IFRAME', 'INPUT', 'KEYGEN', 'OBJECT', 'OUTPUT', 'SELECT', 'TEXTAREA', 'MAP', 'META', 'PARAM'].includes(element.nodeName)) candidates.push({
    engine: 'css',
    selector: `${element.nodeName.toLowerCase()}[name=${quoteString(element.getAttribute('name'))}]`,
    score: 50
  });

  if (['INPUT', 'TEXTAREA'].includes(element.nodeName) && element.getAttribute('type') !== 'hidden') {
    if (element.getAttribute('type')) candidates.push({
      engine: 'css',
      selector: `${element.nodeName.toLowerCase()}[type=${quoteString(element.getAttribute('type'))}]`,
      score: 50
    });
  }

  if (['INPUT', 'TEXTAREA', 'SELECT'].includes(element.nodeName)) candidates.push({
    engine: 'css',
    selector: element.nodeName.toLowerCase(),
    score: 50
  });
  const idAttr = element.getAttribute('id');
  if (idAttr && !isGuidLike(idAttr)) candidates.push({
    engine: 'css',
    selector: makeSelectorForId(idAttr),
    score: 100
  });
  candidates.push({
    engine: 'css',
    selector: element.nodeName.toLocaleLowerCase(),
    score: 200
  });
  return candidates;
}

function buildTextCandidates(injectedScript, element, allowHasText) {
  if (element.nodeName === 'SELECT') return [];
  const text = (0, _selectorEvaluator.elementText)(injectedScript._evaluator, element).full.trim().replace(/\s+/g, ' ').substring(0, 80);
  if (!text) return [];
  const candidates = [];
  let escaped = text;
  if (text.includes('"') || text.includes('>>') || text[0] === '/') escaped = `/.*${escapeForRegex(text)}.*/`;
  candidates.push({
    engine: 'text',
    selector: escaped,
    score: 10
  });

  if (allowHasText && escaped === text) {
    let prefix = element.nodeName.toLocaleLowerCase();
    if (element.hasAttribute('role')) prefix += `[role=${quoteString(element.getAttribute('role'))}]`;
    candidates.push({
      engine: 'css',
      selector: `${prefix}:has-text("${text}")`,
      score: 30
    });
  }

  return candidates;
}

function parentElementOrShadowHost(element) {
  if (element.parentElement) return element.parentElement;
  if (!element.parentNode) return null;
  if (element.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE && element.parentNode.host) return element.parentNode.host;
  return null;
}

function makeSelectorForId(id) {
  return /^[a-zA-Z][a-zA-Z0-9\-\_]+$/.test(id) ? '#' + id : `[id="${id}"]`;
}

function cssFallback(injectedScript, targetElement) {
  const kFallbackScore = 10000000;
  const root = targetElement.ownerDocument;
  const tokens = [];

  function uniqueCSSSelector(prefix) {
    const path = tokens.slice();
    if (prefix) path.unshift(prefix);
    const selector = path.join(' ');
    const parsedSelector = injectedScript.parseSelector(selector);
    const node = injectedScript.querySelector(parsedSelector, targetElement.ownerDocument, false);
    return node === targetElement ? selector : undefined;
  }

  for (let element = targetElement; element && element !== root; element = parentElementOrShadowHost(element)) {
    const nodeName = element.nodeName.toLowerCase(); // Element ID is the strongest signal, use it.

    let bestTokenForLevel = '';

    if (element.id) {
      const token = makeSelectorForId(element.id);
      const selector = uniqueCSSSelector(token);
      if (selector) return {
        engine: 'css',
        selector,
        score: kFallbackScore
      };
      bestTokenForLevel = token;
    }

    const parent = element.parentNode; // Combine class names until unique.

    const classes = [...element.classList];

    for (let i = 0; i < classes.length; ++i) {
      const token = '.' + classes.slice(0, i + 1).join('.');
      const selector = uniqueCSSSelector(token);
      if (selector) return {
        engine: 'css',
        selector,
        score: kFallbackScore
      }; // Even if not unique, does this subset of classes uniquely identify node as a child?

      if (!bestTokenForLevel && parent) {
        const sameClassSiblings = parent.querySelectorAll(token);
        if (sameClassSiblings.length === 1) bestTokenForLevel = token;
      }
    } // Ordinal is the weakest signal.


    if (parent) {
      const siblings = [...parent.children];
      const sameTagSiblings = siblings.filter(sibling => sibling.nodeName.toLowerCase() === nodeName);
      const token = sameTagSiblings.indexOf(element) === 0 ? nodeName : `${nodeName}:nth-child(${1 + siblings.indexOf(element)})`;
      const selector = uniqueCSSSelector(token);
      if (selector) return {
        engine: 'css',
        selector,
        score: kFallbackScore
      };
      if (!bestTokenForLevel) bestTokenForLevel = token;
    } else if (!bestTokenForLevel) {
      bestTokenForLevel = nodeName;
    }

    tokens.unshift(bestTokenForLevel);
  }

  return {
    engine: 'css',
    selector: uniqueCSSSelector(),
    score: kFallbackScore
  };
}

function escapeForRegex(text) {
  return text.replace(/[.*+?^>${}()|[\]\\]/g, '\\$&');
}

function quoteString(text) {
  return `"${text.replaceAll(/"/g, '\\"').replaceAll(/\n/g, '\\n')}"`;
}

function joinTokens(tokens) {
  const parts = [];
  let lastEngine = '';

  for (const {
    engine,
    selector
  } of tokens) {
    if (parts.length && (lastEngine !== 'css' || engine !== 'css' || selector.startsWith(':nth-match('))) parts.push('>>');
    lastEngine = engine;
    if (engine === 'css') parts.push(selector);else parts.push(`${engine}=${selector}`);
  }

  return parts.join(' ');
}

function combineScores(tokens) {
  let score = 0;

  for (let i = 0; i < tokens.length; i++) score += tokens[i].score * (tokens.length - i);

  return score;
}

function chooseFirstSelector(injectedScript, scope, targetElement, selectors, allowNthMatch) {
  const joined = selectors.map(tokens => ({
    tokens,
    score: combineScores(tokens)
  }));
  joined.sort((a, b) => a.score - b.score);
  let bestWithIndex = null;

  for (const {
    tokens
  } of joined) {
    const parsedSelector = injectedScript.parseSelector(joinTokens(tokens));
    const result = injectedScript.querySelectorAll(parsedSelector, scope);
    const index = result.indexOf(targetElement);

    if (index === 0) {
      // We are the first match - found the best selector.
      return tokens;
    } // Otherwise, perhaps we can get nth-match?


    if (!allowNthMatch || bestWithIndex || index === -1 || result.length > 5) continue; // To use nth-match, we must convert everything to css.

    const allCss = tokens.map(token => {
      if (token.engine !== 'text') return token;
      if (token.selector.startsWith('/') && token.selector.endsWith('/')) return {
        engine: 'css',
        selector: `:text-matches("${token.selector.substring(1, token.selector.length - 1)}")`,
        score: token.score
      };
      return {
        engine: 'css',
        selector: `:text("${token.selector}")`,
        score: token.score
      };
    });
    const combined = joinTokens(allCss);
    bestWithIndex = [{
      engine: 'css',
      selector: `:nth-match(${combined}, ${index + 1})`,
      score: combineScores(allCss) + 1000
    }];
  }

  return bestWithIndex;
}

function isGuidLike(id) {
  let lastCharacterType;
  let transitionCount = 0;

  for (let i = 0; i < id.length; ++i) {
    const c = id[i];
    let characterType;
    if (c === '-' || c === '_') continue;
    if (c >= 'a' && c <= 'z') characterType = 'lower';else if (c >= 'A' && c <= 'Z') characterType = 'upper';else if (c >= '0' && c <= '9') characterType = 'digit';else characterType = 'other';

    if (characterType === 'lower' && lastCharacterType === 'upper') {
      lastCharacterType = characterType;
      continue;
    }

    if (lastCharacterType && lastCharacterType !== characterType) ++transitionCount;
    lastCharacterType = characterType;
  }

  return transitionCount >= id.length / 4;
}

/***/ })

/******/ })["default"];