import { M as MultiTraceModel, r as reactExports, j as jsxRuntimeExports, T as ToolbarButton, t as toggleTheme, W as Workbench, a as applyTheme, c as createRoot } from "./assets/workbench-C5OQh9VX.js";
import { T as TestServerConnection, W as WebSocketTestServerTransport } from "./assets/testServerConnection-D-tXL3sj.js";
const WorkbenchLoader = () => {
  const [isServer, setIsServer] = reactExports.useState(false);
  const [traceURLs, setTraceURLs] = reactExports.useState([]);
  const [uploadedTraceNames, setUploadedTraceNames] = reactExports.useState([]);
  const [model, setModel] = reactExports.useState(emptyModel);
  const [progress, setProgress] = reactExports.useState({ done: 0, total: 0 });
  const [dragOver, setDragOver] = reactExports.useState(false);
  const [processingErrorMessage, setProcessingErrorMessage] = reactExports.useState(null);
  const [fileForLocalModeError, setFileForLocalModeError] = reactExports.useState(null);
  const processTraceFiles = reactExports.useCallback((files) => {
    const blobUrls = [];
    const fileNames = [];
    const url = new URL(window.location.href);
    for (let i = 0; i < files.length; i++) {
      const file = files.item(i);
      if (!file)
        continue;
      const blobTraceURL = URL.createObjectURL(file);
      blobUrls.push(blobTraceURL);
      fileNames.push(file.name);
      url.searchParams.append("trace", blobTraceURL);
      url.searchParams.append("traceFileName", file.name);
    }
    const href = url.toString();
    window.history.pushState({}, "", href);
    setTraceURLs(blobUrls);
    setUploadedTraceNames(fileNames);
    setDragOver(false);
    setProcessingErrorMessage(null);
  }, []);
  reactExports.useEffect(() => {
    const listener = async (e) => {
      var _a;
      if (!((_a = e.clipboardData) == null ? void 0 : _a.files.length))
        return;
      for (const file of e.clipboardData.files) {
        if (file.type !== "application/zip")
          return;
      }
      e.preventDefault();
      processTraceFiles(e.clipboardData.files);
    };
    document.addEventListener("paste", listener);
    return () => document.removeEventListener("paste", listener);
  });
  const handleDropEvent = reactExports.useCallback((event) => {
    event.preventDefault();
    processTraceFiles(event.dataTransfer.files);
  }, [processTraceFiles]);
  const handleFileInputChange = reactExports.useCallback((event) => {
    event.preventDefault();
    if (!event.target.files)
      return;
    processTraceFiles(event.target.files);
  }, [processTraceFiles]);
  reactExports.useEffect(() => {
    const params = new URL(window.location.href).searchParams;
    const newTraceURLs = params.getAll("trace");
    setIsServer(params.has("isServer"));
    for (const url of newTraceURLs) {
      if (url.startsWith("file:")) {
        setFileForLocalModeError(url || null);
        return;
      }
    }
    if (params.has("isServer")) {
      const guid = new URLSearchParams(window.location.search).get("ws");
      const wsURL = new URL(`../${guid}`, window.location.toString());
      wsURL.protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
      const testServerConnection = new TestServerConnection(new WebSocketTestServerTransport(wsURL));
      testServerConnection.onLoadTraceRequested(async (params2) => {
        setTraceURLs(params2.traceUrl ? [params2.traceUrl] : []);
        setDragOver(false);
        setProcessingErrorMessage(null);
      });
      testServerConnection.initialize({}).catch(() => {
      });
    } else if (!newTraceURLs.some((url) => url.startsWith("blob:"))) {
      setTraceURLs(newTraceURLs);
    }
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
          if (uploadedTraceNames.length)
            params.set("traceFileName", uploadedTraceNames[i]);
          const response = await fetch(`contexts?${params.toString()}`);
          if (!response.ok) {
            if (!isServer)
              setTraceURLs([]);
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
  }, [isServer, traceURLs, uploadedTraceNames]);
  const showFileUploadDropArea = !!(!isServer && !dragOver && !fileForLocalModeError && (!traceURLs.length || processingErrorMessage));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "vbox workbench-loader", onDragOver: (event) => {
    event.preventDefault();
    setDragOver(true);
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hbox header", ...showFileUploadDropArea ? { inert: "true" } : {}, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "playwright-logo.svg", alt: "Playwright logo" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "product", children: "Playwright" }),
      model.title && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "title", children: model.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "spacer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "color-mode", title: "Toggle color mode", toggled: false, onClick: () => toggleTheme() })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "progress", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inner-progress", style: { width: progress.total ? 100 * progress.done / progress.total + "%" : 0 } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Workbench, { model, inert: showFileUploadDropArea, showSettings: true }),
    fileForLocalModeError && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "drop-target", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Trace Viewer uses Service Workers to show traces. To view trace:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { paddingTop: 20 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "1. Click ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: fileForLocalModeError, children: "here" }),
          " to put your trace into the download shelf"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "2. Go to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://trace.playwright.dev", children: "trace.playwright.dev" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "3. Drop the trace from the download shelf into the page" })
      ] })
    ] }),
    showFileUploadDropArea && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "drop-target", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "processing-error", role: "alert", children: processingErrorMessage }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "title", role: "heading", "aria-level": 1, children: "Drop Playwright Trace to load" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "or" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        const input = document.createElement("input");
        input.type = "file";
        input.multiple = true;
        input.click();
        input.addEventListener("change", (e) => handleFileInputChange(e));
      }, type: "button", children: "Select file(s)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { maxWidth: 400 }, children: "Playwright Trace Viewer is a Progressive Web App, it does not send your trace anywhere, it opens it locally." })
    ] }),
    isServer && !traceURLs.length && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "drop-target", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "title", children: "Select test to see the trace" }) }),
    dragOver && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "drop-target",
        onDragLeave: () => {
          setDragOver(false);
        },
        onDrop: (event) => handleDropEvent(event),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "title", children: "Release to analyse the Playwright Trace" })
      }
    )
  ] });
};
const emptyModel = new MultiTraceModel([]);
(async () => {
  applyTheme();
  if (window.location.protocol !== "file:") {
    if (window.location.href.includes("isUnderTest=true"))
      await new Promise((f) => setTimeout(f, 1e3));
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
  createRoot(document.querySelector("#root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(WorkbenchLoader, {}));
})();
//# sourceMappingURL=index.C0EgJ4oW.js.map
