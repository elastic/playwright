"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expect = void 0;

var _expect = _interopRequireDefault(require("expect"));

var _matchers = require("./matchers/matchers");

var _toMatchSnapshot = require("./matchers/toMatchSnapshot");

var _matchers2 = _interopRequireDefault(require("expect/build/matchers"));

var _globals = require("./globals");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
const expect = _expect.default;
exports.expect = expect;

_expect.default.setState({
  expand: false
});

const customMatchers = {
  toBeChecked: _matchers.toBeChecked,
  toBeDisabled: _matchers.toBeDisabled,
  toBeEditable: _matchers.toBeEditable,
  toBeEmpty: _matchers.toBeEmpty,
  toBeEnabled: _matchers.toBeEnabled,
  toBeFocused: _matchers.toBeFocused,
  toBeHidden: _matchers.toBeHidden,
  toBeSelected: _matchers.toBeSelected,
  toBeVisible: _matchers.toBeVisible,
  toContainText: _matchers.toContainText,
  toHaveAttr: _matchers.toHaveAttr,
  toHaveClass: _matchers.toHaveClass,
  toHaveCount: _matchers.toHaveCount,
  toHaveCSS: _matchers.toHaveCSS,
  toHaveData: _matchers.toHaveData,
  toHaveId: _matchers.toHaveId,
  toHaveProp: _matchers.toHaveProp,
  toHaveText: _matchers.toHaveText,
  toHaveTitle: _matchers.toHaveTitle,
  toHaveURL: _matchers.toHaveURL,
  toHaveValue: _matchers.toHaveValue,
  toMatchSnapshot: _toMatchSnapshot.toMatchSnapshot
};
let lastExpectSeq = 0;

function wrap(matcherName, matcher) {
  return function (...args) {
    const testInfo = (0, _globals.currentTestInfo)();
    if (!testInfo) return matcher.call(this, ...args);
    const seq = ++lastExpectSeq;

    testInfo._progress('expect', {
      phase: 'begin',
      seq,
      matcherName
    });

    const endPayload = {
      phase: 'end',
      seq
    };
    let isAsync = false;

    try {
      const result = matcher.call(this, ...args);
      endPayload.pass = result.pass;
      if (this.isNot) endPayload.isNot = this.isNot;
      if (result.pass === this.isNot && result.message) endPayload.message = result.message();

      if (result instanceof Promise) {
        isAsync = true;
        return result.catch(e => {
          endPayload.error = e.stack;
          throw e;
        }).finally(() => {
          testInfo._progress('expect', endPayload);
        });
      }

      return result;
    } catch (e) {
      endPayload.error = e.stack;
      throw e;
    } finally {
      if (!isAsync) testInfo._progress('expect', endPayload);
    }
  };
}

const wrappedMatchers = {};

for (const matcherName in _matchers2.default) wrappedMatchers[matcherName] = wrap(matcherName, _matchers2.default[matcherName]);

for (const matcherName in customMatchers) wrappedMatchers[matcherName] = wrap(matcherName, customMatchers[matcherName]);

_expect.default.extend(wrappedMatchers);