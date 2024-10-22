function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./codeMirrorModule-Dx6AXgMV.js","../codeMirrorModule.Cy8X9Wtw.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$2 = Symbol.for("react.fragment"), q$1 = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v$1 = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
function A$1(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = z$1 && a[z$1] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$1 = Object.assign, D$1 = {};
function E$1(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e || B$1;
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function(a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E$1.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {
}
F.prototype = E$1.prototype;
function G$1(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e || B$1;
}
var H$1 = G$1.prototype = new F();
H$1.constructor = G$1;
C$1(H$1, E$1.prototype);
H$1.isPureReactComponent = true;
var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
function M$1(a, b, e) {
  var d, c = {}, k2 = null, h = null;
  if (null != b)
    for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k2 = "" + b.key), b)
      J.call(b, d) && !L$1.hasOwnProperty(d) && (c[d] = b[d]);
  var g = arguments.length - 2;
  if (1 === g)
    c.children = e;
  else if (1 < g) {
    for (var f2 = Array(g), m2 = 0; m2 < g; m2++)
      f2[m2] = arguments[m2 + 2];
    c.children = f2;
  }
  if (a && a.defaultProps)
    for (d in g = a.defaultProps, g)
      void 0 === c[d] && (c[d] = g[d]);
  return { $$typeof: l$1, type: a, key: k2, ref: h, props: c, _owner: K$1.current };
}
function N$1(a, b) {
  return { $$typeof: l$1, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$1(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l$1;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var P$1 = /\/+/g;
function Q$1(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R$1(a, b, e, d, c) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2)
    a = null;
  var h = false;
  if (null === a)
    h = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case l$1:
          case n$1:
            h = true;
        }
    }
  if (h)
    return h = a, c = c(h), a = "" === d ? "." + Q$1(h, 0) : d, I$1(c) ? (e = "", null != a && (e = a.replace(P$1, "$&/") + "/"), R$1(c, b, e, "", function(a2) {
      return a2;
    })) : null != c && (O$1(c) && (c = N$1(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$1, "$&/") + "/") + a)), b.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I$1(a))
    for (var g = 0; g < a.length; g++) {
      k2 = a[g];
      var f2 = d + Q$1(k2, g);
      h += R$1(k2, b, e, f2, c);
    }
  else if (f2 = A$1(a), "function" === typeof f2)
    for (a = f2.call(a), g = 0; !(k2 = a.next()).done; )
      k2 = k2.value, f2 = d + Q$1(k2, g++), h += R$1(k2, b, e, f2, c);
  else if ("object" === k2)
    throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S$1(a, b, e) {
  if (null == a)
    return a;
  var d = [], c = 0;
  R$1(a, d, "", "", function(a2) {
    return b.call(e, a2, c++);
  });
  return d;
}
function T$1(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function(b2) {
      if (0 === a._status || -1 === a._status)
        a._status = 1, a._result = b2;
    }, function(b2) {
      if (0 === a._status || -1 === a._status)
        a._status = 2, a._result = b2;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status)
    return a._result.default;
  throw a._result;
}
var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
react_production_min.Children = { map: S$1, forEach: function(a, b, e) {
  S$1(a, function() {
    b.apply(this, arguments);
  }, e);
}, count: function(a) {
  var b = 0;
  S$1(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return S$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$1(a))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$1;
react_production_min.Fragment = p$2;
react_production_min.Profiler = r;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$1;
react_production_min.Suspense = w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.cloneElement = function(a, b, e) {
  if (null === a || void 0 === a)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C$1({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k2 = b.ref, h = K$1.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps)
      var g = a.type.defaultProps;
    for (f2 in b)
      J.call(b, f2) && !L$1.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2)
    d.children = e;
  else if (1 < f2) {
    g = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g[m2] = arguments[m2 + 2];
    d.children = g;
  }
  return { $$typeof: l$1, type: a.type, key: c, ref: k2, props: d, _owner: h };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$1;
react_production_min.createFactory = function(a) {
  var b = M$1.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v$1, render: a };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function(a) {
  return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T$1 };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
};
react_production_min.startTransition = function(a) {
  var b = V$1.transition;
  V$1.transition = {};
  try {
    a();
  } finally {
    V$1.transition = b;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a, b) {
  return U$1.current.useCallback(a, b);
};
react_production_min.useContext = function(a) {
  return U$1.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U$1.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b) {
  return U$1.current.useEffect(a, b);
};
react_production_min.useId = function() {
  return U$1.current.useId();
};
react_production_min.useImperativeHandle = function(a, b, e) {
  return U$1.current.useImperativeHandle(a, b, e);
};
react_production_min.useInsertionEffect = function(a, b) {
  return U$1.current.useInsertionEffect(a, b);
};
react_production_min.useLayoutEffect = function(a, b) {
  return U$1.current.useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return U$1.current.useMemo(a, b);
};
react_production_min.useReducer = function(a, b, e) {
  return U$1.current.useReducer(a, b, e);
};
react_production_min.useRef = function(a) {
  return U$1.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U$1.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b, e) {
  return U$1.current.useSyncExternalStore(a, b, e);
};
react_production_min.useTransition = function() {
  return U$1.current.useTransition();
};
react_production_min.version = "18.2.0";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a)
    m$1.call(a, b) && !p$1.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
function useAsyncMemo(fn, deps, initialValue, resetValue) {
  const [value, setValue] = React.useState(initialValue);
  React.useEffect(() => {
    let canceled = false;
    if (resetValue !== void 0)
      setValue(resetValue);
    fn().then((value2) => {
      if (!canceled)
        setValue(value2);
    });
    return () => {
      canceled = true;
    };
  }, deps);
  return value;
}
function useMeasure() {
  const ref = React.useRef(null);
  const [measure, setMeasure] = React.useState(new DOMRect(0, 0, 10, 10));
  React.useLayoutEffect(() => {
    const target = ref.current;
    if (!target)
      return;
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[entries.length - 1];
      if (entry && entry.contentRect)
        setMeasure(entry.contentRect);
    });
    resizeObserver.observe(target);
    return () => resizeObserver.disconnect();
  }, [ref]);
  return [measure, ref];
}
function msToString(ms) {
  if (ms < 0 || !isFinite(ms))
    return "-";
  if (ms === 0)
    return "0";
  if (ms < 1e3)
    return ms.toFixed(0) + "ms";
  const seconds = ms / 1e3;
  if (seconds < 60)
    return seconds.toFixed(1) + "s";
  const minutes = seconds / 60;
  if (minutes < 60)
    return minutes.toFixed(1) + "m";
  const hours = minutes / 60;
  if (hours < 24)
    return hours.toFixed(1) + "h";
  const days = hours / 24;
  return days.toFixed(1) + "d";
}
function bytesToString(bytes) {
  if (bytes < 0 || !isFinite(bytes))
    return "-";
  if (bytes === 0)
    return "0";
  if (bytes < 1e3)
    return bytes.toFixed(0);
  const kb2 = bytes / 1024;
  if (kb2 < 1e3)
    return kb2.toFixed(1) + "K";
  const mb2 = kb2 / 1024;
  if (mb2 < 1e3)
    return mb2.toFixed(1) + "M";
  const gb2 = mb2 / 1024;
  return gb2.toFixed(1) + "G";
}
function upperBound(array, object, comparator2, left, right) {
  let l2 = left || 0;
  let r2 = right !== void 0 ? right : array.length;
  while (l2 < r2) {
    const m2 = l2 + r2 >> 1;
    if (comparator2(object, array[m2]) >= 0)
      l2 = m2 + 1;
    else
      r2 = m2;
  }
  return r2;
}
function copy(text) {
  const textArea = document.createElement("textarea");
  textArea.style.position = "absolute";
  textArea.style.zIndex = "-1000";
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
}
function useSetting(name, defaultValue, title) {
  if (name)
    defaultValue = settings.getObject(name, defaultValue);
  const [value, setValue] = React.useState(defaultValue);
  const setValueWrapper = React.useCallback((value2) => {
    if (name)
      settings.setObject(name, value2);
    else
      setValue(value2);
  }, [name, setValue]);
  React.useEffect(() => {
    if (name) {
      const onStoreChange = () => setValue(settings.getObject(name, defaultValue));
      settings.onChangeEmitter.addEventListener(name, onStoreChange);
      return () => settings.onChangeEmitter.removeEventListener(name, onStoreChange);
    }
  }, [defaultValue, name]);
  return [value, setValueWrapper];
}
class Settings {
  constructor() {
    this.onChangeEmitter = new EventTarget();
  }
  getString(name, defaultValue) {
    return localStorage[name] || defaultValue;
  }
  setString(name, value) {
    var _a;
    localStorage[name] = value;
    this.onChangeEmitter.dispatchEvent(new Event(name));
    (_a = window.saveSettings) == null ? void 0 : _a.call(window);
  }
  getObject(name, defaultValue) {
    if (!localStorage[name])
      return defaultValue;
    try {
      return JSON.parse(localStorage[name]);
    } catch {
      return defaultValue;
    }
  }
  setObject(name, value) {
    var _a;
    localStorage[name] = JSON.stringify(value);
    this.onChangeEmitter.dispatchEvent(new Event(name));
    (_a = window.saveSettings) == null ? void 0 : _a.call(window);
  }
}
const settings = new Settings();
function clsx(...classes) {
  return classes.filter(Boolean).join(" ");
}
const kControlCodesRe = "\\u0000-\\u0020\\u007f-\\u009f";
const kWebLinkRe = new RegExp("(?:[a-zA-Z][a-zA-Z0-9+.-]{2,}:\\/\\/|www\\.)[^\\s" + kControlCodesRe + '"]{2,}[^\\s' + kControlCodesRe + `"')}\\],:;.!?]`, "ug");
function applyTheme() {
  if (document.playwrightThemeInitialized)
    return;
  document.playwrightThemeInitialized = true;
  document.defaultView.addEventListener("focus", (event) => {
    if (event.target.document.nodeType === Node.DOCUMENT_NODE)
      document.body.classList.remove("inactive");
  }, false);
  document.defaultView.addEventListener("blur", (event) => {
    document.body.classList.add("inactive");
  }, false);
  const currentTheme2 = settings.getString("theme", "light-mode");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  if (currentTheme2 === "dark-mode" || prefersDarkScheme.matches)
    document.body.classList.add("dark-mode");
}
const listeners = /* @__PURE__ */ new Set();
function toggleTheme() {
  const oldTheme = currentTheme();
  const newTheme = oldTheme === "dark-mode" ? "light-mode" : "dark-mode";
  if (oldTheme)
    document.body.classList.remove(oldTheme);
  document.body.classList.add(newTheme);
  settings.setString("theme", newTheme);
  for (const listener of listeners)
    listener(newTheme);
}
function addThemeListener(listener) {
  listeners.add(listener);
}
function removeThemeListener(listener) {
  listeners.delete(listener);
}
function currentTheme() {
  return document.body.classList.contains("dark-mode") ? "dark-mode" : "light-mode";
}
function useDarkModeSetting() {
  const [theme, setTheme] = React.useState(currentTheme() === "dark-mode");
  return [theme, (value) => {
    const current = currentTheme() === "dark-mode";
    if (current !== value)
      toggleTheme();
    setTheme(value);
  }];
}
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a, b) {
    var c = a.length;
    a.push(b);
    a:
      for (; 0 < c; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (0 < g(e, b))
          a[d] = b, a[c] = e, c = d;
        else
          break a;
      }
  }
  function h(a) {
    return 0 === a.length ? null : a[0];
  }
  function k2(a) {
    if (0 === a.length)
      return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
      a[0] = c;
      a:
        for (var d = 0, e = a.length, w2 = e >>> 1; d < w2; ) {
          var m2 = 2 * (d + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
          if (0 > g(C2, c))
            n2 < e && 0 > g(x2, C2) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C2, a[m2] = c, d = m2);
          else if (n2 < e && 0 > g(x2, c))
            a[d] = x2, a[n2] = c, d = n2;
          else
            break a;
        }
    }
    return b;
  }
  function g(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b = h(t2); null !== b; ) {
      if (null === b.callback)
        k2(t2);
      else if (b.startTime <= a)
        k2(t2), b.sortIndex = b.expirationTime, f2(r2, b);
      else
        break;
      b = h(t2);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2)
      if (null !== h(r2))
        A2 = true, I2(J2);
      else {
        var b = h(t2);
        null !== b && K2(H2, b.startTime - a);
      }
  }
  function J2(a, b) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c = y2;
    try {
      G2(b);
      for (v2 = h(r2); null !== v2 && (!(v2.expirationTime > b) || a && !M2()); ) {
        var d = v2.callback;
        if ("function" === typeof d) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e = d(v2.expirationTime <= b);
          b = exports.unstable_now();
          "function" === typeof e ? v2.callback = e : v2 === h(r2) && k2(r2);
          G2(b);
        } else
          k2(r2);
        v2 = h(r2);
      }
      if (null !== v2)
        var w2 = true;
      else {
        var m2 = h(t2);
        null !== m2 && K2(H2, m2.startTime - b);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a = exports.unstable_now();
      Q2 = a;
      var b = true;
      try {
        b = O2(true, a);
      } finally {
        b ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  }
  var S2;
  if ("function" === typeof F2)
    S2 = function() {
      F2(R2);
    };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  function I2(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  }
  function K2(a, b) {
    L2 = D2(function() {
      a(exports.unstable_now());
    }, b);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = y2;
    }
    var c = y2;
    y2 = b;
    try {
      return a();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = y2;
    y2 = a;
    try {
      return b();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = { id: u2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
    c > d ? (a.sortIndex = c, f2(t2, a), null === h(r2) && a === h(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a) {
    var b = y2;
    return function() {
      var c = y2;
      y2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports, ca = schedulerExports;
function p(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a, b) {
  ha(a, b);
  ha(a + "Capture", b);
}
function ha(a, b) {
  ea[a] = b;
  for (a = 0; a < b.length; a++)
    da.add(b[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a) {
  if (ja.call(ma, a))
    return true;
  if (ja.call(la, a))
    return false;
  if (ka.test(a))
    return ma[a] = true;
  la[a] = true;
  return false;
}
function pa(a, b, c, d) {
  if (null !== c && 0 === c.type)
    return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (null !== c)
        return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function qa(a, b, c, d) {
  if (null === b || "undefined" === typeof b || pa(a, b, c, d))
    return true;
  if (d)
    return false;
  if (null !== c)
    switch (c.type) {
      case 3:
        return !b;
      case 4:
        return false === b;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
  return false;
}
function v(a, b, c, d, e, f2, g) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f2;
  this.removeEmptyString = g;
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z[a] = new v(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  z[b] = new v(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z[a] = new v(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z[a] = new v(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z[a] = new v(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z[a] = new v(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(
    ra,
    sa
  );
  z[b] = new v(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
});
z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
});
function ta(a, b, c, d) {
  var e = z.hasOwnProperty(b) ? z[b] : null;
  if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1])
    qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A = Object.assign, La;
function Ma(a) {
  if (void 0 === La)
    try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      La = b && b[1] || "";
    }
  return "\n" + La + a;
}
var Na = false;
function Oa(a, b) {
  if (!a || Na)
    return "";
  Na = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b)
      if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (l2) {
          var d = l2;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (l2) {
          d = l2;
        }
        a.call(b.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l2) {
        d = l2;
      }
      a();
    }
  } catch (l2) {
    if (l2 && d && "string" === typeof l2.stack) {
      for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e[g] !== f2[h]; )
        h--;
      for (; 1 <= g && 0 <= h; g--, h--)
        if (e[g] !== f2[h]) {
          if (1 !== g || 1 !== h) {
            do
              if (g--, h--, 0 > h || e[g] !== f2[h]) {
                var k2 = "\n" + e[g].replace(" at new ", " at ");
                a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                return k2;
              }
            while (1 <= g && 0 <= h);
          }
          break;
        }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, false), a;
    case 11:
      return a = Oa(a.type.render, false), a;
    case 1:
      return a = Oa(a.type, true), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (null == a)
    return null;
  if ("function" === typeof a)
    return a.displayName || a.name || null;
  if ("string" === typeof a)
    return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a)
    switch (a.$$typeof) {
      case Ca:
        return (a.displayName || "Context") + ".Consumer";
      case Ba:
        return (a._context.displayName || "Context") + ".Provider";
      case Da:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Ga:
        return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
      case Ha:
        b = a._payload;
        a = a._init;
        try {
          return Qa(a(b));
        } catch (c) {
        }
    }
  return null;
}
function Ra(a) {
  var b = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b.displayName || "Context") + ".Consumer";
    case 10:
      return (b._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b);
    case 8:
      return b === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b)
        return b.displayName || b.name || null;
      if ("string" === typeof b)
        return b;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get, f2 = c.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b = a._valueTracker;
  if (!b)
    return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a)
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
}
function Za(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
  c = Sa(null != b.value ? b.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
}
function ab(a, b) {
  b = b.checked;
  null != b && ta(a, "checked", b, false);
}
function bb(a, b) {
  ab(a, b);
  var c = Sa(b.value), d = b.type;
  if (null != c)
    if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c)
        a.value = "" + c;
    } else
      a.value !== "" + c && (a.value = "" + c);
  else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function db(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value))
      return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}
function cb(a, b, c) {
  if ("number" !== b || Xa(a.ownerDocument) !== a)
    null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var eb = Array.isArray;
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++)
      b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++)
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      null !== b || a[e].disabled || (b = a[e]);
    }
    null !== b && (b.selected = true);
  }
}
function gb(a, b) {
  if (null != b.dangerouslySetInnerHTML)
    throw Error(p(91));
  return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b) {
  var c = b.value;
  if (null == c) {
    c = b.children;
    b = b.defaultValue;
    if (null != c) {
      if (null != b)
        throw Error(p(92));
      if (eb(c)) {
        if (1 < c.length)
          throw Error(p(93));
        c = c[0];
      }
      b = c;
    }
    null == b && (b = "");
    c = b;
  }
  a._wrapperState = { initialValue: Sa(c) };
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var mb, nb = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a)
    a.innerHTML = b;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = mb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b.firstChild; )
      a.appendChild(b.firstChild);
  }
});
function ob(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a) {
  qb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b] = pb[a];
  });
});
function rb(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
}
function sb(a, b) {
  a = a.style;
  for (var c in b)
    if (b.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
      "float" === c && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
}
var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a, b) {
  if (b) {
    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML))
      throw Error(p(137, a));
    if (null != b.dangerouslySetInnerHTML) {
      if (null != b.children)
        throw Error(p(60));
      if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML))
        throw Error(p(61));
    }
    if (null != b.style && "object" !== typeof b.style)
      throw Error(p(62));
  }
}
function vb(a, b) {
  if (-1 === a.indexOf("-"))
    return "string" === typeof b.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb)
      throw Error(p(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b)
      for (a = 0; a < b.length; a++)
        Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb() {
}
var Ib = false;
function Jb(a, b, c) {
  if (Ib)
    return a(b, c);
  Ib = true;
  try {
    return Gb(a, b, c);
  } finally {
    if (Ib = false, null !== zb || null !== Ab)
      Hb(), Fb();
  }
}
function Kb(a, b) {
  var c = a.stateNode;
  if (null === c)
    return null;
  var d = Db(c);
  if (null === d)
    return null;
  c = d[b];
  a:
    switch (b) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c && "function" !== typeof c)
    throw Error(p(231, b, typeof c));
  return c;
}
var Lb = false;
if (ia)
  try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a) {
    Lb = false;
  }
function Nb(a, b, c, d, e, f2, g, h, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
  Ob = true;
  Pb = a;
} };
function Tb(a, b, c, d, e, f2, g, h, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b, c, d, e, f2, g, h, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else
      throw Error(p(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a) {
  var b = a, c = a;
  if (a.alternate)
    for (; b.return; )
      b = b.return;
  else {
    a = b;
    do
      b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
    while (a);
  }
  return 3 === b.tag ? c : null;
}
function Wb(a) {
  if (13 === a.tag) {
    var b = a.memoizedState;
    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
    if (null !== b)
      return b.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a)
    throw Error(p(188));
}
function Yb(a) {
  var b = a.alternate;
  if (!b) {
    b = Vb(a);
    if (null === b)
      throw Error(p(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (null === e)
      break;
    var f2 = e.alternate;
    if (null === f2) {
      d = e.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f2.child) {
      for (f2 = e.child; f2; ) {
        if (f2 === c)
          return Xb(e), a;
        if (f2 === d)
          return Xb(e), b;
        f2 = f2.sibling;
      }
      throw Error(p(188));
    }
    if (c.return !== d.return)
      c = e, d = f2;
    else {
      for (var g = false, h = e.child; h; ) {
        if (h === c) {
          g = true;
          c = e;
          d = f2;
          break;
        }
        if (h === d) {
          g = true;
          d = e;
          c = f2;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f2.child; h; ) {
          if (h === c) {
            g = true;
            c = f2;
            d = e;
            break;
          }
          if (h === d) {
            g = true;
            d = f2;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g)
          throw Error(p(189));
      }
    }
    if (c.alternate !== d)
      throw Error(p(190));
  }
  if (3 !== c.tag)
    throw Error(p(188));
  return c.stateNode.current === c ? a : b;
}
function Zb(a) {
  a = Yb(a);
  return null !== a ? $b(a) : null;
}
function $b(a) {
  if (5 === a.tag || 6 === a.tag)
    return a;
  for (a = a.child; null !== a; ) {
    var b = $b(a);
    if (null !== b)
      return b;
    a = a.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a) {
  if (lc && "function" === typeof lc.onCommitFiberRoot)
    try {
      lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {
    }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b) {
  var c = a.pendingLanes;
  if (0 === c)
    return 0;
  var d = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
  if (0 !== g) {
    var h = g & ~e;
    0 !== h ? d = tc(h) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
  } else
    g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
  if (0 === d)
    return 0;
  if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f2 = b & -b, e >= f2 || 16 === e && 0 !== (f2 & 4194240)))
    return b;
  0 !== (d & 4) && (d |= c & 16);
  b = a.entangledLanes;
  if (0 !== b)
    for (a = a.entanglements, b &= d; 0 < b; )
      c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function vc(a, b) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a, b) {
  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
    var g = 31 - oc(f2), h = 1 << g, k2 = e[g];
    if (-1 === k2) {
      if (0 === (h & c) || 0 !== (h & d))
        e[g] = vc(h, b);
    } else
      k2 <= b && (a.expiredLanes |= h);
    f2 &= ~h;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a;
}
function zc(a) {
  for (var b = [], c = 0; 31 > c; c++)
    b.push(a);
  return b;
}
function Ac(a, b, c) {
  a.pendingLanes |= b;
  536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b = 31 - oc(b);
  a[b] = c;
}
function Bc(a, b) {
  var c = a.pendingLanes & ~b;
  a.pendingLanes = b;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b;
  a.mutableReadLanes &= b;
  a.entangledLanes &= b;
  b = a.entanglements;
  var d = a.eventTimes;
  for (a = a.expirationTimes; 0 < c; ) {
    var e = 31 - oc(c), f2 = 1 << e;
    b[e] = 0;
    d[e] = -1;
    a[e] = -1;
    c &= ~f2;
  }
}
function Cc(a, b) {
  var c = a.entangledLanes |= b;
  for (a = a.entanglements; c; ) {
    var d = 31 - oc(c), e = 1 << d;
    e & b | a[d] & b && (a[d] |= b);
    c &= ~e;
  }
}
var C = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b.pointerId);
  }
}
function Tc(a, b, c, d, e, f2) {
  if (null === a || a.nativeEvent !== f2)
    return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  null !== e && -1 === b.indexOf(e) && b.push(e);
  return a;
}
function Uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return Lc = Tc(Lc, a, b, c, d, e), true;
    case "dragenter":
      return Mc = Tc(Mc, a, b, c, d, e), true;
    case "mouseover":
      return Nc = Tc(Nc, a, b, c, d, e), true;
    case "pointerover":
      var f2 = e.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b, c, d, e)), true;
  }
  return false;
}
function Vc(a) {
  var b = Wc(a.target);
  if (null !== b) {
    var c = Vb(b);
    if (null !== c) {
      if (b = c.tag, 13 === b) {
        if (b = Wb(c), null !== b) {
          a.blockedOn = b;
          Ic(a.priority, function() {
            Gc(c);
          });
          return;
        }
      } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (null !== a.blockedOn)
    return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (null === c) {
      c = a.nativeEvent;
      var d = new c.constructor(c.type, c);
      wb = d;
      c.target.dispatchEvent(d);
      wb = null;
    } else
      return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function Zc(a, b, c) {
  Xc(a) && c.delete(b);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b) {
  a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b(b2) {
    return ad(b2, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c = 1; c < Kc.length; c++) {
      var d = Kc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a);
  null !== Mc && ad(Mc, a);
  null !== Nc && ad(Nc, a);
  Oc.forEach(b);
  Pc.forEach(b);
  for (c = 0; c < Qc.length; c++)
    d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); )
    Vc(c), null === c.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a, b, c, d) {
  var e = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 1, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f2;
  }
}
function gd(a, b, c, d) {
  var e = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 4, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f2;
  }
}
function fd(a, b, c, d) {
  if (dd) {
    var e = Yc(a, b, c, d);
    if (null === e)
      hd(a, b, d, id, c), Sc(a, d);
    else if (Uc(e, a, b, c, d))
      d.stopPropagation();
    else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
      for (; null !== e; ) {
        var f2 = Cb(e);
        null !== f2 && Ec(f2);
        f2 = Yc(a, b, c, d);
        null === f2 && hd(a, b, d, id, c);
        if (f2 === e)
          break;
        e = f2;
      }
      null !== e && d.stopPropagation();
    } else
      hd(a, b, d, null, c);
  }
}
var id = null;
function Yc(a, b, c, d) {
  id = null;
  a = xb(d);
  a = Wc(a);
  if (null !== a)
    if (b = Vb(a), null === b)
      a = null;
    else if (c = b.tag, 13 === c) {
      a = Wb(b);
      if (null !== a)
        return a;
      a = null;
    } else if (3 === c) {
      if (b.stateNode.current.memoizedState.isDehydrated)
        return 3 === b.tag ? b.stateNode.containerInfo : null;
      a = null;
    } else
      b !== a && (a = null);
  id = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++)
    ;
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f2 - d]; d++)
    ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e, f2, g) {
    this._reactName = b2;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g;
    this.currentTarget = null;
    for (var c in a)
      a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, { key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if ("Unidentified" !== b)
      return b;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b.keyCode);
    case "keydown":
      return 229 !== b.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (32 !== b.which)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie)
    return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length)
          return b.char;
        if (b.which)
          return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b.locale ? null : b.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b))
    return a;
}
function ve(a, b) {
  if ("change" === a)
    return b;
}
var we = false;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if ("value" === a.propertyName && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    Jb(re, b);
  }
}
function Ce(a, b, c) {
  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a)
    return te(qe);
}
function Ee(a, b) {
  if ("click" === a)
    return te(b);
}
function Fe(a, b) {
  if ("input" === a || "change" === a)
    return te(b);
}
function Ge(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a, b) {
  if (He(a, b))
    return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b)
    return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++) {
    var e = c[d];
    if (!ja.call(b, e) || !He(a[e], b[e]))
      return false;
  }
  return true;
}
function Je(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Ke(a, b) {
  var c = Je(a);
  a = 0;
  for (var d; c; ) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b)
        return { node: c, offset: b - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Je(c);
  }
}
function Le(a, b) {
  return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Me() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = false;
    }
    if (c)
      a = b.contentWindow;
    else
      break;
    b = Xa(a.document);
  }
  return b;
}
function Ne(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
function Oe(a) {
  var b = Me(), c = a.focusedElem, d = a.selectionRange;
  if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
    if (null !== d && Ne(c)) {
      if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c)
        c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
      else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e = c.textContent.length, f2 = Math.min(d.start, e);
        d = void 0 === d.end ? f2 : Math.min(d.end, e);
        !a.extend && f2 > d && (e = d, d = f2, f2 = e);
        e = Ke(c, f2);
        var g = Ke(
          c,
          d
        );
        e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
      }
    }
    b = [];
    for (a = c; a = a.parentNode; )
      1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    "function" === typeof c.focus && c.focus();
    for (c = 0; c < b.length; c++)
      a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
}
function Ve(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a) {
  if (Xe[a])
    return Xe[a];
  if (!We[a])
    return a;
  var b = We[a], c;
  for (c in b)
    if (b.hasOwnProperty(c) && c in Ye)
      return Xe[a] = b[c];
  return a;
}
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b) {
  df.set(a, b);
  fa(b, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Ub(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = 0 !== (b & 4);
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b)
        for (var g = d.length - 1; 0 <= g; g--) {
          var h = d[g], k2 = h.instance, l2 = h.currentTarget;
          h = h.listener;
          if (k2 !== f2 && e.isPropagationStopped())
            break a;
          nf(e, h, l2);
          f2 = k2;
        }
      else
        for (g = 0; g < d.length; g++) {
          h = d[g];
          k2 = h.instance;
          l2 = h.currentTarget;
          h = h.listener;
          if (k2 !== f2 && e.isPropagationStopped())
            break a;
          nf(e, h, l2);
          f2 = k2;
        }
    }
  }
  if (Qb)
    throw a = Rb, Qb = false, Rb = null, a;
}
function D(a, b) {
  var c = b[of];
  void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
  var d = a + "__bubble";
  c.has(d) || (pf(b, a, 2, false), c.add(d));
}
function qf(a, b, c) {
  var d = 0;
  b && (d |= 4);
  pf(c, a, d, b);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = true;
    da.forEach(function(b2) {
      "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
    });
    var b = 9 === a.nodeType ? a : a.ownerDocument;
    null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
  }
}
function pf(a, b, c, d) {
  switch (jd(b)) {
    case 1:
      var e = ed;
      break;
    case 4:
      e = gd;
      break;
    default:
      e = fd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
  d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
}
function hd(a, b, c, d, e) {
  var f2 = d;
  if (0 === (b & 1) && 0 === (b & 2) && null !== d)
    a:
      for (; ; ) {
        if (null === d)
          return;
        var g = d.tag;
        if (3 === g || 4 === g) {
          var h = d.stateNode.containerInfo;
          if (h === e || 8 === h.nodeType && h.parentNode === e)
            break;
          if (4 === g)
            for (g = d.return; null !== g; ) {
              var k2 = g.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e)
                  return;
              }
              g = g.return;
            }
          for (; null !== h; ) {
            g = Wc(h);
            if (null === g)
              return;
            k2 = g.tag;
            if (5 === k2 || 6 === k2) {
              d = f2 = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
  Jb(function() {
    var d2 = f2, e2 = xb(c), g2 = [];
    a: {
      var h2 = df.get(a);
      if (void 0 !== h2) {
        var k3 = td, n2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c))
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c.button)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h2 ? h2 + "Capture" : null : h2;
        t2 = [];
        for (var w2 = d2, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2)
            break;
          w2 = w2.return;
        }
        0 < t2.length && (h2 = new k3(h2, n2, null, c, e2), g2.push({ event: h2, listeners: t2 }));
      }
    }
    if (0 === (b & 7)) {
      a: {
        h2 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h2 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf]))
          break a;
        if (k3 || h2) {
          h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k3) {
            if (n2 = c.relatedTarget || c.toElement, k3 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
              n2 = null;
          } else
            k3 = null, n2 = d2;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a || "pointerover" === a)
              t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h2 : ue(k3);
            u2 = null == n2 ? h2 : ue(n2);
            h2 = new t2(F2, w2 + "leave", k3, c, e2);
            h2.target = J2;
            h2.relatedTarget = u2;
            F2 = null;
            Wc(e2) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2)
              b: {
                t2 = k3;
                x2 = n2;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2))
                  w2++;
                u2 = 0;
                for (F2 = x2; F2; F2 = vf(F2))
                  u2++;
                for (; 0 < w2 - u2; )
                  t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; )
                  x2 = vf(x2), u2--;
                for (; w2--; ) {
                  if (t2 === x2 || null !== x2 && t2 === x2.alternate)
                    break b;
                  t2 = vf(t2);
                  x2 = vf(x2);
                }
                t2 = null;
              }
            else
              t2 = null;
            null !== k3 && wf(g2, h2, k3, t2, false);
            null !== n2 && null !== J2 && wf(g2, J2, n2, t2, true);
          }
        }
      }
      a: {
        h2 = d2 ? ue(d2) : window;
        k3 = h2.nodeName && h2.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h2.type)
          var na = ve;
        else if (me(h2))
          if (we)
            na = Fe;
          else {
            na = De;
            var xa = Ce;
          }
        else
          (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
        if (na && (na = na(a, d2))) {
          ne(g2, na, c, e2);
          break a;
        }
        xa && xa(a, h2, d2);
        "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
      }
      xa = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable)
            Qe = xa, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g2, c, e2);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g2, c, e2);
      }
      var $a;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
      else
        ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a, c) : ke(a, c))
        d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
    }
    se(g2, b);
  });
}
function tf(a, b, c) {
  return { instance: a, listener: b, currentTarget: c };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; null !== a; ) {
    var e = a, f2 = e.stateNode;
    5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e)), f2 = Kb(a, b), null != f2 && d.push(tf(a, f2, e)));
    a = a.return;
  }
  return d;
}
function vf(a) {
  if (null === a)
    return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b, c, d, e) {
  for (var f2 = b._reactName, g = []; null !== c && c !== d; ) {
    var h = c, k2 = h.alternate, l2 = h.stateNode;
    if (null !== k2 && k2 === d)
      break;
    5 === h.tag && null !== l2 && (h = l2, e ? (k2 = Kb(c, f2), null != k2 && g.unshift(tf(c, k2, h))) : e || (k2 = Kb(c, f2), null != k2 && g.push(tf(c, k2, h))));
    c = c.return;
  }
  0 !== g.length && a.push({ event: b, listeners: g });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b, c) {
  b = zf(b);
  if (zf(a) !== b && c)
    throw Error(p(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a, b) {
  return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
  return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
  setTimeout(function() {
    throw a;
  });
}
function Kf(a, b) {
  var c = b, d = 0;
  do {
    var e = c.nextSibling;
    a.removeChild(c);
    if (e && 8 === e.nodeType)
      if (c = e.data, "/$" === c) {
        if (0 === d) {
          a.removeChild(e);
          bd(b);
          return;
        }
        d--;
      } else
        "$" !== c && "$?" !== c && "$!" !== c || d++;
    c = e;
  } while (c);
  bd(b);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b = a.nodeType;
    if (1 === b || 3 === b)
      break;
    if (8 === b) {
      b = a.data;
      if ("$" === b || "$!" === b || "$?" === b)
        break;
      if ("/$" === b)
        return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (8 === a.nodeType) {
      var c = a.data;
      if ("$" === c || "$!" === c || "$?" === c) {
        if (0 === b)
          return a;
        b--;
      } else
        "/$" === c && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b = a[Of];
  if (b)
    return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[uf] || c[Of]) {
      c = b.alternate;
      if (null !== b.child || null !== c && null !== c.child)
        for (a = Mf(a); null !== a; ) {
          if (c = a[Of])
            return c;
          a = Mf(a);
        }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
  if (5 === a.tag || 6 === a.tag)
    return a.stateNode;
  throw Error(p(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a) {
  return { current: a };
}
function E(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(a, b) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b;
}
var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a, b) {
  var c = a.type.contextTypes;
  if (!c)
    return Vf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f2;
  for (f2 in c)
    e[f2] = b[f2];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E(Wf);
  E(H);
}
function ag(a, b, c) {
  if (H.current !== Vf)
    throw Error(p(168));
  G(H, b);
  G(Wf, c);
}
function bg(a, b, c) {
  var d = a.stateNode;
  b = b.childContextTypes;
  if ("function" !== typeof d.getChildContext)
    return c;
  d = d.getChildContext();
  for (var e in d)
    if (!(e in b))
      throw Error(p(108, Ra(a) || "Unknown", e));
  return A({}, c, d);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H.current;
  G(H, a);
  G(Wf, Wf.current);
  return true;
}
function dg(a, b, c) {
  var d = a.stateNode;
  if (!d)
    throw Error(p(169));
  c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
  G(Wf, c);
}
var eg = null, fg = false, gg = false;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = true;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a = 0, b = C;
    try {
      var c = eg;
      for (C = 1; a < c.length; a++) {
        var d = c[a];
        do
          d = d(true);
        while (null !== d);
      }
      eg = null;
      fg = false;
    } catch (e) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
    } finally {
      C = b, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a, b) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b;
}
function ug(a, b, c) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d = rg;
  a = sg;
  var e = 32 - oc(d) - 1;
  d &= ~(1 << e);
  c += 1;
  var f2 = 32 - oc(b) + e;
  if (30 < f2) {
    var g = e - e % 5;
    f2 = (d & (1 << g) - 1).toString(32);
    d >>= g;
    e -= g;
    rg = 1 << 32 - oc(b) + e | c << e | d;
    sg = f2 + a;
  } else
    rg = 1 << f2 | c << e | d, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg; )
    mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg; )
    qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I = false, zg = null;
function Ag(a, b) {
  var c = Bg(5, null, null, 0);
  c.elementType = "DELETED";
  c.stateNode = b;
  c.return = a;
  b = a.deletions;
  null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
}
function Cg(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
    case 13:
      return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I) {
    var b = yg;
    if (b) {
      var c = b;
      if (!Cg(a, b)) {
        if (Dg(a))
          throw Error(p(418));
        b = Lf(c.nextSibling);
        var d = xg;
        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
      }
    } else {
      if (Dg(a))
        throw Error(p(418));
      a.flags = a.flags & -4097 | 2;
      I = false;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
    a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg)
    return false;
  if (!I)
    return Fg(a), I = true, false;
  var b;
  (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
  if (b && (b = yg)) {
    if (Dg(a))
      throw Hg(), Error(p(418));
    for (; b; )
      Ag(a, b), b = Lf(b.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a)
      throw Error(p(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("/$" === c) {
            if (0 === b) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b--;
          } else
            "$" !== c && "$!" !== c && "$?" !== c || b++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else
    yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a = yg; a; )
    a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I = false;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b) {
  if (a && a.defaultProps) {
    b = A({}, b);
    a = a.defaultProps;
    for (var c in a)
      void 0 === b[c] && (b[c] = a[c]);
    return b;
  }
  return b;
}
var Mg = Uf(null), Ng = null, Og = null, Pg = null;
function Qg() {
  Pg = Og = Ng = null;
}
function Rg(a) {
  var b = Mg.current;
  E(Mg);
  a._currentValue = b;
}
function Sg(a, b, c) {
  for (; null !== a; ) {
    var d = a.alternate;
    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
    if (a === c)
      break;
    a = a.return;
  }
}
function Tg(a, b) {
  Ng = a;
  Pg = Og = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (Ug = true), a.firstContext = null);
}
function Vg(a) {
  var b = a._currentValue;
  if (Pg !== a)
    if (a = { context: a, memoizedValue: b, next: null }, null === Og) {
      if (null === Ng)
        throw Error(p(308));
      Og = a;
      Ng.dependencies = { lanes: 0, firstContext: a };
    } else
      Og = Og.next = a;
  return b;
}
var Wg = null;
function Xg(a) {
  null === Wg ? Wg = [a] : Wg.push(a);
}
function Yg(a, b, c, d) {
  var e = b.interleaved;
  null === e ? (c.next = c, Xg(b)) : (c.next = e.next, e.next = c);
  b.interleaved = c;
  return Zg(a, d);
}
function Zg(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  null !== c && (c.lanes |= b);
  c = a;
  for (a = a.return; null !== a; )
    a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
  return 3 === c.tag ? c.stateNode : null;
}
var $g = false;
function ah(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function bh(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function ch(a, b) {
  return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
}
function dh(a, b, c) {
  var d = a.updateQueue;
  if (null === d)
    return null;
  d = d.shared;
  if (0 !== (K & 2)) {
    var e = d.pending;
    null === e ? b.next = b : (b.next = e.next, e.next = b);
    d.pending = b;
    return Zg(a, c);
  }
  e = d.interleaved;
  null === e ? (b.next = b, Xg(d)) : (b.next = e.next, e.next = b);
  d.interleaved = b;
  return Zg(a, c);
}
function eh(a, b, c) {
  b = b.updateQueue;
  if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
function fh(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (null !== d && (d = d.updateQueue, c === d)) {
    var e = null, f2 = null;
    c = c.firstBaseUpdate;
    if (null !== c) {
      do {
        var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        null === f2 ? e = f2 = g : f2 = f2.next = g;
        c = c.next;
      } while (null !== c);
      null === f2 ? e = f2 = b : f2 = f2.next = b;
    } else
      e = f2 = b;
    c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  null === a ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function gh(a, b, c, d) {
  var e = a.updateQueue;
  $g = false;
  var f2 = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
  if (null !== h) {
    e.shared.pending = null;
    var k2 = h, l2 = k2.next;
    k2.next = null;
    null === g ? f2 = l2 : g.next = l2;
    g = k2;
    var m2 = a.alternate;
    null !== m2 && (m2 = m2.updateQueue, h = m2.lastBaseUpdate, h !== g && (null === h ? m2.firstBaseUpdate = l2 : h.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e.baseState;
    g = 0;
    m2 = l2 = k2 = null;
    h = f2;
    do {
      var r2 = h.lane, y2 = h.eventTime;
      if ((d & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        });
        a: {
          var n2 = a, t2 = h;
          r2 = b;
          y2 = c;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2)
                break a;
              q2 = A({}, q2, r2);
              break a;
            case 2:
              $g = true;
          }
        }
        null !== h.callback && 0 !== h.lane && (a.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h] : r2.push(h));
      } else
        y2 = { eventTime: y2, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g |= r2;
      h = h.next;
      if (null === h)
        if (h = e.shared.pending, null === h)
          break;
        else
          r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e.baseState = k2;
    e.firstBaseUpdate = l2;
    e.lastBaseUpdate = m2;
    b = e.shared.interleaved;
    if (null !== b) {
      e = b;
      do
        g |= e.lane, e = e.next;
      while (e !== b);
    } else
      null === f2 && (e.shared.lanes = 0);
    hh |= g;
    a.lanes = g;
    a.memoizedState = q2;
  }
}
function ih(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (null !== a)
    for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e)
          throw Error(p(191, e));
        e.call(d);
      }
    }
}
var jh = new aa.Component().refs;
function kh(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : A({}, b, c);
  a.memoizedState = c;
  0 === a.lanes && (a.updateQueue.baseState = c);
}
var nh = { isMounted: function(a) {
  return (a = a._reactInternals) ? Vb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = L(), e = lh(a), f2 = ch(d, e);
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = dh(a, f2, e);
  null !== b && (mh(b, a, e, d), eh(b, a, e));
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = L(), e = lh(a), f2 = ch(d, e);
  f2.tag = 1;
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = dh(a, f2, e);
  null !== b && (mh(b, a, e, d), eh(b, a, e));
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = L(), d = lh(a), e = ch(c, d);
  e.tag = 2;
  void 0 !== b && null !== b && (e.callback = b);
  b = dh(a, e, d);
  null !== b && (mh(b, a, d, c), eh(b, a, d));
} };
function oh(a, b, c, d, e, f2, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f2) : true;
}
function ph(a, b, c) {
  var d = false, e = Vf;
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
  b = new b(c, f2);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = nh;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b;
}
function qh(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && nh.enqueueReplaceState(b, b.state, null);
}
function rh(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = jh;
  ah(a);
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? e.context = Vg(f2) : (f2 = Zf(b) ? Xf : H.current, e.context = Yf(a, f2));
  e.state = a.memoizedState;
  f2 = b.getDerivedStateFromProps;
  "function" === typeof f2 && (kh(a, b, f2, c), e.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a, c, e, d), e.state = a.memoizedState);
  "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
function sh(a, b, c) {
  a = c.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (1 !== c.tag)
          throw Error(p(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(p(147, a));
      var e = d, f2 = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2)
        return b.ref;
      b = function(a2) {
        var b2 = e.refs;
        b2 === jh && (b2 = e.refs = {});
        null === a2 ? delete b2[f2] : b2[f2] = a2;
      };
      b._stringRef = f2;
      return b;
    }
    if ("string" !== typeof a)
      throw Error(p(284));
    if (!c._owner)
      throw Error(p(290, a));
  }
  return a;
}
function th(a, b) {
  a = Object.prototype.toString.call(b);
  throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function uh(a) {
  var b = a._init;
  return b(a._payload);
}
function vh(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.deletions;
      null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
    }
  }
  function c(c2, d2) {
    if (!a)
      return null;
    for (; null !== d2; )
      b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b2; )
      null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = wh(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b2, c2, d2) {
    b2.index = d2;
    if (!a)
      return b2.flags |= 1048576, c2;
    d2 = b2.alternate;
    if (null !== d2)
      return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
    b2.flags |= 2;
    return c2;
  }
  function g(b2) {
    a && null === b2.alternate && (b2.flags |= 2);
    return b2;
  }
  function h(a2, b2, c2, d2) {
    if (null === b2 || 6 !== b2.tag)
      return b2 = xh(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k2(a2, b2, c2, d2) {
    var f3 = c2.type;
    if (f3 === ya)
      return m2(a2, b2, c2.props.children, d2, c2.key);
    if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b2.type))
      return d2 = e(b2, c2.props), d2.ref = sh(a2, b2, c2), d2.return = a2, d2;
    d2 = yh(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = sh(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b2, c2, d2) {
    if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
      return b2 = zh(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function m2(a2, b2, c2, d2, f3) {
    if (null === b2 || 7 !== b2.tag)
      return b2 = Ah(c2, a2.mode, d2, f3), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function q2(a2, b2, c2) {
    if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2)
      return b2 = xh("" + b2, a2.mode, c2), b2.return = a2, b2;
    if ("object" === typeof b2 && null !== b2) {
      switch (b2.$$typeof) {
        case va:
          return c2 = yh(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = sh(a2, null, b2), c2.return = a2, c2;
        case wa:
          return b2 = zh(b2, a2.mode, c2), b2.return = a2, b2;
        case Ha:
          var d2 = b2._init;
          return q2(a2, d2(b2._payload), c2);
      }
      if (eb(b2) || Ka(b2))
        return b2 = Ah(b2, a2.mode, c2, null), b2.return = a2, b2;
      th(a2, b2);
    }
    return null;
  }
  function r2(a2, b2, c2, d2) {
    var e2 = null !== b2 ? b2.key : null;
    if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2)
      return null !== e2 ? null : h(a2, b2, "" + c2, d2);
    if ("object" === typeof c2 && null !== c2) {
      switch (c2.$$typeof) {
        case va:
          return c2.key === e2 ? k2(a2, b2, c2, d2) : null;
        case wa:
          return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
        case Ha:
          return e2 = c2._init, r2(
            a2,
            b2,
            e2(c2._payload),
            d2
          );
      }
      if (eb(c2) || Ka(c2))
        return null !== e2 ? null : m2(a2, b2, c2, d2, null);
      th(a2, c2);
    }
    return null;
  }
  function y2(a2, b2, c2, d2, e2) {
    if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2)
      return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
    if ("object" === typeof d2 && null !== d2) {
      switch (d2.$$typeof) {
        case va:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b2, a2, d2, e2);
        case wa:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
        case Ha:
          var f3 = d2._init;
          return y2(a2, b2, c2, f3(d2._payload), e2);
      }
      if (eb(d2) || Ka(d2))
        return a2 = a2.get(c2) || null, m2(b2, a2, d2, e2, null);
      th(b2, d2);
    }
    return null;
  }
  function n2(e2, g2, h2, k3) {
    for (var l3 = null, m3 = null, u2 = g2, w2 = g2 = 0, x2 = null; null !== u2 && w2 < h2.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e2, u2, h2[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a && u2 && null === n3.alternate && b(e2, u2);
      g2 = f2(n3, g2, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h2.length)
      return c(e2, u2), I && tg(e2, w2), l3;
    if (null === u2) {
      for (; w2 < h2.length; w2++)
        u2 = q2(e2, h2[w2], k3), null !== u2 && (g2 = f2(u2, g2, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I && tg(e2, w2);
      return l3;
    }
    for (u2 = d(e2, u2); w2 < h2.length; w2++)
      x2 = y2(u2, e2, w2, h2[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a && u2.forEach(function(a2) {
      return b(e2, a2);
    });
    I && tg(e2, w2);
    return l3;
  }
  function t2(e2, g2, h2, k3) {
    var l3 = Ka(h2);
    if ("function" !== typeof l3)
      throw Error(p(150));
    h2 = l3.call(h2);
    if (null == h2)
      throw Error(p(151));
    for (var u2 = l3 = null, m3 = g2, w2 = g2 = 0, x2 = null, n3 = h2.next(); null !== m3 && !n3.done; w2++, n3 = h2.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e2, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a && m3 && null === t3.alternate && b(e2, m3);
      g2 = f2(t3, g2, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done)
      return c(
        e2,
        m3
      ), I && tg(e2, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h2.next())
        n3 = q2(e2, n3.value, k3), null !== n3 && (g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I && tg(e2, w2);
      return l3;
    }
    for (m3 = d(e2, m3); !n3.done; w2++, n3 = h2.next())
      n3 = y2(m3, e2, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a && m3.forEach(function(a2) {
      return b(e2, a2);
    });
    I && tg(e2, w2);
    return l3;
  }
  function J2(a2, d2, f3, h2) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d2; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c(a2, l3.sibling);
                    d2 = e(l3, f3.props.children);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
                  c(a2, l3.sibling);
                  d2 = e(l3, f3.props);
                  d2.ref = sh(a2, l3, f3);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                }
                c(a2, l3);
                break;
              } else
                b(a2, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d2 = Ah(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = yh(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = sh(a2, d2, f3), h2.return = a2, a2 = h2);
          }
          return g(a2);
        case wa:
          a: {
            for (l3 = f3.key; null !== d2; ) {
              if (d2.key === l3)
                if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f3.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
              else
                b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = zh(f3, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
        case Ha:
          return l3 = f3._init, J2(a2, d2, l3(f3._payload), h2);
      }
      if (eb(f3))
        return n2(a2, d2, f3, h2);
      if (Ka(f3))
        return t2(a2, d2, f3, h2);
      th(a2, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = xh(f3, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
  }
  return J2;
}
var Bh = vh(true), Ch = vh(false), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
function Hh(a) {
  if (a === Dh)
    throw Error(p(174));
  return a;
}
function Ih(a, b) {
  G(Gh, b);
  G(Fh, a);
  G(Eh, Dh);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
      break;
    default:
      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
  }
  E(Eh);
  G(Eh, b);
}
function Jh() {
  E(Eh);
  E(Fh);
  E(Gh);
}
function Kh(a) {
  Hh(Gh.current);
  var b = Hh(Eh.current);
  var c = lb(b, a.type);
  b !== c && (G(Fh, a), G(Eh, c));
}
function Lh(a) {
  Fh.current === a && (E(Eh), E(Fh));
}
var M = Uf(0);
function Mh(a) {
  for (var b = a; null !== b; ) {
    if (13 === b.tag) {
      var c = b.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data))
        return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if (0 !== (b.flags & 128))
        return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a)
      break;
    for (; null === b.sibling; ) {
      if (null === b.return || b.return === a)
        return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var Nh = [];
function Oh() {
  for (var a = 0; a < Nh.length; a++)
    Nh[a]._workInProgressVersionPrimary = null;
  Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N = null, O = null, P = null, Sh = false, Th = false, Uh = 0, Vh = 0;
function Q() {
  throw Error(p(321));
}
function Wh(a, b) {
  if (null === b)
    return false;
  for (var c = 0; c < b.length && c < a.length; c++)
    if (!He(a[c], b[c]))
      return false;
  return true;
}
function Xh(a, b, c, d, e, f2) {
  Rh = f2;
  N = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
  a = c(d, e);
  if (Th) {
    f2 = 0;
    do {
      Th = false;
      Uh = 0;
      if (25 <= f2)
        throw Error(p(301));
      f2 += 1;
      P = O = null;
      b.updateQueue = null;
      Ph.current = $h;
      a = c(d, e);
    } while (Th);
  }
  Ph.current = ai;
  b = null !== O && null !== O.next;
  Rh = 0;
  P = O = N = null;
  Sh = false;
  if (b)
    throw Error(p(300));
  return a;
}
function bi() {
  var a = 0 !== Uh;
  Uh = 0;
  return a;
}
function ci() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === P ? N.memoizedState = P = a : P = P.next = a;
  return P;
}
function di() {
  if (null === O) {
    var a = N.alternate;
    a = null !== a ? a.memoizedState : null;
  } else
    a = O.next;
  var b = null === P ? N.memoizedState : P.next;
  if (null !== b)
    P = b, O = a;
  else {
    if (null === a)
      throw Error(p(310));
    O = a;
    a = { memoizedState: O.memoizedState, baseState: O.baseState, baseQueue: O.baseQueue, queue: O.queue, next: null };
    null === P ? N.memoizedState = P = a : P = P.next = a;
  }
  return P;
}
function ei(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function fi(a) {
  var b = di(), c = b.queue;
  if (null === c)
    throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = O, e = d.baseQueue, f2 = c.pending;
  if (null !== f2) {
    if (null !== e) {
      var g = e.next;
      e.next = f2.next;
      f2.next = g;
    }
    d.baseQueue = e = f2;
    c.pending = null;
  }
  if (null !== e) {
    f2 = e.next;
    d = d.baseState;
    var h = g = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Rh & m2) === m2)
        null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h = k2 = q2, g = d) : k2 = k2.next = q2;
        N.lanes |= m2;
        hh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g = d : k2.next = h;
    He(d, b.memoizedState) || (Ug = true);
    b.memoizedState = d;
    b.baseState = g;
    b.baseQueue = k2;
    c.lastRenderedState = d;
  }
  a = c.interleaved;
  if (null !== a) {
    e = a;
    do
      f2 = e.lane, N.lanes |= f2, hh |= f2, e = e.next;
    while (e !== a);
  } else
    null === e && (c.lanes = 0);
  return [b.memoizedState, c.dispatch];
}
function gi(a) {
  var b = di(), c = b.queue;
  if (null === c)
    throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f2 = b.memoizedState;
  if (null !== e) {
    c.pending = null;
    var g = e = e.next;
    do
      f2 = a(f2, g.action), g = g.next;
    while (g !== e);
    He(f2, b.memoizedState) || (Ug = true);
    b.memoizedState = f2;
    null === b.baseQueue && (b.baseState = f2);
    c.lastRenderedState = f2;
  }
  return [f2, d];
}
function hi() {
}
function ii(a, b) {
  var c = N, d = di(), e = b(), f2 = !He(d.memoizedState, e);
  f2 && (d.memoizedState = e, Ug = true);
  d = d.queue;
  ji(ki.bind(null, c, d, a), [a]);
  if (d.getSnapshot !== b || f2 || null !== P && P.memoizedState.tag & 1) {
    c.flags |= 2048;
    li(9, mi.bind(null, c, d, e, b), void 0, null);
    if (null === R)
      throw Error(p(349));
    0 !== (Rh & 30) || ni(c, b, e);
  }
  return e;
}
function ni(a, b, c) {
  a.flags |= 16384;
  a = { getSnapshot: b, value: c };
  b = N.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, N.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
}
function mi(a, b, c, d) {
  b.value = c;
  b.getSnapshot = d;
  oi(b) && pi(a);
}
function ki(a, b, c) {
  return c(function() {
    oi(b) && pi(a);
  });
}
function oi(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var c = b();
    return !He(a, c);
  } catch (d) {
    return true;
  }
}
function pi(a) {
  var b = Zg(a, 1);
  null !== b && mh(b, a, 1, -1);
}
function qi(a) {
  var b = ci();
  "function" === typeof a && (a = a());
  b.memoizedState = b.baseState = a;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a };
  b.queue = a;
  a = a.dispatch = ri.bind(null, N, a);
  return [b.memoizedState, a];
}
function li(a, b, c, d) {
  a = { tag: a, create: b, destroy: c, deps: d, next: null };
  b = N.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function si() {
  return di().memoizedState;
}
function ti(a, b, c, d) {
  var e = ci();
  N.flags |= a;
  e.memoizedState = li(1 | b, c, void 0, void 0 === d ? null : d);
}
function ui(a, b, c, d) {
  var e = di();
  d = void 0 === d ? null : d;
  var f2 = void 0;
  if (null !== O) {
    var g = O.memoizedState;
    f2 = g.destroy;
    if (null !== d && Wh(d, g.deps)) {
      e.memoizedState = li(b, c, f2, d);
      return;
    }
  }
  N.flags |= a;
  e.memoizedState = li(1 | b, c, f2, d);
}
function vi(a, b) {
  return ti(8390656, 8, a, b);
}
function ji(a, b) {
  return ui(2048, 8, a, b);
}
function wi(a, b) {
  return ui(4, 2, a, b);
}
function xi(a, b) {
  return ui(4, 4, a, b);
}
function yi(a, b) {
  if ("function" === typeof b)
    return a = a(), b(a), function() {
      b(null);
    };
  if (null !== b && void 0 !== b)
    return a = a(), b.current = a, function() {
      b.current = null;
    };
}
function zi(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ui(4, 4, yi.bind(null, b, a), c);
}
function Ai() {
}
function Bi(a, b) {
  var c = di();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Wh(b, d[1]))
    return d[0];
  c.memoizedState = [a, b];
  return a;
}
function Ci(a, b) {
  var c = di();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Wh(b, d[1]))
    return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function Di(a, b, c) {
  if (0 === (Rh & 21))
    return a.baseState && (a.baseState = false, Ug = true), a.memoizedState = c;
  He(c, b) || (c = yc(), N.lanes |= c, hh |= c, a.baseState = true);
  return b;
}
function Ei(a, b) {
  var c = C;
  C = 0 !== c && 4 > c ? c : 4;
  a(true);
  var d = Qh.transition;
  Qh.transition = {};
  try {
    a(false), b();
  } finally {
    C = c, Qh.transition = d;
  }
}
function Fi() {
  return di().memoizedState;
}
function Gi(a, b, c) {
  var d = lh(a);
  c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a))
    Ii(b, c);
  else if (c = Yg(a, b, c, d), null !== c) {
    var e = L();
    mh(c, a, d, e);
    Ji(c, b, d);
  }
}
function ri(a, b, c) {
  var d = lh(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a))
    Ii(b, e);
  else {
    var f2 = a.alternate;
    if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2))
      try {
        var g = b.lastRenderedState, h = f2(g, c);
        e.hasEagerState = true;
        e.eagerState = h;
        if (He(h, g)) {
          var k2 = b.interleaved;
          null === k2 ? (e.next = e, Xg(b)) : (e.next = k2.next, k2.next = e);
          b.interleaved = e;
          return;
        }
      } catch (l2) {
      } finally {
      }
    c = Yg(a, b, e, d);
    null !== c && (e = L(), mh(c, a, d, e), Ji(c, b, d));
  }
}
function Hi(a) {
  var b = a.alternate;
  return a === N || null !== b && b === N;
}
function Ii(a, b) {
  Th = Sh = true;
  var c = a.pending;
  null === c ? b.next = b : (b.next = c.next, c.next = b);
  a.pending = b;
}
function Ji(a, b, c) {
  if (0 !== (c & 4194240)) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
var ai = { readContext: Vg, useCallback: Q, useContext: Q, useEffect: Q, useImperativeHandle: Q, useInsertionEffect: Q, useLayoutEffect: Q, useMemo: Q, useReducer: Q, useRef: Q, useState: Q, useDebugValue: Q, useDeferredValue: Q, useTransition: Q, useMutableSource: Q, useSyncExternalStore: Q, useId: Q, unstable_isNewReconciler: false }, Yh = { readContext: Vg, useCallback: function(a, b) {
  ci().memoizedState = [a, void 0 === b ? null : b];
  return a;
}, useContext: Vg, useEffect: vi, useImperativeHandle: function(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ti(
    4194308,
    4,
    yi.bind(null, b, a),
    c
  );
}, useLayoutEffect: function(a, b) {
  return ti(4194308, 4, a, b);
}, useInsertionEffect: function(a, b) {
  return ti(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = ci();
  b = void 0 === b ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = ci();
  b = void 0 !== c ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
  d.queue = a;
  a = a.dispatch = Gi.bind(null, N, a);
  return [d.memoizedState, a];
}, useRef: function(a) {
  var b = ci();
  a = { current: a };
  return b.memoizedState = a;
}, useState: qi, useDebugValue: Ai, useDeferredValue: function(a) {
  return ci().memoizedState = a;
}, useTransition: function() {
  var a = qi(false), b = a[0];
  a = Ei.bind(null, a[1]);
  ci().memoizedState = a;
  return [b, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b, c) {
  var d = N, e = ci();
  if (I) {
    if (void 0 === c)
      throw Error(p(407));
    c = c();
  } else {
    c = b();
    if (null === R)
      throw Error(p(349));
    0 !== (Rh & 30) || ni(d, b, c);
  }
  e.memoizedState = c;
  var f2 = { value: c, getSnapshot: b };
  e.queue = f2;
  vi(ki.bind(
    null,
    d,
    f2,
    a
  ), [a]);
  d.flags |= 2048;
  li(9, mi.bind(null, d, f2, c, b), void 0, null);
  return c;
}, useId: function() {
  var a = ci(), b = R.identifierPrefix;
  if (I) {
    var c = sg;
    var d = rg;
    c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
    b = ":" + b + "R" + c;
    c = Uh++;
    0 < c && (b += "H" + c.toString(32));
    b += ":";
  } else
    c = Vh++, b = ":" + b + "r" + c.toString(32) + ":";
  return a.memoizedState = b;
}, unstable_isNewReconciler: false }, Zh = {
  readContext: Vg,
  useCallback: Bi,
  useContext: Vg,
  useEffect: ji,
  useImperativeHandle: zi,
  useInsertionEffect: wi,
  useLayoutEffect: xi,
  useMemo: Ci,
  useReducer: fi,
  useRef: si,
  useState: function() {
    return fi(ei);
  },
  useDebugValue: Ai,
  useDeferredValue: function(a) {
    var b = di();
    return Di(b, O.memoizedState, a);
  },
  useTransition: function() {
    var a = fi(ei)[0], b = di().memoizedState;
    return [a, b];
  },
  useMutableSource: hi,
  useSyncExternalStore: ii,
  useId: Fi,
  unstable_isNewReconciler: false
}, $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
  return gi(ei);
}, useDebugValue: Ai, useDeferredValue: function(a) {
  var b = di();
  return null === O ? b.memoizedState = a : Di(b, O.memoizedState, a);
}, useTransition: function() {
  var a = gi(ei)[0], b = di().memoizedState;
  return [a, b];
}, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
function Ki(a, b) {
  try {
    var c = "", d = b;
    do
      c += Pa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f2) {
    e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b, stack: e, digest: null };
}
function Li(a, b, c) {
  return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
}
function Mi(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Ni = "function" === typeof WeakMap ? WeakMap : Map;
function Oi(a, b, c) {
  c = ch(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b.value;
  c.callback = function() {
    Pi || (Pi = true, Qi = d);
    Mi(a, b);
  };
  return c;
}
function Ri(a, b, c) {
  c = ch(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if ("function" === typeof d) {
    var e = b.value;
    c.payload = function() {
      return d(e);
    };
    c.callback = function() {
      Mi(a, b);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
    Mi(a, b);
    "function" !== typeof d && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
    var c2 = b.stack;
    this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
  });
  return c;
}
function Ti(a, b, c) {
  var d = a.pingCache;
  if (null === d) {
    d = a.pingCache = new Ni();
    var e = /* @__PURE__ */ new Set();
    d.set(b, e);
  } else
    e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
  e.has(c) || (e.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
}
function Vi(a) {
  do {
    var b;
    if (b = 13 === a.tag)
      b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
    if (b)
      return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Wi(a, b, c, d, e) {
  if (0 === (a.mode & 1))
    return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c, b, 1))), c.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e;
  return a;
}
var Xi = ua.ReactCurrentOwner, Ug = false;
function Yi(a, b, c, d) {
  b.child = null === a ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
}
function Zi(a, b, c, d, e) {
  c = c.render;
  var f2 = b.ref;
  Tg(b, e);
  d = Xh(a, b, c, d, f2, e);
  c = bi();
  if (null !== a && !Ug)
    return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
  I && c && vg(b);
  b.flags |= 1;
  Yi(a, b, d, e);
  return b.child;
}
function aj(a, b, c, d, e) {
  if (null === a) {
    var f2 = c.type;
    if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps)
      return b.tag = 15, b.type = f2, cj(a, b, f2, d, e);
    a = yh(c.type, null, d, b, b.mode, e);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  f2 = a.child;
  if (0 === (a.lanes & e)) {
    var g = f2.memoizedProps;
    c = c.compare;
    c = null !== c ? c : Ie;
    if (c(g, d) && a.ref === b.ref)
      return $i(a, b, e);
  }
  b.flags |= 1;
  a = wh(f2, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function cj(a, b, c, d, e) {
  if (null !== a) {
    var f2 = a.memoizedProps;
    if (Ie(f2, d) && a.ref === b.ref)
      if (Ug = false, b.pendingProps = d = f2, 0 !== (a.lanes & e))
        0 !== (a.flags & 131072) && (Ug = true);
      else
        return b.lanes = a.lanes, $i(a, b, e);
  }
  return dj(a, b, c, d, e);
}
function ej(a, b, c) {
  var d = b.pendingProps, e = d.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d.mode)
    if (0 === (b.mode & 1))
      b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(fj, gj), gj |= c;
    else {
      if (0 === (c & 1073741824))
        return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(fj, gj), gj |= a, null;
      b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d = null !== f2 ? f2.baseLanes : c;
      G(fj, gj);
      gj |= d;
    }
  else
    null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, G(fj, gj), gj |= d;
  Yi(a, b, e, c);
  return b.child;
}
function hj(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c)
    b.flags |= 512, b.flags |= 2097152;
}
function dj(a, b, c, d, e) {
  var f2 = Zf(c) ? Xf : H.current;
  f2 = Yf(b, f2);
  Tg(b, e);
  c = Xh(a, b, c, d, f2, e);
  d = bi();
  if (null !== a && !Ug)
    return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
  I && d && vg(b);
  b.flags |= 1;
  Yi(a, b, c, e);
  return b.child;
}
function ij(a, b, c, d, e) {
  if (Zf(c)) {
    var f2 = true;
    cg(b);
  } else
    f2 = false;
  Tg(b, e);
  if (null === b.stateNode)
    jj(a, b), ph(b, c, d), rh(b, c, d, e), d = true;
  else if (null === a) {
    var g = b.stateNode, h = b.memoizedProps;
    g.props = h;
    var k2 = g.context, l2 = c.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c) ? Xf : H.current, l2 = Yf(b, l2));
    var m2 = c.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && qh(b, g, d, l2);
    $g = false;
    var r2 = b.memoizedState;
    g.state = r2;
    gh(b, d, g, e);
    k2 = b.memoizedState;
    h !== d || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh(b, c, m2, d), k2 = b.memoizedState), (h = $g || oh(b, c, h, d, r2, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
  } else {
    g = b.stateNode;
    bh(a, b);
    h = b.memoizedProps;
    l2 = b.type === b.elementType ? h : Lg(b.type, h);
    g.props = l2;
    q2 = b.pendingProps;
    r2 = g.context;
    k2 = c.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c) ? Xf : H.current, k2 = Yf(b, k2));
    var y2 = c.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q2 || r2 !== k2) && qh(b, g, d, k2);
    $g = false;
    r2 = b.memoizedState;
    g.state = r2;
    gh(b, d, g, e);
    var n2 = b.memoizedState;
    h !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh(b, c, y2, d), n2 = b.memoizedState), (l2 = $g || oh(b, c, l2, d, r2, n2, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k2)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n2), g.props = d, g.state = n2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), d = false);
  }
  return kj(a, b, c, d, f2, e);
}
function kj(a, b, c, d, e, f2) {
  hj(a, b);
  var g = 0 !== (b.flags & 128);
  if (!d && !g)
    return e && dg(b, c, false), $i(a, b, f2);
  d = b.stateNode;
  Xi.current = b;
  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.flags |= 1;
  null !== a && g ? (b.child = Bh(b, a.child, null, f2), b.child = Bh(b, null, h, f2)) : Yi(a, b, h, f2);
  b.memoizedState = d.state;
  e && dg(b, c, true);
  return b.child;
}
function lj(a) {
  var b = a.stateNode;
  b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
  Ih(a, b.containerInfo);
}
function mj(a, b, c, d, e) {
  Ig();
  Jg(e);
  b.flags |= 256;
  Yi(a, b, c, d);
  return b.child;
}
var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
function oj(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function pj(a, b, c) {
  var d = b.pendingProps, e = M.current, f2 = false, g = 0 !== (b.flags & 128), h;
  (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
  if (h)
    f2 = true, b.flags &= -129;
  else if (null === a || null !== a.memoizedState)
    e |= 1;
  G(M, e & 1);
  if (null === a) {
    Eg(b);
    a = b.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a))
      return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
    g = d.children;
    a = d.fallback;
    return f2 ? (d = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = qj(g, d, 0, null), a = Ah(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = oj(c), b.memoizedState = nj, a) : rj(b, g);
  }
  e = a.memoizedState;
  if (null !== e && (h = e.dehydrated, null !== h))
    return sj(a, b, g, d, h, e, c);
  if (f2) {
    f2 = d.fallback;
    g = b.mode;
    e = a.child;
    h = e.sibling;
    var k2 = { mode: "hidden", children: d.children };
    0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k2, b.deletions = null) : (d = wh(e, k2), d.subtreeFlags = e.subtreeFlags & 14680064);
    null !== h ? f2 = wh(h, f2) : (f2 = Ah(f2, g, c, null), f2.flags |= 2);
    f2.return = b;
    d.return = b;
    d.sibling = f2;
    b.child = d;
    d = f2;
    f2 = b.child;
    g = a.child.memoizedState;
    g = null === g ? oj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
    f2.memoizedState = g;
    f2.childLanes = a.childLanes & ~c;
    b.memoizedState = nj;
    return d;
  }
  f2 = a.child;
  a = f2.sibling;
  d = wh(f2, { mode: "visible", children: d.children });
  0 === (b.mode & 1) && (d.lanes = c);
  d.return = b;
  d.sibling = null;
  null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
  b.child = d;
  b.memoizedState = null;
  return d;
}
function rj(a, b) {
  b = qj({ mode: "visible", children: b }, a.mode, 0, null);
  b.return = a;
  return a.child = b;
}
function tj(a, b, c, d) {
  null !== d && Jg(d);
  Bh(b, a.child, null, c);
  a = rj(b, b.pendingProps.children);
  a.flags |= 2;
  b.memoizedState = null;
  return a;
}
function sj(a, b, c, d, e, f2, g) {
  if (c) {
    if (b.flags & 256)
      return b.flags &= -257, d = Li(Error(p(422))), tj(a, b, g, d);
    if (null !== b.memoizedState)
      return b.child = a.child, b.flags |= 128, null;
    f2 = d.fallback;
    e = b.mode;
    d = qj({ mode: "visible", children: d.children }, e, 0, null);
    f2 = Ah(f2, e, g, null);
    f2.flags |= 2;
    d.return = b;
    f2.return = b;
    d.sibling = f2;
    b.child = d;
    0 !== (b.mode & 1) && Bh(b, a.child, null, g);
    b.child.memoizedState = oj(g);
    b.memoizedState = nj;
    return f2;
  }
  if (0 === (b.mode & 1))
    return tj(a, b, g, null);
  if ("$!" === e.data) {
    d = e.nextSibling && e.nextSibling.dataset;
    if (d)
      var h = d.dgst;
    d = h;
    f2 = Error(p(419));
    d = Li(f2, d, void 0);
    return tj(a, b, g, d);
  }
  h = 0 !== (g & a.childLanes);
  if (Ug || h) {
    d = R;
    if (null !== d) {
      switch (g & -g) {
        case 4:
          e = 2;
          break;
        case 16:
          e = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e = 32;
          break;
        case 536870912:
          e = 268435456;
          break;
        default:
          e = 0;
      }
      e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
      0 !== e && e !== f2.retryLane && (f2.retryLane = e, Zg(a, e), mh(d, a, e, -1));
    }
    uj();
    d = Li(Error(p(421)));
    return tj(a, b, g, d);
  }
  if ("$?" === e.data)
    return b.flags |= 128, b.child = a.child, b = vj.bind(null, a), e._reactRetry = b, null;
  a = f2.treeContext;
  yg = Lf(e.nextSibling);
  xg = b;
  I = true;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
  b = rj(b, d.children);
  b.flags |= 4096;
  return b;
}
function wj(a, b, c) {
  a.lanes |= b;
  var d = a.alternate;
  null !== d && (d.lanes |= b);
  Sg(a.return, b, c);
}
function xj(a, b, c, d, e) {
  var f2 = a.memoizedState;
  null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e);
}
function yj(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
  Yi(a, b, d.children, c);
  d = M.current;
  if (0 !== (d & 2))
    d = d & 1 | 2, b.flags |= 128;
  else {
    if (null !== a && 0 !== (a.flags & 128))
      a:
        for (a = b.child; null !== a; ) {
          if (13 === a.tag)
            null !== a.memoizedState && wj(a, c, b);
          else if (19 === a.tag)
            wj(a, c, b);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b)
            break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  G(M, d);
  if (0 === (b.mode & 1))
    b.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; null !== c; )
          a = c.alternate, null !== a && null === Mh(a) && (e = c), c = c.sibling;
        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        xj(b, false, e, c, f2);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; null !== e; ) {
          a = e.alternate;
          if (null !== a && null === Mh(a)) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        xj(b, true, c, null, f2);
        break;
      case "together":
        xj(b, false, null, null, void 0);
        break;
      default:
        b.memoizedState = null;
    }
  return b.child;
}
function jj(a, b) {
  0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function $i(a, b, c) {
  null !== a && (b.dependencies = a.dependencies);
  hh |= b.lanes;
  if (0 === (c & b.childLanes))
    return null;
  if (null !== a && b.child !== a.child)
    throw Error(p(153));
  if (null !== b.child) {
    a = b.child;
    c = wh(a, a.pendingProps);
    b.child = c;
    for (c.return = b; null !== a.sibling; )
      a = a.sibling, c = c.sibling = wh(a, a.pendingProps), c.return = b;
    c.sibling = null;
  }
  return b.child;
}
function zj(a, b, c) {
  switch (b.tag) {
    case 3:
      lj(b);
      Ig();
      break;
    case 5:
      Kh(b);
      break;
    case 1:
      Zf(b.type) && cg(b);
      break;
    case 4:
      Ih(b, b.stateNode.containerInfo);
      break;
    case 10:
      var d = b.type._context, e = b.memoizedProps.value;
      G(Mg, d._currentValue);
      d._currentValue = e;
      break;
    case 13:
      d = b.memoizedState;
      if (null !== d) {
        if (null !== d.dehydrated)
          return G(M, M.current & 1), b.flags |= 128, null;
        if (0 !== (c & b.child.childLanes))
          return pj(a, b, c);
        G(M, M.current & 1);
        a = $i(a, b, c);
        return null !== a ? a.sibling : null;
      }
      G(M, M.current & 1);
      break;
    case 19:
      d = 0 !== (c & b.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d)
          return yj(a, b, c);
        b.flags |= 128;
      }
      e = b.memoizedState;
      null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
      G(M, M.current);
      if (d)
        break;
      else
        return null;
    case 22:
    case 23:
      return b.lanes = 0, ej(a, b, c);
  }
  return $i(a, b, c);
}
var Aj, Bj, Cj, Dj;
Aj = function(a, b) {
  for (var c = b.child; null !== c; ) {
    if (5 === c.tag || 6 === c.tag)
      a.appendChild(c.stateNode);
    else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; null === c.sibling; ) {
      if (null === c.return || c.return === b)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Bj = function() {
};
Cj = function(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    Hh(Eh.current);
    var f2 = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f2 = [];
        break;
      case "select":
        e = A({}, e, { value: void 0 });
        d = A({}, d, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f2 = [];
        break;
      default:
        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
    }
    ub(c, d);
    var g;
    c = null;
    for (l2 in e)
      if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2])
        if ("style" === l2) {
          var h = e[l2];
          for (g in h)
            h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else
          "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d) {
      var k2 = d[l2];
      h = null != e ? e[l2] : void 0;
      if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h))
        if ("style" === l2)
          if (h) {
            for (g in h)
              !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k2)
              k2.hasOwnProperty(g) && h[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
          } else
            c || (f2 || (f2 = []), f2.push(
              l2,
              c
            )), c = k2;
        else
          "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c && (f2 = f2 || []).push("style", c);
    var l2 = f2;
    if (b.updateQueue = l2)
      b.flags |= 4;
  }
};
Dj = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Ej(a, b) {
  if (!I)
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; null !== b; )
          null !== b.alternate && (c = b), b = b.sibling;
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c; )
          null !== c.alternate && (d = c), c = c.sibling;
        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function S(a) {
  var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
  if (b)
    for (var e = a.child; null !== e; )
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
  else
    for (e = a.child; null !== e; )
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
  a.subtreeFlags |= d;
  a.childLanes = c;
  return b;
}
function Fj(a, b, c) {
  var d = b.pendingProps;
  wg(b);
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S(b), null;
    case 1:
      return Zf(b.type) && $f(), S(b), null;
    case 3:
      d = b.stateNode;
      Jh();
      E(Wf);
      E(H);
      Oh();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (null === a || null === a.child)
        Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Gj(zg), zg = null));
      Bj(a, b);
      S(b);
      return null;
    case 5:
      Lh(b);
      var e = Hh(Gh.current);
      c = b.type;
      if (null !== a && null != b.stateNode)
        Cj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      else {
        if (!d) {
          if (null === b.stateNode)
            throw Error(p(166));
          S(b);
          return null;
        }
        a = Hh(Eh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.type;
          var f2 = b.memoizedProps;
          d[Of] = b;
          d[Pf] = f2;
          a = 0 !== (b.mode & 1);
          switch (c) {
            case "dialog":
              D("cancel", d);
              D("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d);
              break;
            case "video":
            case "audio":
              for (e = 0; e < lf.length; e++)
                D(lf[e], d);
              break;
            case "source":
              D("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                d
              );
              D("load", d);
              break;
            case "details":
              D("toggle", d);
              break;
            case "input":
              Za(d, f2);
              D("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f2.multiple };
              D("invalid", d);
              break;
            case "textarea":
              hb(d, f2), D("invalid", d);
          }
          ub(c, f2);
          e = null;
          for (var g in f2)
            if (f2.hasOwnProperty(g)) {
              var h = f2[g];
              "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
                d.textContent,
                h,
                a
              ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
            }
          switch (c) {
            case "input":
              Va(d);
              db(d, f2, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d.onclick = Bf);
          }
          d = e;
          b.updateQueue = d;
          null !== d && (b.flags |= 4);
        } else {
          g = 9 === e.nodeType ? e : e.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[Of] = b;
          a[Pf] = d;
          Aj(a, b, false, false);
          b.stateNode = a;
          a: {
            g = vb(c, d);
            switch (c) {
              case "dialog":
                D("cancel", a);
                D("close", a);
                e = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a);
                e = d;
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++)
                  D(lf[e], a);
                e = d;
                break;
              case "source":
                D("error", a);
                e = d;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  a
                );
                D("load", a);
                e = d;
                break;
              case "details":
                D("toggle", a);
                e = d;
                break;
              case "input":
                Za(a, d);
                e = Ya(a, d);
                D("invalid", a);
                break;
              case "option":
                e = d;
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d.multiple };
                e = A({}, d, { value: void 0 });
                D("invalid", a);
                break;
              case "textarea":
                hb(a, d);
                e = gb(a, d);
                D("invalid", a);
                break;
              default:
                e = d;
            }
            ub(c, e);
            h = e;
            for (f2 in h)
              if (h.hasOwnProperty(f2)) {
                var k2 = h[f2];
                "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g));
              }
            switch (c) {
              case "input":
                Va(a);
                db(a, d, false);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                null != d.value && a.setAttribute("value", "" + Sa(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                f2 = d.value;
                null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                  a,
                  !!d.multiple,
                  d.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e.onClick && (a.onclick = Bf);
            }
            switch (c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = true;
                break a;
              default:
                d = false;
            }
          }
          d && (b.flags |= 4);
        }
        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      }
      S(b);
      return null;
    case 6:
      if (a && null != b.stateNode)
        Dj(a, b, a.memoizedProps, d);
      else {
        if ("string" !== typeof d && null === b.stateNode)
          throw Error(p(166));
        c = Hh(Gh.current);
        Hh(Eh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.memoizedProps;
          d[Of] = b;
          if (f2 = d.nodeValue !== c) {
            if (a = xg, null !== a)
              switch (a.tag) {
                case 3:
                  Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  break;
                case 5:
                  true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
              }
          }
          f2 && (b.flags |= 4);
        } else
          d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
      }
      S(b);
      return null;
    case 13:
      E(M);
      d = b.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128))
          Hg(), Ig(), b.flags |= 98560, f2 = false;
        else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
          if (null === a) {
            if (!f2)
              throw Error(p(318));
            f2 = b.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2)
              throw Error(p(317));
            f2[Of] = b;
          } else
            Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
          S(b);
          f2 = false;
        } else
          null !== zg && (Gj(zg), zg = null), f2 = true;
        if (!f2)
          return b.flags & 65536 ? b : null;
      }
      if (0 !== (b.flags & 128))
        return b.lanes = c, b;
      d = null !== d;
      d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
      null !== b.updateQueue && (b.flags |= 4);
      S(b);
      return null;
    case 4:
      return Jh(), Bj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
    case 10:
      return Rg(b.type._context), S(b), null;
    case 17:
      return Zf(b.type) && $f(), S(b), null;
    case 19:
      E(M);
      f2 = b.memoizedState;
      if (null === f2)
        return S(b), null;
      d = 0 !== (b.flags & 128);
      g = f2.rendering;
      if (null === g)
        if (d)
          Ej(f2, false);
        else {
          if (0 !== T || null !== a && 0 !== (a.flags & 128))
            for (a = b.child; null !== a; ) {
              g = Mh(a);
              if (null !== g) {
                b.flags |= 128;
                Ej(f2, false);
                d = g.updateQueue;
                null !== d && (b.updateQueue = d, b.flags |= 4);
                b.subtreeFlags = 0;
                d = c;
                for (c = b.child; null !== c; )
                  f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                G(M, M.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
          null !== f2.tail && B() > Hj && (b.flags |= 128, d = true, Ej(f2, false), b.lanes = 4194304);
        }
      else {
        if (!d)
          if (a = Mh(g), null !== a) {
            if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I)
              return S(b), null;
          } else
            2 * B() - f2.renderingStartTime > Hj && 1073741824 !== c && (b.flags |= 128, d = true, Ej(f2, false), b.lanes = 4194304);
        f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f2.last, null !== c ? c.sibling = g : b.child = g, f2.last = g);
      }
      if (null !== f2.tail)
        return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B(), b.sibling = null, c = M.current, G(M, d ? c & 1 | 2 : c & 1), b;
      S(b);
      return null;
    case 22:
    case 23:
      return Ij(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (gj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p(156, b.tag));
}
function Jj(a, b) {
  wg(b);
  switch (b.tag) {
    case 1:
      return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 3:
      return Jh(), E(Wf), E(H), Oh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
    case 5:
      return Lh(b), null;
    case 13:
      E(M);
      a = b.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b.alternate)
          throw Error(p(340));
        Ig();
      }
      a = b.flags;
      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 19:
      return E(M), null;
    case 4:
      return Jh(), null;
    case 10:
      return Rg(b.type._context), null;
    case 22:
    case 23:
      return Ij(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kj = false, U = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Mj(a, b) {
  var c = a.ref;
  if (null !== c)
    if ("function" === typeof c)
      try {
        c(null);
      } catch (d) {
        W(a, b, d);
      }
    else
      c.current = null;
}
function Nj(a, b, c) {
  try {
    c();
  } catch (d) {
    W(a, b, d);
  }
}
var Oj = false;
function Pj(a, b) {
  Cf = dd;
  a = Me();
  if (Ne(a)) {
    if ("selectionStart" in a)
      var c = { start: a.selectionStart, end: a.selectionEnd };
    else
      a: {
        c = (c = a.ownerDocument) && c.defaultView || window;
        var d = c.getSelection && c.getSelection();
        if (d && 0 !== d.rangeCount) {
          c = d.anchorNode;
          var e = d.anchorOffset, f2 = d.focusNode;
          d = d.focusOffset;
          try {
            c.nodeType, f2.nodeType;
          } catch (F2) {
            c = null;
            break a;
          }
          var g = 0, h = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                q2 !== c || 0 !== e && 3 !== q2.nodeType || (h = g + e);
                q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g + d);
                3 === q2.nodeType && (g += q2.nodeValue.length);
                if (null === (y2 = q2.firstChild))
                  break;
                r2 = q2;
                q2 = y2;
              }
              for (; ; ) {
                if (q2 === a)
                  break b;
                r2 === c && ++l2 === e && (h = g);
                r2 === f2 && ++m2 === d && (k2 = g);
                if (null !== (y2 = q2.nextSibling))
                  break;
                q2 = r2;
                r2 = q2.parentNode;
              }
              q2 = y2;
            }
          c = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
        } else
          c = null;
      }
    c = c || { start: 0, end: 0 };
  } else
    c = null;
  Df = { focusedElem: a, selectionRange: c };
  dd = false;
  for (V = b; null !== V; )
    if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a)
      a.return = b, V = a;
    else
      for (; null !== V; ) {
        b = V;
        try {
          var n2 = b.alternate;
          if (0 !== (b.flags & 1024))
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n2) {
                  var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t2 : Lg(b.type, t2), J2);
                  x2.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u2 = b.stateNode.containerInfo;
                1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
        } catch (F2) {
          W(b, b.return, F2);
        }
        a = b.sibling;
        if (null !== a) {
          a.return = b.return;
          V = a;
          break;
        }
        V = b.return;
      }
  n2 = Oj;
  Oj = false;
  return n2;
}
function Qj(a, b, c) {
  var d = b.updateQueue;
  d = null !== d ? d.lastEffect : null;
  if (null !== d) {
    var e = d = d.next;
    do {
      if ((e.tag & a) === a) {
        var f2 = e.destroy;
        e.destroy = void 0;
        void 0 !== f2 && Nj(b, c, f2);
      }
      e = e.next;
    } while (e !== d);
  }
}
function Rj(a, b) {
  b = b.updateQueue;
  b = null !== b ? b.lastEffect : null;
  if (null !== b) {
    var c = b = b.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b);
  }
}
function Sj(a) {
  var b = a.ref;
  if (null !== b) {
    var c = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c;
        break;
      default:
        a = c;
    }
    "function" === typeof b ? b(a) : b.current = a;
  }
}
function Tj(a) {
  var b = a.alternate;
  null !== b && (a.alternate = null, Tj(b));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Uj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Vj(a) {
  a:
    for (; ; ) {
      for (; null === a.sibling; ) {
        if (null === a.return || Uj(a.return))
          return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
        if (a.flags & 2)
          continue a;
        if (null === a.child || 4 === a.tag)
          continue a;
        else
          a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2))
        return a.stateNode;
    }
}
function Wj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d)
    a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
  else if (4 !== d && (a = a.child, null !== a))
    for (Wj(a, b, c), a = a.sibling; null !== a; )
      Wj(a, b, c), a = a.sibling;
}
function Xj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d)
    a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (4 !== d && (a = a.child, null !== a))
    for (Xj(a, b, c), a = a.sibling; null !== a; )
      Xj(a, b, c), a = a.sibling;
}
var X = null, Yj = false;
function Zj(a, b, c) {
  for (c = c.child; null !== c; )
    ak(a, b, c), c = c.sibling;
}
function ak(a, b, c) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount)
    try {
      lc.onCommitFiberUnmount(kc, c);
    } catch (h) {
    }
  switch (c.tag) {
    case 5:
      U || Mj(c, b);
    case 6:
      var d = X, e = Yj;
      X = null;
      Zj(a, b, c);
      X = d;
      Yj = e;
      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
      break;
    case 18:
      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
      break;
    case 4:
      d = X;
      e = Yj;
      X = c.stateNode.containerInfo;
      Yj = true;
      Zj(a, b, c);
      X = d;
      Yj = e;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
        e = d = d.next;
        do {
          var f2 = e, g = f2.destroy;
          f2 = f2.tag;
          void 0 !== g && (0 !== (f2 & 2) ? Nj(c, b, g) : 0 !== (f2 & 4) && Nj(c, b, g));
          e = e.next;
        } while (e !== d);
      }
      Zj(a, b, c);
      break;
    case 1:
      if (!U && (Mj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount))
        try {
          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
        } catch (h) {
          W(c, b, h);
        }
      Zj(a, b, c);
      break;
    case 21:
      Zj(a, b, c);
      break;
    case 22:
      c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Zj(a, b, c), U = d) : Zj(a, b, c);
      break;
    default:
      Zj(a, b, c);
  }
}
function bk(a) {
  var b = a.updateQueue;
  if (null !== b) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new Lj());
    b.forEach(function(b2) {
      var d = ck.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function dk(a, b) {
  var c = b.deletions;
  if (null !== c)
    for (var d = 0; d < c.length; d++) {
      var e = c[d];
      try {
        var f2 = a, g = b, h = g;
        a:
          for (; null !== h; ) {
            switch (h.tag) {
              case 5:
                X = h.stateNode;
                Yj = false;
                break a;
              case 3:
                X = h.stateNode.containerInfo;
                Yj = true;
                break a;
              case 4:
                X = h.stateNode.containerInfo;
                Yj = true;
                break a;
            }
            h = h.return;
          }
        if (null === X)
          throw Error(p(160));
        ak(f2, g, e);
        X = null;
        Yj = false;
        var k2 = e.alternate;
        null !== k2 && (k2.return = null);
        e.return = null;
      } catch (l2) {
        W(e, b, l2);
      }
    }
  if (b.subtreeFlags & 12854)
    for (b = b.child; null !== b; )
      ek(b, a), b = b.sibling;
}
function ek(a, b) {
  var c = a.alternate, d = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      dk(b, a);
      fk(a);
      if (d & 4) {
        try {
          Qj(3, a, a.return), Rj(3, a);
        } catch (t2) {
          W(a, a.return, t2);
        }
        try {
          Qj(5, a, a.return);
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 1:
      dk(b, a);
      fk(a);
      d & 512 && null !== c && Mj(c, c.return);
      break;
    case 5:
      dk(b, a);
      fk(a);
      d & 512 && null !== c && Mj(c, c.return);
      if (a.flags & 32) {
        var e = a.stateNode;
        try {
          ob(e, "");
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      if (d & 4 && (e = a.stateNode, null != e)) {
        var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h = a.type, k2 = a.updateQueue;
        a.updateQueue = null;
        if (null !== k2)
          try {
            "input" === h && "radio" === f2.type && null != f2.name && ab(e, f2);
            vb(h, g);
            var l2 = vb(h, f2);
            for (g = 0; g < k2.length; g += 2) {
              var m2 = k2[g], q2 = k2[g + 1];
              "style" === m2 ? sb(e, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e, q2) : "children" === m2 ? ob(e, q2) : ta(e, m2, q2, l2);
            }
            switch (h) {
              case "input":
                bb(e, f2);
                break;
              case "textarea":
                ib(e, f2);
                break;
              case "select":
                var r2 = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                null != y2 ? fb(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                  e,
                  !!f2.multiple,
                  f2.defaultValue,
                  true
                ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e[Pf] = f2;
          } catch (t2) {
            W(a, a.return, t2);
          }
      }
      break;
    case 6:
      dk(b, a);
      fk(a);
      if (d & 4) {
        if (null === a.stateNode)
          throw Error(p(162));
        e = a.stateNode;
        f2 = a.memoizedProps;
        try {
          e.nodeValue = f2;
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 3:
      dk(b, a);
      fk(a);
      if (d & 4 && null !== c && c.memoizedState.isDehydrated)
        try {
          bd(b.containerInfo);
        } catch (t2) {
          W(a, a.return, t2);
        }
      break;
    case 4:
      dk(b, a);
      fk(a);
      break;
    case 13:
      dk(b, a);
      fk(a);
      e = a.child;
      e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (gk = B()));
      d & 4 && bk(a);
      break;
    case 22:
      m2 = null !== c && null !== c.memoizedState;
      a.mode & 1 ? (U = (l2 = U) || m2, dk(b, a), U = l2) : dk(b, a);
      fk(a);
      if (d & 8192) {
        l2 = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1))
          for (V = a, m2 = a.child; null !== m2; ) {
            for (q2 = V = m2; null !== V; ) {
              r2 = V;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qj(4, r2, r2.return);
                  break;
                case 1:
                  Mj(r2, r2.return);
                  var n2 = r2.stateNode;
                  if ("function" === typeof n2.componentWillUnmount) {
                    d = r2;
                    c = r2.return;
                    try {
                      b = d, n2.props = b.memoizedProps, n2.state = b.memoizedState, n2.componentWillUnmount();
                    } catch (t2) {
                      W(d, c, t2);
                    }
                  }
                  break;
                case 5:
                  Mj(r2, r2.return);
                  break;
                case 22:
                  if (null !== r2.memoizedState) {
                    hk(q2);
                    continue;
                  }
              }
              null !== y2 ? (y2.return = r2, V = y2) : hk(q2);
            }
            m2 = m2.sibling;
          }
        a:
          for (m2 = null, q2 = a; ; ) {
            if (5 === q2.tag) {
              if (null === m2) {
                m2 = q2;
                try {
                  e = q2.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb("display", g));
                } catch (t2) {
                  W(a, a.return, t2);
                }
              }
            } else if (6 === q2.tag) {
              if (null === m2)
                try {
                  q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                } catch (t2) {
                  W(a, a.return, t2);
                }
            } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a)
              break a;
            for (; null === q2.sibling; ) {
              if (null === q2.return || q2.return === a)
                break a;
              m2 === q2 && (m2 = null);
              q2 = q2.return;
            }
            m2 === q2 && (m2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
      }
      break;
    case 19:
      dk(b, a);
      fk(a);
      d & 4 && bk(a);
      break;
    case 21:
      break;
    default:
      dk(
        b,
        a
      ), fk(a);
  }
}
function fk(a) {
  var b = a.flags;
  if (b & 2) {
    try {
      a: {
        for (var c = a.return; null !== c; ) {
          if (Uj(c)) {
            var d = c;
            break a;
          }
          c = c.return;
        }
        throw Error(p(160));
      }
      switch (d.tag) {
        case 5:
          var e = d.stateNode;
          d.flags & 32 && (ob(e, ""), d.flags &= -33);
          var f2 = Vj(a);
          Xj(a, f2, e);
          break;
        case 3:
        case 4:
          var g = d.stateNode.containerInfo, h = Vj(a);
          Wj(a, h, g);
          break;
        default:
          throw Error(p(161));
      }
    } catch (k2) {
      W(a, a.return, k2);
    }
    a.flags &= -3;
  }
  b & 4096 && (a.flags &= -4097);
}
function ik(a, b, c) {
  V = a;
  jk(a);
}
function jk(a, b, c) {
  for (var d = 0 !== (a.mode & 1); null !== V; ) {
    var e = V, f2 = e.child;
    if (22 === e.tag && d) {
      var g = null !== e.memoizedState || Kj;
      if (!g) {
        var h = e.alternate, k2 = null !== h && null !== h.memoizedState || U;
        h = Kj;
        var l2 = U;
        Kj = g;
        if ((U = k2) && !l2)
          for (V = e; null !== V; )
            g = V, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? kk(e) : null !== k2 ? (k2.return = g, V = k2) : kk(e);
        for (; null !== f2; )
          V = f2, jk(f2), f2 = f2.sibling;
        V = e;
        Kj = h;
        U = l2;
      }
      lk(a);
    } else
      0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V = f2) : lk(a);
  }
}
function lk(a) {
  for (; null !== V; ) {
    var b = V;
    if (0 !== (b.flags & 8772)) {
      var c = b.alternate;
      try {
        if (0 !== (b.flags & 8772))
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              U || Rj(5, b);
              break;
            case 1:
              var d = b.stateNode;
              if (b.flags & 4 && !U)
                if (null === c)
                  d.componentDidMount();
                else {
                  var e = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
                  d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                }
              var f2 = b.updateQueue;
              null !== f2 && ih(b, f2, d);
              break;
            case 3:
              var g = b.updateQueue;
              if (null !== g) {
                c = null;
                if (null !== b.child)
                  switch (b.child.tag) {
                    case 5:
                      c = b.child.stateNode;
                      break;
                    case 1:
                      c = b.child.stateNode;
                  }
                ih(b, g, c);
              }
              break;
            case 5:
              var h = b.stateNode;
              if (null === c && b.flags & 4) {
                c = h;
                var k2 = b.memoizedProps;
                switch (b.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c.focus();
                    break;
                  case "img":
                    k2.src && (c.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b.memoizedState) {
                var l2 = b.alternate;
                if (null !== l2) {
                  var m2 = l2.memoizedState;
                  if (null !== m2) {
                    var q2 = m2.dehydrated;
                    null !== q2 && bd(q2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p(163));
          }
        U || b.flags & 512 && Sj(b);
      } catch (r2) {
        W(b, b.return, r2);
      }
    }
    if (b === a) {
      V = null;
      break;
    }
    c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function hk(a) {
  for (; null !== V; ) {
    var b = V;
    if (b === a) {
      V = null;
      break;
    }
    var c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function kk(a) {
  for (; null !== V; ) {
    var b = V;
    try {
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          var c = b.return;
          try {
            Rj(4, b);
          } catch (k2) {
            W(b, c, k2);
          }
          break;
        case 1:
          var d = b.stateNode;
          if ("function" === typeof d.componentDidMount) {
            var e = b.return;
            try {
              d.componentDidMount();
            } catch (k2) {
              W(b, e, k2);
            }
          }
          var f2 = b.return;
          try {
            Sj(b);
          } catch (k2) {
            W(b, f2, k2);
          }
          break;
        case 5:
          var g = b.return;
          try {
            Sj(b);
          } catch (k2) {
            W(b, g, k2);
          }
      }
    } catch (k2) {
      W(b, b.return, k2);
    }
    if (b === a) {
      V = null;
      break;
    }
    var h = b.sibling;
    if (null !== h) {
      h.return = b.return;
      V = h;
      break;
    }
    V = b.return;
  }
}
var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R = null, Y = null, Z = 0, gj = 0, fj = Uf(0), T = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = false, Qi = null, Si = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
function L() {
  return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
}
function lh(a) {
  if (0 === (a.mode & 1))
    return 1;
  if (0 !== (K & 2) && 0 !== Z)
    return Z & -Z;
  if (null !== Kg.transition)
    return 0 === Ck && (Ck = yc()), Ck;
  a = C;
  if (0 !== a)
    return a;
  a = window.event;
  a = void 0 === a ? 16 : jd(a.type);
  return a;
}
function mh(a, b, c, d) {
  if (50 < zk)
    throw zk = 0, Ak = null, Error(p(185));
  Ac(a, c, d);
  if (0 === (K & 2) || a !== R)
    a === R && (0 === (K & 2) && (rk |= c), 4 === T && Dk(a, Z)), Ek(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Hj = B() + 500, fg && jg());
}
function Ek(a, b) {
  var c = a.callbackNode;
  wc(a, b);
  var d = uc(a, a === R ? Z : 0);
  if (0 === d)
    null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
  else if (b = d & -d, a.callbackPriority !== b) {
    null != c && bc(c);
    if (1 === b)
      0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
        0 === (K & 6) && jg();
      }), c = null;
    else {
      switch (Dc(d)) {
        case 1:
          c = fc;
          break;
        case 4:
          c = gc;
          break;
        case 16:
          c = hc;
          break;
        case 536870912:
          c = jc;
          break;
        default:
          c = hc;
      }
      c = Gk(c, Hk.bind(null, a));
    }
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Hk(a, b) {
  Bk = -1;
  Ck = 0;
  if (0 !== (K & 6))
    throw Error(p(327));
  var c = a.callbackNode;
  if (Ik() && a.callbackNode !== c)
    return null;
  var d = uc(a, a === R ? Z : 0);
  if (0 === d)
    return null;
  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b)
    b = Jk(a, d);
  else {
    b = d;
    var e = K;
    K |= 2;
    var f2 = Kk();
    if (R !== a || Z !== b)
      vk = null, Hj = B() + 500, Lk(a, b);
    do
      try {
        Mk();
        break;
      } catch (h) {
        Nk(a, h);
      }
    while (1);
    Qg();
    nk.current = f2;
    K = e;
    null !== Y ? b = 0 : (R = null, Z = 0, b = T);
  }
  if (0 !== b) {
    2 === b && (e = xc(a), 0 !== e && (d = e, b = Ok(a, e)));
    if (1 === b)
      throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
    if (6 === b)
      Dk(a, d);
    else {
      e = a.current.alternate;
      if (0 === (d & 30) && !Pk(e) && (b = Jk(a, d), 2 === b && (f2 = xc(a), 0 !== f2 && (d = f2, b = Ok(a, f2))), 1 === b))
        throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
      a.finishedWork = e;
      a.finishedLanes = d;
      switch (b) {
        case 0:
        case 1:
          throw Error(p(345));
        case 2:
          Qk(a, uk, vk);
          break;
        case 3:
          Dk(a, d);
          if ((d & 130023424) === d && (b = gk + 500 - B(), 10 < b)) {
            if (0 !== uc(a, 0))
              break;
            e = a.suspendedLanes;
            if ((e & d) !== d) {
              L();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 4:
          Dk(a, d);
          if ((d & 4194240) === d)
            break;
          b = a.eventTimes;
          for (e = -1; 0 < d; ) {
            var g = 31 - oc(d);
            f2 = 1 << g;
            g = b[g];
            g > e && (e = g);
            d &= ~f2;
          }
          d = e;
          d = B() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
          if (10 < d) {
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 5:
          Qk(a, uk, vk);
          break;
        default:
          throw Error(p(329));
      }
    }
  }
  Ek(a, B());
  return a.callbackNode === c ? Hk.bind(null, a) : null;
}
function Ok(a, b) {
  var c = tk;
  a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256);
  a = Jk(a, b);
  2 !== a && (b = uk, uk = c, null !== b && Gj(b));
  return a;
}
function Gj(a) {
  null === uk ? uk = a : uk.push.apply(uk, a);
}
function Pk(a) {
  for (var b = a; ; ) {
    if (b.flags & 16384) {
      var c = b.updateQueue;
      if (null !== c && (c = c.stores, null !== c))
        for (var d = 0; d < c.length; d++) {
          var e = c[d], f2 = e.getSnapshot;
          e = e.value;
          try {
            if (!He(f2(), e))
              return false;
          } catch (g) {
            return false;
          }
        }
    }
    c = b.child;
    if (b.subtreeFlags & 16384 && null !== c)
      c.return = b, b = c;
    else {
      if (b === a)
        break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a)
          return true;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return true;
}
function Dk(a, b) {
  b &= ~sk;
  b &= ~rk;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - oc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Fk(a) {
  if (0 !== (K & 6))
    throw Error(p(327));
  Ik();
  var b = uc(a, 0);
  if (0 === (b & 1))
    return Ek(a, B()), null;
  var c = Jk(a, b);
  if (0 !== a.tag && 2 === c) {
    var d = xc(a);
    0 !== d && (b = d, c = Ok(a, d));
  }
  if (1 === c)
    throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B()), c;
  if (6 === c)
    throw Error(p(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Qk(a, uk, vk);
  Ek(a, B());
  return null;
}
function Rk(a, b) {
  var c = K;
  K |= 1;
  try {
    return a(b);
  } finally {
    K = c, 0 === K && (Hj = B() + 500, fg && jg());
  }
}
function Sk(a) {
  null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
  var b = K;
  K |= 1;
  var c = pk.transition, d = C;
  try {
    if (pk.transition = null, C = 1, a)
      return a();
  } finally {
    C = d, pk.transition = c, K = b, 0 === (K & 6) && jg();
  }
}
function Ij() {
  gj = fj.current;
  E(fj);
}
function Lk(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, Gf(c));
  if (null !== Y)
    for (c = Y.return; null !== c; ) {
      var d = c;
      wg(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && $f();
          break;
        case 3:
          Jh();
          E(Wf);
          E(H);
          Oh();
          break;
        case 5:
          Lh(d);
          break;
        case 4:
          Jh();
          break;
        case 13:
          E(M);
          break;
        case 19:
          E(M);
          break;
        case 10:
          Rg(d.type._context);
          break;
        case 22:
        case 23:
          Ij();
      }
      c = c.return;
    }
  R = a;
  Y = a = wh(a.current, null);
  Z = gj = b;
  T = 0;
  qk = null;
  sk = rk = hh = 0;
  uk = tk = null;
  if (null !== Wg) {
    for (b = 0; b < Wg.length; b++)
      if (c = Wg[b], d = c.interleaved, null !== d) {
        c.interleaved = null;
        var e = d.next, f2 = c.pending;
        if (null !== f2) {
          var g = f2.next;
          f2.next = e;
          d.next = g;
        }
        c.pending = d;
      }
    Wg = null;
  }
  return a;
}
function Nk(a, b) {
  do {
    var c = Y;
    try {
      Qg();
      Ph.current = ai;
      if (Sh) {
        for (var d = N.memoizedState; null !== d; ) {
          var e = d.queue;
          null !== e && (e.pending = null);
          d = d.next;
        }
        Sh = false;
      }
      Rh = 0;
      P = O = N = null;
      Th = false;
      Uh = 0;
      ok.current = null;
      if (null === c || null === c.return) {
        T = 1;
        qk = b;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g = c.return, h = c, k2 = b;
        b = Z;
        h.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Vi(g);
          if (null !== y2) {
            y2.flags &= -257;
            Wi(y2, g, h, f2, b);
            y2.mode & 1 && Ti(f2, l2, b);
            b = y2;
            k2 = l2;
            var n2 = b.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b.updateQueue = t2;
            } else
              n2.add(k2);
            break a;
          } else {
            if (0 === (b & 1)) {
              Ti(f2, l2, b);
              uj();
              break a;
            }
            k2 = Error(p(426));
          }
        } else if (I && h.mode & 1) {
          var J2 = Vi(g);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Wi(J2, g, h, f2, b);
            Jg(Ki(k2, h));
            break a;
          }
        }
        f2 = k2 = Ki(k2, h);
        4 !== T && (T = 2);
        null === tk ? tk = [f2] : tk.push(f2);
        f2 = g;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b &= -b;
              f2.lanes |= b;
              var x2 = Oi(f2, k2, b);
              fh(f2, x2);
              break a;
            case 1:
              h = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                f2.flags |= 65536;
                b &= -b;
                f2.lanes |= b;
                var F2 = Ri(f2, h, b);
                fh(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Tk(c);
    } catch (na) {
      b = na;
      Y === c && null !== c && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Kk() {
  var a = nk.current;
  nk.current = ai;
  return null === a ? ai : a;
}
function uj() {
  if (0 === T || 3 === T || 2 === T)
    T = 4;
  null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
}
function Jk(a, b) {
  var c = K;
  K |= 2;
  var d = Kk();
  if (R !== a || Z !== b)
    vk = null, Lk(a, b);
  do
    try {
      Uk();
      break;
    } catch (e) {
      Nk(a, e);
    }
  while (1);
  Qg();
  K = c;
  nk.current = d;
  if (null !== Y)
    throw Error(p(261));
  R = null;
  Z = 0;
  return T;
}
function Uk() {
  for (; null !== Y; )
    Vk(Y);
}
function Mk() {
  for (; null !== Y && !cc(); )
    Vk(Y);
}
function Vk(a) {
  var b = Wk(a.alternate, a, gj);
  a.memoizedProps = a.pendingProps;
  null === b ? Tk(a) : Y = b;
  ok.current = null;
}
function Tk(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if (0 === (b.flags & 32768)) {
      if (c = Fj(c, b, gj), null !== c) {
        Y = c;
        return;
      }
    } else {
      c = Jj(c, b);
      if (null !== c) {
        c.flags &= 32767;
        Y = c;
        return;
      }
      if (null !== a)
        a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        T = 6;
        Y = null;
        return;
      }
    }
    b = b.sibling;
    if (null !== b) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (null !== b);
  0 === T && (T = 5);
}
function Qk(a, b, c) {
  var d = C, e = pk.transition;
  try {
    pk.transition = null, C = 1, Xk(a, b, c, d);
  } finally {
    pk.transition = e, C = d;
  }
  return null;
}
function Xk(a, b, c, d) {
  do
    Ik();
  while (null !== xk);
  if (0 !== (K & 6))
    throw Error(p(327));
  c = a.finishedWork;
  var e = a.finishedLanes;
  if (null === c)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current)
    throw Error(p(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f2 = c.lanes | c.childLanes;
  Bc(a, f2);
  a === R && (Y = R = null, Z = 0);
  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || wk || (wk = true, Gk(hc, function() {
    Ik();
    return null;
  }));
  f2 = 0 !== (c.flags & 15990);
  if (0 !== (c.subtreeFlags & 15990) || f2) {
    f2 = pk.transition;
    pk.transition = null;
    var g = C;
    C = 1;
    var h = K;
    K |= 4;
    ok.current = null;
    Pj(a, c);
    ek(c, a);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c;
    ik(c);
    dc();
    K = h;
    C = g;
    pk.transition = f2;
  } else
    a.current = c;
  wk && (wk = false, xk = a, yk = e);
  f2 = a.pendingLanes;
  0 === f2 && (Si = null);
  mc(c.stateNode);
  Ek(a, B());
  if (null !== b)
    for (d = a.onRecoverableError, c = 0; c < b.length; c++)
      e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
  if (Pi)
    throw Pi = false, a = Qi, Qi = null, a;
  0 !== (yk & 1) && 0 !== a.tag && Ik();
  f2 = a.pendingLanes;
  0 !== (f2 & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
  jg();
  return null;
}
function Ik() {
  if (null !== xk) {
    var a = Dc(yk), b = pk.transition, c = C;
    try {
      pk.transition = null;
      C = 16 > a ? 16 : a;
      if (null === xk)
        var d = false;
      else {
        a = xk;
        xk = null;
        yk = 0;
        if (0 !== (K & 6))
          throw Error(p(331));
        var e = K;
        K |= 4;
        for (V = a.current; null !== V; ) {
          var f2 = V, g = f2.child;
          if (0 !== (V.flags & 16)) {
            var h = f2.deletions;
            if (null !== h) {
              for (var k2 = 0; k2 < h.length; k2++) {
                var l2 = h[k2];
                for (V = l2; null !== V; ) {
                  var m2 = V;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2)
                    q2.return = m2, V = q2;
                  else
                    for (; null !== V; ) {
                      m2 = V;
                      var r2 = m2.sibling, y2 = m2.return;
                      Tj(m2);
                      if (m2 === l2) {
                        V = null;
                        break;
                      }
                      if (null !== r2) {
                        r2.return = y2;
                        V = r2;
                        break;
                      }
                      V = y2;
                    }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g)
            g.return = f2, V = g;
          else
            b:
              for (; null !== V; ) {
                f2 = V;
                if (0 !== (f2.flags & 2048))
                  switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, f2, f2.return);
                  }
                var x2 = f2.sibling;
                if (null !== x2) {
                  x2.return = f2.return;
                  V = x2;
                  break b;
                }
                V = f2.return;
              }
        }
        var w2 = a.current;
        for (V = w2; null !== V; ) {
          g = V;
          var u2 = g.child;
          if (0 !== (g.subtreeFlags & 2064) && null !== u2)
            u2.return = g, V = u2;
          else
            b:
              for (g = w2; null !== V; ) {
                h = V;
                if (0 !== (h.flags & 2048))
                  try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rj(9, h);
                    }
                  } catch (na) {
                    W(h, h.return, na);
                  }
                if (h === g) {
                  V = null;
                  break b;
                }
                var F2 = h.sibling;
                if (null !== F2) {
                  F2.return = h.return;
                  V = F2;
                  break b;
                }
                V = h.return;
              }
        }
        K = e;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot)
          try {
            lc.onPostCommitFiberRoot(kc, a);
          } catch (na) {
          }
        d = true;
      }
      return d;
    } finally {
      C = c, pk.transition = b;
    }
  }
  return false;
}
function Yk(a, b, c) {
  b = Ki(c, b);
  b = Oi(a, b, 1);
  a = dh(a, b, 1);
  b = L();
  null !== a && (Ac(a, 1, b), Ek(a, b));
}
function W(a, b, c) {
  if (3 === a.tag)
    Yk(a, a, c);
  else
    for (; null !== b; ) {
      if (3 === b.tag) {
        Yk(b, a, c);
        break;
      } else if (1 === b.tag) {
        var d = b.stateNode;
        if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
          a = Ki(c, a);
          a = Ri(b, a, 1);
          b = dh(b, a, 1);
          a = L();
          null !== b && (Ac(b, 1, a), Ek(b, a));
          break;
        }
      }
      b = b.return;
    }
}
function Ui(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  b = L();
  a.pingedLanes |= a.suspendedLanes & c;
  R === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c);
  Ek(a, b);
}
function Zk(a, b) {
  0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c = L();
  a = Zg(a, b);
  null !== a && (Ac(a, b, c), Ek(a, c));
}
function vj(a) {
  var b = a.memoizedState, c = 0;
  null !== b && (c = b.retryLane);
  Zk(a, c);
}
function ck(a, b) {
  var c = 0;
  switch (a.tag) {
    case 13:
      var d = a.stateNode;
      var e = a.memoizedState;
      null !== e && (c = e.retryLane);
      break;
    case 19:
      d = a.stateNode;
      break;
    default:
      throw Error(p(314));
  }
  null !== d && d.delete(b);
  Zk(a, c);
}
var Wk;
Wk = function(a, b, c) {
  if (null !== a)
    if (a.memoizedProps !== b.pendingProps || Wf.current)
      Ug = true;
    else {
      if (0 === (a.lanes & c) && 0 === (b.flags & 128))
        return Ug = false, zj(a, b, c);
      Ug = 0 !== (a.flags & 131072) ? true : false;
    }
  else
    Ug = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      var d = b.type;
      jj(a, b);
      a = b.pendingProps;
      var e = Yf(b, H.current);
      Tg(b, c);
      e = Xh(null, b, d, a, e, c);
      var f2 = bi();
      b.flags |= 1;
      "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ah(b), e.updater = nh, b.stateNode = e, e._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, true, f2, c)) : (b.tag = 0, I && f2 && vg(b), Yi(null, b, e, c), b = b.child);
      return b;
    case 16:
      d = b.elementType;
      a: {
        jj(a, b);
        a = b.pendingProps;
        e = d._init;
        d = e(d._payload);
        b.type = d;
        e = b.tag = $k(d);
        a = Lg(d, a);
        switch (e) {
          case 0:
            b = dj(null, b, d, a, c);
            break a;
          case 1:
            b = ij(null, b, d, a, c);
            break a;
          case 11:
            b = Zi(null, b, d, a, c);
            break a;
          case 14:
            b = aj(null, b, d, Lg(d.type, a), c);
            break a;
        }
        throw Error(p(
          306,
          d,
          ""
        ));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), dj(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), ij(a, b, d, e, c);
    case 3:
      a: {
        lj(b);
        if (null === a)
          throw Error(p(387));
        d = b.pendingProps;
        f2 = b.memoizedState;
        e = f2.element;
        bh(a, b);
        gh(b, d, null, c);
        var g = b.memoizedState;
        d = g.element;
        if (f2.isDehydrated)
          if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
            e = Ki(Error(p(423)), b);
            b = mj(a, b, d, c, e);
            break a;
          } else if (d !== e) {
            e = Ki(Error(p(424)), b);
            b = mj(a, b, d, c, e);
            break a;
          } else
            for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Ch(b, null, d, c), b.child = c; c; )
              c.flags = c.flags & -3 | 4096, c = c.sibling;
        else {
          Ig();
          if (d === e) {
            b = $i(a, b, c);
            break a;
          }
          Yi(a, b, d, c);
        }
        b = b.child;
      }
      return b;
    case 5:
      return Kh(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), hj(a, b), Yi(a, b, g, c), b.child;
    case 6:
      return null === a && Eg(b), null;
    case 13:
      return pj(a, b, c);
    case 4:
      return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), Zi(a, b, d, e, c);
    case 7:
      return Yi(a, b, b.pendingProps, c), b.child;
    case 8:
      return Yi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return Yi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        f2 = b.memoizedProps;
        g = e.value;
        G(Mg, d._currentValue);
        d._currentValue = g;
        if (null !== f2)
          if (He(f2.value, g)) {
            if (f2.children === e.children && !Wf.current) {
              b = $i(a, b, c);
              break a;
            }
          } else
            for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
              var h = f2.dependencies;
              if (null !== h) {
                g = f2.child;
                for (var k2 = h.firstContext; null !== k2; ) {
                  if (k2.context === d) {
                    if (1 === f2.tag) {
                      k2 = ch(-1, c & -c);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (null !== l2) {
                        l2 = l2.shared;
                        var m2 = l2.pending;
                        null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c;
                    k2 = f2.alternate;
                    null !== k2 && (k2.lanes |= c);
                    Sg(
                      f2.return,
                      c,
                      b
                    );
                    h.lanes |= c;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (10 === f2.tag)
                g = f2.type === b.type ? null : f2.child;
              else if (18 === f2.tag) {
                g = f2.return;
                if (null === g)
                  throw Error(p(341));
                g.lanes |= c;
                h = g.alternate;
                null !== h && (h.lanes |= c);
                Sg(g, c, b);
                g = f2.sibling;
              } else
                g = f2.child;
              if (null !== g)
                g.return = f2;
              else
                for (g = f2; null !== g; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  f2 = g.sibling;
                  if (null !== f2) {
                    f2.return = g.return;
                    g = f2;
                    break;
                  }
                  g = g.return;
                }
              f2 = g;
            }
        Yi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, d = b.pendingProps.children, Tg(b, c), e = Vg(e), d = d(e), b.flags |= 1, Yi(a, b, d, c), b.child;
    case 14:
      return d = b.type, e = Lg(d, b.pendingProps), e = Lg(d.type, e), aj(a, b, d, e, c);
    case 15:
      return cj(a, b, b.type, b.pendingProps, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), jj(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, Tg(b, c), ph(b, d, e), rh(b, d, e, c), kj(null, b, d, true, a, c);
    case 19:
      return yj(a, b, c);
    case 22:
      return ej(a, b, c);
  }
  throw Error(p(156, b.tag));
};
function Gk(a, b) {
  return ac(a, b);
}
function al(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b, c, d) {
  return new al(a, b, c, d);
}
function bj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function $k(a) {
  if ("function" === typeof a)
    return bj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da)
      return 11;
    if (a === Ga)
      return 14;
  }
  return 2;
}
function wh(a, b) {
  var c = a.alternate;
  null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
  c.flags = a.flags & 14680064;
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function yh(a, b, c, d, e, f2) {
  var g = 2;
  d = a;
  if ("function" === typeof a)
    bj(a) && (g = 1);
  else if ("string" === typeof a)
    g = 5;
  else
    a:
      switch (a) {
        case ya:
          return Ah(c.children, e, f2, b);
        case za:
          g = 8;
          e |= 8;
          break;
        case Aa:
          return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f2, a;
        case Ea:
          return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f2, a;
        case Fa:
          return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f2, a;
        case Ia:
          return qj(c, e, f2, b);
        default:
          if ("object" === typeof a && null !== a)
            switch (a.$$typeof) {
              case Ba:
                g = 10;
                break a;
              case Ca:
                g = 9;
                break a;
              case Da:
                g = 11;
                break a;
              case Ga:
                g = 14;
                break a;
              case Ha:
                g = 16;
                d = null;
                break a;
            }
          throw Error(p(130, null == a ? a : typeof a, ""));
      }
  b = Bg(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f2;
  return b;
}
function Ah(a, b, c, d) {
  a = Bg(7, a, d, b);
  a.lanes = c;
  return a;
}
function qj(a, b, c, d) {
  a = Bg(22, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  a.stateNode = { isHidden: false };
  return a;
}
function xh(a, b, c) {
  a = Bg(6, a, null, b);
  a.lanes = c;
  return a;
}
function zh(a, b, c) {
  b = Bg(4, null !== a.children ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function bl(a, b, c, d, e) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e;
  this.mutableSourceEagerHydrationData = null;
}
function cl(a, b, c, d, e, f2, g, h, k2) {
  a = new bl(a, b, c, h, k2);
  1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
  f2 = Bg(3, null, null, b);
  a.current = f2;
  f2.stateNode = a;
  f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  ah(f2);
  return a;
}
function dl(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
function el(a) {
  if (!a)
    return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || 1 !== a.tag)
      throw Error(p(170));
    var b = a;
    do {
      switch (b.tag) {
        case 3:
          b = b.stateNode.context;
          break a;
        case 1:
          if (Zf(b.type)) {
            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b = b.return;
    } while (null !== b);
    throw Error(p(171));
  }
  if (1 === a.tag) {
    var c = a.type;
    if (Zf(c))
      return bg(a, c, b);
  }
  return b;
}
function fl(a, b, c, d, e, f2, g, h, k2) {
  a = cl(c, d, true, a, e, f2, g, h, k2);
  a.context = el(null);
  c = a.current;
  d = L();
  e = lh(c);
  f2 = ch(d, e);
  f2.callback = void 0 !== b && null !== b ? b : null;
  dh(c, f2, e);
  a.current.lanes = e;
  Ac(a, e, d);
  Ek(a, d);
  return a;
}
function gl(a, b, c, d) {
  var e = b.current, f2 = L(), g = lh(e);
  c = el(c);
  null === b.context ? b.context = c : b.pendingContext = c;
  b = ch(f2, g);
  b.payload = { element: a };
  d = void 0 === d ? null : d;
  null !== d && (b.callback = d);
  a = dh(e, b, g);
  null !== a && (mh(a, e, g, f2), eh(a, e, g));
  return g;
}
function hl(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function il(a, b) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c = a.retryLane;
    a.retryLane = 0 !== c && c < b ? c : b;
  }
}
function jl(a, b) {
  il(a, b);
  (a = a.alternate) && il(a, b);
}
function kl() {
  return null;
}
var ll = "function" === typeof reportError ? reportError : function(a) {
  console.error(a);
};
function ml(a) {
  this._internalRoot = a;
}
nl.prototype.render = ml.prototype.render = function(a) {
  var b = this._internalRoot;
  if (null === b)
    throw Error(p(409));
  gl(a, b, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function() {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b = a.containerInfo;
    Sk(function() {
      gl(null, a, null, null);
    });
    b[uf] = null;
  }
};
function nl(a) {
  this._internalRoot = a;
}
nl.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b = Hc();
    a = { blockedOn: null, target: a, priority: b };
    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++)
      ;
    Qc.splice(c, 0, a);
    0 === c && Vc(a);
  }
};
function ol(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function pl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function ql() {
}
function rl(a, b, c, d, e) {
  if (e) {
    if ("function" === typeof d) {
      var f2 = d;
      d = function() {
        var a2 = hl(g);
        f2.call(a2);
      };
    }
    var g = fl(b, d, a, 0, null, false, false, "", ql);
    a._reactRootContainer = g;
    a[uf] = g.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Sk();
    return g;
  }
  for (; e = a.lastChild; )
    a.removeChild(e);
  if ("function" === typeof d) {
    var h = d;
    d = function() {
      var a2 = hl(k2);
      h.call(a2);
    };
  }
  var k2 = cl(a, 0, false, null, null, false, false, "", ql);
  a._reactRootContainer = k2;
  a[uf] = k2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Sk(function() {
    gl(b, k2, c, d);
  });
  return k2;
}
function sl(a, b, c, d, e) {
  var f2 = c._reactRootContainer;
  if (f2) {
    var g = f2;
    if ("function" === typeof e) {
      var h = e;
      e = function() {
        var a2 = hl(g);
        h.call(a2);
      };
    }
    gl(b, g, a, e);
  } else
    g = rl(c, b, a, e, d);
  return hl(g);
}
Ec = function(a) {
  switch (a.tag) {
    case 3:
      var b = a.stateNode;
      if (b.current.memoizedState.isDehydrated) {
        var c = tc(b.pendingLanes);
        0 !== c && (Cc(b, c | 1), Ek(b, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
      }
      break;
    case 13:
      Sk(function() {
        var b2 = Zg(a, 1);
        if (null !== b2) {
          var c2 = L();
          mh(b2, a, 1, c2);
        }
      }), jl(a, 1);
  }
};
Fc = function(a) {
  if (13 === a.tag) {
    var b = Zg(a, 134217728);
    if (null !== b) {
      var c = L();
      mh(b, a, 134217728, c);
    }
    jl(a, 134217728);
  }
};
Gc = function(a) {
  if (13 === a.tag) {
    var b = lh(a), c = Zg(a, b);
    if (null !== c) {
      var d = L();
      mh(c, a, b, d);
    }
    jl(a, b);
  }
};
Hc = function() {
  return C;
};
Ic = function(a, b) {
  var c = C;
  try {
    return C = a, b();
  } finally {
    C = c;
  }
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      bb(a, c);
      b = c.name;
      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e)
              throw Error(p(90));
            Wa(d);
            bb(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, null != b && fb(a, !!c.multiple, b, false);
  }
};
Gb = Rk;
Hb = Sk;
var tl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Rk] }, ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Zb(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      kc = wl.inject(vl), lc = wl;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
reactDom_production_min.createPortal = function(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!ol(b))
    throw Error(p(200));
  return dl(a, b, null, c);
};
reactDom_production_min.createRoot = function(a, b) {
  if (!ol(a))
    throw Error(p(299));
  var c = false, d = "", e = ll;
  null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
  b = cl(a, 1, false, null, null, c, false, d, e);
  a[uf] = b.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ml(b);
};
reactDom_production_min.findDOMNode = function(a) {
  if (null == a)
    return null;
  if (1 === a.nodeType)
    return a;
  var b = a._reactInternals;
  if (void 0 === b) {
    if ("function" === typeof a.render)
      throw Error(p(188));
    a = Object.keys(a).join(",");
    throw Error(p(268, a));
  }
  a = Zb(b);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Sk(a);
};
reactDom_production_min.hydrate = function(a, b, c) {
  if (!pl(b))
    throw Error(p(200));
  return sl(null, a, b, true, c);
};
reactDom_production_min.hydrateRoot = function(a, b, c) {
  if (!ol(a))
    throw Error(p(405));
  var d = null != c && c.hydratedSources || null, e = false, f2 = "", g = ll;
  null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
  b = fl(b, null, a, 1, null != c ? c : null, e, false, f2, g);
  a[uf] = b.current;
  sf(a);
  if (d)
    for (a = 0; a < d.length; a++)
      c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
        c,
        e
      );
  return new nl(b);
};
reactDom_production_min.render = function(a, b, c) {
  if (!pl(b))
    throw Error(p(200));
  return sl(null, a, b, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!pl(a))
    throw Error(p(40));
  return a._reactRootContainer ? (Sk(function() {
    sl(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Rk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!pl(c))
    throw Error(p(200));
  if (null == a || void 0 === a._reactInternals)
    throw Error(p(38));
  return sl(a, b, c, false, d);
};
reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
var createRoot;
var m = reactDomExports;
{
  createRoot = m.createRoot;
  m.hydrateRoot;
}
const ToolbarButton = ({
  children,
  title = "",
  icon,
  disabled = false,
  toggled = false,
  onClick = () => {
  },
  style,
  testId,
  className
}) => {
  className = (className || "") + ` toolbar-button ${icon}`;
  if (toggled)
    className += " toggled";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      className,
      onMouseDown: preventDefault,
      onClick,
      onDoubleClick: preventDefault,
      title,
      disabled: !!disabled,
      style,
      "data-testid": testId,
      children: [
        icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `codicon codicon-${icon}`, style: children ? { marginRight: 5 } : {} }),
        children
      ]
    }
  );
};
const preventDefault = (e) => {
  e.stopPropagation();
  e.preventDefault();
};
const contextSymbol = Symbol("context");
const nextInContextSymbol = Symbol("next");
const prevInListSymbol = Symbol("prev");
const eventsSymbol = Symbol("events");
class MultiTraceModel {
  constructor(contexts) {
    __publicField(this, "startTime");
    __publicField(this, "endTime");
    __publicField(this, "browserName");
    __publicField(this, "channel");
    __publicField(this, "platform");
    __publicField(this, "wallTime");
    __publicField(this, "title");
    __publicField(this, "options");
    __publicField(this, "pages");
    __publicField(this, "actions");
    __publicField(this, "events");
    __publicField(this, "stdio");
    __publicField(this, "errors");
    __publicField(this, "errorDescriptors");
    __publicField(this, "hasSource");
    __publicField(this, "hasStepData");
    __publicField(this, "sdkLanguage");
    __publicField(this, "testIdAttributeName");
    __publicField(this, "sources");
    __publicField(this, "resources");
    contexts.forEach((contextEntry) => indexModel(contextEntry));
    const libraryContext = contexts.find((context2) => context2.origin === "library");
    this.browserName = (libraryContext == null ? void 0 : libraryContext.browserName) || "";
    this.sdkLanguage = libraryContext == null ? void 0 : libraryContext.sdkLanguage;
    this.channel = libraryContext == null ? void 0 : libraryContext.channel;
    this.testIdAttributeName = libraryContext == null ? void 0 : libraryContext.testIdAttributeName;
    this.platform = (libraryContext == null ? void 0 : libraryContext.platform) || "";
    this.title = (libraryContext == null ? void 0 : libraryContext.title) || "";
    this.options = (libraryContext == null ? void 0 : libraryContext.options) || {};
    this.actions = mergeActionsAndUpdateTiming(contexts);
    this.pages = [].concat(...contexts.map((c) => c.pages));
    this.wallTime = contexts.map((c) => c.wallTime).reduce((prev, cur) => Math.min(prev || Number.MAX_VALUE, cur), Number.MAX_VALUE);
    this.startTime = contexts.map((c) => c.startTime).reduce((prev, cur) => Math.min(prev, cur), Number.MAX_VALUE);
    this.endTime = contexts.map((c) => c.endTime).reduce((prev, cur) => Math.max(prev, cur), Number.MIN_VALUE);
    this.events = [].concat(...contexts.map((c) => c.events));
    this.stdio = [].concat(...contexts.map((c) => c.stdio));
    this.errors = [].concat(...contexts.map((c) => c.errors));
    this.hasSource = contexts.some((c) => c.hasSource);
    this.hasStepData = contexts.some((context2) => context2.origin === "testRunner");
    this.resources = [...contexts.map((c) => c.resources)].flat();
    this.events.sort((a1, a2) => a1.time - a2.time);
    this.resources.sort((a1, a2) => a1._monotonicTime - a2._monotonicTime);
    this.errorDescriptors = this.hasStepData ? this._errorDescriptorsFromTestRunner() : this._errorDescriptorsFromActions();
    this.sources = collectSources(this.actions, this.errorDescriptors);
  }
  failedAction() {
    return this.actions.findLast((a) => a.error);
  }
  _errorDescriptorsFromActions() {
    var _a;
    const errors = [];
    for (const action of this.actions || []) {
      if (!((_a = action.error) == null ? void 0 : _a.message))
        continue;
      errors.push({
        action,
        stack: action.stack,
        message: action.error.message
      });
    }
    return errors;
  }
  _errorDescriptorsFromTestRunner() {
    const errors = [];
    for (const error of this.errors || []) {
      if (!error.message)
        continue;
      errors.push({
        stack: error.stack,
        message: error.message
      });
    }
    return errors;
  }
}
function indexModel(context2) {
  for (const page of context2.pages)
    page[contextSymbol] = context2;
  for (let i = 0; i < context2.actions.length; ++i) {
    const action = context2.actions[i];
    action[contextSymbol] = context2;
  }
  let lastNonRouteAction = void 0;
  for (let i = context2.actions.length - 1; i >= 0; i--) {
    const action = context2.actions[i];
    action[nextInContextSymbol] = lastNonRouteAction;
    if (!action.apiName.includes("route."))
      lastNonRouteAction = action;
  }
  for (const event of context2.events)
    event[contextSymbol] = context2;
  for (const resource of context2.resources)
    resource[contextSymbol] = context2;
}
function mergeActionsAndUpdateTiming(contexts) {
  const traceFileToContexts = /* @__PURE__ */ new Map();
  for (const context2 of contexts) {
    const traceFile = context2.traceUrl;
    let list = traceFileToContexts.get(traceFile);
    if (!list) {
      list = [];
      traceFileToContexts.set(traceFile, list);
    }
    list.push(context2);
  }
  const result = [];
  let traceFileId = 0;
  for (const [, contexts2] of traceFileToContexts) {
    if (traceFileToContexts.size > 1)
      makeCallIdsUniqueAcrossTraceFiles(contexts2, ++traceFileId);
    const actions = mergeActionsAndUpdateTimingSameTrace(contexts2);
    result.push(...actions);
  }
  result.sort((a1, a2) => {
    if (a2.parentId === a1.callId)
      return -1;
    if (a1.parentId === a2.callId)
      return 1;
    return a1.startTime - a2.startTime;
  });
  for (let i = 1; i < result.length; ++i)
    result[i][prevInListSymbol] = result[i - 1];
  return result;
}
function makeCallIdsUniqueAcrossTraceFiles(contexts, traceFileId) {
  for (const context2 of contexts) {
    for (const action of context2.actions) {
      if (action.callId)
        action.callId = `${traceFileId}:${action.callId}`;
      if (action.parentId)
        action.parentId = `${traceFileId}:${action.parentId}`;
    }
  }
}
function mergeActionsAndUpdateTimingSameTrace(contexts) {
  const map = /* @__PURE__ */ new Map();
  const libraryContexts = contexts.filter((context2) => context2.origin === "library");
  const testRunnerContexts = contexts.filter((context2) => context2.origin === "testRunner");
  if (!testRunnerContexts.length || !libraryContexts.length) {
    return contexts.map((context2) => {
      return context2.actions.map((action) => ({ ...action, context: context2 }));
    }).flat();
  }
  const matchByStepId = libraryContexts.some((c) => c.actions.some((a) => !!a.stepId));
  for (const context2 of libraryContexts) {
    for (const action of context2.actions) {
      const key = matchByStepId ? action.stepId : `${action.apiName}@${action.wallTime}`;
      map.set(key, { ...action, context: context2 });
    }
  }
  const delta = monotonicTimeDeltaBetweenLibraryAndRunner(testRunnerContexts, map, matchByStepId);
  if (delta)
    adjustMonotonicTime(libraryContexts, delta);
  const nonPrimaryIdToPrimaryId = /* @__PURE__ */ new Map();
  for (const context2 of testRunnerContexts) {
    for (const action of context2.actions) {
      const key = matchByStepId ? action.callId : `${action.apiName}@${action.wallTime}`;
      const existing = map.get(key);
      if (existing) {
        nonPrimaryIdToPrimaryId.set(action.callId, existing.callId);
        if (action.error)
          existing.error = action.error;
        if (action.attachments)
          existing.attachments = action.attachments;
        if (action.parentId)
          existing.parentId = nonPrimaryIdToPrimaryId.get(action.parentId) ?? action.parentId;
        existing.startTime = action.startTime;
        existing.endTime = action.endTime;
        continue;
      }
      if (action.parentId)
        action.parentId = nonPrimaryIdToPrimaryId.get(action.parentId) ?? action.parentId;
      map.set(key, { ...action, context: context2 });
    }
  }
  return [...map.values()];
}
function adjustMonotonicTime(contexts, monotonicTimeDelta) {
  for (const context2 of contexts) {
    context2.startTime += monotonicTimeDelta;
    context2.endTime += monotonicTimeDelta;
    for (const action of context2.actions) {
      if (action.startTime)
        action.startTime += monotonicTimeDelta;
      if (action.endTime)
        action.endTime += monotonicTimeDelta;
    }
    for (const event of context2.events)
      event.time += monotonicTimeDelta;
    for (const event of context2.stdio)
      event.timestamp += monotonicTimeDelta;
    for (const page of context2.pages) {
      for (const frame of page.screencastFrames)
        frame.timestamp += monotonicTimeDelta;
    }
    for (const resource of context2.resources) {
      if (resource._monotonicTime)
        resource._monotonicTime += monotonicTimeDelta;
    }
  }
}
function monotonicTimeDeltaBetweenLibraryAndRunner(nonPrimaryContexts, libraryActions, matchByStepId) {
  for (const context2 of nonPrimaryContexts) {
    for (const action of context2.actions) {
      if (!action.startTime)
        continue;
      const key = matchByStepId ? action.stepId : `${action.apiName}@${action.wallTime}`;
      const libraryAction = libraryActions.get(key);
      if (libraryAction)
        return action.startTime - libraryAction.startTime;
    }
  }
  return 0;
}
function buildActionTree(actions) {
  const itemMap = /* @__PURE__ */ new Map();
  for (const action of actions) {
    itemMap.set(action.callId, {
      id: action.callId,
      parent: void 0,
      children: [],
      action
    });
  }
  const rootItem = { id: "", parent: void 0, children: [] };
  for (const item of itemMap.values()) {
    const parent = item.action.parentId ? itemMap.get(item.action.parentId) || rootItem : rootItem;
    parent.children.push(item);
    item.parent = parent;
  }
  return { rootItem, itemMap };
}
function idForAction(action) {
  return `${action.pageId || "none"}:${action.callId}`;
}
function context(action) {
  return action[contextSymbol];
}
function nextInContext(action) {
  return action[nextInContextSymbol];
}
function prevInList(action) {
  return action[prevInListSymbol];
}
function stats(action) {
  let errors = 0;
  let warnings = 0;
  for (const event of eventsForAction(action)) {
    if (event.type === "console") {
      const type = event.messageType;
      if (type === "warning")
        ++warnings;
      else if (type === "error")
        ++errors;
    }
    if (event.type === "event" && event.method === "pageError")
      ++errors;
  }
  return { errors, warnings };
}
function eventsForAction(action) {
  let result = action[eventsSymbol];
  if (result)
    return result;
  const nextAction = nextInContext(action);
  result = context(action).events.filter((event) => {
    return event.time >= action.startTime && (!nextAction || event.time < nextAction.startTime);
  });
  action[eventsSymbol] = result;
  return result;
}
function collectSources(actions, errorDescriptors) {
  var _a;
  const result = /* @__PURE__ */ new Map();
  for (const action of actions) {
    for (const frame of action.stack || []) {
      let source = result.get(frame.file);
      if (!source) {
        source = { errors: [], content: void 0 };
        result.set(frame.file, source);
      }
    }
  }
  for (const error of errorDescriptors) {
    const { action, stack, message } = error;
    if (!action || !stack)
      continue;
    (_a = result.get(stack[0].file)) == null ? void 0 : _a.errors.push({
      line: stack[0].line || 0,
      message
    });
  }
  return result;
}
const kRouteMethods = /* @__PURE__ */ new Set([
  "page.route",
  "page.routefromhar",
  "page.unroute",
  "page.unrouteall",
  "browsercontext.route",
  "browsercontext.routefromhar",
  "browsercontext.unroute",
  "browsercontext.unrouteall"
]);
{
  for (const method of [...kRouteMethods])
    kRouteMethods.add(method + "async");
  for (const method of [
    "page.route_from_har",
    "page.unroute_all",
    "context.route_from_har",
    "context.unroute_all"
  ])
    kRouteMethods.add(method);
}
function isRouteAction(action) {
  return action.class === "Route" || kRouteMethods.has(action.apiName.toLowerCase());
}
const kMinSize = 50;
const SplitView = ({
  sidebarSize,
  sidebarHidden = false,
  sidebarIsFirst = false,
  orientation = "vertical",
  minSidebarSize = kMinSize,
  settingName,
  sidebar,
  main
}) => {
  const defaultSize = Math.max(minSidebarSize, sidebarSize) * window.devicePixelRatio;
  const [hSize, setHSize] = useSetting(settingName ? settingName + "." + orientation + ":size" : void 0, defaultSize);
  const [vSize, setVSize] = useSetting(settingName ? settingName + "." + orientation + ":size" : void 0, defaultSize);
  const [resizing, setResizing] = reactExports.useState(null);
  const [measure, ref] = useMeasure();
  let size;
  if (orientation === "vertical") {
    size = vSize / window.devicePixelRatio;
    if (measure && measure.height < size)
      size = measure.height - 10;
  } else {
    size = hSize / window.devicePixelRatio;
    if (measure && measure.width < size)
      size = measure.width - 10;
  }
  document.body.style.userSelect = resizing ? "none" : "inherit";
  let resizerStyle = {};
  if (orientation === "vertical") {
    if (sidebarIsFirst)
      resizerStyle = { top: resizing ? 0 : size - 4, bottom: resizing ? 0 : void 0, height: resizing ? "initial" : 8 };
    else
      resizerStyle = { bottom: resizing ? 0 : size - 4, top: resizing ? 0 : void 0, height: resizing ? "initial" : 8 };
  } else {
    if (sidebarIsFirst)
      resizerStyle = { left: resizing ? 0 : size - 4, right: resizing ? 0 : void 0, width: resizing ? "initial" : 8 };
    else
      resizerStyle = { right: resizing ? 0 : size - 4, left: resizing ? 0 : void 0, width: resizing ? "initial" : 8 };
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: clsx("split-view", orientation, sidebarIsFirst && "sidebar-first"), ref, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "split-view-main", children: main }),
    !sidebarHidden && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flexBasis: size }, className: "split-view-sidebar", children: sidebar }),
    !sidebarHidden && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: resizerStyle,
        className: "split-view-resizer",
        onMouseDown: (event) => setResizing({ offset: orientation === "vertical" ? event.clientY : event.clientX, size }),
        onMouseUp: () => setResizing(null),
        onMouseMove: (event) => {
          if (!event.buttons) {
            setResizing(null);
          } else if (resizing) {
            const offset = orientation === "vertical" ? event.clientY : event.clientX;
            const delta = offset - resizing.offset;
            const newSize = sidebarIsFirst ? resizing.size + delta : resizing.size - delta;
            const splitView = event.target.parentElement;
            const rect = splitView.getBoundingClientRect();
            const size2 = Math.min(Math.max(minSidebarSize, newSize), (orientation === "vertical" ? rect.height : rect.width) - minSidebarSize);
            if (orientation === "vertical")
              setVSize(size2 * window.devicePixelRatio);
            else
              setHSize(size2 * window.devicePixelRatio);
          }
        }
      }
    )
  ] });
};
function escapeWithQuotes(text, char = "'") {
  const stringified = JSON.stringify(text);
  const escapedText = stringified.substring(1, stringified.length - 1).replace(/\\"/g, '"');
  if (char === "'")
    return char + escapedText.replace(/[']/g, "\\'") + char;
  if (char === '"')
    return char + escapedText.replace(/["]/g, '\\"') + char;
  if (char === "`")
    return char + escapedText.replace(/[`]/g, "`") + char;
  throw new Error("Invalid escape char");
}
function toTitleCase(name) {
  return name.charAt(0).toUpperCase() + name.substring(1);
}
function toSnakeCase(name) {
  return name.replace(/([a-z0-9])([A-Z])/g, "$1_$2").replace(/([A-Z])([A-Z][a-z])/g, "$1_$2").toLowerCase();
}
function cssEscape(s) {
  let result = "";
  for (let i = 0; i < s.length; i++)
    result += cssEscapeOne(s, i);
  return result;
}
function quoteCSSAttributeValue(text) {
  return `"${cssEscape(text).replace(/\\ /g, " ")}"`;
}
function cssEscapeOne(s, i) {
  const c = s.charCodeAt(i);
  if (c === 0)
    return "�";
  if (c >= 1 && c <= 31 || c >= 48 && c <= 57 && (i === 0 || i === 1 && s.charCodeAt(0) === 45))
    return "\\" + c.toString(16) + " ";
  if (i === 0 && c === 45 && s.length === 1)
    return "\\" + s.charAt(i);
  if (c >= 128 || c === 45 || c === 95 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122)
    return s.charAt(i);
  return "\\" + s.charAt(i);
}
let normalizedWhitespaceCache;
function cacheNormalizedWhitespaces() {
  normalizedWhitespaceCache = /* @__PURE__ */ new Map();
}
function normalizeWhiteSpace(text) {
  let result = normalizedWhitespaceCache == null ? void 0 : normalizedWhitespaceCache.get(text);
  if (result === void 0) {
    result = text.replace(/\u200b/g, "").trim().replace(/\s+/g, " ");
    normalizedWhitespaceCache == null ? void 0 : normalizedWhitespaceCache.set(text, result);
  }
  return result;
}
function normalizeEscapedRegexQuotes(source) {
  return source.replace(/(^|[^\\])(\\\\)*\\(['"`])/g, "$1$2$3");
}
function escapeRegexForSelector(re2) {
  if (re2.unicode || re2.unicodeSets)
    return String(re2);
  return String(re2).replace(/(^|[^\\])(\\\\)*(["'`])/g, "$1$2\\$3").replace(/>>/g, "\\>\\>");
}
function escapeForTextSelector(text, exact) {
  if (typeof text !== "string")
    return escapeRegexForSelector(text);
  return `${JSON.stringify(text)}${exact ? "s" : "i"}`;
}
function escapeForAttributeSelector(value, exact) {
  if (typeof value !== "string")
    return escapeRegexForSelector(value);
  return `"${value.replace(/\\/g, "\\\\").replace(/["]/g, '\\"')}"${exact ? "s" : "i"}`;
}
function trimString(input, cap, suffix = "") {
  if (input.length <= cap)
    return input;
  const chars = [...input];
  if (chars.length > cap)
    return chars.slice(0, cap - suffix.length).join("") + suffix;
  return chars.join("");
}
function trimStringWithEllipsis(input, cap) {
  return trimString(input, cap, "…");
}
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const escaped = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
function escapeHTMLAttribute(s) {
  return s.replace(/[&<>"']/ug, (char) => escaped[char]);
}
function escapeHTML$1(s) {
  return s.replace(/[&<]/ug, (char) => escaped[char]);
}
const between = function(num, first, last) {
  return num >= first && num <= last;
};
function digit(code) {
  return between(code, 48, 57);
}
function hexdigit(code) {
  return digit(code) || between(code, 65, 70) || between(code, 97, 102);
}
function uppercaseletter(code) {
  return between(code, 65, 90);
}
function lowercaseletter(code) {
  return between(code, 97, 122);
}
function letter(code) {
  return uppercaseletter(code) || lowercaseletter(code);
}
function nonascii(code) {
  return code >= 128;
}
function namestartchar(code) {
  return letter(code) || nonascii(code) || code === 95;
}
function namechar(code) {
  return namestartchar(code) || digit(code) || code === 45;
}
function nonprintable(code) {
  return between(code, 0, 8) || code === 11 || between(code, 14, 31) || code === 127;
}
function newline(code) {
  return code === 10;
}
function whitespace(code) {
  return newline(code) || code === 9 || code === 32;
}
const maximumallowedcodepoint = 1114111;
class InvalidCharacterError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidCharacterError";
  }
}
function preprocess(str) {
  const codepoints = [];
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code === 13 && str.charCodeAt(i + 1) === 10) {
      code = 10;
      i++;
    }
    if (code === 13 || code === 12)
      code = 10;
    if (code === 0)
      code = 65533;
    if (between(code, 55296, 56319) && between(str.charCodeAt(i + 1), 56320, 57343)) {
      const lead = code - 55296;
      const trail = str.charCodeAt(i + 1) - 56320;
      code = Math.pow(2, 16) + lead * Math.pow(2, 10) + trail;
      i++;
    }
    codepoints.push(code);
  }
  return codepoints;
}
function stringFromCode(code) {
  if (code <= 65535)
    return String.fromCharCode(code);
  code -= Math.pow(2, 16);
  const lead = Math.floor(code / Math.pow(2, 10)) + 55296;
  const trail = code % Math.pow(2, 10) + 56320;
  return String.fromCharCode(lead) + String.fromCharCode(trail);
}
function tokenize(str1) {
  const str = preprocess(str1);
  let i = -1;
  const tokens = [];
  let code;
  const codepoint = function(i2) {
    if (i2 >= str.length)
      return -1;
    return str[i2];
  };
  const next = function(num) {
    if (num === void 0)
      num = 1;
    if (num > 3)
      throw "Spec Error: no more than three codepoints of lookahead.";
    return codepoint(i + num);
  };
  const consume = function(num) {
    if (num === void 0)
      num = 1;
    i += num;
    code = codepoint(i);
    return true;
  };
  const reconsume = function() {
    i -= 1;
    return true;
  };
  const eof = function(codepoint2) {
    if (codepoint2 === void 0)
      codepoint2 = code;
    return codepoint2 === -1;
  };
  const consumeAToken = function() {
    consumeComments();
    consume();
    if (whitespace(code)) {
      while (whitespace(next()))
        consume();
      return new WhitespaceToken();
    } else if (code === 34) {
      return consumeAStringToken();
    } else if (code === 35) {
      if (namechar(next()) || areAValidEscape(next(1), next(2))) {
        const token = new HashToken("");
        if (wouldStartAnIdentifier(next(1), next(2), next(3)))
          token.type = "id";
        token.value = consumeAName();
        return token;
      } else {
        return new DelimToken(code);
      }
    } else if (code === 36) {
      if (next() === 61) {
        consume();
        return new SuffixMatchToken();
      } else {
        return new DelimToken(code);
      }
    } else if (code === 39) {
      return consumeAStringToken();
    } else if (code === 40) {
      return new OpenParenToken();
    } else if (code === 41) {
      return new CloseParenToken();
    } else if (code === 42) {
      if (next() === 61) {
        consume();
        return new SubstringMatchToken();
      } else {
        return new DelimToken(code);
      }
    } else if (code === 43) {
      if (startsWithANumber()) {
        reconsume();
        return consumeANumericToken();
      } else {
        return new DelimToken(code);
      }
    } else if (code === 44) {
      return new CommaToken();
    } else if (code === 45) {
      if (startsWithANumber()) {
        reconsume();
        return consumeANumericToken();
      } else if (next(1) === 45 && next(2) === 62) {
        consume(2);
        return new CDCToken();
      } else if (startsWithAnIdentifier()) {
        reconsume();
        return consumeAnIdentlikeToken();
      } else {
        return new DelimToken(code);
      }
    } else if (code === 46) {
      if (startsWithANumber()) {
        reconsume();
        return consumeANumericToken();
      } else {
        return new DelimToken(code);
      }
    } else if (code === 58) {
      return new ColonToken();
    } else if (code === 59) {
      return new SemicolonToken();
    } else if (code === 60) {
      if (next(1) === 33 && next(2) === 45 && next(3) === 45) {
        consume(3);
        return new CDOToken();
      } else {
        return new DelimToken(code);
      }
    } else if (code === 64) {
      if (wouldStartAnIdentifier(next(1), next(2), next(3)))
        return new AtKeywordToken(consumeAName());
      else
        return new DelimToken(code);
    } else if (code === 91) {
      return new OpenSquareToken();
    } else if (code === 92) {
      if (startsWithAValidEscape()) {
        reconsume();
        return consumeAnIdentlikeToken();
      } else {
        return new DelimToken(code);
      }
    } else if (code === 93) {
      return new CloseSquareToken();
    } else if (code === 94) {
      if (next() === 61) {
        consume();
        return new PrefixMatchToken();
      } else {
        return new DelimToken(code);
      }
    } else if (code === 123) {
      return new OpenCurlyToken();
    } else if (code === 124) {
      if (next() === 61) {
        consume();
        return new DashMatchToken();
      } else if (next() === 124) {
        consume();
        return new ColumnToken();
      } else {
        return new DelimToken(code);
      }
    } else if (code === 125) {
      return new CloseCurlyToken();
    } else if (code === 126) {
      if (next() === 61) {
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
    } else if (eof()) {
      return new EOFToken();
    } else {
      return new DelimToken(code);
    }
  };
  const consumeComments = function() {
    while (next(1) === 47 && next(2) === 42) {
      consume(2);
      while (true) {
        consume();
        if (code === 42 && next() === 47) {
          consume();
          break;
        } else if (eof()) {
          return;
        }
      }
    }
  };
  const consumeANumericToken = function() {
    const num = consumeANumber();
    if (wouldStartAnIdentifier(next(1), next(2), next(3))) {
      const token = new DimensionToken();
      token.value = num.value;
      token.repr = num.repr;
      token.type = num.type;
      token.unit = consumeAName();
      return token;
    } else if (next() === 37) {
      consume();
      const token = new PercentageToken();
      token.value = num.value;
      token.repr = num.repr;
      return token;
    } else {
      const token = new NumberToken();
      token.value = num.value;
      token.repr = num.repr;
      token.type = num.type;
      return token;
    }
  };
  const consumeAnIdentlikeToken = function() {
    const str2 = consumeAName();
    if (str2.toLowerCase() === "url" && next() === 40) {
      consume();
      while (whitespace(next(1)) && whitespace(next(2)))
        consume();
      if (next() === 34 || next() === 39)
        return new FunctionToken(str2);
      else if (whitespace(next()) && (next(2) === 34 || next(2) === 39))
        return new FunctionToken(str2);
      else
        return consumeAURLToken();
    } else if (next() === 40) {
      consume();
      return new FunctionToken(str2);
    } else {
      return new IdentToken(str2);
    }
  };
  const consumeAStringToken = function(endingCodePoint) {
    if (endingCodePoint === void 0)
      endingCodePoint = code;
    let string = "";
    while (consume()) {
      if (code === endingCodePoint || eof()) {
        return new StringToken(string);
      } else if (newline(code)) {
        reconsume();
        return new BadStringToken();
      } else if (code === 92) {
        if (eof(next()))
          ;
        else if (newline(next()))
          consume();
        else
          string += stringFromCode(consumeEscape());
      } else {
        string += stringFromCode(code);
      }
    }
    throw new Error("Internal error");
  };
  const consumeAURLToken = function() {
    const token = new URLToken("");
    while (whitespace(next()))
      consume();
    if (eof(next()))
      return token;
    while (consume()) {
      if (code === 41 || eof()) {
        return token;
      } else if (whitespace(code)) {
        while (whitespace(next()))
          consume();
        if (next() === 41 || eof(next())) {
          consume();
          return token;
        } else {
          consumeTheRemnantsOfABadURL();
          return new BadURLToken();
        }
      } else if (code === 34 || code === 39 || code === 40 || nonprintable(code)) {
        consumeTheRemnantsOfABadURL();
        return new BadURLToken();
      } else if (code === 92) {
        if (startsWithAValidEscape()) {
          token.value += stringFromCode(consumeEscape());
        } else {
          consumeTheRemnantsOfABadURL();
          return new BadURLToken();
        }
      } else {
        token.value += stringFromCode(code);
      }
    }
    throw new Error("Internal error");
  };
  const consumeEscape = function() {
    consume();
    if (hexdigit(code)) {
      const digits = [code];
      for (let total = 0; total < 5; total++) {
        if (hexdigit(next())) {
          consume();
          digits.push(code);
        } else {
          break;
        }
      }
      if (whitespace(next()))
        consume();
      let value = parseInt(digits.map(function(x2) {
        return String.fromCharCode(x2);
      }).join(""), 16);
      if (value > maximumallowedcodepoint)
        value = 65533;
      return value;
    } else if (eof()) {
      return 65533;
    } else {
      return code;
    }
  };
  const areAValidEscape = function(c1, c2) {
    if (c1 !== 92)
      return false;
    if (newline(c2))
      return false;
    return true;
  };
  const startsWithAValidEscape = function() {
    return areAValidEscape(code, next());
  };
  const wouldStartAnIdentifier = function(c1, c2, c3) {
    if (c1 === 45)
      return namestartchar(c2) || c2 === 45 || areAValidEscape(c2, c3);
    else if (namestartchar(c1))
      return true;
    else if (c1 === 92)
      return areAValidEscape(c1, c2);
    else
      return false;
  };
  const startsWithAnIdentifier = function() {
    return wouldStartAnIdentifier(code, next(1), next(2));
  };
  const wouldStartANumber = function(c1, c2, c3) {
    if (c1 === 43 || c1 === 45) {
      if (digit(c2))
        return true;
      if (c2 === 46 && digit(c3))
        return true;
      return false;
    } else if (c1 === 46) {
      if (digit(c2))
        return true;
      return false;
    } else if (digit(c1)) {
      return true;
    } else {
      return false;
    }
  };
  const startsWithANumber = function() {
    return wouldStartANumber(code, next(1), next(2));
  };
  const consumeAName = function() {
    let result = "";
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
    throw new Error("Internal parse error");
  };
  const consumeANumber = function() {
    let repr = "";
    let type = "integer";
    if (next() === 43 || next() === 45) {
      consume();
      repr += stringFromCode(code);
    }
    while (digit(next())) {
      consume();
      repr += stringFromCode(code);
    }
    if (next(1) === 46 && digit(next(2))) {
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
    const c1 = next(1), c2 = next(2), c3 = next(3);
    if ((c1 === 69 || c1 === 101) && digit(c2)) {
      consume();
      repr += stringFromCode(code);
      consume();
      repr += stringFromCode(code);
      type = "number";
      while (digit(next())) {
        consume();
        repr += stringFromCode(code);
      }
    } else if ((c1 === 69 || c1 === 101) && (c2 === 43 || c2 === 45) && digit(c3)) {
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
    const value = convertAStringToANumber(repr);
    return { type, value, repr };
  };
  const convertAStringToANumber = function(string) {
    return +string;
  };
  const consumeTheRemnantsOfABadURL = function() {
    while (consume()) {
      if (code === 41 || eof()) {
        return;
      } else if (startsWithAValidEscape()) {
        consumeEscape();
      } else
        ;
    }
  };
  let iterationCount = 0;
  while (!eof(next())) {
    tokens.push(consumeAToken());
    iterationCount++;
    if (iterationCount > str.length * 2)
      throw new Error("I'm infinite-looping!");
  }
  return tokens;
}
class CSSParserToken {
  constructor() {
    this.tokenType = "";
  }
  toJSON() {
    return { token: this.tokenType };
  }
  toString() {
    return this.tokenType;
  }
  toSource() {
    return "" + this;
  }
}
class BadStringToken extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = "BADSTRING";
  }
}
class BadURLToken extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = "BADURL";
  }
}
class WhitespaceToken extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = "WHITESPACE";
  }
  toString() {
    return "WS";
  }
  toSource() {
    return " ";
  }
}
class CDOToken extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = "CDO";
  }
  toSource() {
    return "<!--";
  }
}
class CDCToken extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = "CDC";
  }
  toSource() {
    return "-->";
  }
}
class ColonToken extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = ":";
  }
}
class SemicolonToken extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = ";";
  }
}
class CommaToken extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = ",";
  }
}
class GroupingToken extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.value = "";
    this.mirror = "";
  }
}
class OpenCurlyToken extends GroupingToken {
  constructor() {
    super();
    this.tokenType = "{";
    this.value = "{";
    this.mirror = "}";
  }
}
class CloseCurlyToken extends GroupingToken {
  constructor() {
    super();
    this.tokenType = "}";
    this.value = "}";
    this.mirror = "{";
  }
}
class OpenSquareToken extends GroupingToken {
  constructor() {
    super();
    this.tokenType = "[";
    this.value = "[";
    this.mirror = "]";
  }
}
class CloseSquareToken extends GroupingToken {
  constructor() {
    super();
    this.tokenType = "]";
    this.value = "]";
    this.mirror = "[";
  }
}
class OpenParenToken extends GroupingToken {
  constructor() {
    super();
    this.tokenType = "(";
    this.value = "(";
    this.mirror = ")";
  }
}
class CloseParenToken extends GroupingToken {
  constructor() {
    super();
    this.tokenType = ")";
    this.value = ")";
    this.mirror = "(";
  }
}
class IncludeMatchToken extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = "~=";
  }
}
class DashMatchToken extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = "|=";
  }
}
class PrefixMatchToken extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = "^=";
  }
}
class SuffixMatchToken extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = "$=";
  }
}
class SubstringMatchToken extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = "*=";
  }
}
class ColumnToken extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = "||";
  }
}
class EOFToken extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = "EOF";
  }
  toSource() {
    return "";
  }
}
class DelimToken extends CSSParserToken {
  constructor(code) {
    super();
    this.tokenType = "DELIM";
    this.value = "";
    this.value = stringFromCode(code);
  }
  toString() {
    return "DELIM(" + this.value + ")";
  }
  toJSON() {
    const json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
    json.value = this.value;
    return json;
  }
  toSource() {
    if (this.value === "\\")
      return "\\\n";
    else
      return this.value;
  }
}
class StringValuedToken extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.value = "";
  }
  ASCIIMatch(str) {
    return this.value.toLowerCase() === str.toLowerCase();
  }
  toJSON() {
    const json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
    json.value = this.value;
    return json;
  }
}
class IdentToken extends StringValuedToken {
  constructor(val) {
    super();
    this.tokenType = "IDENT";
    this.value = val;
  }
  toString() {
    return "IDENT(" + this.value + ")";
  }
  toSource() {
    return escapeIdent(this.value);
  }
}
class FunctionToken extends StringValuedToken {
  constructor(val) {
    super();
    this.tokenType = "FUNCTION";
    this.value = val;
    this.mirror = ")";
  }
  toString() {
    return "FUNCTION(" + this.value + ")";
  }
  toSource() {
    return escapeIdent(this.value) + "(";
  }
}
class AtKeywordToken extends StringValuedToken {
  constructor(val) {
    super();
    this.tokenType = "AT-KEYWORD";
    this.value = val;
  }
  toString() {
    return "AT(" + this.value + ")";
  }
  toSource() {
    return "@" + escapeIdent(this.value);
  }
}
class HashToken extends StringValuedToken {
  constructor(val) {
    super();
    this.tokenType = "HASH";
    this.value = val;
    this.type = "unrestricted";
  }
  toString() {
    return "HASH(" + this.value + ")";
  }
  toJSON() {
    const json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
    json.value = this.value;
    json.type = this.type;
    return json;
  }
  toSource() {
    if (this.type === "id")
      return "#" + escapeIdent(this.value);
    else
      return "#" + escapeHash(this.value);
  }
}
class StringToken extends StringValuedToken {
  constructor(val) {
    super();
    this.tokenType = "STRING";
    this.value = val;
  }
  toString() {
    return '"' + escapeString(this.value) + '"';
  }
}
class URLToken extends StringValuedToken {
  constructor(val) {
    super();
    this.tokenType = "URL";
    this.value = val;
  }
  toString() {
    return "URL(" + this.value + ")";
  }
  toSource() {
    return 'url("' + escapeString(this.value) + '")';
  }
}
class NumberToken extends CSSParserToken {
  constructor() {
    super();
    this.tokenType = "NUMBER";
    this.type = "integer";
    this.repr = "";
  }
  toString() {
    if (this.type === "integer")
      return "INT(" + this.value + ")";
    return "NUMBER(" + this.value + ")";
  }
  toJSON() {
    const json = super.toJSON();
    json.value = this.value;
    json.type = this.type;
    json.repr = this.repr;
    return json;
  }
  toSource() {
    return this.repr;
  }
}
class PercentageToken extends CSSParserToken {
  constructor() {
    super();
    this.tokenType = "PERCENTAGE";
    this.repr = "";
  }
  toString() {
    return "PERCENTAGE(" + this.value + ")";
  }
  toJSON() {
    const json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
    json.value = this.value;
    json.repr = this.repr;
    return json;
  }
  toSource() {
    return this.repr + "%";
  }
}
class DimensionToken extends CSSParserToken {
  constructor() {
    super();
    this.tokenType = "DIMENSION";
    this.type = "integer";
    this.repr = "";
    this.unit = "";
  }
  toString() {
    return "DIM(" + this.value + "," + this.unit + ")";
  }
  toJSON() {
    const json = this.constructor.prototype.constructor.prototype.toJSON.call(this);
    json.value = this.value;
    json.type = this.type;
    json.repr = this.repr;
    json.unit = this.unit;
    return json;
  }
  toSource() {
    const source = this.repr;
    let unit = escapeIdent(this.unit);
    if (unit[0].toLowerCase() === "e" && (unit[1] === "-" || between(unit.charCodeAt(1), 48, 57))) {
      unit = "\\65 " + unit.slice(1, unit.length);
    }
    return source + unit;
  }
}
function escapeIdent(string) {
  string = "" + string;
  let result = "";
  const firstcode = string.charCodeAt(0);
  for (let i = 0; i < string.length; i++) {
    const code = string.charCodeAt(i);
    if (code === 0)
      throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
    if (between(code, 1, 31) || code === 127 || i === 0 && between(code, 48, 57) || i === 1 && between(code, 48, 57) && firstcode === 45)
      result += "\\" + code.toString(16) + " ";
    else if (code >= 128 || code === 45 || code === 95 || between(code, 48, 57) || between(code, 65, 90) || between(code, 97, 122))
      result += string[i];
    else
      result += "\\" + string[i];
  }
  return result;
}
function escapeHash(string) {
  string = "" + string;
  let result = "";
  for (let i = 0; i < string.length; i++) {
    const code = string.charCodeAt(i);
    if (code === 0)
      throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
    if (code >= 128 || code === 45 || code === 95 || between(code, 48, 57) || between(code, 65, 90) || between(code, 97, 122))
      result += string[i];
    else
      result += "\\" + code.toString(16) + " ";
  }
  return result;
}
function escapeString(string) {
  string = "" + string;
  let result = "";
  for (let i = 0; i < string.length; i++) {
    const code = string.charCodeAt(i);
    if (code === 0)
      throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
    if (between(code, 1, 31) || code === 127)
      result += "\\" + code.toString(16) + " ";
    else if (code === 34 || code === 92)
      result += "\\" + string[i];
    else
      result += string[i];
  }
  return result;
}
class InvalidSelectorError extends Error {
}
function parseCSS(selector, customNames) {
  let tokens;
  try {
    tokens = tokenize(selector);
    if (!(tokens[tokens.length - 1] instanceof EOFToken))
      tokens.push(new EOFToken());
  } catch (e) {
    const newMessage = e.message + ` while parsing selector "${selector}"`;
    const index = (e.stack || "").indexOf(e.message);
    if (index !== -1)
      e.stack = e.stack.substring(0, index) + newMessage + e.stack.substring(index + e.message.length);
    e.message = newMessage;
    throw e;
  }
  const unsupportedToken = tokens.find((token) => {
    return token instanceof AtKeywordToken || token instanceof BadStringToken || token instanceof BadURLToken || token instanceof ColumnToken || token instanceof CDOToken || token instanceof CDCToken || token instanceof SemicolonToken || // TODO: Consider using these for something, e.g. to escape complex strings.
    // For example :xpath{ (//div/bar[@attr="foo"])[2]/baz }
    // Or this way :xpath( {complex-xpath-goes-here("hello")} )
    token instanceof OpenCurlyToken || token instanceof CloseCurlyToken || // TODO: Consider treating these as strings?
    token instanceof URLToken || token instanceof PercentageToken;
  });
  if (unsupportedToken)
    throw new InvalidSelectorError(`Unsupported token "${unsupportedToken.toSource()}" while parsing selector "${selector}"`);
  let pos = 0;
  const names = /* @__PURE__ */ new Set();
  function unexpected() {
    return new InvalidSelectorError(`Unexpected token "${tokens[pos].toSource()}" while parsing selector "${selector}"`);
  }
  function skipWhitespace() {
    while (tokens[pos] instanceof WhitespaceToken)
      pos++;
  }
  function isIdent(p2 = pos) {
    return tokens[p2] instanceof IdentToken;
  }
  function isString(p2 = pos) {
    return tokens[p2] instanceof StringToken;
  }
  function isNumber(p2 = pos) {
    return tokens[p2] instanceof NumberToken;
  }
  function isComma(p2 = pos) {
    return tokens[p2] instanceof CommaToken;
  }
  function isOpenParen(p2 = pos) {
    return tokens[p2] instanceof OpenParenToken;
  }
  function isCloseParen(p2 = pos) {
    return tokens[p2] instanceof CloseParenToken;
  }
  function isFunction(p2 = pos) {
    return tokens[p2] instanceof FunctionToken;
  }
  function isStar(p2 = pos) {
    return tokens[p2] instanceof DelimToken && tokens[p2].value === "*";
  }
  function isEOF(p2 = pos) {
    return tokens[p2] instanceof EOFToken;
  }
  function isClauseCombinator(p2 = pos) {
    return tokens[p2] instanceof DelimToken && [">", "+", "~"].includes(tokens[p2].value);
  }
  function isSelectorClauseEnd(p2 = pos) {
    return isComma(p2) || isCloseParen(p2) || isEOF(p2) || isClauseCombinator(p2) || tokens[p2] instanceof WhitespaceToken;
  }
  function consumeFunctionArguments() {
    const result2 = [consumeArgument()];
    while (true) {
      skipWhitespace();
      if (!isComma())
        break;
      pos++;
      result2.push(consumeArgument());
    }
    return result2;
  }
  function consumeArgument() {
    skipWhitespace();
    if (isNumber())
      return tokens[pos++].value;
    if (isString())
      return tokens[pos++].value;
    return consumeComplexSelector();
  }
  function consumeComplexSelector() {
    const result2 = { simples: [] };
    skipWhitespace();
    if (isClauseCombinator()) {
      result2.simples.push({ selector: { functions: [{ name: "scope", args: [] }] }, combinator: "" });
    } else {
      result2.simples.push({ selector: consumeSimpleSelector(), combinator: "" });
    }
    while (true) {
      skipWhitespace();
      if (isClauseCombinator()) {
        result2.simples[result2.simples.length - 1].combinator = tokens[pos++].value;
        skipWhitespace();
      } else if (isSelectorClauseEnd()) {
        break;
      }
      result2.simples.push({ combinator: "", selector: consumeSimpleSelector() });
    }
    return result2;
  }
  function consumeSimpleSelector() {
    let rawCSSString = "";
    const functions = [];
    while (!isSelectorClauseEnd()) {
      if (isIdent() || isStar()) {
        rawCSSString += tokens[pos++].toSource();
      } else if (tokens[pos] instanceof HashToken) {
        rawCSSString += tokens[pos++].toSource();
      } else if (tokens[pos] instanceof DelimToken && tokens[pos].value === ".") {
        pos++;
        if (isIdent())
          rawCSSString += "." + tokens[pos++].toSource();
        else
          throw unexpected();
      } else if (tokens[pos] instanceof ColonToken) {
        pos++;
        if (isIdent()) {
          if (!customNames.has(tokens[pos].value.toLowerCase())) {
            rawCSSString += ":" + tokens[pos++].toSource();
          } else {
            const name = tokens[pos++].value.toLowerCase();
            functions.push({ name, args: [] });
            names.add(name);
          }
        } else if (isFunction()) {
          const name = tokens[pos++].value.toLowerCase();
          if (!customNames.has(name)) {
            rawCSSString += `:${name}(${consumeBuiltinFunctionArguments()})`;
          } else {
            functions.push({ name, args: consumeFunctionArguments() });
            names.add(name);
          }
          skipWhitespace();
          if (!isCloseParen())
            throw unexpected();
          pos++;
        } else {
          throw unexpected();
        }
      } else if (tokens[pos] instanceof OpenSquareToken) {
        rawCSSString += "[";
        pos++;
        while (!(tokens[pos] instanceof CloseSquareToken) && !isEOF())
          rawCSSString += tokens[pos++].toSource();
        if (!(tokens[pos] instanceof CloseSquareToken))
          throw unexpected();
        rawCSSString += "]";
        pos++;
      } else {
        throw unexpected();
      }
    }
    if (!rawCSSString && !functions.length)
      throw unexpected();
    return { css: rawCSSString || void 0, functions };
  }
  function consumeBuiltinFunctionArguments() {
    let s = "";
    let balance = 1;
    while (!isEOF()) {
      if (isOpenParen() || isFunction())
        balance++;
      if (isCloseParen())
        balance--;
      if (!balance)
        break;
      s += tokens[pos++].toSource();
    }
    return s;
  }
  const result = consumeFunctionArguments();
  if (!isEOF())
    throw unexpected();
  if (result.some((arg) => typeof arg !== "object" || !("simples" in arg)))
    throw new InvalidSelectorError(`Error while parsing selector "${selector}"`);
  return { selector: result, names: Array.from(names) };
}
const kNestedSelectorNames = /* @__PURE__ */ new Set(["internal:has", "internal:has-not", "internal:and", "internal:or", "internal:chain", "left-of", "right-of", "above", "below", "near"]);
const kNestedSelectorNamesWithDistance = /* @__PURE__ */ new Set(["left-of", "right-of", "above", "below", "near"]);
const customCSSNames = /* @__PURE__ */ new Set(["not", "is", "where", "has", "scope", "light", "visible", "text", "text-matches", "text-is", "has-text", "above", "below", "right-of", "left-of", "near", "nth-match"]);
function parseSelector(selector) {
  const parsedStrings = parseSelectorString(selector);
  const parts = [];
  for (const part of parsedStrings.parts) {
    if (part.name === "css" || part.name === "css:light") {
      if (part.name === "css:light")
        part.body = ":light(" + part.body + ")";
      const parsedCSS = parseCSS(part.body, customCSSNames);
      parts.push({
        name: "css",
        body: parsedCSS.selector,
        source: part.body
      });
      continue;
    }
    if (kNestedSelectorNames.has(part.name)) {
      let innerSelector;
      let distance;
      try {
        const unescaped = JSON.parse("[" + part.body + "]");
        if (!Array.isArray(unescaped) || unescaped.length < 1 || unescaped.length > 2 || typeof unescaped[0] !== "string")
          throw new InvalidSelectorError(`Malformed selector: ${part.name}=` + part.body);
        innerSelector = unescaped[0];
        if (unescaped.length === 2) {
          if (typeof unescaped[1] !== "number" || !kNestedSelectorNamesWithDistance.has(part.name))
            throw new InvalidSelectorError(`Malformed selector: ${part.name}=` + part.body);
          distance = unescaped[1];
        }
      } catch (e) {
        throw new InvalidSelectorError(`Malformed selector: ${part.name}=` + part.body);
      }
      const nested = { name: part.name, source: part.body, body: { parsed: parseSelector(innerSelector), distance } };
      const lastFrame = [...nested.body.parsed.parts].reverse().find((part2) => part2.name === "internal:control" && part2.body === "enter-frame");
      const lastFrameIndex = lastFrame ? nested.body.parsed.parts.indexOf(lastFrame) : -1;
      if (lastFrameIndex !== -1 && selectorPartsEqual(nested.body.parsed.parts.slice(0, lastFrameIndex + 1), parts.slice(0, lastFrameIndex + 1)))
        nested.body.parsed.parts.splice(0, lastFrameIndex + 1);
      parts.push(nested);
      continue;
    }
    parts.push({ ...part, source: part.body });
  }
  if (kNestedSelectorNames.has(parts[0].name))
    throw new InvalidSelectorError(`"${parts[0].name}" selector cannot be first`);
  return {
    capture: parsedStrings.capture,
    parts
  };
}
function selectorPartsEqual(list1, list2) {
  return stringifySelector({ parts: list1 }) === stringifySelector({ parts: list2 });
}
function stringifySelector(selector, forceEngineName) {
  if (typeof selector === "string")
    return selector;
  return selector.parts.map((p2, i) => {
    let includeEngine = true;
    if (!forceEngineName && i !== selector.capture) {
      if (p2.name === "css")
        includeEngine = false;
      else if (p2.name === "xpath" && p2.source.startsWith("//") || p2.source.startsWith(".."))
        includeEngine = false;
    }
    const prefix = includeEngine ? p2.name + "=" : "";
    return `${i === selector.capture ? "*" : ""}${prefix}${p2.source}`;
  }).join(" >> ");
}
function visitAllSelectorParts(selector, visitor) {
  const visit = (selector2, nested) => {
    for (const part of selector2.parts) {
      visitor(part, nested);
      if (kNestedSelectorNames.has(part.name))
        visit(part.body.parsed, true);
    }
  };
  visit(selector, false);
}
function parseSelectorString(selector) {
  let index = 0;
  let quote;
  let start = 0;
  const result = { parts: [] };
  const append = () => {
    const part = selector.substring(start, index).trim();
    const eqIndex = part.indexOf("=");
    let name;
    let body;
    if (eqIndex !== -1 && part.substring(0, eqIndex).trim().match(/^[a-zA-Z_0-9-+:*]+$/)) {
      name = part.substring(0, eqIndex).trim();
      body = part.substring(eqIndex + 1);
    } else if (part.length > 1 && part[0] === '"' && part[part.length - 1] === '"') {
      name = "text";
      body = part;
    } else if (part.length > 1 && part[0] === "'" && part[part.length - 1] === "'") {
      name = "text";
      body = part;
    } else if (/^\(*\/\//.test(part) || part.startsWith("..")) {
      name = "xpath";
      body = part;
    } else {
      name = "css";
      body = part;
    }
    let capture = false;
    if (name[0] === "*") {
      capture = true;
      name = name.substring(1);
    }
    result.parts.push({ name, body });
    if (capture) {
      if (result.capture !== void 0)
        throw new InvalidSelectorError(`Only one of the selectors can capture using * modifier`);
      result.capture = result.parts.length - 1;
    }
  };
  if (!selector.includes(">>")) {
    index = selector.length;
    append();
    return result;
  }
  const shouldIgnoreTextSelectorQuote = () => {
    const prefix = selector.substring(start, index);
    const match = prefix.match(/^\s*text\s*=(.*)$/);
    return !!match && !!match[1];
  };
  while (index < selector.length) {
    const c = selector[index];
    if (c === "\\" && index + 1 < selector.length) {
      index += 2;
    } else if (c === quote) {
      quote = void 0;
      index++;
    } else if (!quote && (c === '"' || c === "'" || c === "`") && !shouldIgnoreTextSelectorQuote()) {
      quote = c;
      index++;
    } else if (!quote && c === ">" && selector[index + 1] === ">") {
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
function parseAttributeSelector(selector, allowUnquotedStrings) {
  let wp = 0;
  let EOL = selector.length === 0;
  const next = () => selector[wp] || "";
  const eat1 = () => {
    const result2 = next();
    ++wp;
    EOL = wp >= selector.length;
    return result2;
  };
  const syntaxError = (stage) => {
    if (EOL)
      throw new InvalidSelectorError(`Unexpected end of selector while parsing selector \`${selector}\``);
    throw new InvalidSelectorError(`Error while parsing selector \`${selector}\` - unexpected symbol "${next()}" at position ${wp}` + (stage ? " during " + stage : ""));
  };
  function skipSpaces() {
    while (!EOL && /\s/.test(next()))
      eat1();
  }
  function isCSSNameChar(char) {
    return char >= "" || char >= "0" && char <= "9" || char >= "A" && char <= "Z" || char >= "a" && char <= "z" || char >= "0" && char <= "9" || char === "_" || char === "-";
  }
  function readIdentifier() {
    let result2 = "";
    skipSpaces();
    while (!EOL && isCSSNameChar(next()))
      result2 += eat1();
    return result2;
  }
  function readQuotedString(quote) {
    let result2 = eat1();
    if (result2 !== quote)
      syntaxError("parsing quoted string");
    while (!EOL && next() !== quote) {
      if (next() === "\\")
        eat1();
      result2 += eat1();
    }
    if (next() !== quote)
      syntaxError("parsing quoted string");
    result2 += eat1();
    return result2;
  }
  function readRegularExpression() {
    if (eat1() !== "/")
      syntaxError("parsing regular expression");
    let source = "";
    let inClass = false;
    while (!EOL) {
      if (next() === "\\") {
        source += eat1();
        if (EOL)
          syntaxError("parsing regular expression");
      } else if (inClass && next() === "]") {
        inClass = false;
      } else if (!inClass && next() === "[") {
        inClass = true;
      } else if (!inClass && next() === "/") {
        break;
      }
      source += eat1();
    }
    if (eat1() !== "/")
      syntaxError("parsing regular expression");
    let flags = "";
    while (!EOL && next().match(/[dgimsuy]/))
      flags += eat1();
    try {
      return new RegExp(source, flags);
    } catch (e) {
      throw new InvalidSelectorError(`Error while parsing selector \`${selector}\`: ${e.message}`);
    }
  }
  function readAttributeToken() {
    let token = "";
    skipSpaces();
    if (next() === `'` || next() === `"`)
      token = readQuotedString(next()).slice(1, -1);
    else
      token = readIdentifier();
    if (!token)
      syntaxError("parsing property path");
    return token;
  }
  function readOperator() {
    skipSpaces();
    let op = "";
    if (!EOL)
      op += eat1();
    if (!EOL && op !== "=")
      op += eat1();
    if (!["=", "*=", "^=", "$=", "|=", "~="].includes(op))
      syntaxError("parsing operator");
    return op;
  }
  function readAttribute() {
    eat1();
    const jsonPath = [];
    jsonPath.push(readAttributeToken());
    skipSpaces();
    while (next() === ".") {
      eat1();
      jsonPath.push(readAttributeToken());
      skipSpaces();
    }
    if (next() === "]") {
      eat1();
      return { name: jsonPath.join("."), jsonPath, op: "<truthy>", value: null, caseSensitive: false };
    }
    const operator = readOperator();
    let value = void 0;
    let caseSensitive = true;
    skipSpaces();
    if (next() === "/") {
      if (operator !== "=")
        throw new InvalidSelectorError(`Error while parsing selector \`${selector}\` - cannot use ${operator} in attribute with regular expression`);
      value = readRegularExpression();
    } else if (next() === `'` || next() === `"`) {
      value = readQuotedString(next()).slice(1, -1);
      skipSpaces();
      if (next() === "i" || next() === "I") {
        caseSensitive = false;
        eat1();
      } else if (next() === "s" || next() === "S") {
        caseSensitive = true;
        eat1();
      }
    } else {
      value = "";
      while (!EOL && (isCSSNameChar(next()) || next() === "+" || next() === "."))
        value += eat1();
      if (value === "true") {
        value = true;
      } else if (value === "false") {
        value = false;
      } else {
        if (!allowUnquotedStrings) {
          value = +value;
          if (Number.isNaN(value))
            syntaxError("parsing attribute value");
        }
      }
    }
    skipSpaces();
    if (next() !== "]")
      syntaxError("parsing attribute value");
    eat1();
    if (operator !== "=" && typeof value !== "string")
      throw new InvalidSelectorError(`Error while parsing selector \`${selector}\` - cannot use ${operator} in attribute with non-string matching value - ${value}`);
    return { name: jsonPath.join("."), jsonPath, op: operator, value, caseSensitive };
  }
  const result = {
    name: "",
    attributes: []
  };
  result.name = readIdentifier();
  skipSpaces();
  while (next() === "[") {
    result.attributes.push(readAttribute());
    skipSpaces();
  }
  if (!EOL)
    syntaxError(void 0);
  if (!result.name && !result.attributes.length)
    throw new InvalidSelectorError(`Error while parsing selector \`${selector}\` - selector cannot be empty`);
  return result;
}
function asLocator(lang, selector, isFrameLocator = false) {
  return asLocators(lang, selector, isFrameLocator)[0];
}
function asLocators(lang, selector, isFrameLocator = false, maxOutputSize = 20, preferredQuote) {
  try {
    return innerAsLocators(new generators[lang](preferredQuote), parseSelector(selector), isFrameLocator, maxOutputSize);
  } catch (e) {
    return [selector];
  }
}
function innerAsLocators(factory, parsed, isFrameLocator = false, maxOutputSize = 20) {
  const parts = [...parsed.parts];
  for (let index = 0; index < parts.length - 1; index++) {
    if (parts[index].name === "nth" && parts[index + 1].name === "internal:control" && parts[index + 1].body === "enter-frame") {
      const [nth] = parts.splice(index, 1);
      parts.splice(index + 1, 0, nth);
    }
  }
  const tokens = [];
  let nextBase = isFrameLocator ? "frame-locator" : "page";
  for (let index = 0; index < parts.length; index++) {
    const part = parts[index];
    const base = nextBase;
    nextBase = "locator";
    if (part.name === "nth") {
      if (part.body === "0")
        tokens.push([factory.generateLocator(base, "first", ""), factory.generateLocator(base, "nth", "0")]);
      else if (part.body === "-1")
        tokens.push([factory.generateLocator(base, "last", ""), factory.generateLocator(base, "nth", "-1")]);
      else
        tokens.push([factory.generateLocator(base, "nth", part.body)]);
      continue;
    }
    if (part.name === "internal:text") {
      const { exact, text } = detectExact(part.body);
      tokens.push([factory.generateLocator(base, "text", text, { exact })]);
      continue;
    }
    if (part.name === "internal:has-text") {
      const { exact, text } = detectExact(part.body);
      if (!exact) {
        tokens.push([factory.generateLocator(base, "has-text", text, { exact })]);
        continue;
      }
    }
    if (part.name === "internal:has-not-text") {
      const { exact, text } = detectExact(part.body);
      if (!exact) {
        tokens.push([factory.generateLocator(base, "has-not-text", text, { exact })]);
        continue;
      }
    }
    if (part.name === "internal:has") {
      const inners = innerAsLocators(factory, part.body.parsed, false, maxOutputSize);
      tokens.push(inners.map((inner) => factory.generateLocator(base, "has", inner)));
      continue;
    }
    if (part.name === "internal:has-not") {
      const inners = innerAsLocators(factory, part.body.parsed, false, maxOutputSize);
      tokens.push(inners.map((inner) => factory.generateLocator(base, "hasNot", inner)));
      continue;
    }
    if (part.name === "internal:and") {
      const inners = innerAsLocators(factory, part.body.parsed, false, maxOutputSize);
      tokens.push(inners.map((inner) => factory.generateLocator(base, "and", inner)));
      continue;
    }
    if (part.name === "internal:or") {
      const inners = innerAsLocators(factory, part.body.parsed, false, maxOutputSize);
      tokens.push(inners.map((inner) => factory.generateLocator(base, "or", inner)));
      continue;
    }
    if (part.name === "internal:chain") {
      const inners = innerAsLocators(factory, part.body.parsed, false, maxOutputSize);
      tokens.push(inners.map((inner) => factory.generateLocator(base, "chain", inner)));
      continue;
    }
    if (part.name === "internal:label") {
      const { exact, text } = detectExact(part.body);
      tokens.push([factory.generateLocator(base, "label", text, { exact })]);
      continue;
    }
    if (part.name === "internal:role") {
      const attrSelector = parseAttributeSelector(part.body, true);
      const options = { attrs: [] };
      for (const attr of attrSelector.attributes) {
        if (attr.name === "name") {
          options.exact = attr.caseSensitive;
          options.name = attr.value;
        } else {
          if (attr.name === "level" && typeof attr.value === "string")
            attr.value = +attr.value;
          options.attrs.push({ name: attr.name === "include-hidden" ? "includeHidden" : attr.name, value: attr.value });
        }
      }
      tokens.push([factory.generateLocator(base, "role", attrSelector.name, options)]);
      continue;
    }
    if (part.name === "internal:testid") {
      const attrSelector = parseAttributeSelector(part.body, true);
      const { value } = attrSelector.attributes[0];
      tokens.push([factory.generateLocator(base, "test-id", value)]);
      continue;
    }
    if (part.name === "internal:attr") {
      const attrSelector = parseAttributeSelector(part.body, true);
      const { name, value, caseSensitive } = attrSelector.attributes[0];
      const text = value;
      const exact = !!caseSensitive;
      if (name === "placeholder") {
        tokens.push([factory.generateLocator(base, "placeholder", text, { exact })]);
        continue;
      }
      if (name === "alt") {
        tokens.push([factory.generateLocator(base, "alt", text, { exact })]);
        continue;
      }
      if (name === "title") {
        tokens.push([factory.generateLocator(base, "title", text, { exact })]);
        continue;
      }
    }
    let locatorType = "default";
    const nextPart = parts[index + 1];
    if (nextPart && nextPart.name === "internal:control" && nextPart.body === "enter-frame") {
      locatorType = "frame";
      nextBase = "frame-locator";
      index++;
    }
    const selectorPart = stringifySelector({ parts: [part] });
    const locatorPart = factory.generateLocator(base, locatorType, selectorPart);
    if (locatorType === "default" && nextPart && ["internal:has-text", "internal:has-not-text"].includes(nextPart.name)) {
      const { exact, text } = detectExact(nextPart.body);
      if (!exact) {
        const nextLocatorPart = factory.generateLocator("locator", nextPart.name === "internal:has-text" ? "has-text" : "has-not-text", text, { exact });
        const options = {};
        if (nextPart.name === "internal:has-text")
          options.hasText = text;
        else
          options.hasNotText = text;
        const combinedPart = factory.generateLocator(base, "default", selectorPart, options);
        tokens.push([factory.chainLocators([locatorPart, nextLocatorPart]), combinedPart]);
        index++;
        continue;
      }
    }
    let locatorPartWithEngine;
    if (["xpath", "css"].includes(part.name)) {
      const selectorPart2 = stringifySelector(
        { parts: [part] },
        /* forceEngineName */
        true
      );
      locatorPartWithEngine = factory.generateLocator(base, locatorType, selectorPart2);
    }
    tokens.push([locatorPart, locatorPartWithEngine].filter(Boolean));
  }
  return combineTokens(factory, tokens, maxOutputSize);
}
function combineTokens(factory, tokens, maxOutputSize) {
  const currentTokens = tokens.map(() => "");
  const result = [];
  const visit = (index) => {
    if (index === tokens.length) {
      result.push(factory.chainLocators(currentTokens));
      return currentTokens.length < maxOutputSize;
    }
    for (const taken of tokens[index]) {
      currentTokens[index] = taken;
      if (!visit(index + 1))
        return false;
    }
    return true;
  };
  visit(0);
  return result;
}
function detectExact(text) {
  let exact = false;
  const match = text.match(/^\/(.*)\/([igm]*)$/);
  if (match)
    return { text: new RegExp(match[1], match[2]) };
  if (text.endsWith('"')) {
    text = JSON.parse(text);
    exact = true;
  } else if (text.endsWith('"s')) {
    text = JSON.parse(text.substring(0, text.length - 1));
    exact = true;
  } else if (text.endsWith('"i')) {
    text = JSON.parse(text.substring(0, text.length - 1));
    exact = false;
  }
  return { exact, text };
}
class JavaScriptLocatorFactory {
  constructor(preferredQuote) {
    this.preferredQuote = preferredQuote;
  }
  generateLocator(base, kind, body, options = {}) {
    switch (kind) {
      case "default":
        if (options.hasText !== void 0)
          return `locator(${this.quote(body)}, { hasText: ${this.toHasText(options.hasText)} })`;
        if (options.hasNotText !== void 0)
          return `locator(${this.quote(body)}, { hasNotText: ${this.toHasText(options.hasNotText)} })`;
        return `locator(${this.quote(body)})`;
      case "frame":
        return `frameLocator(${this.quote(body)})`;
      case "nth":
        return `nth(${body})`;
      case "first":
        return `first()`;
      case "last":
        return `last()`;
      case "role":
        const attrs = [];
        if (isRegExp(options.name)) {
          attrs.push(`name: ${this.regexToSourceString(options.name)}`);
        } else if (typeof options.name === "string") {
          attrs.push(`name: ${this.quote(options.name)}`);
          if (options.exact)
            attrs.push(`exact: true`);
        }
        for (const { name, value } of options.attrs)
          attrs.push(`${name}: ${typeof value === "string" ? this.quote(value) : value}`);
        const attrString = attrs.length ? `, { ${attrs.join(", ")} }` : "";
        return `getByRole(${this.quote(body)}${attrString})`;
      case "has-text":
        return `filter({ hasText: ${this.toHasText(body)} })`;
      case "has-not-text":
        return `filter({ hasNotText: ${this.toHasText(body)} })`;
      case "has":
        return `filter({ has: ${body} })`;
      case "hasNot":
        return `filter({ hasNot: ${body} })`;
      case "and":
        return `and(${body})`;
      case "or":
        return `or(${body})`;
      case "chain":
        return `locator(${body})`;
      case "test-id":
        return `getByTestId(${this.toTestIdValue(body)})`;
      case "text":
        return this.toCallWithExact("getByText", body, !!options.exact);
      case "alt":
        return this.toCallWithExact("getByAltText", body, !!options.exact);
      case "placeholder":
        return this.toCallWithExact("getByPlaceholder", body, !!options.exact);
      case "label":
        return this.toCallWithExact("getByLabel", body, !!options.exact);
      case "title":
        return this.toCallWithExact("getByTitle", body, !!options.exact);
      default:
        throw new Error("Unknown selector kind " + kind);
    }
  }
  chainLocators(locators) {
    return locators.join(".");
  }
  regexToSourceString(re2) {
    return normalizeEscapedRegexQuotes(String(re2));
  }
  toCallWithExact(method, body, exact) {
    if (isRegExp(body))
      return `${method}(${this.regexToSourceString(body)})`;
    return exact ? `${method}(${this.quote(body)}, { exact: true })` : `${method}(${this.quote(body)})`;
  }
  toHasText(body) {
    if (isRegExp(body))
      return this.regexToSourceString(body);
    return this.quote(body);
  }
  toTestIdValue(value) {
    if (isRegExp(value))
      return this.regexToSourceString(value);
    return this.quote(value);
  }
  quote(text) {
    return escapeWithQuotes(text, this.preferredQuote ?? "'");
  }
}
class PythonLocatorFactory {
  generateLocator(base, kind, body, options = {}) {
    switch (kind) {
      case "default":
        if (options.hasText !== void 0)
          return `locator(${this.quote(body)}, has_text=${this.toHasText(options.hasText)})`;
        if (options.hasNotText !== void 0)
          return `locator(${this.quote(body)}, has_not_text=${this.toHasText(options.hasNotText)})`;
        return `locator(${this.quote(body)})`;
      case "frame":
        return `frame_locator(${this.quote(body)})`;
      case "nth":
        return `nth(${body})`;
      case "first":
        return `first`;
      case "last":
        return `last`;
      case "role":
        const attrs = [];
        if (isRegExp(options.name)) {
          attrs.push(`name=${this.regexToString(options.name)}`);
        } else if (typeof options.name === "string") {
          attrs.push(`name=${this.quote(options.name)}`);
          if (options.exact)
            attrs.push(`exact=True`);
        }
        for (const { name, value } of options.attrs) {
          let valueString = typeof value === "string" ? this.quote(value) : value;
          if (typeof value === "boolean")
            valueString = value ? "True" : "False";
          attrs.push(`${toSnakeCase(name)}=${valueString}`);
        }
        const attrString = attrs.length ? `, ${attrs.join(", ")}` : "";
        return `get_by_role(${this.quote(body)}${attrString})`;
      case "has-text":
        return `filter(has_text=${this.toHasText(body)})`;
      case "has-not-text":
        return `filter(has_not_text=${this.toHasText(body)})`;
      case "has":
        return `filter(has=${body})`;
      case "hasNot":
        return `filter(has_not=${body})`;
      case "and":
        return `and_(${body})`;
      case "or":
        return `or_(${body})`;
      case "chain":
        return `locator(${body})`;
      case "test-id":
        return `get_by_test_id(${this.toTestIdValue(body)})`;
      case "text":
        return this.toCallWithExact("get_by_text", body, !!options.exact);
      case "alt":
        return this.toCallWithExact("get_by_alt_text", body, !!options.exact);
      case "placeholder":
        return this.toCallWithExact("get_by_placeholder", body, !!options.exact);
      case "label":
        return this.toCallWithExact("get_by_label", body, !!options.exact);
      case "title":
        return this.toCallWithExact("get_by_title", body, !!options.exact);
      default:
        throw new Error("Unknown selector kind " + kind);
    }
  }
  chainLocators(locators) {
    return locators.join(".");
  }
  regexToString(body) {
    const suffix = body.flags.includes("i") ? ", re.IGNORECASE" : "";
    return `re.compile(r"${normalizeEscapedRegexQuotes(body.source).replace(/\\\//, "/").replace(/"/g, '\\"')}"${suffix})`;
  }
  toCallWithExact(method, body, exact) {
    if (isRegExp(body))
      return `${method}(${this.regexToString(body)})`;
    if (exact)
      return `${method}(${this.quote(body)}, exact=True)`;
    return `${method}(${this.quote(body)})`;
  }
  toHasText(body) {
    if (isRegExp(body))
      return this.regexToString(body);
    return `${this.quote(body)}`;
  }
  toTestIdValue(value) {
    if (isRegExp(value))
      return this.regexToString(value);
    return this.quote(value);
  }
  quote(text) {
    return escapeWithQuotes(text, '"');
  }
}
class JavaLocatorFactory {
  generateLocator(base, kind, body, options = {}) {
    let clazz;
    switch (base) {
      case "page":
        clazz = "Page";
        break;
      case "frame-locator":
        clazz = "FrameLocator";
        break;
      case "locator":
        clazz = "Locator";
        break;
    }
    switch (kind) {
      case "default":
        if (options.hasText !== void 0)
          return `locator(${this.quote(body)}, new ${clazz}.LocatorOptions().setHasText(${this.toHasText(options.hasText)}))`;
        if (options.hasNotText !== void 0)
          return `locator(${this.quote(body)}, new ${clazz}.LocatorOptions().setHasNotText(${this.toHasText(options.hasNotText)}))`;
        return `locator(${this.quote(body)})`;
      case "frame":
        return `frameLocator(${this.quote(body)})`;
      case "nth":
        return `nth(${body})`;
      case "first":
        return `first()`;
      case "last":
        return `last()`;
      case "role":
        const attrs = [];
        if (isRegExp(options.name)) {
          attrs.push(`.setName(${this.regexToString(options.name)})`);
        } else if (typeof options.name === "string") {
          attrs.push(`.setName(${this.quote(options.name)})`);
          if (options.exact)
            attrs.push(`.setExact(true)`);
        }
        for (const { name, value } of options.attrs)
          attrs.push(`.set${toTitleCase(name)}(${typeof value === "string" ? this.quote(value) : value})`);
        const attrString = attrs.length ? `, new ${clazz}.GetByRoleOptions()${attrs.join("")}` : "";
        return `getByRole(AriaRole.${toSnakeCase(body).toUpperCase()}${attrString})`;
      case "has-text":
        return `filter(new ${clazz}.FilterOptions().setHasText(${this.toHasText(body)}))`;
      case "has-not-text":
        return `filter(new ${clazz}.FilterOptions().setHasNotText(${this.toHasText(body)}))`;
      case "has":
        return `filter(new ${clazz}.FilterOptions().setHas(${body}))`;
      case "hasNot":
        return `filter(new ${clazz}.FilterOptions().setHasNot(${body}))`;
      case "and":
        return `and(${body})`;
      case "or":
        return `or(${body})`;
      case "chain":
        return `locator(${body})`;
      case "test-id":
        return `getByTestId(${this.toTestIdValue(body)})`;
      case "text":
        return this.toCallWithExact(clazz, "getByText", body, !!options.exact);
      case "alt":
        return this.toCallWithExact(clazz, "getByAltText", body, !!options.exact);
      case "placeholder":
        return this.toCallWithExact(clazz, "getByPlaceholder", body, !!options.exact);
      case "label":
        return this.toCallWithExact(clazz, "getByLabel", body, !!options.exact);
      case "title":
        return this.toCallWithExact(clazz, "getByTitle", body, !!options.exact);
      default:
        throw new Error("Unknown selector kind " + kind);
    }
  }
  chainLocators(locators) {
    return locators.join(".");
  }
  regexToString(body) {
    const suffix = body.flags.includes("i") ? ", Pattern.CASE_INSENSITIVE" : "";
    return `Pattern.compile(${this.quote(normalizeEscapedRegexQuotes(body.source))}${suffix})`;
  }
  toCallWithExact(clazz, method, body, exact) {
    if (isRegExp(body))
      return `${method}(${this.regexToString(body)})`;
    if (exact)
      return `${method}(${this.quote(body)}, new ${clazz}.${toTitleCase(method)}Options().setExact(true))`;
    return `${method}(${this.quote(body)})`;
  }
  toHasText(body) {
    if (isRegExp(body))
      return this.regexToString(body);
    return this.quote(body);
  }
  toTestIdValue(value) {
    if (isRegExp(value))
      return this.regexToString(value);
    return this.quote(value);
  }
  quote(text) {
    return escapeWithQuotes(text, '"');
  }
}
class CSharpLocatorFactory {
  generateLocator(base, kind, body, options = {}) {
    switch (kind) {
      case "default":
        if (options.hasText !== void 0)
          return `Locator(${this.quote(body)}, new() { ${this.toHasText(options.hasText)} })`;
        if (options.hasNotText !== void 0)
          return `Locator(${this.quote(body)}, new() { ${this.toHasNotText(options.hasNotText)} })`;
        return `Locator(${this.quote(body)})`;
      case "frame":
        return `FrameLocator(${this.quote(body)})`;
      case "nth":
        return `Nth(${body})`;
      case "first":
        return `First`;
      case "last":
        return `Last`;
      case "role":
        const attrs = [];
        if (isRegExp(options.name)) {
          attrs.push(`NameRegex = ${this.regexToString(options.name)}`);
        } else if (typeof options.name === "string") {
          attrs.push(`Name = ${this.quote(options.name)}`);
          if (options.exact)
            attrs.push(`Exact = true`);
        }
        for (const { name, value } of options.attrs)
          attrs.push(`${toTitleCase(name)} = ${typeof value === "string" ? this.quote(value) : value}`);
        const attrString = attrs.length ? `, new() { ${attrs.join(", ")} }` : "";
        return `GetByRole(AriaRole.${toTitleCase(body)}${attrString})`;
      case "has-text":
        return `Filter(new() { ${this.toHasText(body)} })`;
      case "has-not-text":
        return `Filter(new() { ${this.toHasNotText(body)} })`;
      case "has":
        return `Filter(new() { Has = ${body} })`;
      case "hasNot":
        return `Filter(new() { HasNot = ${body} })`;
      case "and":
        return `And(${body})`;
      case "or":
        return `Or(${body})`;
      case "chain":
        return `Locator(${body})`;
      case "test-id":
        return `GetByTestId(${this.toTestIdValue(body)})`;
      case "text":
        return this.toCallWithExact("GetByText", body, !!options.exact);
      case "alt":
        return this.toCallWithExact("GetByAltText", body, !!options.exact);
      case "placeholder":
        return this.toCallWithExact("GetByPlaceholder", body, !!options.exact);
      case "label":
        return this.toCallWithExact("GetByLabel", body, !!options.exact);
      case "title":
        return this.toCallWithExact("GetByTitle", body, !!options.exact);
      default:
        throw new Error("Unknown selector kind " + kind);
    }
  }
  chainLocators(locators) {
    return locators.join(".");
  }
  regexToString(body) {
    const suffix = body.flags.includes("i") ? ", RegexOptions.IgnoreCase" : "";
    return `new Regex(${this.quote(normalizeEscapedRegexQuotes(body.source))}${suffix})`;
  }
  toCallWithExact(method, body, exact) {
    if (isRegExp(body))
      return `${method}(${this.regexToString(body)})`;
    if (exact)
      return `${method}(${this.quote(body)}, new() { Exact = true })`;
    return `${method}(${this.quote(body)})`;
  }
  toHasText(body) {
    if (isRegExp(body))
      return `HasTextRegex = ${this.regexToString(body)}`;
    return `HasText = ${this.quote(body)}`;
  }
  toTestIdValue(value) {
    if (isRegExp(value))
      return this.regexToString(value);
    return this.quote(value);
  }
  toHasNotText(body) {
    if (isRegExp(body))
      return `HasNotTextRegex = ${this.regexToString(body)}`;
    return `HasNotText = ${this.quote(body)}`;
  }
  quote(text) {
    return escapeWithQuotes(text, '"');
  }
}
class JsonlLocatorFactory {
  generateLocator(base, kind, body, options = {}) {
    return JSON.stringify({
      kind,
      body,
      options
    });
  }
  chainLocators(locators) {
    const objects = locators.map((l2) => JSON.parse(l2));
    for (let i = 0; i < objects.length - 1; ++i)
      objects[i].next = objects[i + 1];
    return JSON.stringify(objects[0]);
  }
}
const generators = {
  javascript: JavaScriptLocatorFactory,
  python: PythonLocatorFactory,
  java: JavaLocatorFactory,
  csharp: CSharpLocatorFactory,
  jsonl: JsonlLocatorFactory
};
function isRegExp(obj) {
  return obj instanceof RegExp;
}
const scrollPositions = /* @__PURE__ */ new Map();
function ListView({
  name,
  items = [],
  id: id2,
  render,
  icon,
  isError,
  isWarning,
  isInfo,
  indent,
  selectedItem,
  onAccepted,
  onSelected,
  onLeftArrow,
  onRightArrow,
  onHighlighted,
  onIconClicked,
  noItemsMessage,
  dataTestId,
  notSelectable
}) {
  const itemListRef = reactExports.useRef(null);
  const [highlightedItem, setHighlightedItem] = reactExports.useState();
  reactExports.useEffect(() => {
    onHighlighted == null ? void 0 : onHighlighted(highlightedItem);
  }, [onHighlighted, highlightedItem]);
  reactExports.useEffect(() => {
    const listElem = itemListRef.current;
    if (!listElem)
      return;
    const saveScrollPosition = () => {
      scrollPositions.set(name, listElem.scrollTop);
    };
    listElem.addEventListener("scroll", saveScrollPosition, { passive: true });
    return () => listElem.removeEventListener("scroll", saveScrollPosition);
  }, [name]);
  reactExports.useEffect(() => {
    if (itemListRef.current)
      itemListRef.current.scrollTop = scrollPositions.get(name) || 0;
  }, [name]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: clsx(`list-view vbox`, name + "-list-view"), role: items.length > 0 ? "list" : void 0, "data-testid": dataTestId || name + "-list", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: clsx("list-view-content", notSelectable && "not-selectable"),
      tabIndex: 0,
      onKeyDown: (event) => {
        var _a;
        if (selectedItem && event.key === "Enter") {
          onAccepted == null ? void 0 : onAccepted(selectedItem, items.indexOf(selectedItem));
          return;
        }
        if (event.key !== "ArrowDown" && event.key !== "ArrowUp" && event.key !== "ArrowLeft" && event.key !== "ArrowRight")
          return;
        event.stopPropagation();
        event.preventDefault();
        if (selectedItem && event.key === "ArrowLeft") {
          onLeftArrow == null ? void 0 : onLeftArrow(selectedItem, items.indexOf(selectedItem));
          return;
        }
        if (selectedItem && event.key === "ArrowRight") {
          onRightArrow == null ? void 0 : onRightArrow(selectedItem, items.indexOf(selectedItem));
          return;
        }
        const index = selectedItem ? items.indexOf(selectedItem) : -1;
        let newIndex = index;
        if (event.key === "ArrowDown") {
          if (index === -1)
            newIndex = 0;
          else
            newIndex = Math.min(index + 1, items.length - 1);
        }
        if (event.key === "ArrowUp") {
          if (index === -1)
            newIndex = items.length - 1;
          else
            newIndex = Math.max(index - 1, 0);
        }
        const element = (_a = itemListRef.current) == null ? void 0 : _a.children.item(newIndex);
        scrollIntoViewIfNeeded(element || void 0);
        onHighlighted == null ? void 0 : onHighlighted(void 0);
        onSelected == null ? void 0 : onSelected(items[newIndex], newIndex);
        setHighlightedItem(void 0);
      },
      ref: itemListRef,
      children: [
        noItemsMessage && items.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "list-view-empty", children: noItemsMessage }),
        items.map((item, index) => {
          const indentation = (indent == null ? void 0 : indent(item, index)) || 0;
          const rendered = render(item, index);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              onDoubleClick: () => onAccepted == null ? void 0 : onAccepted(item, index),
              role: "listitem",
              className: clsx(
                "list-view-entry",
                selectedItem === item && "selected",
                !notSelectable && highlightedItem === item && "highlighted",
                (isError == null ? void 0 : isError(item, index)) && "error",
                (isWarning == null ? void 0 : isWarning(item, index)) && "warning",
                (isInfo == null ? void 0 : isInfo(item, index)) && "info"
              ),
              onClick: () => onSelected == null ? void 0 : onSelected(item, index),
              onMouseEnter: () => setHighlightedItem(item),
              onMouseLeave: () => setHighlightedItem(void 0),
              children: [
                indentation ? new Array(indentation).fill(0).map(() => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "list-view-indent" })) : void 0,
                icon && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "codicon " + (icon(item, index) || "codicon-blank"),
                    style: { minWidth: 16, marginRight: 4 },
                    onDoubleClick: (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    },
                    onClick: (e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      onIconClicked == null ? void 0 : onIconClicked(item, index);
                    }
                  }
                ),
                typeof rendered === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textOverflow: "ellipsis", overflow: "hidden" }, children: rendered }) : rendered
              ]
            },
            (id2 == null ? void 0 : id2(item, index)) || index
          );
        })
      ]
    }
  ) });
}
function scrollIntoViewIfNeeded(element) {
  if (!element)
    return;
  if (element == null ? void 0 : element.scrollIntoViewIfNeeded)
    element.scrollIntoViewIfNeeded(false);
  else
    element == null ? void 0 : element.scrollIntoView();
}
const TreeListView = ListView;
function TreeView({
  name,
  rootItem,
  render,
  icon,
  isError,
  isVisible,
  selectedItem,
  onAccepted,
  onSelected,
  onHighlighted,
  treeState,
  setTreeState,
  noItemsMessage,
  dataTestId,
  autoExpandDepth
}) {
  const treeItems = reactExports.useMemo(() => {
    return flattenTree(rootItem, selectedItem, treeState.expandedItems, autoExpandDepth || 0);
  }, [rootItem, selectedItem, treeState, autoExpandDepth]);
  const visibleItems = reactExports.useMemo(() => {
    if (!isVisible)
      return [...treeItems.keys()];
    const cachedVisible = /* @__PURE__ */ new Map();
    const visit = (item) => {
      const cachedResult = cachedVisible.get(item);
      if (cachedResult !== void 0)
        return cachedResult;
      let hasVisibleChildren = item.children.some((child) => visit(child));
      for (const child of item.children) {
        const result3 = visit(child);
        hasVisibleChildren = hasVisibleChildren || result3;
      }
      const result2 = isVisible(item) || hasVisibleChildren;
      cachedVisible.set(item, result2);
      return result2;
    };
    for (const item of treeItems.keys())
      visit(item);
    const result = [];
    for (const item of treeItems.keys()) {
      if (isVisible(item))
        result.push(item);
    }
    return result;
  }, [treeItems, isVisible]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    TreeListView,
    {
      name,
      items: visibleItems,
      id: (item) => item.id,
      dataTestId: dataTestId || name + "-tree",
      render: (item) => {
        const rendered = render(item);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          icon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "codicon " + (icon(item) || "blank"), style: { minWidth: 16, marginRight: 4 } }),
          typeof rendered === "string" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { textOverflow: "ellipsis", overflow: "hidden" }, children: rendered }) : rendered
        ] });
      },
      icon: (item) => {
        const expanded = treeItems.get(item).expanded;
        if (typeof expanded === "boolean")
          return expanded ? "codicon-chevron-down" : "codicon-chevron-right";
      },
      isError: (item) => (isError == null ? void 0 : isError(item)) || false,
      indent: (item) => treeItems.get(item).depth,
      selectedItem,
      onAccepted: (item) => onAccepted == null ? void 0 : onAccepted(item),
      onSelected: (item) => onSelected == null ? void 0 : onSelected(item),
      onHighlighted: (item) => onHighlighted == null ? void 0 : onHighlighted(item),
      onLeftArrow: (item) => {
        const { expanded, parent } = treeItems.get(item);
        if (expanded) {
          treeState.expandedItems.set(item.id, false);
          setTreeState({ ...treeState });
        } else if (parent) {
          onSelected == null ? void 0 : onSelected(parent);
        }
      },
      onRightArrow: (item) => {
        if (item.children.length) {
          treeState.expandedItems.set(item.id, true);
          setTreeState({ ...treeState });
        }
      },
      onIconClicked: (item) => {
        const { expanded } = treeItems.get(item);
        if (expanded) {
          for (let i = selectedItem; i; i = i.parent) {
            if (i === item) {
              onSelected == null ? void 0 : onSelected(item);
              break;
            }
          }
          treeState.expandedItems.set(item.id, false);
        } else {
          treeState.expandedItems.set(item.id, true);
        }
        setTreeState({ ...treeState });
      },
      noItemsMessage
    }
  );
}
function flattenTree(rootItem, selectedItem, expandedItems, autoExpandDepth) {
  const result = /* @__PURE__ */ new Map();
  const temporaryExpanded = /* @__PURE__ */ new Set();
  for (let item = selectedItem == null ? void 0 : selectedItem.parent; item; item = item.parent)
    temporaryExpanded.add(item.id);
  const appendChildren = (parent, depth) => {
    for (const item of parent.children) {
      const expandState = temporaryExpanded.has(item.id) || expandedItems.get(item.id);
      const autoExpandMatches = autoExpandDepth > depth && result.size < 25 && expandState !== false;
      const expanded = item.children.length ? expandState ?? autoExpandMatches : void 0;
      result.set(item, { depth, expanded, parent: rootItem === parent ? null : parent });
      if (expanded)
        appendChildren(item, depth + 1);
    }
  };
  appendChildren(rootItem, 0);
  return result;
}
const ActionTreeView = TreeView;
const ActionList = ({
  actions,
  selectedAction,
  selectedTime,
  setSelectedTime,
  sdkLanguage,
  onSelected,
  onHighlighted,
  revealConsole,
  isLive
}) => {
  const [treeState, setTreeState] = reactExports.useState({ expandedItems: /* @__PURE__ */ new Map() });
  const { rootItem, itemMap } = reactExports.useMemo(() => buildActionTree(actions), [actions]);
  const { selectedItem } = reactExports.useMemo(() => {
    const selectedItem2 = selectedAction ? itemMap.get(selectedAction.callId) : void 0;
    return { selectedItem: selectedItem2 };
  }, [itemMap, selectedAction]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "vbox", children: [
    selectedTime && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "action-list-show-all", onClick: () => setSelectedTime(void 0), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "codicon codicon-triangle-left" }),
      "Show all"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ActionTreeView,
      {
        name: "actions",
        rootItem,
        treeState,
        setTreeState,
        selectedItem,
        onSelected: (item) => onSelected(item.action),
        onHighlighted: (item) => onHighlighted(item == null ? void 0 : item.action),
        onAccepted: (item) => setSelectedTime({ minimum: item.action.startTime, maximum: item.action.endTime }),
        isError: (item) => {
          var _a, _b;
          return !!((_b = (_a = item.action) == null ? void 0 : _a.error) == null ? void 0 : _b.message);
        },
        isVisible: (item) => !selectedTime || item.action.startTime <= selectedTime.maximum && item.action.endTime >= selectedTime.minimum,
        render: (item) => renderAction(item.action, { sdkLanguage, revealConsole, isLive, showDuration: true, showBadges: true })
      }
    )
  ] });
};
const renderAction = (action, options) => {
  const { sdkLanguage, revealConsole, isLive, showDuration, showBadges } = options;
  const { errors, warnings } = stats(action);
  const locator = action.params.selector ? asLocator(sdkLanguage || "javascript", action.params.selector) : void 0;
  let time = "";
  if (action.endTime)
    time = msToString(action.endTime - action.startTime);
  else if (action.error)
    time = "Timed out";
  else if (!isLive)
    time = "-";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "action-title", title: action.apiName, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: action.apiName }),
      locator && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "action-selector", title: locator, children: locator }),
      action.method === "goto" && action.params.url && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "action-url", title: action.params.url, children: action.params.url }),
      action.class === "APIRequestContext" && action.params.url && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "action-url", title: action.params.url, children: excludeOrigin(action.params.url) })
    ] }),
    (showDuration || showBadges) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "spacer" }),
    showDuration && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "action-duration", children: time || /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "codicon codicon-loading" }) }),
    showBadges && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "action-icons", onClick: () => revealConsole == null ? void 0 : revealConsole(), children: [
      !!errors && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "action-icon", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "codicon codicon-error" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "action-icon-value", children: errors })
      ] }),
      !!warnings && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "action-icon", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "codicon codicon-warning" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "action-icon-value", children: warnings })
      ] })
    ] })
  ] });
};
function excludeOrigin(url) {
  try {
    const urlObject = new URL(url);
    return urlObject.pathname + urlObject.search;
  } catch (error) {
    return url;
  }
}
const CopyToClipboard = ({ value, description }) => {
  const [icon, setIcon] = reactExports.useState("copy");
  const handleCopy = reactExports.useCallback(() => {
    navigator.clipboard.writeText(value).then(() => {
      setIcon("check");
      setTimeout(() => {
        setIcon("copy");
      }, 3e3);
    }, () => {
      setIcon("close");
    });
  }, [value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { title: description ? description : "Copy", icon, onClick: handleCopy });
};
const PlaceholderPanel = ({ text }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fill", style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
    fontWeight: "bold",
    opacity: 0.5
  }, children: text });
};
const CallTab = ({ action, sdkLanguage }) => {
  if (!action)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PlaceholderPanel, { text: "No action selected" });
  const params = { ...action.params };
  delete params.info;
  const paramKeys = Object.keys(params);
  const timeMillis = action.startTime + (action.context.wallTime - action.context.startTime);
  const wallTime = new Date(timeMillis).toLocaleString();
  const duration = action.endTime ? msToString(action.endTime - action.startTime) : "Timed Out";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "call-tab", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "call-line", children: action.apiName }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "call-section", children: "Time" }),
      wallTime && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "call-line", children: [
        "wall time:",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "call-value datetime", title: wallTime, children: wallTime })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "call-line", children: [
        "duration:",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "call-value datetime", title: duration, children: duration })
      ] })
    ] }),
    !!paramKeys.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "call-section", children: "Parameters" }),
    !!paramKeys.length && paramKeys.map((name, index) => renderProperty(propertyToString(action, name, params[name], sdkLanguage), "param-" + index)),
    !!action.result && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "call-section", children: "Return value" }),
    !!action.result && Object.keys(action.result).map(
      (name, index) => renderProperty(propertyToString(action, name, action.result[name], sdkLanguage), "result-" + index)
    )
  ] });
};
function renderProperty(property, key) {
  let text = property.text.replace(/\n/g, "↵");
  if (property.type === "string")
    text = `"${text}"`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "call-line", children: [
    property.name,
    ":",
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: clsx("call-value", property.type), title: property.text, children: text }),
    ["string", "number", "object", "locator"].includes(property.type) && /* @__PURE__ */ jsxRuntimeExports.jsx(CopyToClipboard, { value: property.text })
  ] }, key);
}
function propertyToString(event, name, value, sdkLanguage) {
  const isEval = event.method.includes("eval") || event.method === "waitForFunction";
  if (name === "files")
    return { text: "<files>", type: "string", name };
  if (name === "eventInit" || name === "expectedValue" || name === "arg" && isEval)
    value = parseSerializedValue(value.value, new Array(10).fill({ handle: "<handle>" }));
  if (name === "value" && isEval || name === "received" && event.method === "expect")
    value = parseSerializedValue(value, new Array(10).fill({ handle: "<handle>" }));
  if (name === "selector")
    return { text: asLocator(sdkLanguage || "javascript", event.params.selector), type: "locator", name: "locator" };
  const type = typeof value;
  if (type !== "object" || value === null)
    return { text: String(value), type, name };
  if (value.guid)
    return { text: "<handle>", type: "handle", name };
  return { text: JSON.stringify(value).slice(0, 1e3), type: "object", name };
}
function parseSerializedValue(value, handles) {
  if (value.n !== void 0)
    return value.n;
  if (value.s !== void 0)
    return value.s;
  if (value.b !== void 0)
    return value.b;
  if (value.v !== void 0) {
    if (value.v === "undefined")
      return void 0;
    if (value.v === "null")
      return null;
    if (value.v === "NaN")
      return NaN;
    if (value.v === "Infinity")
      return Infinity;
    if (value.v === "-Infinity")
      return -Infinity;
    if (value.v === "-0")
      return -0;
  }
  if (value.d !== void 0)
    return new Date(value.d);
  if (value.r !== void 0)
    return new RegExp(value.r.p, value.r.f);
  if (value.a !== void 0)
    return value.a.map((a) => parseSerializedValue(a, handles));
  if (value.o !== void 0) {
    const result = {};
    for (const { k: k2, v: v2 } of value.o)
      result[k2] = parseSerializedValue(v2, handles);
    return result;
  }
  if (value.h !== void 0) {
    if (handles === void 0)
      return "<object>";
    return handles[value.h];
  }
  return "<object>";
}
const LogList = ListView;
const LogTab = ({ action, isLive }) => {
  const entries = reactExports.useMemo(() => {
    var _a;
    if (!action || !action.log.length)
      return [];
    const log = action.log;
    const wallTimeOffset = action.context.wallTime - action.context.startTime;
    const entries2 = [];
    for (let i = 0; i < log.length; ++i) {
      let time = "";
      if (log[i].time !== -1) {
        const timeStart = (_a = log[i]) == null ? void 0 : _a.time;
        if (i + 1 < log.length)
          time = msToString(log[i + 1].time - timeStart);
        else if (action.endTime > 0)
          time = msToString(action.endTime - timeStart);
        else if (isLive)
          time = msToString(Date.now() - wallTimeOffset - timeStart);
        else
          time = "-";
      }
      entries2.push({
        message: log[i].message,
        time
      });
    }
    return entries2;
  }, [action, isLive]);
  if (!entries.length)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PlaceholderPanel, { text: "No log entries" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    LogList,
    {
      name: "log",
      items: entries,
      render: (entry) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "log-list-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "log-list-duration", children: entry.time }),
        entry.message
      ] }),
      notSelectable: true
    }
  );
};
function ansi2html(text) {
  const regex = /(\x1b\[(\d+(;\d+)*)m)|([^\x1b]+)/g;
  const tokens = [];
  let match;
  let style = {};
  while ((match = regex.exec(text)) !== null) {
    const [, , codeStr, , text2] = match;
    if (codeStr) {
      const code = +codeStr;
      switch (code) {
        case 0:
          style = {};
          break;
        case 1:
          style["font-weight"] = "bold";
          break;
        case 3:
          style["font-style"] = "italic";
          break;
        case 4:
          style["text-decoration"] = "underline";
          break;
        case 8:
          style.display = "none";
          break;
        case 9:
          style["text-decoration"] = "line-through";
          break;
        case 22:
          style = { ...style, "font-weight": void 0, "font-style": void 0, "text-decoration": void 0 };
          break;
        case 23:
          style = { ...style, "font-weight": void 0, "font-style": void 0 };
          break;
        case 24:
          style = { ...style, "text-decoration": void 0 };
          break;
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
          style.color = ansiColors[code - 30];
          break;
        case 39:
          style = { ...style, color: void 0 };
          break;
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
          style["background-color"] = ansiColors[code - 40];
          break;
        case 49:
          style = { ...style, "background-color": void 0 };
          break;
        case 53:
          style["text-decoration"] = "overline";
          break;
        case 90:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 97:
          style.color = brightAnsiColors[code - 90];
          break;
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
          style["background-color"] = brightAnsiColors[code - 100];
          break;
      }
    } else if (text2) {
      tokens.push(`<span style="${styleBody(style)}">${escapeHTML(text2)}</span>`);
    }
  }
  return tokens.join("");
}
const ansiColors = {
  0: "var(--vscode-terminal-ansiBlack)",
  1: "var(--vscode-terminal-ansiRed)",
  2: "var(--vscode-terminal-ansiGreen)",
  3: "var(--vscode-terminal-ansiYellow)",
  4: "var(--vscode-terminal-ansiBlue)",
  5: "var(--vscode-terminal-ansiMagenta)",
  6: "var(--vscode-terminal-ansiCyan)",
  7: "var(--vscode-terminal-ansiWhite)"
};
const brightAnsiColors = {
  0: "var(--vscode-terminal-ansiBrightBlack)",
  1: "var(--vscode-terminal-ansiBrightRed)",
  2: "var(--vscode-terminal-ansiBrightGreen)",
  3: "var(--vscode-terminal-ansiBrightYellow)",
  4: "var(--vscode-terminal-ansiBrightBlue)",
  5: "var(--vscode-terminal-ansiBrightMagenta)",
  6: "var(--vscode-terminal-ansiBrightCyan)",
  7: "var(--vscode-terminal-ansiBrightWhite)"
};
function escapeHTML(text) {
  return text.replace(/[&"<>]/g, (c) => ({ "&": "&amp;", '"': "&quot;", "<": "&lt;", ">": "&gt;" })[c]);
}
function styleBody(style) {
  return Object.entries(style).map(([name, value]) => `${name}: ${value}`).join("; ");
}
const ErrorMessage = ({ error }) => {
  const html = reactExports.useMemo(() => ansi2html(error), [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "error-message", dangerouslySetInnerHTML: { __html: html || "" } });
};
function useErrorsTabModel(model) {
  return reactExports.useMemo(() => {
    if (!model)
      return { errors: /* @__PURE__ */ new Map() };
    const errors = /* @__PURE__ */ new Map();
    for (const error of model.errorDescriptors)
      errors.set(error.message, error);
    return { errors };
  }, [model]);
}
const ErrorsTab = ({ errorsModel, sdkLanguage, revealInSource }) => {
  if (!errorsModel.errors.size)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PlaceholderPanel, { text: "No errors" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fill", style: { overflow: "auto" }, children: [...errorsModel.errors.entries()].map(([message, error]) => {
    var _a;
    let location;
    let longLocation;
    const stackFrame = (_a = error.stack) == null ? void 0 : _a[0];
    if (stackFrame) {
      const file = stackFrame.file.replace(/.*[/\\](.*)/, "$1");
      location = file + ":" + stackFrame.line;
      longLocation = stackFrame.file + ":" + stackFrame.line;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hbox", style: {
        alignItems: "center",
        padding: "5px 10px",
        minHeight: 36,
        fontWeight: "bold",
        color: "var(--vscode-errorForeground)"
      }, children: [
        error.action && renderAction(error.action, { sdkLanguage }),
        location && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "action-location", children: [
          "@ ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: longLocation, onClick: () => revealInSource(error), children: location })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorMessage, { error: message })
    ] }, message);
  }) });
};
const ConsoleListView = ListView;
function useConsoleTabModel(model, selectedTime) {
  const { entries } = reactExports.useMemo(() => {
    if (!model)
      return { entries: [] };
    const entries2 = [];
    for (const event of model.events) {
      if (event.type === "console") {
        const body = event.args && event.args.length ? format(event.args) : formatAnsi(event.text);
        const url = event.location.url;
        const filename = url ? url.substring(url.lastIndexOf("/") + 1) : "<anonymous>";
        const location = `${filename}:${event.location.lineNumber}`;
        entries2.push({
          browserMessage: {
            body,
            location
          },
          isError: event.messageType === "error",
          isWarning: event.messageType === "warning",
          timestamp: event.time
        });
      }
      if (event.type === "event" && event.method === "pageError") {
        entries2.push({
          browserError: event.params.error,
          isError: true,
          isWarning: false,
          timestamp: event.time
        });
      }
    }
    for (const event of model.stdio) {
      let html = "";
      if (event.text)
        html = ansi2html(event.text.trim()) || "";
      if (event.base64)
        html = ansi2html(atob(event.base64).trim()) || "";
      entries2.push({
        nodeMessage: { html },
        isError: event.type === "stderr",
        isWarning: false,
        timestamp: event.timestamp
      });
    }
    entries2.sort((a, b) => a.timestamp - b.timestamp);
    return { entries: entries2 };
  }, [model]);
  const filteredEntries = reactExports.useMemo(() => {
    if (!selectedTime)
      return entries;
    return entries.filter((entry) => entry.timestamp >= selectedTime.minimum && entry.timestamp <= selectedTime.maximum);
  }, [entries, selectedTime]);
  return { entries: filteredEntries };
}
const ConsoleTab = ({ consoleModel, boundaries, onEntryHovered, onAccepted }) => {
  if (!consoleModel.entries.length)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PlaceholderPanel, { text: "No console entries" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "console-tab", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ConsoleListView,
    {
      name: "console",
      onAccepted,
      onHighlighted: onEntryHovered,
      items: consoleModel.entries,
      isError: (entry) => entry.isError,
      isWarning: (entry) => entry.isWarning,
      render: (entry) => {
        const timestamp = msToString(entry.timestamp - boundaries.minimum);
        const timestampElement = /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "console-time", children: timestamp });
        const errorSuffix = entry.isError ? "status-error" : entry.isWarning ? "status-warning" : "status-none";
        const statusElement = entry.browserMessage || entry.browserError ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: clsx("codicon", "codicon-browser", errorSuffix), title: "Browser message" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: clsx("codicon", "codicon-file", errorSuffix), title: "Runner message" });
        let locationText;
        let messageBody;
        let messageInnerHTML;
        let messageStack;
        const { browserMessage, browserError, nodeMessage } = entry;
        if (browserMessage) {
          locationText = browserMessage.location;
          messageBody = browserMessage.body;
        }
        if (browserError) {
          const { error: errorObject, value } = browserError;
          if (errorObject) {
            messageBody = errorObject.message;
            messageStack = errorObject.stack;
          } else {
            messageBody = String(value);
          }
        }
        if (nodeMessage)
          messageInnerHTML = nodeMessage.html;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "console-line", children: [
          timestampElement,
          statusElement,
          locationText && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "console-location", children: locationText }),
          messageBody && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "console-line-message", children: messageBody }),
          messageInnerHTML && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "console-line-message", dangerouslySetInnerHTML: { __html: messageInnerHTML } }),
          messageStack && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "console-stack", children: messageStack })
        ] });
      }
    }
  ) });
};
function format(args) {
  if (args.length === 1)
    return formatAnsi(args[0].preview);
  const hasMessageFormat = typeof args[0].value === "string" && args[0].value.includes("%");
  const messageFormat = hasMessageFormat ? args[0].value : "";
  const tail = hasMessageFormat ? args.slice(1) : args;
  let argIndex = 0;
  const regex = /%([%sdifoOc])/g;
  let match;
  const formatted = [];
  let tokens = [];
  formatted.push(/* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tokens }));
  let formatIndex = 0;
  while ((match = regex.exec(messageFormat)) !== null) {
    const text = messageFormat.substring(formatIndex, match.index);
    tokens.push(/* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: text }));
    formatIndex = match.index + 2;
    const specifier = match[0][1];
    if (specifier === "%") {
      tokens.push(/* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "%" }));
    } else if (specifier === "s" || specifier === "o" || specifier === "O" || specifier === "d" || specifier === "i" || specifier === "f") {
      const value = tail[argIndex++];
      const styleObject = {};
      if (typeof (value == null ? void 0 : value.value) !== "string")
        styleObject["color"] = "var(--vscode-debugTokenExpression-number)";
      tokens.push(/* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: styleObject, children: (value == null ? void 0 : value.preview) || "" }));
    } else if (specifier === "c") {
      tokens = [];
      const format2 = tail[argIndex++];
      const styleObject = format2 ? parseCSSStyle(format2.preview) : {};
      formatted.push(/* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: styleObject, children: tokens }));
    }
  }
  if (formatIndex < messageFormat.length)
    tokens.push(/* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: messageFormat.substring(formatIndex) }));
  for (; argIndex < tail.length; argIndex++) {
    const value = tail[argIndex];
    const styleObject = {};
    if (tokens.length)
      tokens.push(/* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: " " }));
    if (typeof (value == null ? void 0 : value.value) !== "string")
      styleObject["color"] = "var(--vscode-debugTokenExpression-number)";
    tokens.push(/* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: styleObject, children: (value == null ? void 0 : value.preview) || "" }));
  }
  return formatted;
}
function formatAnsi(text) {
  return [/* @__PURE__ */ jsxRuntimeExports.jsx("span", { dangerouslySetInnerHTML: { __html: ansi2html(text.trim()) } })];
}
function parseCSSStyle(cssFormat) {
  try {
    const styleObject = {};
    const cssProperties = cssFormat.split(";");
    for (const token of cssProperties) {
      const property = token.trim();
      if (!property)
        continue;
      let [key, value] = property.split(":");
      key = key.trim();
      value = value.trim();
      if (!supportProperty(key))
        continue;
      const cssKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      styleObject[cssKey] = value;
    }
    return styleObject;
  } catch (e) {
    return {};
  }
}
function supportProperty(cssKey) {
  const prefixes = ["background", "border", "color", "font", "line", "margin", "padding", "text"];
  return prefixes.some((p2) => cssKey.startsWith(p2));
}
const Toolbar = ({
  noShadow,
  children,
  noMinHeight,
  className,
  onClick
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: clsx("toolbar", noShadow && "no-shadow", noMinHeight && "no-min-height", className), onClick, children });
};
const TabbedPane = ({ tabs, selectedTab, setSelectedTab, leftToolbar, rightToolbar, dataTestId, mode }) => {
  if (!mode)
    mode = "default";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tabbed-pane", "data-testid": dataTestId, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "vbox", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Toolbar, { children: [
      leftToolbar && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: "none", display: "flex", margin: "0 4px", alignItems: "center" }, children: [
        ...leftToolbar
      ] }),
      mode === "default" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: "auto", display: "flex", height: "100%", overflow: "hidden" }, children: [
        ...tabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabbedPaneTab,
          {
            id: tab.id,
            title: tab.title,
            count: tab.count,
            errorCount: tab.errorCount,
            selected: selectedTab === tab.id,
            onSelect: setSelectedTab
          },
          tab.id
        ))
      ] }),
      mode === "select" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: "auto", display: "flex", height: "100%", overflow: "hidden" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { style: { width: "100%", background: "none", cursor: "pointer" }, onChange: (e) => {
        setSelectedTab(tabs[e.currentTarget.selectedIndex].id);
      }, children: tabs.map((tab) => {
        let suffix = "";
        if (tab.count)
          suffix = ` (${tab.count})`;
        if (tab.errorCount)
          suffix = ` (${tab.errorCount})`;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: tab.id, selected: tab.id === selectedTab, children: [
          tab.title,
          suffix
        ] }, tab.id);
      }) }) }),
      rightToolbar && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: "none", display: "flex", alignItems: "center" }, children: [
        ...rightToolbar
      ] })
    ] }),
    tabs.map((tab) => {
      const className = "tab-content tab-" + tab.id;
      if (tab.component)
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, style: { display: selectedTab === tab.id ? "inherit" : "none" }, children: tab.component }, tab.id);
      if (selectedTab === tab.id)
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, children: tab.render() }, tab.id);
    })
  ] }) });
};
const TabbedPaneTab = ({ id: id2, title, count, errorCount, selected, onSelect }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: clsx("tabbed-pane-tab", selected && "selected"),
      onClick: () => onSelect(id2),
      title,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tabbed-pane-tab-label", children: title }),
        !!count && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tabbed-pane-tab-counter", children: count }),
        !!errorCount && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tabbed-pane-tab-counter error", children: errorCount })
      ]
    },
    id2
  );
};
const scriptRel = "modulepreload";
const assetsURL = function(dep, importerUrl) {
  return new URL(dep, importerUrl).href;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    const links = document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = Promise.all(deps.map((dep) => {
      dep = assetsURL(dep, importerUrl);
      if (dep in seen)
        return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      const isBaseRelative = !!importerUrl;
      if (isBaseRelative) {
        for (let i = links.length - 1; i >= 0; i--) {
          const link2 = links[i];
          if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
            return;
          }
        }
      } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
        return;
      }
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) {
        link.as = "script";
        link.crossOrigin = "";
      }
      link.href = dep;
      if (cspNonce) {
        link.setAttribute("nonce", cspNonce);
      }
      document.head.appendChild(link);
      if (isCss) {
        return new Promise((res, rej) => {
          link.addEventListener("load", res);
          link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
        });
      }
    }));
  }
  return promise.then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", { cancelable: true });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  });
};
const CodeMirrorWrapper = ({
  text,
  language,
  mimeType,
  linkify,
  readOnly,
  highlight,
  revealLine,
  lineNumbers,
  isFocused,
  focusOnChange,
  wrapLines,
  onChange
}) => {
  const [measure, codemirrorElement] = useMeasure();
  const [modulePromise] = reactExports.useState(__vitePreload(() => import("./codeMirrorModule-Dx6AXgMV.js"), true ? __vite__mapDeps([0,1]) : void 0, import.meta.url).then((m2) => m2.default));
  const codemirrorRef = reactExports.useRef(null);
  const [codemirror, setCodemirror] = reactExports.useState();
  reactExports.useEffect(() => {
    (async () => {
      var _a, _b;
      const CodeMirror = await modulePromise;
      defineCustomMode(CodeMirror);
      const element = codemirrorElement.current;
      if (!element)
        return;
      const mode = languageToMode(language) || mimeTypeToMode(mimeType) || (linkify ? "text/linkified" : "");
      if (codemirrorRef.current && mode === codemirrorRef.current.cm.getOption("mode") && !!readOnly === codemirrorRef.current.cm.getOption("readOnly") && lineNumbers === codemirrorRef.current.cm.getOption("lineNumbers") && wrapLines === codemirrorRef.current.cm.getOption("lineWrapping")) {
        return;
      }
      (_b = (_a = codemirrorRef.current) == null ? void 0 : _a.cm) == null ? void 0 : _b.getWrapperElement().remove();
      const cm = CodeMirror(element, {
        value: "",
        mode,
        readOnly: !!readOnly,
        lineNumbers,
        lineWrapping: wrapLines
      });
      codemirrorRef.current = { cm };
      if (isFocused)
        cm.focus();
      setCodemirror(cm);
      return cm;
    })();
  }, [modulePromise, codemirror, codemirrorElement, language, mimeType, linkify, lineNumbers, wrapLines, readOnly, isFocused]);
  reactExports.useEffect(() => {
    if (codemirrorRef.current)
      codemirrorRef.current.cm.setSize(measure.width, measure.height);
  }, [measure]);
  reactExports.useLayoutEffect(() => {
    var _a;
    if (!codemirror)
      return;
    let valueChanged = false;
    if (codemirror.getValue() !== text) {
      codemirror.setValue(text);
      valueChanged = true;
      if (focusOnChange) {
        codemirror.execCommand("selectAll");
        codemirror.focus();
      }
    }
    if (valueChanged || JSON.stringify(highlight) !== JSON.stringify(codemirrorRef.current.highlight)) {
      for (const h of codemirrorRef.current.highlight || [])
        codemirror.removeLineClass(h.line - 1, "wrap");
      for (const h of highlight || [])
        codemirror.addLineClass(h.line - 1, "wrap", `source-line-${h.type}`);
      for (const w2 of codemirrorRef.current.widgets || [])
        codemirror.removeLineWidget(w2);
      const widgets = [];
      for (const h of highlight || []) {
        if (h.type !== "error")
          continue;
        const line = (_a = codemirrorRef.current) == null ? void 0 : _a.cm.getLine(h.line - 1);
        if (line) {
          const underlineWidgetElement = document.createElement("div");
          underlineWidgetElement.className = "source-line-error-underline";
          underlineWidgetElement.innerHTML = "&nbsp;".repeat(line.length || 1);
          widgets.push(codemirror.addLineWidget(h.line, underlineWidgetElement, { above: true, coverGutter: false }));
        }
        const errorWidgetElement = document.createElement("div");
        errorWidgetElement.innerHTML = ansi2html(h.message || "");
        errorWidgetElement.className = "source-line-error-widget";
        widgets.push(codemirror.addLineWidget(h.line, errorWidgetElement, { above: true, coverGutter: false }));
      }
      codemirrorRef.current.highlight = highlight;
      codemirrorRef.current.widgets = widgets;
    }
    if (typeof revealLine === "number" && codemirrorRef.current.cm.lineCount() >= revealLine)
      codemirror.scrollIntoView({ line: Math.max(0, revealLine - 1), ch: 0 }, 50);
    let changeListener;
    if (onChange) {
      changeListener = () => onChange(codemirror.getValue());
      codemirror.on("change", changeListener);
    }
    return () => {
      if (changeListener)
        codemirror.off("change", changeListener);
    };
  }, [codemirror, text, highlight, revealLine, focusOnChange, onChange]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "cm-wrapper", ref: codemirrorElement, onClick: onCodeMirrorClick });
};
function onCodeMirrorClick(event) {
  var _a;
  if (!(event.target instanceof HTMLElement))
    return;
  let url;
  if (event.target.classList.contains("cm-linkified")) {
    url = event.target.textContent;
  } else if (event.target.classList.contains("cm-link") && ((_a = event.target.nextElementSibling) == null ? void 0 : _a.classList.contains("cm-url"))) {
    url = event.target.nextElementSibling.textContent.slice(1, -1);
  }
  if (url) {
    event.preventDefault();
    event.stopPropagation();
    window.open(url, "_blank");
  }
}
let customModeDefined = false;
function defineCustomMode(cm) {
  if (customModeDefined)
    return;
  customModeDefined = true;
  cm.defineSimpleMode("text/linkified", {
    start: [
      { regex: kWebLinkRe, token: "linkified" }
    ]
  });
}
function mimeTypeToMode(mimeType) {
  if (!mimeType)
    return;
  if (mimeType.includes("javascript") || mimeType.includes("json"))
    return "javascript";
  if (mimeType.includes("python"))
    return "python";
  if (mimeType.includes("csharp"))
    return "text/x-csharp";
  if (mimeType.includes("java"))
    return "text/x-java";
  if (mimeType.includes("markdown"))
    return "markdown";
  if (mimeType.includes("html") || mimeType.includes("svg"))
    return "htmlmixed";
  if (mimeType.includes("css"))
    return "css";
}
function languageToMode(language) {
  if (!language)
    return;
  return {
    javascript: "javascript",
    jsonl: "javascript",
    python: "python",
    csharp: "text/x-csharp",
    java: "text/x-java",
    markdown: "markdown",
    html: "htmlmixed",
    css: "css"
  }[language];
}
const NetworkResourceDetails = ({ resource, onClose }) => {
  const [selectedTab, setSelectedTab] = reactExports.useState("request");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    TabbedPane,
    {
      dataTestId: "network-request-details",
      leftToolbar: [/* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "close", title: "Close", onClick: onClose }, "close")],
      tabs: [
        {
          id: "request",
          title: "Request",
          render: () => /* @__PURE__ */ jsxRuntimeExports.jsx(RequestTab, { resource })
        },
        {
          id: "response",
          title: "Response",
          render: () => /* @__PURE__ */ jsxRuntimeExports.jsx(ResponseTab, { resource })
        },
        {
          id: "body",
          title: "Body",
          render: () => /* @__PURE__ */ jsxRuntimeExports.jsx(BodyTab, { resource })
        }
      ],
      selectedTab,
      setSelectedTab
    }
  );
};
const RequestTab = ({ resource }) => {
  const [requestBody, setRequestBody] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const readResources = async () => {
      if (resource.request.postData) {
        const requestContentTypeHeader = resource.request.headers.find((q2) => q2.name.toLowerCase() === "content-type");
        const requestContentType = requestContentTypeHeader ? requestContentTypeHeader.value : "";
        if (resource.request.postData._sha1) {
          const response = await fetch(`sha1/${resource.request.postData._sha1}`);
          setRequestBody({ text: formatBody(await response.text(), requestContentType), mimeType: requestContentType });
        } else {
          setRequestBody({ text: formatBody(resource.request.postData.text, requestContentType), mimeType: requestContentType });
        }
      } else {
        setRequestBody(null);
      }
    };
    readResources();
  }, [resource]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "network-request-details-tab", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "network-request-details-header", children: "General" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "network-request-details-url", children: `URL: ${resource.request.url}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "network-request-details-general", children: `Method: ${resource.request.method}` }),
    resource.response.status !== -1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "network-request-details-general", style: { display: "flex" }, children: [
      "Status Code: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: statusClass(resource.response.status), style: { display: "inline-flex" }, children: `${resource.response.status} ${resource.response.statusText}` })
    ] }),
    resource.request.queryString.length ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "network-request-details-header", children: "Query String Parameters" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "network-request-details-headers", children: resource.request.queryString.map((param) => `${param.name}: ${param.value}`).join("\n") })
    ] }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "network-request-details-header", children: "Request Headers" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "network-request-details-headers", children: resource.request.headers.map((pair) => `${pair.name}: ${pair.value}`).join("\n") }),
    requestBody && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "network-request-details-header", children: "Request Body" }),
    requestBody && /* @__PURE__ */ jsxRuntimeExports.jsx(CodeMirrorWrapper, { text: requestBody.text, mimeType: requestBody.mimeType, readOnly: true, lineNumbers: true })
  ] });
};
const ResponseTab = ({ resource }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "network-request-details-tab", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "network-request-details-header", children: "Response Headers" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "network-request-details-headers", children: resource.response.headers.map((pair) => `${pair.name}: ${pair.value}`).join("\n") })
  ] });
};
const BodyTab = ({ resource }) => {
  const [responseBody, setResponseBody] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const readResources = async () => {
      if (resource.response.content._sha1) {
        const useBase64 = resource.response.content.mimeType.includes("image");
        const isFont = resource.response.content.mimeType.includes("font");
        const response = await fetch(`sha1/${resource.response.content._sha1}`);
        if (useBase64) {
          const blob = await response.blob();
          const reader = new FileReader();
          const eventPromise = new Promise((f2) => reader.onload = f2);
          reader.readAsDataURL(blob);
          setResponseBody({ dataUrl: (await eventPromise).target.result });
        } else if (isFont) {
          const font = await response.arrayBuffer();
          setResponseBody({ font });
        } else {
          const formattedBody = formatBody(await response.text(), resource.response.content.mimeType);
          setResponseBody({ text: formattedBody, mimeType: resource.response.content.mimeType });
        }
      } else {
        setResponseBody(null);
      }
    };
    readResources();
  }, [resource]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "network-request-details-tab", children: [
    !resource.response.content._sha1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Response body is not available for this request." }),
    responseBody && responseBody.font && /* @__PURE__ */ jsxRuntimeExports.jsx(FontPreview, { font: responseBody.font }),
    responseBody && responseBody.dataUrl && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { draggable: "false", src: responseBody.dataUrl }),
    responseBody && responseBody.text && /* @__PURE__ */ jsxRuntimeExports.jsx(CodeMirrorWrapper, { text: responseBody.text, mimeType: responseBody.mimeType, readOnly: true, lineNumbers: true })
  ] });
};
const FontPreview = ({ font }) => {
  const [isError, setIsError] = reactExports.useState(false);
  reactExports.useEffect(() => {
    let fontFace;
    try {
      fontFace = new FontFace("font-preview", font);
      if (fontFace.status === "loaded")
        document.fonts.add(fontFace);
      if (fontFace.status === "error")
        setIsError(true);
    } catch {
      setIsError(true);
    }
    return () => {
      document.fonts.delete(fontFace);
    };
  }, [font]);
  if (isError)
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "network-font-preview-error", children: "Could not load font preview" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "network-font-preview", children: [
    "ABCDEFGHIJKLM",
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    "NOPQRSTUVWXYZ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    "abcdefghijklm",
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    "nopqrstuvwxyz",
    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
    "1234567890"
  ] });
};
function statusClass(statusCode) {
  if (statusCode < 300 || statusCode === 304)
    return "green-circle";
  if (statusCode < 400)
    return "yellow-circle";
  return "red-circle";
}
function formatBody(body, contentType) {
  if (body === null)
    return "Loading...";
  const bodyStr = body;
  if (bodyStr === "")
    return "<Empty>";
  if (contentType.includes("application/json")) {
    try {
      return JSON.stringify(JSON.parse(bodyStr), null, 2);
    } catch (err) {
      return bodyStr;
    }
  }
  if (contentType.includes("application/x-www-form-urlencoded"))
    return decodeURIComponent(bodyStr);
  return bodyStr;
}
const GlassPane = ({ cursor, onPaneMouseMove, onPaneMouseUp, onPaneDoubleClick }) => {
  React.useEffect(() => {
    const glassPaneDiv = document.createElement("div");
    glassPaneDiv.style.position = "fixed";
    glassPaneDiv.style.top = "0";
    glassPaneDiv.style.right = "0";
    glassPaneDiv.style.bottom = "0";
    glassPaneDiv.style.left = "0";
    glassPaneDiv.style.zIndex = "9999";
    glassPaneDiv.style.cursor = cursor;
    document.body.appendChild(glassPaneDiv);
    if (onPaneMouseMove)
      glassPaneDiv.addEventListener("mousemove", onPaneMouseMove);
    if (onPaneMouseUp)
      glassPaneDiv.addEventListener("mouseup", onPaneMouseUp);
    if (onPaneDoubleClick)
      document.body.addEventListener("dblclick", onPaneDoubleClick);
    return () => {
      if (onPaneMouseMove)
        glassPaneDiv.removeEventListener("mousemove", onPaneMouseMove);
      if (onPaneMouseUp)
        glassPaneDiv.removeEventListener("mouseup", onPaneMouseUp);
      if (onPaneDoubleClick)
        document.body.removeEventListener("dblclick", onPaneDoubleClick);
      document.body.removeChild(glassPaneDiv);
    };
  }, [cursor, onPaneMouseMove, onPaneMouseUp, onPaneDoubleClick]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
};
const fillStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
const ResizeView = ({ orientation, offsets, setOffsets, resizerColor, resizerWidth, minColumnWidth }) => {
  const minGap = minColumnWidth || 0;
  const [resizing, setResizing] = React.useState(null);
  const [measure, ref] = useMeasure();
  const dividerStyle = {
    position: "absolute",
    right: orientation === "horizontal" ? void 0 : 0,
    bottom: orientation === "horizontal" ? 0 : void 0,
    width: orientation === "horizontal" ? 7 : void 0,
    height: orientation === "horizontal" ? void 0 : 7,
    borderTopWidth: orientation === "horizontal" ? void 0 : (7 - resizerWidth) / 2,
    borderRightWidth: orientation === "horizontal" ? (7 - resizerWidth) / 2 : void 0,
    borderBottomWidth: orientation === "horizontal" ? void 0 : (7 - resizerWidth) / 2,
    borderLeftWidth: orientation === "horizontal" ? (7 - resizerWidth) / 2 : void 0,
    borderColor: "transparent",
    borderStyle: "solid",
    cursor: orientation === "horizontal" ? "ew-resize" : "ns-resize"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      style: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: -(7 - resizerWidth) / 2,
        zIndex: 100,
        // Above the content, but below the film strip hover.
        pointerEvents: "none"
      },
      ref,
      children: [
        !!resizing && /* @__PURE__ */ jsxRuntimeExports.jsx(
          GlassPane,
          {
            cursor: orientation === "horizontal" ? "ew-resize" : "ns-resize",
            onPaneMouseUp: () => setResizing(null),
            onPaneMouseMove: (event) => {
              if (!event.buttons) {
                setResizing(null);
              } else if (resizing) {
                const delta = orientation === "horizontal" ? event.clientX - resizing.clientX : event.clientY - resizing.clientY;
                const newOffset = resizing.offset + delta;
                const previous = resizing.index > 0 ? offsets[resizing.index - 1] : 0;
                const next = orientation === "horizontal" ? measure.width : measure.height;
                const constrainedDelta = Math.min(Math.max(previous + minGap, newOffset), next - minGap) - offsets[resizing.index];
                for (let i = resizing.index; i < offsets.length; ++i)
                  offsets[i] = offsets[i] + constrainedDelta;
                setOffsets([...offsets]);
              }
            }
          }
        ),
        offsets.map((offset, index) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                ...dividerStyle,
                top: orientation === "horizontal" ? 0 : offset,
                left: orientation === "horizontal" ? offset : 0,
                pointerEvents: "initial"
              },
              onMouseDown: (event) => setResizing({ clientX: event.clientX, clientY: event.clientY, offset, index }),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
                ...fillStyle,
                background: resizerColor
              } })
            },
            index
          );
        })
      ]
    }
  );
};
function GridView(model) {
  const [offsets, setOffsets] = reactExports.useState([]);
  reactExports.useEffect(() => {
    const offsets2 = [];
    for (let i = 0; i < model.columns.length - 1; ++i) {
      const column = model.columns[i];
      offsets2[i] = (offsets2[i - 1] || 0) + model.columnWidths.get(column);
    }
    setOffsets(offsets2);
  }, [model.columns, model.columnWidths]);
  function updateColumnWidths(offsets2) {
    const widths = new Map(model.columnWidths.entries());
    for (let i = 0; i < offsets2.length; ++i) {
      const width = offsets2[i] - (offsets2[i - 1] || 0);
      const column = model.columns[i];
      widths.set(column, width);
    }
    model.setColumnWidths(widths);
  }
  const toggleSorting = reactExports.useCallback((f2) => {
    var _a, _b;
    (_b = model.setSorting) == null ? void 0 : _b.call(model, { by: f2, negate: ((_a = model.sorting) == null ? void 0 : _a.by) === f2 ? !model.sorting.negate : false });
  }, [model]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid-view ${model.name}-grid-view`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ResizeView,
      {
        orientation: "horizontal",
        offsets,
        setOffsets: updateColumnWidths,
        resizerColor: "var(--vscode-panel-border)",
        resizerWidth: 1,
        minColumnWidth: 25
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "vbox", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid-view-header", children: model.columns.map((column, i) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "grid-view-header-cell " + sortingHeader(column, model.sorting),
            style: {
              width: i < model.columns.length - 1 ? model.columnWidths.get(column) : void 0
            },
            onClick: () => model.setSorting && toggleSorting(column),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid-view-header-cell-title", children: model.columnTitle(column) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "codicon codicon-triangle-up" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "codicon codicon-triangle-down" })
            ]
          },
          model.columnTitle(column)
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ListView,
        {
          name: model.name,
          items: model.items,
          id: model.id,
          render: (item, index) => {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: model.columns.map((column, i) => {
              const { body, title } = model.render(item, column, index);
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `grid-view-cell grid-view-column-${String(column)}`,
                  title,
                  style: {
                    width: i < model.columns.length - 1 ? model.columnWidths.get(column) : void 0
                  },
                  children: body
                },
                model.columnTitle(column)
              );
            }) });
          },
          icon: model.icon,
          indent: model.indent,
          isError: model.isError,
          isWarning: model.isWarning,
          isInfo: model.isInfo,
          selectedItem: model.selectedItem,
          onAccepted: model.onAccepted,
          onSelected: model.onSelected,
          onLeftArrow: model.onLeftArrow,
          onRightArrow: model.onRightArrow,
          onHighlighted: model.onHighlighted,
          onIconClicked: model.onIconClicked,
          noItemsMessage: model.noItemsMessage,
          dataTestId: model.dataTestId,
          notSelectable: model.notSelectable
        }
      )
    ] })
  ] });
}
function sortingHeader(column, sorting) {
  return column === (sorting == null ? void 0 : sorting.by) ? " filter-" + (sorting.negate ? "negative" : "positive") : "";
}
const resourceTypes = ["All", "Fetch", "HTML", "JS", "CSS", "Font", "Image"];
const defaultFilterState = { searchValue: "", resourceType: "All" };
const NetworkFilters = ({ filterState, onFilterStateChange }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "network-filters", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "search",
        placeholder: "Filter network",
        spellCheck: false,
        value: filterState.searchValue,
        onChange: (e) => onFilterStateChange({ ...filterState, searchValue: e.target.value })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "network-filters-resource-types", children: resourceTypes.map((resourceType) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        title: resourceType,
        onClick: () => onFilterStateChange({ ...filterState, resourceType }),
        className: `network-filters-resource-type ${filterState.resourceType === resourceType ? "selected" : ""}`,
        children: resourceType
      },
      resourceType
    )) })
  ] });
};
const NetworkGridView = GridView;
function useNetworkTabModel(model, selectedTime) {
  const resources = reactExports.useMemo(() => {
    const resources2 = (model == null ? void 0 : model.resources) || [];
    const filtered = resources2.filter((resource) => {
      if (!selectedTime)
        return true;
      return !!resource._monotonicTime && (resource._monotonicTime >= selectedTime.minimum && resource._monotonicTime <= selectedTime.maximum);
    });
    return filtered;
  }, [model, selectedTime]);
  const contextIdMap = reactExports.useMemo(() => new ContextIdMap(model), [model]);
  return { resources, contextIdMap };
}
const NetworkTab = ({ boundaries, networkModel, onEntryHovered }) => {
  const [sorting, setSorting] = reactExports.useState(void 0);
  const [selectedEntry, setSelectedEntry] = reactExports.useState(void 0);
  const [filterState, setFilterState] = reactExports.useState(defaultFilterState);
  const { renderedEntries } = reactExports.useMemo(() => {
    const renderedEntries2 = networkModel.resources.map((entry) => renderEntry(entry, boundaries, networkModel.contextIdMap)).filter(filterEntry(filterState));
    if (sorting)
      sort(renderedEntries2, sorting);
    return { renderedEntries: renderedEntries2 };
  }, [networkModel.resources, networkModel.contextIdMap, filterState, sorting, boundaries]);
  const [columnWidths, setColumnWidths] = reactExports.useState(() => {
    return new Map(allColumns().map((column) => [column, columnWidth(column)]));
  });
  const onFilterStateChange = reactExports.useCallback((newFilterState) => {
    setFilterState(newFilterState);
    setSelectedEntry(void 0);
  }, []);
  if (!networkModel.resources.length)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PlaceholderPanel, { text: "No network calls" });
  const grid = /* @__PURE__ */ jsxRuntimeExports.jsx(
    NetworkGridView,
    {
      name: "network",
      items: renderedEntries,
      selectedItem: selectedEntry,
      onSelected: (item) => setSelectedEntry(item),
      onHighlighted: (item) => onEntryHovered(item == null ? void 0 : item.resource),
      columns: visibleColumns(!!selectedEntry, renderedEntries),
      columnTitle,
      columnWidths,
      setColumnWidths,
      isError: (item) => item.status.code >= 400 || item.status.code === -1,
      isInfo: (item) => !!item.route,
      render: (item, column) => renderCell(item, column),
      sorting,
      setSorting
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(NetworkFilters, { filterState, onFilterStateChange }),
    !selectedEntry && grid,
    selectedEntry && /* @__PURE__ */ jsxRuntimeExports.jsx(
      SplitView,
      {
        sidebarSize: columnWidths.get("name"),
        sidebarIsFirst: true,
        orientation: "horizontal",
        settingName: "networkResourceDetails",
        main: /* @__PURE__ */ jsxRuntimeExports.jsx(NetworkResourceDetails, { resource: selectedEntry.resource, onClose: () => setSelectedEntry(void 0) }),
        sidebar: grid
      }
    )
  ] });
};
const columnTitle = (column) => {
  if (column === "contextId")
    return "Source";
  if (column === "name")
    return "Name";
  if (column === "method")
    return "Method";
  if (column === "status")
    return "Status";
  if (column === "contentType")
    return "Content Type";
  if (column === "duration")
    return "Duration";
  if (column === "size")
    return "Size";
  if (column === "start")
    return "Start";
  if (column === "route")
    return "Route";
  return "";
};
const columnWidth = (column) => {
  if (column === "name")
    return 200;
  if (column === "method")
    return 60;
  if (column === "status")
    return 60;
  if (column === "contentType")
    return 200;
  if (column === "contextId")
    return 60;
  return 100;
};
function visibleColumns(entrySelected, renderedEntries) {
  if (entrySelected) {
    const columns2 = ["name"];
    if (hasMultipleContexts(renderedEntries))
      columns2.unshift("contextId");
    return columns2;
  }
  let columns = allColumns();
  if (!hasMultipleContexts(renderedEntries))
    columns = columns.filter((name) => name !== "contextId");
  return columns;
}
function allColumns() {
  return ["contextId", "name", "method", "status", "contentType", "duration", "size", "start", "route"];
}
const renderCell = (entry, column) => {
  if (column === "contextId") {
    return {
      body: entry.contextId,
      title: entry.name.url
    };
  }
  if (column === "name") {
    return {
      body: entry.name.name,
      title: entry.name.url
    };
  }
  if (column === "method")
    return { body: entry.method };
  if (column === "status") {
    return {
      body: entry.status.code > 0 ? entry.status.code : "",
      title: entry.status.text
    };
  }
  if (column === "contentType")
    return { body: entry.contentType };
  if (column === "duration")
    return { body: msToString(entry.duration) };
  if (column === "size")
    return { body: bytesToString(entry.size) };
  if (column === "start")
    return { body: msToString(entry.start) };
  if (column === "route")
    return { body: entry.route };
  return { body: "" };
};
class ContextIdMap {
  constructor(model) {
    __publicField(this, "_pagerefToShortId", /* @__PURE__ */ new Map());
    __publicField(this, "_contextToId", /* @__PURE__ */ new Map());
    __publicField(this, "_lastPageId", 0);
    __publicField(this, "_lastApiRequestContextId", 0);
  }
  contextId(resource) {
    if (resource.pageref)
      return this._pageId(resource.pageref);
    else if (resource._apiRequest)
      return this._apiRequestContextId(resource);
    return "";
  }
  _pageId(pageref) {
    let shortId = this._pagerefToShortId.get(pageref);
    if (!shortId) {
      ++this._lastPageId;
      shortId = "page#" + this._lastPageId;
      this._pagerefToShortId.set(pageref, shortId);
    }
    return shortId;
  }
  _apiRequestContextId(resource) {
    const contextEntry = context(resource);
    if (!contextEntry)
      return "";
    let contextId = this._contextToId.get(contextEntry);
    if (!contextId) {
      ++this._lastApiRequestContextId;
      contextId = "api#" + this._lastApiRequestContextId;
      this._contextToId.set(contextEntry, contextId);
    }
    return contextId;
  }
}
function hasMultipleContexts(renderedEntries) {
  const contextIds = /* @__PURE__ */ new Set();
  for (const entry of renderedEntries) {
    contextIds.add(entry.contextId);
    if (contextIds.size > 1)
      return true;
  }
  return false;
}
const renderEntry = (resource, boundaries, contextIdGenerator) => {
  const routeStatus = formatRouteStatus(resource);
  let resourceName;
  try {
    const url = new URL(resource.request.url);
    resourceName = url.pathname.substring(url.pathname.lastIndexOf("/") + 1);
    if (!resourceName)
      resourceName = url.host;
  } catch {
    resourceName = resource.request.url;
  }
  let contentType = resource.response.content.mimeType;
  const charset = contentType.match(/^(.*);\s*charset=.*$/);
  if (charset)
    contentType = charset[1];
  return {
    name: { name: resourceName, url: resource.request.url },
    method: resource.request.method,
    status: { code: resource.response.status, text: resource.response.statusText },
    contentType,
    duration: resource.time,
    size: resource.response._transferSize > 0 ? resource.response._transferSize : resource.response.bodySize,
    start: resource._monotonicTime - boundaries.minimum,
    route: routeStatus,
    resource,
    contextId: contextIdGenerator.contextId(resource)
  };
};
function formatRouteStatus(request) {
  if (request._wasAborted)
    return "aborted";
  if (request._wasContinued)
    return "continued";
  if (request._wasFulfilled)
    return "fulfilled";
  if (request._apiRequest)
    return "api";
  return "";
}
function sort(resources, sorting) {
  const c = comparator(sorting == null ? void 0 : sorting.by);
  if (c)
    resources.sort(c);
  if (sorting.negate)
    resources.reverse();
}
function comparator(sortBy) {
  if (sortBy === "start")
    return (a, b) => a.start - b.start;
  if (sortBy === "duration")
    return (a, b) => a.duration - b.duration;
  if (sortBy === "status")
    return (a, b) => a.status.code - b.status.code;
  if (sortBy === "method") {
    return (a, b) => {
      const valueA = a.method;
      const valueB = b.method;
      return valueA.localeCompare(valueB);
    };
  }
  if (sortBy === "size") {
    return (a, b) => {
      return a.size - b.size;
    };
  }
  if (sortBy === "contentType") {
    return (a, b) => {
      return a.contentType.localeCompare(b.contentType);
    };
  }
  if (sortBy === "name") {
    return (a, b) => {
      return a.name.name.localeCompare(b.name.name);
    };
  }
  if (sortBy === "route") {
    return (a, b) => {
      return a.route.localeCompare(b.route);
    };
  }
  if (sortBy === "contextId")
    return (a, b) => a.contextId.localeCompare(b.contextId);
}
const resourceTypePredicates = {
  "All": () => true,
  "Fetch": (contentType) => contentType === "application/json",
  "HTML": (contentType) => contentType === "text/html",
  "CSS": (contentType) => contentType === "text/css",
  "JS": (contentType) => contentType.includes("javascript"),
  "Font": (contentType) => contentType.includes("font"),
  "Image": (contentType) => contentType.includes("image")
};
function filterEntry({ searchValue, resourceType }) {
  return (entry) => {
    const typePredicate = resourceTypePredicates[resourceType];
    return typePredicate(entry.contentType) && entry.name.url.toLowerCase().includes(searchValue.toLowerCase());
  };
}
const XPathEngine = {
  queryAll(root, selector) {
    if (selector.startsWith("/") && root.nodeType !== Node.DOCUMENT_NODE)
      selector = "." + selector;
    const result = [];
    const document2 = root.ownerDocument || root;
    if (!document2)
      return result;
    const it = document2.evaluate(selector, root, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE);
    for (let node = it.iterateNext(); node; node = it.iterateNext()) {
      if (node.nodeType === Node.ELEMENT_NODE)
        result.push(node);
    }
    return result;
  }
};
let browserNameForWorkarounds = "";
function setBrowserName(name) {
  browserNameForWorkarounds = name;
}
function isInsideScope(scope, element) {
  while (element) {
    if (scope.contains(element))
      return true;
    element = enclosingShadowHost(element);
  }
  return false;
}
function parentElementOrShadowHost(element) {
  if (element.parentElement)
    return element.parentElement;
  if (!element.parentNode)
    return;
  if (element.parentNode.nodeType === 11 && element.parentNode.host)
    return element.parentNode.host;
}
function enclosingShadowRootOrDocument(element) {
  let node = element;
  while (node.parentNode)
    node = node.parentNode;
  if (node.nodeType === 11 || node.nodeType === 9)
    return node;
}
function enclosingShadowHost(element) {
  while (element.parentElement)
    element = element.parentElement;
  return parentElementOrShadowHost(element);
}
function closestCrossShadow(element, css, scope) {
  while (element) {
    const closest = element.closest(css);
    if (scope && closest !== scope && (closest == null ? void 0 : closest.contains(scope)))
      return;
    if (closest)
      return closest;
    element = enclosingShadowHost(element);
  }
}
function getElementComputedStyle(element, pseudo) {
  return element.ownerDocument && element.ownerDocument.defaultView ? element.ownerDocument.defaultView.getComputedStyle(element, pseudo) : void 0;
}
function isElementStyleVisibilityVisible(element, style) {
  style = style ?? getElementComputedStyle(element);
  if (!style)
    return true;
  if (Element.prototype.checkVisibility && browserNameForWorkarounds !== "webkit") {
    if (!element.checkVisibility())
      return false;
  } else {
    const detailsOrSummary = element.closest("details,summary");
    if (detailsOrSummary !== element && (detailsOrSummary == null ? void 0 : detailsOrSummary.nodeName) === "DETAILS" && !detailsOrSummary.open)
      return false;
  }
  if (style.visibility !== "visible")
    return false;
  return true;
}
function isElementVisible(element) {
  const style = getElementComputedStyle(element);
  if (!style)
    return true;
  if (style.display === "contents") {
    for (let child = element.firstChild; child; child = child.nextSibling) {
      if (child.nodeType === 1 && isElementVisible(child))
        return true;
      if (child.nodeType === 3 && isVisibleTextNode(child))
        return true;
    }
    return false;
  }
  if (!isElementStyleVisibilityVisible(element, style))
    return false;
  const rect = element.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}
function isVisibleTextNode(node) {
  const range = node.ownerDocument.createRange();
  range.selectNode(node);
  const rect = range.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}
function elementSafeTagName(element) {
  if (element instanceof HTMLFormElement)
    return "FORM";
  return element.tagName.toUpperCase();
}
function hasExplicitAccessibleName(e) {
  return e.hasAttribute("aria-label") || e.hasAttribute("aria-labelledby");
}
const kAncestorPreventingLandmark = "article:not([role]), aside:not([role]), main:not([role]), nav:not([role]), section:not([role]), [role=article], [role=complementary], [role=main], [role=navigation], [role=region]";
const kGlobalAriaAttributes = /* @__PURE__ */ new Map([
  ["aria-atomic", void 0],
  ["aria-busy", void 0],
  ["aria-controls", void 0],
  ["aria-current", void 0],
  ["aria-describedby", void 0],
  ["aria-details", void 0],
  // Global use deprecated in ARIA 1.2
  // ['aria-disabled', undefined],
  ["aria-dropeffect", void 0],
  // Global use deprecated in ARIA 1.2
  // ['aria-errormessage', undefined],
  ["aria-flowto", void 0],
  ["aria-grabbed", void 0],
  // Global use deprecated in ARIA 1.2
  // ['aria-haspopup', undefined],
  ["aria-hidden", void 0],
  // Global use deprecated in ARIA 1.2
  // ['aria-invalid', undefined],
  ["aria-keyshortcuts", void 0],
  ["aria-label", /* @__PURE__ */ new Set(["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"])],
  ["aria-labelledby", /* @__PURE__ */ new Set(["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"])],
  ["aria-live", void 0],
  ["aria-owns", void 0],
  ["aria-relevant", void 0],
  ["aria-roledescription", /* @__PURE__ */ new Set(["generic"])]
]);
function hasGlobalAriaAttribute(element, forRole) {
  return [...kGlobalAriaAttributes].some(([attr, prohibited]) => {
    return !(prohibited == null ? void 0 : prohibited.has(forRole || "")) && element.hasAttribute(attr);
  });
}
function hasTabIndex(element) {
  return !Number.isNaN(Number(String(element.getAttribute("tabindex"))));
}
function isFocusable(element) {
  return !isNativelyDisabled(element) && (isNativelyFocusable(element) || hasTabIndex(element));
}
function isNativelyFocusable(element) {
  const tagName = elementSafeTagName(element);
  if (["BUTTON", "DETAILS", "SELECT", "TEXTAREA"].includes(tagName))
    return true;
  if (tagName === "A" || tagName === "AREA")
    return element.hasAttribute("href");
  if (tagName === "INPUT")
    return !element.hidden;
  return false;
}
const kImplicitRoleByTagName = {
  "A": (e) => {
    return e.hasAttribute("href") ? "link" : null;
  },
  "AREA": (e) => {
    return e.hasAttribute("href") ? "link" : null;
  },
  "ARTICLE": () => "article",
  "ASIDE": () => "complementary",
  "BLOCKQUOTE": () => "blockquote",
  "BUTTON": () => "button",
  "CAPTION": () => "caption",
  "CODE": () => "code",
  "DATALIST": () => "listbox",
  "DD": () => "definition",
  "DEL": () => "deletion",
  "DETAILS": () => "group",
  "DFN": () => "term",
  "DIALOG": () => "dialog",
  "DT": () => "term",
  "EM": () => "emphasis",
  "FIELDSET": () => "group",
  "FIGURE": () => "figure",
  "FOOTER": (e) => closestCrossShadow(e, kAncestorPreventingLandmark) ? null : "contentinfo",
  "FORM": (e) => hasExplicitAccessibleName(e) ? "form" : null,
  "H1": () => "heading",
  "H2": () => "heading",
  "H3": () => "heading",
  "H4": () => "heading",
  "H5": () => "heading",
  "H6": () => "heading",
  "HEADER": (e) => closestCrossShadow(e, kAncestorPreventingLandmark) ? null : "banner",
  "HR": () => "separator",
  "HTML": () => "document",
  "IMG": (e) => e.getAttribute("alt") === "" && !e.getAttribute("title") && !hasGlobalAriaAttribute(e) && !hasTabIndex(e) ? "presentation" : "img",
  "INPUT": (e) => {
    const type = e.type.toLowerCase();
    if (type === "search")
      return e.hasAttribute("list") ? "combobox" : "searchbox";
    if (["email", "tel", "text", "url", ""].includes(type)) {
      const list = getIdRefs(e, e.getAttribute("list"))[0];
      return list && elementSafeTagName(list) === "DATALIST" ? "combobox" : "textbox";
    }
    if (type === "hidden")
      return "";
    return {
      "button": "button",
      "checkbox": "checkbox",
      "image": "button",
      "number": "spinbutton",
      "radio": "radio",
      "range": "slider",
      "reset": "button",
      "submit": "button"
    }[type] || "textbox";
  },
  "INS": () => "insertion",
  "LI": () => "listitem",
  "MAIN": () => "main",
  "MARK": () => "mark",
  "MATH": () => "math",
  "MENU": () => "list",
  "METER": () => "meter",
  "NAV": () => "navigation",
  "OL": () => "list",
  "OPTGROUP": () => "group",
  "OPTION": () => "option",
  "OUTPUT": () => "status",
  "P": () => "paragraph",
  "PROGRESS": () => "progressbar",
  "SECTION": (e) => hasExplicitAccessibleName(e) ? "region" : null,
  "SELECT": (e) => e.hasAttribute("multiple") || e.size > 1 ? "listbox" : "combobox",
  "STRONG": () => "strong",
  "SUB": () => "subscript",
  "SUP": () => "superscript",
  // For <svg> we default to Chrome behavior:
  // - Chrome reports 'img'.
  // - Firefox reports 'diagram' that is not in official ARIA spec yet.
  // - Safari reports 'no role', but still computes accessible name.
  "SVG": () => "img",
  "TABLE": () => "table",
  "TBODY": () => "rowgroup",
  "TD": (e) => {
    const table = closestCrossShadow(e, "table");
    const role = table ? getExplicitAriaRole(table) : "";
    return role === "grid" || role === "treegrid" ? "gridcell" : "cell";
  },
  "TEXTAREA": () => "textbox",
  "TFOOT": () => "rowgroup",
  "TH": (e) => {
    if (e.getAttribute("scope") === "col")
      return "columnheader";
    if (e.getAttribute("scope") === "row")
      return "rowheader";
    const table = closestCrossShadow(e, "table");
    const role = table ? getExplicitAriaRole(table) : "";
    return role === "grid" || role === "treegrid" ? "gridcell" : "cell";
  },
  "THEAD": () => "rowgroup",
  "TIME": () => "time",
  "TR": () => "row",
  "UL": () => "list"
};
const kPresentationInheritanceParents = {
  "DD": ["DL", "DIV"],
  "DIV": ["DL"],
  "DT": ["DL", "DIV"],
  "LI": ["OL", "UL"],
  "TBODY": ["TABLE"],
  "TD": ["TR"],
  "TFOOT": ["TABLE"],
  "TH": ["TR"],
  "THEAD": ["TABLE"],
  "TR": ["THEAD", "TBODY", "TFOOT", "TABLE"]
};
function getImplicitAriaRole(element) {
  var _a;
  const implicitRole = ((_a = kImplicitRoleByTagName[elementSafeTagName(element)]) == null ? void 0 : _a.call(kImplicitRoleByTagName, element)) || "";
  if (!implicitRole)
    return null;
  let ancestor = element;
  while (ancestor) {
    const parent = parentElementOrShadowHost(ancestor);
    const parents = kPresentationInheritanceParents[elementSafeTagName(ancestor)];
    if (!parents || !parent || !parents.includes(elementSafeTagName(parent)))
      break;
    const parentExplicitRole = getExplicitAriaRole(parent);
    if ((parentExplicitRole === "none" || parentExplicitRole === "presentation") && !hasPresentationConflictResolution(parent, parentExplicitRole))
      return parentExplicitRole;
    ancestor = parent;
  }
  return implicitRole;
}
const allRoles = [
  "alert",
  "alertdialog",
  "application",
  "article",
  "banner",
  "blockquote",
  "button",
  "caption",
  "cell",
  "checkbox",
  "code",
  "columnheader",
  "combobox",
  "command",
  "complementary",
  "composite",
  "contentinfo",
  "definition",
  "deletion",
  "dialog",
  "directory",
  "document",
  "emphasis",
  "feed",
  "figure",
  "form",
  "generic",
  "grid",
  "gridcell",
  "group",
  "heading",
  "img",
  "input",
  "insertion",
  "landmark",
  "link",
  "list",
  "listbox",
  "listitem",
  "log",
  "main",
  "marquee",
  "math",
  "meter",
  "menu",
  "menubar",
  "menuitem",
  "menuitemcheckbox",
  "menuitemradio",
  "navigation",
  "none",
  "note",
  "option",
  "paragraph",
  "presentation",
  "progressbar",
  "radio",
  "radiogroup",
  "range",
  "region",
  "roletype",
  "row",
  "rowgroup",
  "rowheader",
  "scrollbar",
  "search",
  "searchbox",
  "section",
  "sectionhead",
  "select",
  "separator",
  "slider",
  "spinbutton",
  "status",
  "strong",
  "structure",
  "subscript",
  "superscript",
  "switch",
  "tab",
  "table",
  "tablist",
  "tabpanel",
  "term",
  "textbox",
  "time",
  "timer",
  "toolbar",
  "tooltip",
  "tree",
  "treegrid",
  "treeitem",
  "widget",
  "window"
];
const abstractRoles = ["command", "composite", "input", "landmark", "range", "roletype", "section", "sectionhead", "select", "structure", "widget", "window"];
const validRoles = allRoles.filter((role) => !abstractRoles.includes(role));
function getExplicitAriaRole(element) {
  const roles = (element.getAttribute("role") || "").split(" ").map((role) => role.trim());
  return roles.find((role) => validRoles.includes(role)) || null;
}
function hasPresentationConflictResolution(element, role) {
  return hasGlobalAriaAttribute(element, role) || isFocusable(element);
}
function getAriaRole(element) {
  const explicitRole = getExplicitAriaRole(element);
  if (!explicitRole)
    return getImplicitAriaRole(element);
  if (explicitRole === "none" || explicitRole === "presentation") {
    const implicitRole = getImplicitAriaRole(element);
    if (hasPresentationConflictResolution(element, implicitRole))
      return implicitRole;
  }
  return explicitRole;
}
function getAriaBoolean(attr) {
  return attr === null ? void 0 : attr.toLowerCase() === "true";
}
function isElementIgnoredForAria(element) {
  return ["STYLE", "SCRIPT", "NOSCRIPT", "TEMPLATE"].includes(elementSafeTagName(element));
}
function isElementHiddenForAria(element) {
  if (isElementIgnoredForAria(element))
    return true;
  const style = getElementComputedStyle(element);
  const isSlot = element.nodeName === "SLOT";
  if ((style == null ? void 0 : style.display) === "contents" && !isSlot) {
    for (let child = element.firstChild; child; child = child.nextSibling) {
      if (child.nodeType === 1 && !isElementHiddenForAria(child))
        return false;
      if (child.nodeType === 3 && isVisibleTextNode(child))
        return false;
    }
    return true;
  }
  const isOptionInsideSelect = element.nodeName === "OPTION" && !!element.closest("select");
  if (!isOptionInsideSelect && !isSlot && !isElementStyleVisibilityVisible(element, style))
    return true;
  return belongsToDisplayNoneOrAriaHiddenOrNonSlotted(element);
}
function belongsToDisplayNoneOrAriaHiddenOrNonSlotted(element) {
  let hidden = cacheIsHidden == null ? void 0 : cacheIsHidden.get(element);
  if (hidden === void 0) {
    hidden = false;
    if (element.parentElement && element.parentElement.shadowRoot && !element.assignedSlot)
      hidden = true;
    if (!hidden) {
      const style = getElementComputedStyle(element);
      hidden = !style || style.display === "none" || getAriaBoolean(element.getAttribute("aria-hidden")) === true;
    }
    if (!hidden) {
      const parent = parentElementOrShadowHost(element);
      if (parent)
        hidden = belongsToDisplayNoneOrAriaHiddenOrNonSlotted(parent);
    }
    cacheIsHidden == null ? void 0 : cacheIsHidden.set(element, hidden);
  }
  return hidden;
}
function getIdRefs(element, ref) {
  if (!ref)
    return [];
  const root = enclosingShadowRootOrDocument(element);
  if (!root)
    return [];
  try {
    const ids = ref.split(" ").filter((id2) => !!id2);
    const set = /* @__PURE__ */ new Set();
    for (const id2 of ids) {
      const firstElement = root.querySelector("#" + CSS.escape(id2));
      if (firstElement)
        set.add(firstElement);
    }
    return [...set];
  } catch (e) {
    return [];
  }
}
function trimFlatString(s) {
  return s.trim();
}
function asFlatString(s) {
  return s.split(" ").map((chunk) => chunk.replace(/\r\n/g, "\n").replace(/\s\s*/g, " ")).join(" ").trim();
}
function queryInAriaOwned(element, selector) {
  const result = [...element.querySelectorAll(selector)];
  for (const owned of getIdRefs(element, element.getAttribute("aria-owns"))) {
    if (owned.matches(selector))
      result.push(owned);
    result.push(...owned.querySelectorAll(selector));
  }
  return result;
}
function getPseudoContent(element, pseudo) {
  const cache = pseudo === "::before" ? cachePseudoContentBefore : cachePseudoContentAfter;
  if (cache == null ? void 0 : cache.has(element))
    return (cache == null ? void 0 : cache.get(element)) || "";
  const pseudoStyle = getElementComputedStyle(element, pseudo);
  const content = getPseudoContentImpl(pseudoStyle);
  if (cache)
    cache.set(element, content);
  return content;
}
function getPseudoContentImpl(pseudoStyle) {
  if (!pseudoStyle || pseudoStyle.display === "none" || pseudoStyle.visibility === "hidden")
    return "";
  const content = pseudoStyle.content;
  if (content[0] === "'" && content[content.length - 1] === "'" || content[0] === '"' && content[content.length - 1] === '"') {
    const unquoted = content.substring(1, content.length - 1);
    const display = pseudoStyle.display || "inline";
    if (display !== "inline")
      return " " + unquoted + " ";
    return unquoted;
  }
  return "";
}
function getAriaLabelledByElements(element) {
  const ref = element.getAttribute("aria-labelledby");
  if (ref === null)
    return null;
  return getIdRefs(element, ref);
}
function allowsNameFromContent(role, targetDescendant) {
  const alwaysAllowsNameFromContent = ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"].includes(role);
  const descendantAllowsNameFromContent = targetDescendant && ["", "caption", "code", "contentinfo", "definition", "deletion", "emphasis", "insertion", "list", "listitem", "mark", "none", "paragraph", "presentation", "region", "row", "rowgroup", "section", "strong", "subscript", "superscript", "table", "term", "time"].includes(role);
  return alwaysAllowsNameFromContent || descendantAllowsNameFromContent;
}
function getElementAccessibleName(element, includeHidden) {
  const cache = includeHidden ? cacheAccessibleNameHidden : cacheAccessibleName;
  let accessibleName = cache == null ? void 0 : cache.get(element);
  if (accessibleName === void 0) {
    accessibleName = "";
    const elementProhibitsNaming = ["caption", "code", "definition", "deletion", "emphasis", "generic", "insertion", "mark", "paragraph", "presentation", "strong", "subscript", "suggestion", "superscript", "term", "time"].includes(getAriaRole(element) || "");
    if (!elementProhibitsNaming) {
      accessibleName = asFlatString(getTextAlternativeInternal(element, {
        includeHidden,
        visitedElements: /* @__PURE__ */ new Set(),
        embeddedInDescribedBy: void 0,
        embeddedInLabelledBy: void 0,
        embeddedInLabel: void 0,
        embeddedInNativeTextAlternative: void 0,
        embeddedInTargetElement: "self"
      }));
    }
    cache == null ? void 0 : cache.set(element, accessibleName);
  }
  return accessibleName;
}
function getElementAccessibleDescription(element, includeHidden) {
  const cache = includeHidden ? cacheAccessibleDescriptionHidden : cacheAccessibleDescription;
  let accessibleDescription = cache == null ? void 0 : cache.get(element);
  if (accessibleDescription === void 0) {
    accessibleDescription = "";
    if (element.hasAttribute("aria-describedby")) {
      const describedBy = getIdRefs(element, element.getAttribute("aria-describedby"));
      accessibleDescription = asFlatString(describedBy.map((ref) => getTextAlternativeInternal(ref, {
        includeHidden,
        visitedElements: /* @__PURE__ */ new Set(),
        embeddedInLabelledBy: void 0,
        embeddedInLabel: void 0,
        embeddedInNativeTextAlternative: void 0,
        embeddedInTargetElement: "none",
        embeddedInDescribedBy: { element: ref, hidden: isElementHiddenForAria(ref) }
      })).join(" "));
    } else if (element.hasAttribute("aria-description")) {
      accessibleDescription = asFlatString(element.getAttribute("aria-description") || "");
    } else {
      accessibleDescription = asFlatString(element.getAttribute("title") || "");
    }
    cache == null ? void 0 : cache.set(element, accessibleDescription);
  }
  return accessibleDescription;
}
function getTextAlternativeInternal(element, options) {
  var _a, _b, _c, _d;
  if (options.visitedElements.has(element))
    return "";
  const childOptions = {
    ...options,
    embeddedInTargetElement: options.embeddedInTargetElement === "self" ? "descendant" : options.embeddedInTargetElement
  };
  if (!options.includeHidden) {
    const isEmbeddedInHiddenReferenceTraversal = !!((_a = options.embeddedInLabelledBy) == null ? void 0 : _a.hidden) || !!((_b = options.embeddedInDescribedBy) == null ? void 0 : _b.hidden) || !!((_c = options.embeddedInNativeTextAlternative) == null ? void 0 : _c.hidden) || !!((_d = options.embeddedInLabel) == null ? void 0 : _d.hidden);
    if (isElementIgnoredForAria(element) || !isEmbeddedInHiddenReferenceTraversal && isElementHiddenForAria(element)) {
      options.visitedElements.add(element);
      return "";
    }
  }
  const labelledBy = getAriaLabelledByElements(element);
  if (!options.embeddedInLabelledBy) {
    const accessibleName = (labelledBy || []).map((ref) => getTextAlternativeInternal(ref, {
      ...options,
      embeddedInLabelledBy: { element: ref, hidden: isElementHiddenForAria(ref) },
      embeddedInDescribedBy: void 0,
      embeddedInTargetElement: "none",
      embeddedInLabel: void 0,
      embeddedInNativeTextAlternative: void 0
    })).join(" ");
    if (accessibleName)
      return accessibleName;
  }
  const role = getAriaRole(element) || "";
  const tagName = elementSafeTagName(element);
  if (!!options.embeddedInLabel || !!options.embeddedInLabelledBy || options.embeddedInTargetElement === "descendant") {
    const isOwnLabel = [...element.labels || []].includes(element);
    const isOwnLabelledBy = (labelledBy || []).includes(element);
    if (!isOwnLabel && !isOwnLabelledBy) {
      if (role === "textbox") {
        options.visitedElements.add(element);
        if (tagName === "INPUT" || tagName === "TEXTAREA")
          return element.value;
        return element.textContent || "";
      }
      if (["combobox", "listbox"].includes(role)) {
        options.visitedElements.add(element);
        let selectedOptions;
        if (tagName === "SELECT") {
          selectedOptions = [...element.selectedOptions];
          if (!selectedOptions.length && element.options.length)
            selectedOptions.push(element.options[0]);
        } else {
          const listbox = role === "combobox" ? queryInAriaOwned(element, "*").find((e) => getAriaRole(e) === "listbox") : element;
          selectedOptions = listbox ? queryInAriaOwned(listbox, '[aria-selected="true"]').filter((e) => getAriaRole(e) === "option") : [];
        }
        if (!selectedOptions.length && tagName === "INPUT") {
          return element.value;
        }
        return selectedOptions.map((option) => getTextAlternativeInternal(option, childOptions)).join(" ");
      }
      if (["progressbar", "scrollbar", "slider", "spinbutton", "meter"].includes(role)) {
        options.visitedElements.add(element);
        if (element.hasAttribute("aria-valuetext"))
          return element.getAttribute("aria-valuetext") || "";
        if (element.hasAttribute("aria-valuenow"))
          return element.getAttribute("aria-valuenow") || "";
        return element.getAttribute("value") || "";
      }
      if (["menu"].includes(role)) {
        options.visitedElements.add(element);
        return "";
      }
    }
  }
  const ariaLabel = element.getAttribute("aria-label") || "";
  if (trimFlatString(ariaLabel)) {
    options.visitedElements.add(element);
    return ariaLabel;
  }
  if (!["presentation", "none"].includes(role)) {
    if (tagName === "INPUT" && ["button", "submit", "reset"].includes(element.type)) {
      options.visitedElements.add(element);
      const value = element.value || "";
      if (trimFlatString(value))
        return value;
      if (element.type === "submit")
        return "Submit";
      if (element.type === "reset")
        return "Reset";
      const title = element.getAttribute("title") || "";
      return title;
    }
    if (tagName === "INPUT" && element.type === "image") {
      options.visitedElements.add(element);
      const labels = element.labels || [];
      if (labels.length && !options.embeddedInLabelledBy)
        return getAccessibleNameFromAssociatedLabels(labels, options);
      const alt = element.getAttribute("alt") || "";
      if (trimFlatString(alt))
        return alt;
      const title = element.getAttribute("title") || "";
      if (trimFlatString(title))
        return title;
      return "Submit";
    }
    if (!labelledBy && tagName === "BUTTON") {
      options.visitedElements.add(element);
      const labels = element.labels || [];
      if (labels.length)
        return getAccessibleNameFromAssociatedLabels(labels, options);
    }
    if (!labelledBy && tagName === "OUTPUT") {
      options.visitedElements.add(element);
      const labels = element.labels || [];
      if (labels.length)
        return getAccessibleNameFromAssociatedLabels(labels, options);
      return element.getAttribute("title") || "";
    }
    if (!labelledBy && (tagName === "TEXTAREA" || tagName === "SELECT" || tagName === "INPUT")) {
      options.visitedElements.add(element);
      const labels = element.labels || [];
      if (labels.length)
        return getAccessibleNameFromAssociatedLabels(labels, options);
      const usePlaceholder = tagName === "INPUT" && ["text", "password", "search", "tel", "email", "url"].includes(element.type) || tagName === "TEXTAREA";
      const placeholder = element.getAttribute("placeholder") || "";
      const title = element.getAttribute("title") || "";
      if (!usePlaceholder || title)
        return title;
      return placeholder;
    }
    if (!labelledBy && tagName === "FIELDSET") {
      options.visitedElements.add(element);
      for (let child = element.firstElementChild; child; child = child.nextElementSibling) {
        if (elementSafeTagName(child) === "LEGEND") {
          return getTextAlternativeInternal(child, {
            ...childOptions,
            embeddedInNativeTextAlternative: { element: child, hidden: isElementHiddenForAria(child) }
          });
        }
      }
      const title = element.getAttribute("title") || "";
      return title;
    }
    if (!labelledBy && tagName === "FIGURE") {
      options.visitedElements.add(element);
      for (let child = element.firstElementChild; child; child = child.nextElementSibling) {
        if (elementSafeTagName(child) === "FIGCAPTION") {
          return getTextAlternativeInternal(child, {
            ...childOptions,
            embeddedInNativeTextAlternative: { element: child, hidden: isElementHiddenForAria(child) }
          });
        }
      }
      const title = element.getAttribute("title") || "";
      return title;
    }
    if (tagName === "IMG") {
      options.visitedElements.add(element);
      const alt = element.getAttribute("alt") || "";
      if (trimFlatString(alt))
        return alt;
      const title = element.getAttribute("title") || "";
      return title;
    }
    if (tagName === "TABLE") {
      options.visitedElements.add(element);
      for (let child = element.firstElementChild; child; child = child.nextElementSibling) {
        if (elementSafeTagName(child) === "CAPTION") {
          return getTextAlternativeInternal(child, {
            ...childOptions,
            embeddedInNativeTextAlternative: { element: child, hidden: isElementHiddenForAria(child) }
          });
        }
      }
      const summary = element.getAttribute("summary") || "";
      if (summary)
        return summary;
    }
    if (tagName === "AREA") {
      options.visitedElements.add(element);
      const alt = element.getAttribute("alt") || "";
      if (trimFlatString(alt))
        return alt;
      const title = element.getAttribute("title") || "";
      return title;
    }
    if (tagName === "SVG" || element.ownerSVGElement) {
      options.visitedElements.add(element);
      for (let child = element.firstElementChild; child; child = child.nextElementSibling) {
        if (elementSafeTagName(child) === "TITLE" && child.ownerSVGElement) {
          return getTextAlternativeInternal(child, {
            ...childOptions,
            embeddedInLabelledBy: { element: child, hidden: isElementHiddenForAria(child) }
          });
        }
      }
    }
    if (element.ownerSVGElement && tagName === "A") {
      const title = element.getAttribute("xlink:title") || "";
      if (trimFlatString(title)) {
        options.visitedElements.add(element);
        return title;
      }
    }
  }
  const shouldNameFromContentForSummary = tagName === "SUMMARY" && !["presentation", "none"].includes(role);
  if (allowsNameFromContent(role, options.embeddedInTargetElement === "descendant") || shouldNameFromContentForSummary || !!options.embeddedInLabelledBy || !!options.embeddedInDescribedBy || !!options.embeddedInLabel || !!options.embeddedInNativeTextAlternative) {
    options.visitedElements.add(element);
    const tokens = [];
    const visit = (node, skipSlotted) => {
      var _a2;
      if (skipSlotted && node.assignedSlot)
        return;
      if (node.nodeType === 1) {
        const display = ((_a2 = getElementComputedStyle(node)) == null ? void 0 : _a2.display) || "inline";
        let token = getTextAlternativeInternal(node, childOptions);
        if (display !== "inline" || node.nodeName === "BR")
          token = " " + token + " ";
        tokens.push(token);
      } else if (node.nodeType === 3) {
        tokens.push(node.textContent || "");
      }
    };
    tokens.push(getPseudoContent(element, "::before"));
    const assignedNodes = element.nodeName === "SLOT" ? element.assignedNodes() : [];
    if (assignedNodes.length) {
      for (const child of assignedNodes)
        visit(child, false);
    } else {
      for (let child = element.firstChild; child; child = child.nextSibling)
        visit(child, true);
      if (element.shadowRoot) {
        for (let child = element.shadowRoot.firstChild; child; child = child.nextSibling)
          visit(child, true);
      }
      for (const owned of getIdRefs(element, element.getAttribute("aria-owns")))
        visit(owned, true);
    }
    tokens.push(getPseudoContent(element, "::after"));
    const accessibleName = tokens.join("");
    const maybeTrimmedAccessibleName = options.embeddedInTargetElement === "self" ? trimFlatString(accessibleName) : accessibleName;
    if (maybeTrimmedAccessibleName)
      return accessibleName;
  }
  if (!["presentation", "none"].includes(role) || tagName === "IFRAME") {
    options.visitedElements.add(element);
    const title = element.getAttribute("title") || "";
    if (trimFlatString(title))
      return title;
  }
  options.visitedElements.add(element);
  return "";
}
const kAriaSelectedRoles = ["gridcell", "option", "row", "tab", "rowheader", "columnheader", "treeitem"];
function getAriaSelected(element) {
  if (elementSafeTagName(element) === "OPTION")
    return element.selected;
  if (kAriaSelectedRoles.includes(getAriaRole(element) || ""))
    return getAriaBoolean(element.getAttribute("aria-selected")) === true;
  return false;
}
const kAriaCheckedRoles = ["checkbox", "menuitemcheckbox", "option", "radio", "switch", "menuitemradio", "treeitem"];
function getAriaChecked(element) {
  const result = getChecked(element, true);
  return result === "error" ? false : result;
}
function getChecked(element, allowMixed) {
  const tagName = elementSafeTagName(element);
  if (allowMixed && tagName === "INPUT" && element.indeterminate)
    return "mixed";
  if (tagName === "INPUT" && ["checkbox", "radio"].includes(element.type))
    return element.checked;
  if (kAriaCheckedRoles.includes(getAriaRole(element) || "")) {
    const checked = element.getAttribute("aria-checked");
    if (checked === "true")
      return true;
    if (allowMixed && checked === "mixed")
      return "mixed";
    return false;
  }
  return "error";
}
const kAriaPressedRoles = ["button"];
function getAriaPressed(element) {
  if (kAriaPressedRoles.includes(getAriaRole(element) || "")) {
    const pressed = element.getAttribute("aria-pressed");
    if (pressed === "true")
      return true;
    if (pressed === "mixed")
      return "mixed";
  }
  return false;
}
const kAriaExpandedRoles = ["application", "button", "checkbox", "combobox", "gridcell", "link", "listbox", "menuitem", "row", "rowheader", "tab", "treeitem", "columnheader", "menuitemcheckbox", "menuitemradio", "rowheader", "switch"];
function getAriaExpanded(element) {
  if (elementSafeTagName(element) === "DETAILS")
    return element.open;
  if (kAriaExpandedRoles.includes(getAriaRole(element) || "")) {
    const expanded = element.getAttribute("aria-expanded");
    if (expanded === null)
      return "none";
    if (expanded === "true")
      return true;
    return false;
  }
  return "none";
}
const kAriaLevelRoles = ["heading", "listitem", "row", "treeitem"];
function getAriaLevel(element) {
  const native = { "H1": 1, "H2": 2, "H3": 3, "H4": 4, "H5": 5, "H6": 6 }[elementSafeTagName(element)];
  if (native)
    return native;
  if (kAriaLevelRoles.includes(getAriaRole(element) || "")) {
    const attr = element.getAttribute("aria-level");
    const value = attr === null ? Number.NaN : Number(attr);
    if (Number.isInteger(value) && value >= 1)
      return value;
  }
  return 0;
}
const kAriaDisabledRoles = ["application", "button", "composite", "gridcell", "group", "input", "link", "menuitem", "scrollbar", "separator", "tab", "checkbox", "columnheader", "combobox", "grid", "listbox", "menu", "menubar", "menuitemcheckbox", "menuitemradio", "option", "radio", "radiogroup", "row", "rowheader", "searchbox", "select", "slider", "spinbutton", "switch", "tablist", "textbox", "toolbar", "tree", "treegrid", "treeitem"];
function getAriaDisabled(element) {
  return isNativelyDisabled(element) || hasExplicitAriaDisabled(element);
}
function isNativelyDisabled(element) {
  const isNativeFormControl = ["BUTTON", "INPUT", "SELECT", "TEXTAREA", "OPTION", "OPTGROUP"].includes(element.tagName);
  return isNativeFormControl && (element.hasAttribute("disabled") || belongsToDisabledFieldSet(element));
}
function belongsToDisabledFieldSet(element) {
  if (!element)
    return false;
  if (elementSafeTagName(element) === "FIELDSET" && element.hasAttribute("disabled"))
    return true;
  return belongsToDisabledFieldSet(element.parentElement);
}
function hasExplicitAriaDisabled(element) {
  if (!element)
    return false;
  if (kAriaDisabledRoles.includes(getAriaRole(element) || "")) {
    const attribute = (element.getAttribute("aria-disabled") || "").toLowerCase();
    if (attribute === "true")
      return true;
    if (attribute === "false")
      return false;
  }
  return hasExplicitAriaDisabled(parentElementOrShadowHost(element));
}
function getAccessibleNameFromAssociatedLabels(labels, options) {
  return [...labels].map((label) => getTextAlternativeInternal(label, {
    ...options,
    embeddedInLabel: { element: label, hidden: isElementHiddenForAria(label) },
    embeddedInNativeTextAlternative: void 0,
    embeddedInLabelledBy: void 0,
    embeddedInDescribedBy: void 0,
    embeddedInTargetElement: "none"
  })).filter((accessibleName) => !!accessibleName).join(" ");
}
let cacheAccessibleName;
let cacheAccessibleNameHidden;
let cacheAccessibleDescription;
let cacheAccessibleDescriptionHidden;
let cacheIsHidden;
let cachePseudoContentBefore;
let cachePseudoContentAfter;
let cachesCounter = 0;
function beginAriaCaches() {
  ++cachesCounter;
  cacheAccessibleName ?? (cacheAccessibleName = /* @__PURE__ */ new Map());
  cacheAccessibleNameHidden ?? (cacheAccessibleNameHidden = /* @__PURE__ */ new Map());
  cacheAccessibleDescription ?? (cacheAccessibleDescription = /* @__PURE__ */ new Map());
  cacheAccessibleDescriptionHidden ?? (cacheAccessibleDescriptionHidden = /* @__PURE__ */ new Map());
  cacheIsHidden ?? (cacheIsHidden = /* @__PURE__ */ new Map());
  cachePseudoContentBefore ?? (cachePseudoContentBefore = /* @__PURE__ */ new Map());
  cachePseudoContentAfter ?? (cachePseudoContentAfter = /* @__PURE__ */ new Map());
}
function endAriaCaches() {
  if (!--cachesCounter) {
    cacheAccessibleName = void 0;
    cacheAccessibleNameHidden = void 0;
    cacheAccessibleDescription = void 0;
    cacheAccessibleDescriptionHidden = void 0;
    cacheIsHidden = void 0;
    cachePseudoContentBefore = void 0;
    cachePseudoContentAfter = void 0;
  }
}
function matchesComponentAttribute(obj, attr) {
  for (const token of attr.jsonPath) {
    if (obj !== void 0 && obj !== null)
      obj = obj[token];
  }
  return matchesAttributePart(obj, attr);
}
function matchesAttributePart(value, attr) {
  const objValue = typeof value === "string" && !attr.caseSensitive ? value.toUpperCase() : value;
  const attrValue = typeof attr.value === "string" && !attr.caseSensitive ? attr.value.toUpperCase() : attr.value;
  if (attr.op === "<truthy>")
    return !!objValue;
  if (attr.op === "=") {
    if (attrValue instanceof RegExp)
      return typeof objValue === "string" && !!objValue.match(attrValue);
    return objValue === attrValue;
  }
  if (typeof objValue !== "string" || typeof attrValue !== "string")
    return false;
  if (attr.op === "*=")
    return objValue.includes(attrValue);
  if (attr.op === "^=")
    return objValue.startsWith(attrValue);
  if (attr.op === "$=")
    return objValue.endsWith(attrValue);
  if (attr.op === "|=")
    return objValue === attrValue || objValue.startsWith(attrValue + "-");
  if (attr.op === "~=")
    return objValue.split(" ").includes(attrValue);
  return false;
}
function shouldSkipForTextMatching(element) {
  const document2 = element.ownerDocument;
  return element.nodeName === "SCRIPT" || element.nodeName === "NOSCRIPT" || element.nodeName === "STYLE" || document2.head && document2.head.contains(element);
}
function elementText(cache, root) {
  let value = cache.get(root);
  if (value === void 0) {
    value = { full: "", normalized: "", immediate: [] };
    if (!shouldSkipForTextMatching(root)) {
      let currentImmediate = "";
      if (root instanceof HTMLInputElement && (root.type === "submit" || root.type === "button")) {
        value = { full: root.value, normalized: normalizeWhiteSpace(root.value), immediate: [root.value] };
      } else {
        for (let child = root.firstChild; child; child = child.nextSibling) {
          if (child.nodeType === Node.TEXT_NODE) {
            value.full += child.nodeValue || "";
            currentImmediate += child.nodeValue || "";
          } else {
            if (currentImmediate)
              value.immediate.push(currentImmediate);
            currentImmediate = "";
            if (child.nodeType === Node.ELEMENT_NODE)
              value.full += elementText(cache, child).full;
          }
        }
        if (currentImmediate)
          value.immediate.push(currentImmediate);
        if (root.shadowRoot)
          value.full += elementText(cache, root.shadowRoot).full;
        if (value.full)
          value.normalized = normalizeWhiteSpace(value.full);
      }
    }
    cache.set(root, value);
  }
  return value;
}
function elementMatchesText(cache, element, matcher) {
  if (shouldSkipForTextMatching(element))
    return "none";
  if (!matcher(elementText(cache, element)))
    return "none";
  for (let child = element.firstChild; child; child = child.nextSibling) {
    if (child.nodeType === Node.ELEMENT_NODE && matcher(elementText(cache, child)))
      return "selfAndChildren";
  }
  if (element.shadowRoot && matcher(elementText(cache, element.shadowRoot)))
    return "selfAndChildren";
  return "self";
}
function getElementLabels(textCache, element) {
  const labels = getAriaLabelledByElements(element);
  if (labels)
    return labels.map((label) => elementText(textCache, label));
  const ariaLabel = element.getAttribute("aria-label");
  if (ariaLabel !== null && !!ariaLabel.trim())
    return [{ full: ariaLabel, normalized: normalizeWhiteSpace(ariaLabel), immediate: [ariaLabel] }];
  const isNonHiddenInput = element.nodeName === "INPUT" && element.type !== "hidden";
  if (["BUTTON", "METER", "OUTPUT", "PROGRESS", "SELECT", "TEXTAREA"].includes(element.nodeName) || isNonHiddenInput) {
    const labels2 = element.labels;
    if (labels2)
      return [...labels2].map((label) => elementText(textCache, label));
  }
  return [];
}
function getFunctionComponentName(component) {
  return component.displayName || component.name || "Anonymous";
}
function getComponentName(reactElement) {
  if (reactElement.type) {
    switch (typeof reactElement.type) {
      case "function":
        return getFunctionComponentName(reactElement.type);
      case "string":
        return reactElement.type;
      case "object":
        return reactElement.type.displayName || (reactElement.type.render ? getFunctionComponentName(reactElement.type.render) : "");
    }
  }
  if (reactElement._currentElement) {
    const elementType = reactElement._currentElement.type;
    if (typeof elementType === "string")
      return elementType;
    if (typeof elementType === "function")
      return elementType.displayName || elementType.name || "Anonymous";
  }
  return "";
}
function getComponentKey(reactElement) {
  var _a;
  return reactElement.key ?? ((_a = reactElement._currentElement) == null ? void 0 : _a.key);
}
function getChildren(reactElement) {
  if (reactElement.child) {
    const children = [];
    for (let child = reactElement.child; child; child = child.sibling)
      children.push(child);
    return children;
  }
  if (!reactElement._currentElement)
    return [];
  const isKnownElement = (reactElement2) => {
    var _a;
    const elementType = (_a = reactElement2._currentElement) == null ? void 0 : _a.type;
    return typeof elementType === "function" || typeof elementType === "string";
  };
  if (reactElement._renderedComponent) {
    const child = reactElement._renderedComponent;
    return isKnownElement(child) ? [child] : [];
  }
  if (reactElement._renderedChildren)
    return [...Object.values(reactElement._renderedChildren)].filter(isKnownElement);
  return [];
}
function getProps(reactElement) {
  var _a;
  const props = (
    // React 16+
    reactElement.memoizedProps || // React 15
    ((_a = reactElement._currentElement) == null ? void 0 : _a.props)
  );
  if (!props || typeof props === "string")
    return props;
  const result = { ...props };
  delete result.children;
  return result;
}
function buildComponentsTree(reactElement) {
  var _a;
  const treeNode = {
    key: getComponentKey(reactElement),
    name: getComponentName(reactElement),
    children: getChildren(reactElement).map(buildComponentsTree),
    rootElements: [],
    props: getProps(reactElement)
  };
  const rootElement = (
    // React 16+
    // @see https://github.com/baruchvlz/resq/blob/5c15a5e04d3f7174087248f5a158c3d6dcc1ec72/src/utils.js#L29
    reactElement.stateNode || // React 15
    reactElement._hostNode || ((_a = reactElement._renderedComponent) == null ? void 0 : _a._hostNode)
  );
  if (rootElement instanceof Element) {
    treeNode.rootElements.push(rootElement);
  } else {
    for (const child of treeNode.children)
      treeNode.rootElements.push(...child.rootElements);
  }
  return treeNode;
}
function filterComponentsTree$1(treeNode, searchFn, result = []) {
  if (searchFn(treeNode))
    result.push(treeNode);
  for (const child of treeNode.children)
    filterComponentsTree$1(child, searchFn, result);
  return result;
}
function findReactRoots(root, roots = []) {
  const document2 = root.ownerDocument || root;
  const walker = document2.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
  do {
    const node = walker.currentNode;
    const reactNode = node;
    const rootKey = Object.keys(reactNode).find((key) => key.startsWith("__reactContainer") && reactNode[key] !== null);
    if (rootKey) {
      roots.push(reactNode[rootKey].stateNode.current);
    } else {
      const legacyRootKey = "_reactRootContainer";
      if (reactNode.hasOwnProperty(legacyRootKey) && reactNode[legacyRootKey] !== null) {
        roots.push(reactNode[legacyRootKey]._internalRoot.current);
      }
    }
    if (node instanceof Element && node.hasAttribute("data-reactroot")) {
      for (const key of Object.keys(node)) {
        if (key.startsWith("__reactInternalInstance") || key.startsWith("__reactFiber"))
          roots.push(node[key]);
      }
    }
    const shadowRoot = node instanceof Element ? node.shadowRoot : null;
    if (shadowRoot)
      findReactRoots(shadowRoot, roots);
  } while (walker.nextNode());
  return roots;
}
const ReactEngine = {
  queryAll(scope, selector) {
    const { name, attributes } = parseAttributeSelector(selector, false);
    const reactRoots = findReactRoots(scope.ownerDocument || scope);
    const trees = reactRoots.map((reactRoot) => buildComponentsTree(reactRoot));
    const treeNodes = trees.map((tree) => filterComponentsTree$1(tree, (treeNode) => {
      const props = treeNode.props ?? {};
      if (treeNode.key !== void 0)
        props.key = treeNode.key;
      if (name && treeNode.name !== name)
        return false;
      if (treeNode.rootElements.some((domNode) => !isInsideScope(scope, domNode)))
        return false;
      for (const attr of attributes) {
        if (!matchesComponentAttribute(props, attr))
          return false;
      }
      return true;
    })).flat();
    const allRootElements = /* @__PURE__ */ new Set();
    for (const treeNode of treeNodes) {
      for (const domNode of treeNode.rootElements)
        allRootElements.add(domNode);
    }
    return [...allRootElements];
  }
};
function basename(filename, ext) {
  const normalized = filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/");
  let result = normalized.substring(normalized.lastIndexOf("/") + 1);
  if (ext && result.endsWith(ext))
    result = result.substring(0, result.length - ext.length);
  return result;
}
function toUpper(_, c) {
  return c ? c.toUpperCase() : "";
}
const classifyRE = /(?:^|[-_/])(\w)/g;
const classify = (str) => {
  return str && str.replace(classifyRE, toUpper);
};
function buildComponentsTreeVue3(instance) {
  function getComponentTypeName(options) {
    const name = options.name || options._componentTag || options.__playwright_guessedName;
    if (name)
      return name;
    const file = options.__file;
    if (file)
      return classify(basename(file, ".vue"));
  }
  function saveComponentName(instance2, key) {
    instance2.type.__playwright_guessedName = key;
    return key;
  }
  function getInstanceName(instance2) {
    var _a, _b, _c, _d;
    const name = getComponentTypeName(instance2.type || {});
    if (name)
      return name;
    if (instance2.root === instance2)
      return "Root";
    for (const key in (_b = (_a = instance2.parent) == null ? void 0 : _a.type) == null ? void 0 : _b.components) {
      if (((_c = instance2.parent) == null ? void 0 : _c.type.components[key]) === instance2.type)
        return saveComponentName(instance2, key);
    }
    for (const key in (_d = instance2.appContext) == null ? void 0 : _d.components) {
      if (instance2.appContext.components[key] === instance2.type)
        return saveComponentName(instance2, key);
    }
    return "Anonymous Component";
  }
  function isBeingDestroyed(instance2) {
    return instance2._isBeingDestroyed || instance2.isUnmounted;
  }
  function isFragment(instance2) {
    return instance2.subTree.type.toString() === "Symbol(Fragment)";
  }
  function getInternalInstanceChildren(subTree) {
    const list = [];
    if (subTree.component)
      list.push(subTree.component);
    if (subTree.suspense)
      list.push(...getInternalInstanceChildren(subTree.suspense.activeBranch));
    if (Array.isArray(subTree.children)) {
      subTree.children.forEach((childSubTree) => {
        if (childSubTree.component)
          list.push(childSubTree.component);
        else
          list.push(...getInternalInstanceChildren(childSubTree));
      });
    }
    return list.filter((child) => {
      var _a;
      return !isBeingDestroyed(child) && !((_a = child.type.devtools) == null ? void 0 : _a.hide);
    });
  }
  function getRootElementsFromComponentInstance(instance2) {
    if (isFragment(instance2))
      return getFragmentRootElements(instance2.subTree);
    return [instance2.subTree.el];
  }
  function getFragmentRootElements(vnode) {
    if (!vnode.children)
      return [];
    const list = [];
    for (let i = 0, l2 = vnode.children.length; i < l2; i++) {
      const childVnode = vnode.children[i];
      if (childVnode.component)
        list.push(...getRootElementsFromComponentInstance(childVnode.component));
      else if (childVnode.el)
        list.push(childVnode.el);
    }
    return list;
  }
  function buildComponentsTree2(instance2) {
    return {
      name: getInstanceName(instance2),
      children: getInternalInstanceChildren(instance2.subTree).map(buildComponentsTree2),
      rootElements: getRootElementsFromComponentInstance(instance2),
      props: instance2.props
    };
  }
  return buildComponentsTree2(instance);
}
function buildComponentsTreeVue2(instance) {
  function getComponentName2(options) {
    const name = options.displayName || options.name || options._componentTag;
    if (name)
      return name;
    const file = options.__file;
    if (file)
      return classify(basename(file, ".vue"));
  }
  function getInstanceName(instance2) {
    const name = getComponentName2(instance2.$options || instance2.fnOptions || {});
    if (name)
      return name;
    return instance2.$root === instance2 ? "Root" : "Anonymous Component";
  }
  function getInternalInstanceChildren(instance2) {
    if (instance2.$children)
      return instance2.$children;
    if (Array.isArray(instance2.subTree.children))
      return instance2.subTree.children.filter((vnode) => !!vnode.component).map((vnode) => vnode.component);
    return [];
  }
  function buildComponentsTree2(instance2) {
    return {
      name: getInstanceName(instance2),
      children: getInternalInstanceChildren(instance2).map(buildComponentsTree2),
      rootElements: [instance2.$el],
      props: instance2._props
    };
  }
  return buildComponentsTree2(instance);
}
function filterComponentsTree(treeNode, searchFn, result = []) {
  if (searchFn(treeNode))
    result.push(treeNode);
  for (const child of treeNode.children)
    filterComponentsTree(child, searchFn, result);
  return result;
}
function findVueRoots(root, roots = []) {
  const document2 = root.ownerDocument || root;
  const walker = document2.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
  const vue2Roots = /* @__PURE__ */ new Set();
  do {
    const node = walker.currentNode;
    if (node.__vue__)
      vue2Roots.add(node.__vue__.$root);
    if (node.__vue_app__ && node._vnode && node._vnode.component)
      roots.push({ root: node._vnode.component, version: 3 });
    const shadowRoot = node instanceof Element ? node.shadowRoot : null;
    if (shadowRoot)
      findVueRoots(shadowRoot, roots);
  } while (walker.nextNode());
  for (const vue2root of vue2Roots) {
    roots.push({
      version: 2,
      root: vue2root
    });
  }
  return roots;
}
const VueEngine = {
  queryAll(scope, selector) {
    const document2 = scope.ownerDocument || scope;
    const { name, attributes } = parseAttributeSelector(selector, false);
    const vueRoots = findVueRoots(document2);
    const trees = vueRoots.map((vueRoot) => vueRoot.version === 3 ? buildComponentsTreeVue3(vueRoot.root) : buildComponentsTreeVue2(vueRoot.root));
    const treeNodes = trees.map((tree) => filterComponentsTree(tree, (treeNode) => {
      if (name && treeNode.name !== name)
        return false;
      if (treeNode.rootElements.some((rootElement) => !isInsideScope(scope, rootElement)))
        return false;
      for (const attr of attributes) {
        if (!matchesComponentAttribute(treeNode.props, attr))
          return false;
      }
      return true;
    })).flat();
    const allRootElements = /* @__PURE__ */ new Set();
    for (const treeNode of treeNodes) {
      for (const rootElement of treeNode.rootElements)
        allRootElements.add(rootElement);
    }
    return [...allRootElements];
  }
};
const kSupportedAttributes = ["selected", "checked", "pressed", "expanded", "level", "disabled", "name", "include-hidden"];
kSupportedAttributes.sort();
function validateSupportedRole(attr, roles, role) {
  if (!roles.includes(role))
    throw new Error(`"${attr}" attribute is only supported for roles: ${roles.slice().sort().map((role2) => `"${role2}"`).join(", ")}`);
}
function validateSupportedValues(attr, values) {
  if (attr.op !== "<truthy>" && !values.includes(attr.value))
    throw new Error(`"${attr.name}" must be one of ${values.map((v2) => JSON.stringify(v2)).join(", ")}`);
}
function validateSupportedOp(attr, ops) {
  if (!ops.includes(attr.op))
    throw new Error(`"${attr.name}" does not support "${attr.op}" matcher`);
}
function validateAttributes(attrs, role) {
  const options = { role };
  for (const attr of attrs) {
    switch (attr.name) {
      case "checked": {
        validateSupportedRole(attr.name, kAriaCheckedRoles, role);
        validateSupportedValues(attr, [true, false, "mixed"]);
        validateSupportedOp(attr, ["<truthy>", "="]);
        options.checked = attr.op === "<truthy>" ? true : attr.value;
        break;
      }
      case "pressed": {
        validateSupportedRole(attr.name, kAriaPressedRoles, role);
        validateSupportedValues(attr, [true, false, "mixed"]);
        validateSupportedOp(attr, ["<truthy>", "="]);
        options.pressed = attr.op === "<truthy>" ? true : attr.value;
        break;
      }
      case "selected": {
        validateSupportedRole(attr.name, kAriaSelectedRoles, role);
        validateSupportedValues(attr, [true, false]);
        validateSupportedOp(attr, ["<truthy>", "="]);
        options.selected = attr.op === "<truthy>" ? true : attr.value;
        break;
      }
      case "expanded": {
        validateSupportedRole(attr.name, kAriaExpandedRoles, role);
        validateSupportedValues(attr, [true, false]);
        validateSupportedOp(attr, ["<truthy>", "="]);
        options.expanded = attr.op === "<truthy>" ? true : attr.value;
        break;
      }
      case "level": {
        validateSupportedRole(attr.name, kAriaLevelRoles, role);
        if (typeof attr.value === "string")
          attr.value = +attr.value;
        if (attr.op !== "=" || typeof attr.value !== "number" || Number.isNaN(attr.value))
          throw new Error(`"level" attribute must be compared to a number`);
        options.level = attr.value;
        break;
      }
      case "disabled": {
        validateSupportedValues(attr, [true, false]);
        validateSupportedOp(attr, ["<truthy>", "="]);
        options.disabled = attr.op === "<truthy>" ? true : attr.value;
        break;
      }
      case "name": {
        if (attr.op === "<truthy>")
          throw new Error(`"name" attribute must have a value`);
        if (typeof attr.value !== "string" && !(attr.value instanceof RegExp))
          throw new Error(`"name" attribute must be a string or a regular expression`);
        options.name = attr.value;
        options.nameOp = attr.op;
        options.exact = attr.caseSensitive;
        break;
      }
      case "include-hidden": {
        validateSupportedValues(attr, [true, false]);
        validateSupportedOp(attr, ["<truthy>", "="]);
        options.includeHidden = attr.op === "<truthy>" ? true : attr.value;
        break;
      }
      default: {
        throw new Error(`Unknown attribute "${attr.name}", must be one of ${kSupportedAttributes.map((a) => `"${a}"`).join(", ")}.`);
      }
    }
  }
  return options;
}
function queryRole(scope, options, internal) {
  const result = [];
  const match = (element) => {
    if (getAriaRole(element) !== options.role)
      return;
    if (options.selected !== void 0 && getAriaSelected(element) !== options.selected)
      return;
    if (options.checked !== void 0 && getAriaChecked(element) !== options.checked)
      return;
    if (options.pressed !== void 0 && getAriaPressed(element) !== options.pressed)
      return;
    if (options.expanded !== void 0 && getAriaExpanded(element) !== options.expanded)
      return;
    if (options.level !== void 0 && getAriaLevel(element) !== options.level)
      return;
    if (options.disabled !== void 0 && getAriaDisabled(element) !== options.disabled)
      return;
    if (!options.includeHidden) {
      const isHidden = isElementHiddenForAria(element);
      if (isHidden)
        return;
    }
    if (options.name !== void 0) {
      const accessibleName = normalizeWhiteSpace(getElementAccessibleName(element, !!options.includeHidden));
      if (typeof options.name === "string")
        options.name = normalizeWhiteSpace(options.name);
      if (internal && !options.exact && options.nameOp === "=")
        options.nameOp = "*=";
      if (!matchesAttributePart(accessibleName, { name: "", jsonPath: [], op: options.nameOp || "=", value: options.name, caseSensitive: !!options.exact }))
        return;
    }
    result.push(element);
  };
  const query = (root) => {
    const shadows = [];
    if (root.shadowRoot)
      shadows.push(root.shadowRoot);
    for (const element of root.querySelectorAll("*")) {
      match(element);
      if (element.shadowRoot)
        shadows.push(element.shadowRoot);
    }
    shadows.forEach(query);
  };
  query(scope);
  return result;
}
function createRoleEngine(internal) {
  return {
    queryAll: (scope, selector) => {
      const parsed = parseAttributeSelector(selector, true);
      const role = parsed.name.toLowerCase();
      if (!role)
        throw new Error(`Role must not be empty`);
      const options = validateAttributes(parsed.attributes, role);
      beginAriaCaches();
      try {
        return queryRole(scope, options, internal);
      } finally {
        endAriaCaches();
      }
    }
  };
}
function boxRightOf(box1, box2, maxDistance) {
  const distance = box1.left - box2.right;
  if (distance < 0 || maxDistance !== void 0 && distance > maxDistance)
    return;
  return distance + Math.max(box2.bottom - box1.bottom, 0) + Math.max(box1.top - box2.top, 0);
}
function boxLeftOf(box1, box2, maxDistance) {
  const distance = box2.left - box1.right;
  if (distance < 0 || maxDistance !== void 0 && distance > maxDistance)
    return;
  return distance + Math.max(box2.bottom - box1.bottom, 0) + Math.max(box1.top - box2.top, 0);
}
function boxAbove(box1, box2, maxDistance) {
  const distance = box2.top - box1.bottom;
  if (distance < 0 || maxDistance !== void 0 && distance > maxDistance)
    return;
  return distance + Math.max(box1.left - box2.left, 0) + Math.max(box2.right - box1.right, 0);
}
function boxBelow(box1, box2, maxDistance) {
  const distance = box1.top - box2.bottom;
  if (distance < 0 || maxDistance !== void 0 && distance > maxDistance)
    return;
  return distance + Math.max(box1.left - box2.left, 0) + Math.max(box2.right - box1.right, 0);
}
function boxNear(box1, box2, maxDistance) {
  const kThreshold = maxDistance === void 0 ? 50 : maxDistance;
  let score = 0;
  if (box1.left - box2.right >= 0)
    score += box1.left - box2.right;
  if (box2.left - box1.right >= 0)
    score += box2.left - box1.right;
  if (box2.top - box1.bottom >= 0)
    score += box2.top - box1.bottom;
  if (box1.top - box2.bottom >= 0)
    score += box1.top - box2.bottom;
  return score > kThreshold ? void 0 : score;
}
const kLayoutSelectorNames = ["left-of", "right-of", "above", "below", "near"];
function layoutSelectorScore(name, element, inner, maxDistance) {
  const box = element.getBoundingClientRect();
  const scorer = { "left-of": boxLeftOf, "right-of": boxRightOf, "above": boxAbove, "below": boxBelow, "near": boxNear }[name];
  let bestScore;
  for (const e of inner) {
    if (e === element)
      continue;
    const score = scorer(box, e.getBoundingClientRect(), maxDistance);
    if (score === void 0)
      continue;
    if (bestScore === void 0 || score < bestScore)
      bestScore = score;
  }
  return bestScore;
}
class SelectorEvaluatorImpl {
  constructor(extraEngines) {
    this._engines = /* @__PURE__ */ new Map();
    this._cacheQueryCSS = /* @__PURE__ */ new Map();
    this._cacheMatches = /* @__PURE__ */ new Map();
    this._cacheQuery = /* @__PURE__ */ new Map();
    this._cacheMatchesSimple = /* @__PURE__ */ new Map();
    this._cacheMatchesParents = /* @__PURE__ */ new Map();
    this._cacheCallMatches = /* @__PURE__ */ new Map();
    this._cacheCallQuery = /* @__PURE__ */ new Map();
    this._cacheQuerySimple = /* @__PURE__ */ new Map();
    this._cacheText = /* @__PURE__ */ new Map();
    this._retainCacheCounter = 0;
    for (const [name, engine] of extraEngines)
      this._engines.set(name, engine);
    this._engines.set("not", notEngine);
    this._engines.set("is", isEngine);
    this._engines.set("where", isEngine);
    this._engines.set("has", hasEngine);
    this._engines.set("scope", scopeEngine);
    this._engines.set("light", lightEngine);
    this._engines.set("visible", visibleEngine);
    this._engines.set("text", textEngine);
    this._engines.set("text-is", textIsEngine);
    this._engines.set("text-matches", textMatchesEngine);
    this._engines.set("has-text", hasTextEngine);
    this._engines.set("right-of", createLayoutEngine("right-of"));
    this._engines.set("left-of", createLayoutEngine("left-of"));
    this._engines.set("above", createLayoutEngine("above"));
    this._engines.set("below", createLayoutEngine("below"));
    this._engines.set("near", createLayoutEngine("near"));
    this._engines.set("nth-match", nthMatchEngine);
    const allNames = [...this._engines.keys()];
    allNames.sort();
    const parserNames = [...customCSSNames];
    parserNames.sort();
    if (allNames.join("|") !== parserNames.join("|"))
      throw new Error(`Please keep customCSSNames in sync with evaluator engines: ${allNames.join("|")} vs ${parserNames.join("|")}`);
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
  _cached(cache, main, rest, cb2) {
    if (!cache.has(main))
      cache.set(main, []);
    const entries = cache.get(main);
    const entry = entries.find((e) => rest.every((value, index) => e.rest[index] === value));
    if (entry)
      return entry.result;
    const result = cb2();
    entries.push({ rest, result });
    return result;
  }
  _checkSelector(s) {
    const wellFormed = typeof s === "object" && s && (Array.isArray(s) || "simples" in s && s.simples.length);
    if (!wellFormed)
      throw new Error(`Malformed selector "${s}"`);
    return s;
  }
  matches(element, s, context2) {
    const selector = this._checkSelector(s);
    this.begin();
    try {
      return this._cached(this._cacheMatches, element, [selector, context2.scope, context2.pierceShadow, context2.originalScope], () => {
        if (Array.isArray(selector))
          return this._matchesEngine(isEngine, element, selector, context2);
        if (this._hasScopeClause(selector))
          context2 = this._expandContextForScopeMatching(context2);
        if (!this._matchesSimple(element, selector.simples[selector.simples.length - 1].selector, context2))
          return false;
        return this._matchesParents(element, selector, selector.simples.length - 2, context2);
      });
    } finally {
      this.end();
    }
  }
  query(context2, s) {
    const selector = this._checkSelector(s);
    this.begin();
    try {
      return this._cached(this._cacheQuery, selector, [context2.scope, context2.pierceShadow, context2.originalScope], () => {
        if (Array.isArray(selector))
          return this._queryEngine(isEngine, context2, selector);
        if (this._hasScopeClause(selector))
          context2 = this._expandContextForScopeMatching(context2);
        const previousScoreMap = this._scoreMap;
        this._scoreMap = /* @__PURE__ */ new Map();
        let elements = this._querySimple(context2, selector.simples[selector.simples.length - 1].selector);
        elements = elements.filter((element) => this._matchesParents(element, selector, selector.simples.length - 2, context2));
        if (this._scoreMap.size) {
          elements.sort((a, b) => {
            const aScore = this._scoreMap.get(a);
            const bScore = this._scoreMap.get(b);
            if (aScore === bScore)
              return 0;
            if (aScore === void 0)
              return 1;
            if (bScore === void 0)
              return -1;
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
    if (this._scoreMap)
      this._scoreMap.set(element, score);
  }
  _hasScopeClause(selector) {
    return selector.simples.some((simple) => simple.selector.functions.some((f2) => f2.name === "scope"));
  }
  _expandContextForScopeMatching(context2) {
    if (context2.scope.nodeType !== 1)
      return context2;
    const scope = parentElementOrShadowHost(context2.scope);
    if (!scope)
      return context2;
    return { ...context2, scope, originalScope: context2.originalScope || context2.scope };
  }
  _matchesSimple(element, simple, context2) {
    return this._cached(this._cacheMatchesSimple, element, [simple, context2.scope, context2.pierceShadow, context2.originalScope], () => {
      if (element === context2.scope)
        return false;
      if (simple.css && !this._matchesCSS(element, simple.css))
        return false;
      for (const func of simple.functions) {
        if (!this._matchesEngine(this._getEngine(func.name), element, func.args, context2))
          return false;
      }
      return true;
    });
  }
  _querySimple(context2, simple) {
    if (!simple.functions.length)
      return this._queryCSS(context2, simple.css || "*");
    return this._cached(this._cacheQuerySimple, simple, [context2.scope, context2.pierceShadow, context2.originalScope], () => {
      let css = simple.css;
      const funcs = simple.functions;
      if (css === "*" && funcs.length)
        css = void 0;
      let elements;
      let firstIndex = -1;
      if (css !== void 0) {
        elements = this._queryCSS(context2, css);
      } else {
        firstIndex = funcs.findIndex((func) => this._getEngine(func.name).query !== void 0);
        if (firstIndex === -1)
          firstIndex = 0;
        elements = this._queryEngine(this._getEngine(funcs[firstIndex].name), context2, funcs[firstIndex].args);
      }
      for (let i = 0; i < funcs.length; i++) {
        if (i === firstIndex)
          continue;
        const engine = this._getEngine(funcs[i].name);
        if (engine.matches !== void 0)
          elements = elements.filter((e) => this._matchesEngine(engine, e, funcs[i].args, context2));
      }
      for (let i = 0; i < funcs.length; i++) {
        if (i === firstIndex)
          continue;
        const engine = this._getEngine(funcs[i].name);
        if (engine.matches === void 0)
          elements = elements.filter((e) => this._matchesEngine(engine, e, funcs[i].args, context2));
      }
      return elements;
    });
  }
  _matchesParents(element, complex, index, context2) {
    if (index < 0)
      return true;
    return this._cached(this._cacheMatchesParents, element, [complex, index, context2.scope, context2.pierceShadow, context2.originalScope], () => {
      const { selector: simple, combinator } = complex.simples[index];
      if (combinator === ">") {
        const parent = parentElementOrShadowHostInContext(element, context2);
        if (!parent || !this._matchesSimple(parent, simple, context2))
          return false;
        return this._matchesParents(parent, complex, index - 1, context2);
      }
      if (combinator === "+") {
        const previousSibling = previousSiblingInContext(element, context2);
        if (!previousSibling || !this._matchesSimple(previousSibling, simple, context2))
          return false;
        return this._matchesParents(previousSibling, complex, index - 1, context2);
      }
      if (combinator === "") {
        let parent = parentElementOrShadowHostInContext(element, context2);
        while (parent) {
          if (this._matchesSimple(parent, simple, context2)) {
            if (this._matchesParents(parent, complex, index - 1, context2))
              return true;
            if (complex.simples[index - 1].combinator === "")
              break;
          }
          parent = parentElementOrShadowHostInContext(parent, context2);
        }
        return false;
      }
      if (combinator === "~") {
        let previousSibling = previousSiblingInContext(element, context2);
        while (previousSibling) {
          if (this._matchesSimple(previousSibling, simple, context2)) {
            if (this._matchesParents(previousSibling, complex, index - 1, context2))
              return true;
            if (complex.simples[index - 1].combinator === "~")
              break;
          }
          previousSibling = previousSiblingInContext(previousSibling, context2);
        }
        return false;
      }
      if (combinator === ">=") {
        let parent = element;
        while (parent) {
          if (this._matchesSimple(parent, simple, context2)) {
            if (this._matchesParents(parent, complex, index - 1, context2))
              return true;
            if (complex.simples[index - 1].combinator === "")
              break;
          }
          parent = parentElementOrShadowHostInContext(parent, context2);
        }
        return false;
      }
      throw new Error(`Unsupported combinator "${combinator}"`);
    });
  }
  _matchesEngine(engine, element, args, context2) {
    if (engine.matches)
      return this._callMatches(engine, element, args, context2);
    if (engine.query)
      return this._callQuery(engine, args, context2).includes(element);
    throw new Error(`Selector engine should implement "matches" or "query"`);
  }
  _queryEngine(engine, context2, args) {
    if (engine.query)
      return this._callQuery(engine, args, context2);
    if (engine.matches)
      return this._queryCSS(context2, "*").filter((element) => this._callMatches(engine, element, args, context2));
    throw new Error(`Selector engine should implement "matches" or "query"`);
  }
  _callMatches(engine, element, args, context2) {
    return this._cached(this._cacheCallMatches, element, [engine, context2.scope, context2.pierceShadow, context2.originalScope, ...args], () => {
      return engine.matches(element, args, context2, this);
    });
  }
  _callQuery(engine, args, context2) {
    return this._cached(this._cacheCallQuery, engine, [context2.scope, context2.pierceShadow, context2.originalScope, ...args], () => {
      return engine.query(context2, args, this);
    });
  }
  _matchesCSS(element, css) {
    return element.matches(css);
  }
  _queryCSS(context2, css) {
    return this._cached(this._cacheQueryCSS, css, [context2.scope, context2.pierceShadow, context2.originalScope], () => {
      let result = [];
      function query(root) {
        result = result.concat([...root.querySelectorAll(css)]);
        if (!context2.pierceShadow)
          return;
        if (root.shadowRoot)
          query(root.shadowRoot);
        for (const element of root.querySelectorAll("*")) {
          if (element.shadowRoot)
            query(element.shadowRoot);
        }
      }
      query(context2.scope);
      return result;
    });
  }
  _getEngine(name) {
    const engine = this._engines.get(name);
    if (!engine)
      throw new Error(`Unknown selector engine "${name}"`);
    return engine;
  }
}
const isEngine = {
  matches(element, args, context2, evaluator) {
    if (args.length === 0)
      throw new Error(`"is" engine expects non-empty selector list`);
    return args.some((selector) => evaluator.matches(element, selector, context2));
  },
  query(context2, args, evaluator) {
    if (args.length === 0)
      throw new Error(`"is" engine expects non-empty selector list`);
    let elements = [];
    for (const arg of args)
      elements = elements.concat(evaluator.query(context2, arg));
    return args.length === 1 ? elements : sortInDOMOrder(elements);
  }
};
const hasEngine = {
  matches(element, args, context2, evaluator) {
    if (args.length === 0)
      throw new Error(`"has" engine expects non-empty selector list`);
    return evaluator.query({ ...context2, scope: element }, args).length > 0;
  }
  // TODO: we can implement efficient "query" by matching "args" and returning
  // all parents/descendants, just have to be careful with the ":scope" matching.
};
const scopeEngine = {
  matches(element, args, context2, evaluator) {
    if (args.length !== 0)
      throw new Error(`"scope" engine expects no arguments`);
    const actualScope = context2.originalScope || context2.scope;
    if (actualScope.nodeType === 9)
      return element === actualScope.documentElement;
    return element === actualScope;
  },
  query(context2, args, evaluator) {
    if (args.length !== 0)
      throw new Error(`"scope" engine expects no arguments`);
    const actualScope = context2.originalScope || context2.scope;
    if (actualScope.nodeType === 9) {
      const root = actualScope.documentElement;
      return root ? [root] : [];
    }
    if (actualScope.nodeType === 1)
      return [actualScope];
    return [];
  }
};
const notEngine = {
  matches(element, args, context2, evaluator) {
    if (args.length === 0)
      throw new Error(`"not" engine expects non-empty selector list`);
    return !evaluator.matches(element, args, context2);
  }
};
const lightEngine = {
  query(context2, args, evaluator) {
    return evaluator.query({ ...context2, pierceShadow: false }, args);
  },
  matches(element, args, context2, evaluator) {
    return evaluator.matches(element, args, { ...context2, pierceShadow: false });
  }
};
const visibleEngine = {
  matches(element, args, context2, evaluator) {
    if (args.length)
      throw new Error(`"visible" engine expects no arguments`);
    return isElementVisible(element);
  }
};
const textEngine = {
  matches(element, args, context2, evaluator) {
    if (args.length !== 1 || typeof args[0] !== "string")
      throw new Error(`"text" engine expects a single string`);
    const text = normalizeWhiteSpace(args[0]).toLowerCase();
    const matcher = (elementText2) => elementText2.normalized.toLowerCase().includes(text);
    return elementMatchesText(evaluator._cacheText, element, matcher) === "self";
  }
};
const textIsEngine = {
  matches(element, args, context2, evaluator) {
    if (args.length !== 1 || typeof args[0] !== "string")
      throw new Error(`"text-is" engine expects a single string`);
    const text = normalizeWhiteSpace(args[0]);
    const matcher = (elementText2) => {
      if (!text && !elementText2.immediate.length)
        return true;
      return elementText2.immediate.some((s) => normalizeWhiteSpace(s) === text);
    };
    return elementMatchesText(evaluator._cacheText, element, matcher) !== "none";
  }
};
const textMatchesEngine = {
  matches(element, args, context2, evaluator) {
    if (args.length === 0 || typeof args[0] !== "string" || args.length > 2 || args.length === 2 && typeof args[1] !== "string")
      throw new Error(`"text-matches" engine expects a regexp body and optional regexp flags`);
    const re2 = new RegExp(args[0], args.length === 2 ? args[1] : void 0);
    const matcher = (elementText2) => re2.test(elementText2.full);
    return elementMatchesText(evaluator._cacheText, element, matcher) === "self";
  }
};
const hasTextEngine = {
  matches(element, args, context2, evaluator) {
    if (args.length !== 1 || typeof args[0] !== "string")
      throw new Error(`"has-text" engine expects a single string`);
    if (shouldSkipForTextMatching(element))
      return false;
    const text = normalizeWhiteSpace(args[0]).toLowerCase();
    const matcher = (elementText2) => elementText2.normalized.toLowerCase().includes(text);
    return matcher(elementText(evaluator._cacheText, element));
  }
};
function createLayoutEngine(name) {
  return {
    matches(element, args, context2, evaluator) {
      const maxDistance = args.length && typeof args[args.length - 1] === "number" ? args[args.length - 1] : void 0;
      const queryArgs = maxDistance === void 0 ? args : args.slice(0, args.length - 1);
      if (args.length < 1 + (maxDistance === void 0 ? 0 : 1))
        throw new Error(`"${name}" engine expects a selector list and optional maximum distance in pixels`);
      const inner = evaluator.query(context2, queryArgs);
      const score = layoutSelectorScore(name, element, inner, maxDistance);
      if (score === void 0)
        return false;
      evaluator._markScore(element, score);
      return true;
    }
  };
}
const nthMatchEngine = {
  query(context2, args, evaluator) {
    let index = args[args.length - 1];
    if (args.length < 2)
      throw new Error(`"nth-match" engine expects non-empty selector list and an index argument`);
    if (typeof index !== "number" || index < 1)
      throw new Error(`"nth-match" engine expects a one-based index as the last argument`);
    const elements = isEngine.query(context2, args.slice(0, args.length - 1), evaluator);
    index--;
    return index < elements.length ? [elements[index]] : [];
  }
};
function parentElementOrShadowHostInContext(element, context2) {
  if (element === context2.scope)
    return;
  if (!context2.pierceShadow)
    return element.parentElement || void 0;
  return parentElementOrShadowHost(element);
}
function previousSiblingInContext(element, context2) {
  if (element === context2.scope)
    return;
  return element.previousElementSibling || void 0;
}
function sortInDOMOrder(elements) {
  const elementToEntry = /* @__PURE__ */ new Map();
  const roots = [];
  const result = [];
  function append(element) {
    let entry = elementToEntry.get(element);
    if (entry)
      return entry;
    const parent = parentElementOrShadowHost(element);
    if (parent) {
      const parentEntry = append(parent);
      parentEntry.children.push(element);
    } else {
      roots.push(element);
    }
    entry = { children: [], taken: false };
    elementToEntry.set(element, entry);
    return entry;
  }
  for (const e of elements)
    append(e).taken = true;
  function visit(element) {
    const entry = elementToEntry.get(element);
    if (entry.taken)
      result.push(element);
    if (entry.children.length > 1) {
      const set = new Set(entry.children);
      entry.children = [];
      let child = element.firstElementChild;
      while (child && entry.children.length < set.size) {
        if (set.has(child))
          entry.children.push(child);
        child = child.nextElementSibling;
      }
      child = element.shadowRoot ? element.shadowRoot.firstElementChild : null;
      while (child && entry.children.length < set.size) {
        if (set.has(child))
          entry.children.push(child);
        child = child.nextElementSibling;
      }
    }
    entry.children.forEach(visit);
  }
  roots.forEach(visit);
  return result;
}
const cacheAllowText = /* @__PURE__ */ new Map();
const cacheDisallowText = /* @__PURE__ */ new Map();
const kTextScoreRange = 10;
const kExactPenalty = kTextScoreRange / 2;
const kTestIdScore = 1;
const kOtherTestIdScore = 2;
const kIframeByAttributeScore = 10;
const kBeginPenalizedScore = 50;
const kPlaceholderScore = 100;
const kLabelScore = 120;
const kRoleWithNameScore = 140;
const kAltTextScore = 160;
const kTextScore = 180;
const kTitleScore = 200;
const kTextScoreRegex = 250;
const kPlaceholderScoreExact = kPlaceholderScore + kExactPenalty;
const kLabelScoreExact = kLabelScore + kExactPenalty;
const kRoleWithNameScoreExact = kRoleWithNameScore + kExactPenalty;
const kAltTextScoreExact = kAltTextScore + kExactPenalty;
const kTextScoreExact = kTextScore + kExactPenalty;
const kTitleScoreExact = kTitleScore + kExactPenalty;
const kEndPenalizedScore = 300;
const kCSSIdScore = 500;
const kRoleWithoutNameScore = 510;
const kCSSInputTypeNameScore = 520;
const kCSSTagNameScore = 530;
const kNthScore = 1e4;
const kCSSFallbackScore = 1e7;
const kScoreThresholdForTextExpect = 1e3;
function generateSelector(injectedScript, targetElement, options) {
  injectedScript._evaluator.begin();
  beginAriaCaches();
  try {
    let selectors = [];
    if (options.forTextExpect) {
      let targetTokens = cssFallback(injectedScript, targetElement.ownerDocument.documentElement, options);
      for (let element = targetElement; element; element = parentElementOrShadowHost(element)) {
        const tokens = generateSelectorFor(injectedScript, element, { ...options, noText: true });
        if (!tokens)
          continue;
        const score = combineScores(tokens);
        if (score <= kScoreThresholdForTextExpect) {
          targetTokens = tokens;
          break;
        }
      }
      selectors = [joinTokens(targetTokens)];
    } else {
      if (!targetElement.matches("input,textarea,select") && !targetElement.isContentEditable) {
        const interactiveParent = closestCrossShadow(targetElement, "button,select,input,[role=button],[role=checkbox],[role=radio],a,[role=link]", options.root);
        if (interactiveParent && isElementVisible(interactiveParent))
          targetElement = interactiveParent;
      }
      if (options.multiple) {
        const withText = generateSelectorFor(injectedScript, targetElement, options);
        const withoutText = generateSelectorFor(injectedScript, targetElement, { ...options, noText: true });
        let tokens = [withText, withoutText];
        cacheAllowText.clear();
        cacheDisallowText.clear();
        if (withText && hasCSSIdToken(withText))
          tokens.push(generateSelectorFor(injectedScript, targetElement, { ...options, noCSSId: true }));
        if (withoutText && hasCSSIdToken(withoutText))
          tokens.push(generateSelectorFor(injectedScript, targetElement, { ...options, noText: true, noCSSId: true }));
        tokens = tokens.filter(Boolean);
        if (!tokens.length) {
          const css = cssFallback(injectedScript, targetElement, options);
          tokens.push(css);
          if (hasCSSIdToken(css))
            tokens.push(cssFallback(injectedScript, targetElement, { ...options, noCSSId: true }));
        }
        selectors = [...new Set(tokens.map((t2) => joinTokens(t2)))];
      } else {
        const targetTokens = generateSelectorFor(injectedScript, targetElement, options) || cssFallback(injectedScript, targetElement, options);
        selectors = [joinTokens(targetTokens)];
      }
    }
    const selector = selectors[0];
    const parsedSelector = injectedScript.parseSelector(selector);
    return {
      selector,
      selectors,
      elements: injectedScript.querySelectorAll(parsedSelector, options.root ?? targetElement.ownerDocument)
    };
  } finally {
    cacheAllowText.clear();
    cacheDisallowText.clear();
    endAriaCaches();
    injectedScript._evaluator.end();
  }
}
function filterRegexTokens(textCandidates) {
  return textCandidates.filter((c) => c[0].selector[0] !== "/");
}
function generateSelectorFor(injectedScript, targetElement, options) {
  if (options.root && !isInsideScope(options.root, targetElement))
    throw new Error(`Target element must belong to the root's subtree`);
  if (targetElement === options.root)
    return [{ engine: "css", selector: ":scope", score: 1 }];
  if (targetElement.ownerDocument.documentElement === targetElement)
    return [{ engine: "css", selector: "html", score: 1 }];
  const calculate = (element, allowText) => {
    const allowNthMatch = element === targetElement;
    let textCandidates = allowText ? buildTextCandidates(injectedScript, element, element === targetElement) : [];
    if (element !== targetElement) {
      textCandidates = filterRegexTokens(textCandidates);
    }
    const noTextCandidates = buildNoTextCandidates(injectedScript, element, options).filter((token) => !options.omitInternalEngines || !token.engine.startsWith("internal:")).map((token) => [token]);
    let result = chooseFirstSelector(injectedScript, options.root ?? targetElement.ownerDocument, element, [...textCandidates, ...noTextCandidates], allowNthMatch);
    textCandidates = filterRegexTokens(textCandidates);
    const checkWithText = (textCandidatesToUse) => {
      const allowParentText = allowText && !textCandidatesToUse.length;
      const candidates = [...textCandidatesToUse, ...noTextCandidates].filter((c) => {
        if (!result)
          return true;
        return combineScores(c) < combineScores(result);
      });
      let bestPossibleInParent = candidates[0];
      if (!bestPossibleInParent)
        return;
      for (let parent = parentElementOrShadowHost(element); parent && parent !== options.root; parent = parentElementOrShadowHost(parent)) {
        const parentTokens = calculateCached(parent, allowParentText);
        if (!parentTokens)
          continue;
        if (result && combineScores([...parentTokens, ...bestPossibleInParent]) >= combineScores(result))
          continue;
        bestPossibleInParent = chooseFirstSelector(injectedScript, parent, element, candidates, allowNthMatch);
        if (!bestPossibleInParent)
          return;
        const combined = [...parentTokens, ...bestPossibleInParent];
        if (!result || combineScores(combined) < combineScores(result))
          result = combined;
      }
    };
    checkWithText(textCandidates);
    if (element === targetElement && textCandidates.length)
      checkWithText([]);
    return result;
  };
  const calculateCached = (element, allowText) => {
    const cache = allowText ? cacheAllowText : cacheDisallowText;
    let value = cache.get(element);
    if (value === void 0) {
      value = calculate(element, allowText);
      cache.set(element, value);
    }
    return value;
  };
  return calculate(targetElement, !options.noText);
}
function buildNoTextCandidates(injectedScript, element, options) {
  const candidates = [];
  {
    for (const attr of ["data-testid", "data-test-id", "data-test"]) {
      if (attr !== options.testIdAttributeName && element.getAttribute(attr))
        candidates.push({ engine: "css", selector: `[${attr}=${quoteCSSAttributeValue(element.getAttribute(attr))}]`, score: kOtherTestIdScore });
    }
    if (!options.noCSSId) {
      const idAttr = element.getAttribute("id");
      if (idAttr && !isGuidLike(idAttr))
        candidates.push({ engine: "css", selector: makeSelectorForId(idAttr), score: kCSSIdScore });
    }
    candidates.push({ engine: "css", selector: cssEscape(element.nodeName.toLowerCase()), score: kCSSTagNameScore });
  }
  if (element.nodeName === "IFRAME") {
    for (const attribute of ["name", "title"]) {
      if (element.getAttribute(attribute))
        candidates.push({ engine: "css", selector: `${cssEscape(element.nodeName.toLowerCase())}[${attribute}=${quoteCSSAttributeValue(element.getAttribute(attribute))}]`, score: kIframeByAttributeScore });
    }
    if (element.getAttribute(options.testIdAttributeName))
      candidates.push({ engine: "css", selector: `[${options.testIdAttributeName}=${quoteCSSAttributeValue(element.getAttribute(options.testIdAttributeName))}]`, score: kTestIdScore });
    penalizeScoreForLength([candidates]);
    return candidates;
  }
  if (element.getAttribute(options.testIdAttributeName))
    candidates.push({ engine: "internal:testid", selector: `[${options.testIdAttributeName}=${escapeForAttributeSelector(element.getAttribute(options.testIdAttributeName), true)}]`, score: kTestIdScore });
  if (element.nodeName === "INPUT" || element.nodeName === "TEXTAREA") {
    const input = element;
    if (input.placeholder) {
      candidates.push({ engine: "internal:attr", selector: `[placeholder=${escapeForAttributeSelector(input.placeholder, true)}]`, score: kPlaceholderScoreExact });
      for (const alternative of suitableTextAlternatives(input.placeholder))
        candidates.push({ engine: "internal:attr", selector: `[placeholder=${escapeForAttributeSelector(alternative.text, false)}]`, score: kPlaceholderScore - alternative.scoreBouns });
    }
  }
  const labels = getElementLabels(injectedScript._evaluator._cacheText, element);
  for (const label of labels) {
    const labelText = label.normalized;
    candidates.push({ engine: "internal:label", selector: escapeForTextSelector(labelText, true), score: kLabelScoreExact });
    for (const alternative of suitableTextAlternatives(labelText))
      candidates.push({ engine: "internal:label", selector: escapeForTextSelector(alternative.text, false), score: kLabelScore - alternative.scoreBouns });
  }
  const ariaRole = getAriaRole(element);
  if (ariaRole && !["none", "presentation"].includes(ariaRole))
    candidates.push({ engine: "internal:role", selector: ariaRole, score: kRoleWithoutNameScore });
  if (element.getAttribute("name") && ["BUTTON", "FORM", "FIELDSET", "FRAME", "IFRAME", "INPUT", "KEYGEN", "OBJECT", "OUTPUT", "SELECT", "TEXTAREA", "MAP", "META", "PARAM"].includes(element.nodeName))
    candidates.push({ engine: "css", selector: `${cssEscape(element.nodeName.toLowerCase())}[name=${quoteCSSAttributeValue(element.getAttribute("name"))}]`, score: kCSSInputTypeNameScore });
  if (["INPUT", "TEXTAREA"].includes(element.nodeName) && element.getAttribute("type") !== "hidden") {
    if (element.getAttribute("type"))
      candidates.push({ engine: "css", selector: `${cssEscape(element.nodeName.toLowerCase())}[type=${quoteCSSAttributeValue(element.getAttribute("type"))}]`, score: kCSSInputTypeNameScore });
  }
  if (["INPUT", "TEXTAREA", "SELECT"].includes(element.nodeName) && element.getAttribute("type") !== "hidden")
    candidates.push({ engine: "css", selector: cssEscape(element.nodeName.toLowerCase()), score: kCSSInputTypeNameScore + 1 });
  penalizeScoreForLength([candidates]);
  return candidates;
}
function buildTextCandidates(injectedScript, element, isTargetNode) {
  if (element.nodeName === "SELECT")
    return [];
  const candidates = [];
  const title = element.getAttribute("title");
  if (title) {
    candidates.push([{ engine: "internal:attr", selector: `[title=${escapeForAttributeSelector(title, true)}]`, score: kTitleScoreExact }]);
    for (const alternative of suitableTextAlternatives(title))
      candidates.push([{ engine: "internal:attr", selector: `[title=${escapeForAttributeSelector(alternative.text, false)}]`, score: kTitleScore - alternative.scoreBouns }]);
  }
  const alt = element.getAttribute("alt");
  if (alt && ["APPLET", "AREA", "IMG", "INPUT"].includes(element.nodeName)) {
    candidates.push([{ engine: "internal:attr", selector: `[alt=${escapeForAttributeSelector(alt, true)}]`, score: kAltTextScoreExact }]);
    for (const alternative of suitableTextAlternatives(alt))
      candidates.push([{ engine: "internal:attr", selector: `[alt=${escapeForAttributeSelector(alternative.text, false)}]`, score: kAltTextScore - alternative.scoreBouns }]);
  }
  const text = elementText(injectedScript._evaluator._cacheText, element).normalized;
  if (text) {
    const alternatives = suitableTextAlternatives(text);
    if (isTargetNode) {
      if (text.length <= 80)
        candidates.push([{ engine: "internal:text", selector: escapeForTextSelector(text, true), score: kTextScoreExact }]);
      for (const alternative of alternatives)
        candidates.push([{ engine: "internal:text", selector: escapeForTextSelector(alternative.text, false), score: kTextScore - alternative.scoreBouns }]);
    }
    const cssToken = { engine: "css", selector: cssEscape(element.nodeName.toLowerCase()), score: kCSSTagNameScore };
    for (const alternative of alternatives)
      candidates.push([cssToken, { engine: "internal:has-text", selector: escapeForTextSelector(alternative.text, false), score: kTextScore - alternative.scoreBouns }]);
    if (text.length <= 80) {
      const re2 = new RegExp("^" + escapeRegExp(text) + "$");
      candidates.push([cssToken, { engine: "internal:has-text", selector: escapeForTextSelector(re2, false), score: kTextScoreRegex }]);
    }
  }
  const ariaRole = getAriaRole(element);
  if (ariaRole && !["none", "presentation"].includes(ariaRole)) {
    const ariaName = getElementAccessibleName(element, false);
    if (ariaName) {
      candidates.push([{ engine: "internal:role", selector: `${ariaRole}[name=${escapeForAttributeSelector(ariaName, true)}]`, score: kRoleWithNameScoreExact }]);
      for (const alternative of suitableTextAlternatives(ariaName))
        candidates.push([{ engine: "internal:role", selector: `${ariaRole}[name=${escapeForAttributeSelector(alternative.text, false)}]`, score: kRoleWithNameScore - alternative.scoreBouns }]);
    }
  }
  penalizeScoreForLength(candidates);
  return candidates;
}
function makeSelectorForId(id2) {
  return /^[a-zA-Z][a-zA-Z0-9\-\_]+$/.test(id2) ? "#" + id2 : `[id="${cssEscape(id2)}"]`;
}
function hasCSSIdToken(tokens) {
  return tokens.some((token) => token.engine === "css" && (token.selector.startsWith("#") || token.selector.startsWith('[id="')));
}
function cssFallback(injectedScript, targetElement, options) {
  const root = options.root ?? targetElement.ownerDocument;
  const tokens = [];
  function uniqueCSSSelector(prefix) {
    const path = tokens.slice();
    if (prefix)
      path.unshift(prefix);
    const selector = path.join(" > ");
    const parsedSelector = injectedScript.parseSelector(selector);
    const node = injectedScript.querySelector(parsedSelector, root, false);
    return node === targetElement ? selector : void 0;
  }
  function makeStrict(selector) {
    const token = { engine: "css", selector, score: kCSSFallbackScore };
    const parsedSelector = injectedScript.parseSelector(selector);
    const elements = injectedScript.querySelectorAll(parsedSelector, root);
    if (elements.length === 1)
      return [token];
    const nth = { engine: "nth", selector: String(elements.indexOf(targetElement)), score: kNthScore };
    return [token, nth];
  }
  for (let element = targetElement; element && element !== root; element = parentElementOrShadowHost(element)) {
    const nodeName = element.nodeName.toLowerCase();
    let bestTokenForLevel = "";
    if (element.id && !options.noCSSId) {
      const token = makeSelectorForId(element.id);
      const selector = uniqueCSSSelector(token);
      if (selector)
        return makeStrict(selector);
      bestTokenForLevel = token;
    }
    const parent = element.parentNode;
    const classes = [...element.classList];
    for (let i = 0; i < classes.length; ++i) {
      const token = "." + cssEscape(classes.slice(0, i + 1).join("."));
      const selector = uniqueCSSSelector(token);
      if (selector)
        return makeStrict(selector);
      if (!bestTokenForLevel && parent) {
        const sameClassSiblings = parent.querySelectorAll(token);
        if (sameClassSiblings.length === 1)
          bestTokenForLevel = token;
      }
    }
    if (parent) {
      const siblings = [...parent.children];
      const sameTagSiblings = siblings.filter((sibling) => sibling.nodeName.toLowerCase() === nodeName);
      const token = sameTagSiblings.indexOf(element) === 0 ? cssEscape(nodeName) : `${cssEscape(nodeName)}:nth-child(${1 + siblings.indexOf(element)})`;
      const selector = uniqueCSSSelector(token);
      if (selector)
        return makeStrict(selector);
      if (!bestTokenForLevel)
        bestTokenForLevel = token;
    } else if (!bestTokenForLevel) {
      bestTokenForLevel = cssEscape(nodeName);
    }
    tokens.unshift(bestTokenForLevel);
  }
  return makeStrict(uniqueCSSSelector());
}
function penalizeScoreForLength(groups) {
  for (const group of groups) {
    for (const token of group) {
      if (token.score > kBeginPenalizedScore && token.score < kEndPenalizedScore)
        token.score += Math.min(kTextScoreRange, token.selector.length / 10 | 0);
    }
  }
}
function joinTokens(tokens) {
  const parts = [];
  let lastEngine = "";
  for (const { engine, selector } of tokens) {
    if (parts.length && (lastEngine !== "css" || engine !== "css" || selector.startsWith(":nth-match(")))
      parts.push(">>");
    lastEngine = engine;
    if (engine === "css")
      parts.push(selector);
    else
      parts.push(`${engine}=${selector}`);
  }
  return parts.join(" ");
}
function combineScores(tokens) {
  let score = 0;
  for (let i = 0; i < tokens.length; i++)
    score += tokens[i].score * (tokens.length - i);
  return score;
}
function chooseFirstSelector(injectedScript, scope, targetElement, selectors, allowNthMatch) {
  const joined = selectors.map((tokens) => ({ tokens, score: combineScores(tokens) }));
  joined.sort((a, b) => a.score - b.score);
  let bestWithIndex = null;
  for (const { tokens } of joined) {
    const parsedSelector = injectedScript.parseSelector(joinTokens(tokens));
    const result = injectedScript.querySelectorAll(parsedSelector, scope);
    if (result[0] === targetElement && result.length === 1) {
      return tokens;
    }
    const index = result.indexOf(targetElement);
    if (!allowNthMatch || bestWithIndex || index === -1 || result.length > 5)
      continue;
    const nth = { engine: "nth", selector: String(index), score: kNthScore };
    bestWithIndex = [...tokens, nth];
  }
  return bestWithIndex;
}
function isGuidLike(id2) {
  let lastCharacterType;
  let transitionCount = 0;
  for (let i = 0; i < id2.length; ++i) {
    const c = id2[i];
    let characterType;
    if (c === "-" || c === "_")
      continue;
    if (c >= "a" && c <= "z")
      characterType = "lower";
    else if (c >= "A" && c <= "Z")
      characterType = "upper";
    else if (c >= "0" && c <= "9")
      characterType = "digit";
    else
      characterType = "other";
    if (characterType === "lower" && lastCharacterType === "upper") {
      lastCharacterType = characterType;
      continue;
    }
    if (lastCharacterType && lastCharacterType !== characterType)
      ++transitionCount;
    lastCharacterType = characterType;
  }
  return transitionCount >= id2.length / 4;
}
function trimWordBoundary(text, maxLength) {
  if (text.length <= maxLength)
    return text;
  text = text.substring(0, maxLength);
  const match = text.match(/^(.*)\b(.+?)$/);
  if (!match)
    return "";
  return match[1].trimEnd();
}
function suitableTextAlternatives(text) {
  let result = [];
  {
    const match = text.match(/^([\d.,]+)[^.,\w]/);
    const leadingNumberLength = match ? match[1].length : 0;
    if (leadingNumberLength) {
      const alt = trimWordBoundary(text.substring(leadingNumberLength).trimStart(), 80);
      result.push({ text: alt, scoreBouns: alt.length <= 30 ? 2 : 1 });
    }
  }
  {
    const match = text.match(/[^.,\w]([\d.,]+)$/);
    const trailingNumberLength = match ? match[1].length : 0;
    if (trailingNumberLength) {
      const alt = trimWordBoundary(text.substring(0, text.length - trailingNumberLength).trimEnd(), 80);
      result.push({ text: alt, scoreBouns: alt.length <= 30 ? 2 : 1 });
    }
  }
  if (text.length <= 30) {
    result.push({ text, scoreBouns: 0 });
  } else {
    result.push({ text: trimWordBoundary(text, 80), scoreBouns: 0 });
    result.push({ text: trimWordBoundary(text, 30), scoreBouns: 1 });
  }
  result = result.filter((r2) => r2.text);
  if (!result.length)
    result.push({ text: text.substring(0, 80), scoreBouns: 0 });
  return result;
}
const highlightCSS = '/**\n * Copyright (c) Microsoft Corporation.\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n:host {\n  font-size: 13px;\n  font-family: system-ui, "Ubuntu", "Droid Sans", sans-serif;\n  color: #333;\n}\n\nsvg {\n  position: absolute;\n  height: 0;\n}\n\nx-pw-tooltip {\n  backdrop-filter: blur(5px);\n  background-color: white;\n  border-radius: 6px;\n  box-shadow: 0 0.5rem 1.2rem rgba(0,0,0,.3);\n  display: none;\n  font-size: 12.8px;\n  font-weight: normal;\n  left: 0;\n  line-height: 1.5;\n  max-width: 600px;\n  position: absolute;\n  top: 0;\n  padding: 0;\n  flex-direction: column;\n  overflow: hidden;\n}\n\nx-pw-tooltip-line {\n  display: flex;\n  max-width: 600px;\n  padding: 6px;\n  user-select: none;\n  cursor: pointer;\n}\n\nx-pw-tooltip-line.selectable:hover {\n  background-color: hsl(0, 0%, 95%);\n  overflow: hidden;\n}\n\nx-pw-tooltip-footer {\n  display: flex;\n  max-width: 600px;\n  padding: 6px;\n  user-select: none;\n  color: #777;\n}\n\nx-pw-dialog {\n  background-color: white;\n  pointer-events: auto;\n  border-radius: 6px;\n  box-shadow: 0 0.5rem 1.2rem rgba(0,0,0,.3);\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  width: 400px;\n  height: 150px;\n  z-index: 10;\n  font-size: 13px;\n}\n\nx-pw-dialog-body {\n  display: flex;\n  flex-direction: column;\n  flex: auto;\n}\n\nx-pw-dialog-body label {\n  margin: 5px 8px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\nx-pw-highlight {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 0;\n}\n\nx-pw-action-point {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background: red;\n  border-radius: 10px;\n  margin: -10px 0 0 -10px;\n  z-index: 2;\n}\n\nx-pw-separator {\n  height: 1px;\n  margin: 6px 9px;\n  background: rgb(148 148 148 / 90%);\n}\n\nx-pw-tool-gripper {\n  height: 28px;\n  width: 24px;\n  margin: 2px 0;\n  cursor: grab;\n}\n\nx-pw-tool-gripper:active {\n  cursor: grabbing;\n}\n\nx-pw-tool-gripper > x-div {\n  width: 16px;\n  height: 16px;\n  margin: 6px 4px;\n  clip-path: url(#icon-gripper);\n  background-color: #555555;\n}\n\nx-pw-tools-list > label {\n  display: flex;\n  align-items: center;\n  margin: 0 10px;\n  user-select: none;\n}\n\nx-pw-tools-list {\n  display: flex;\n  width: 100%;\n  border-bottom: 1px solid #dddddd;\n}\n\nx-pw-tool-item {\n  pointer-events: auto;\n  cursor: pointer;\n  height: 28px;\n  width: 28px;\n  border-radius: 3px;\n}\n\nx-pw-tool-item:not(.disabled):hover {\n  background-color: hsl(0, 0%, 86%);\n}\n\nx-pw-tool-item.active {\n  background-color: rgba(138, 202, 228, 0.5);\n}\n\nx-pw-tool-item.active:not(.disabled):hover {\n  background-color: #8acae4c4;\n}\n\nx-pw-tool-item > x-div {\n  width: 16px;\n  height: 16px;\n  margin: 6px;\n  background-color: #3a3a3a;\n}\n\nx-pw-tool-item.disabled > x-div {\n  background-color: rgba(97, 97, 97, 0.5);\n  cursor: default;\n}\n\nx-pw-tool-item.record.active {\n  background-color: transparent;\n}\n\nx-pw-tool-item.record.active:hover {\n  background-color: hsl(0, 0%, 86%);\n}\n\nx-pw-tool-item.record.active > x-div {\n  background-color: #a1260d;\n}\n\nx-pw-tool-item.accept > x-div {\n  background-color: #388a34;\n}\n\nx-pw-tool-item.record > x-div {\n  /* codicon: circle-large-filled */\n  clip-path: url(#icon-circle-large-filled);\n}\n\nx-pw-tool-item.pick-locator > x-div {\n  /* codicon: inspect */\n  clip-path: url(#icon-inspect);\n}\n\nx-pw-tool-item.text > x-div {\n  /* codicon: whole-word */\n  clip-path: url(#icon-whole-word);\n}\n\nx-pw-tool-item.visibility > x-div {\n  /* codicon: eye */\n  clip-path: url(#icon-eye);\n}\n\nx-pw-tool-item.value > x-div {\n  /* codicon: symbol-constant */\n  clip-path: url(#icon-symbol-constant);\n}\n\nx-pw-tool-item.accept > x-div {\n  clip-path: url(#icon-check);\n}\n\nx-pw-tool-item.cancel > x-div {\n  clip-path: url(#icon-close);\n}\n\nx-pw-tool-item.succeeded > x-div {\n  /* codicon: pass */\n  clip-path: url(#icon-pass);\n  background-color: #388a34 !important;\n}\n\nx-pw-overlay {\n  position: absolute;\n  top: 0;\n  max-width: min-content;\n  z-index: 2147483647;\n  background: transparent;\n  pointer-events: auto;\n}\n\nx-pw-overlay x-pw-tools-list {\n  background-color: #ffffffdd;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 5px;\n  border-radius: 3px;\n  border-bottom: none;\n}\n\nx-pw-overlay x-pw-tool-item {\n  margin: 2px;\n}\n\ntextarea.text-editor {\n  font-family: system-ui,Ubuntu,Droid Sans,sans-serif;\n  flex: auto;\n  border: none;\n  margin: 6px 10px;\n  color: #333;\n  outline: 1px solid transparent!important;\n  resize: none;\n  padding: 0;\n  font-size: 13px;\n}\n\ntextarea.text-editor.does-not-match {\n  outline: 1px solid red !important;\n}\n\nx-div {\n  display: block;\n}\n\nx-spacer {\n  flex: auto;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n*[hidden] {\n  display: none !important;\n}\n\nx-locator-editor {\n  flex: none;\n  width: 100%;\n  height: 60px;\n  padding: 4px;\n  border-bottom: 1px solid #dddddd;\n  outline: 1px solid transparent;\n}\n\nx-locator-editor.does-not-match {\n  outline: 1px solid red;\n}\n\n.CodeMirror {\n  width: 100% !important;\n  height: 100% !important;\n}\n';
class Highlight {
  constructor(injectedScript) {
    this._highlightEntries = [];
    this._highlightOptions = {};
    this._language = "javascript";
    this._injectedScript = injectedScript;
    const document2 = injectedScript.document;
    this._isUnderTest = injectedScript.isUnderTest;
    this._glassPaneElement = document2.createElement("x-pw-glass");
    this._glassPaneElement.style.position = "fixed";
    this._glassPaneElement.style.top = "0";
    this._glassPaneElement.style.right = "0";
    this._glassPaneElement.style.bottom = "0";
    this._glassPaneElement.style.left = "0";
    this._glassPaneElement.style.zIndex = "2147483646";
    this._glassPaneElement.style.pointerEvents = "none";
    this._glassPaneElement.style.display = "flex";
    this._glassPaneElement.style.backgroundColor = "transparent";
    for (const eventName of ["click", "auxclick", "dragstart", "input", "keydown", "keyup", "pointerdown", "pointerup", "mousedown", "mouseup", "mouseleave", "focus", "scroll"]) {
      this._glassPaneElement.addEventListener(eventName, (e) => {
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (e.type === "click" && e.button === 0 && this._highlightOptions.tooltipListItemSelected)
          this._highlightOptions.tooltipListItemSelected(void 0);
      });
    }
    this._actionPointElement = document2.createElement("x-pw-action-point");
    this._actionPointElement.setAttribute("hidden", "true");
    this._glassPaneShadow = this._glassPaneElement.attachShadow({ mode: this._isUnderTest ? "open" : "closed" });
    if (typeof this._glassPaneShadow.adoptedStyleSheets.push === "function") {
      const sheet = new this._injectedScript.window.CSSStyleSheet();
      sheet.replaceSync(highlightCSS);
      this._glassPaneShadow.adoptedStyleSheets.push(sheet);
    } else {
      const styleElement = this._injectedScript.document.createElement("style");
      styleElement.textContent = highlightCSS;
      this._glassPaneShadow.appendChild(styleElement);
    }
    this._glassPaneShadow.appendChild(this._actionPointElement);
  }
  install() {
    this._injectedScript.document.documentElement.appendChild(this._glassPaneElement);
  }
  setLanguage(language) {
    this._language = language;
  }
  runHighlightOnRaf(selector) {
    if (this._rafRequest)
      cancelAnimationFrame(this._rafRequest);
    this.updateHighlight(this._injectedScript.querySelectorAll(selector, this._injectedScript.document.documentElement), { tooltipText: asLocator(this._language, stringifySelector(selector)) });
    this._rafRequest = this._injectedScript.builtinRequestAnimationFrame(() => this.runHighlightOnRaf(selector));
  }
  uninstall() {
    if (this._rafRequest)
      cancelAnimationFrame(this._rafRequest);
    this._glassPaneElement.remove();
  }
  showActionPoint(x2, y2) {
    this._actionPointElement.style.top = y2 + "px";
    this._actionPointElement.style.left = x2 + "px";
    this._actionPointElement.hidden = false;
  }
  hideActionPoint() {
    this._actionPointElement.hidden = true;
  }
  clearHighlight() {
    var _a, _b;
    for (const entry of this._highlightEntries) {
      (_a = entry.highlightElement) == null ? void 0 : _a.remove();
      (_b = entry.tooltipElement) == null ? void 0 : _b.remove();
    }
    this._highlightEntries = [];
    this._highlightOptions = {};
    this._glassPaneElement.style.pointerEvents = "none";
  }
  updateHighlight(elements, options) {
    this._innerUpdateHighlight(elements, options);
  }
  maskElements(elements, color) {
    this._innerUpdateHighlight(elements, { color });
  }
  _innerUpdateHighlight(elements, options) {
    let color = options.color;
    if (!color)
      color = elements.length > 1 ? "#f6b26b7f" : "#6fa8dc7f";
    if (this._highlightIsUpToDate(elements, options))
      return;
    this.clearHighlight();
    this._highlightOptions = options;
    this._glassPaneElement.style.pointerEvents = options.tooltipListItemSelected ? "initial" : "none";
    for (let i = 0; i < elements.length; ++i) {
      const highlightElement = this._createHighlightElement();
      this._glassPaneShadow.appendChild(highlightElement);
      let tooltipElement;
      if (options.tooltipList || options.tooltipText || options.tooltipFooter) {
        tooltipElement = this._injectedScript.document.createElement("x-pw-tooltip");
        this._glassPaneShadow.appendChild(tooltipElement);
        tooltipElement.style.top = "0";
        tooltipElement.style.left = "0";
        tooltipElement.style.display = "flex";
        let lines = [];
        if (options.tooltipList) {
          lines = options.tooltipList;
        } else if (options.tooltipText) {
          const suffix = elements.length > 1 ? ` [${i + 1} of ${elements.length}]` : "";
          lines = [options.tooltipText + suffix];
        }
        for (let index = 0; index < lines.length; index++) {
          const element = this._injectedScript.document.createElement("x-pw-tooltip-line");
          element.textContent = lines[index];
          tooltipElement.appendChild(element);
          if (options.tooltipListItemSelected) {
            element.classList.add("selectable");
            element.addEventListener("click", () => {
              var _a;
              return (_a = options.tooltipListItemSelected) == null ? void 0 : _a.call(options, index);
            });
          }
        }
        if (options.tooltipFooter) {
          const footer = this._injectedScript.document.createElement("x-pw-tooltip-footer");
          footer.textContent = options.tooltipFooter;
          tooltipElement.appendChild(footer);
        }
      }
      this._highlightEntries.push({ targetElement: elements[i], tooltipElement, highlightElement });
    }
    for (const entry of this._highlightEntries) {
      entry.box = entry.targetElement.getBoundingClientRect();
      if (!entry.tooltipElement)
        continue;
      const { anchorLeft, anchorTop } = this.tooltipPosition(entry.box, entry.tooltipElement);
      entry.tooltipTop = anchorTop;
      entry.tooltipLeft = anchorLeft;
    }
    for (const entry of this._highlightEntries) {
      if (entry.tooltipElement) {
        entry.tooltipElement.style.top = entry.tooltipTop + "px";
        entry.tooltipElement.style.left = entry.tooltipLeft + "px";
      }
      const box = entry.box;
      entry.highlightElement.style.backgroundColor = color;
      entry.highlightElement.style.left = box.x + "px";
      entry.highlightElement.style.top = box.y + "px";
      entry.highlightElement.style.width = box.width + "px";
      entry.highlightElement.style.height = box.height + "px";
      entry.highlightElement.style.display = "block";
      if (this._isUnderTest)
        console.error("Highlight box for test: " + JSON.stringify({ x: box.x, y: box.y, width: box.width, height: box.height }));
    }
  }
  firstBox() {
    var _a;
    return (_a = this._highlightEntries[0]) == null ? void 0 : _a.box;
  }
  tooltipPosition(box, tooltipElement) {
    const tooltipWidth = tooltipElement.offsetWidth;
    const tooltipHeight = tooltipElement.offsetHeight;
    const totalWidth = this._glassPaneElement.offsetWidth;
    const totalHeight = this._glassPaneElement.offsetHeight;
    let anchorLeft = box.left;
    if (anchorLeft + tooltipWidth > totalWidth - 5)
      anchorLeft = totalWidth - tooltipWidth - 5;
    let anchorTop = box.bottom + 5;
    if (anchorTop + tooltipHeight > totalHeight - 5) {
      if (box.top > tooltipHeight + 5) {
        anchorTop = box.top - tooltipHeight - 5;
      } else {
        anchorTop = totalHeight - 5 - tooltipHeight;
      }
    }
    return { anchorLeft, anchorTop };
  }
  _highlightIsUpToDate(elements, options) {
    var _a, _b;
    if (options.tooltipText !== this._highlightOptions.tooltipText)
      return false;
    if (options.tooltipListItemSelected !== this._highlightOptions.tooltipListItemSelected)
      return false;
    if (options.tooltipFooter !== this._highlightOptions.tooltipFooter)
      return false;
    if (((_a = options.tooltipList) == null ? void 0 : _a.length) !== ((_b = this._highlightOptions.tooltipList) == null ? void 0 : _b.length))
      return false;
    if (options.tooltipList && this._highlightOptions.tooltipList) {
      for (let i = 0; i < options.tooltipList.length; i++) {
        if (options.tooltipList[i] !== this._highlightOptions.tooltipList[i])
          return false;
      }
    }
    if (elements.length !== this._highlightEntries.length)
      return false;
    for (let i = 0; i < this._highlightEntries.length; ++i) {
      if (elements[i] !== this._highlightEntries[i].targetElement)
        return false;
      const oldBox = this._highlightEntries[i].box;
      if (!oldBox)
        return false;
      const box = elements[i].getBoundingClientRect();
      if (box.top !== oldBox.top || box.right !== oldBox.right || box.bottom !== oldBox.bottom || box.left !== oldBox.left)
        return false;
    }
    return true;
  }
  _createHighlightElement() {
    return this._injectedScript.document.createElement("x-pw-highlight");
  }
  appendChild(element) {
    this._glassPaneShadow.appendChild(element);
  }
}
const leafRoles = /* @__PURE__ */ new Set([
  "button",
  "checkbox",
  "combobox",
  "link",
  "textbox"
]);
let lastDom;
function generateSimpleDomNode(injectedScript, target) {
  return generate(injectedScript, target).node;
}
function selectorForSimpleDomNodeId(injectedScript, id2) {
  const element = lastDom == null ? void 0 : lastDom.elements.get(id2);
  if (!element)
    throw new Error(`Internal error: element with id "${id2}" not found`);
  return injectedScript.generateSelectorSimple(element);
}
function generate(injectedScript, target) {
  const normalizeWhitespace = (text) => text.replace(/[\s\n]+/g, (match) => match.includes("\n") ? "\n" : " ");
  const tokens = [];
  const elements = /* @__PURE__ */ new Map();
  let lastId = 0;
  let resultTarget;
  const visit = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      tokens.push(node.nodeValue);
      return;
    }
    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node;
      if (element.nodeName === "SCRIPT" || element.nodeName === "STYLE" || element.nodeName === "NOSCRIPT")
        return;
      if (injectedScript.utils.isElementVisible(element)) {
        const role = injectedScript.utils.getAriaRole(element);
        if (role && leafRoles.has(role)) {
          let value;
          if (element.nodeName === "INPUT" || element.nodeName === "TEXTAREA")
            value = element.value;
          const name = injectedScript.utils.getElementAccessibleName(element, false);
          const structuralId = String(++lastId);
          elements.set(structuralId, element);
          tokens.push(renderTag(injectedScript, role, name, structuralId, { value }));
          if (element === target) {
            const tagNoValue = renderTag(injectedScript, role, name, structuralId);
            resultTarget = { tag: tagNoValue, id: structuralId };
          }
          return;
        }
      }
      for (let child = element.firstChild; child; child = child.nextSibling)
        visit(child);
    }
  };
  injectedScript.utils.beginAriaCaches();
  try {
    visit(injectedScript.document.body);
  } finally {
    injectedScript.utils.endAriaCaches();
  }
  const dom = {
    markup: normalizeWhitespace(tokens.join(" ")),
    elements
  };
  if (target && !resultTarget)
    throw new Error("Target element is not in the simple DOM");
  lastDom = dom;
  return { dom, node: resultTarget ? { dom, ...resultTarget } : void 0 };
}
function renderTag(injectedScript, role, name, id2, params) {
  const escapedTextContent = injectedScript.utils.escapeHTML(name);
  const escapedValue = injectedScript.utils.escapeHTMLAttribute((params == null ? void 0 : params.value) || "");
  switch (role) {
    case "button":
      return `<button id="${id2}">${escapedTextContent}</button>`;
    case "link":
      return `<a id="${id2}">${escapedTextContent}</a>`;
    case "textbox":
      return `<input id="${id2}" title="${escapedTextContent}" value="${escapedValue}"></input>`;
  }
  return `<div role=${role} id="${id2}">${escapedTextContent}</div>`;
}
class InjectedScript {
  // eslint-disable-next-line no-restricted-globals
  constructor(window2, isUnderTest, sdkLanguage, testIdAttributeNameForStrictErrorAndConsoleCodegen, stableRafCount, browserName, customEngines) {
    this.onGlobalListenersRemoved = /* @__PURE__ */ new Set();
    this._testIdAttributeNameForStrictErrorAndConsoleCodegen = "data-testid";
    this.utils = {
      asLocator,
      beginAriaCaches,
      cacheNormalizedWhitespaces,
      elementText,
      endAriaCaches,
      escapeHTML: escapeHTML$1,
      escapeHTMLAttribute,
      getAriaRole,
      getElementAccessibleDescription,
      getElementAccessibleName,
      isElementVisible,
      isInsideScope,
      normalizeWhiteSpace
    };
    this.window = window2;
    this.document = window2.document;
    this.isUnderTest = isUnderTest;
    this._sdkLanguage = sdkLanguage;
    this._testIdAttributeNameForStrictErrorAndConsoleCodegen = testIdAttributeNameForStrictErrorAndConsoleCodegen;
    this._evaluator = new SelectorEvaluatorImpl(/* @__PURE__ */ new Map());
    this._engines = /* @__PURE__ */ new Map();
    this._engines.set("xpath", XPathEngine);
    this._engines.set("xpath:light", XPathEngine);
    this._engines.set("_react", ReactEngine);
    this._engines.set("_vue", VueEngine);
    this._engines.set("role", createRoleEngine(false));
    this._engines.set("text", this._createTextEngine(true, false));
    this._engines.set("text:light", this._createTextEngine(false, false));
    this._engines.set("id", this._createAttributeEngine("id", true));
    this._engines.set("id:light", this._createAttributeEngine("id", false));
    this._engines.set("data-testid", this._createAttributeEngine("data-testid", true));
    this._engines.set("data-testid:light", this._createAttributeEngine("data-testid", false));
    this._engines.set("data-test-id", this._createAttributeEngine("data-test-id", true));
    this._engines.set("data-test-id:light", this._createAttributeEngine("data-test-id", false));
    this._engines.set("data-test", this._createAttributeEngine("data-test", true));
    this._engines.set("data-test:light", this._createAttributeEngine("data-test", false));
    this._engines.set("css", this._createCSSEngine());
    this._engines.set("nth", { queryAll: () => [] });
    this._engines.set("visible", this._createVisibleEngine());
    this._engines.set("internal:control", this._createControlEngine());
    this._engines.set("internal:has", this._createHasEngine());
    this._engines.set("internal:has-not", this._createHasNotEngine());
    this._engines.set("internal:and", { queryAll: () => [] });
    this._engines.set("internal:or", { queryAll: () => [] });
    this._engines.set("internal:chain", this._createInternalChainEngine());
    this._engines.set("internal:label", this._createInternalLabelEngine());
    this._engines.set("internal:text", this._createTextEngine(true, true));
    this._engines.set("internal:has-text", this._createInternalHasTextEngine());
    this._engines.set("internal:has-not-text", this._createInternalHasNotTextEngine());
    this._engines.set("internal:attr", this._createNamedAttributeEngine());
    this._engines.set("internal:testid", this._createNamedAttributeEngine());
    this._engines.set("internal:role", createRoleEngine(true));
    for (const { name, engine } of customEngines)
      this._engines.set(name, engine);
    this._stableRafCount = stableRafCount;
    this._browserName = browserName;
    setBrowserName(browserName);
    this._setupGlobalListenersRemovalDetection();
    this._setupHitTargetInterceptors();
    if (isUnderTest)
      this.window.__injectedScript = this;
  }
  builtinSetTimeout(callback, timeout) {
    var _a;
    if ((_a = this.window.__pwClock) == null ? void 0 : _a.builtin)
      return this.window.__pwClock.builtin.setTimeout(callback, timeout);
    return setTimeout(callback, timeout);
  }
  builtinRequestAnimationFrame(callback) {
    var _a;
    if ((_a = this.window.__pwClock) == null ? void 0 : _a.builtin)
      return this.window.__pwClock.builtin.requestAnimationFrame(callback);
    return requestAnimationFrame(callback);
  }
  eval(expression) {
    return this.window.eval(expression);
  }
  testIdAttributeNameForStrictErrorAndConsoleCodegen() {
    return this._testIdAttributeNameForStrictErrorAndConsoleCodegen;
  }
  parseSelector(selector) {
    const result = parseSelector(selector);
    visitAllSelectorParts(result, (part) => {
      if (!this._engines.has(part.name))
        throw this.createStacklessError(`Unknown engine "${part.name}" while parsing selector ${selector}`);
    });
    return result;
  }
  generateSelector(targetElement, options) {
    return generateSelector(this, targetElement, options);
  }
  generateSelectorSimple(targetElement, options) {
    return generateSelector(this, targetElement, { ...options, testIdAttributeName: this._testIdAttributeNameForStrictErrorAndConsoleCodegen }).selector;
  }
  querySelector(selector, root, strict) {
    const result = this.querySelectorAll(selector, root);
    if (strict && result.length > 1)
      throw this.strictModeViolationError(selector, result);
    return result[0];
  }
  _queryNth(elements, part) {
    const list = [...elements];
    let nth = +part.body;
    if (nth === -1)
      nth = list.length - 1;
    return new Set(list.slice(nth, nth + 1));
  }
  _queryLayoutSelector(elements, part, originalRoot) {
    const name = part.name;
    const body = part.body;
    const result = [];
    const inner = this.querySelectorAll(body.parsed, originalRoot);
    for (const element of elements) {
      const score = layoutSelectorScore(name, element, inner, body.distance);
      if (score !== void 0)
        result.push({ element, score });
    }
    result.sort((a, b) => a.score - b.score);
    return new Set(result.map((r2) => r2.element));
  }
  querySelectorAll(selector, root) {
    if (selector.capture !== void 0) {
      if (selector.parts.some((part) => part.name === "nth"))
        throw this.createStacklessError(`Can't query n-th element in a request with the capture.`);
      const withHas = { parts: selector.parts.slice(0, selector.capture + 1) };
      if (selector.capture < selector.parts.length - 1) {
        const parsed = { parts: selector.parts.slice(selector.capture + 1) };
        const has = { name: "internal:has", body: { parsed }, source: stringifySelector(parsed) };
        withHas.parts.push(has);
      }
      return this.querySelectorAll(withHas, root);
    }
    if (!root["querySelectorAll"])
      throw this.createStacklessError("Node is not queryable.");
    if (selector.capture !== void 0) {
      throw this.createStacklessError("Internal error: there should not be a capture in the selector.");
    }
    if (root.nodeType === 11 && selector.parts.length === 1 && selector.parts[0].name === "css" && selector.parts[0].source === ":scope")
      return [root];
    this._evaluator.begin();
    try {
      let roots = /* @__PURE__ */ new Set([root]);
      for (const part of selector.parts) {
        if (part.name === "nth") {
          roots = this._queryNth(roots, part);
        } else if (part.name === "internal:and") {
          const andElements = this.querySelectorAll(part.body.parsed, root);
          roots = new Set(andElements.filter((e) => roots.has(e)));
        } else if (part.name === "internal:or") {
          const orElements = this.querySelectorAll(part.body.parsed, root);
          roots = new Set(sortInDOMOrder(/* @__PURE__ */ new Set([...roots, ...orElements])));
        } else if (kLayoutSelectorNames.includes(part.name)) {
          roots = this._queryLayoutSelector(roots, part, root);
        } else {
          const next = /* @__PURE__ */ new Set();
          for (const root2 of roots) {
            const all = this._queryEngineAll(part, root2);
            for (const one of all)
              next.add(one);
          }
          roots = next;
        }
      }
      return [...roots];
    } finally {
      this._evaluator.end();
    }
  }
  _queryEngineAll(part, root) {
    const result = this._engines.get(part.name).queryAll(root, part.body);
    for (const element of result) {
      if (!("nodeName" in element))
        throw this.createStacklessError(`Expected a Node but got ${Object.prototype.toString.call(element)}`);
    }
    return result;
  }
  _createAttributeEngine(attribute, shadow) {
    const toCSS = (selector) => {
      const css = `[${attribute}=${JSON.stringify(selector)}]`;
      return [{ simples: [{ selector: { css, functions: [] }, combinator: "" }] }];
    };
    return {
      queryAll: (root, selector) => {
        return this._evaluator.query({ scope: root, pierceShadow: shadow }, toCSS(selector));
      }
    };
  }
  _createCSSEngine() {
    return {
      queryAll: (root, body) => {
        return this._evaluator.query({ scope: root, pierceShadow: true }, body);
      }
    };
  }
  _createTextEngine(shadow, internal) {
    const queryAll = (root, selector) => {
      const { matcher, kind } = createTextMatcher(selector, internal);
      const result = [];
      let lastDidNotMatchSelf = null;
      const appendElement = (element) => {
        if (kind === "lax" && lastDidNotMatchSelf && lastDidNotMatchSelf.contains(element))
          return false;
        const matches = elementMatchesText(this._evaluator._cacheText, element, matcher);
        if (matches === "none")
          lastDidNotMatchSelf = element;
        if (matches === "self" || matches === "selfAndChildren" && kind === "strict" && !internal)
          result.push(element);
      };
      if (root.nodeType === Node.ELEMENT_NODE)
        appendElement(root);
      const elements = this._evaluator._queryCSS({ scope: root, pierceShadow: shadow }, "*");
      for (const element of elements)
        appendElement(element);
      return result;
    };
    return { queryAll };
  }
  _createInternalHasTextEngine() {
    return {
      queryAll: (root, selector) => {
        if (root.nodeType !== 1)
          return [];
        const element = root;
        const text = elementText(this._evaluator._cacheText, element);
        const { matcher } = createTextMatcher(selector, true);
        return matcher(text) ? [element] : [];
      }
    };
  }
  _createInternalHasNotTextEngine() {
    return {
      queryAll: (root, selector) => {
        if (root.nodeType !== 1)
          return [];
        const element = root;
        const text = elementText(this._evaluator._cacheText, element);
        const { matcher } = createTextMatcher(selector, true);
        return matcher(text) ? [] : [element];
      }
    };
  }
  _createInternalLabelEngine() {
    return {
      queryAll: (root, selector) => {
        const { matcher } = createTextMatcher(selector, true);
        const allElements = this._evaluator._queryCSS({ scope: root, pierceShadow: true }, "*");
        return allElements.filter((element) => {
          return getElementLabels(this._evaluator._cacheText, element).some((label) => matcher(label));
        });
      }
    };
  }
  _createNamedAttributeEngine() {
    const queryAll = (root, selector) => {
      const parsed = parseAttributeSelector(selector, true);
      if (parsed.name || parsed.attributes.length !== 1)
        throw new Error("Malformed attribute selector: " + selector);
      const { name, value, caseSensitive } = parsed.attributes[0];
      const lowerCaseValue = caseSensitive ? null : value.toLowerCase();
      let matcher;
      if (value instanceof RegExp)
        matcher = (s) => !!s.match(value);
      else if (caseSensitive)
        matcher = (s) => s === value;
      else
        matcher = (s) => s.toLowerCase().includes(lowerCaseValue);
      const elements = this._evaluator._queryCSS({ scope: root, pierceShadow: true }, `[${name}]`);
      return elements.filter((e) => matcher(e.getAttribute(name)));
    };
    return { queryAll };
  }
  _createControlEngine() {
    return {
      queryAll(root, body) {
        if (body === "enter-frame")
          return [];
        if (body === "return-empty")
          return [];
        if (body === "component") {
          if (root.nodeType !== 1)
            return [];
          return [root.childElementCount === 1 ? root.firstElementChild : root];
        }
        throw new Error(`Internal error, unknown internal:control selector ${body}`);
      }
    };
  }
  _createHasEngine() {
    const queryAll = (root, body) => {
      if (root.nodeType !== 1)
        return [];
      const has = !!this.querySelector(body.parsed, root, false);
      return has ? [root] : [];
    };
    return { queryAll };
  }
  _createHasNotEngine() {
    const queryAll = (root, body) => {
      if (root.nodeType !== 1)
        return [];
      const has = !!this.querySelector(body.parsed, root, false);
      return has ? [] : [root];
    };
    return { queryAll };
  }
  _createVisibleEngine() {
    const queryAll = (root, body) => {
      if (root.nodeType !== 1)
        return [];
      return isElementVisible(root) === Boolean(body) ? [root] : [];
    };
    return { queryAll };
  }
  _createInternalChainEngine() {
    const queryAll = (root, body) => {
      return this.querySelectorAll(body.parsed, root);
    };
    return { queryAll };
  }
  extend(source, params) {
    const constrFunction = this.window.eval(`
    (() => {
      const module = {};
      ${source}
      return module.exports.default();
    })()`);
    return new constrFunction(this, params);
  }
  async viewportRatio(element) {
    return await new Promise((resolve) => {
      const observer = new IntersectionObserver((entries) => {
        resolve(entries[0].intersectionRatio);
        observer.disconnect();
      });
      observer.observe(element);
      this.builtinRequestAnimationFrame(() => {
      });
    });
  }
  getElementBorderWidth(node) {
    if (node.nodeType !== Node.ELEMENT_NODE || !node.ownerDocument || !node.ownerDocument.defaultView)
      return { left: 0, top: 0 };
    const style = node.ownerDocument.defaultView.getComputedStyle(node);
    return { left: parseInt(style.borderLeftWidth || "", 10), top: parseInt(style.borderTopWidth || "", 10) };
  }
  describeIFrameStyle(iframe) {
    if (!iframe.ownerDocument || !iframe.ownerDocument.defaultView)
      return "error:notconnected";
    const defaultView = iframe.ownerDocument.defaultView;
    for (let e = iframe; e; e = parentElementOrShadowHost(e)) {
      if (defaultView.getComputedStyle(e).transform !== "none")
        return "transformed";
    }
    const iframeStyle = defaultView.getComputedStyle(iframe);
    return {
      left: parseInt(iframeStyle.borderLeftWidth || "", 10) + parseInt(iframeStyle.paddingLeft || "", 10),
      top: parseInt(iframeStyle.borderTopWidth || "", 10) + parseInt(iframeStyle.paddingTop || "", 10)
    };
  }
  retarget(node, behavior) {
    let element = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
    if (!element)
      return null;
    if (behavior === "none")
      return element;
    if (!element.matches("input, textarea, select") && !element.isContentEditable) {
      if (behavior === "button-link")
        element = element.closest("button, [role=button], a, [role=link]") || element;
      else
        element = element.closest("button, [role=button], [role=checkbox], [role=radio]") || element;
    }
    if (behavior === "follow-label") {
      if (!element.matches("a, input, textarea, button, select, [role=link], [role=button], [role=checkbox], [role=radio]") && !element.isContentEditable) {
        element = element.closest("label") || element;
      }
      if (element.nodeName === "LABEL")
        element = element.control || element;
    }
    return element;
  }
  async checkElementStates(node, states) {
    if (states.includes("stable")) {
      const stableResult = await this._checkElementIsStable(node);
      if (stableResult === false)
        return { missingState: "stable" };
      if (stableResult === "error:notconnected")
        return stableResult;
    }
    for (const state of states) {
      if (state !== "stable") {
        const result = this.elementState(node, state);
        if (result === false)
          return { missingState: state };
        if (result === "error:notconnected")
          return result;
      }
    }
  }
  async _checkElementIsStable(node) {
    const continuePolling = Symbol("continuePolling");
    let lastRect;
    let stableRafCounter = 0;
    let lastTime = 0;
    const check = () => {
      const element = this.retarget(node, "no-follow-label");
      if (!element)
        return "error:notconnected";
      const time = performance.now();
      if (this._stableRafCount > 1 && time - lastTime < 15)
        return continuePolling;
      lastTime = time;
      const clientRect = element.getBoundingClientRect();
      const rect = { x: clientRect.top, y: clientRect.left, width: clientRect.width, height: clientRect.height };
      if (lastRect) {
        const samePosition = rect.x === lastRect.x && rect.y === lastRect.y && rect.width === lastRect.width && rect.height === lastRect.height;
        if (!samePosition)
          return false;
        if (++stableRafCounter >= this._stableRafCount)
          return true;
      }
      lastRect = rect;
      return continuePolling;
    };
    let fulfill;
    let reject;
    const result = new Promise((f2, r2) => {
      fulfill = f2;
      reject = r2;
    });
    const raf = () => {
      try {
        const success = check();
        if (success !== continuePolling)
          fulfill(success);
        else
          this.builtinRequestAnimationFrame(raf);
      } catch (e) {
        reject(e);
      }
    };
    this.builtinRequestAnimationFrame(raf);
    return result;
  }
  elementState(node, state) {
    const element = this.retarget(node, ["stable", "visible", "hidden"].includes(state) ? "none" : "follow-label");
    if (!element || !element.isConnected) {
      if (state === "hidden")
        return true;
      return "error:notconnected";
    }
    if (state === "visible")
      return isElementVisible(element);
    if (state === "hidden")
      return !isElementVisible(element);
    const disabled = getAriaDisabled(element);
    if (state === "disabled")
      return disabled;
    if (state === "enabled")
      return !disabled;
    const editable = !(["INPUT", "TEXTAREA", "SELECT"].includes(element.nodeName) && element.hasAttribute("readonly"));
    if (state === "editable")
      return !disabled && editable;
    if (state === "checked" || state === "unchecked") {
      const need = state === "checked";
      const checked = getChecked(element, false);
      if (checked === "error")
        throw this.createStacklessError("Not a checkbox or radio button");
      return need === checked;
    }
    throw this.createStacklessError(`Unexpected element state "${state}"`);
  }
  selectOptions(node, optionsToSelect) {
    const element = this.retarget(node, "follow-label");
    if (!element)
      return "error:notconnected";
    if (element.nodeName.toLowerCase() !== "select")
      throw this.createStacklessError("Element is not a <select> element");
    const select = element;
    const options = [...select.options];
    const selectedOptions = [];
    let remainingOptionsToSelect = optionsToSelect.slice();
    for (let index = 0; index < options.length; index++) {
      const option = options[index];
      const filter = (optionToSelect) => {
        if (optionToSelect instanceof Node)
          return option === optionToSelect;
        let matches = true;
        if (optionToSelect.valueOrLabel !== void 0)
          matches = matches && (optionToSelect.valueOrLabel === option.value || optionToSelect.valueOrLabel === option.label);
        if (optionToSelect.value !== void 0)
          matches = matches && optionToSelect.value === option.value;
        if (optionToSelect.label !== void 0)
          matches = matches && optionToSelect.label === option.label;
        if (optionToSelect.index !== void 0)
          matches = matches && optionToSelect.index === index;
        return matches;
      };
      if (!remainingOptionsToSelect.some(filter))
        continue;
      selectedOptions.push(option);
      if (select.multiple) {
        remainingOptionsToSelect = remainingOptionsToSelect.filter((o) => !filter(o));
      } else {
        remainingOptionsToSelect = [];
        break;
      }
    }
    if (remainingOptionsToSelect.length)
      return "error:optionsnotfound";
    select.value = void 0;
    selectedOptions.forEach((option) => option.selected = true);
    select.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
    select.dispatchEvent(new Event("change", { bubbles: true }));
    return selectedOptions.map((option) => option.value);
  }
  fill(node, value) {
    const element = this.retarget(node, "follow-label");
    if (!element)
      return "error:notconnected";
    if (element.nodeName.toLowerCase() === "input") {
      const input = element;
      const type = input.type.toLowerCase();
      const kInputTypesToSetValue = /* @__PURE__ */ new Set(["color", "date", "time", "datetime-local", "month", "range", "week"]);
      const kInputTypesToTypeInto = /* @__PURE__ */ new Set(["", "email", "number", "password", "search", "tel", "text", "url"]);
      if (!kInputTypesToTypeInto.has(type) && !kInputTypesToSetValue.has(type))
        throw this.createStacklessError(`Input of type "${type}" cannot be filled`);
      if (type === "number") {
        value = value.trim();
        if (isNaN(Number(value)))
          throw this.createStacklessError("Cannot type text into input[type=number]");
      }
      if (kInputTypesToSetValue.has(type)) {
        value = value.trim();
        input.focus();
        input.value = value;
        if (input.value !== value)
          throw this.createStacklessError("Malformed value");
        element.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
        element.dispatchEvent(new Event("change", { bubbles: true }));
        return "done";
      }
    } else if (element.nodeName.toLowerCase() === "textarea")
      ;
    else if (!element.isContentEditable) {
      throw this.createStacklessError("Element is not an <input>, <textarea> or [contenteditable] element");
    }
    this.selectText(element);
    return "needsinput";
  }
  selectText(node) {
    const element = this.retarget(node, "follow-label");
    if (!element)
      return "error:notconnected";
    if (element.nodeName.toLowerCase() === "input") {
      const input = element;
      input.select();
      input.focus();
      return "done";
    }
    if (element.nodeName.toLowerCase() === "textarea") {
      const textarea = element;
      textarea.selectionStart = 0;
      textarea.selectionEnd = textarea.value.length;
      textarea.focus();
      return "done";
    }
    const range = element.ownerDocument.createRange();
    range.selectNodeContents(element);
    const selection = element.ownerDocument.defaultView.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
    element.focus();
    return "done";
  }
  _activelyFocused(node) {
    const activeElement = node.getRootNode().activeElement;
    const isFocused = activeElement === node && !!node.ownerDocument && node.ownerDocument.hasFocus();
    return { activeElement, isFocused };
  }
  focusNode(node, resetSelectionIfNotFocused) {
    if (!node.isConnected)
      return "error:notconnected";
    if (node.nodeType !== Node.ELEMENT_NODE)
      throw this.createStacklessError("Node is not an element");
    const { activeElement, isFocused: wasFocused } = this._activelyFocused(node);
    if (node.isContentEditable && !wasFocused && activeElement && activeElement.blur) {
      activeElement.blur();
    }
    node.focus();
    node.focus();
    if (resetSelectionIfNotFocused && !wasFocused && node.nodeName.toLowerCase() === "input") {
      try {
        const input = node;
        input.setSelectionRange(0, 0);
      } catch (e) {
      }
    }
    return "done";
  }
  blurNode(node) {
    if (!node.isConnected)
      return "error:notconnected";
    if (node.nodeType !== Node.ELEMENT_NODE)
      throw this.createStacklessError("Node is not an element");
    node.blur();
    return "done";
  }
  setInputFiles(node, payloads) {
    if (node.nodeType !== Node.ELEMENT_NODE)
      return "Node is not of type HTMLElement";
    const element = node;
    if (element.nodeName !== "INPUT")
      return "Not an <input> element";
    const input = element;
    const type = (input.getAttribute("type") || "").toLowerCase();
    if (type !== "file")
      return "Not an input[type=file] element";
    const files = payloads.map((file) => {
      const bytes = Uint8Array.from(atob(file.buffer), (c) => c.charCodeAt(0));
      return new File([bytes], file.name, { type: file.mimeType, lastModified: file.lastModifiedMs });
    });
    const dt = new DataTransfer();
    for (const file of files)
      dt.items.add(file);
    input.files = dt.files;
    input.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  }
  expectHitTarget(hitPoint, targetElement) {
    const roots = [];
    let parentElement = targetElement;
    while (parentElement) {
      const root = enclosingShadowRootOrDocument(parentElement);
      if (!root)
        break;
      roots.push(root);
      if (root.nodeType === 9)
        break;
      parentElement = root.host;
    }
    let hitElement;
    for (let index = roots.length - 1; index >= 0; index--) {
      const root = roots[index];
      const elements = root.elementsFromPoint(hitPoint.x, hitPoint.y);
      const singleElement = root.elementFromPoint(hitPoint.x, hitPoint.y);
      if (singleElement && elements[0] && parentElementOrShadowHost(singleElement) === elements[0]) {
        const style = this.window.getComputedStyle(singleElement);
        if ((style == null ? void 0 : style.display) === "contents") {
          elements.unshift(singleElement);
        }
      }
      if (elements[0] && elements[0].shadowRoot === root && elements[1] === singleElement) {
        elements.shift();
      }
      const innerElement = elements[0];
      if (!innerElement)
        break;
      hitElement = innerElement;
      if (index && innerElement !== roots[index - 1].host)
        break;
    }
    const hitParents = [];
    while (hitElement && hitElement !== targetElement) {
      hitParents.push(hitElement);
      hitElement = parentElementOrShadowHost(hitElement);
    }
    if (hitElement === targetElement)
      return "done";
    const hitTargetDescription = this.previewNode(hitParents[0] || this.document.documentElement);
    let rootHitTargetDescription;
    let element = targetElement;
    while (element) {
      const index = hitParents.indexOf(element);
      if (index !== -1) {
        if (index > 1)
          rootHitTargetDescription = this.previewNode(hitParents[index - 1]);
        break;
      }
      element = parentElementOrShadowHost(element);
    }
    if (rootHitTargetDescription)
      return { hitTargetDescription: `${hitTargetDescription} from ${rootHitTargetDescription} subtree` };
    return { hitTargetDescription };
  }
  // Life of a pointer action, for example click.
  //
  // 0. Retry items 1 and 2 while action fails due to navigation or element being detached.
  //   1. Resolve selector to an element.
  //   2. Retry the following steps until the element is detached or frame navigates away.
  //     2a. Wait for the element to be stable (not moving), visible and enabled.
  //     2b. Scroll element into view. Scrolling alternates between:
  //         - Built-in protocol scrolling.
  //         - Anchoring to the top/left, bottom/right and center/center.
  //         This is to scroll elements from under sticky headers/footers.
  //     2c. Click point is calculated, either based on explicitly specified position,
  //         or some visible point of the element based on protocol content quads.
  //     2d. Click point relative to page viewport is converted relative to the target iframe
  //         for the next hit-point check.
  //     2e. (injected) Hit target at the click point must be a descendant of the target element.
  //         This prevents mis-clicking in edge cases like <iframe> overlaying the target.
  //     2f. (injected) Events specific for click (or some other action type) are intercepted on
  //         the Window with capture:true. See 2i for details.
  //         Note: this step is skipped for drag&drop (see inline comments for the reason).
  //     2g. Necessary keyboard modifiers are pressed.
  //     2h. Click event is issued (mousemove + mousedown + mouseup).
  //     2i. (injected) For each event, we check that hit target at the event point
  //         is a descendant of the target element.
  //         This guarantees no race between issuing the event and handling it in the page,
  //         for example due to layout shift.
  //         When hit target check fails, we block all future events in the page.
  //     2j. Keyboard modifiers are restored.
  //     2k. (injected) Event interceptor is removed.
  //     2l. All navigations triggered between 2g-2k are awaited to be either committed or canceled.
  //     2m. If failed, wait for increasing amount of time before the next retry.
  setupHitTargetInterceptor(node, action, hitPoint, blockAllEvents) {
    const element = this.retarget(node, "button-link");
    if (!element || !element.isConnected)
      return "error:notconnected";
    if (hitPoint) {
      const preliminaryResult = this.expectHitTarget(hitPoint, element);
      if (preliminaryResult !== "done")
        return preliminaryResult.hitTargetDescription;
    }
    if (action === "drag")
      return { stop: () => "done" };
    const events = {
      "hover": kHoverHitTargetInterceptorEvents,
      "tap": kTapHitTargetInterceptorEvents,
      "mouse": kMouseHitTargetInterceptorEvents
    }[action];
    let result;
    const listener = (event) => {
      if (!events.has(event.type))
        return;
      if (!event.isTrusted)
        return;
      const point = !!this.window.TouchEvent && event instanceof this.window.TouchEvent ? event.touches[0] : event;
      if (result === void 0 && point)
        result = this.expectHitTarget({ x: point.clientX, y: point.clientY }, element);
      if (blockAllEvents || result !== "done" && result !== void 0) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
      }
    };
    const stop = () => {
      if (this._hitTargetInterceptor === listener)
        this._hitTargetInterceptor = void 0;
      return result || "done";
    };
    this._hitTargetInterceptor = listener;
    return { stop };
  }
  dispatchEvent(node, type, eventInit) {
    let event;
    eventInit = { bubbles: true, cancelable: true, composed: true, ...eventInit };
    switch (eventType.get(type)) {
      case "mouse":
        event = new MouseEvent(type, eventInit);
        break;
      case "keyboard":
        event = new KeyboardEvent(type, eventInit);
        break;
      case "touch":
        event = new TouchEvent(type, eventInit);
        break;
      case "pointer":
        event = new PointerEvent(type, eventInit);
        break;
      case "focus":
        event = new FocusEvent(type, eventInit);
        break;
      case "drag":
        event = new DragEvent(type, eventInit);
        break;
      case "wheel":
        event = new WheelEvent(type, eventInit);
        break;
      case "deviceorientation":
        try {
          event = new DeviceOrientationEvent(type, eventInit);
        } catch {
          const { bubbles, cancelable, alpha, beta, gamma, absolute } = eventInit;
          event = this.document.createEvent("DeviceOrientationEvent");
          event.initDeviceOrientationEvent(type, bubbles, cancelable, alpha, beta, gamma, absolute);
        }
        break;
      case "devicemotion":
        try {
          event = new DeviceMotionEvent(type, eventInit);
        } catch {
          const { bubbles, cancelable, acceleration, accelerationIncludingGravity, rotationRate, interval } = eventInit;
          event = this.document.createEvent("DeviceMotionEvent");
          event.initDeviceMotionEvent(type, bubbles, cancelable, acceleration, accelerationIncludingGravity, rotationRate, interval);
        }
        break;
      default:
        event = new Event(type, eventInit);
        break;
    }
    node.dispatchEvent(event);
  }
  previewNode(node) {
    if (node.nodeType === Node.TEXT_NODE)
      return oneLine(`#text=${node.nodeValue || ""}`);
    if (node.nodeType !== Node.ELEMENT_NODE)
      return oneLine(`<${node.nodeName.toLowerCase()} />`);
    const element = node;
    const attrs = [];
    for (let i = 0; i < element.attributes.length; i++) {
      const { name, value } = element.attributes[i];
      if (name === "style")
        continue;
      if (!value && booleanAttributes.has(name))
        attrs.push(` ${name}`);
      else
        attrs.push(` ${name}="${value}"`);
    }
    attrs.sort((a, b) => a.length - b.length);
    const attrText = trimStringWithEllipsis(attrs.join(""), 500);
    if (autoClosingTags.has(element.nodeName))
      return oneLine(`<${element.nodeName.toLowerCase()}${attrText}/>`);
    const children = element.childNodes;
    let onlyText = false;
    if (children.length <= 5) {
      onlyText = true;
      for (let i = 0; i < children.length; i++)
        onlyText = onlyText && children[i].nodeType === Node.TEXT_NODE;
    }
    const text = onlyText ? element.textContent || "" : children.length ? "…" : "";
    return oneLine(`<${element.nodeName.toLowerCase()}${attrText}>${trimStringWithEllipsis(text, 50)}</${element.nodeName.toLowerCase()}>`);
  }
  strictModeViolationError(selector, matches) {
    const infos = matches.slice(0, 10).map((m2) => ({
      preview: this.previewNode(m2),
      selector: this.generateSelectorSimple(m2)
    }));
    const lines = infos.map((info, i) => `
    ${i + 1}) ${info.preview} aka ${asLocator(this._sdkLanguage, info.selector)}`);
    if (infos.length < matches.length)
      lines.push("\n    ...");
    return this.createStacklessError(`strict mode violation: ${asLocator(this._sdkLanguage, stringifySelector(selector))} resolved to ${matches.length} elements:${lines.join("")}
`);
  }
  createStacklessError(message) {
    if (this._browserName === "firefox") {
      const error2 = new Error("Error: " + message);
      error2.stack = "";
      return error2;
    }
    const error = new Error(message);
    delete error.stack;
    return error;
  }
  createHighlight() {
    return new Highlight(this);
  }
  maskSelectors(selectors, color) {
    if (this._highlight)
      this.hideHighlight();
    this._highlight = new Highlight(this);
    this._highlight.install();
    const elements = [];
    for (const selector of selectors)
      elements.push(this.querySelectorAll(selector, this.document.documentElement));
    this._highlight.maskElements(elements.flat(), color);
  }
  highlight(selector) {
    if (!this._highlight) {
      this._highlight = new Highlight(this);
      this._highlight.install();
    }
    this._highlight.runHighlightOnRaf(selector);
  }
  hideHighlight() {
    if (this._highlight) {
      this._highlight.uninstall();
      delete this._highlight;
    }
  }
  markTargetElements(markedElements, callId) {
    const customEvent = new CustomEvent("__playwright_target__", {
      bubbles: true,
      cancelable: true,
      detail: callId,
      composed: true
    });
    for (const element of markedElements)
      element.dispatchEvent(customEvent);
  }
  _setupGlobalListenersRemovalDetection() {
    const customEventName = "__playwright_global_listeners_check__";
    let seenEvent = false;
    const handleCustomEvent = () => seenEvent = true;
    this.window.addEventListener(customEventName, handleCustomEvent);
    new MutationObserver((entries) => {
      const newDocumentElement = entries.some((entry) => Array.from(entry.addedNodes).includes(this.document.documentElement));
      if (!newDocumentElement)
        return;
      seenEvent = false;
      this.window.dispatchEvent(new CustomEvent(customEventName));
      if (seenEvent)
        return;
      this.window.addEventListener(customEventName, handleCustomEvent);
      for (const callback of this.onGlobalListenersRemoved)
        callback();
    }).observe(this.document, { childList: true });
  }
  _setupHitTargetInterceptors() {
    const listener = (event) => {
      var _a;
      return (_a = this._hitTargetInterceptor) == null ? void 0 : _a.call(this, event);
    };
    const addHitTargetInterceptorListeners = () => {
      for (const event of kAllHitTargetInterceptorEvents)
        this.window.addEventListener(event, listener, { capture: true, passive: false });
    };
    addHitTargetInterceptorListeners();
    this.onGlobalListenersRemoved.add(addHitTargetInterceptorListeners);
  }
  async expect(element, options, elements) {
    const isArray = options.expression === "to.have.count" || options.expression.endsWith(".array");
    if (isArray)
      return this.expectArray(elements, options);
    if (!element) {
      if (!options.isNot && options.expression === "to.be.hidden")
        return { matches: true };
      if (options.isNot && options.expression === "to.be.visible")
        return { matches: false };
      if (!options.isNot && options.expression === "to.be.detached")
        return { matches: true };
      if (options.isNot && options.expression === "to.be.attached")
        return { matches: false };
      if (options.isNot && options.expression === "to.be.in.viewport")
        return { matches: false };
      return { matches: options.isNot, missingReceived: true };
    }
    return await this.expectSingleElement(element, options);
  }
  async expectSingleElement(element, options) {
    var _a;
    const expression = options.expression;
    {
      let elementState;
      if (expression === "to.have.attribute") {
        elementState = element.hasAttribute(options.expressionArg);
      } else if (expression === "to.be.checked") {
        elementState = this.elementState(element, "checked");
      } else if (expression === "to.be.unchecked") {
        elementState = this.elementState(element, "unchecked");
      } else if (expression === "to.be.disabled") {
        elementState = this.elementState(element, "disabled");
      } else if (expression === "to.be.editable") {
        elementState = this.elementState(element, "editable");
      } else if (expression === "to.be.readonly") {
        elementState = !this.elementState(element, "editable");
      } else if (expression === "to.be.empty") {
        if (element.nodeName === "INPUT" || element.nodeName === "TEXTAREA")
          elementState = !element.value;
        else
          elementState = !((_a = element.textContent) == null ? void 0 : _a.trim());
      } else if (expression === "to.be.enabled") {
        elementState = this.elementState(element, "enabled");
      } else if (expression === "to.be.focused") {
        elementState = this._activelyFocused(element).isFocused;
      } else if (expression === "to.be.hidden") {
        elementState = this.elementState(element, "hidden");
      } else if (expression === "to.be.visible") {
        elementState = this.elementState(element, "visible");
      } else if (expression === "to.be.attached") {
        elementState = true;
      } else if (expression === "to.be.detached") {
        elementState = false;
      }
      if (elementState !== void 0) {
        if (elementState === "error:notcheckbox")
          throw this.createStacklessError("Element is not a checkbox");
        if (elementState === "error:notconnected")
          throw this.createStacklessError("Element is not connected");
        return { received: elementState, matches: elementState };
      }
    }
    {
      if (expression === "to.have.property") {
        let target = element;
        const properties = options.expressionArg.split(".");
        for (let i = 0; i < properties.length - 1; i++) {
          if (typeof target !== "object" || !(properties[i] in target))
            return { received: void 0, matches: false };
          target = target[properties[i]];
        }
        const received = target[properties[properties.length - 1]];
        const matches = deepEquals(received, options.expectedValue);
        return { received, matches };
      }
    }
    {
      if (expression === "to.be.in.viewport") {
        const ratio = await this.viewportRatio(element);
        return { received: `viewport ratio ${ratio}`, matches: ratio > 0 && ratio > (options.expectedNumber ?? 0) - 1e-9 };
      }
    }
    {
      if (expression === "to.have.values") {
        element = this.retarget(element, "follow-label");
        if (element.nodeName !== "SELECT" || !element.multiple)
          throw this.createStacklessError("Not a select element with a multiple attribute");
        const received = [...element.selectedOptions].map((o) => o.value);
        if (received.length !== options.expectedText.length)
          return { received, matches: false };
        return { received, matches: received.map((r2, i) => new ExpectedTextMatcher(options.expectedText[i]).matches(r2)).every(Boolean) };
      }
    }
    {
      let received;
      if (expression === "to.have.attribute.value") {
        const value = element.getAttribute(options.expressionArg);
        if (value === null)
          return { received: null, matches: false };
        received = value;
      } else if (expression === "to.have.class") {
        received = element.classList.toString();
      } else if (expression === "to.have.css") {
        received = this.window.getComputedStyle(element).getPropertyValue(options.expressionArg);
      } else if (expression === "to.have.id") {
        received = element.id;
      } else if (expression === "to.have.text") {
        received = options.useInnerText ? element.innerText : elementText(/* @__PURE__ */ new Map(), element).full;
      } else if (expression === "to.have.accessible.name") {
        received = getElementAccessibleName(
          element,
          false
          /* includeHidden */
        );
      } else if (expression === "to.have.accessible.description") {
        received = getElementAccessibleDescription(
          element,
          false
          /* includeHidden */
        );
      } else if (expression === "to.have.role") {
        received = getAriaRole(element) || "";
      } else if (expression === "to.have.title") {
        received = this.document.title;
      } else if (expression === "to.have.url") {
        received = this.document.location.href;
      } else if (expression === "to.have.value") {
        element = this.retarget(element, "follow-label");
        if (element.nodeName !== "INPUT" && element.nodeName !== "TEXTAREA" && element.nodeName !== "SELECT")
          throw this.createStacklessError("Not an input element");
        received = element.value;
      }
      if (received !== void 0 && options.expectedText) {
        const matcher = new ExpectedTextMatcher(options.expectedText[0]);
        return { received, matches: matcher.matches(received) };
      }
    }
    throw this.createStacklessError("Unknown expect matcher: " + expression);
  }
  expectArray(elements, options) {
    const expression = options.expression;
    if (expression === "to.have.count") {
      const received2 = elements.length;
      const matches = received2 === options.expectedNumber;
      return { received: received2, matches };
    }
    let received;
    if (expression === "to.have.text.array" || expression === "to.contain.text.array")
      received = elements.map((e) => options.useInnerText ? e.innerText : elementText(/* @__PURE__ */ new Map(), e).full);
    else if (expression === "to.have.class.array")
      received = elements.map((e) => e.classList.toString());
    if (received && options.expectedText) {
      const lengthShouldMatch = expression !== "to.contain.text.array";
      const matchesLength = received.length === options.expectedText.length || !lengthShouldMatch;
      if (!matchesLength)
        return { received, matches: false };
      const matchers = options.expectedText.map((e) => new ExpectedTextMatcher(e));
      let mIndex = 0, rIndex = 0;
      while (mIndex < matchers.length && rIndex < received.length) {
        if (matchers[mIndex].matches(received[rIndex]))
          ++mIndex;
        ++rIndex;
      }
      return { received, matches: mIndex === matchers.length };
    }
    throw this.createStacklessError("Unknown expect matcher: " + expression);
  }
  generateSimpleDomNode(selector) {
    const element = this.querySelector(this.parseSelector(selector), this.document.documentElement, true);
    if (!element)
      return;
    return generateSimpleDomNode(this, element);
  }
  selectorForSimpleDomNodeId(nodeId) {
    return selectorForSimpleDomNodeId(this, nodeId);
  }
}
const autoClosingTags = /* @__PURE__ */ new Set(["AREA", "BASE", "BR", "COL", "COMMAND", "EMBED", "HR", "IMG", "INPUT", "KEYGEN", "LINK", "MENUITEM", "META", "PARAM", "SOURCE", "TRACK", "WBR"]);
const booleanAttributes = /* @__PURE__ */ new Set(["checked", "selected", "disabled", "readonly", "multiple"]);
function oneLine(s) {
  return s.replace(/\n/g, "↵").replace(/\t/g, "⇆");
}
const eventType = /* @__PURE__ */ new Map([
  ["auxclick", "mouse"],
  ["click", "mouse"],
  ["dblclick", "mouse"],
  ["mousedown", "mouse"],
  ["mouseeenter", "mouse"],
  ["mouseleave", "mouse"],
  ["mousemove", "mouse"],
  ["mouseout", "mouse"],
  ["mouseover", "mouse"],
  ["mouseup", "mouse"],
  ["mouseleave", "mouse"],
  ["mousewheel", "mouse"],
  ["keydown", "keyboard"],
  ["keyup", "keyboard"],
  ["keypress", "keyboard"],
  ["textInput", "keyboard"],
  ["touchstart", "touch"],
  ["touchmove", "touch"],
  ["touchend", "touch"],
  ["touchcancel", "touch"],
  ["pointerover", "pointer"],
  ["pointerout", "pointer"],
  ["pointerenter", "pointer"],
  ["pointerleave", "pointer"],
  ["pointerdown", "pointer"],
  ["pointerup", "pointer"],
  ["pointermove", "pointer"],
  ["pointercancel", "pointer"],
  ["gotpointercapture", "pointer"],
  ["lostpointercapture", "pointer"],
  ["focus", "focus"],
  ["blur", "focus"],
  ["drag", "drag"],
  ["dragstart", "drag"],
  ["dragend", "drag"],
  ["dragover", "drag"],
  ["dragenter", "drag"],
  ["dragleave", "drag"],
  ["dragexit", "drag"],
  ["drop", "drag"],
  ["wheel", "wheel"],
  ["deviceorientation", "deviceorientation"],
  ["deviceorientationabsolute", "deviceorientation"],
  ["devicemotion", "devicemotion"]
]);
const kHoverHitTargetInterceptorEvents = /* @__PURE__ */ new Set(["mousemove"]);
const kTapHitTargetInterceptorEvents = /* @__PURE__ */ new Set(["pointerdown", "pointerup", "touchstart", "touchend", "touchcancel"]);
const kMouseHitTargetInterceptorEvents = /* @__PURE__ */ new Set(["mousedown", "mouseup", "pointerdown", "pointerup", "click", "auxclick", "dblclick", "contextmenu"]);
const kAllHitTargetInterceptorEvents = /* @__PURE__ */ new Set([...kHoverHitTargetInterceptorEvents, ...kTapHitTargetInterceptorEvents, ...kMouseHitTargetInterceptorEvents]);
function cssUnquote(s) {
  s = s.substring(1, s.length - 1);
  if (!s.includes("\\"))
    return s;
  const r2 = [];
  let i = 0;
  while (i < s.length) {
    if (s[i] === "\\" && i + 1 < s.length)
      i++;
    r2.push(s[i++]);
  }
  return r2.join("");
}
function createTextMatcher(selector, internal) {
  if (selector[0] === "/" && selector.lastIndexOf("/") > 0) {
    const lastSlash = selector.lastIndexOf("/");
    const re2 = new RegExp(selector.substring(1, lastSlash), selector.substring(lastSlash + 1));
    return { matcher: (elementText2) => re2.test(elementText2.full), kind: "regex" };
  }
  const unquote = internal ? JSON.parse.bind(JSON) : cssUnquote;
  let strict = false;
  if (selector.length > 1 && selector[0] === '"' && selector[selector.length - 1] === '"') {
    selector = unquote(selector);
    strict = true;
  } else if (internal && selector.length > 1 && selector[0] === '"' && selector[selector.length - 2] === '"' && selector[selector.length - 1] === "i") {
    selector = unquote(selector.substring(0, selector.length - 1));
    strict = false;
  } else if (internal && selector.length > 1 && selector[0] === '"' && selector[selector.length - 2] === '"' && selector[selector.length - 1] === "s") {
    selector = unquote(selector.substring(0, selector.length - 1));
    strict = true;
  } else if (selector.length > 1 && selector[0] === "'" && selector[selector.length - 1] === "'") {
    selector = unquote(selector);
    strict = true;
  }
  selector = normalizeWhiteSpace(selector);
  if (strict) {
    if (internal)
      return { kind: "strict", matcher: (elementText2) => elementText2.normalized === selector };
    const strictTextNodeMatcher = (elementText2) => {
      if (!selector && !elementText2.immediate.length)
        return true;
      return elementText2.immediate.some((s) => normalizeWhiteSpace(s) === selector);
    };
    return { matcher: strictTextNodeMatcher, kind: "strict" };
  }
  selector = selector.toLowerCase();
  return { kind: "lax", matcher: (elementText2) => elementText2.normalized.toLowerCase().includes(selector) };
}
class ExpectedTextMatcher {
  constructor(expected) {
    this._normalizeWhiteSpace = expected.normalizeWhiteSpace;
    this._ignoreCase = expected.ignoreCase;
    this._string = expected.matchSubstring ? void 0 : this.normalize(expected.string);
    this._substring = expected.matchSubstring ? this.normalize(expected.string) : void 0;
    if (expected.regexSource) {
      const flags = new Set((expected.regexFlags || "").split(""));
      if (expected.ignoreCase === false)
        flags.delete("i");
      if (expected.ignoreCase === true)
        flags.add("i");
      this._regex = new RegExp(expected.regexSource, [...flags].join(""));
    }
  }
  matches(text) {
    if (!this._regex)
      text = this.normalize(text);
    if (this._string !== void 0)
      return text === this._string;
    if (this._substring !== void 0)
      return text.includes(this._substring);
    if (this._regex)
      return !!this._regex.test(text);
    return false;
  }
  normalize(s) {
    if (!s)
      return s;
    if (this._normalizeWhiteSpace)
      s = normalizeWhiteSpace(s);
    if (this._ignoreCase)
      s = s.toLocaleLowerCase();
    return s;
  }
}
function deepEquals(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a === "object" && typeof b === "object") {
    if (a.constructor !== b.constructor)
      return false;
    if (Array.isArray(a)) {
      if (a.length !== b.length)
        return false;
      for (let i = 0; i < a.length; ++i) {
        if (!deepEquals(a[i], b[i]))
          return false;
      }
      return true;
    }
    if (a instanceof RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    const keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length)
      return false;
    for (let i = 0; i < keys.length; ++i) {
      if (!b.hasOwnProperty(keys[i]))
        return false;
    }
    for (const key of keys) {
      if (!deepEquals(a[key], b[key]))
        return false;
    }
    return true;
  }
  if (typeof a === "number" && typeof b === "number")
    return isNaN(a) && isNaN(b);
  return false;
}
const svgJson = { "tagName": "svg", "children": [{ "tagName": "defs", "children": [{ "tagName": "clipPath", "attrs": { "width": "16", "height": "16", "viewBox": "0 0 16 16", "fill": "currentColor", "id": "icon-gripper" }, "children": [{ "tagName": "path", "attrs": { "d": "M5 3h2v2H5zm0 4h2v2H5zm0 4h2v2H5zm4-8h2v2H9zm0 4h2v2H9zm0 4h2v2H9z" } }] }, { "tagName": "clipPath", "attrs": { "width": "16", "height": "16", "viewBox": "0 0 16 16", "fill": "currentColor", "id": "icon-circle-large-filled" }, "children": [{ "tagName": "path", "attrs": { "d": "M8 1a6.8 6.8 0 0 1 1.86.253 6.899 6.899 0 0 1 3.083 1.805 6.903 6.903 0 0 1 1.804 3.083C14.916 6.738 15 7.357 15 8s-.084 1.262-.253 1.86a6.9 6.9 0 0 1-.704 1.674 7.157 7.157 0 0 1-2.516 2.509 6.966 6.966 0 0 1-1.668.71A6.984 6.984 0 0 1 8 15a6.984 6.984 0 0 1-1.86-.246 7.098 7.098 0 0 1-1.674-.711 7.3 7.3 0 0 1-1.415-1.094 7.295 7.295 0 0 1-1.094-1.415 7.098 7.098 0 0 1-.71-1.675A6.985 6.985 0 0 1 1 8c0-.643.082-1.262.246-1.86a6.968 6.968 0 0 1 .711-1.667 7.156 7.156 0 0 1 2.509-2.516 6.895 6.895 0 0 1 1.675-.704A6.808 6.808 0 0 1 8 1z" } }] }, { "tagName": "clipPath", "attrs": { "width": "16", "height": "16", "viewBox": "0 0 16 16", "fill": "currentColor", "id": "icon-inspect" }, "children": [{ "tagName": "path", "attrs": { "fill-rule": "evenodd", "clip-rule": "evenodd", "d": "M1 3l1-1h12l1 1v6h-1V3H2v8h5v1H2l-1-1V3zm14.707 9.707L9 6v9.414l2.707-2.707h4zM10 13V8.414l3.293 3.293h-2L10 13z" } }] }, { "tagName": "clipPath", "attrs": { "width": "16", "height": "16", "viewBox": "0 0 16 16", "fill": "currentColor", "id": "icon-whole-word" }, "children": [{ "tagName": "path", "attrs": { "fill-rule": "evenodd", "clip-rule": "evenodd", "d": "M0 11H1V13H15V11H16V14H15H1H0V11Z" } }, { "tagName": "path", "attrs": { "d": "M6.84048 11H5.95963V10.1406H5.93814C5.555 10.7995 4.99104 11.1289 4.24625 11.1289C3.69839 11.1289 3.26871 10.9839 2.95718 10.6938C2.64924 10.4038 2.49527 10.0189 2.49527 9.53906C2.49527 8.51139 3.10041 7.91341 4.3107 7.74512L5.95963 7.51416C5.95963 6.57959 5.58186 6.1123 4.82632 6.1123C4.16389 6.1123 3.56591 6.33789 3.03238 6.78906V5.88672C3.57307 5.54297 4.19612 5.37109 4.90152 5.37109C6.19416 5.37109 6.84048 6.05501 6.84048 7.42285V11ZM5.95963 8.21777L4.63297 8.40039C4.22476 8.45768 3.91682 8.55973 3.70914 8.70654C3.50145 8.84977 3.39761 9.10579 3.39761 9.47461C3.39761 9.74316 3.4925 9.96338 3.68228 10.1353C3.87564 10.3035 4.13166 10.3877 4.45035 10.3877C4.8872 10.3877 5.24706 10.2355 5.52994 9.93115C5.8164 9.62321 5.95963 9.2347 5.95963 8.76562V8.21777Z" } }, { "tagName": "path", "attrs": { "d": "M9.3475 10.2051H9.32601V11H8.44515V2.85742H9.32601V6.4668H9.3475C9.78076 5.73633 10.4146 5.37109 11.2489 5.37109C11.9543 5.37109 12.5057 5.61816 12.9032 6.1123C13.3042 6.60286 13.5047 7.26172 13.5047 8.08887C13.5047 9.00911 13.2809 9.74674 12.8333 10.3018C12.3857 10.8532 11.7734 11.1289 10.9964 11.1289C10.2695 11.1289 9.71989 10.821 9.3475 10.2051ZM9.32601 7.98682V8.75488C9.32601 9.20964 9.47282 9.59635 9.76644 9.91504C10.0636 10.2301 10.4396 10.3877 10.8944 10.3877C11.4279 10.3877 11.8451 10.1836 12.1458 9.77539C12.4502 9.36719 12.6024 8.79964 12.6024 8.07275C12.6024 7.46045 12.4609 6.98063 12.1781 6.6333C11.8952 6.28597 11.512 6.1123 11.0286 6.1123C10.5166 6.1123 10.1048 6.29134 9.7933 6.64941C9.48177 7.00391 9.32601 7.44971 9.32601 7.98682Z" } }] }, { "tagName": "clipPath", "attrs": { "width": "16", "height": "16", "viewBox": "0 0 16 16", "fill": "currentColor", "id": "icon-eye" }, "children": [{ "tagName": "path", "attrs": { "d": "M7.99993 6.00316C9.47266 6.00316 10.6666 7.19708 10.6666 8.66981C10.6666 10.1426 9.47266 11.3365 7.99993 11.3365C6.52715 11.3365 5.33324 10.1426 5.33324 8.66981C5.33324 7.19708 6.52715 6.00316 7.99993 6.00316ZM7.99993 7.00315C7.07946 7.00315 6.33324 7.74935 6.33324 8.66981C6.33324 9.59028 7.07946 10.3365 7.99993 10.3365C8.9204 10.3365 9.6666 9.59028 9.6666 8.66981C9.6666 7.74935 8.9204 7.00315 7.99993 7.00315ZM7.99993 3.66675C11.0756 3.66675 13.7307 5.76675 14.4673 8.70968C14.5344 8.97755 14.3716 9.24908 14.1037 9.31615C13.8358 9.38315 13.5643 9.22041 13.4973 8.95248C12.8713 6.45205 10.6141 4.66675 7.99993 4.66675C5.38454 4.66675 3.12664 6.45359 2.50182 8.95555C2.43491 9.22341 2.16348 9.38635 1.89557 9.31948C1.62766 9.25255 1.46471 8.98115 1.53162 8.71321C2.26701 5.76856 4.9229 3.66675 7.99993 3.66675Z" } }] }, { "tagName": "clipPath", "attrs": { "width": "16", "height": "16", "viewBox": "0 0 16 16", "fill": "currentColor", "id": "icon-symbol-constant" }, "children": [{ "tagName": "path", "attrs": { "fill-rule": "evenodd", "clip-rule": "evenodd", "d": "M4 6h8v1H4V6zm8 3H4v1h8V9z" } }, { "tagName": "path", "attrs": { "fill-rule": "evenodd", "clip-rule": "evenodd", "d": "M1 4l1-1h12l1 1v8l-1 1H2l-1-1V4zm1 0v8h12V4H2z" } }] }, { "tagName": "clipPath", "attrs": { "width": "16", "height": "16", "viewBox": "0 0 16 16", "fill": "currentColor", "id": "icon-check" }, "children": [{ "tagName": "path", "attrs": { "fill-rule": "evenodd", "clip-rule": "evenodd", "d": "M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z" } }] }, { "tagName": "clipPath", "attrs": { "width": "16", "height": "16", "viewBox": "0 0 16 16", "fill": "currentColor", "id": "icon-close" }, "children": [{ "tagName": "path", "attrs": { "fill-rule": "evenodd", "clip-rule": "evenodd", "d": "M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z" } }] }, { "tagName": "clipPath", "attrs": { "width": "16", "height": "16", "viewBox": "0 0 16 16", "fill": "currentColor", "id": "icon-pass" }, "children": [{ "tagName": "path", "attrs": { "d": "M6.27 10.87h.71l4.56-4.56-.71-.71-4.2 4.21-1.92-1.92L4 8.6l2.27 2.27z" } }, { "tagName": "path", "attrs": { "fill-rule": "evenodd", "clip-rule": "evenodd", "d": "M8.6 1c1.6.1 3.1.9 4.2 2 1.3 1.4 2 3.1 2 5.1 0 1.6-.6 3.1-1.6 4.4-1 1.2-2.4 2.1-4 2.4-1.6.3-3.2.1-4.6-.7-1.4-.8-2.5-2-3.1-3.5C.9 9.2.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1zm.5 12.9c1.3-.3 2.5-1 3.4-2.1.8-1.1 1.3-2.4 1.2-3.8 0-1.6-.6-3.2-1.7-4.3-1-1-2.2-1.6-3.6-1.7-1.3-.1-2.7.2-3.8 1-1.1.8-1.9 1.9-2.3 3.3-.4 1.3-.4 2.7.2 4 .6 1.3 1.5 2.3 2.7 3 1.2.7 2.6.9 3.9.6z" } }] }] }] };
class NoneTool {
  cursor() {
    return "default";
  }
}
class InspectTool {
  constructor(recorder, assertVisibility) {
    this._hoveredModel = null;
    this._hoveredElement = null;
    this._hoveredSelectors = null;
    this._recorder = recorder;
    this._assertVisibility = assertVisibility;
  }
  cursor() {
    return "pointer";
  }
  cleanup() {
    this._hoveredModel = null;
    this._hoveredElement = null;
    this._hoveredSelectors = null;
  }
  onClick(event) {
    var _a;
    consumeEvent(event);
    if (event.button !== 0)
      return;
    if ((_a = this._hoveredModel) == null ? void 0 : _a.selector)
      this._commit(this._hoveredModel.selector);
  }
  onContextMenu(event) {
    if (this._hoveredModel && !this._hoveredModel.tooltipListItemSelected && this._hoveredSelectors && this._hoveredSelectors.length > 1) {
      consumeEvent(event);
      const selectors = this._hoveredSelectors;
      this._hoveredModel.tooltipFooter = void 0;
      this._hoveredModel.tooltipList = selectors.map((selector) => this._recorder.injectedScript.utils.asLocator(this._recorder.state.language, selector));
      this._hoveredModel.tooltipListItemSelected = (index) => {
        if (index === void 0)
          this._reset(true);
        else
          this._commit(selectors[index]);
      };
      this._recorder.updateHighlight(this._hoveredModel, true);
    }
  }
  onPointerDown(event) {
    consumeEvent(event);
  }
  onPointerUp(event) {
    consumeEvent(event);
  }
  onMouseDown(event) {
    consumeEvent(event);
  }
  onMouseUp(event) {
    consumeEvent(event);
  }
  onMouseMove(event) {
    var _a;
    consumeEvent(event);
    let target = this._recorder.deepEventTarget(event);
    if (!target.isConnected)
      target = null;
    if (this._hoveredElement === target)
      return;
    this._hoveredElement = target;
    let model = null;
    let selectors = [];
    if (this._hoveredElement) {
      const generated = this._recorder.injectedScript.generateSelector(this._hoveredElement, { testIdAttributeName: this._recorder.state.testIdAttributeName, multiple: false });
      selectors = generated.selectors;
      model = {
        selector: generated.selector,
        elements: generated.elements,
        tooltipText: this._recorder.injectedScript.utils.asLocator(this._recorder.state.language, generated.selector),
        tooltipFooter: selectors.length > 1 ? `Click to select, right-click for more options` : void 0,
        color: this._assertVisibility ? "#8acae480" : void 0
      };
    }
    if (((_a = this._hoveredModel) == null ? void 0 : _a.selector) === (model == null ? void 0 : model.selector))
      return;
    this._hoveredModel = model;
    this._hoveredSelectors = selectors;
    this._recorder.updateHighlight(model, true);
  }
  onMouseEnter(event) {
    consumeEvent(event);
  }
  onMouseLeave(event) {
    consumeEvent(event);
    const window2 = this._recorder.injectedScript.window;
    if (window2.top !== window2 && this._recorder.deepEventTarget(event).nodeType === Node.DOCUMENT_NODE)
      this._reset(true);
  }
  onKeyDown(event) {
    var _a;
    consumeEvent(event);
    if (event.key === "Escape") {
      if ((_a = this._hoveredModel) == null ? void 0 : _a.tooltipListItemSelected)
        this._reset(true);
      else if (this._assertVisibility)
        this._recorder.setMode("recording");
    }
  }
  onKeyUp(event) {
    consumeEvent(event);
  }
  onScroll(event) {
    this._reset(false);
  }
  _commit(selector) {
    var _a;
    if (this._assertVisibility) {
      this._recorder.recordAction({
        name: "assertVisible",
        selector,
        signals: []
      });
      this._recorder.setMode("recording");
      (_a = this._recorder.overlay) == null ? void 0 : _a.flashToolSucceeded("assertingVisibility");
    } else {
      this._recorder.setSelector(selector);
    }
  }
  _reset(userGesture) {
    this._hoveredElement = null;
    this._hoveredModel = null;
    this._hoveredSelectors = null;
    this._recorder.updateHighlight(null, userGesture);
  }
}
class RecordActionTool {
  constructor(recorder) {
    this._performingAction = false;
    this._hoveredModel = null;
    this._hoveredElement = null;
    this._activeModel = null;
    this._expectProgrammaticKeyUp = false;
    this._recorder = recorder;
  }
  cursor() {
    return "pointer";
  }
  cleanup() {
    this._hoveredModel = null;
    this._hoveredElement = null;
    this._activeModel = null;
    this._expectProgrammaticKeyUp = false;
  }
  onClick(event) {
    if (isRangeInput(this._hoveredElement))
      return;
    if (event.button === 2 && event.type === "auxclick")
      return;
    if (this._shouldIgnoreMouseEvent(event))
      return;
    if (this._actionInProgress(event))
      return;
    if (this._consumedDueToNoModel(event, this._hoveredModel))
      return;
    const checkbox = asCheckbox(this._recorder.deepEventTarget(event));
    if (checkbox) {
      this._performAction({
        name: checkbox.checked ? "check" : "uncheck",
        selector: this._hoveredModel.selector,
        signals: []
      });
      return;
    }
    this._performAction({
      name: "click",
      selector: this._hoveredModel.selector,
      position: positionForEvent(event),
      signals: [],
      button: buttonForEvent(event),
      modifiers: modifiersForEvent(event),
      clickCount: event.detail
    });
  }
  onContextMenu(event) {
    if (this._shouldIgnoreMouseEvent(event))
      return;
    if (this._actionInProgress(event))
      return;
    if (this._consumedDueToNoModel(event, this._hoveredModel))
      return;
    this._performAction({
      name: "click",
      selector: this._hoveredModel.selector,
      position: positionForEvent(event),
      signals: [],
      button: "right",
      modifiers: 0,
      clickCount: 0
    });
  }
  onPointerDown(event) {
    if (this._shouldIgnoreMouseEvent(event))
      return;
    if (!this._performingAction)
      consumeEvent(event);
  }
  onPointerUp(event) {
    if (this._shouldIgnoreMouseEvent(event))
      return;
    if (!this._performingAction)
      consumeEvent(event);
  }
  onMouseDown(event) {
    if (this._shouldIgnoreMouseEvent(event))
      return;
    if (!this._performingAction)
      consumeEvent(event);
    this._activeModel = this._hoveredModel;
  }
  onMouseUp(event) {
    if (this._shouldIgnoreMouseEvent(event))
      return;
    if (!this._performingAction)
      consumeEvent(event);
  }
  onMouseMove(event) {
    const target = this._recorder.deepEventTarget(event);
    if (this._hoveredElement === target)
      return;
    this._hoveredElement = target;
    this._updateModelForHoveredElement();
  }
  onMouseLeave(event) {
    const window2 = this._recorder.injectedScript.window;
    if (window2.top !== window2 && this._recorder.deepEventTarget(event).nodeType === Node.DOCUMENT_NODE) {
      this._hoveredElement = null;
      this._updateModelForHoveredElement();
    }
  }
  onFocus(event) {
    this._onFocus(true);
  }
  onInput(event) {
    const target = this._recorder.deepEventTarget(event);
    if (target.nodeName === "INPUT" && target.type.toLowerCase() === "file") {
      this._recorder.recordAction({
        name: "setInputFiles",
        selector: this._activeModel.selector,
        signals: [],
        files: [...target.files || []].map((file) => file.name)
      });
      return;
    }
    if (isRangeInput(target)) {
      this._recorder.recordAction({
        name: "fill",
        // must use hoveredModel instead of activeModel for it to work in webkit
        selector: this._hoveredModel.selector,
        signals: [],
        text: target.value
      });
      return;
    }
    if (["INPUT", "TEXTAREA"].includes(target.nodeName) || target.isContentEditable) {
      if (target.nodeName === "INPUT" && ["checkbox", "radio"].includes(target.type.toLowerCase())) {
        return;
      }
      if (this._consumedDueWrongTarget(event))
        return;
      this._recorder.recordAction({
        name: "fill",
        selector: this._activeModel.selector,
        signals: [],
        text: target.isContentEditable ? target.innerText : target.value
      });
    }
    if (target.nodeName === "SELECT") {
      const selectElement = target;
      if (this._actionInProgress(event))
        return;
      this._performAction({
        name: "select",
        selector: this._activeModel.selector,
        options: [...selectElement.selectedOptions].map((option) => option.value),
        signals: []
      });
    }
  }
  onKeyDown(event) {
    if (!this._shouldGenerateKeyPressFor(event))
      return;
    if (this._actionInProgress(event)) {
      this._expectProgrammaticKeyUp = true;
      return;
    }
    if (this._consumedDueWrongTarget(event))
      return;
    if (event.key === " ") {
      const checkbox = asCheckbox(this._recorder.deepEventTarget(event));
      if (checkbox) {
        this._performAction({
          name: checkbox.checked ? "uncheck" : "check",
          selector: this._activeModel.selector,
          signals: []
        });
        return;
      }
    }
    this._performAction({
      name: "press",
      selector: this._activeModel.selector,
      signals: [],
      key: event.key,
      modifiers: modifiersForEvent(event)
    });
  }
  onKeyUp(event) {
    if (!this._shouldGenerateKeyPressFor(event))
      return;
    if (!this._expectProgrammaticKeyUp) {
      consumeEvent(event);
      return;
    }
    this._expectProgrammaticKeyUp = false;
  }
  onScroll(event) {
    this._hoveredModel = null;
    this._hoveredElement = null;
    this._recorder.updateHighlight(null, false);
  }
  _onFocus(userGesture) {
    const activeElement = deepActiveElement(this._recorder.document);
    if (userGesture && activeElement === this._recorder.document.body)
      return;
    const result = activeElement ? this._recorder.injectedScript.generateSelector(activeElement, { testIdAttributeName: this._recorder.state.testIdAttributeName }) : null;
    this._activeModel = result && result.selector ? result : null;
    if (userGesture)
      this._hoveredElement = activeElement;
    this._updateModelForHoveredElement();
  }
  _shouldIgnoreMouseEvent(event) {
    const target = this._recorder.deepEventTarget(event);
    const nodeName = target.nodeName;
    if (nodeName === "SELECT" || nodeName === "OPTION")
      return true;
    if (nodeName === "INPUT" && ["date", "range"].includes(target.type))
      return true;
    return false;
  }
  _actionInProgress(event) {
    if (this._performingAction)
      return true;
    consumeEvent(event);
    return false;
  }
  _consumedDueToNoModel(event, model) {
    if (model)
      return false;
    consumeEvent(event);
    return true;
  }
  _consumedDueWrongTarget(event) {
    if (this._activeModel && this._activeModel.elements[0] === this._recorder.deepEventTarget(event))
      return false;
    consumeEvent(event);
    return true;
  }
  _performAction(action) {
    this._hoveredElement = null;
    this._hoveredModel = null;
    this._activeModel = null;
    this._recorder.updateHighlight(null, false);
    this._performingAction = true;
    void this._recorder.performAction(action).then(() => {
      this._performingAction = false;
      this._onFocus(false);
      if (this._recorder.injectedScript.isUnderTest) {
        console.error("Action performed for test: " + JSON.stringify({
          // eslint-disable-line no-console
          hovered: this._hoveredModel ? this._hoveredModel.selector : null,
          active: this._activeModel ? this._activeModel.selector : null
        }));
      }
    });
  }
  _shouldGenerateKeyPressFor(event) {
    if (event.key === "Enter" && (this._recorder.deepEventTarget(event).nodeName === "TEXTAREA" || this._recorder.deepEventTarget(event).isContentEditable))
      return false;
    if (["Backspace", "Delete", "AltGraph"].includes(event.key))
      return false;
    if (event.key === "@" && event.code === "KeyL")
      return false;
    if (navigator.platform.includes("Mac")) {
      if (event.key === "v" && event.metaKey)
        return false;
    } else {
      if (event.key === "v" && event.ctrlKey)
        return false;
      if (event.key === "Insert" && event.shiftKey)
        return false;
    }
    if (["Shift", "Control", "Meta", "Alt", "Process"].includes(event.key))
      return false;
    const hasModifier = event.ctrlKey || event.altKey || event.metaKey;
    if (event.key.length === 1 && !hasModifier)
      return !!asCheckbox(this._recorder.deepEventTarget(event));
    return true;
  }
  _updateModelForHoveredElement() {
    if (!this._hoveredElement || !this._hoveredElement.isConnected) {
      this._hoveredModel = null;
      this._hoveredElement = null;
      this._recorder.updateHighlight(null, true);
      return;
    }
    const { selector, elements } = this._recorder.injectedScript.generateSelector(this._hoveredElement, { testIdAttributeName: this._recorder.state.testIdAttributeName });
    if (this._hoveredModel && this._hoveredModel.selector === selector)
      return;
    this._hoveredModel = selector ? { selector, elements, color: "#dc6f6f7f" } : null;
    this._recorder.updateHighlight(this._hoveredModel, true);
  }
}
class TextAssertionTool {
  constructor(recorder, kind) {
    this._hoverHighlight = null;
    this._action = null;
    this._textCache = /* @__PURE__ */ new Map();
    this._recorder = recorder;
    this._kind = kind;
    this._dialog = new Dialog(recorder);
  }
  cursor() {
    return "pointer";
  }
  cleanup() {
    this._dialog.close();
    this._hoverHighlight = null;
  }
  onClick(event) {
    consumeEvent(event);
    if (this._kind === "value") {
      this._commitAssertValue();
    } else {
      if (!this._dialog.isShowing())
        this._showDialog();
    }
  }
  onMouseDown(event) {
    const target = this._recorder.deepEventTarget(event);
    if (this._elementHasValue(target))
      event.preventDefault();
  }
  onPointerUp(event) {
    var _a;
    const target = (_a = this._hoverHighlight) == null ? void 0 : _a.elements[0];
    if (this._kind === "value" && target && (target.nodeName === "INPUT" || target.nodeName === "SELECT") && target.disabled) {
      this._commitAssertValue();
    }
  }
  onMouseMove(event) {
    var _a;
    if (this._dialog.isShowing())
      return;
    const target = this._recorder.deepEventTarget(event);
    if (((_a = this._hoverHighlight) == null ? void 0 : _a.elements[0]) === target)
      return;
    if (this._kind === "text")
      this._hoverHighlight = this._recorder.injectedScript.utils.elementText(this._textCache, target).full ? { elements: [target], selector: "" } : null;
    else
      this._hoverHighlight = this._elementHasValue(target) ? this._recorder.injectedScript.generateSelector(target, { testIdAttributeName: this._recorder.state.testIdAttributeName }) : null;
    if (this._hoverHighlight)
      this._hoverHighlight.color = "#8acae480";
    this._recorder.updateHighlight(this._hoverHighlight, true);
  }
  onKeyDown(event) {
    if (event.key === "Escape")
      this._recorder.setMode("recording");
    consumeEvent(event);
  }
  onScroll(event) {
    this._recorder.updateHighlight(this._hoverHighlight, false);
  }
  _elementHasValue(element) {
    return element.nodeName === "TEXTAREA" || element.nodeName === "SELECT" || element.nodeName === "INPUT" && !["button", "image", "reset", "submit"].includes(element.type);
  }
  _generateAction() {
    var _a;
    this._textCache.clear();
    const target = (_a = this._hoverHighlight) == null ? void 0 : _a.elements[0];
    if (!target)
      return null;
    if (this._kind === "value") {
      if (!this._elementHasValue(target))
        return null;
      const { selector } = this._recorder.injectedScript.generateSelector(target, { testIdAttributeName: this._recorder.state.testIdAttributeName });
      if (target.nodeName === "INPUT" && ["checkbox", "radio"].includes(target.type.toLowerCase())) {
        return {
          name: "assertChecked",
          selector,
          signals: [],
          // Interestingly, inputElement.checked is reversed inside this event handler.
          checked: !target.checked
        };
      } else {
        return {
          name: "assertValue",
          selector,
          signals: [],
          value: target.value
        };
      }
    } else {
      this._hoverHighlight = this._recorder.injectedScript.generateSelector(target, { testIdAttributeName: this._recorder.state.testIdAttributeName, forTextExpect: true });
      this._hoverHighlight.color = "#8acae480";
      this._recorder.updateHighlight(this._hoverHighlight, true);
      return {
        name: "assertText",
        selector: this._hoverHighlight.selector,
        signals: [],
        text: this._recorder.injectedScript.utils.elementText(this._textCache, target).normalized,
        substring: true
      };
    }
  }
  _renderValue(action) {
    if ((action == null ? void 0 : action.name) === "assertText")
      return this._recorder.injectedScript.utils.normalizeWhiteSpace(action.text);
    if ((action == null ? void 0 : action.name) === "assertChecked")
      return String(action.checked);
    if ((action == null ? void 0 : action.name) === "assertValue")
      return action.value;
    return "";
  }
  _commit() {
    if (!this._action || !this._dialog.isShowing())
      return;
    this._dialog.close();
    this._recorder.recordAction(this._action);
    this._recorder.setMode("recording");
  }
  _showDialog() {
    var _a;
    if (!((_a = this._hoverHighlight) == null ? void 0 : _a.elements[0]))
      return;
    this._action = this._generateAction();
    if (!this._action || this._action.name !== "assertText")
      return;
    const action = this._action;
    const textElement = this._recorder.document.createElement("textarea");
    textElement.setAttribute("spellcheck", "false");
    textElement.value = this._renderValue(this._action);
    textElement.classList.add("text-editor");
    const updateAndValidate = () => {
      var _a2;
      const newValue = this._recorder.injectedScript.utils.normalizeWhiteSpace(textElement.value);
      const target = (_a2 = this._hoverHighlight) == null ? void 0 : _a2.elements[0];
      if (!target)
        return;
      action.text = newValue;
      const targetText = this._recorder.injectedScript.utils.elementText(this._textCache, target).normalized;
      const matches = newValue && targetText.includes(newValue);
      textElement.classList.toggle("does-not-match", !matches);
    };
    textElement.addEventListener("input", updateAndValidate);
    const label = "Assert that element contains text";
    const dialogElement = this._dialog.show({
      label,
      body: textElement,
      onCommit: () => this._commit()
    });
    const position = this._recorder.highlight.tooltipPosition(this._recorder.highlight.firstBox(), dialogElement);
    this._dialog.moveTo(position.anchorTop, position.anchorLeft);
    textElement.focus();
  }
  _commitAssertValue() {
    var _a;
    if (this._kind !== "value")
      return;
    const action = this._generateAction();
    if (!action)
      return;
    this._recorder.recordAction(action);
    this._recorder.setMode("recording");
    (_a = this._recorder.overlay) == null ? void 0 : _a.flashToolSucceeded("assertingValue");
  }
}
class Overlay {
  constructor(recorder) {
    this._listeners = [];
    this._offsetX = 0;
    this._measure = { width: 0, height: 0 };
    this._recorder = recorder;
    const document2 = this._recorder.document;
    this._overlayElement = document2.createElement("x-pw-overlay");
    this._overlayElement.appendChild(createSvgElement(this._recorder.document, svgJson));
    const toolsListElement = document2.createElement("x-pw-tools-list");
    this._overlayElement.appendChild(toolsListElement);
    this._dragHandle = document2.createElement("x-pw-tool-gripper");
    this._dragHandle.appendChild(document2.createElement("x-div"));
    toolsListElement.appendChild(this._dragHandle);
    this._recordToggle = this._recorder.document.createElement("x-pw-tool-item");
    this._recordToggle.title = "Record";
    this._recordToggle.classList.add("record");
    this._recordToggle.appendChild(this._recorder.document.createElement("x-div"));
    toolsListElement.appendChild(this._recordToggle);
    this._pickLocatorToggle = this._recorder.document.createElement("x-pw-tool-item");
    this._pickLocatorToggle.title = "Pick locator";
    this._pickLocatorToggle.classList.add("pick-locator");
    this._pickLocatorToggle.appendChild(this._recorder.document.createElement("x-div"));
    toolsListElement.appendChild(this._pickLocatorToggle);
    this._assertVisibilityToggle = this._recorder.document.createElement("x-pw-tool-item");
    this._assertVisibilityToggle.title = "Assert visibility";
    this._assertVisibilityToggle.classList.add("visibility");
    this._assertVisibilityToggle.appendChild(this._recorder.document.createElement("x-div"));
    toolsListElement.appendChild(this._assertVisibilityToggle);
    this._assertTextToggle = this._recorder.document.createElement("x-pw-tool-item");
    this._assertTextToggle.title = "Assert text";
    this._assertTextToggle.classList.add("text");
    this._assertTextToggle.appendChild(this._recorder.document.createElement("x-div"));
    toolsListElement.appendChild(this._assertTextToggle);
    this._assertValuesToggle = this._recorder.document.createElement("x-pw-tool-item");
    this._assertValuesToggle.title = "Assert value";
    this._assertValuesToggle.classList.add("value");
    this._assertValuesToggle.appendChild(this._recorder.document.createElement("x-div"));
    toolsListElement.appendChild(this._assertValuesToggle);
    this._updateVisualPosition();
    this._refreshListeners();
  }
  _refreshListeners() {
    removeEventListeners(this._listeners);
    this._listeners = [
      addEventListener(this._dragHandle, "mousedown", (event) => {
        this._dragState = { offsetX: this._offsetX, dragStart: { x: event.clientX, y: 0 } };
      }),
      addEventListener(this._recordToggle, "click", () => {
        this._recorder.setMode(this._recorder.state.mode === "none" || this._recorder.state.mode === "standby" || this._recorder.state.mode === "inspecting" ? "recording" : "standby");
      }),
      addEventListener(this._pickLocatorToggle, "click", () => {
        const newMode = {
          "inspecting": "standby",
          "none": "inspecting",
          "standby": "inspecting",
          "recording": "recording-inspecting",
          "recording-inspecting": "recording",
          "assertingText": "recording-inspecting",
          "assertingVisibility": "recording-inspecting",
          "assertingValue": "recording-inspecting"
        };
        this._recorder.setMode(newMode[this._recorder.state.mode]);
      }),
      addEventListener(this._assertVisibilityToggle, "click", () => {
        if (!this._assertVisibilityToggle.classList.contains("disabled"))
          this._recorder.setMode(this._recorder.state.mode === "assertingVisibility" ? "recording" : "assertingVisibility");
      }),
      addEventListener(this._assertTextToggle, "click", () => {
        if (!this._assertTextToggle.classList.contains("disabled"))
          this._recorder.setMode(this._recorder.state.mode === "assertingText" ? "recording" : "assertingText");
      }),
      addEventListener(this._assertValuesToggle, "click", () => {
        if (!this._assertValuesToggle.classList.contains("disabled"))
          this._recorder.setMode(this._recorder.state.mode === "assertingValue" ? "recording" : "assertingValue");
      })
    ];
  }
  install() {
    this._recorder.highlight.appendChild(this._overlayElement);
    this._refreshListeners();
    this._updateVisualPosition();
  }
  contains(element) {
    return this._recorder.injectedScript.utils.isInsideScope(this._overlayElement, element);
  }
  setUIState(state) {
    this._recordToggle.classList.toggle("active", state.mode === "recording" || state.mode === "assertingText" || state.mode === "assertingVisibility" || state.mode === "assertingValue" || state.mode === "recording-inspecting");
    this._pickLocatorToggle.classList.toggle("active", state.mode === "inspecting" || state.mode === "recording-inspecting");
    this._assertVisibilityToggle.classList.toggle("active", state.mode === "assertingVisibility");
    this._assertVisibilityToggle.classList.toggle("disabled", state.mode === "none" || state.mode === "standby" || state.mode === "inspecting");
    this._assertTextToggle.classList.toggle("active", state.mode === "assertingText");
    this._assertTextToggle.classList.toggle("disabled", state.mode === "none" || state.mode === "standby" || state.mode === "inspecting");
    this._assertValuesToggle.classList.toggle("active", state.mode === "assertingValue");
    this._assertValuesToggle.classList.toggle("disabled", state.mode === "none" || state.mode === "standby" || state.mode === "inspecting");
    if (this._offsetX !== state.overlay.offsetX) {
      this._offsetX = state.overlay.offsetX;
      this._updateVisualPosition();
    }
    if (state.mode === "none")
      this._hideOverlay();
    else
      this._showOverlay();
  }
  flashToolSucceeded(tool) {
    const element = tool === "assertingVisibility" ? this._assertVisibilityToggle : this._assertValuesToggle;
    element.classList.add("succeeded");
    this._recorder.injectedScript.builtinSetTimeout(() => element.classList.remove("succeeded"), 2e3);
  }
  _hideOverlay() {
    this._overlayElement.setAttribute("hidden", "true");
  }
  _showOverlay() {
    if (!this._overlayElement.hasAttribute("hidden"))
      return;
    this._overlayElement.removeAttribute("hidden");
    this._updateVisualPosition();
  }
  _updateVisualPosition() {
    this._measure = this._overlayElement.getBoundingClientRect();
    this._overlayElement.style.left = (this._recorder.injectedScript.window.innerWidth - this._measure.width) / 2 + this._offsetX + "px";
  }
  onMouseMove(event) {
    if (!event.buttons) {
      this._dragState = void 0;
      return false;
    }
    if (this._dragState) {
      this._offsetX = this._dragState.offsetX + event.clientX - this._dragState.dragStart.x;
      const halfGapSize = (this._recorder.injectedScript.window.innerWidth - this._measure.width) / 2 - 10;
      this._offsetX = Math.max(-halfGapSize, Math.min(halfGapSize, this._offsetX));
      this._updateVisualPosition();
      this._recorder.setOverlayState({ offsetX: this._offsetX });
      consumeEvent(event);
      return true;
    }
    return false;
  }
  onMouseUp(event) {
    if (this._dragState) {
      consumeEvent(event);
      return true;
    }
    return false;
  }
  onClick(event) {
    if (this._dragState) {
      this._dragState = void 0;
      consumeEvent(event);
      return true;
    }
    return false;
  }
}
class Recorder {
  constructor(injectedScript) {
    this._listeners = [];
    this._actionSelectorModel = null;
    this.state = {
      mode: "none",
      testIdAttributeName: "data-testid",
      language: "javascript",
      overlay: { offsetX: 0 }
    };
    this._delegate = {};
    this.document = injectedScript.document;
    this.injectedScript = injectedScript;
    this.highlight = injectedScript.createHighlight();
    this._tools = {
      "none": new NoneTool(),
      "standby": new NoneTool(),
      "inspecting": new InspectTool(this, false),
      "recording": new RecordActionTool(this),
      "recording-inspecting": new InspectTool(this, false),
      "assertingText": new TextAssertionTool(this, "text"),
      "assertingVisibility": new InspectTool(this, true),
      "assertingValue": new TextAssertionTool(this, "value")
    };
    this._currentTool = this._tools.none;
    if (injectedScript.window.top === injectedScript.window) {
      this.overlay = new Overlay(this);
      this.overlay.setUIState(this.state);
    }
    this._stylesheet = new injectedScript.window.CSSStyleSheet();
    this._stylesheet.replaceSync(`
      body[data-pw-cursor=pointer] *, body[data-pw-cursor=pointer] *::after { cursor: pointer !important; }
      body[data-pw-cursor=text] *, body[data-pw-cursor=text] *::after { cursor: text !important; }
    `);
    this.installListeners();
    injectedScript.utils.cacheNormalizedWhitespaces();
    if (injectedScript.isUnderTest)
      console.error("Recorder script ready for test");
  }
  installListeners() {
    var _a;
    removeEventListeners(this._listeners);
    this._listeners = [
      addEventListener(this.document, "click", (event) => this._onClick(event), true),
      addEventListener(this.document, "auxclick", (event) => this._onClick(event), true),
      addEventListener(this.document, "contextmenu", (event) => this._onContextMenu(event), true),
      addEventListener(this.document, "dragstart", (event) => this._onDragStart(event), true),
      addEventListener(this.document, "input", (event) => this._onInput(event), true),
      addEventListener(this.document, "keydown", (event) => this._onKeyDown(event), true),
      addEventListener(this.document, "keyup", (event) => this._onKeyUp(event), true),
      addEventListener(this.document, "pointerdown", (event) => this._onPointerDown(event), true),
      addEventListener(this.document, "pointerup", (event) => this._onPointerUp(event), true),
      addEventListener(this.document, "mousedown", (event) => this._onMouseDown(event), true),
      addEventListener(this.document, "mouseup", (event) => this._onMouseUp(event), true),
      addEventListener(this.document, "mousemove", (event) => this._onMouseMove(event), true),
      addEventListener(this.document, "mouseleave", (event) => this._onMouseLeave(event), true),
      addEventListener(this.document, "mouseenter", (event) => this._onMouseEnter(event), true),
      addEventListener(this.document, "focus", (event) => this._onFocus(event), true),
      addEventListener(this.document, "scroll", (event) => this._onScroll(event), true)
    ];
    this.highlight.install();
    (_a = this.overlay) == null ? void 0 : _a.install();
    this.document.adoptedStyleSheets.push(this._stylesheet);
  }
  _switchCurrentTool() {
    var _a, _b, _c;
    const newTool = this._tools[this.state.mode];
    if (newTool === this._currentTool)
      return;
    (_b = (_a = this._currentTool).cleanup) == null ? void 0 : _b.call(_a);
    this.clearHighlight();
    this._currentTool = newTool;
    (_c = this.injectedScript.document.body) == null ? void 0 : _c.setAttribute("data-pw-cursor", newTool.cursor());
  }
  setUIState(state, delegate) {
    var _a, _b, _c, _d;
    this._delegate = delegate;
    if (state.actionPoint && this.state.actionPoint && state.actionPoint.x === this.state.actionPoint.x && state.actionPoint.y === this.state.actionPoint.y)
      ;
    else if (!state.actionPoint && !this.state.actionPoint)
      ;
    else {
      if (state.actionPoint)
        this.highlight.showActionPoint(state.actionPoint.x, state.actionPoint.y);
      else
        this.highlight.hideActionPoint();
    }
    this.state = state;
    this.highlight.setLanguage(state.language);
    this._switchCurrentTool();
    (_a = this.overlay) == null ? void 0 : _a.setUIState(state);
    if (((_b = this._actionSelectorModel) == null ? void 0 : _b.selector) && !((_c = this._actionSelectorModel) == null ? void 0 : _c.elements.length))
      this._actionSelectorModel = null;
    if (state.actionSelector !== ((_d = this._actionSelectorModel) == null ? void 0 : _d.selector))
      this._actionSelectorModel = state.actionSelector ? querySelector(this.injectedScript, state.actionSelector, this.document) : null;
    if (this.state.mode === "none" || this.state.mode === "standby")
      this.updateHighlight(this._actionSelectorModel, false);
  }
  clearHighlight() {
    var _a, _b;
    (_b = (_a = this._currentTool).cleanup) == null ? void 0 : _b.call(_a);
    this.updateHighlight(null, false);
  }
  _onClick(event) {
    var _a, _b, _c;
    if (!event.isTrusted)
      return;
    if ((_a = this.overlay) == null ? void 0 : _a.onClick(event))
      return;
    if (this._ignoreOverlayEvent(event))
      return;
    (_c = (_b = this._currentTool).onClick) == null ? void 0 : _c.call(_b, event);
  }
  _onContextMenu(event) {
    var _a, _b;
    if (!event.isTrusted)
      return;
    if (this._ignoreOverlayEvent(event))
      return;
    (_b = (_a = this._currentTool).onContextMenu) == null ? void 0 : _b.call(_a, event);
  }
  _onDragStart(event) {
    var _a, _b;
    if (!event.isTrusted)
      return;
    if (this._ignoreOverlayEvent(event))
      return;
    (_b = (_a = this._currentTool).onDragStart) == null ? void 0 : _b.call(_a, event);
  }
  _onPointerDown(event) {
    var _a, _b;
    if (!event.isTrusted)
      return;
    if (this._ignoreOverlayEvent(event))
      return;
    (_b = (_a = this._currentTool).onPointerDown) == null ? void 0 : _b.call(_a, event);
  }
  _onPointerUp(event) {
    var _a, _b;
    if (!event.isTrusted)
      return;
    if (this._ignoreOverlayEvent(event))
      return;
    (_b = (_a = this._currentTool).onPointerUp) == null ? void 0 : _b.call(_a, event);
  }
  _onMouseDown(event) {
    var _a, _b;
    if (!event.isTrusted)
      return;
    if (this._ignoreOverlayEvent(event))
      return;
    (_b = (_a = this._currentTool).onMouseDown) == null ? void 0 : _b.call(_a, event);
  }
  _onMouseUp(event) {
    var _a, _b, _c;
    if (!event.isTrusted)
      return;
    if ((_a = this.overlay) == null ? void 0 : _a.onMouseUp(event))
      return;
    if (this._ignoreOverlayEvent(event))
      return;
    (_c = (_b = this._currentTool).onMouseUp) == null ? void 0 : _c.call(_b, event);
  }
  _onMouseMove(event) {
    var _a, _b, _c;
    if (!event.isTrusted)
      return;
    if ((_a = this.overlay) == null ? void 0 : _a.onMouseMove(event))
      return;
    if (this._ignoreOverlayEvent(event))
      return;
    (_c = (_b = this._currentTool).onMouseMove) == null ? void 0 : _c.call(_b, event);
  }
  _onMouseEnter(event) {
    var _a, _b;
    if (!event.isTrusted)
      return;
    if (this._ignoreOverlayEvent(event))
      return;
    (_b = (_a = this._currentTool).onMouseEnter) == null ? void 0 : _b.call(_a, event);
  }
  _onMouseLeave(event) {
    var _a, _b;
    if (!event.isTrusted)
      return;
    if (this._ignoreOverlayEvent(event))
      return;
    (_b = (_a = this._currentTool).onMouseLeave) == null ? void 0 : _b.call(_a, event);
  }
  _onFocus(event) {
    var _a, _b;
    if (!event.isTrusted)
      return;
    if (this._ignoreOverlayEvent(event))
      return;
    (_b = (_a = this._currentTool).onFocus) == null ? void 0 : _b.call(_a, event);
  }
  _onScroll(event) {
    var _a, _b;
    if (!event.isTrusted)
      return;
    this.highlight.hideActionPoint();
    (_b = (_a = this._currentTool).onScroll) == null ? void 0 : _b.call(_a, event);
  }
  _onInput(event) {
    var _a, _b;
    if (this._ignoreOverlayEvent(event))
      return;
    (_b = (_a = this._currentTool).onInput) == null ? void 0 : _b.call(_a, event);
  }
  _onKeyDown(event) {
    var _a, _b;
    if (!event.isTrusted)
      return;
    if (this._ignoreOverlayEvent(event))
      return;
    (_b = (_a = this._currentTool).onKeyDown) == null ? void 0 : _b.call(_a, event);
  }
  _onKeyUp(event) {
    var _a, _b;
    if (!event.isTrusted)
      return;
    if (this._ignoreOverlayEvent(event))
      return;
    (_b = (_a = this._currentTool).onKeyUp) == null ? void 0 : _b.call(_a, event);
  }
  updateHighlight(model, userGesture) {
    var _a, _b;
    let tooltipText = model == null ? void 0 : model.tooltipText;
    if (tooltipText === void 0 && !(model == null ? void 0 : model.tooltipList) && (model == null ? void 0 : model.selector))
      tooltipText = this.injectedScript.utils.asLocator(this.state.language, model.selector);
    this.highlight.updateHighlight((model == null ? void 0 : model.elements) || [], { ...model, tooltipText });
    if (userGesture)
      (_b = (_a = this._delegate).highlightUpdated) == null ? void 0 : _b.call(_a);
  }
  _ignoreOverlayEvent(event) {
    return event.composedPath().some((e) => {
      const nodeName = e.nodeName || "";
      return nodeName.toLowerCase() === "x-pw-glass";
    });
  }
  deepEventTarget(event) {
    var _a;
    for (const element of event.composedPath()) {
      if (!((_a = this.overlay) == null ? void 0 : _a.contains(element)))
        return element;
    }
    return event.composedPath()[0];
  }
  setMode(mode) {
    var _a, _b;
    void ((_b = (_a = this._delegate).setMode) == null ? void 0 : _b.call(_a, mode));
  }
  async performAction(action) {
    var _a, _b;
    await ((_b = (_a = this._delegate).performAction) == null ? void 0 : _b.call(_a, action).catch(() => {
    }));
  }
  recordAction(action) {
    var _a, _b;
    void ((_b = (_a = this._delegate).recordAction) == null ? void 0 : _b.call(_a, action));
  }
  setOverlayState(state) {
    var _a, _b;
    void ((_b = (_a = this._delegate).setOverlayState) == null ? void 0 : _b.call(_a, state));
  }
  setSelector(selector) {
    var _a, _b;
    void ((_b = (_a = this._delegate).setSelector) == null ? void 0 : _b.call(_a, selector));
  }
}
class Dialog {
  constructor(recorder) {
    this._dialogElement = null;
    this._recorder = recorder;
  }
  isShowing() {
    return !!this._dialogElement;
  }
  show(options) {
    const acceptButton = this._recorder.document.createElement("x-pw-tool-item");
    acceptButton.title = "Accept";
    acceptButton.classList.add("accept");
    acceptButton.appendChild(this._recorder.document.createElement("x-div"));
    acceptButton.addEventListener("click", () => options.onCommit());
    const cancelButton = this._recorder.document.createElement("x-pw-tool-item");
    cancelButton.title = "Close";
    cancelButton.classList.add("cancel");
    cancelButton.appendChild(this._recorder.document.createElement("x-div"));
    cancelButton.addEventListener("click", () => {
      var _a;
      this.close();
      (_a = options.onCancel) == null ? void 0 : _a.call(options);
    });
    this._dialogElement = this._recorder.document.createElement("x-pw-dialog");
    this._keyboardListener = (event) => {
      var _a;
      if (event.key === "Escape") {
        this.close();
        (_a = options.onCancel) == null ? void 0 : _a.call(options);
        return;
      }
      if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
        if (this._dialogElement)
          options.onCommit();
        return;
      }
    };
    this._recorder.document.addEventListener("keydown", this._keyboardListener, true);
    const toolbarElement = this._recorder.document.createElement("x-pw-tools-list");
    const labelElement = this._recorder.document.createElement("label");
    labelElement.textContent = options.label;
    toolbarElement.appendChild(labelElement);
    toolbarElement.appendChild(this._recorder.document.createElement("x-spacer"));
    toolbarElement.appendChild(acceptButton);
    toolbarElement.appendChild(cancelButton);
    this._dialogElement.appendChild(toolbarElement);
    const bodyElement = this._recorder.document.createElement("x-pw-dialog-body");
    bodyElement.appendChild(options.body);
    this._dialogElement.appendChild(bodyElement);
    this._recorder.highlight.appendChild(this._dialogElement);
    return this._dialogElement;
  }
  moveTo(top, left) {
    if (!this._dialogElement)
      return;
    this._dialogElement.style.top = top + "px";
    this._dialogElement.style.left = left + "px";
  }
  close() {
    if (!this._dialogElement)
      return;
    this._dialogElement.remove();
    this._recorder.document.removeEventListener("keydown", this._keyboardListener);
    this._dialogElement = null;
  }
}
function deepActiveElement(document2) {
  let activeElement = document2.activeElement;
  while (activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement)
    activeElement = activeElement.shadowRoot.activeElement;
  return activeElement;
}
function modifiersForEvent(event) {
  return (event.altKey ? 1 : 0) | (event.ctrlKey ? 2 : 0) | (event.metaKey ? 4 : 0) | (event.shiftKey ? 8 : 0);
}
function buttonForEvent(event) {
  switch (event.which) {
    case 1:
      return "left";
    case 2:
      return "middle";
    case 3:
      return "right";
  }
  return "left";
}
function positionForEvent(event) {
  const targetElement = event.target;
  if (targetElement.nodeName !== "CANVAS")
    return;
  return {
    x: event.offsetX,
    y: event.offsetY
  };
}
function consumeEvent(e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
}
function asCheckbox(node) {
  if (!node || node.nodeName !== "INPUT")
    return null;
  const inputElement = node;
  return ["checkbox", "radio"].includes(inputElement.type) ? inputElement : null;
}
function isRangeInput(node) {
  if (!node || node.nodeName !== "INPUT")
    return false;
  const inputElement = node;
  return inputElement.type.toLowerCase() === "range";
}
function addEventListener(target, eventName, listener, useCapture) {
  target.addEventListener(eventName, listener, useCapture);
  const remove = () => {
    target.removeEventListener(eventName, listener, useCapture);
  };
  return remove;
}
function removeEventListeners(listeners2) {
  for (const listener of listeners2)
    listener();
  listeners2.splice(0, listeners2.length);
}
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
function createSvgElement(doc, { tagName, attrs, children }) {
  const elem = doc.createElementNS("http://www.w3.org/2000/svg", tagName);
  if (attrs) {
    for (const [k2, v2] of Object.entries(attrs))
      elem.setAttribute(k2, v2);
  }
  if (children) {
    for (const c of children)
      elem.appendChild(createSvgElement(doc, c));
  }
  return elem;
}
function getByAttributeTextSelector(attrName, text, options) {
  return `internal:attr=[${attrName}=${escapeForAttributeSelector(text, (options == null ? void 0 : options.exact) || false)}]`;
}
function getByTestIdSelector(testIdAttributeName, testId) {
  return `internal:testid=[${testIdAttributeName}=${escapeForAttributeSelector(testId, true)}]`;
}
function getByLabelSelector(text, options) {
  return "internal:label=" + escapeForTextSelector(text, !!(options == null ? void 0 : options.exact));
}
function getByAltTextSelector(text, options) {
  return getByAttributeTextSelector("alt", text, options);
}
function getByTitleSelector(text, options) {
  return getByAttributeTextSelector("title", text, options);
}
function getByPlaceholderSelector(text, options) {
  return getByAttributeTextSelector("placeholder", text, options);
}
function getByTextSelector(text, options) {
  return "internal:text=" + escapeForTextSelector(text, !!(options == null ? void 0 : options.exact));
}
function getByRoleSelector(role, options = {}) {
  const props = [];
  if (options.checked !== void 0)
    props.push(["checked", String(options.checked)]);
  if (options.disabled !== void 0)
    props.push(["disabled", String(options.disabled)]);
  if (options.selected !== void 0)
    props.push(["selected", String(options.selected)]);
  if (options.expanded !== void 0)
    props.push(["expanded", String(options.expanded)]);
  if (options.includeHidden !== void 0)
    props.push(["include-hidden", String(options.includeHidden)]);
  if (options.level !== void 0)
    props.push(["level", String(options.level)]);
  if (options.name !== void 0)
    props.push(["name", escapeForAttributeSelector(options.name, !!options.exact)]);
  if (options.pressed !== void 0)
    props.push(["pressed", String(options.pressed)]);
  return `internal:role=${role}${props.map(([n2, v2]) => `[${n2}=${v2}]`).join("")}`;
}
const selectorSymbol = Symbol("selector");
class Locator {
  constructor(injectedScript, selector, options) {
    if (options == null ? void 0 : options.hasText)
      selector += ` >> internal:has-text=${escapeForTextSelector(options.hasText, false)}`;
    if (options == null ? void 0 : options.hasNotText)
      selector += ` >> internal:has-not-text=${escapeForTextSelector(options.hasNotText, false)}`;
    if (options == null ? void 0 : options.has)
      selector += ` >> internal:has=` + JSON.stringify(options.has[selectorSymbol]);
    if (options == null ? void 0 : options.hasNot)
      selector += ` >> internal:has-not=` + JSON.stringify(options.hasNot[selectorSymbol]);
    this[selectorSymbol] = selector;
    if (selector) {
      const parsed = injectedScript.parseSelector(selector);
      this.element = injectedScript.querySelector(parsed, injectedScript.document, false);
      this.elements = injectedScript.querySelectorAll(parsed, injectedScript.document);
    }
    const selectorBase = selector;
    const self2 = this;
    self2.locator = (selector2, options2) => {
      return new Locator(injectedScript, selectorBase ? selectorBase + " >> " + selector2 : selector2, options2);
    };
    self2.getByTestId = (testId) => self2.locator(getByTestIdSelector(injectedScript.testIdAttributeNameForStrictErrorAndConsoleCodegen(), testId));
    self2.getByAltText = (text, options2) => self2.locator(getByAltTextSelector(text, options2));
    self2.getByLabel = (text, options2) => self2.locator(getByLabelSelector(text, options2));
    self2.getByPlaceholder = (text, options2) => self2.locator(getByPlaceholderSelector(text, options2));
    self2.getByText = (text, options2) => self2.locator(getByTextSelector(text, options2));
    self2.getByTitle = (text, options2) => self2.locator(getByTitleSelector(text, options2));
    self2.getByRole = (role, options2 = {}) => self2.locator(getByRoleSelector(role, options2));
    self2.filter = (options2) => new Locator(injectedScript, selector, options2);
    self2.first = () => self2.locator("nth=0");
    self2.last = () => self2.locator("nth=-1");
    self2.nth = (index) => self2.locator(`nth=${index}`);
    self2.and = (locator) => new Locator(injectedScript, selectorBase + ` >> internal:and=` + JSON.stringify(locator[selectorSymbol]));
    self2.or = (locator) => new Locator(injectedScript, selectorBase + ` >> internal:or=` + JSON.stringify(locator[selectorSymbol]));
  }
}
class ConsoleAPI {
  constructor(injectedScript) {
    this._injectedScript = injectedScript;
    if (this._injectedScript.window.playwright)
      return;
    this._injectedScript.window.playwright = {
      $: (selector, strict) => this._querySelector(selector, !!strict),
      $$: (selector) => this._querySelectorAll(selector),
      inspect: (selector) => this._inspect(selector),
      selector: (element) => this._selector(element),
      generateLocator: (element, language) => this._generateLocator(element, language),
      resume: () => this._resume(),
      ...new Locator(injectedScript, "")
    };
    delete this._injectedScript.window.playwright.filter;
    delete this._injectedScript.window.playwright.first;
    delete this._injectedScript.window.playwright.last;
    delete this._injectedScript.window.playwright.nth;
    delete this._injectedScript.window.playwright.and;
    delete this._injectedScript.window.playwright.or;
  }
  _querySelector(selector, strict) {
    if (typeof selector !== "string")
      throw new Error(`Usage: playwright.query('Playwright >> selector').`);
    const parsed = this._injectedScript.parseSelector(selector);
    return this._injectedScript.querySelector(parsed, this._injectedScript.document, strict);
  }
  _querySelectorAll(selector) {
    if (typeof selector !== "string")
      throw new Error(`Usage: playwright.$$('Playwright >> selector').`);
    const parsed = this._injectedScript.parseSelector(selector);
    return this._injectedScript.querySelectorAll(parsed, this._injectedScript.document);
  }
  _inspect(selector) {
    if (typeof selector !== "string")
      throw new Error(`Usage: playwright.inspect('Playwright >> selector').`);
    this._injectedScript.window.inspect(this._querySelector(selector, false));
  }
  _selector(element) {
    if (!(element instanceof Element))
      throw new Error(`Usage: playwright.selector(element).`);
    return this._injectedScript.generateSelectorSimple(element);
  }
  _generateLocator(element, language) {
    if (!(element instanceof Element))
      throw new Error(`Usage: playwright.locator(element).`);
    const selector = this._injectedScript.generateSelectorSimple(element);
    return asLocator(language || "javascript", selector);
  }
  _resume() {
    this._injectedScript.window.__pw_resume().catch(() => {
    });
  }
}
function parseLocator(locator, testIdAttributeName) {
  locator = locator.replace(/AriaRole\s*\.\s*([\w]+)/g, (_, group) => group.toLowerCase()).replace(/(get_by_role|getByRole)\s*\(\s*(?:["'`])([^'"`]+)['"`]/g, (_, group1, group2) => `${group1}(${group2.toLowerCase()}`);
  const params = [];
  let template = "";
  for (let i = 0; i < locator.length; ++i) {
    const quote = locator[i];
    if (quote !== '"' && quote !== "'" && quote !== "`" && quote !== "/") {
      template += quote;
      continue;
    }
    const isRegexEscaping = locator[i - 1] === "r" || locator[i] === "/";
    ++i;
    let text = "";
    while (i < locator.length) {
      if (locator[i] === "\\") {
        if (isRegexEscaping) {
          if (locator[i + 1] !== quote)
            text += locator[i];
          ++i;
          text += locator[i];
        } else {
          ++i;
          if (locator[i] === "n")
            text += "\n";
          else if (locator[i] === "r")
            text += "\r";
          else if (locator[i] === "t")
            text += "	";
          else
            text += locator[i];
        }
        ++i;
        continue;
      }
      if (locator[i] !== quote) {
        text += locator[i++];
        continue;
      }
      break;
    }
    params.push({ quote, text });
    template += (quote === "/" ? "r" : "") + "$" + params.length;
  }
  template = template.toLowerCase().replace(/get_by_alt_text/g, "getbyalttext").replace(/get_by_test_id/g, "getbytestid").replace(/get_by_([\w]+)/g, "getby$1").replace(/has_not_text/g, "hasnottext").replace(/has_text/g, "hastext").replace(/has_not/g, "hasnot").replace(/frame_locator/g, "framelocator").replace(/[{}\s]/g, "").replace(/new\(\)/g, "").replace(/new[\w]+\.[\w]+options\(\)/g, "").replace(/\.set/g, ",set").replace(/\.or_\(/g, "or(").replace(/\.and_\(/g, "and(").replace(/:/g, "=").replace(/,re\.ignorecase/g, "i").replace(/,pattern.case_insensitive/g, "i").replace(/,regexoptions.ignorecase/g, "i").replace(/re.compile\(([^)]+)\)/g, "$1").replace(/pattern.compile\(([^)]+)\)/g, "r$1").replace(/newregex\(([^)]+)\)/g, "r$1").replace(/string=/g, "=").replace(/regex=/g, "=").replace(/,,/g, ",");
  const preferredQuote = params.map((p2) => p2.quote).filter((quote) => "'\"`".includes(quote))[0];
  return { selector: transform(template, params, testIdAttributeName), preferredQuote };
}
function countParams(template) {
  return [...template.matchAll(/\$\d+/g)].length;
}
function shiftParams(template, sub) {
  return template.replace(/\$(\d+)/g, (_, ordinal) => `$${ordinal - sub}`);
}
function transform(template, params, testIdAttributeName) {
  while (true) {
    const hasMatch = template.match(/filter\(,?(has=|hasnot=|sethas\(|sethasnot\()/);
    if (!hasMatch)
      break;
    const start = hasMatch.index + hasMatch[0].length;
    let balance = 0;
    let end = start;
    for (; end < template.length; end++) {
      if (template[end] === "(")
        balance++;
      else if (template[end] === ")")
        balance--;
      if (balance < 0)
        break;
    }
    let prefix = template.substring(0, start);
    let extraSymbol = 0;
    if (["sethas(", "sethasnot("].includes(hasMatch[1])) {
      extraSymbol = 1;
      prefix = prefix.replace(/sethas\($/, "has=").replace(/sethasnot\($/, "hasnot=");
    }
    const paramsCountBeforeHas = countParams(template.substring(0, start));
    const hasTemplate = shiftParams(template.substring(start, end), paramsCountBeforeHas);
    const paramsCountInHas = countParams(hasTemplate);
    const hasParams = params.slice(paramsCountBeforeHas, paramsCountBeforeHas + paramsCountInHas);
    const hasSelector = JSON.stringify(transform(hasTemplate, hasParams, testIdAttributeName));
    template = prefix.replace(/=$/, "2=") + `$${paramsCountBeforeHas + 1}` + shiftParams(template.substring(end + extraSymbol), paramsCountInHas - 1);
    const paramsBeforeHas = params.slice(0, paramsCountBeforeHas);
    const paramsAfterHas = params.slice(paramsCountBeforeHas + paramsCountInHas);
    params = paramsBeforeHas.concat([{ quote: '"', text: hasSelector }]).concat(paramsAfterHas);
  }
  template = template.replace(/\,set([\w]+)\(([^)]+)\)/g, (_, group1, group2) => "," + group1.toLowerCase() + "=" + group2.toLowerCase()).replace(/framelocator\(([^)]+)\)/g, "$1.internal:control=enter-frame").replace(/locator\(([^)]+),hastext=([^),]+)\)/g, "locator($1).internal:has-text=$2").replace(/locator\(([^)]+),hasnottext=([^),]+)\)/g, "locator($1).internal:has-not-text=$2").replace(/locator\(([^)]+),hastext=([^),]+)\)/g, "locator($1).internal:has-text=$2").replace(/locator\(([^)]+)\)/g, "$1").replace(/getbyrole\(([^)]+)\)/g, "internal:role=$1").replace(/getbytext\(([^)]+)\)/g, "internal:text=$1").replace(/getbylabel\(([^)]+)\)/g, "internal:label=$1").replace(/getbytestid\(([^)]+)\)/g, `internal:testid=[${testIdAttributeName}=$1]`).replace(/getby(placeholder|alt|title)(?:text)?\(([^)]+)\)/g, "internal:attr=[$1=$2]").replace(/first(\(\))?/g, "nth=0").replace(/last(\(\))?/g, "nth=-1").replace(/nth\(([^)]+)\)/g, "nth=$1").replace(/filter\(,?hastext=([^)]+)\)/g, "internal:has-text=$1").replace(/filter\(,?hasnottext=([^)]+)\)/g, "internal:has-not-text=$1").replace(/filter\(,?has2=([^)]+)\)/g, "internal:has=$1").replace(/filter\(,?hasnot2=([^)]+)\)/g, "internal:has-not=$1").replace(/,exact=false/g, "").replace(/,exact=true/g, "s").replace(/\,/g, "][");
  const parts = template.split(".");
  for (let index = 0; index < parts.length - 1; index++) {
    if (parts[index] === "internal:control=enter-frame" && parts[index + 1].startsWith("nth=")) {
      const [nth] = parts.splice(index, 1);
      parts.splice(index + 1, 0, nth);
    }
  }
  return parts.map((t2) => {
    if (!t2.startsWith("internal:") || t2 === "internal:control")
      return t2.replace(/\$(\d+)/g, (_, ordinal) => {
        const param = params[+ordinal - 1];
        return param.text;
      });
    t2 = t2.includes("[") ? t2.replace(/\]/, "") + "]" : t2;
    t2 = t2.replace(/(?:r)\$(\d+)(i)?/g, (_, ordinal, suffix) => {
      const param = params[+ordinal - 1];
      if (t2.startsWith("internal:attr") || t2.startsWith("internal:testid") || t2.startsWith("internal:role"))
        return escapeForAttributeSelector(new RegExp(param.text), false) + (suffix || "");
      return escapeForTextSelector(new RegExp(param.text, suffix), false);
    }).replace(/\$(\d+)(i|s)?/g, (_, ordinal, suffix) => {
      const param = params[+ordinal - 1];
      if (t2.startsWith("internal:has=") || t2.startsWith("internal:has-not="))
        return param.text;
      if (t2.startsWith("internal:testid"))
        return escapeForAttributeSelector(param.text, true);
      if (t2.startsWith("internal:attr") || t2.startsWith("internal:role"))
        return escapeForAttributeSelector(param.text, suffix === "s");
      return escapeForTextSelector(param.text, suffix === "s");
    });
    return t2;
  }).join(" >> ");
}
function locatorOrSelectorAsSelector(language, locator, testIdAttributeName) {
  try {
    parseSelector(locator);
    return locator;
  } catch (e) {
  }
  try {
    const { selector, preferredQuote } = parseLocator(locator, testIdAttributeName);
    const locators = asLocators(language, selector, void 0, void 0, preferredQuote);
    const digest = digestForComparison(language, locator);
    if (locators.some((candidate) => digestForComparison(language, candidate) === digest))
      return selector;
  } catch (e) {
  }
  return "";
}
function digestForComparison(language, locator) {
  locator = locator.replace(/\s/g, "");
  if (language === "javascript")
    locator = locator.replace(/\\?["`]/g, "'");
  return locator;
}
const BrowserFrame = ({ url }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "browser-frame-header", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { whiteSpace: "nowrap" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "browser-frame-dot", style: { backgroundColor: "rgb(242, 95, 88)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "browser-frame-dot", style: { backgroundColor: "rgb(251, 190, 60)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "browser-frame-dot", style: { backgroundColor: "rgb(88, 203, 66)" } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "browser-frame-address-bar", title: url || "about:blank", children: url || "about:blank" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginLeft: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "browser-frame-menu-bar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "browser-frame-menu-bar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "browser-frame-menu-bar" })
    ] }) })
  ] });
};
const SnapshotTab = ({ action, sdkLanguage, testIdAttributeName, isInspecting, setIsInspecting, highlightedLocator, setHighlightedLocator, openPage }) => {
  const [measure, ref] = useMeasure();
  const [snapshotTab, setSnapshotTab] = reactExports.useState("action");
  const { snapshots } = reactExports.useMemo(() => {
    if (!action)
      return { snapshots: {} };
    let beforeSnapshot = action.beforeSnapshot ? { action, snapshotName: action.beforeSnapshot } : void 0;
    let a = action;
    while (!beforeSnapshot && a) {
      a = prevInList(a);
      beforeSnapshot = (a == null ? void 0 : a.afterSnapshot) ? { action: a, snapshotName: a == null ? void 0 : a.afterSnapshot } : void 0;
    }
    const afterSnapshot = action.afterSnapshot ? { action, snapshotName: action.afterSnapshot } : beforeSnapshot;
    const actionSnapshot = action.inputSnapshot ? { action, snapshotName: action.inputSnapshot } : afterSnapshot;
    if (actionSnapshot)
      actionSnapshot.point = action.point;
    return { snapshots: { action: actionSnapshot, before: beforeSnapshot, after: afterSnapshot } };
  }, [action]);
  const { snapshotInfoUrl, snapshotUrl, popoutUrl } = reactExports.useMemo(() => {
    const snapshot = snapshots[snapshotTab];
    if (!snapshot)
      return { snapshotUrl: kBlankSnapshotUrl };
    const params = new URLSearchParams();
    params.set("trace", context(snapshot.action).traceUrl);
    params.set("name", snapshot.snapshotName);
    if (snapshot.point) {
      params.set("pointX", String(snapshot.point.x));
      params.set("pointY", String(snapshot.point.y));
    }
    const snapshotUrl2 = new URL(`snapshot/${snapshot.action.pageId}?${params.toString()}`, window.location.href).toString();
    const snapshotInfoUrl2 = new URL(`snapshotInfo/${snapshot.action.pageId}?${params.toString()}`, window.location.href).toString();
    const popoutParams = new URLSearchParams();
    popoutParams.set("r", snapshotUrl2);
    popoutParams.set("trace", context(snapshot.action).traceUrl);
    if (snapshot.point) {
      popoutParams.set("pointX", String(snapshot.point.x));
      popoutParams.set("pointY", String(snapshot.point.y));
    }
    const popoutUrl2 = new URL(`snapshot.html?${popoutParams.toString()}`, window.location.href).toString();
    return { snapshots, snapshotInfoUrl: snapshotInfoUrl2, snapshotUrl: snapshotUrl2, popoutUrl: popoutUrl2 };
  }, [snapshots, snapshotTab]);
  const iframeRef0 = reactExports.useRef(null);
  const iframeRef1 = reactExports.useRef(null);
  const [snapshotInfo, setSnapshotInfo] = reactExports.useState({ viewport: kDefaultViewport, url: "" });
  const loadingRef = reactExports.useRef({ iteration: 0, visibleIframe: 0 });
  reactExports.useEffect(() => {
    (async () => {
      const thisIteration = loadingRef.current.iteration + 1;
      const newVisibleIframe = 1 - loadingRef.current.visibleIframe;
      loadingRef.current.iteration = thisIteration;
      const newSnapshotInfo = { url: "", viewport: kDefaultViewport };
      if (snapshotInfoUrl) {
        const response = await fetch(snapshotInfoUrl);
        const info = await response.json();
        if (!info.error) {
          newSnapshotInfo.url = info.url;
          newSnapshotInfo.viewport = info.viewport;
        }
      }
      if (loadingRef.current.iteration !== thisIteration)
        return;
      const iframe = [iframeRef0, iframeRef1][newVisibleIframe].current;
      if (iframe) {
        let loadedCallback = () => {
        };
        const loadedPromise = new Promise((f2) => loadedCallback = f2);
        try {
          iframe.addEventListener("load", loadedCallback);
          iframe.addEventListener("error", loadedCallback);
          if (iframe.contentWindow)
            iframe.contentWindow.location.replace(snapshotUrl);
          else
            iframe.src = snapshotUrl;
          await loadedPromise;
        } catch {
        } finally {
          iframe.removeEventListener("load", loadedCallback);
          iframe.removeEventListener("error", loadedCallback);
        }
      }
      if (loadingRef.current.iteration !== thisIteration)
        return;
      loadingRef.current.visibleIframe = newVisibleIframe;
      setSnapshotInfo(newSnapshotInfo);
    })();
  }, [snapshotUrl, snapshotInfoUrl]);
  const windowHeaderHeight = 40;
  const snapshotContainerSize = {
    width: snapshotInfo.viewport.width,
    height: snapshotInfo.viewport.height + windowHeaderHeight
  };
  const scale = Math.min(measure.width / snapshotContainerSize.width, measure.height / snapshotContainerSize.height, 1);
  const translate = {
    x: (measure.width - snapshotContainerSize.width) / 2,
    y: (measure.height - snapshotContainerSize.height) / 2
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "snapshot-tab",
      tabIndex: 0,
      onKeyDown: (event) => {
        if (event.key === "Escape") {
          if (isInspecting)
            setIsInspecting(false);
        }
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          InspectModeController,
          {
            isInspecting,
            sdkLanguage,
            testIdAttributeName,
            highlightedLocator,
            setHighlightedLocator,
            iframe: iframeRef0.current,
            iteration: loadingRef.current.iteration
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          InspectModeController,
          {
            isInspecting,
            sdkLanguage,
            testIdAttributeName,
            highlightedLocator,
            setHighlightedLocator,
            iframe: iframeRef1.current,
            iteration: loadingRef.current.iteration
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Toolbar, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { className: "pick-locator", title: "Pick locator", icon: "target", toggled: isInspecting, onClick: () => setIsInspecting(!isInspecting) }),
          ["action", "before", "after"].map((tab) => {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              TabbedPaneTab,
              {
                id: tab,
                title: renderTitle(tab),
                selected: snapshotTab === tab,
                onSelect: () => setSnapshotTab(tab)
              },
              tab
            );
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: "auto" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "link-external", title: "Open snapshot in a new tab", disabled: !popoutUrl, onClick: () => {
            if (!openPage)
              openPage = window.open;
            const win = openPage(popoutUrl || "", "_blank");
            win == null ? void 0 : win.addEventListener("DOMContentLoaded", () => {
              const injectedScript = new InjectedScript(win, false, sdkLanguage, testIdAttributeName, 1, "chromium", []);
              new ConsoleAPI(injectedScript);
            });
          } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: "snapshot-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "snapshot-container", style: {
          width: snapshotContainerSize.width + "px",
          height: snapshotContainerSize.height + "px",
          transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserFrame, { url: snapshotInfo.url }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "snapshot-switcher", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { ref: iframeRef0, name: "snapshot", title: "DOM Snapshot", className: clsx(loadingRef.current.visibleIframe === 0 && "snapshot-visible") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { ref: iframeRef1, name: "snapshot", title: "DOM Snapshot", className: clsx(loadingRef.current.visibleIframe === 1 && "snapshot-visible") })
          ] })
        ] }) })
      ]
    }
  );
};
function renderTitle(snapshotTitle) {
  if (snapshotTitle === "before")
    return "Before";
  if (snapshotTitle === "after")
    return "After";
  if (snapshotTitle === "action")
    return "Action";
  return snapshotTitle;
}
const InspectModeController = ({ iframe, isInspecting, sdkLanguage, testIdAttributeName, highlightedLocator, setHighlightedLocator, iteration }) => {
  reactExports.useEffect(() => {
    const recorders = [];
    const isUnderTest = new URLSearchParams(window.location.search).get("isUnderTest") === "true";
    try {
      createRecorders(recorders, sdkLanguage, testIdAttributeName, isUnderTest, "", iframe == null ? void 0 : iframe.contentWindow);
    } catch {
    }
    for (const { recorder, frameSelector } of recorders) {
      const actionSelector = locatorOrSelectorAsSelector(sdkLanguage, highlightedLocator, testIdAttributeName);
      recorder.setUIState({
        mode: isInspecting ? "inspecting" : "none",
        actionSelector: actionSelector.startsWith(frameSelector) ? actionSelector.substring(frameSelector.length).trim() : void 0,
        language: sdkLanguage,
        testIdAttributeName,
        overlay: { offsetX: 0 }
      }, {
        async setSelector(selector) {
          setHighlightedLocator(asLocator(sdkLanguage, frameSelector + selector));
        },
        highlightUpdated() {
          for (const r2 of recorders) {
            if (r2.recorder !== recorder)
              r2.recorder.clearHighlight();
          }
        }
      });
    }
  }, [iframe, isInspecting, highlightedLocator, setHighlightedLocator, sdkLanguage, testIdAttributeName, iteration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
};
function createRecorders(recorders, sdkLanguage, testIdAttributeName, isUnderTest, parentFrameSelector, frameWindow) {
  if (!frameWindow)
    return;
  const win = frameWindow;
  if (!win._recorder) {
    const injectedScript = new InjectedScript(frameWindow, isUnderTest, sdkLanguage, testIdAttributeName, 1, "chromium", []);
    const recorder = new Recorder(injectedScript);
    win._injectedScript = injectedScript;
    win._recorder = { recorder, frameSelector: parentFrameSelector };
  }
  recorders.push(win._recorder);
  for (let i = 0; i < frameWindow.frames.length; ++i) {
    const childFrame = frameWindow.frames[i];
    const frameSelector = childFrame.frameElement ? win._injectedScript.generateSelectorSimple(childFrame.frameElement, { omitInternalEngines: true, testIdAttributeName }) + " >> internal:control=enter-frame >> " : "";
    createRecorders(recorders, sdkLanguage, testIdAttributeName, isUnderTest, parentFrameSelector + frameSelector, childFrame);
  }
}
const kDefaultViewport = { width: 1280, height: 720 };
const kBlankSnapshotUrl = 'data:text/html,<body style="background: #ddd"></body>';
const StackFrameListView = ListView;
const StackTraceView = ({ stack, setSelectedFrame, selectedFrame }) => {
  const frames = stack || [];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    StackFrameListView,
    {
      name: "stack-trace",
      items: frames,
      selectedItem: frames[selectedFrame],
      render: (frame) => {
        const pathSep = frame.file[1] === ":" ? "\\" : "/";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stack-trace-frame-function", children: frame.function || "(anonymous)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stack-trace-frame-location", children: frame.file.split(pathSep).pop() }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stack-trace-frame-line", children: ":" + frame.line })
        ] });
      },
      onSelected: (frame) => setSelectedFrame(frames.indexOf(frame))
    }
  );
};
const SourceTab = ({ stack, sources, rootDir, fallbackLocation, stackFrameLocation, onOpenExternally }) => {
  const [lastStack, setLastStack] = reactExports.useState();
  const [selectedFrame, setSelectedFrame] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (lastStack !== stack) {
      setLastStack(stack);
      setSelectedFrame(0);
    }
  }, [stack, lastStack, setLastStack, setSelectedFrame]);
  const { source, highlight, targetLine, fileName, location } = useAsyncMemo(async () => {
    var _a, _b;
    const actionLocation = stack == null ? void 0 : stack[selectedFrame];
    const shouldUseFallback = !(actionLocation == null ? void 0 : actionLocation.file);
    if (shouldUseFallback && !fallbackLocation)
      return { source: { file: "", errors: [], content: void 0 }, targetLine: 0, highlight: [] };
    const file = shouldUseFallback ? fallbackLocation.file : actionLocation.file;
    let source2 = sources.get(file);
    if (!source2) {
      source2 = { errors: ((_a = fallbackLocation == null ? void 0 : fallbackLocation.source) == null ? void 0 : _a.errors) || [], content: void 0 };
      sources.set(file, source2);
    }
    const location2 = shouldUseFallback ? fallbackLocation : actionLocation;
    const targetLine2 = shouldUseFallback ? (fallbackLocation == null ? void 0 : fallbackLocation.line) || ((_b = source2.errors[0]) == null ? void 0 : _b.line) || 0 : actionLocation.line;
    const fileName2 = rootDir && file.startsWith(rootDir) ? file.substring(rootDir.length + 1) : file;
    const highlight2 = source2.errors.map((e) => ({ type: "error", line: e.line, message: e.message }));
    highlight2.push({ line: targetLine2, type: "running" });
    if (source2.content === void 0 || shouldUseFallback) {
      const sha1 = await calculateSha1(file);
      try {
        let response = await fetch(`sha1/src@${sha1}.txt`);
        if (response.status === 404)
          response = await fetch(`file?path=${encodeURIComponent(file)}`);
        if (response.status >= 400)
          source2.content = `<Unable to read "${file}">`;
        else
          source2.content = await response.text();
      } catch {
        source2.content = `<Unable to read "${file}">`;
      }
    }
    return { source: source2, highlight: highlight2, targetLine: targetLine2, fileName: fileName2, location: location2 };
  }, [stack, selectedFrame, rootDir, fallbackLocation], { source: { errors: [], content: "Loading…" }, highlight: [] });
  const openExternally = reactExports.useCallback(() => {
    if (!location)
      return;
    if (onOpenExternally) {
      onOpenExternally(location);
    } else {
      window.location.href = `vscode://file//${location.file}:${location.line}`;
    }
  }, [onOpenExternally, location]);
  const showStackFrames = ((stack == null ? void 0 : stack.length) ?? 0) > 1;
  const shortFileName = getFileName(fileName);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SplitView,
    {
      sidebarSize: 200,
      orientation: stackFrameLocation === "bottom" ? "vertical" : "horizontal",
      sidebarHidden: !showStackFrames,
      main: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "vbox", "data-testid": "source-code", children: [
        fileName && /* @__PURE__ */ jsxRuntimeExports.jsxs(Toolbar, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "source-tab-file-name", title: fileName, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: shortFileName }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CopyToClipboard, { description: "Copy filename", value: shortFileName }),
          location && /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "link-external", title: "Open in VS Code", onClick: openExternally })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeMirrorWrapper, { text: source.content || "", language: "javascript", highlight, revealLine: targetLine, readOnly: true, lineNumbers: true })
      ] }),
      sidebar: /* @__PURE__ */ jsxRuntimeExports.jsx(StackTraceView, { stack, selectedFrame, setSelectedFrame })
    }
  );
};
async function calculateSha1(text) {
  const buffer = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-1", buffer);
  const hexCodes = [];
  const view = new DataView(hash);
  for (let i = 0; i < view.byteLength; i += 1) {
    const byte = view.getUint8(i).toString(16).padStart(2, "0");
    hexCodes.push(byte);
  }
  return hexCodes.join("");
}
function getFileName(fullPath) {
  if (!fullPath)
    return "";
  const pathSep = (fullPath == null ? void 0 : fullPath.includes("/")) ? "/" : "\\";
  return (fullPath == null ? void 0 : fullPath.split(pathSep).pop()) ?? "";
}
const tileSize = { width: 200, height: 45 };
const frameMargin = 2.5;
const rowHeight = tileSize.height + frameMargin * 2;
const FilmStrip = ({ model, boundaries, previewPoint }) => {
  var _a, _b;
  const [measure, ref] = useMeasure();
  const lanesRef = reactExports.useRef(null);
  let pageIndex = 0;
  if (lanesRef.current && previewPoint) {
    const bounds = lanesRef.current.getBoundingClientRect();
    pageIndex = (previewPoint.clientY - bounds.top + lanesRef.current.scrollTop) / rowHeight | 0;
  }
  const screencastFrames = (_b = (_a = model == null ? void 0 : model.pages) == null ? void 0 : _a[pageIndex]) == null ? void 0 : _b.screencastFrames;
  let previewImage = void 0;
  let previewSize = void 0;
  if (previewPoint !== void 0 && screencastFrames && screencastFrames.length) {
    const previewTime = boundaries.minimum + (boundaries.maximum - boundaries.minimum) * previewPoint.x / measure.width;
    previewImage = screencastFrames[upperBound(screencastFrames, previewTime, timeComparator) - 1];
    const fitInto = {
      width: Math.min(800, window.innerWidth / 2 | 0),
      height: Math.min(800, window.innerHeight / 2 | 0)
    };
    previewSize = previewImage ? inscribe({ width: previewImage.width, height: previewImage.height }, fitInto) : void 0;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "film-strip", ref, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "film-strip-lanes", ref: lanesRef, children: model == null ? void 0 : model.pages.map((page, index) => page.screencastFrames.length ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      FilmStripLane,
      {
        boundaries,
        page,
        width: measure.width
      },
      index
    ) : null) }),
    (previewPoint == null ? void 0 : previewPoint.x) !== void 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "film-strip-hover", style: {
      top: measure.bottom + 5,
      left: Math.min(previewPoint.x, measure.width - (previewSize ? previewSize.width : 0) - 10)
    }, children: [
      previewPoint.action && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "film-strip-hover-title", children: renderAction(previewPoint.action, previewPoint) }),
      previewImage && previewSize && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: previewSize.width, height: previewSize.height }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: `sha1/${previewImage.sha1}`, width: previewSize.width, height: previewSize.height }) })
    ] })
  ] });
};
const FilmStripLane = ({ boundaries, page, width }) => {
  const viewportSize = { width: 0, height: 0 };
  const screencastFrames = page.screencastFrames;
  for (const frame of screencastFrames) {
    viewportSize.width = Math.max(viewportSize.width, frame.width);
    viewportSize.height = Math.max(viewportSize.height, frame.height);
  }
  const frameSize = inscribe(viewportSize, tileSize);
  const startTime = screencastFrames[0].timestamp;
  const endTime = screencastFrames[screencastFrames.length - 1].timestamp;
  const boundariesDuration = boundaries.maximum - boundaries.minimum;
  const gapLeft = (startTime - boundaries.minimum) / boundariesDuration * width;
  const gapRight = (boundaries.maximum - endTime) / boundariesDuration * width;
  const effectiveWidth = (endTime - startTime) / boundariesDuration * width;
  const frameCount = effectiveWidth / (frameSize.width + 2 * frameMargin) | 0;
  const frameDuration = (endTime - startTime) / frameCount;
  const frames = [];
  for (let i = 0; startTime && frameDuration && i < frameCount; ++i) {
    const time = startTime + frameDuration * i;
    const index = upperBound(screencastFrames, time, timeComparator) - 1;
    frames.push(/* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "film-strip-frame", style: {
      width: frameSize.width,
      height: frameSize.height,
      backgroundImage: `url(sha1/${screencastFrames[index].sha1})`,
      backgroundSize: `${frameSize.width}px ${frameSize.height}px`,
      margin: frameMargin,
      marginRight: frameMargin
    } }, i));
  }
  frames.push(/* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "film-strip-frame", style: {
    width: frameSize.width,
    height: frameSize.height,
    backgroundImage: `url(sha1/${screencastFrames[screencastFrames.length - 1].sha1})`,
    backgroundSize: `${frameSize.width}px ${frameSize.height}px`,
    margin: frameMargin,
    marginRight: frameMargin
  } }, frames.length));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "film-strip-lane", style: {
    marginLeft: gapLeft + "px",
    marginRight: gapRight + "px"
  }, children: frames });
};
function timeComparator(time, frame) {
  return time - frame.timestamp;
}
function inscribe(object, area) {
  const scale = Math.max(object.width / area.width, object.height / area.height);
  return {
    width: object.width / scale | 0,
    height: object.height / scale | 0
  };
}
const Timeline = ({ model, boundaries, consoleEntries, onSelected, highlightedAction, highlightedEntry, highlightedConsoleEntry, selectedTime, setSelectedTime, sdkLanguage }) => {
  const [measure, ref] = useMeasure();
  const [dragWindow, setDragWindow] = reactExports.useState();
  const [previewPoint, setPreviewPoint] = reactExports.useState();
  const { offsets, curtainLeft, curtainRight } = reactExports.useMemo(() => {
    let activeWindow = selectedTime || boundaries;
    if (dragWindow && dragWindow.startX !== dragWindow.endX) {
      const time1 = positionToTime(measure.width, boundaries, dragWindow.startX);
      const time2 = positionToTime(measure.width, boundaries, dragWindow.endX);
      activeWindow = { minimum: Math.min(time1, time2), maximum: Math.max(time1, time2) };
    }
    const curtainLeft2 = timeToPosition(measure.width, boundaries, activeWindow.minimum);
    const maxRight = timeToPosition(measure.width, boundaries, boundaries.maximum);
    const curtainRight2 = maxRight - timeToPosition(measure.width, boundaries, activeWindow.maximum);
    return { offsets: calculateDividerOffsets(measure.width, boundaries), curtainLeft: curtainLeft2, curtainRight: curtainRight2 };
  }, [selectedTime, boundaries, dragWindow, measure]);
  const bars = reactExports.useMemo(() => {
    const bars2 = [];
    for (const entry of (model == null ? void 0 : model.actions) || []) {
      if (entry.class === "Test")
        continue;
      bars2.push({
        action: entry,
        leftTime: entry.startTime,
        rightTime: entry.endTime || boundaries.maximum,
        leftPosition: timeToPosition(measure.width, boundaries, entry.startTime),
        rightPosition: timeToPosition(measure.width, boundaries, entry.endTime || boundaries.maximum),
        active: false,
        error: !!entry.error
      });
    }
    for (const resource of (model == null ? void 0 : model.resources) || []) {
      const startTime = resource._monotonicTime;
      const endTime = resource._monotonicTime + resource.time;
      bars2.push({
        resource,
        leftTime: startTime,
        rightTime: endTime,
        leftPosition: timeToPosition(measure.width, boundaries, startTime),
        rightPosition: timeToPosition(measure.width, boundaries, endTime),
        active: false,
        error: false
      });
    }
    for (const consoleMessage of consoleEntries || []) {
      bars2.push({
        consoleMessage,
        leftTime: consoleMessage.timestamp,
        rightTime: consoleMessage.timestamp,
        leftPosition: timeToPosition(measure.width, boundaries, consoleMessage.timestamp),
        rightPosition: timeToPosition(measure.width, boundaries, consoleMessage.timestamp),
        active: false,
        error: consoleMessage.isError
      });
    }
    return bars2;
  }, [model, consoleEntries, boundaries, measure]);
  reactExports.useMemo(() => {
    for (const bar of bars) {
      if (highlightedAction)
        bar.active = bar.action === highlightedAction;
      else if (highlightedEntry)
        bar.active = bar.resource === highlightedEntry;
      else if (highlightedConsoleEntry)
        bar.active = bar.consoleMessage === highlightedConsoleEntry;
      else
        bar.active = false;
    }
  }, [bars, highlightedAction, highlightedEntry, highlightedConsoleEntry]);
  const onMouseDown = reactExports.useCallback((event) => {
    setPreviewPoint(void 0);
    if (!ref.current)
      return;
    const x2 = event.clientX - ref.current.getBoundingClientRect().left;
    const time = positionToTime(measure.width, boundaries, x2);
    const leftX = selectedTime ? timeToPosition(measure.width, boundaries, selectedTime.minimum) : 0;
    const rightX = selectedTime ? timeToPosition(measure.width, boundaries, selectedTime.maximum) : 0;
    if (selectedTime && Math.abs(x2 - leftX) < 10) {
      setDragWindow({ startX: rightX, endX: x2, type: "resize" });
    } else if (selectedTime && Math.abs(x2 - rightX) < 10) {
      setDragWindow({ startX: leftX, endX: x2, type: "resize" });
    } else if (selectedTime && time > selectedTime.minimum && time < selectedTime.maximum && event.clientY - ref.current.getBoundingClientRect().top < 20) {
      setDragWindow({ startX: leftX, endX: rightX, pivot: x2, type: "move" });
    } else {
      setDragWindow({ startX: x2, endX: x2, type: "resize" });
    }
  }, [boundaries, measure, ref, selectedTime]);
  const onGlassPaneMouseMove = reactExports.useCallback((event) => {
    if (!ref.current)
      return;
    const x2 = event.clientX - ref.current.getBoundingClientRect().left;
    const time = positionToTime(measure.width, boundaries, x2);
    const action = model == null ? void 0 : model.actions.findLast((action2) => action2.startTime <= time);
    if (!event.buttons) {
      setDragWindow(void 0);
      return;
    }
    if (action)
      onSelected(action);
    if (!dragWindow)
      return;
    let newDragWindow = dragWindow;
    if (dragWindow.type === "resize") {
      newDragWindow = { ...dragWindow, endX: x2 };
    } else {
      const delta = x2 - dragWindow.pivot;
      let startX = dragWindow.startX + delta;
      let endX = dragWindow.endX + delta;
      if (startX < 0) {
        startX = 0;
        endX = startX + (dragWindow.endX - dragWindow.startX);
      }
      if (endX > measure.width) {
        endX = measure.width;
        startX = endX - (dragWindow.endX - dragWindow.startX);
      }
      newDragWindow = { ...dragWindow, startX, endX, pivot: x2 };
    }
    setDragWindow(newDragWindow);
    const time1 = positionToTime(measure.width, boundaries, newDragWindow.startX);
    const time2 = positionToTime(measure.width, boundaries, newDragWindow.endX);
    if (time1 !== time2)
      setSelectedTime({ minimum: Math.min(time1, time2), maximum: Math.max(time1, time2) });
  }, [boundaries, dragWindow, measure, model, onSelected, ref, setSelectedTime]);
  const onGlassPaneMouseUp = reactExports.useCallback(() => {
    setPreviewPoint(void 0);
    if (!dragWindow)
      return;
    if (dragWindow.startX !== dragWindow.endX) {
      const time1 = positionToTime(measure.width, boundaries, dragWindow.startX);
      const time2 = positionToTime(measure.width, boundaries, dragWindow.endX);
      setSelectedTime({ minimum: Math.min(time1, time2), maximum: Math.max(time1, time2) });
    } else {
      const time = positionToTime(measure.width, boundaries, dragWindow.startX);
      const action = model == null ? void 0 : model.actions.findLast((action2) => action2.startTime <= time);
      if (action)
        onSelected(action);
      setSelectedTime(void 0);
    }
    setDragWindow(void 0);
  }, [boundaries, dragWindow, measure, model, setSelectedTime, onSelected]);
  const onMouseMove = reactExports.useCallback((event) => {
    if (!ref.current)
      return;
    const x2 = event.clientX - ref.current.getBoundingClientRect().left;
    const time = positionToTime(measure.width, boundaries, x2);
    const action = model == null ? void 0 : model.actions.findLast((action2) => action2.startTime <= time);
    setPreviewPoint({ x: x2, clientY: event.clientY, action, sdkLanguage });
  }, [boundaries, measure, model, ref, sdkLanguage]);
  const onMouseLeave = reactExports.useCallback(() => {
    setPreviewPoint(void 0);
  }, []);
  const onPaneDoubleClick = reactExports.useCallback(() => {
    setSelectedTime(void 0);
  }, [setSelectedTime]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: "none", borderBottom: "1px solid var(--vscode-panel-border)" }, children: [
    !!dragWindow && /* @__PURE__ */ jsxRuntimeExports.jsx(
      GlassPane,
      {
        cursor: (dragWindow == null ? void 0 : dragWindow.type) === "resize" ? "ew-resize" : "grab",
        onPaneMouseUp: onGlassPaneMouseUp,
        onPaneMouseMove: onGlassPaneMouseMove,
        onPaneDoubleClick
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref,
        className: "timeline-view",
        onMouseDown,
        onMouseMove,
        onMouseLeave,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "timeline-grid", children: offsets.map((offset, index) => {
            return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "timeline-divider", style: { left: offset.position + "px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "timeline-time", children: msToString(offset.time - boundaries.minimum) }) }, index);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { height: 8 } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FilmStrip, { model, boundaries, previewPoint }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "timeline-bars", children: bars.map((bar, index) => {
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: clsx(
                  "timeline-bar",
                  bar.action && "action",
                  bar.resource && "network",
                  bar.consoleMessage && "console-message",
                  bar.active && "active",
                  bar.error && "error"
                ),
                style: {
                  left: bar.leftPosition,
                  width: Math.max(5, bar.rightPosition - bar.leftPosition),
                  top: barTop(bar),
                  bottom: 0
                }
              },
              index
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "timeline-marker", style: {
            display: previewPoint !== void 0 ? "block" : "none",
            left: ((previewPoint == null ? void 0 : previewPoint.x) || 0) + "px"
          } }),
          selectedTime && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "timeline-window", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "timeline-window-curtain left", style: { width: curtainLeft } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "timeline-window-resizer", style: { left: -5 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "timeline-window-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "timeline-window-drag" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "timeline-window-resizer", style: { left: 5 } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "timeline-window-curtain right", style: { width: curtainRight } })
          ] })
        ]
      }
    )
  ] });
};
function calculateDividerOffsets(clientWidth, boundaries) {
  const minimumGap = 64;
  let dividerCount = clientWidth / minimumGap;
  const boundarySpan = boundaries.maximum - boundaries.minimum;
  const pixelsPerMillisecond = clientWidth / boundarySpan;
  let sectionTime = boundarySpan / dividerCount;
  const logSectionTime = Math.ceil(Math.log(sectionTime) / Math.LN10);
  sectionTime = Math.pow(10, logSectionTime);
  if (sectionTime * pixelsPerMillisecond >= 5 * minimumGap)
    sectionTime = sectionTime / 5;
  if (sectionTime * pixelsPerMillisecond >= 2 * minimumGap)
    sectionTime = sectionTime / 2;
  const firstDividerTime = boundaries.minimum;
  let lastDividerTime = boundaries.maximum;
  lastDividerTime += minimumGap / pixelsPerMillisecond;
  dividerCount = Math.ceil((lastDividerTime - firstDividerTime) / sectionTime);
  if (!sectionTime)
    dividerCount = 0;
  const offsets = [];
  for (let i = 0; i < dividerCount; ++i) {
    const time = firstDividerTime + sectionTime * i;
    offsets.push({ position: timeToPosition(clientWidth, boundaries, time), time });
  }
  return offsets;
}
function timeToPosition(clientWidth, boundaries, time) {
  return (time - boundaries.minimum) / (boundaries.maximum - boundaries.minimum) * clientWidth;
}
function positionToTime(clientWidth, boundaries, x2) {
  return x2 / clientWidth * (boundaries.maximum - boundaries.minimum) + boundaries.minimum;
}
function barTop(bar) {
  return bar.resource ? 25 : 20;
}
const MetadataView = ({ model }) => {
  var _a, _b;
  if (!model)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-testid": "metadata-view", className: "vbox", style: { flexShrink: 0 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "call-section", style: { paddingTop: 2 }, children: "Time" }),
    !!model.wallTime && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "call-line", children: [
      "start time:",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "call-value datetime", title: new Date(model.wallTime).toLocaleString(), children: new Date(model.wallTime).toLocaleString() })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "call-line", children: [
      "duration:",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "call-value number", title: msToString(model.endTime - model.startTime), children: msToString(model.endTime - model.startTime) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "call-section", children: "Browser" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "call-line", children: [
      "engine:",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "call-value string", title: model.browserName, children: model.browserName })
    ] }),
    model.channel && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "call-line", children: [
      "channel:",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "call-value string", title: model.channel, children: model.channel })
    ] }),
    model.platform && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "call-line", children: [
      "platform:",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "call-value string", title: model.platform, children: model.platform })
    ] }),
    model.options.userAgent && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "call-line", children: [
      "user agent:",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "call-value datetime", title: model.options.userAgent, children: model.options.userAgent })
    ] }),
    model.options.baseURL && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "call-section", style: { paddingTop: 2 }, children: "Config" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "call-line", children: [
        "baseURL:",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "call-value string", href: model.options.baseURL, title: model.options.baseURL, target: "_blank", rel: "noopener noreferrer", children: model.options.baseURL })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "call-section", children: "Viewport" }),
    model.options.viewport && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "call-line", children: [
      "width:",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "call-value number", title: String(!!((_a = model.options.viewport) == null ? void 0 : _a.width)), children: model.options.viewport.width })
    ] }),
    model.options.viewport && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "call-line", children: [
      "height:",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "call-value number", title: String(!!((_b = model.options.viewport) == null ? void 0 : _b.height)), children: model.options.viewport.height })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "call-line", children: [
      "is mobile:",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "call-value boolean", title: String(!!model.options.isMobile), children: String(!!model.options.isMobile) })
    ] }),
    model.options.deviceScaleFactor && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "call-line", children: [
      "device scale:",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "call-value number", title: String(model.options.deviceScaleFactor), children: String(model.options.deviceScaleFactor) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "call-section", children: "Counts" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "call-line", children: [
      "pages:",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "call-value number", children: model.pages.length })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "call-line", children: [
      "actions:",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "call-value number", children: model.actions.length })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "call-line", children: [
      "events:",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "call-value number", children: model.events.length })
    ] })
  ] });
};
async function loadImage(src) {
  const image = new Image();
  if (src) {
    image.src = src;
    await new Promise((f2, r2) => {
      image.onload = f2;
      image.onerror = f2;
    });
  }
  return image;
}
const checkerboardStyle = {
  backgroundImage: `linear-gradient(45deg, #80808020 25%, transparent 25%),
                    linear-gradient(-45deg, #80808020 25%, transparent 25%),
                    linear-gradient(45deg, transparent 75%, #80808020 75%),
                    linear-gradient(-45deg, transparent 75%, #80808020 75%)`,
  backgroundSize: "20px 20px",
  backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
  boxShadow: `rgb(0 0 0 / 10%) 0px 1.8px 1.9px,
              rgb(0 0 0 / 15%) 0px 6.1px 6.3px,
              rgb(0 0 0 / 10%) 0px -2px 4px,
              rgb(0 0 0 / 15%) 0px -6.1px 12px,
              rgb(0 0 0 / 25%) 0px 6px 12px`
};
const ImageDiffView = ({ diff, noTargetBlank }) => {
  const [mode, setMode] = reactExports.useState(diff.diff ? "diff" : "actual");
  const [showSxsDiff, setShowSxsDiff] = reactExports.useState(false);
  const [expectedImage, setExpectedImage] = reactExports.useState(null);
  const [actualImage, setActualImage] = reactExports.useState(null);
  const [diffImage, setDiffImage] = reactExports.useState(null);
  const [measure, ref] = useMeasure();
  reactExports.useEffect(() => {
    (async () => {
      var _a, _b, _c;
      setExpectedImage(await loadImage((_a = diff.expected) == null ? void 0 : _a.attachment.path));
      setActualImage(await loadImage((_b = diff.actual) == null ? void 0 : _b.attachment.path));
      setDiffImage(await loadImage((_c = diff.diff) == null ? void 0 : _c.attachment.path));
    })();
  }, [diff]);
  const isLoaded = expectedImage && actualImage && diffImage;
  const imageWidth = isLoaded ? Math.max(expectedImage.naturalWidth, actualImage.naturalWidth, 200) : 500;
  const imageHeight = isLoaded ? Math.max(expectedImage.naturalHeight, actualImage.naturalHeight, 200) : 500;
  const scale = Math.min(1, (measure.width - 30) / imageWidth);
  const sxsScale = Math.min(1, (measure.width - 50) / imageWidth / 2);
  const fitWidth = imageWidth * scale;
  const fitHeight = imageHeight * scale;
  const modeStyle = {
    flex: "none",
    margin: "0 10px",
    cursor: "pointer",
    userSelect: "none"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "test-result-image-mismatch", style: { display: "flex", flexDirection: "column", alignItems: "center", flex: "auto" }, ref, children: isLoaded && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-testid": "test-result-image-mismatch-tabs", style: { display: "flex", margin: "10px 0 20px" }, children: [
      diff.diff && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { ...modeStyle, fontWeight: mode === "diff" ? 600 : "initial" }, onClick: () => setMode("diff"), children: "Diff" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { ...modeStyle, fontWeight: mode === "actual" ? 600 : "initial" }, onClick: () => setMode("actual"), children: "Actual" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { ...modeStyle, fontWeight: mode === "expected" ? 600 : "initial" }, onClick: () => setMode("expected"), children: "Expected" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { ...modeStyle, fontWeight: mode === "sxs" ? 600 : "initial" }, onClick: () => setMode("sxs"), children: "Side by side" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { ...modeStyle, fontWeight: mode === "slider" ? 600 : "initial" }, onClick: () => setMode("slider"), children: "Slider" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "center", flex: "auto", minHeight: fitHeight + 60 }, children: [
      diff.diff && mode === "diff" && /* @__PURE__ */ jsxRuntimeExports.jsx(ImageWithSize, { image: diffImage, alt: "Diff", canvasWidth: fitWidth, canvasHeight: fitHeight, scale }),
      diff.diff && mode === "actual" && /* @__PURE__ */ jsxRuntimeExports.jsx(ImageWithSize, { image: actualImage, alt: "Actual", canvasWidth: fitWidth, canvasHeight: fitHeight, scale }),
      diff.diff && mode === "expected" && /* @__PURE__ */ jsxRuntimeExports.jsx(ImageWithSize, { image: expectedImage, alt: "Expected", canvasWidth: fitWidth, canvasHeight: fitHeight, scale }),
      diff.diff && mode === "slider" && /* @__PURE__ */ jsxRuntimeExports.jsx(ImageDiffSlider, { expectedImage, actualImage, canvasWidth: fitWidth, canvasHeight: fitHeight, scale }),
      diff.diff && mode === "sxs" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImageWithSize, { image: expectedImage, title: "Expected", canvasWidth: sxsScale * imageWidth, canvasHeight: sxsScale * imageHeight, scale: sxsScale }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImageWithSize, { image: showSxsDiff ? diffImage : actualImage, title: showSxsDiff ? "Diff" : "Actual", onClick: () => setShowSxsDiff(!showSxsDiff), canvasWidth: sxsScale * imageWidth, canvasHeight: sxsScale * imageHeight, scale: sxsScale })
      ] }),
      !diff.diff && mode === "actual" && /* @__PURE__ */ jsxRuntimeExports.jsx(ImageWithSize, { image: actualImage, title: "Actual", canvasWidth: fitWidth, canvasHeight: fitHeight, scale }),
      !diff.diff && mode === "expected" && /* @__PURE__ */ jsxRuntimeExports.jsx(ImageWithSize, { image: expectedImage, title: "Expected", canvasWidth: fitWidth, canvasHeight: fitHeight, scale }),
      !diff.diff && mode === "sxs" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImageWithSize, { image: expectedImage, title: "Expected", canvasWidth: sxsScale * imageWidth, canvasHeight: sxsScale * imageHeight, scale: sxsScale }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImageWithSize, { image: actualImage, title: "Actual", canvasWidth: sxsScale * imageWidth, canvasHeight: sxsScale * imageHeight, scale: sxsScale })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { alignSelf: "start", lineHeight: "18px", marginLeft: "15px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: diff.diff && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { target: "_blank", href: diff.diff.attachment.path, rel: "noreferrer", children: diff.diff.attachment.name }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { target: noTargetBlank ? "" : "_blank", href: diff.actual.attachment.path, rel: "noreferrer", children: diff.actual.attachment.name }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { target: noTargetBlank ? "" : "_blank", href: diff.expected.attachment.path, rel: "noreferrer", children: diff.expected.attachment.name }) })
    ] })
  ] }) });
};
const ImageDiffSlider = ({ expectedImage, actualImage, canvasWidth, canvasHeight, scale }) => {
  const absoluteStyle = {
    position: "absolute",
    top: 0,
    left: 0
  };
  const [slider, setSlider] = reactExports.useState(canvasWidth / 2);
  const sameSize = expectedImage.naturalWidth === actualImage.naturalWidth && expectedImage.naturalHeight === actualImage.naturalHeight;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: "none", display: "flex", alignItems: "center", flexDirection: "column", userSelect: "none" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { margin: 5 }, children: [
      !sameSize && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { flex: "none", margin: "0 5px" }, children: "Expected " }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: expectedImage.naturalWidth }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { flex: "none", margin: "0 5px" }, children: "x" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: expectedImage.naturalHeight }),
      !sameSize && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { flex: "none", margin: "0 5px 0 15px" }, children: "Actual " }),
      !sameSize && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: actualImage.naturalWidth }),
      !sameSize && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { flex: "none", margin: "0 5px" }, children: "x" }),
      !sameSize && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: actualImage.naturalHeight })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative", width: canvasWidth, height: canvasHeight, margin: 15, ...checkerboardStyle }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ResizeView,
        {
          orientation: "horizontal",
          offsets: [slider],
          setOffsets: (offsets) => setSlider(offsets[0]),
          resizerColor: "#57606a80",
          resizerWidth: 6
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { alt: "Expected", style: {
        width: expectedImage.naturalWidth * scale,
        height: expectedImage.naturalHeight * scale
      }, draggable: "false", src: expectedImage.src }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { ...absoluteStyle, bottom: 0, overflow: "hidden", width: slider, ...checkerboardStyle }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { alt: "Actual", style: {
        width: actualImage.naturalWidth * scale,
        height: actualImage.naturalHeight * scale
      }, draggable: "false", src: actualImage.src }) })
    ] })
  ] });
};
const ImageWithSize = ({ image, title, alt, canvasWidth, canvasHeight, scale, onClick }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { flex: "none", display: "flex", alignItems: "center", flexDirection: "column" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { margin: 5 }, children: [
      title && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { flex: "none", margin: "0 5px" }, children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: image.naturalWidth }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { flex: "none", margin: "0 5px" }, children: "x" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: image.naturalHeight })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flex: "none", width: canvasWidth, height: canvasHeight, margin: 15, ...checkerboardStyle }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        width: image.naturalWidth * scale,
        height: image.naturalHeight * scale,
        alt: title || alt,
        style: { cursor: onClick ? "pointer" : "initial" },
        draggable: "false",
        src: image.src,
        onClick
      }
    ) })
  ] });
};
function isTextualMimeType(mimeType) {
  return !!mimeType.match(/^(text\/.*?|application\/(json|(x-)?javascript|xml.*?|ecmascript|graphql|x-www-form-urlencoded)|image\/svg(\+xml)?|application\/.*?(\+json|\+xml))(;\s*charset=.*)?$/);
}
const Expandable = ({ title, children, setExpanded, expanded, expandOnTitleClick }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: clsx("expandable", expanded && "expanded"), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "expandable-title", onClick: () => expandOnTitleClick && setExpanded(!expanded), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: clsx("codicon", expanded ? "codicon-chevron-down" : "codicon-chevron-right"),
          style: { cursor: "pointer", color: "var(--vscode-foreground)", marginLeft: "5px" },
          onClick: () => !expandOnTitleClick && setExpanded(!expanded)
        }
      ),
      title
    ] }),
    expanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginLeft: 25 }, children })
  ] });
};
function linkifyText(description) {
  const result = [];
  let currentIndex = 0;
  let match;
  while ((match = kWebLinkRe.exec(description)) !== null) {
    const stringBeforeMatch = description.substring(currentIndex, match.index);
    if (stringBeforeMatch)
      result.push(stringBeforeMatch);
    const value = match[0];
    result.push(renderLink(value));
    currentIndex = match.index + value.length;
  }
  const stringAfterMatches = description.substring(currentIndex);
  if (stringAfterMatches)
    result.push(stringAfterMatches);
  return result;
}
function renderLink(text) {
  let link = text;
  if (link.startsWith("www."))
    link = "https://" + link;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: link, target: "_blank", rel: "noopener noreferrer", children: text });
}
const ExpandableAttachment = ({ attachment }) => {
  const [expanded, setExpanded] = reactExports.useState(false);
  const [attachmentText, setAttachmentText] = reactExports.useState(null);
  const [placeholder, setPlaceholder] = reactExports.useState(null);
  const isTextAttachment = isTextualMimeType(attachment.contentType);
  const hasContent = !!attachment.sha1 || !!attachment.path;
  reactExports.useEffect(() => {
    if (expanded && attachmentText === null && placeholder === null) {
      setPlaceholder("Loading ...");
      fetch(attachmentURL(attachment)).then((response) => response.text()).then((text) => {
        setAttachmentText(text);
        setPlaceholder(null);
      }).catch((e) => {
        setPlaceholder("Failed to load: " + e.message);
      });
    }
  }, [expanded, attachmentText, placeholder, attachment]);
  const title = /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { marginLeft: 5 }, children: [
    linkifyText(attachment.name),
    " ",
    hasContent && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { style: { marginLeft: 5 }, href: downloadURL(attachment), children: "download" })
  ] });
  if (!isTextAttachment || !hasContent)
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginLeft: 20 }, children: title });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Expandable, { title, expanded, setExpanded, expandOnTitleClick: true, children: placeholder && /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: placeholder }) }),
    expanded && attachmentText !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
      CodeMirrorWrapper,
      {
        text: attachmentText,
        readOnly: true,
        mimeType: attachment.contentType,
        linkify: true,
        lineNumbers: true,
        wrapLines: false
      }
    )
  ] });
};
const AttachmentsTab = ({ model }) => {
  const { diffMap, screenshots, attachments } = reactExports.useMemo(() => {
    const attachments2 = /* @__PURE__ */ new Set();
    const screenshots2 = /* @__PURE__ */ new Set();
    for (const action of (model == null ? void 0 : model.actions) || []) {
      const traceUrl = action.context.traceUrl;
      for (const attachment of action.attachments || [])
        attachments2.add({ ...attachment, traceUrl });
    }
    const diffMap2 = /* @__PURE__ */ new Map();
    for (const attachment of attachments2) {
      if (!attachment.path && !attachment.sha1)
        continue;
      const match = attachment.name.match(/^(.*)-(expected|actual|diff)\.png$/);
      if (match) {
        const name = match[1];
        const type = match[2];
        const entry = diffMap2.get(name) || { expected: void 0, actual: void 0, diff: void 0 };
        entry[type] = attachment;
        diffMap2.set(name, entry);
        attachments2.delete(attachment);
      } else if (attachment.contentType.startsWith("image/")) {
        screenshots2.add(attachment);
        attachments2.delete(attachment);
      }
    }
    return { diffMap: diffMap2, attachments: attachments2, screenshots: screenshots2 };
  }, [model]);
  if (!diffMap.size && !screenshots.size && !attachments.size)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PlaceholderPanel, { text: "No attachments" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "attachments-tab", children: [
    [...diffMap.values()].map(({ expected, actual, diff }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        expected && actual && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "attachments-section", children: "Image diff" }),
        expected && actual && /* @__PURE__ */ jsxRuntimeExports.jsx(ImageDiffView, { noTargetBlank: true, diff: {
          name: "Image diff",
          expected: { attachment: { ...expected, path: downloadURL(expected) }, title: "Expected" },
          actual: { attachment: { ...actual, path: downloadURL(actual) } },
          diff: diff ? { attachment: { ...diff, path: downloadURL(diff) } } : void 0
        } })
      ] });
    }),
    screenshots.size ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "attachments-section", children: "Screenshots" }) : void 0,
    [...screenshots.values()].map((a, i) => {
      const url = attachmentURL(a);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "attachment-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { draggable: "false", src: url }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { target: "_blank", href: url, rel: "noreferrer", children: a.name }) })
      ] }, `screenshot-${i}`);
    }),
    attachments.size ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "attachments-section", children: "Attachments" }) : void 0,
    [...attachments.values()].map((a, i) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "attachment-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandableAttachment, { attachment: a }) }, attachmentKey(a, i));
    })
  ] });
};
function attachmentURL(attachment, queryParams = {}) {
  const params = new URLSearchParams(queryParams);
  if (attachment.sha1) {
    params.set("trace", attachment.traceUrl);
    return "sha1/" + attachment.sha1 + "?" + params.toString();
  }
  params.set("path", attachment.path);
  return "file?" + params.toString();
}
function downloadURL(attachment) {
  const params = { dn: attachment.name };
  if (attachment.contentType)
    params.dct = attachment.contentType;
  return attachmentURL(attachment, params);
}
function attachmentKey(attachment, index) {
  return index + "-" + (attachment.sha1 ? `sha1-` + attachment.sha1 : `path-` + attachment.path);
}
const AnnotationsTab = ({ annotations }) => {
  if (!annotations.length)
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PlaceholderPanel, { text: "No annotations" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "annotations-tab", children: annotations.map((annotation, i) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "annotation-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: "bold" }, children: annotation.type }),
      annotation.description && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        ": ",
        linkifyText(annotation.description)
      ] })
    ] }, `annotation-${i}`);
  }) });
};
const InspectorTab = ({ sdkLanguage, setIsInspecting, highlightedLocator, setHighlightedLocator }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "vbox", style: { backgroundColor: "var(--vscode-sideBar-background)" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { margin: "10px 0px 10px 10px", color: "var(--vscode-editorCodeLens-foreground)", flex: "none" }, children: "Locator" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { margin: "0 10px 10px", flex: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeMirrorWrapper, { text: highlightedLocator, language: sdkLanguage, focusOnChange: true, isFocused: true, wrapLines: true, onChange: (text) => {
      setHighlightedLocator(text);
      setIsInspecting(false);
    } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "absolute", right: 5, top: 5 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "files", title: "Copy locator", onClick: () => {
      copy(highlightedLocator);
    } }) })
  ] });
};
function testStatusIcon(status) {
  if (status === "scheduled")
    return "codicon-clock";
  if (status === "running")
    return "codicon-loading";
  if (status === "failed")
    return "codicon-error";
  if (status === "passed")
    return "codicon-check";
  if (status === "skipped")
    return "codicon-circle-slash";
  return "codicon-circle-outline";
}
function testStatusText(status) {
  if (status === "scheduled")
    return "Pending";
  if (status === "running")
    return "Running";
  if (status === "failed")
    return "Failed";
  if (status === "passed")
    return "Passed";
  if (status === "skipped")
    return "Skipped";
  return "Did not run";
}
const SettingsView = ({ settings: settings2 }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "vbox settings-view", children: settings2.map(({ value, set, title }) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "setting", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: value, onClick: () => set(!value) }),
      title
    ] }) }, title);
  }) });
};
const Workbench = ({ model, showSourcesFirst, rootDir, fallbackLocation, initialSelection, onSelectionChanged, isLive, status, annotations, inert, openPage, onOpenExternally, revealSource, showSettings }) => {
  var _a;
  const [selectedAction, setSelectedActionImpl] = reactExports.useState(void 0);
  const [revealedStack, setRevealedStack] = reactExports.useState(void 0);
  const [highlightedAction, setHighlightedAction] = reactExports.useState();
  const [highlightedEntry, setHighlightedEntry] = reactExports.useState();
  const [highlightedConsoleMessage, setHighlightedConsoleMessage] = reactExports.useState();
  const [selectedNavigatorTab, setSelectedNavigatorTab] = reactExports.useState("actions");
  const [selectedPropertiesTab, setSelectedPropertiesTab] = useSetting("propertiesTab", showSourcesFirst ? "source" : "call");
  const [isInspecting, setIsInspectingState] = reactExports.useState(false);
  const [highlightedLocator, setHighlightedLocator] = reactExports.useState("");
  const activeAction = model ? highlightedAction || selectedAction : void 0;
  const [selectedTime, setSelectedTime] = reactExports.useState();
  const [sidebarLocation, setSidebarLocation] = useSetting("propertiesSidebarLocation", "bottom");
  const [showRouteActions, setShowRouteActions] = useSetting("show-route-actions", true);
  const filteredActions = reactExports.useMemo(() => {
    return ((model == null ? void 0 : model.actions) || []).filter((action) => showRouteActions || !isRouteAction(action));
  }, [model, showRouteActions]);
  const setSelectedAction = reactExports.useCallback((action) => {
    setSelectedActionImpl(action);
    setRevealedStack(action == null ? void 0 : action.stack);
  }, [setSelectedActionImpl, setRevealedStack]);
  const sources = reactExports.useMemo(() => (model == null ? void 0 : model.sources) || /* @__PURE__ */ new Map(), [model]);
  reactExports.useEffect(() => {
    setSelectedTime(void 0);
    setRevealedStack(void 0);
  }, [model]);
  reactExports.useEffect(() => {
    if (selectedAction && (model == null ? void 0 : model.actions.includes(selectedAction)))
      return;
    const failedAction = model == null ? void 0 : model.failedAction();
    if (initialSelection && (model == null ? void 0 : model.actions.includes(initialSelection))) {
      setSelectedAction(initialSelection);
    } else if (failedAction) {
      setSelectedAction(failedAction);
    } else if (model == null ? void 0 : model.actions.length) {
      let index = model.actions.length - 1;
      for (let i = 0; i < model.actions.length; ++i) {
        if (model.actions[i].apiName === "After Hooks" && i) {
          index = i - 1;
          break;
        }
      }
      setSelectedAction(model.actions[index]);
    }
  }, [model, selectedAction, setSelectedAction, initialSelection]);
  const onActionSelected = reactExports.useCallback((action) => {
    setSelectedAction(action);
    setHighlightedAction(void 0);
    onSelectionChanged == null ? void 0 : onSelectionChanged(action);
  }, [setSelectedAction, onSelectionChanged, setHighlightedAction]);
  const selectPropertiesTab = reactExports.useCallback((tab) => {
    setSelectedPropertiesTab(tab);
    if (tab !== "inspector")
      setIsInspectingState(false);
  }, [setSelectedPropertiesTab]);
  const setIsInspecting = reactExports.useCallback((value) => {
    if (!isInspecting && value)
      selectPropertiesTab("inspector");
    setIsInspectingState(value);
  }, [setIsInspectingState, selectPropertiesTab, isInspecting]);
  const locatorPicked = reactExports.useCallback((locator) => {
    setHighlightedLocator(locator);
    selectPropertiesTab("inspector");
  }, [selectPropertiesTab]);
  reactExports.useEffect(() => {
    if (revealSource)
      selectPropertiesTab("source");
  }, [revealSource, selectPropertiesTab]);
  const consoleModel = useConsoleTabModel(model, selectedTime);
  const networkModel = useNetworkTabModel(model, selectedTime);
  const errorsModel = useErrorsTabModel(model);
  const attachments = reactExports.useMemo(() => {
    return (model == null ? void 0 : model.actions.map((a) => a.attachments || []).flat()) || [];
  }, [model]);
  const sdkLanguage = (model == null ? void 0 : model.sdkLanguage) || "javascript";
  const inspectorTab = {
    id: "inspector",
    title: "Locator",
    render: () => /* @__PURE__ */ jsxRuntimeExports.jsx(
      InspectorTab,
      {
        sdkLanguage,
        setIsInspecting,
        highlightedLocator,
        setHighlightedLocator
      }
    )
  };
  const callTab = {
    id: "call",
    title: "Call",
    render: () => /* @__PURE__ */ jsxRuntimeExports.jsx(CallTab, { action: activeAction, sdkLanguage })
  };
  const logTab = {
    id: "log",
    title: "Log",
    render: () => /* @__PURE__ */ jsxRuntimeExports.jsx(LogTab, { action: activeAction, isLive })
  };
  const errorsTab = {
    id: "errors",
    title: "Errors",
    errorCount: errorsModel.errors.size,
    render: () => /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorsTab, { errorsModel, sdkLanguage, revealInSource: (error) => {
      if (error.action)
        setSelectedAction(error.action);
      else
        setRevealedStack(error.stack);
      selectPropertiesTab("source");
    } })
  };
  let fallbackSourceErrorCount = void 0;
  if (!selectedAction && fallbackLocation)
    fallbackSourceErrorCount = (_a = fallbackLocation.source) == null ? void 0 : _a.errors.length;
  const sourceTab = {
    id: "source",
    title: "Source",
    errorCount: fallbackSourceErrorCount,
    render: () => /* @__PURE__ */ jsxRuntimeExports.jsx(
      SourceTab,
      {
        stack: revealedStack,
        sources,
        rootDir,
        stackFrameLocation: sidebarLocation === "bottom" ? "right" : "bottom",
        fallbackLocation,
        onOpenExternally
      }
    )
  };
  const consoleTab = {
    id: "console",
    title: "Console",
    count: consoleModel.entries.length,
    render: () => /* @__PURE__ */ jsxRuntimeExports.jsx(
      ConsoleTab,
      {
        consoleModel,
        boundaries,
        selectedTime,
        onAccepted: (m2) => setSelectedTime({ minimum: m2.timestamp, maximum: m2.timestamp }),
        onEntryHovered: setHighlightedConsoleMessage
      }
    )
  };
  const networkTab = {
    id: "network",
    title: "Network",
    count: networkModel.resources.length,
    render: () => /* @__PURE__ */ jsxRuntimeExports.jsx(NetworkTab, { boundaries, networkModel, onEntryHovered: setHighlightedEntry })
  };
  const attachmentsTab = {
    id: "attachments",
    title: "Attachments",
    count: attachments.length,
    render: () => /* @__PURE__ */ jsxRuntimeExports.jsx(AttachmentsTab, { model })
  };
  const tabs = [
    inspectorTab,
    callTab,
    logTab,
    errorsTab,
    consoleTab,
    networkTab,
    sourceTab,
    attachmentsTab
  ];
  if (annotations !== void 0) {
    const annotationsTab = {
      id: "annotations",
      title: "Annotations",
      count: annotations.length,
      render: () => /* @__PURE__ */ jsxRuntimeExports.jsx(AnnotationsTab, { annotations })
    };
    tabs.push(annotationsTab);
  }
  if (showSourcesFirst) {
    const sourceTabIndex = tabs.indexOf(sourceTab);
    tabs.splice(sourceTabIndex, 1);
    tabs.splice(1, 0, sourceTab);
  }
  const { boundaries } = reactExports.useMemo(() => {
    const boundaries2 = { minimum: (model == null ? void 0 : model.startTime) || 0, maximum: (model == null ? void 0 : model.endTime) || 3e4 };
    if (boundaries2.minimum > boundaries2.maximum) {
      boundaries2.minimum = 0;
      boundaries2.maximum = 3e4;
    }
    boundaries2.maximum += (boundaries2.maximum - boundaries2.minimum) / 20;
    return { boundaries: boundaries2 };
  }, [model]);
  let time = 0;
  if (!isLive && model && model.endTime >= 0)
    time = model.endTime - model.startTime;
  else if (model && model.wallTime)
    time = Date.now() - model.wallTime;
  const actionsTab = {
    id: "actions",
    title: "Actions",
    component: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "vbox", children: [
      status && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "workbench-run-status", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: clsx("codicon", testStatusIcon(status)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: testStatusText(status) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "spacer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "workbench-run-duration", children: time ? msToString(time) : "" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ActionList,
        {
          sdkLanguage,
          actions: filteredActions,
          selectedAction: model ? selectedAction : void 0,
          selectedTime,
          setSelectedTime,
          onSelected: onActionSelected,
          onHighlighted: setHighlightedAction,
          revealConsole: () => selectPropertiesTab("console"),
          isLive
        }
      )
    ] })
  };
  const metadataTab = {
    id: "metadata",
    title: "Metadata",
    component: /* @__PURE__ */ jsxRuntimeExports.jsx(MetadataView, { model })
  };
  const settingsTab = {
    id: "settings",
    title: "Settings",
    component: /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsView, { settings: [{ value: showRouteActions, set: setShowRouteActions, title: "Show route actions" }] })
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "vbox workbench", ...inert ? { inert: "true" } : {}, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Timeline,
      {
        model,
        consoleEntries: consoleModel.entries,
        boundaries,
        highlightedAction,
        highlightedEntry,
        highlightedConsoleEntry: highlightedConsoleMessage,
        onSelected: onActionSelected,
        sdkLanguage,
        selectedTime,
        setSelectedTime
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SplitView,
      {
        sidebarSize: 250,
        orientation: sidebarLocation === "bottom" ? "vertical" : "horizontal",
        settingName: "propertiesSidebar",
        main: /* @__PURE__ */ jsxRuntimeExports.jsx(
          SplitView,
          {
            sidebarSize: 250,
            orientation: "horizontal",
            sidebarIsFirst: true,
            settingName: "actionListSidebar",
            main: /* @__PURE__ */ jsxRuntimeExports.jsx(
              SnapshotTab,
              {
                action: activeAction,
                sdkLanguage,
                testIdAttributeName: (model == null ? void 0 : model.testIdAttributeName) || "data-testid",
                isInspecting,
                setIsInspecting,
                highlightedLocator,
                setHighlightedLocator: locatorPicked,
                openPage
              }
            ),
            sidebar: /* @__PURE__ */ jsxRuntimeExports.jsx(
              TabbedPane,
              {
                tabs: showSettings ? [actionsTab, metadataTab, settingsTab] : [actionsTab, metadataTab],
                selectedTab: selectedNavigatorTab,
                setSelectedTab: setSelectedNavigatorTab
              }
            )
          }
        ),
        sidebar: /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabbedPane,
          {
            tabs,
            selectedTab: selectedPropertiesTab,
            setSelectedTab: selectPropertiesTab,
            rightToolbar: [
              sidebarLocation === "bottom" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { title: "Dock to right", icon: "layout-sidebar-right-off", onClick: () => {
                setSidebarLocation("right");
              } }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { title: "Dock to bottom", icon: "layout-panel-off", onClick: () => {
                setSidebarLocation("bottom");
              } })
            ],
            mode: sidebarLocation === "bottom" ? "default" : "select"
          }
        )
      }
    )
  ] });
};
export {
  Expandable as E,
  MultiTraceModel as M,
  React as R,
  SplitView as S,
  ToolbarButton as T,
  Workbench as W,
  __vitePreload as _,
  applyTheme as a,
  currentTheme as b,
  createRoot as c,
  addThemeListener as d,
  removeThemeListener as e,
  clsx as f,
  Toolbar as g,
  testStatusIcon as h,
  TreeView as i,
  jsxRuntimeExports as j,
  idForAction as k,
  useSetting as l,
  msToString as m,
  useDarkModeSetting as n,
  SettingsView as o,
  commonjsGlobal as p,
  getDefaultExportFromCjs as q,
  reactExports as r,
  settings as s,
  toggleTheme as t,
  useMeasure as u
};
//# sourceMappingURL=workbench-C5OQh9VX.js.map
