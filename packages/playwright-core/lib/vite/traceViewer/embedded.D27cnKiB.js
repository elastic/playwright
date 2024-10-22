import { M as MultiTraceModel, r as reactExports, b as currentTheme, t as toggleTheme, j as jsxRuntimeExports, W as Workbench, a as applyTheme, c as createRoot } from "./assets/workbench-C5OQh9VX.js";
function openPage(url, target) {
  if (url)
    window.parent.postMessage({ method: "openExternal", params: { url, target } }, "*");
}
function openSourceLocation({ file, line, column }) {
  window.parent.postMessage({ method: "openSourceLocation", params: { file, line, column } }, "*");
}
const EmbeddedWorkbenchLoader = () => {
  const [traceURLs, setTraceURLs] = reactExports.useState([]);
  const [model, setModel] = reactExports.useState(emptyModel);
  const [progress, setProgress] = reactExports.useState({ done: 0, total: 0 });
  const [processingErrorMessage, setProcessingErrorMessage] = reactExports.useState(null);
  reactExports.useEffect(() => {
    window.addEventListener("message", async ({ data: { method, params } }) => {
      if (method === "loadTraceRequested") {
        setTraceURLs(params.traceUrl ? [params.traceUrl] : []);
        setProcessingErrorMessage(null);
      } else if (method === "applyTheme") {
        if (currentTheme() !== params.theme)
          toggleTheme();
      }
    });
    window.parent.postMessage({ type: "loaded" }, "*");
  }, []);
  reactExports.useEffect(() => {
    (async () => {
      if (traceURLs.length) {
        const swListener = (event) => {
          if (event.data.method === "progress")
            setProgress(event.data.params);
        };
        navigator.serviceWorker.addEventListener("message", swListener);
        setProgress({ done: 0, total: 1 });
        const contextEntries = [];
        for (let i = 0; i < traceURLs.length; i++) {
          const url = traceURLs[i];
          const params = new URLSearchParams();
          params.set("trace", url);
          const response = await fetch(`contexts?${params.toString()}`);
          if (!response.ok) {
            setProcessingErrorMessage((await response.json()).error);
            return;
          }
          contextEntries.push(...await response.json());
        }
        navigator.serviceWorker.removeEventListener("message", swListener);
        const model2 = new MultiTraceModel(contextEntries);
        setProgress({ done: 0, total: 0 });
        setModel(model2);
      } else {
        setModel(emptyModel);
      }
    })();
  }, [traceURLs]);
  reactExports.useEffect(() => {
    var _a;
    if (processingErrorMessage)
      (_a = window.parent) == null ? void 0 : _a.postMessage({ method: "showErrorMessage", params: { message: processingErrorMessage } }, "*");
  }, [processingErrorMessage]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "vbox workbench-loader", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "progress", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inner-progress", style: { width: progress.total ? 100 * progress.done / progress.total + "%" : 0 } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Workbench, { model, openPage, onOpenExternally: openSourceLocation, showSettings: true }),
    !traceURLs.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "empty-state", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "title", children: "Select test to see the trace" }) })
  ] });
};
const emptyModel = new MultiTraceModel([]);
(async () => {
  applyTheme();
  const handleKeyEvent = (e) => {
    var _a;
    if (!e.isTrusted)
      return;
    (_a = window.parent) == null ? void 0 : _a.postMessage({
      type: e.type,
      key: e.key,
      keyCode: e.keyCode,
      code: e.code,
      shiftKey: e.shiftKey,
      altKey: e.altKey,
      ctrlKey: e.ctrlKey,
      metaKey: e.metaKey,
      repeat: e.repeat
    }, "*");
  };
  window.addEventListener("keydown", handleKeyEvent);
  window.addEventListener("keyup", handleKeyEvent);
  if (window.location.protocol !== "file:") {
    if (!navigator.serviceWorker)
      throw new Error(`Service workers are not supported.
Make sure to serve the Trace Viewer (${window.location}) via HTTPS or localhost.`);
    navigator.serviceWorker.register("sw.bundle.js");
    if (!navigator.serviceWorker.controller) {
      await new Promise((f) => {
        navigator.serviceWorker.oncontrollerchange = () => f();
      });
    }
    setInterval(function() {
      fetch("ping");
    }, 1e4);
  }
  createRoot(document.querySelector("#root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(EmbeddedWorkbenchLoader, {}));
})();
//# sourceMappingURL=embedded.D27cnKiB.js.map
