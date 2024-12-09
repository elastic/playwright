"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expect = void 0;
exports.mergeExpects = mergeExpects;
exports.printReceivedStringContainExpectedSubstring = exports.printReceivedStringContainExpectedResult = void 0;
var _utils = require("playwright-core/lib/utils");
var _matchers = require("./matchers");
var _toMatchSnapshot = require("./toMatchSnapshot");
var _globals = require("../common/globals");
var _util = require("../util");
var _expectBundle = require("../common/expectBundle");
var _testInfo = require("../worker/testInfo");
var _matcherHint = require("./matcherHint");
/**
 * Copyright Microsoft Corporation. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// #region
// Mirrored from https://github.com/facebook/jest/blob/f13abff8df9a0e1148baf3584bcde6d1b479edc7/packages/expect/src/print.ts
/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found here
 * https://github.com/facebook/jest/blob/1547740bbc26400d69f4576bf35645163e942829/LICENSE
 */

// Format substring but do not enclose in double quote marks.
// The replacement is compatible with pretty-format package.
const printSubstring = val => val.replace(/"|\\/g, '\\$&');
const printReceivedStringContainExpectedSubstring = (received, start, length // not end
) => (0, _expectBundle.RECEIVED_COLOR)('"' + printSubstring(received.slice(0, start)) + (0, _expectBundle.INVERTED_COLOR)(printSubstring(received.slice(start, start + length))) + printSubstring(received.slice(start + length)) + '"');
exports.printReceivedStringContainExpectedSubstring = printReceivedStringContainExpectedSubstring;
const printReceivedStringContainExpectedResult = (received, result) => result === null ? (0, _expectBundle.printReceived)(received) : printReceivedStringContainExpectedSubstring(received, result.index, result[0].length);

// #endregion
exports.printReceivedStringContainExpectedResult = printReceivedStringContainExpectedResult;
function createMatchers(actual, info, prefix) {
  return new Proxy((0, _expectBundle.expect)(actual), new ExpectMetaInfoProxyHandler(info, prefix));
}
const getCustomMatchersSymbol = Symbol('get custom matchers');
function qualifiedMatcherName(qualifier, matcherName) {
  return qualifier.join(':') + '$' + matcherName;
}
function createExpect(info, prefix, customMatchers) {
  const expectInstance = new Proxy(_expectBundle.expect, {
    apply: function (target, thisArg, argumentsList) {
      const [actual, messageOrOptions] = argumentsList;
      const message = (0, _utils.isString)(messageOrOptions) ? messageOrOptions : (messageOrOptions === null || messageOrOptions === void 0 ? void 0 : messageOrOptions.message) || info.message;
      const newInfo = {
        ...info,
        message
      };
      if (newInfo.poll) {
        if (typeof actual !== 'function') throw new Error('`expect.poll()` accepts only function as a first argument');
        newInfo.poll.generator = actual;
      }
      return createMatchers(actual, newInfo, prefix);
    },
    get: function (target, property) {
      if (property === 'configure') return configure;
      if (property === 'extend') {
        return matchers => {
          const qualifier = [...prefix, (0, _utils.createGuid)()];
          const wrappedMatchers = {};
          const extendedMatchers = {
            ...customMatchers
          };
          for (const [name, matcher] of Object.entries(matchers)) {
            wrappedMatchers[name] = function (...args) {
              const {
                isNot,
                promise,
                utils
              } = this;
              const newThis = {
                isNot,
                promise,
                utils,
                timeout: currentExpectTimeout()
              };
              newThis.equals = throwUnsupportedExpectMatcherError;
              return matcher.call(newThis, ...args);
            };
            const key = qualifiedMatcherName(qualifier, name);
            wrappedMatchers[key] = wrappedMatchers[name];
            Object.defineProperty(wrappedMatchers[key], 'name', {
              value: name
            });
            extendedMatchers[name] = wrappedMatchers[key];
          }
          _expectBundle.expect.extend(wrappedMatchers);
          return createExpect(info, qualifier, extendedMatchers);
        };
      }
      if (property === 'soft') {
        return (actual, messageOrOptions) => {
          return configure({
            soft: true
          })(actual, messageOrOptions);
        };
      }
      if (property === getCustomMatchersSymbol) return customMatchers;
      if (property === 'poll') {
        return (actual, messageOrOptions) => {
          const poll = (0, _utils.isString)(messageOrOptions) ? {} : messageOrOptions || {};
          return configure({
            _poll: poll
          })(actual, messageOrOptions);
        };
      }
      return _expectBundle.expect[property];
    }
  });
  const configure = configuration => {
    const newInfo = {
      ...info
    };
    if ('message' in configuration) newInfo.message = configuration.message;
    if ('timeout' in configuration) newInfo.timeout = configuration.timeout;
    if ('soft' in configuration) newInfo.isSoft = configuration.soft;
    if ('_poll' in configuration) {
      newInfo.poll = configuration._poll ? {
        ...info.poll,
        generator: () => {}
      } : undefined;
      if (typeof configuration._poll === 'object') {
        var _configuration$_poll$, _configuration$_poll$2;
        newInfo.poll.timeout = (_configuration$_poll$ = configuration._poll.timeout) !== null && _configuration$_poll$ !== void 0 ? _configuration$_poll$ : newInfo.poll.timeout;
        newInfo.poll.intervals = (_configuration$_poll$2 = configuration._poll.intervals) !== null && _configuration$_poll$2 !== void 0 ? _configuration$_poll$2 : newInfo.poll.intervals;
      }
    }
    return createExpect(newInfo, prefix, customMatchers);
  };
  return expectInstance;
}
function throwUnsupportedExpectMatcherError() {
  throw new Error('It looks like you are using custom expect matchers that are not compatible with Playwright. See https://aka.ms/playwright/expect-compatibility');
}
_expectBundle.expect.setState({
  expand: false
});
const customAsyncMatchers = {
  toBeAttached: _matchers.toBeAttached,
  toBeChecked: _matchers.toBeChecked,
  toBeDisabled: _matchers.toBeDisabled,
  toBeEditable: _matchers.toBeEditable,
  toBeEmpty: _matchers.toBeEmpty,
  toBeEnabled: _matchers.toBeEnabled,
  toBeFocused: _matchers.toBeFocused,
  toBeHidden: _matchers.toBeHidden,
  toBeInViewport: _matchers.toBeInViewport,
  toBeOK: _matchers.toBeOK,
  toBeVisible: _matchers.toBeVisible,
  toContainText: _matchers.toContainText,
  toHaveAccessibleDescription: _matchers.toHaveAccessibleDescription,
  toHaveAccessibleName: _matchers.toHaveAccessibleName,
  toHaveAttribute: _matchers.toHaveAttribute,
  toHaveClass: _matchers.toHaveClass,
  toHaveCount: _matchers.toHaveCount,
  toHaveCSS: _matchers.toHaveCSS,
  toHaveId: _matchers.toHaveId,
  toHaveJSProperty: _matchers.toHaveJSProperty,
  toHaveRole: _matchers.toHaveRole,
  toHaveText: _matchers.toHaveText,
  toHaveTitle: _matchers.toHaveTitle,
  toHaveURL: _matchers.toHaveURL,
  toHaveValue: _matchers.toHaveValue,
  toHaveValues: _matchers.toHaveValues,
  toHaveScreenshot: _toMatchSnapshot.toHaveScreenshot,
  toPass: _matchers.toPass
};
const customMatchers = {
  ...customAsyncMatchers,
  toMatchSnapshot: _toMatchSnapshot.toMatchSnapshot
};
class ExpectMetaInfoProxyHandler {
  constructor(info, prefix) {
    this._info = void 0;
    this._prefix = void 0;
    this._info = {
      ...info
    };
    this._prefix = prefix;
  }
  get(target, matcherName, receiver) {
    let matcher = Reflect.get(target, matcherName, receiver);
    if (typeof matcherName !== 'string') return matcher;
    let resolvedMatcherName = matcherName;
    for (let i = this._prefix.length; i > 0; i--) {
      const qualifiedName = qualifiedMatcherName(this._prefix.slice(0, i), matcherName);
      if (Reflect.has(target, qualifiedName)) {
        matcher = Reflect.get(target, qualifiedName, receiver);
        resolvedMatcherName = qualifiedName;
        break;
      }
    }
    if (matcher === undefined) throw new Error(`expect: Property '${matcherName}' not found.`);
    if (typeof matcher !== 'function') {
      if (matcherName === 'not') this._info.isNot = !this._info.isNot;
      return new Proxy(matcher, this);
    }
    if (this._info.poll) {
      if (customAsyncMatchers[matcherName] || matcherName === 'resolves' || matcherName === 'rejects') throw new Error(`\`expect.poll()\` does not support "${matcherName}" matcher.`);
      matcher = (...args) => pollMatcher(resolvedMatcherName, this._info, this._prefix, ...args);
    }
    return (...args) => {
      const testInfo = (0, _globals.currentTestInfo)();
      // We assume that the matcher will read the current expect timeout the first thing.
      setCurrentExpectConfigureTimeout(this._info.timeout);
      if (!testInfo) return matcher.call(target, ...args);
      const customMessage = this._info.message || '';
      const argsSuffix = computeArgsSuffix(matcherName, args);
      const defaultTitle = `expect${this._info.poll ? '.poll' : ''}${this._info.isSoft ? '.soft' : ''}${this._info.isNot ? '.not' : ''}.${matcherName}${argsSuffix}`;
      const title = customMessage || defaultTitle;

      // This looks like it is unnecessary, but it isn't - we need to filter
      // out all the frames that belong to the test runner from caught runtime errors.
      const stackFrames = (0, _util.filteredStackTrace)((0, _utils.captureRawStack)());

      // Enclose toPass in a step to maintain async stacks, toPass matcher is always async.
      const stepInfo = {
        category: 'expect',
        title: (0, _util.trimLongString)(title, 1024),
        params: args[0] ? {
          expected: args[0]
        } : undefined,
        infectParentStepsWithError: this._info.isSoft
      };
      const step = testInfo._addStep(stepInfo);
      const reportStepError = jestError => {
        const error = (0, _matcherHint.isExpectError)(jestError) ? new _matcherHint.ExpectError(jestError, customMessage, stackFrames) : jestError;
        step.complete({
          error
        });
        if (this._info.isSoft) testInfo._failWithError(error);else throw error;
      };
      const finalizer = () => {
        step.complete({});
      };
      try {
        const callback = () => matcher.call(target, ...args);
        // toPass and poll matchers can contain other steps, expects and API calls,
        // so they behave like a retriable step.
        const result = matcherName === 'toPass' || this._info.poll ? _utils.zones.run('stepZone', step, callback) : _utils.zones.run('expectZone', {
          title,
          stepId: step.stepId
        }, callback);
        if (result instanceof Promise) return result.then(finalizer).catch(reportStepError);
        finalizer();
        return result;
      } catch (e) {
        reportStepError(e);
      }
    };
  }
}
async function pollMatcher(qualifiedMatcherName, info, prefix, ...args) {
  var _poll$timeout, _poll$intervals;
  const testInfo = (0, _globals.currentTestInfo)();
  const poll = info.poll;
  const timeout = (_poll$timeout = poll.timeout) !== null && _poll$timeout !== void 0 ? _poll$timeout : currentExpectTimeout();
  const {
    deadline,
    timeoutMessage
  } = testInfo ? testInfo._deadlineForMatcher(timeout) : _testInfo.TestInfoImpl._defaultDeadlineForMatcher(timeout);
  const result = await (0, _utils.pollAgainstDeadline)(async () => {
    if (testInfo && (0, _globals.currentTestInfo)() !== testInfo) return {
      continuePolling: false,
      result: undefined
    };
    const innerInfo = {
      ...info,
      isSoft: false,
      // soft is outside of poll, not inside
      poll: undefined
    };
    const value = await poll.generator();
    try {
      let matchers = createMatchers(value, innerInfo, prefix);
      if (info.isNot) matchers = matchers.not;
      matchers[qualifiedMatcherName](...args);
      return {
        continuePolling: false,
        result: undefined
      };
    } catch (error) {
      return {
        continuePolling: true,
        result: error
      };
    }
  }, deadline, (_poll$intervals = poll.intervals) !== null && _poll$intervals !== void 0 ? _poll$intervals : [100, 250, 500, 1000]);
  if (result.timedOut) {
    const message = result.result ? [result.result.message, '', `Call Log:`, `- ${timeoutMessage}`].join('\n') : timeoutMessage;
    throw new Error(message);
  }
}
let currentExpectConfigureTimeout;
function setCurrentExpectConfigureTimeout(timeout) {
  currentExpectConfigureTimeout = timeout;
}
function currentExpectTimeout() {
  var _testInfo$_projectInt;
  if (currentExpectConfigureTimeout !== undefined) return currentExpectConfigureTimeout;
  const testInfo = (0, _globals.currentTestInfo)();
  let defaultExpectTimeout = testInfo === null || testInfo === void 0 || (_testInfo$_projectInt = testInfo._projectInternal) === null || _testInfo$_projectInt === void 0 || (_testInfo$_projectInt = _testInfo$_projectInt.expect) === null || _testInfo$_projectInt === void 0 ? void 0 : _testInfo$_projectInt.timeout;
  if (typeof defaultExpectTimeout === 'undefined') defaultExpectTimeout = 5000;
  return defaultExpectTimeout;
}
function computeArgsSuffix(matcherName, args) {
  let value = '';
  if (matcherName === 'toHaveScreenshot') value = (0, _toMatchSnapshot.toHaveScreenshotStepTitle)(...args);
  return value ? `(${value})` : '';
}
const expect = exports.expect = createExpect({}, [], {}).extend(customMatchers);
function mergeExpects(...expects) {
  let merged = expect;
  for (const e of expects) {
    const internals = e[getCustomMatchersSymbol];
    if (!internals)
      // non-playwright expects mutate the global expect, so we don't need to do anything special
      continue;
    merged = merged.extend(internals);
  }
  return merged;
}