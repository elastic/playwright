function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./assets/xtermModule-CZ7sDYXB.js","./xtermModule.4oRVGWQ-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import { u as useMeasure, r as reactExports, b as currentTheme, _ as __vitePreload, d as addThemeListener, e as removeThemeListener, j as jsxRuntimeExports, R as React, E as Expandable, s as settings, f as clsx, m as msToString, g as Toolbar, T as ToolbarButton, h as testStatusIcon, i as TreeView, k as idForAction, W as Workbench, M as MultiTraceModel, l as useSetting, n as useDarkModeSetting, S as SplitView, o as SettingsView, a as applyTheme, c as createRoot } from "./assets/workbench-C5OQh9VX.js";
import { T as TestServerConnection, W as WebSocketTestServerTransport } from "./assets/testServerConnection-D-tXL3sj.js";
var define_process_env_default = {};
class TeleReporterReceiver {
  constructor(reporter, options = {}) {
    this.isListing = false;
    this._tests = /* @__PURE__ */ new Map();
    this._rootSuite = new TeleSuite("", "root");
    this._options = options;
    this._reporter = reporter;
  }
  reset() {
    this._rootSuite._entries = [];
    this._tests.clear();
  }
  dispatch(message) {
    const { method, params } = message;
    if (method === "onConfigure") {
      this._onConfigure(params.config);
      return;
    }
    if (method === "onProject") {
      this._onProject(params.project);
      return;
    }
    if (method === "onBegin") {
      this._onBegin();
      return;
    }
    if (method === "onTestBegin") {
      this._onTestBegin(params.testId, params.result);
      return;
    }
    if (method === "onTestEnd") {
      this._onTestEnd(params.test, params.result);
      return;
    }
    if (method === "onStepBegin") {
      this._onStepBegin(params.testId, params.resultId, params.step);
      return;
    }
    if (method === "onStepEnd") {
      this._onStepEnd(params.testId, params.resultId, params.step);
      return;
    }
    if (method === "onError") {
      this._onError(params.error);
      return;
    }
    if (method === "onStdIO") {
      this._onStdIO(params.type, params.testId, params.resultId, params.data, params.isBase64);
      return;
    }
    if (method === "onEnd")
      return this._onEnd(params.result);
    if (method === "onExit")
      return this._onExit();
  }
  _onConfigure(config) {
    var _a, _b;
    this._rootDir = config.rootDir;
    this._config = this._parseConfig(config);
    (_b = (_a = this._reporter).onConfigure) == null ? void 0 : _b.call(_a, this._config);
  }
  _onProject(project) {
    let projectSuite = this._options.mergeProjects ? this._rootSuite.suites.find((suite) => suite.project().name === project.name) : void 0;
    if (!projectSuite) {
      projectSuite = new TeleSuite(project.name, "project");
      this._rootSuite._addSuite(projectSuite);
    }
    projectSuite._project = this._parseProject(project);
    for (const suite of project.suites)
      this._mergeSuiteInto(suite, projectSuite);
  }
  _onBegin() {
    var _a, _b;
    (_b = (_a = this._reporter).onBegin) == null ? void 0 : _b.call(_a, this._rootSuite);
  }
  _onTestBegin(testId, payload) {
    var _a, _b;
    const test = this._tests.get(testId);
    if (this._options.clearPreviousResultsWhenTestBegins)
      test.results = [];
    const testResult = test._createTestResult(payload.id);
    testResult.retry = payload.retry;
    testResult.workerIndex = payload.workerIndex;
    testResult.parallelIndex = payload.parallelIndex;
    testResult.setStartTimeNumber(payload.startTime);
    (_b = (_a = this._reporter).onTestBegin) == null ? void 0 : _b.call(_a, test, testResult);
  }
  _onTestEnd(testEndPayload, payload) {
    var _a, _b, _c;
    const test = this._tests.get(testEndPayload.testId);
    test.timeout = testEndPayload.timeout;
    test.expectedStatus = testEndPayload.expectedStatus;
    test.annotations = testEndPayload.annotations;
    const result = test.results.find((r) => r._id === payload.id);
    result.duration = payload.duration;
    result.status = payload.status;
    result.errors = payload.errors;
    result.error = (_a = result.errors) == null ? void 0 : _a[0];
    result.attachments = this._parseAttachments(payload.attachments);
    (_c = (_b = this._reporter).onTestEnd) == null ? void 0 : _c.call(_b, test, result);
    result._stepMap = /* @__PURE__ */ new Map();
  }
  _onStepBegin(testId, resultId, payload) {
    var _a, _b;
    const test = this._tests.get(testId);
    const result = test.results.find((r) => r._id === resultId);
    const parentStep = payload.parentStepId ? result._stepMap.get(payload.parentStepId) : void 0;
    const location = this._absoluteLocation(payload.location);
    const step = new TeleTestStep(payload, parentStep, location);
    if (parentStep)
      parentStep.steps.push(step);
    else
      result.steps.push(step);
    result._stepMap.set(payload.id, step);
    (_b = (_a = this._reporter).onStepBegin) == null ? void 0 : _b.call(_a, test, result, step);
  }
  _onStepEnd(testId, resultId, payload) {
    var _a, _b;
    const test = this._tests.get(testId);
    const result = test.results.find((r) => r._id === resultId);
    const step = result._stepMap.get(payload.id);
    step.duration = payload.duration;
    step.error = payload.error;
    (_b = (_a = this._reporter).onStepEnd) == null ? void 0 : _b.call(_a, test, result, step);
  }
  _onError(error) {
    var _a, _b;
    (_b = (_a = this._reporter).onError) == null ? void 0 : _b.call(_a, error);
  }
  _onStdIO(type, testId, resultId, data, isBase64) {
    var _a, _b, _c, _d;
    const chunk = isBase64 ? globalThis.Buffer ? Buffer.from(data, "base64") : atob(data) : data;
    const test = testId ? this._tests.get(testId) : void 0;
    const result = test && resultId ? test.results.find((r) => r._id === resultId) : void 0;
    if (type === "stdout") {
      result == null ? void 0 : result.stdout.push(chunk);
      (_b = (_a = this._reporter).onStdOut) == null ? void 0 : _b.call(_a, chunk, test, result);
    } else {
      result == null ? void 0 : result.stderr.push(chunk);
      (_d = (_c = this._reporter).onStdErr) == null ? void 0 : _d.call(_c, chunk, test, result);
    }
  }
  async _onEnd(result) {
    var _a, _b;
    await ((_b = (_a = this._reporter).onEnd) == null ? void 0 : _b.call(_a, {
      status: result.status,
      startTime: new Date(result.startTime),
      duration: result.duration
    }));
  }
  _onExit() {
    var _a, _b;
    return (_b = (_a = this._reporter).onExit) == null ? void 0 : _b.call(_a);
  }
  _parseConfig(config) {
    const result = { ...baseFullConfig, ...config };
    if (this._options.configOverrides) {
      result.configFile = this._options.configOverrides.configFile;
      result.reportSlowTests = this._options.configOverrides.reportSlowTests;
      result.quiet = this._options.configOverrides.quiet;
      result.reporter = [...this._options.configOverrides.reporter];
    }
    return result;
  }
  _parseProject(project) {
    return {
      metadata: project.metadata,
      name: project.name,
      outputDir: this._absolutePath(project.outputDir),
      repeatEach: project.repeatEach,
      retries: project.retries,
      testDir: this._absolutePath(project.testDir),
      testIgnore: parseRegexPatterns(project.testIgnore),
      testMatch: parseRegexPatterns(project.testMatch),
      timeout: project.timeout,
      grep: parseRegexPatterns(project.grep),
      grepInvert: parseRegexPatterns(project.grepInvert),
      dependencies: project.dependencies,
      teardown: project.teardown,
      snapshotDir: this._absolutePath(project.snapshotDir),
      use: {}
    };
  }
  _parseAttachments(attachments) {
    return attachments.map((a) => {
      return {
        ...a,
        body: a.base64 && globalThis.Buffer ? Buffer.from(a.base64, "base64") : void 0
      };
    });
  }
  _mergeSuiteInto(jsonSuite, parent) {
    let targetSuite = parent.suites.find((s) => s.title === jsonSuite.title);
    if (!targetSuite) {
      targetSuite = new TeleSuite(jsonSuite.title, parent.type === "project" ? "file" : "describe");
      parent._addSuite(targetSuite);
    }
    targetSuite.location = this._absoluteLocation(jsonSuite.location);
    jsonSuite.entries.forEach((e) => {
      if ("testId" in e)
        this._mergeTestInto(e, targetSuite);
      else
        this._mergeSuiteInto(e, targetSuite);
    });
  }
  _mergeTestInto(jsonTest, parent) {
    let targetTest = this._options.mergeTestCases ? parent.tests.find((s) => s.title === jsonTest.title && s.repeatEachIndex === jsonTest.repeatEachIndex) : void 0;
    if (!targetTest) {
      targetTest = new TeleTestCase(jsonTest.testId, jsonTest.title, this._absoluteLocation(jsonTest.location), jsonTest.repeatEachIndex);
      parent._addTest(targetTest);
      this._tests.set(targetTest.id, targetTest);
    }
    this._updateTest(jsonTest, targetTest);
  }
  _updateTest(payload, test) {
    test.id = payload.testId;
    test.location = this._absoluteLocation(payload.location);
    test.retries = payload.retries;
    test.tags = payload.tags ?? [];
    test.annotations = payload.annotations ?? [];
    return test;
  }
  _absoluteLocation(location) {
    if (!location)
      return location;
    return {
      ...location,
      file: this._absolutePath(location.file)
    };
  }
  _absolutePath(relativePath) {
    if (relativePath === void 0)
      return;
    return this._options.resolvePath ? this._options.resolvePath(this._rootDir, relativePath) : this._rootDir + "/" + relativePath;
  }
}
class TeleSuite {
  constructor(title, type) {
    this._entries = [];
    this._requireFile = "";
    this._parallelMode = "none";
    this.title = title;
    this._type = type;
  }
  get type() {
    return this._type;
  }
  get suites() {
    return this._entries.filter((e) => e.type !== "test");
  }
  get tests() {
    return this._entries.filter((e) => e.type === "test");
  }
  entries() {
    return this._entries;
  }
  allTests() {
    const result = [];
    const visit = (suite) => {
      for (const entry of suite.entries()) {
        if (entry.type === "test")
          result.push(entry);
        else
          visit(entry);
      }
    };
    visit(this);
    return result;
  }
  titlePath() {
    const titlePath = this.parent ? this.parent.titlePath() : [];
    if (this.title || this._type !== "describe")
      titlePath.push(this.title);
    return titlePath;
  }
  project() {
    var _a;
    return this._project ?? ((_a = this.parent) == null ? void 0 : _a.project());
  }
  _addTest(test) {
    test.parent = this;
    this._entries.push(test);
  }
  _addSuite(suite) {
    suite.parent = this;
    this._entries.push(suite);
  }
}
class TeleTestCase {
  constructor(id, title, location, repeatEachIndex) {
    this.fn = () => {
    };
    this.results = [];
    this.type = "test";
    this.expectedStatus = "passed";
    this.timeout = 0;
    this.annotations = [];
    this.retries = 0;
    this.tags = [];
    this.repeatEachIndex = 0;
    this.id = id;
    this.title = title;
    this.location = location;
    this.repeatEachIndex = repeatEachIndex;
  }
  titlePath() {
    const titlePath = this.parent ? this.parent.titlePath() : [];
    titlePath.push(this.title);
    return titlePath;
  }
  outcome() {
    return computeTestCaseOutcome(this);
  }
  ok() {
    const status = this.outcome();
    return status === "expected" || status === "flaky" || status === "skipped";
  }
  _createTestResult(id) {
    const result = new TeleTestResult(this.results.length, id);
    this.results.push(result);
    return result;
  }
}
class TeleTestStep {
  constructor(payload, parentStep, location) {
    this.duration = -1;
    this.steps = [];
    this._startTime = 0;
    this.title = payload.title;
    this.category = payload.category;
    this.location = location;
    this.parent = parentStep;
    this._startTime = payload.startTime;
  }
  titlePath() {
    var _a;
    const parentPath = ((_a = this.parent) == null ? void 0 : _a.titlePath()) || [];
    return [...parentPath, this.title];
  }
  get startTime() {
    return new Date(this._startTime);
  }
  set startTime(value) {
    this._startTime = +value;
  }
}
class TeleTestResult {
  constructor(retry, id) {
    this.parallelIndex = -1;
    this.workerIndex = -1;
    this.duration = -1;
    this.stdout = [];
    this.stderr = [];
    this.attachments = [];
    this.status = "skipped";
    this.steps = [];
    this.errors = [];
    this._stepMap = /* @__PURE__ */ new Map();
    this._startTime = 0;
    this.retry = retry;
    this._id = id;
  }
  setStartTimeNumber(startTime) {
    this._startTime = startTime;
  }
  get startTime() {
    return new Date(this._startTime);
  }
  set startTime(value) {
    this._startTime = +value;
  }
}
const baseFullConfig = {
  forbidOnly: false,
  fullyParallel: false,
  globalSetup: null,
  globalTeardown: null,
  globalTimeout: 0,
  grep: /.*/,
  grepInvert: null,
  maxFailures: 0,
  metadata: {},
  preserveOutput: "always",
  projects: [],
  reporter: [[define_process_env_default.CI ? "dot" : "list"]],
  reportSlowTests: { max: 5, threshold: 15e3 },
  configFile: "",
  rootDir: "",
  quiet: false,
  shard: null,
  updateSnapshots: "missing",
  version: "",
  workers: 0,
  webServer: null
};
function parseRegexPatterns(patterns) {
  return patterns.map((p) => {
    if (p.s !== void 0)
      return p.s;
    return new RegExp(p.r.source, p.r.flags);
  });
}
function computeTestCaseOutcome(test) {
  let skipped = 0;
  let expected = 0;
  let unexpected = 0;
  for (const result of test.results) {
    if (result.status === "interrupted")
      ;
    else if (result.status === "skipped" && test.expectedStatus === "skipped") {
      ++skipped;
    } else if (result.status === "skipped")
      ;
    else if (result.status === test.expectedStatus) {
      ++expected;
    } else {
      ++unexpected;
    }
  }
  if (expected === 0 && unexpected === 0)
    return "skipped";
  if (unexpected === 0)
    return "expected";
  if (expected === 0 && skipped === 0)
    return "unexpected";
  return "flaky";
}
class TestTree {
  constructor(rootFolder, rootSuite, loadErrors, projectFilters, pathSeparator2) {
    this._treeItemById = /* @__PURE__ */ new Map();
    this._treeItemByTestId = /* @__PURE__ */ new Map();
    const filterProjects = projectFilters && [...projectFilters.values()].some(Boolean);
    this.pathSeparator = pathSeparator2;
    this.rootItem = {
      kind: "group",
      subKind: "folder",
      id: rootFolder,
      title: "",
      location: { file: "", line: 0, column: 0 },
      duration: 0,
      parent: void 0,
      children: [],
      status: "none",
      hasLoadErrors: false
    };
    this._treeItemById.set(rootFolder, this.rootItem);
    const visitSuite = (project, parentSuite, parentGroup) => {
      for (const suite of parentSuite.suites) {
        const title = suite.title || "<anonymous>";
        let group = parentGroup.children.find((item) => item.kind === "group" && item.title === title);
        if (!group) {
          group = {
            kind: "group",
            subKind: "describe",
            id: "suite:" + parentSuite.titlePath().join("") + "" + title,
            // account for anonymous suites
            title,
            location: suite.location,
            duration: 0,
            parent: parentGroup,
            children: [],
            status: "none",
            hasLoadErrors: false
          };
          this._addChild(parentGroup, group);
        }
        visitSuite(project, suite, group);
      }
      for (const test of parentSuite.tests) {
        const title = test.title;
        let testCaseItem = parentGroup.children.find((t) => t.kind !== "group" && t.title === title);
        if (!testCaseItem) {
          testCaseItem = {
            kind: "case",
            id: "test:" + test.titlePath().join(""),
            title,
            parent: parentGroup,
            children: [],
            tests: [],
            location: test.location,
            duration: 0,
            status: "none",
            project: void 0,
            test: void 0,
            tags: test.tags
          };
          this._addChild(parentGroup, testCaseItem);
        }
        const result = test.results[0];
        let status = "none";
        if ((result == null ? void 0 : result[statusEx]) === "scheduled")
          status = "scheduled";
        else if ((result == null ? void 0 : result[statusEx]) === "running")
          status = "running";
        else if ((result == null ? void 0 : result.status) === "skipped")
          status = "skipped";
        else if ((result == null ? void 0 : result.status) === "interrupted")
          status = "none";
        else if (result && test.outcome() !== "expected")
          status = "failed";
        else if (result && test.outcome() === "expected")
          status = "passed";
        testCaseItem.tests.push(test);
        const testItem = {
          kind: "test",
          id: test.id,
          title: project.name,
          location: test.location,
          test,
          parent: testCaseItem,
          children: [],
          status,
          duration: test.results.length ? Math.max(0, test.results[0].duration) : 0,
          project
        };
        this._addChild(testCaseItem, testItem);
        this._treeItemByTestId.set(test.id, testItem);
        testCaseItem.duration = testCaseItem.children.reduce((a, b) => a + b.duration, 0);
      }
    };
    for (const projectSuite of (rootSuite == null ? void 0 : rootSuite.suites) || []) {
      if (filterProjects && !projectFilters.get(projectSuite.title))
        continue;
      for (const fileSuite of projectSuite.suites) {
        const fileItem = this._fileItem(fileSuite.location.file.split(pathSeparator2), true);
        visitSuite(projectSuite.project(), fileSuite, fileItem);
      }
    }
    for (const loadError of loadErrors) {
      if (!loadError.location)
        continue;
      const fileItem = this._fileItem(loadError.location.file.split(pathSeparator2), true);
      fileItem.hasLoadErrors = true;
    }
  }
  _addChild(parent, child) {
    parent.children.push(child);
    child.parent = parent;
    this._treeItemById.set(child.id, child);
  }
  filterTree(filterText, statusFilters, runningTestIds) {
    const tokens = filterText.trim().toLowerCase().split(" ");
    const filtersStatuses = [...statusFilters.values()].some(Boolean);
    const filter = (testCase) => {
      const titleWithTags = [...testCase.tests[0].titlePath(), ...testCase.tests[0].tags].join(" ").toLowerCase();
      if (!tokens.every((token) => titleWithTags.includes(token)) && !testCase.tests.some((t) => runningTestIds == null ? void 0 : runningTestIds.has(t.id)))
        return false;
      testCase.children = testCase.children.filter((test) => {
        return !filtersStatuses || (runningTestIds == null ? void 0 : runningTestIds.has(test.test.id)) || statusFilters.get(test.status);
      });
      testCase.tests = testCase.children.map((c) => c.test);
      return !!testCase.children.length;
    };
    const visit = (treeItem) => {
      const newChildren = [];
      for (const child of treeItem.children) {
        if (child.kind === "case") {
          if (filter(child))
            newChildren.push(child);
        } else {
          visit(child);
          if (child.children.length || child.hasLoadErrors)
            newChildren.push(child);
        }
      }
      treeItem.children = newChildren;
    };
    visit(this.rootItem);
  }
  _fileItem(filePath, isFile) {
    if (filePath.length === 0)
      return this.rootItem;
    const fileName = filePath.join(this.pathSeparator);
    const existingFileItem = this._treeItemById.get(fileName);
    if (existingFileItem)
      return existingFileItem;
    const parentFileItem = this._fileItem(filePath.slice(0, filePath.length - 1), false);
    const fileItem = {
      kind: "group",
      subKind: isFile ? "file" : "folder",
      id: fileName,
      title: filePath[filePath.length - 1],
      location: { file: fileName, line: 0, column: 0 },
      duration: 0,
      parent: parentFileItem,
      children: [],
      status: "none",
      hasLoadErrors: false
    };
    this._addChild(parentFileItem, fileItem);
    return fileItem;
  }
  sortAndPropagateStatus() {
    sortAndPropagateStatus(this.rootItem);
  }
  flattenForSingleProject() {
    const visit = (treeItem) => {
      if (treeItem.kind === "case" && treeItem.children.length === 1) {
        treeItem.project = treeItem.children[0].project;
        treeItem.test = treeItem.children[0].test;
        treeItem.children = [];
        this._treeItemByTestId.set(treeItem.test.id, treeItem);
      } else {
        treeItem.children.forEach(visit);
      }
    };
    visit(this.rootItem);
  }
  shortenRoot() {
    let shortRoot = this.rootItem;
    while (shortRoot.children.length === 1 && shortRoot.children[0].kind === "group" && shortRoot.children[0].subKind === "folder")
      shortRoot = shortRoot.children[0];
    shortRoot.location = this.rootItem.location;
    this.rootItem = shortRoot;
  }
  testIds() {
    const result = /* @__PURE__ */ new Set();
    const visit = (treeItem) => {
      if (treeItem.kind === "case")
        treeItem.tests.forEach((t) => result.add(t.id));
      treeItem.children.forEach(visit);
    };
    visit(this.rootItem);
    return result;
  }
  fileNames() {
    const result = /* @__PURE__ */ new Set();
    const visit = (treeItem) => {
      if (treeItem.kind === "group" && treeItem.subKind === "file")
        result.add(treeItem.id);
      else
        treeItem.children.forEach(visit);
    };
    visit(this.rootItem);
    return [...result];
  }
  flatTreeItems() {
    const result = [];
    const visit = (treeItem) => {
      result.push(treeItem);
      treeItem.children.forEach(visit);
    };
    visit(this.rootItem);
    return result;
  }
  treeItemById(id) {
    return this._treeItemById.get(id);
  }
  collectTestIds(treeItem) {
    return treeItem ? collectTestIds(treeItem) : /* @__PURE__ */ new Set();
  }
}
function sortAndPropagateStatus(treeItem) {
  for (const child of treeItem.children)
    sortAndPropagateStatus(child);
  if (treeItem.kind === "group") {
    treeItem.children.sort((a, b) => {
      const fc = a.location.file.localeCompare(b.location.file);
      return fc || a.location.line - b.location.line;
    });
  }
  let allPassed = treeItem.children.length > 0;
  let allSkipped = treeItem.children.length > 0;
  let hasFailed = false;
  let hasRunning = false;
  let hasScheduled = false;
  for (const child of treeItem.children) {
    allSkipped = allSkipped && child.status === "skipped";
    allPassed = allPassed && (child.status === "passed" || child.status === "skipped");
    hasFailed = hasFailed || child.status === "failed";
    hasRunning = hasRunning || child.status === "running";
    hasScheduled = hasScheduled || child.status === "scheduled";
  }
  if (hasRunning)
    treeItem.status = "running";
  else if (hasScheduled)
    treeItem.status = "scheduled";
  else if (hasFailed)
    treeItem.status = "failed";
  else if (allSkipped)
    treeItem.status = "skipped";
  else if (allPassed)
    treeItem.status = "passed";
}
function collectTestIds(treeItem) {
  const testIds = /* @__PURE__ */ new Set();
  const visit = (treeItem2) => {
    var _a;
    if (treeItem2.kind === "case")
      treeItem2.tests.map((t) => t.id).forEach((id) => testIds.add(id));
    else if (treeItem2.kind === "test")
      testIds.add(treeItem2.id);
    else
      (_a = treeItem2.children) == null ? void 0 : _a.forEach(visit);
  };
  visit(treeItem);
  return testIds;
}
const statusEx = Symbol("statusEx");
class TeleSuiteUpdater {
  constructor(options) {
    this.loadErrors = [];
    this.progress = {
      total: 0,
      passed: 0,
      failed: 0,
      skipped: 0
    };
    this._lastRunTestCount = 0;
    this._receiver = new TeleReporterReceiver(this._createReporter(), {
      mergeProjects: true,
      mergeTestCases: true,
      resolvePath: (rootDir, relativePath) => rootDir + options.pathSeparator + relativePath,
      clearPreviousResultsWhenTestBegins: true
    });
    this._options = options;
  }
  _createReporter() {
    return {
      version: () => "v2",
      onConfigure: (c) => {
        this.config = c;
        this._lastRunReceiver = new TeleReporterReceiver({
          onBegin: (suite) => {
            this._lastRunTestCount = suite.allTests().length;
            this._lastRunReceiver = void 0;
          }
        }, {
          mergeProjects: true,
          mergeTestCases: false,
          resolvePath: (rootDir, relativePath) => rootDir + this._options.pathSeparator + relativePath
        });
      },
      onBegin: (suite) => {
        var _a;
        if (!this.rootSuite)
          this.rootSuite = suite;
        if (this._testResultsSnapshot) {
          for (const test of this.rootSuite.allTests())
            test.results = ((_a = this._testResultsSnapshot) == null ? void 0 : _a.get(test.id)) || test.results;
          this._testResultsSnapshot = void 0;
        }
        this.progress.total = this._lastRunTestCount;
        this.progress.passed = 0;
        this.progress.failed = 0;
        this.progress.skipped = 0;
        this._options.onUpdate(true);
      },
      onEnd: () => {
        this._options.onUpdate(true);
      },
      onTestBegin: (test, testResult) => {
        testResult[statusEx] = "running";
        this._options.onUpdate();
      },
      onTestEnd: (test, testResult) => {
        if (test.outcome() === "skipped")
          ++this.progress.skipped;
        else if (test.outcome() === "unexpected")
          ++this.progress.failed;
        else
          ++this.progress.passed;
        testResult[statusEx] = testResult.status;
        this._options.onUpdate();
      },
      onError: (error) => this._handleOnError(error),
      printsToStdio: () => {
        return false;
      },
      onStdOut: () => {
      },
      onStdErr: () => {
      },
      onExit: () => {
      },
      onStepBegin: () => {
      },
      onStepEnd: () => {
      }
    };
  }
  processGlobalReport(report) {
    const receiver = new TeleReporterReceiver({
      onConfigure: (c) => {
        this.config = c;
      },
      onError: (error) => this._handleOnError(error)
    });
    for (const message of report)
      void receiver.dispatch(message);
  }
  processListReport(report) {
    var _a;
    const tests = ((_a = this.rootSuite) == null ? void 0 : _a.allTests()) || [];
    this._testResultsSnapshot = new Map(tests.map((test) => [test.id, test.results]));
    this._receiver.reset();
    for (const message of report)
      void this._receiver.dispatch(message);
  }
  processTestReportEvent(message) {
    var _a, _b, _c;
    (_b = (_a = this._lastRunReceiver) == null ? void 0 : _a.dispatch(message)) == null ? void 0 : _b.catch(() => {
    });
    (_c = this._receiver.dispatch(message)) == null ? void 0 : _c.catch(() => {
    });
  }
  _handleOnError(error) {
    var _a, _b;
    this.loadErrors.push(error);
    (_b = (_a = this._options).onError) == null ? void 0 : _b.call(_a, error);
    this._options.onUpdate();
  }
  asModel() {
    return {
      rootSuite: this.rootSuite || new TeleSuite("", "root"),
      config: this.config,
      loadErrors: this.loadErrors,
      progress: this.progress
    };
  }
}
const XtermWrapper = ({
  source
}) => {
  const [measure, xtermElement] = useMeasure();
  const [theme, setTheme] = reactExports.useState(currentTheme());
  const [modulePromise] = reactExports.useState(__vitePreload(() => import("./assets/xtermModule-CZ7sDYXB.js"), true ? __vite__mapDeps([0,1]) : void 0, import.meta.url).then((m) => m.default));
  const terminal = reactExports.useRef(null);
  reactExports.useEffect(() => {
    addThemeListener(setTheme);
    return () => removeThemeListener(setTheme);
  }, []);
  reactExports.useEffect(() => {
    const oldSourceWrite = source.write;
    const oldSourceClear = source.clear;
    (async () => {
      const { Terminal, FitAddon } = await modulePromise;
      const element = xtermElement.current;
      if (!element)
        return;
      const terminalTheme = theme === "dark-mode" ? darkTheme : lightTheme;
      if (terminal.current && terminal.current.terminal.options.theme === terminalTheme)
        return;
      if (terminal.current)
        element.textContent = "";
      const newTerminal = new Terminal({
        convertEol: true,
        fontSize: 13,
        scrollback: 1e4,
        fontFamily: "var(--vscode-editor-font-family)",
        theme: terminalTheme
      });
      const fitAddon = new FitAddon();
      newTerminal.loadAddon(fitAddon);
      for (const p of source.pending)
        newTerminal.write(p);
      source.write = (data) => {
        source.pending.push(data);
        newTerminal.write(data);
      };
      source.clear = () => {
        source.pending = [];
        newTerminal.clear();
      };
      newTerminal.open(element);
      fitAddon.fit();
      terminal.current = { terminal: newTerminal, fitAddon };
    })();
    return () => {
      source.clear = oldSourceClear;
      source.write = oldSourceWrite;
    };
  }, [modulePromise, terminal, xtermElement, source, theme]);
  reactExports.useEffect(() => {
    setTimeout(() => {
      if (!terminal.current)
        return;
      terminal.current.fitAddon.fit();
      source.resize(terminal.current.terminal.cols, terminal.current.terminal.rows);
    }, 250);
  }, [measure, source]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "output", className: "xterm-wrapper", style: { flex: "auto" }, ref: xtermElement });
};
const lightTheme = {
  foreground: "#383a42",
  background: "#fafafa",
  cursor: "#383a42",
  black: "#000000",
  red: "#e45649",
  green: "#50a14f",
  yellow: "#c18401",
  blue: "#4078f2",
  magenta: "#a626a4",
  cyan: "#0184bc",
  white: "#a0a0a0",
  brightBlack: "#000000",
  brightRed: "#e06c75",
  brightGreen: "#98c379",
  brightYellow: "#d19a66",
  brightBlue: "#4078f2",
  brightMagenta: "#a626a4",
  brightCyan: "#0184bc",
  brightWhite: "#383a42",
  selectionBackground: "#d7d7d7",
  selectionForeground: "#383a42"
};
const darkTheme = {
  foreground: "#f8f8f2",
  background: "#1e1e1e",
  cursor: "#f8f8f0",
  black: "#000000",
  red: "#ff5555",
  green: "#50fa7b",
  yellow: "#f1fa8c",
  blue: "#bd93f9",
  magenta: "#ff79c6",
  cyan: "#8be9fd",
  white: "#bfbfbf",
  brightBlack: "#4d4d4d",
  brightRed: "#ff6e6e",
  brightGreen: "#69ff94",
  brightYellow: "#ffffa5",
  brightBlue: "#d6acff",
  brightMagenta: "#ff92df",
  brightCyan: "#a4ffff",
  brightWhite: "#e6e6e6",
  selectionBackground: "#44475a",
  selectionForeground: "#f8f8f2"
};
const FiltersView = ({ filterText, setFilterText, statusFilters, setStatusFilters, projectFilters, setProjectFilters, testModel, runTests }) => {
  const [expanded, setExpanded] = React.useState(false);
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    var _a;
    (_a = inputRef.current) == null ? void 0 : _a.focus();
  }, []);
  const statusLine = [...statusFilters.entries()].filter(([_, v]) => v).map(([s]) => s).join(" ") || "all";
  const projectsLine = [...projectFilters.entries()].filter(([_, v]) => v).map(([p]) => p).join(" ") || "all";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filters", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Expandable,
      {
        expanded,
        setExpanded,
        title: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: inputRef,
            type: "search",
            placeholder: "Filter (e.g. text, @tag)",
            spellCheck: false,
            value: filterText,
            onChange: (e) => {
              setFilterText(e.target.value);
            },
            onKeyDown: (e) => {
              if (e.key === "Enter")
                runTests();
            }
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-summary", title: "Status: " + statusLine + "\nProjects: " + projectsLine, onClick: () => setExpanded(!expanded), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Status:" }),
      " ",
      statusLine,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Projects:" }),
      " ",
      projectsLine
    ] }),
    expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hbox", style: { marginLeft: 14, maxHeight: 200, overflowY: "auto" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "filter-list", children: [...statusFilters.entries()].map(([status, value]) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "filter-entry", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: value, onClick: () => {
            const copy = new Map(statusFilters);
            copy.set(status, !copy.get(status));
            setStatusFilters(copy);
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: status })
        ] }) }, status);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "filter-list", children: [...projectFilters.entries()].map(([projectName, value]) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "filter-entry", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: value, onClick: () => {
            var _a;
            const copy = new Map(projectFilters);
            copy.set(projectName, !copy.get(projectName));
            setProjectFilters(copy);
            const configFile = (_a = testModel == null ? void 0 : testModel.config) == null ? void 0 : _a.configFile;
            if (configFile)
              settings.setObject(configFile + ":projects", [...copy.entries()].filter(([_, v]) => v).map(([k]) => k));
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: projectName || "untitled" })
        ] }) }, projectName);
      }) })
    ] })
  ] });
};
const TagView = ({ tag, style, onClick }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: clsx("tag", `tag-color-${tagNameToColor(tag)}`),
      onClick,
      style: { margin: "6px 0 0 6px", ...style },
      title: `Click to filter by tag: ${tag}`,
      children: tag
    }
  );
};
function tagNameToColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++)
    hash = str.charCodeAt(i) + ((hash << 8) - hash);
  return Math.abs(hash % 6);
}
const TestTreeView = TreeView;
const TestListView = ({ filterText, testModel, testServerConnection, testTree, runTests, runningState, watchAll, watchedTreeIds, setWatchedTreeIds, isLoading, onItemSelected, requestedCollapseAllCount, setFilterText, onRevealSource }) => {
  const [treeState, setTreeState] = React.useState({ expandedItems: /* @__PURE__ */ new Map() });
  const [selectedTreeItemId, setSelectedTreeItemId] = React.useState();
  const [collapseAllCount, setCollapseAllCount] = React.useState(requestedCollapseAllCount);
  React.useEffect(() => {
    if (collapseAllCount !== requestedCollapseAllCount) {
      treeState.expandedItems.clear();
      for (const item of testTree.flatTreeItems())
        treeState.expandedItems.set(item.id, false);
      setCollapseAllCount(requestedCollapseAllCount);
      setSelectedTreeItemId(void 0);
      setTreeState({ ...treeState });
      return;
    }
    if (!runningState || runningState.itemSelectedByUser)
      return;
    let selectedTreeItem2;
    const visit = (treeItem) => {
      var _a;
      treeItem.children.forEach(visit);
      if (selectedTreeItem2)
        return;
      if (treeItem.status === "failed") {
        if (treeItem.kind === "test" && runningState.testIds.has(treeItem.test.id))
          selectedTreeItem2 = treeItem;
        else if (treeItem.kind === "case" && runningState.testIds.has((_a = treeItem.tests[0]) == null ? void 0 : _a.id))
          selectedTreeItem2 = treeItem;
      }
    };
    visit(testTree.rootItem);
    if (selectedTreeItem2)
      setSelectedTreeItemId(selectedTreeItem2.id);
  }, [runningState, setSelectedTreeItemId, testTree, collapseAllCount, setCollapseAllCount, requestedCollapseAllCount, treeState, setTreeState]);
  const { selectedTreeItem } = React.useMemo(() => {
    if (!testModel)
      return { selectedTreeItem: void 0 };
    const selectedTreeItem2 = selectedTreeItemId ? testTree.treeItemById(selectedTreeItemId) : void 0;
    const testFile = itemLocation(selectedTreeItem2, testModel);
    let selectedTest;
    if ((selectedTreeItem2 == null ? void 0 : selectedTreeItem2.kind) === "test")
      selectedTest = selectedTreeItem2.test;
    else if ((selectedTreeItem2 == null ? void 0 : selectedTreeItem2.kind) === "case" && selectedTreeItem2.tests.length === 1)
      selectedTest = selectedTreeItem2.tests[0];
    onItemSelected({ treeItem: selectedTreeItem2, testCase: selectedTest, testFile });
    return { selectedTreeItem: selectedTreeItem2 };
  }, [onItemSelected, selectedTreeItemId, testModel, testTree]);
  React.useEffect(() => {
    if (isLoading)
      return;
    if (watchAll) {
      testServerConnection == null ? void 0 : testServerConnection.watchNoReply({ fileNames: testTree.fileNames() });
    } else {
      const fileNames = /* @__PURE__ */ new Set();
      for (const itemId of watchedTreeIds.value) {
        const treeItem = testTree.treeItemById(itemId);
        const fileName = treeItem == null ? void 0 : treeItem.location.file;
        if (fileName)
          fileNames.add(fileName);
      }
      testServerConnection == null ? void 0 : testServerConnection.watchNoReply({ fileNames: [...fileNames] });
    }
  }, [isLoading, testTree, watchAll, watchedTreeIds, testServerConnection]);
  const runTreeItem = (treeItem) => {
    setSelectedTreeItemId(treeItem.id);
    runTests("bounce-if-busy", testTree.collectTestIds(treeItem));
  };
  const handleTagClick = (e, tag) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.metaKey || e.ctrlKey) {
      const parts = filterText.split(" ");
      if (parts.includes(tag))
        setFilterText(parts.filter((t) => t !== tag).join(" ").trim());
      else
        setFilterText((filterText + " " + tag).trim());
    } else {
      setFilterText((filterText.split(" ").filter((t) => !t.startsWith("@")).join(" ") + " " + tag).trim());
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    TestTreeView,
    {
      name: "tests",
      treeState,
      setTreeState,
      rootItem: testTree.rootItem,
      dataTestId: "test-tree",
      render: (treeItem) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hbox ui-mode-list-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui-mode-list-item-title", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: treeItem.title, children: treeItem.title }),
            treeItem.kind === "case" ? treeItem.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(TagView, { tag: tag.slice(1), onClick: (e) => handleTagClick(e, tag) }, tag)) : null
          ] }),
          !!treeItem.duration && treeItem.status !== "skipped" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ui-mode-list-item-time", children: msToString(treeItem.duration) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Toolbar, { noMinHeight: true, noShadow: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "play", title: "Run", onClick: () => runTreeItem(treeItem), disabled: !!runningState && !runningState.completed }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "go-to-file", title: "Show source", onClick: onRevealSource, style: treeItem.kind === "group" && treeItem.subKind === "folder" ? { visibility: "hidden" } : {} }),
            !watchAll && /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "eye", title: "Watch", onClick: () => {
              if (watchedTreeIds.value.has(treeItem.id))
                watchedTreeIds.value.delete(treeItem.id);
              else
                watchedTreeIds.value.add(treeItem.id);
              setWatchedTreeIds({ ...watchedTreeIds });
            }, toggled: watchedTreeIds.value.has(treeItem.id) })
          ] })
        ] });
      },
      icon: (treeItem) => testStatusIcon(treeItem.status),
      selectedItem: selectedTreeItem,
      onAccepted: runTreeItem,
      onSelected: (treeItem) => {
        if (runningState)
          runningState.itemSelectedByUser = true;
        setSelectedTreeItemId(treeItem.id);
      },
      isError: (treeItem) => treeItem.kind === "group" ? treeItem.hasLoadErrors : false,
      autoExpandDepth: filterText ? 5 : 1,
      noItemsMessage: isLoading ? "Loading…" : "No tests"
    }
  );
};
function itemLocation(item, model) {
  if (!item || !model)
    return;
  return {
    file: item.location.file,
    line: item.location.line,
    column: item.location.column,
    source: {
      errors: model.loadErrors.filter((e) => {
        var _a;
        return ((_a = e.location) == null ? void 0 : _a.file) === item.location.file;
      }).map((e) => ({ line: e.location.line, message: e.message })),
      content: void 0
    }
  };
}
function artifactsFolderName(workerIndex) {
  return `.playwright-artifacts-${workerIndex}`;
}
const TraceView = ({ item, rootDir, onOpenExternally, revealSource }) => {
  var _a, _b;
  const [model, setModel] = React.useState();
  const [counter, setCounter] = React.useState(0);
  const pollTimer = React.useRef(null);
  const { outputDir } = React.useMemo(() => {
    const outputDir2 = item.testCase ? outputDirForTestCase(item.testCase) : void 0;
    return { outputDir: outputDir2 };
  }, [item]);
  const [selectedActionId, setSelectedActionId] = React.useState();
  const onSelectionChanged = React.useCallback((action) => setSelectedActionId(idForAction(action)), [setSelectedActionId]);
  const initialSelection = selectedActionId ? model == null ? void 0 : model.model.actions.find((a) => idForAction(a) === selectedActionId) : void 0;
  React.useEffect(() => {
    var _a2, _b2;
    if (pollTimer.current)
      clearTimeout(pollTimer.current);
    const result = (_a2 = item.testCase) == null ? void 0 : _a2.results[0];
    if (!result) {
      setModel(void 0);
      return;
    }
    const attachment = result && result.duration >= 0 && result.attachments.find((a) => a.name === "trace");
    if (attachment && attachment.path) {
      loadSingleTraceFile(attachment.path).then((model2) => setModel({ model: model2, isLive: false }));
      return;
    }
    if (!outputDir) {
      setModel(void 0);
      return;
    }
    const traceLocation = `${outputDir}/${artifactsFolderName(result.workerIndex)}/traces/${(_b2 = item.testCase) == null ? void 0 : _b2.id}.json`;
    pollTimer.current = setTimeout(async () => {
      try {
        const model2 = await loadSingleTraceFile(traceLocation);
        setModel({ model: model2, isLive: true });
      } catch {
        setModel(void 0);
      } finally {
        setCounter(counter + 1);
      }
    }, 500);
    return () => {
      if (pollTimer.current)
        clearTimeout(pollTimer.current);
    };
  }, [outputDir, item, setModel, counter, setCounter]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Workbench,
    {
      model: model == null ? void 0 : model.model,
      showSourcesFirst: true,
      rootDir,
      initialSelection,
      onSelectionChanged,
      fallbackLocation: item.testFile,
      isLive: model == null ? void 0 : model.isLive,
      status: (_a = item.treeItem) == null ? void 0 : _a.status,
      annotations: ((_b = item.testCase) == null ? void 0 : _b.annotations) || [],
      onOpenExternally,
      revealSource
    },
    "workbench"
  );
};
const outputDirForTestCase = (testCase) => {
  var _a;
  for (let suite = testCase.parent; suite; suite = suite.parent) {
    if (suite.project())
      return (_a = suite.project()) == null ? void 0 : _a.outputDir;
  }
  return void 0;
};
async function loadSingleTraceFile(url) {
  const params = new URLSearchParams();
  params.set("trace", url);
  const response = await fetch(`contexts?${params.toString()}`);
  const contextEntries = await response.json();
  return new MultiTraceModel(contextEntries);
}
const pathSeparator = navigator.userAgent.toLowerCase().includes("windows") ? "\\" : "/";
let xtermSize = { cols: 80, rows: 24 };
const xtermDataSource = {
  pending: [],
  clear: () => {
  },
  write: (data) => xtermDataSource.pending.push(data),
  resize: () => {
  }
};
const searchParams = new URLSearchParams(window.location.search);
const guid = searchParams.get("ws");
const wsURL = new URL(`../${guid}`, window.location.toString());
wsURL.protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
const queryParams = {
  args: searchParams.getAll("arg"),
  grep: searchParams.get("grep") || void 0,
  grepInvert: searchParams.get("grepInvert") || void 0,
  projects: searchParams.getAll("project"),
  workers: searchParams.get("workers") || void 0,
  timeout: searchParams.has("timeout") ? +searchParams.get("timeout") : void 0,
  headed: searchParams.has("headed"),
  outputDir: searchParams.get("outputDir") || void 0,
  updateSnapshots: searchParams.get("updateSnapshots") || void 0,
  reporters: searchParams.has("reporter") ? searchParams.getAll("reporter") : void 0
};
if (queryParams.updateSnapshots && !["all", "none", "missing"].includes(queryParams.updateSnapshots))
  queryParams.updateSnapshots = void 0;
const isMac = navigator.platform === "MacIntel";
const UIModeView = ({}) => {
  var _a;
  const [filterText, setFilterText] = React.useState("");
  const [isShowingOutput, setIsShowingOutput] = React.useState(false);
  const [statusFilters, setStatusFilters] = React.useState(/* @__PURE__ */ new Map([
    ["passed", false],
    ["failed", false],
    ["skipped", false]
  ]));
  const [projectFilters, setProjectFilters] = React.useState(/* @__PURE__ */ new Map());
  const [testModel, setTestModel] = React.useState();
  const [progress, setProgress] = React.useState();
  const [selectedItem, setSelectedItem] = React.useState({});
  const [visibleTestIds, setVisibleTestIds] = React.useState(/* @__PURE__ */ new Set());
  const [isLoading, setIsLoading] = React.useState(false);
  const [runningState, setRunningState] = React.useState();
  const isRunningTest = runningState && !runningState.completed;
  const [watchAll, setWatchAll] = useSetting("watch-all", false);
  const [watchedTreeIds, setWatchedTreeIds] = React.useState({ value: /* @__PURE__ */ new Set() });
  const commandQueue = React.useRef(Promise.resolve());
  const runTestBacklog = React.useRef(/* @__PURE__ */ new Set());
  const [collapseAllCount, setCollapseAllCount] = React.useState(0);
  const [isDisconnected, setIsDisconnected] = React.useState(false);
  const [hasBrowsers, setHasBrowsers] = React.useState(true);
  const [testServerConnection, setTestServerConnection] = React.useState();
  const [teleSuiteUpdater, setTeleSuiteUpdater] = React.useState();
  const [settingsVisible, setSettingsVisible] = React.useState(false);
  React.useState(false);
  const [revealSource, setRevealSource] = React.useState(false);
  const onRevealSource = React.useCallback(() => setRevealSource(true), [setRevealSource]);
  const showTestingOptions = false;
  const [singleWorker, setSingleWorker] = React.useState(queryParams.workers === "1");
  const [showBrowser, setShowBrowser] = React.useState(queryParams.headed);
  const [updateSnapshots, setUpdateSnapshots] = React.useState(queryParams.updateSnapshots === "all");
  const [showRouteActions, setShowRouteActions] = useSetting("show-route-actions", true);
  const [darkMode, setDarkMode] = useDarkModeSetting();
  const inputRef = React.useRef(null);
  const reloadTests = React.useCallback(() => {
    setTestServerConnection(new TestServerConnection(new WebSocketTestServerTransport(wsURL)));
  }, []);
  React.useEffect(() => {
    var _a2;
    (_a2 = inputRef.current) == null ? void 0 : _a2.focus();
    setIsLoading(true);
    reloadTests();
  }, [reloadTests]);
  React.useEffect(() => {
    if (!testServerConnection)
      return;
    const disposables = [
      testServerConnection.onStdio((params) => {
        if (params.buffer) {
          const data = atob(params.buffer);
          xtermDataSource.write(data);
        } else {
          xtermDataSource.write(params.text);
        }
      }),
      testServerConnection.onClose(() => setIsDisconnected(true))
    ];
    xtermDataSource.resize = (cols, rows) => {
      xtermSize = { cols, rows };
      testServerConnection.resizeTerminalNoReply({ cols, rows });
    };
    return () => {
      for (const disposable of disposables)
        disposable.dispose();
    };
  }, [testServerConnection]);
  React.useEffect(() => {
    if (!testServerConnection)
      return;
    let throttleTimer;
    const teleSuiteUpdater2 = new TeleSuiteUpdater({
      onUpdate: (immediate) => {
        clearTimeout(throttleTimer);
        throttleTimer = void 0;
        if (immediate) {
          setTestModel(teleSuiteUpdater2.asModel());
        } else if (!throttleTimer) {
          throttleTimer = setTimeout(() => {
            setTestModel(teleSuiteUpdater2.asModel());
          }, 250);
        }
      },
      onError: (error) => {
        xtermDataSource.write((error.stack || error.value || "") + "\n");
      },
      pathSeparator
    });
    setTeleSuiteUpdater(teleSuiteUpdater2);
    setTestModel(void 0);
    setIsLoading(true);
    setWatchedTreeIds({ value: /* @__PURE__ */ new Set() });
    (async () => {
      try {
        await testServerConnection.initialize({
          interceptStdio: true,
          watchTestDirs: true
        });
        const { status, report } = await testServerConnection.runGlobalSetup({
          outputDir: queryParams.outputDir
        });
        teleSuiteUpdater2.processGlobalReport(report);
        if (status !== "passed")
          return;
        const result = await testServerConnection.listTests({ projects: queryParams.projects, locations: queryParams.args, grep: queryParams.grep, grepInvert: queryParams.grepInvert, outputDir: queryParams.outputDir });
        teleSuiteUpdater2.processListReport(result.report);
        testServerConnection.onReport((params) => {
          teleSuiteUpdater2.processTestReportEvent(params);
        });
        const { hasBrowsers: hasBrowsers2 } = await testServerConnection.checkBrowsers({});
        setHasBrowsers(hasBrowsers2);
      } finally {
        setIsLoading(false);
      }
    })();
    return () => {
      clearTimeout(throttleTimer);
    };
  }, [testServerConnection]);
  React.useEffect(() => {
    if (!testModel)
      return;
    const { config, rootSuite } = testModel;
    const selectedProjects = config.configFile ? settings.getObject(config.configFile + ":projects", void 0) : void 0;
    const newFilter = new Map(projectFilters);
    for (const projectName of newFilter.keys()) {
      if (!rootSuite.suites.find((s) => s.title === projectName))
        newFilter.delete(projectName);
    }
    for (const projectSuite of rootSuite.suites) {
      if (!newFilter.has(projectSuite.title))
        newFilter.set(projectSuite.title, !!(selectedProjects == null ? void 0 : selectedProjects.includes(projectSuite.title)));
    }
    if (!selectedProjects && newFilter.size && ![...newFilter.values()].includes(true))
      newFilter.set(newFilter.entries().next().value[0], true);
    if (projectFilters.size !== newFilter.size || [...projectFilters].some(([k, v]) => newFilter.get(k) !== v))
      setProjectFilters(newFilter);
  }, [projectFilters, testModel]);
  React.useEffect(() => {
    if (isRunningTest && (testModel == null ? void 0 : testModel.progress))
      setProgress(testModel.progress);
    else if (!testModel)
      setProgress(void 0);
  }, [testModel, isRunningTest]);
  const { testTree } = React.useMemo(() => {
    if (!testModel)
      return { testTree: new TestTree("", new TeleSuite("", "root"), [], projectFilters, pathSeparator) };
    const testTree2 = new TestTree("", testModel.rootSuite, testModel.loadErrors, projectFilters, pathSeparator);
    testTree2.filterTree(filterText, statusFilters, isRunningTest ? runningState == null ? void 0 : runningState.testIds : void 0);
    testTree2.sortAndPropagateStatus();
    testTree2.shortenRoot();
    testTree2.flattenForSingleProject();
    setVisibleTestIds(testTree2.testIds());
    return { testTree: testTree2 };
  }, [filterText, testModel, statusFilters, projectFilters, setVisibleTestIds, runningState, isRunningTest]);
  const runTests = React.useCallback((mode, testIds) => {
    if (!testServerConnection || !testModel)
      return;
    if (mode === "bounce-if-busy" && isRunningTest)
      return;
    runTestBacklog.current = /* @__PURE__ */ new Set([...runTestBacklog.current, ...testIds]);
    commandQueue.current = commandQueue.current.then(async () => {
      var _a2, _b, _c;
      const testIds2 = runTestBacklog.current;
      runTestBacklog.current = /* @__PURE__ */ new Set();
      if (!testIds2.size)
        return;
      {
        for (const test of ((_a2 = testModel.rootSuite) == null ? void 0 : _a2.allTests()) || []) {
          if (testIds2.has(test.id)) {
            test.results = [];
            const result = test._createTestResult("pending");
            result[statusEx] = "scheduled";
          }
        }
        setTestModel({ ...testModel });
      }
      const time = "  [" + (/* @__PURE__ */ new Date()).toLocaleTimeString() + "]";
      xtermDataSource.write("\x1B[2m—".repeat(Math.max(0, xtermSize.cols - time.length)) + time + "\x1B[22m");
      setProgress({ total: 0, passed: 0, failed: 0, skipped: 0 });
      setRunningState({ testIds: testIds2 });
      await testServerConnection.runTests({
        locations: queryParams.args,
        grep: queryParams.grep,
        grepInvert: queryParams.grepInvert,
        testIds: [...testIds2],
        projects: [...projectFilters].filter(([_, v]) => v).map(([p]) => p),
        // When started with `--workers=1`, the setting allows to undo that.
        // Otherwise, fallback to the cli `--workers=X` argument.
        workers: singleWorker ? "1" : queryParams.workers === "1" ? void 0 : queryParams.workers,
        timeout: queryParams.timeout,
        headed: showBrowser,
        outputDir: queryParams.outputDir,
        updateSnapshots: updateSnapshots ? "all" : queryParams.updateSnapshots,
        reporters: queryParams.reporters,
        trace: "on"
      });
      for (const test of ((_b = testModel.rootSuite) == null ? void 0 : _b.allTests()) || []) {
        if (((_c = test.results[0]) == null ? void 0 : _c.duration) === -1)
          test.results = [];
      }
      setTestModel({ ...testModel });
      setRunningState((oldState) => oldState ? { ...oldState, completed: true } : void 0);
    });
  }, [projectFilters, isRunningTest, testModel, testServerConnection, singleWorker, showBrowser, updateSnapshots]);
  React.useEffect(() => {
    if (!testServerConnection || !teleSuiteUpdater)
      return;
    const disposable = testServerConnection.onTestFilesChanged(async (params) => {
      commandQueue.current = commandQueue.current.then(async () => {
        setIsLoading(true);
        try {
          const result = await testServerConnection.listTests({ projects: queryParams.projects, locations: queryParams.args, grep: queryParams.grep, grepInvert: queryParams.grepInvert, outputDir: queryParams.outputDir });
          teleSuiteUpdater.processListReport(result.report);
        } catch (e) {
          console.log(e);
        } finally {
          setIsLoading(false);
        }
      });
      await commandQueue.current;
      if (params.testFiles.length === 0)
        return;
      const testModel2 = teleSuiteUpdater.asModel();
      const testTree2 = new TestTree("", testModel2.rootSuite, testModel2.loadErrors, projectFilters, pathSeparator);
      const testIds = [];
      const set = new Set(params.testFiles);
      if (watchAll) {
        const visit = (treeItem) => {
          const fileName = treeItem.location.file;
          if (fileName && set.has(fileName))
            testIds.push(...testTree2.collectTestIds(treeItem));
          if (treeItem.kind === "group" && treeItem.subKind === "folder")
            treeItem.children.forEach(visit);
        };
        visit(testTree2.rootItem);
      } else {
        for (const treeId of watchedTreeIds.value) {
          const treeItem = testTree2.treeItemById(treeId);
          const fileName = treeItem == null ? void 0 : treeItem.location.file;
          if (fileName && set.has(fileName))
            testIds.push(...testTree2.collectTestIds(treeItem));
        }
      }
      runTests("queue-if-busy", new Set(testIds));
    });
    return () => disposable.dispose();
  }, [runTests, testServerConnection, watchAll, watchedTreeIds, teleSuiteUpdater, projectFilters]);
  React.useEffect(() => {
    if (!testServerConnection)
      return;
    const onShortcutEvent = (e) => {
      if (e.code === "Backquote" && e.ctrlKey) {
        e.preventDefault();
        setIsShowingOutput(!isShowingOutput);
      } else if (e.code === "F5" && e.shiftKey) {
        e.preventDefault();
        testServerConnection == null ? void 0 : testServerConnection.stopTestsNoReply({});
      } else if (e.code === "F5") {
        e.preventDefault();
        runTests("bounce-if-busy", visibleTestIds);
      }
    };
    addEventListener("keydown", onShortcutEvent);
    return () => {
      removeEventListener("keydown", onShortcutEvent);
    };
  }, [runTests, reloadTests, testServerConnection, visibleTestIds, isShowingOutput]);
  const dialogRef = React.useRef(null);
  const openInstallDialog = React.useCallback((e) => {
    var _a2;
    e.preventDefault();
    e.stopPropagation();
    (_a2 = dialogRef.current) == null ? void 0 : _a2.showModal();
  }, []);
  const closeInstallDialog = React.useCallback((e) => {
    var _a2;
    e.preventDefault();
    e.stopPropagation();
    (_a2 = dialogRef.current) == null ? void 0 : _a2.close();
  }, []);
  const installBrowsers = React.useCallback((e) => {
    closeInstallDialog(e);
    setIsShowingOutput(true);
    testServerConnection == null ? void 0 : testServerConnection.installBrowsers({}).then(async () => {
      setIsShowingOutput(false);
      const { hasBrowsers: hasBrowsers2 } = await (testServerConnection == null ? void 0 : testServerConnection.checkBrowsers({}));
      setHasBrowsers(hasBrowsers2);
    });
  }, [closeInstallDialog, testServerConnection]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "vbox ui-mode", children: [
    !hasBrowsers && /* @__PURE__ */ jsxRuntimeExports.jsxs("dialog", { ref: dialogRef, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "title", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "codicon codicon-lightbulb" }),
        "Install browsers"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "body", children: [
        "Playwright did not find installed browsers.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Would you like to run `playwright install`?",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button", onClick: installBrowsers, children: "Install" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "button secondary", onClick: closeInstallDialog, children: "Dismiss" })
      ] })
    ] }),
    isDisconnected && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "disconnected", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "title", children: "UI Mode disconnected" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", onClick: () => window.location.href = "/", children: "Reload the page" }),
        " to reconnect"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SplitView,
      {
        sidebarSize: 250,
        minSidebarSize: 150,
        orientation: "horizontal",
        sidebarIsFirst: true,
        settingName: "testListSidebar",
        main: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "vbox", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: clsx("vbox", !isShowingOutput && "hidden"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Toolbar, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-title", style: { flex: "none" }, children: "Output" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "circle-slash", title: "Clear output", onClick: () => xtermDataSource.clear() }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "spacer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "close", title: "Close", onClick: () => setIsShowingOutput(false) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(XtermWrapper, { source: xtermDataSource })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: clsx("vbox", isShowingOutput && "hidden"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            TraceView,
            {
              item: selectedItem,
              rootDir: (_a = testModel == null ? void 0 : testModel.config) == null ? void 0 : _a.rootDir,
              revealSource,
              onOpenExternally: (location) => testServerConnection == null ? void 0 : testServerConnection.openNoReply({ location: { file: location.file, line: location.line, column: location.column } })
            }
          ) })
        ] }),
        sidebar: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "vbox ui-mode-sidebar", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Toolbar, { noShadow: true, noMinHeight: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "playwright-logo.svg", alt: "Playwright logo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-title", children: "Playwright" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "refresh", title: "Reload", onClick: () => reloadTests(), disabled: isRunningTest || isLoading }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "terminal", title: "Toggle output — " + (isMac ? "⌃`" : "Ctrl + `"), toggled: isShowingOutput, onClick: () => {
              setIsShowingOutput(!isShowingOutput);
            } }),
            !hasBrowsers && /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "lightbulb-autofix", style: { color: "var(--vscode-list-warningForeground)" }, title: "Playwright browsers are missing", onClick: openInstallDialog })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FiltersView,
            {
              filterText,
              setFilterText,
              statusFilters,
              setStatusFilters,
              projectFilters,
              setProjectFilters,
              testModel,
              runTests: () => runTests("bounce-if-busy", visibleTestIds)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Toolbar, { noMinHeight: true, children: [
            !isRunningTest && !progress && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-title", children: "Tests" }),
            !isRunningTest && progress && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "status-line", className: "status-line", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              progress.passed,
              "/",
              progress.total,
              " passed (",
              progress.passed / progress.total * 100 | 0,
              "%)"
            ] }) }),
            isRunningTest && progress && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-testid": "status-line", className: "status-line", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              "Running ",
              progress.passed,
              "/",
              runningState.testIds.size,
              " passed (",
              progress.passed / runningState.testIds.size * 100 | 0,
              "%)"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "play", title: "Run all — F5", onClick: () => runTests("bounce-if-busy", visibleTestIds), disabled: isRunningTest || isLoading }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "debug-stop", title: "Stop — " + (isMac ? "⇧F5" : "Shift + F5"), onClick: () => testServerConnection == null ? void 0 : testServerConnection.stopTests({}), disabled: !isRunningTest || isLoading }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "eye", title: "Watch all", toggled: watchAll, onClick: () => {
              setWatchedTreeIds({ value: /* @__PURE__ */ new Set() });
              setWatchAll(!watchAll);
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarButton, { icon: "collapse-all", title: "Collapse all", onClick: () => {
              setCollapseAllCount(collapseAllCount + 1);
            } })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            TestListView,
            {
              filterText,
              testModel,
              testTree,
              testServerConnection,
              runningState,
              runTests,
              onItemSelected: setSelectedItem,
              watchAll,
              watchedTreeIds,
              setWatchedTreeIds,
              isLoading,
              requestedCollapseAllCount: collapseAllCount,
              setFilterText,
              onRevealSource
            }
          ),
          showTestingOptions,
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Toolbar, { noShadow: true, noMinHeight: true, className: "settings-toolbar", onClick: () => setSettingsVisible(!settingsVisible), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `codicon codicon-${settingsVisible ? "chevron-down" : "chevron-right"}`,
                style: { marginLeft: 5 },
                title: settingsVisible ? "Hide Settings" : "Show Settings"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-title", children: "Settings" })
          ] }),
          settingsVisible && /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsView, { settings: [
            { value: darkMode, set: setDarkMode, title: "Dark mode" },
            { value: showRouteActions, set: setShowRouteActions, title: "Show route actions" }
          ] })
        ] })
      }
    )
  ] });
};
(async () => {
  applyTheme();
  if (window.location.protocol !== "file:") {
    if (window.location.href.includes("isUnderTest=true"))
      await new Promise((f) => setTimeout(f, 1e3));
    if (!navigator.serviceWorker)
      throw new Error(`Service workers are not supported.
Make sure to serve the website (${window.location}) via HTTPS or localhost.`);
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
  createRoot(document.querySelector("#root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(UIModeView, {}));
})();
//# sourceMappingURL=uiMode.D-tg1Oci.js.map
