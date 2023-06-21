"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConsoleMessage = void 0;
var util = _interopRequireWildcard(require("util"));
var _jsHandle = require("./jsHandle");
var _channelOwner = require("./channelOwner");
var _page = require("./page");
let _util$inspect$custom;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
_util$inspect$custom = util.inspect.custom;
class ConsoleMessage extends _channelOwner.ChannelOwner {
  static from(message) {
    return message._object;
  }
  constructor(parent, type, guid, initializer) {
    super(parent, type, guid, initializer);
    // Note: currently, we only report console messages for pages and they always have a page.
    // However, in the future we might report console messages for service workers or something else,
    // where page() would be null.
    this._page = void 0;
    this._page = _page.Page.fromNullable(initializer.page);
  }
  page() {
    return this._page;
  }
  type() {
    return this._initializer.type;
  }
  text() {
    return this._initializer.text;
  }
  args() {
    return this._initializer.args.map(_jsHandle.JSHandle.from);
  }
  location() {
    return this._initializer.location;
  }
  [_util$inspect$custom]() {
    return this.text();
  }
}
exports.ConsoleMessage = ConsoleMessage;