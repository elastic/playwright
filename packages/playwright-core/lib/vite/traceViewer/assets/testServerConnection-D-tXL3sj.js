var Disposable;
((Disposable2) => {
  function disposeAll(disposables) {
    for (const disposable of disposables.splice(0))
      disposable.dispose();
  }
  Disposable2.disposeAll = disposeAll;
})(Disposable || (Disposable = {}));
class EventEmitter {
  constructor() {
    this._listeners = /* @__PURE__ */ new Set();
    this.event = (listener, disposables) => {
      this._listeners.add(listener);
      let disposed = false;
      const self = this;
      const result = {
        dispose() {
          if (!disposed) {
            disposed = true;
            self._listeners.delete(listener);
          }
        }
      };
      if (disposables)
        disposables.push(result);
      return result;
    };
  }
  fire(event) {
    const dispatch = !this._deliveryQueue;
    if (!this._deliveryQueue)
      this._deliveryQueue = [];
    for (const listener of this._listeners)
      this._deliveryQueue.push({ listener, event });
    if (!dispatch)
      return;
    for (let index = 0; index < this._deliveryQueue.length; index++) {
      const { listener, event: event2 } = this._deliveryQueue[index];
      listener.call(null, event2);
    }
    this._deliveryQueue = void 0;
  }
  dispose() {
    this._listeners.clear();
    if (this._deliveryQueue)
      this._deliveryQueue = [];
  }
}
class WebSocketTestServerTransport {
  constructor(url) {
    this._ws = new WebSocket(url);
  }
  onmessage(listener) {
    this._ws.addEventListener("message", (event) => listener(event.data));
  }
  onopen(listener) {
    this._ws.addEventListener("open", listener);
  }
  onerror(listener) {
    this._ws.addEventListener("error", listener);
  }
  onclose(listener) {
    this._ws.addEventListener("close", listener);
  }
  send(data) {
    this._ws.send(data);
  }
  close() {
    this._ws.close();
  }
}
class TestServerConnection {
  constructor(transport) {
    this._onCloseEmitter = new EventEmitter();
    this._onReportEmitter = new EventEmitter();
    this._onStdioEmitter = new EventEmitter();
    this._onTestFilesChangedEmitter = new EventEmitter();
    this._onLoadTraceRequestedEmitter = new EventEmitter();
    this._lastId = 0;
    this._callbacks = /* @__PURE__ */ new Map();
    this._isClosed = false;
    this.onClose = this._onCloseEmitter.event;
    this.onReport = this._onReportEmitter.event;
    this.onStdio = this._onStdioEmitter.event;
    this.onTestFilesChanged = this._onTestFilesChangedEmitter.event;
    this.onLoadTraceRequested = this._onLoadTraceRequestedEmitter.event;
    this._transport = transport;
    this._transport.onmessage((data) => {
      const message = JSON.parse(data);
      const { id, result, error, method, params } = message;
      if (id) {
        const callback = this._callbacks.get(id);
        if (!callback)
          return;
        this._callbacks.delete(id);
        if (error)
          callback.reject(new Error(error));
        else
          callback.resolve(result);
      } else {
        this._dispatchEvent(method, params);
      }
    });
    const pingInterval = setInterval(() => this._sendMessage("ping").catch(() => {
    }), 3e4);
    this._connectedPromise = new Promise((f, r) => {
      this._transport.onopen(f);
      this._transport.onerror(r);
    });
    this._transport.onclose(() => {
      this._isClosed = true;
      this._onCloseEmitter.fire();
      clearInterval(pingInterval);
    });
  }
  isClosed() {
    return this._isClosed;
  }
  async _sendMessage(method, params) {
    const logForTest = globalThis.__logForTest;
    logForTest == null ? void 0 : logForTest({ method, params });
    await this._connectedPromise;
    const id = ++this._lastId;
    const message = { id, method, params };
    this._transport.send(JSON.stringify(message));
    return new Promise((resolve, reject) => {
      this._callbacks.set(id, { resolve, reject });
    });
  }
  _sendMessageNoReply(method, params) {
    this._sendMessage(method, params).catch(() => {
    });
  }
  _dispatchEvent(method, params) {
    if (method === "report")
      this._onReportEmitter.fire(params);
    else if (method === "stdio")
      this._onStdioEmitter.fire(params);
    else if (method === "testFilesChanged")
      this._onTestFilesChangedEmitter.fire(params);
    else if (method === "loadTraceRequested")
      this._onLoadTraceRequestedEmitter.fire(params);
  }
  async initialize(params) {
    await this._sendMessage("initialize", params);
  }
  async ping(params) {
    await this._sendMessage("ping", params);
  }
  async pingNoReply(params) {
    this._sendMessageNoReply("ping", params);
  }
  async watch(params) {
    await this._sendMessage("watch", params);
  }
  watchNoReply(params) {
    this._sendMessageNoReply("watch", params);
  }
  async open(params) {
    await this._sendMessage("open", params);
  }
  openNoReply(params) {
    this._sendMessageNoReply("open", params);
  }
  async resizeTerminal(params) {
    await this._sendMessage("resizeTerminal", params);
  }
  resizeTerminalNoReply(params) {
    this._sendMessageNoReply("resizeTerminal", params);
  }
  async checkBrowsers(params) {
    return await this._sendMessage("checkBrowsers", params);
  }
  async installBrowsers(params) {
    await this._sendMessage("installBrowsers", params);
  }
  async runGlobalSetup(params) {
    return await this._sendMessage("runGlobalSetup", params);
  }
  async runGlobalTeardown(params) {
    return await this._sendMessage("runGlobalTeardown", params);
  }
  async startDevServer(params) {
    return await this._sendMessage("startDevServer", params);
  }
  async stopDevServer(params) {
    return await this._sendMessage("stopDevServer", params);
  }
  async clearCache(params) {
    return await this._sendMessage("clearCache", params);
  }
  async listFiles(params) {
    return await this._sendMessage("listFiles", params);
  }
  async listTests(params) {
    return await this._sendMessage("listTests", params);
  }
  async runTests(params) {
    return await this._sendMessage("runTests", params);
  }
  async findRelatedTestFiles(params) {
    return await this._sendMessage("findRelatedTestFiles", params);
  }
  async stopTests(params) {
    await this._sendMessage("stopTests", params);
  }
  stopTestsNoReply(params) {
    this._sendMessageNoReply("stopTests", params);
  }
  async closeGracefully(params) {
    await this._sendMessage("closeGracefully", params);
  }
  close() {
    try {
      this._transport.close();
    } catch {
    }
  }
}
export {
  TestServerConnection as T,
  WebSocketTestServerTransport as W
};
//# sourceMappingURL=testServerConnection-D-tXL3sj.js.map
