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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/injected/utilityScript.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/server/common/utilityScriptSerializers.ts":
/*!*******************************************************!*\
  !*** ./src/server/common/utilityScriptSerializers.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseEvaluationResultValue = parseEvaluationResultValue;
exports.serializeAsCallArgument = serializeAsCallArgument;

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
function isRegExp(obj) {
  return obj instanceof RegExp || Object.prototype.toString.call(obj) === '[object RegExp]';
}

function isDate(obj) {
  return obj instanceof Date || Object.prototype.toString.call(obj) === '[object Date]';
}

function isError(obj) {
  return obj instanceof Error || obj && obj.__proto__ && obj.__proto__.name === 'Error';
}

function parseEvaluationResultValue(value, handles = []) {
  if (Object.is(value, undefined)) return undefined;

  if (typeof value === 'object' && value) {
    if ('v' in value) {
      if (value.v === 'undefined') return undefined;
      if (value.v === 'null') return null;
      if (value.v === 'NaN') return NaN;
      if (value.v === 'Infinity') return Infinity;
      if (value.v === '-Infinity') return -Infinity;
      if (value.v === '-0') return -0;
      return undefined;
    }

    if ('d' in value) return new Date(value.d);
    if ('r' in value) return new RegExp(value.r.p, value.r.f);
    if ('a' in value) return value.a.map(a => parseEvaluationResultValue(a, handles));

    if ('o' in value) {
      const result = {};

      for (const {
        k,
        v
      } of value.o) result[k] = parseEvaluationResultValue(v, handles);

      return result;
    }

    if ('h' in value) return handles[value.h];
  }

  return value;
}

function serializeAsCallArgument(value, handleSerializer) {
  return serialize(value, handleSerializer, new Set());
}

function serialize(value, handleSerializer, visited) {
  const result = handleSerializer(value);
  if ('fallThrough' in result) value = result.fallThrough;else return result;
  if (visited.has(value)) throw new Error('Argument is a circular structure');
  if (typeof value === 'symbol') return {
    v: 'undefined'
  };
  if (Object.is(value, undefined)) return {
    v: 'undefined'
  };
  if (Object.is(value, null)) return {
    v: 'null'
  };
  if (Object.is(value, NaN)) return {
    v: 'NaN'
  };
  if (Object.is(value, Infinity)) return {
    v: 'Infinity'
  };
  if (Object.is(value, -Infinity)) return {
    v: '-Infinity'
  };
  if (Object.is(value, -0)) return {
    v: '-0'
  };
  if (typeof value === 'boolean') return value;
  if (typeof value === 'number') return value;
  if (typeof value === 'string') return value;

  if (isError(value)) {
    const error = value;

    if ('captureStackTrace' in global.Error) {
      // v8
      return error.stack || '';
    }

    return `${error.name}: ${error.message}\n${error.stack}`;
  }

  if (isDate(value)) return {
    d: value.toJSON()
  };
  if (isRegExp(value)) return {
    r: {
      p: value.source,
      f: value.flags
    }
  };

  if (Array.isArray(value)) {
    const a = [];
    visited.add(value);

    for (let i = 0; i < value.length; ++i) a.push(serialize(value[i], handleSerializer, visited));

    visited.delete(value);
    return {
      a
    };
  }

  if (typeof value === 'object') {
    const o = [];
    visited.add(value);

    for (const name of Object.keys(value)) {
      let item;

      try {
        item = value[name];
      } catch (e) {
        continue; // native bindings will throw sometimes
      }

      if (name === 'toJSON' && typeof item === 'function') o.push({
        k: name,
        v: {
          o: []
        }
      });else o.push({
        k: name,
        v: serialize(item, handleSerializer, visited)
      });
    }

    visited.delete(value);
    return {
      o
    };
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/server/injected/utilityScript.ts":
/*!**********************************************!*\
  !*** ./src/server/injected/utilityScript.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utilityScriptSerializers = __webpack_require__(/*! ../common/utilityScriptSerializers */ "./src/server/common/utilityScriptSerializers.ts");

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
class UtilityScript {
  evaluate(isFunction, returnByValue, expression, argCount, ...argsAndHandles) {
    const args = argsAndHandles.slice(0, argCount);
    const handles = argsAndHandles.slice(argCount);
    const parameters = args.map(a => (0, _utilityScriptSerializers.parseEvaluationResultValue)(a, handles));
    let result = global.eval(expression);

    if (isFunction === true) {
      result = result(...parameters);
    } else if (isFunction === false) {
      result = result;
    } else {
      // auto detect.
      if (typeof result === 'function') result = result(...parameters);
    }

    return returnByValue ? this._promiseAwareJsonValueNoThrow(result) : result;
  }

  jsonValue(returnByValue, value) {
    // Special handling of undefined to work-around multi-step returnByValue handling in WebKit.
    if (Object.is(value, undefined)) return undefined;
    return (0, _utilityScriptSerializers.serializeAsCallArgument)(value, value => ({
      fallThrough: value
    }));
  }

  _promiseAwareJsonValueNoThrow(value) {
    const safeJson = value => {
      try {
        return this.jsonValue(true, value);
      } catch (e) {
        return undefined;
      }
    };

    if (value && typeof value === 'object' && typeof value.then === 'function') {
      return (async () => {
        // By using async function we ensure that return value is a native Promise,
        // and not some overridden Promise in the page.
        // This makes Firefox and WebKit debugging protocols recognize it as a Promise,
        // properly await and return the value.
        const promiseValue = await value;
        return safeJson(promiseValue);
      })();
    }

    return safeJson(value);
  }

}

exports.default = UtilityScript;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

/******/ })["default"];