
var __commonJS = obj => {
  let required = false;
  let result;
  return function __require() {
    if (!required) {
      required = true;
      let fn;
      for (const name in obj) { fn = obj[name]; break; }
      const module = { exports: {} };
      fn(module.exports, module);
      result = module.exports;
    }
    return result;
  }
};
var __export = (target, all) => {for (var name in all) target[name] = all[name];};
var __toESM = mod => ({ ...mod, 'default': mod });
var __toCommonJS = mod => ({ ...mod, __esModule: true });


// packages/playwright-core/src/server/injected/recorder.ts
var recorder_exports = {};
__export(recorder_exports, {
  PollingRecorder: () => PollingRecorder,
  Recorder: () => Recorder,
  default: () => recorder_default
});
module.exports = __toCommonJS(recorder_exports);

// packages/playwright-core/src/utils/isomorphic/stringUtils.ts
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
    return "\uFFFD";
  if (c >= 1 && c <= 31 || c >= 48 && c <= 57 && (i === 0 || i === 1 && s.charCodeAt(0) === 45))
    return "\\" + c.toString(16) + " ";
  if (i === 0 && c === 45 && s.length === 1)
    return "\\" + s.charAt(i);
  if (c >= 128 || c === 45 || c === 95 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122)
    return s.charAt(i);
  return "\\" + s.charAt(i);
}
function normalizeWhiteSpace(text) {
  return text.replace(/\u200b/g, "").trim().replace(/\s+/g, " ");
}
function normalizeEscapedRegexQuotes(source) {
  return source.replace(/(^|[^\\])(\\\\)*\\(['"`])/g, "$1$2$3");
}
function escapeRegexForSelector(re) {
  if (re.unicode || re.unicodeSets)
    return String(re);
  return String(re).replace(/(^|[^\\])(\\\\)*(["'`])/g, "$1$2\\$3").replace(/>>/g, "\\>\\>");
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

// packages/playwright-core/src/server/injected/domUtils.ts
var browserNameForWorkarounds = "";
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
  style = style != null ? style : getElementComputedStyle(element);
  if (!style)
    return true;
  if (Element.prototype.checkVisibility && browserNameForWorkarounds !== "webkit") {
    if (!element.checkVisibility({ checkOpacity: false, checkVisibilityCSS: false }))
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
function isVisibleTextNode(node) {
  const range = node.ownerDocument.createRange();
  range.selectNode(node);
  const rect = range.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}

// packages/playwright-core/src/server/injected/roleUtils.ts
function hasExplicitAccessibleName(e) {
  return e.hasAttribute("aria-label") || e.hasAttribute("aria-labelledby");
}
var kAncestorPreventingLandmark = "article:not([role]), aside:not([role]), main:not([role]), nav:not([role]), section:not([role]), [role=article], [role=complementary], [role=main], [role=navigation], [role=region]";
var kGlobalAriaAttributes = [
  "aria-atomic",
  "aria-busy",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-dropeffect",
  "aria-errormessage",
  "aria-flowto",
  "aria-grabbed",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-live",
  "aria-owns",
  "aria-relevant",
  "aria-roledescription"
];
function hasGlobalAriaAttribute(e) {
  return kGlobalAriaAttributes.some((a) => e.hasAttribute(a));
}
var kImplicitRoleByTagName = {
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
  "IMG": (e) => e.getAttribute("alt") === "" && !hasGlobalAriaAttribute(e) && Number.isNaN(Number(String(e.getAttribute("tabindex")))) ? "presentation" : "img",
  "INPUT": (e) => {
    const type = e.type.toLowerCase();
    if (type === "search")
      return e.hasAttribute("list") ? "combobox" : "searchbox";
    if (["email", "tel", "text", "url", ""].includes(type)) {
      const list = getIdRefs(e, e.getAttribute("list"))[0];
      return list && list.tagName === "DATALIST" ? "combobox" : "textbox";
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
var kPresentationInheritanceParents = {
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
  const implicitRole = ((_a = kImplicitRoleByTagName[element.tagName.toUpperCase()]) == null ? void 0 : _a.call(kImplicitRoleByTagName, element)) || "";
  if (!implicitRole)
    return null;
  let ancestor = element;
  while (ancestor) {
    const parent = parentElementOrShadowHost(ancestor);
    const parents = kPresentationInheritanceParents[ancestor.tagName];
    if (!parents || !parent || !parents.includes(parent.tagName))
      break;
    const parentExplicitRole = getExplicitAriaRole(parent);
    if ((parentExplicitRole === "none" || parentExplicitRole === "presentation") && !hasPresentationConflictResolution(parent))
      return parentExplicitRole;
    ancestor = parent;
  }
  return implicitRole;
}
var allRoles = [
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
var abstractRoles = ["command", "composite", "input", "landmark", "range", "roletype", "section", "sectionhead", "select", "structure", "widget", "window"];
var validRoles = allRoles.filter((role) => !abstractRoles.includes(role));
function getExplicitAriaRole(element) {
  const roles = (element.getAttribute("role") || "").split(" ").map((role) => role.trim());
  return roles.find((role) => validRoles.includes(role)) || null;
}
function hasPresentationConflictResolution(element) {
  return !hasGlobalAriaAttribute(element);
}
function getAriaRole(element) {
  const explicitRole = getExplicitAriaRole(element);
  if (!explicitRole)
    return getImplicitAriaRole(element);
  if ((explicitRole === "none" || explicitRole === "presentation") && hasPresentationConflictResolution(element))
    return getImplicitAriaRole(element);
  return explicitRole;
}
function getAriaBoolean(attr) {
  return attr === null ? void 0 : attr.toLowerCase() === "true";
}
function isElementHiddenForAria(element) {
  if (["STYLE", "SCRIPT", "NOSCRIPT", "TEMPLATE"].includes(element.tagName))
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
    const ids = ref.split(" ").filter((id) => !!id);
    const set = /* @__PURE__ */ new Set();
    for (const id of ids) {
      const firstElement = root.querySelector("#" + CSS.escape(id));
      if (firstElement)
        set.add(firstElement);
    }
    return [...set];
  } catch (e) {
    return [];
  }
}
function normalizeAccessbileName(s) {
  return s.replace(/\r\n/g, "\n").replace(/\u00A0/g, " ").replace(/\s\s+/g, " ").trim();
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
function getPseudoContent(pseudoStyle) {
  if (!pseudoStyle)
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
      accessibleName = normalizeAccessbileName(getElementAccessibleNameInternal(element, {
        includeHidden,
        visitedElements: /* @__PURE__ */ new Set(),
        embeddedInLabelledBy: "none",
        embeddedInLabel: "none",
        embeddedInTextAlternativeElement: false,
        embeddedInTargetElement: "self"
      }));
    }
    cache == null ? void 0 : cache.set(element, accessibleName);
  }
  return accessibleName;
}
function getElementAccessibleNameInternal(element, options) {
  if (options.visitedElements.has(element))
    return "";
  const childOptions = {
    ...options,
    embeddedInLabel: options.embeddedInLabel === "self" ? "descendant" : options.embeddedInLabel,
    embeddedInLabelledBy: options.embeddedInLabelledBy === "self" ? "descendant" : options.embeddedInLabelledBy,
    embeddedInTargetElement: options.embeddedInTargetElement === "self" ? "descendant" : options.embeddedInTargetElement
  };
  if (!options.includeHidden && options.embeddedInLabelledBy !== "self" && isElementHiddenForAria(element)) {
    options.visitedElements.add(element);
    return "";
  }
  const labelledBy = getAriaLabelledByElements(element);
  if (options.embeddedInLabelledBy === "none") {
    const accessibleName = (labelledBy || []).map((ref) => getElementAccessibleNameInternal(ref, {
      ...options,
      embeddedInLabelledBy: "self",
      embeddedInTargetElement: "none",
      embeddedInLabel: "none",
      embeddedInTextAlternativeElement: false
    })).join(" ");
    if (accessibleName)
      return accessibleName;
  }
  const role = getAriaRole(element) || "";
  if (options.embeddedInLabel !== "none" || options.embeddedInLabelledBy !== "none") {
    const isOwnLabel = [...element.labels || []].includes(element);
    const isOwnLabelledBy = (labelledBy || []).includes(element);
    if (!isOwnLabel && !isOwnLabelledBy) {
      if (role === "textbox") {
        options.visitedElements.add(element);
        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA")
          return element.value;
        return element.textContent || "";
      }
      if (["combobox", "listbox"].includes(role)) {
        options.visitedElements.add(element);
        let selectedOptions;
        if (element.tagName === "SELECT") {
          selectedOptions = [...element.selectedOptions];
          if (!selectedOptions.length && element.options.length)
            selectedOptions.push(element.options[0]);
        } else {
          const listbox = role === "combobox" ? queryInAriaOwned(element, "*").find((e) => getAriaRole(e) === "listbox") : element;
          selectedOptions = listbox ? queryInAriaOwned(listbox, '[aria-selected="true"]').filter((e) => getAriaRole(e) === "option") : [];
        }
        return selectedOptions.map((option) => getElementAccessibleNameInternal(option, childOptions)).join(" ");
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
  if (ariaLabel.trim()) {
    options.visitedElements.add(element);
    return ariaLabel;
  }
  if (!["presentation", "none"].includes(role)) {
    if (element.tagName === "INPUT" && ["button", "submit", "reset"].includes(element.type)) {
      options.visitedElements.add(element);
      const value = element.value || "";
      if (value.trim())
        return value;
      if (element.type === "submit")
        return "Submit";
      if (element.type === "reset")
        return "Reset";
      const title = element.getAttribute("title") || "";
      return title;
    }
    if (element.tagName === "INPUT" && element.type === "image") {
      options.visitedElements.add(element);
      const labels = element.labels || [];
      if (labels.length && options.embeddedInLabelledBy === "none")
        return getAccessibleNameFromAssociatedLabels(labels, options);
      const alt = element.getAttribute("alt") || "";
      if (alt.trim())
        return alt;
      const title = element.getAttribute("title") || "";
      if (title.trim())
        return title;
      return "Submit";
    }
    if (!labelledBy && element.tagName === "BUTTON") {
      options.visitedElements.add(element);
      const labels = element.labels || [];
      if (labels.length)
        return getAccessibleNameFromAssociatedLabels(labels, options);
    }
    if (!labelledBy && element.tagName === "OUTPUT") {
      options.visitedElements.add(element);
      const labels = element.labels || [];
      if (labels.length)
        return getAccessibleNameFromAssociatedLabels(labels, options);
      return element.getAttribute("title") || "";
    }
    if (!labelledBy && (element.tagName === "TEXTAREA" || element.tagName === "SELECT" || element.tagName === "INPUT")) {
      options.visitedElements.add(element);
      const labels = element.labels || [];
      if (labels.length)
        return getAccessibleNameFromAssociatedLabels(labels, options);
      const usePlaceholder = element.tagName === "INPUT" && ["text", "password", "search", "tel", "email", "url"].includes(element.type) || element.tagName === "TEXTAREA";
      const placeholder = element.getAttribute("placeholder") || "";
      const title = element.getAttribute("title") || "";
      if (!usePlaceholder || title)
        return title;
      return placeholder;
    }
    if (!labelledBy && element.tagName === "FIELDSET") {
      options.visitedElements.add(element);
      for (let child = element.firstElementChild; child; child = child.nextElementSibling) {
        if (child.tagName === "LEGEND") {
          return getElementAccessibleNameInternal(child, {
            ...childOptions,
            embeddedInTextAlternativeElement: true
          });
        }
      }
      const title = element.getAttribute("title") || "";
      return title;
    }
    if (!labelledBy && element.tagName === "FIGURE") {
      options.visitedElements.add(element);
      for (let child = element.firstElementChild; child; child = child.nextElementSibling) {
        if (child.tagName === "FIGCAPTION") {
          return getElementAccessibleNameInternal(child, {
            ...childOptions,
            embeddedInTextAlternativeElement: true
          });
        }
      }
      const title = element.getAttribute("title") || "";
      return title;
    }
    if (element.tagName === "IMG") {
      options.visitedElements.add(element);
      const alt = element.getAttribute("alt") || "";
      if (alt.trim())
        return alt;
      const title = element.getAttribute("title") || "";
      return title;
    }
    if (element.tagName === "TABLE") {
      options.visitedElements.add(element);
      for (let child = element.firstElementChild; child; child = child.nextElementSibling) {
        if (child.tagName === "CAPTION") {
          return getElementAccessibleNameInternal(child, {
            ...childOptions,
            embeddedInTextAlternativeElement: true
          });
        }
      }
      const summary = element.getAttribute("summary") || "";
      if (summary)
        return summary;
    }
    if (element.tagName === "AREA") {
      options.visitedElements.add(element);
      const alt = element.getAttribute("alt") || "";
      if (alt.trim())
        return alt;
      const title = element.getAttribute("title") || "";
      return title;
    }
    if (element.tagName.toUpperCase() === "SVG" || element.ownerSVGElement) {
      options.visitedElements.add(element);
      for (let child = element.firstElementChild; child; child = child.nextElementSibling) {
        if (child.tagName.toUpperCase() === "TITLE" && child.ownerSVGElement) {
          return getElementAccessibleNameInternal(child, {
            ...childOptions,
            embeddedInLabelledBy: "self"
          });
        }
      }
    }
    if (element.ownerSVGElement && element.tagName.toUpperCase() === "A") {
      const title = element.getAttribute("xlink:title") || "";
      if (title.trim()) {
        options.visitedElements.add(element);
        return title;
      }
    }
  }
  if (allowsNameFromContent(role, options.embeddedInTargetElement === "descendant") || options.embeddedInLabelledBy !== "none" || options.embeddedInLabel !== "none" || options.embeddedInTextAlternativeElement) {
    options.visitedElements.add(element);
    const tokens = [];
    const visit = (node, skipSlotted) => {
      var _a;
      if (skipSlotted && node.assignedSlot)
        return;
      if (node.nodeType === 1) {
        const display = ((_a = getElementComputedStyle(node)) == null ? void 0 : _a.display) || "inline";
        let token = getElementAccessibleNameInternal(node, childOptions);
        if (display !== "inline" || node.nodeName === "BR")
          token = " " + token + " ";
        tokens.push(token);
      } else if (node.nodeType === 3) {
        tokens.push(node.textContent || "");
      }
    };
    tokens.push(getPseudoContent(getElementComputedStyle(element, "::before")));
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
    tokens.push(getPseudoContent(getElementComputedStyle(element, "::after")));
    const accessibleName = tokens.join("");
    if (accessibleName.trim())
      return accessibleName;
  }
  if (!["presentation", "none"].includes(role) || element.tagName === "IFRAME") {
    options.visitedElements.add(element);
    const title = element.getAttribute("title") || "";
    if (title.trim())
      return title;
  }
  options.visitedElements.add(element);
  return "";
}
function getAccessibleNameFromAssociatedLabels(labels, options) {
  return [...labels].map((label) => getElementAccessibleNameInternal(label, {
    ...options,
    embeddedInLabel: "self",
    embeddedInTextAlternativeElement: false,
    embeddedInLabelledBy: "none",
    embeddedInTargetElement: "none"
  })).filter((accessibleName) => !!accessibleName).join(" ");
}
var cacheAccessibleName;
var cacheAccessibleNameHidden;
var cacheIsHidden;
var cachesCounter = 0;
function beginAriaCaches() {
  ++cachesCounter;
  cacheAccessibleName != null ? cacheAccessibleName : cacheAccessibleName = /* @__PURE__ */ new Map();
  cacheAccessibleNameHidden != null ? cacheAccessibleNameHidden : cacheAccessibleNameHidden = /* @__PURE__ */ new Map();
  cacheIsHidden != null ? cacheIsHidden : cacheIsHidden = /* @__PURE__ */ new Map();
}
function endAriaCaches() {
  if (!--cachesCounter) {
    cacheAccessibleName = void 0;
    cacheAccessibleNameHidden = void 0;
    cacheIsHidden = void 0;
  }
}

// packages/playwright-core/src/server/injected/selectorUtils.ts
function shouldSkipForTextMatching(element) {
  const document = element.ownerDocument;
  return element.nodeName === "SCRIPT" || element.nodeName === "NOSCRIPT" || element.nodeName === "STYLE" || document.head && document.head.contains(element);
}
function elementText(cache, root) {
  let value = cache.get(root);
  if (value === void 0) {
    value = { full: "", immediate: [] };
    if (!shouldSkipForTextMatching(root)) {
      let currentImmediate = "";
      if (root instanceof HTMLInputElement && (root.type === "submit" || root.type === "button")) {
        value = { full: root.value, immediate: [root.value] };
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
      }
    }
    cache.set(root, value);
  }
  return value;
}
function getElementLabels(textCache, element) {
  const labels = getAriaLabelledByElements(element);
  if (labels)
    return labels.map((label) => elementText(textCache, label));
  const ariaLabel = element.getAttribute("aria-label");
  if (ariaLabel !== null && !!ariaLabel.trim())
    return [{ full: ariaLabel, immediate: [ariaLabel] }];
  const isNonHiddenInput = element.nodeName === "INPUT" && element.type !== "hidden";
  if (["BUTTON", "METER", "OUTPUT", "PROGRESS", "SELECT", "TEXTAREA"].includes(element.nodeName) || isNonHiddenInput) {
    const labels2 = element.labels;
    if (labels2)
      return [...labels2].map((label) => elementText(textCache, label));
  }
  return [];
}

// packages/playwright-core/src/server/injected/selectorGenerator.ts
var cacheAllowText = /* @__PURE__ */ new Map();
var cacheDisallowText = /* @__PURE__ */ new Map();
var kTextScoreRange = 10;
var kExactPenalty = kTextScoreRange / 2;
var kTestIdScore = 1;
var kOtherTestIdScore = 2;
var kIframeByAttributeScore = 10;
var kBeginPenalizedScore = 50;
var kPlaceholderScore = 100;
var kLabelScore = 120;
var kRoleWithNameScore = 140;
var kAltTextScore = 160;
var kTextScore = 180;
var kTitleScore = 200;
var kTextScoreRegex = 250;
var kPlaceholderScoreExact = kPlaceholderScore + kExactPenalty;
var kLabelScoreExact = kLabelScore + kExactPenalty;
var kRoleWithNameScoreExact = kRoleWithNameScore + kExactPenalty;
var kAltTextScoreExact = kAltTextScore + kExactPenalty;
var kTextScoreExact = kTextScore + kExactPenalty;
var kTitleScoreExact = kTitleScore + kExactPenalty;
var kEndPenalizedScore = 300;
var kCSSIdScore = 500;
var kRoleWithoutNameScore = 510;
var kCSSInputTypeNameScore = 520;
var kCSSTagNameScore = 530;
var kNthScore = 1e4;
var kCSSFallbackScore = 1e7;
var kScoreThresholdForTextExpect = 1e3;
function generateSelector(injectedScript, targetElement, options) {
  var _a;
  injectedScript._evaluator.begin();
  beginAriaCaches();
  try {
    let targetTokens;
    if (options.forTextExpect) {
      targetTokens = cssFallback(injectedScript, targetElement.ownerDocument.documentElement, options);
      for (let element = targetElement; element; element = parentElementOrShadowHost(element)) {
        const tokens = generateSelectorFor(injectedScript, element, options);
        if (!tokens)
          continue;
        const score = combineScores(tokens);
        if (score <= kScoreThresholdForTextExpect) {
          targetTokens = tokens;
          break;
        }
      }
    } else {
      targetElement = closestCrossShadow(targetElement, "button,select,input,[role=button],[role=checkbox],[role=radio],a,[role=link]", options.root) || targetElement;
      targetTokens = generateSelectorFor(injectedScript, targetElement, options) || cssFallback(injectedScript, targetElement, options);
    }
    const selector = joinTokens(targetTokens);
    const parsedSelector = injectedScript.parseSelector(selector);
    return {
      selector,
      elements: injectedScript.querySelectorAll(parsedSelector, (_a = options.root) != null ? _a : targetElement.ownerDocument)
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
    var _a;
    const allowNthMatch = element === targetElement;
    let textCandidates = allowText ? buildTextCandidates(injectedScript, element, element === targetElement) : [];
    if (element !== targetElement) {
      textCandidates = filterRegexTokens(textCandidates);
    }
    const noTextCandidates = buildNoTextCandidates(injectedScript, element, options).filter((token) => !options.omitInternalEngines || !token.engine.startsWith("internal:")).map((token) => [token]);
    let result = chooseFirstSelector(injectedScript, (_a = options.root) != null ? _a : targetElement.ownerDocument, element, [...textCandidates, ...noTextCandidates], allowNthMatch);
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
  return calculate(targetElement, !options.forTextExpect);
}
function buildNoTextCandidates(injectedScript, element, options) {
  const candidates = [];
  {
    for (const attr of ["data-testid", "data-test-id", "data-test"]) {
      if (attr !== options.testIdAttributeName && element.getAttribute(attr))
        candidates.push({ engine: "css", selector: `[${attr}=${quoteCSSAttributeValue(element.getAttribute(attr))}]`, score: kOtherTestIdScore });
    }
    const idAttr = element.getAttribute("id");
    if (idAttr && !isGuidLike(idAttr))
      candidates.push({ engine: "css", selector: makeSelectorForId(idAttr), score: kCSSIdScore });
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
    const labelText = label.full.trim();
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
  const text = normalizeWhiteSpace(elementText(injectedScript._evaluator._cacheText, element).full);
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
    if (text.length <= 80)
      candidates.push([cssToken, { engine: "internal:has-text", selector: "/^" + escapeRegExp(text) + "$/", score: kTextScoreRegex }]);
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
function makeSelectorForId(id) {
  return /^[a-zA-Z][a-zA-Z0-9\-\_]+$/.test(id) ? "#" + id : `[id="${cssEscape(id)}"]`;
}
function cssFallback(injectedScript, targetElement, options) {
  var _a;
  const root = (_a = options.root) != null ? _a : targetElement.ownerDocument;
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
    if (element.id) {
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
function isGuidLike(id) {
  let lastCharacterType;
  let transitionCount = 0;
  for (let i = 0; i < id.length; ++i) {
    const c = id[i];
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
  return transitionCount >= id.length / 4;
}
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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
      const alt = text.substring(leadingNumberLength).trimStart();
      result.push({ text: alt, scoreBouns: alt.length <= 30 ? 2 : 1 });
    }
  }
  {
    const match = text.match(/[^.,\w]([\d.,]+)$/);
    const trailingNumberLength = match ? match[1].length : 0;
    if (trailingNumberLength) {
      const alt = text.substring(0, text.length - trailingNumberLength).trimEnd();
      result.push({ text: alt, scoreBouns: alt.length <= 30 ? 2 : 1 });
    }
  }
  if (text.length <= 30) {
    result.push({ text, scoreBouns: 0 });
  } else {
    result.push({ text: trimWordBoundary(text, 80), scoreBouns: 0 });
    result.push({ text: trimWordBoundary(text, 30), scoreBouns: 1 });
  }
  result = result.filter((r) => r.text);
  if (!result.length)
    result.push({ text: text.substring(0, 80), scoreBouns: 0 });
  return result;
}

// packages/playwright-core/src/utils/isomorphic/cssTokenizer.ts
var between = function(num, first, last) {
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
var maximumallowedcodepoint = 1114111;
var InvalidCharacterError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidCharacterError";
  }
};
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
  let line = 0;
  let column = 0;
  let lastLineLength = 0;
  const incrLineno = function() {
    line += 1;
    lastLineLength = column;
    column = 0;
  };
  const locStart = { line, column };
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
    if (newline(code))
      incrLineno();
    else
      column += num;
    return true;
  };
  const reconsume = function() {
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
  const eof = function(codepoint2) {
    if (codepoint2 === void 0)
      codepoint2 = code;
    return codepoint2 === -1;
  };
  const donothing = function() {
  };
  const parseerror = function() {
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
        parseerror();
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
          parseerror();
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
        parseerror();
        reconsume();
        return new BadStringToken();
      } else if (code === 92) {
        if (eof(next()))
          donothing();
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
        parseerror();
        consumeTheRemnantsOfABadURL();
        return new BadURLToken();
      } else if (code === 92) {
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
      let value = parseInt(digits.map(function(x) {
        return String.fromCharCode(x);
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
        donothing();
      } else {
        donothing();
      }
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
var CSSParserToken = class {
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
};
var BadStringToken = class extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = "BADSTRING";
  }
};
var BadURLToken = class extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = "BADURL";
  }
};
var WhitespaceToken = class extends CSSParserToken {
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
};
var CDOToken = class extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = "CDO";
  }
  toSource() {
    return "<!--";
  }
};
var CDCToken = class extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = "CDC";
  }
  toSource() {
    return "-->";
  }
};
var ColonToken = class extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = ":";
  }
};
var SemicolonToken = class extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = ";";
  }
};
var CommaToken = class extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = ",";
  }
};
var GroupingToken = class extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.value = "";
    this.mirror = "";
  }
};
var OpenCurlyToken = class extends GroupingToken {
  constructor() {
    super();
    this.tokenType = "{";
    this.value = "{";
    this.mirror = "}";
  }
};
var CloseCurlyToken = class extends GroupingToken {
  constructor() {
    super();
    this.tokenType = "}";
    this.value = "}";
    this.mirror = "{";
  }
};
var OpenSquareToken = class extends GroupingToken {
  constructor() {
    super();
    this.tokenType = "[";
    this.value = "[";
    this.mirror = "]";
  }
};
var CloseSquareToken = class extends GroupingToken {
  constructor() {
    super();
    this.tokenType = "]";
    this.value = "]";
    this.mirror = "[";
  }
};
var OpenParenToken = class extends GroupingToken {
  constructor() {
    super();
    this.tokenType = "(";
    this.value = "(";
    this.mirror = ")";
  }
};
var CloseParenToken = class extends GroupingToken {
  constructor() {
    super();
    this.tokenType = ")";
    this.value = ")";
    this.mirror = "(";
  }
};
var IncludeMatchToken = class extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = "~=";
  }
};
var DashMatchToken = class extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = "|=";
  }
};
var PrefixMatchToken = class extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = "^=";
  }
};
var SuffixMatchToken = class extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = "$=";
  }
};
var SubstringMatchToken = class extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = "*=";
  }
};
var ColumnToken = class extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = "||";
  }
};
var EOFToken = class extends CSSParserToken {
  constructor() {
    super(...arguments);
    this.tokenType = "EOF";
  }
  toSource() {
    return "";
  }
};
var DelimToken = class extends CSSParserToken {
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
};
var StringValuedToken = class extends CSSParserToken {
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
};
var IdentToken = class extends StringValuedToken {
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
};
var FunctionToken = class extends StringValuedToken {
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
};
var AtKeywordToken = class extends StringValuedToken {
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
};
var HashToken = class extends StringValuedToken {
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
};
var StringToken = class extends StringValuedToken {
  constructor(val) {
    super();
    this.tokenType = "STRING";
    this.value = val;
  }
  toString() {
    return '"' + escapeString(this.value) + '"';
  }
};
var URLToken = class extends StringValuedToken {
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
};
var NumberToken = class extends CSSParserToken {
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
};
var PercentageToken = class extends CSSParserToken {
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
};
var DimensionToken = class extends CSSParserToken {
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
};
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

// packages/playwright-core/src/utils/isomorphic/cssParser.ts
var InvalidSelectorError = class extends Error {
};
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
  function isIdent(p = pos) {
    return tokens[p] instanceof IdentToken;
  }
  function isString(p = pos) {
    return tokens[p] instanceof StringToken;
  }
  function isNumber(p = pos) {
    return tokens[p] instanceof NumberToken;
  }
  function isComma(p = pos) {
    return tokens[p] instanceof CommaToken;
  }
  function isOpenParen(p = pos) {
    return tokens[p] instanceof OpenParenToken;
  }
  function isCloseParen(p = pos) {
    return tokens[p] instanceof CloseParenToken;
  }
  function isFunction(p = pos) {
    return tokens[p] instanceof FunctionToken;
  }
  function isStar(p = pos) {
    return tokens[p] instanceof DelimToken && tokens[p].value === "*";
  }
  function isEOF(p = pos) {
    return tokens[p] instanceof EOFToken;
  }
  function isClauseCombinator(p = pos) {
    return tokens[p] instanceof DelimToken && [">", "+", "~"].includes(tokens[p].value);
  }
  function isSelectorClauseEnd(p = pos) {
    return isComma(p) || isCloseParen(p) || isEOF(p) || isClauseCombinator(p) || tokens[p] instanceof WhitespaceToken;
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

// packages/playwright-core/src/utils/isomorphic/selectorParser.ts
var kNestedSelectorNames = /* @__PURE__ */ new Set(["internal:has", "internal:has-not", "internal:and", "internal:or", "internal:chain", "left-of", "right-of", "above", "below", "near"]);
var kNestedSelectorNamesWithDistance = /* @__PURE__ */ new Set(["left-of", "right-of", "above", "below", "near"]);
var customCSSNames = /* @__PURE__ */ new Set(["not", "is", "where", "has", "scope", "light", "visible", "text", "text-matches", "text-is", "has-text", "above", "below", "right-of", "left-of", "near", "nth-match"]);
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
  return selector.parts.map((p, i) => {
    let includeEngine = true;
    if (!forceEngineName && i !== selector.capture) {
      if (p.name === "css")
        includeEngine = false;
      else if (p.name === "xpath" && p.source.startsWith("//") || p.source.startsWith(".."))
        includeEngine = false;
    }
    const prefix = includeEngine ? p.name + "=" : "";
    return `${i === selector.capture ? "*" : ""}${prefix}${p.source}`;
  }).join(" >> ");
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
    return char >= "\x80" || char >= "0" && char <= "9" || char >= "A" && char <= "Z" || char >= "a" && char <= "z" || char >= "0" && char <= "9" || char === "_" || char === "-";
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

// packages/playwright-core/src/utils/isomorphic/locatorGenerators.ts
function asLocator(lang, selector, isFrameLocator = false, playSafe = false) {
  return asLocators(lang, selector, isFrameLocator, playSafe)[0];
}
function asLocators(lang, selector, isFrameLocator = false, playSafe = false, maxOutputSize = 20, preferredQuote) {
  if (playSafe) {
    try {
      return innerAsLocators(new generators[lang](preferredQuote), parseSelector(selector), isFrameLocator, maxOutputSize);
    } catch (e) {
      return [selector];
    }
  } else {
    return innerAsLocators(new generators[lang](preferredQuote), parseSelector(selector), isFrameLocator, maxOutputSize);
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
var JavaScriptLocatorFactory = class {
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
  regexToSourceString(re) {
    return normalizeEscapedRegexQuotes(String(re));
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
    var _a;
    return escapeWithQuotes(text, (_a = this.preferredQuote) != null ? _a : "'");
  }
};
var PythonLocatorFactory = class {
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
};
var JavaLocatorFactory = class {
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
};
var CSharpLocatorFactory = class {
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
};
var JsonlLocatorFactory = class {
  generateLocator(base, kind, body, options = {}) {
    return JSON.stringify({
      kind,
      body,
      options
    });
  }
  chainLocators(locators) {
    const objects = locators.map((l) => JSON.parse(l));
    for (let i = 0; i < objects.length - 1; ++i)
      objects[i].next = objects[i + 1];
    return JSON.stringify(objects[0]);
  }
};
var generators = {
  javascript: JavaScriptLocatorFactory,
  python: PythonLocatorFactory,
  java: JavaLocatorFactory,
  csharp: CSharpLocatorFactory,
  jsonl: JsonlLocatorFactory
};
function isRegExp(obj) {
  return obj instanceof RegExp;
}

// packages/playwright-core/src/server/injected/highlight.css?inline
var highlight_default = `:host{font-size:13px;font-family:system-ui,Ubuntu,Droid Sans,sans-serif;color:#333}x-pw-tooltip{backdrop-filter:blur(5px);background-color:#fff;border-radius:6px;box-shadow:0 .5rem 1.2rem #0000004d;display:none;font-size:12.8px;font-weight:400;left:0;line-height:1.5;max-width:600px;position:absolute;top:0;padding:4px}x-pw-dialog{background-color:#fff;pointer-events:auto;border-radius:6px;box-shadow:0 .5rem 1.2rem #0000004d;display:flex;flex-direction:column;position:absolute;width:400px;height:150px;z-index:10;font-size:13px}x-pw-dialog-body{display:flex;flex-direction:column;flex:auto}x-pw-dialog-body label{margin:5px 8px;display:flex;flex-direction:row;align-items:center}x-pw-highlight{position:absolute;top:0;left:0;width:0;height:0}x-pw-action-point{position:absolute;width:20px;height:20px;background:red;border-radius:10px;margin:-10px 0 0 -10px;z-index:2}x-pw-separator{height:1px;margin:6px 9px;background:rgb(148 148 148 / 90%)}x-pw-tool-gripper{height:28px;width:24px;margin:2px 0;cursor:grab}x-pw-tool-gripper:active{cursor:grabbing}x-pw-tool-gripper>x-div{width:100%;height:100%;-webkit-mask-repeat:no-repeat;-webkit-mask-position:center;-webkit-mask-size:20px;mask-repeat:no-repeat;mask-position:center;mask-size:16px;-webkit-mask-image:url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path d='M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' /></svg>");mask-image:url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path d='M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' /></svg>");background-color:#555}x-pw-tools-list>label{display:flex;align-items:center;margin:0 10px;user-select:none}x-pw-tools-list{display:flex;width:100%;border-bottom:1px solid #dddddd}x-pw-tool-item{pointer-events:auto;cursor:pointer;height:28px;width:28px;border-radius:3px}x-pw-tool-item:not(.disabled):hover{background-color:#dbdbdb}x-pw-tool-item.active{background-color:#8acae480}x-pw-tool-item.active:not(.disabled):hover{background-color:#8acae4c4}x-pw-tool-item>x-div{width:100%;height:100%;-webkit-mask-repeat:no-repeat;-webkit-mask-position:center;-webkit-mask-size:20px;mask-repeat:no-repeat;mask-position:center;mask-size:16px;background-color:#3a3a3a}x-pw-tool-item.disabled>x-div{background-color:#61616180;cursor:default}x-pw-tool-item.record.active{background-color:transparent}x-pw-tool-item.record.active:hover{background-color:#dbdbdb}x-pw-tool-item.record.active>x-div{background-color:#a1260d}x-pw-tool-item.accept>x-div{background-color:#388a34}x-pw-tool-item.record>x-div{-webkit-mask-image:url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path d='M8 1a6.8 6.8 0 0 1 1.86.253 6.899 6.899 0 0 1 3.083 1.805 6.903 6.903 0 0 1 1.804 3.083C14.916 6.738 15 7.357 15 8s-.084 1.262-.253 1.86a6.9 6.9 0 0 1-.704 1.674 7.157 7.157 0 0 1-2.516 2.509 6.966 6.966 0 0 1-1.668.71A6.984 6.984 0 0 1 8 15a6.984 6.984 0 0 1-1.86-.246 7.098 7.098 0 0 1-1.674-.711 7.3 7.3 0 0 1-1.415-1.094 7.295 7.295 0 0 1-1.094-1.415 7.098 7.098 0 0 1-.71-1.675A6.985 6.985 0 0 1 1 8c0-.643.082-1.262.246-1.86a6.968 6.968 0 0 1 .711-1.667 7.156 7.156 0 0 1 2.509-2.516 6.895 6.895 0 0 1 1.675-.704A6.808 6.808 0 0 1 8 1z'/></svg>");mask-image:url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path d='M8 1a6.8 6.8 0 0 1 1.86.253 6.899 6.899 0 0 1 3.083 1.805 6.903 6.903 0 0 1 1.804 3.083C14.916 6.738 15 7.357 15 8s-.084 1.262-.253 1.86a6.9 6.9 0 0 1-.704 1.674 7.157 7.157 0 0 1-2.516 2.509 6.966 6.966 0 0 1-1.668.71A6.984 6.984 0 0 1 8 15a6.984 6.984 0 0 1-1.86-.246 7.098 7.098 0 0 1-1.674-.711 7.3 7.3 0 0 1-1.415-1.094 7.295 7.295 0 0 1-1.094-1.415 7.098 7.098 0 0 1-.71-1.675A6.985 6.985 0 0 1 1 8c0-.643.082-1.262.246-1.86a6.968 6.968 0 0 1 .711-1.667 7.156 7.156 0 0 1 2.509-2.516 6.895 6.895 0 0 1 1.675-.704A6.808 6.808 0 0 1 8 1z'/></svg>")}x-pw-tool-item.pick-locator>x-div{-webkit-mask-image:url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path fill-rule='evenodd' clip-rule='evenodd' d='M1 3l1-1h12l1 1v6h-1V3H2v8h5v1H2l-1-1V3zm14.707 9.707L9 6v9.414l2.707-2.707h4zM10 13V8.414l3.293 3.293h-2L10 13z'/></svg>");mask-image:url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path fill-rule='evenodd' clip-rule='evenodd' d='M1 3l1-1h12l1 1v6h-1V3H2v8h5v1H2l-1-1V3zm14.707 9.707L9 6v9.414l2.707-2.707h4zM10 13V8.414l3.293 3.293h-2L10 13z'/></svg>")}x-pw-tool-item.text>x-div{-webkit-mask-image:url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path fill-rule='evenodd' clip-rule='evenodd' d='M0 11H1V13H15V11H16V14H15H1H0V11Z'/><path d='M6.84048 11H5.95963V10.1406H5.93814C5.555 10.7995 4.99104 11.1289 4.24625 11.1289C3.69839 11.1289 3.26871 10.9839 2.95718 10.6938C2.64924 10.4038 2.49527 10.0189 2.49527 9.53906C2.49527 8.51139 3.10041 7.91341 4.3107 7.74512L5.95963 7.51416C5.95963 6.57959 5.58186 6.1123 4.82632 6.1123C4.16389 6.1123 3.56591 6.33789 3.03238 6.78906V5.88672C3.57307 5.54297 4.19612 5.37109 4.90152 5.37109C6.19416 5.37109 6.84048 6.05501 6.84048 7.42285V11ZM5.95963 8.21777L4.63297 8.40039C4.22476 8.45768 3.91682 8.55973 3.70914 8.70654C3.50145 8.84977 3.39761 9.10579 3.39761 9.47461C3.39761 9.74316 3.4925 9.96338 3.68228 10.1353C3.87564 10.3035 4.13166 10.3877 4.45035 10.3877C4.8872 10.3877 5.24706 10.2355 5.52994 9.93115C5.8164 9.62321 5.95963 9.2347 5.95963 8.76562V8.21777Z'/><path d='M9.3475 10.2051H9.32601V11H8.44515V2.85742H9.32601V6.4668H9.3475C9.78076 5.73633 10.4146 5.37109 11.2489 5.37109C11.9543 5.37109 12.5057 5.61816 12.9032 6.1123C13.3042 6.60286 13.5047 7.26172 13.5047 8.08887C13.5047 9.00911 13.2809 9.74674 12.8333 10.3018C12.3857 10.8532 11.7734 11.1289 10.9964 11.1289C10.2695 11.1289 9.71989 10.821 9.3475 10.2051ZM9.32601 7.98682V8.75488C9.32601 9.20964 9.47282 9.59635 9.76644 9.91504C10.0636 10.2301 10.4396 10.3877 10.8944 10.3877C11.4279 10.3877 11.8451 10.1836 12.1458 9.77539C12.4502 9.36719 12.6024 8.79964 12.6024 8.07275C12.6024 7.46045 12.4609 6.98063 12.1781 6.6333C11.8952 6.28597 11.512 6.1123 11.0286 6.1123C10.5166 6.1123 10.1048 6.29134 9.7933 6.64941C9.48177 7.00391 9.32601 7.44971 9.32601 7.98682Z'/></svg>");mask-image:url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path fill-rule='evenodd' clip-rule='evenodd' d='M0 11H1V13H15V11H16V14H15H1H0V11Z'/><path d='M6.84048 11H5.95963V10.1406H5.93814C5.555 10.7995 4.99104 11.1289 4.24625 11.1289C3.69839 11.1289 3.26871 10.9839 2.95718 10.6938C2.64924 10.4038 2.49527 10.0189 2.49527 9.53906C2.49527 8.51139 3.10041 7.91341 4.3107 7.74512L5.95963 7.51416C5.95963 6.57959 5.58186 6.1123 4.82632 6.1123C4.16389 6.1123 3.56591 6.33789 3.03238 6.78906V5.88672C3.57307 5.54297 4.19612 5.37109 4.90152 5.37109C6.19416 5.37109 6.84048 6.05501 6.84048 7.42285V11ZM5.95963 8.21777L4.63297 8.40039C4.22476 8.45768 3.91682 8.55973 3.70914 8.70654C3.50145 8.84977 3.39761 9.10579 3.39761 9.47461C3.39761 9.74316 3.4925 9.96338 3.68228 10.1353C3.87564 10.3035 4.13166 10.3877 4.45035 10.3877C4.8872 10.3877 5.24706 10.2355 5.52994 9.93115C5.8164 9.62321 5.95963 9.2347 5.95963 8.76562V8.21777Z'/><path d='M9.3475 10.2051H9.32601V11H8.44515V2.85742H9.32601V6.4668H9.3475C9.78076 5.73633 10.4146 5.37109 11.2489 5.37109C11.9543 5.37109 12.5057 5.61816 12.9032 6.1123C13.3042 6.60286 13.5047 7.26172 13.5047 8.08887C13.5047 9.00911 13.2809 9.74674 12.8333 10.3018C12.3857 10.8532 11.7734 11.1289 10.9964 11.1289C10.2695 11.1289 9.71989 10.821 9.3475 10.2051ZM9.32601 7.98682V8.75488C9.32601 9.20964 9.47282 9.59635 9.76644 9.91504C10.0636 10.2301 10.4396 10.3877 10.8944 10.3877C11.4279 10.3877 11.8451 10.1836 12.1458 9.77539C12.4502 9.36719 12.6024 8.79964 12.6024 8.07275C12.6024 7.46045 12.4609 6.98063 12.1781 6.6333C11.8952 6.28597 11.512 6.1123 11.0286 6.1123C10.5166 6.1123 10.1048 6.29134 9.7933 6.64941C9.48177 7.00391 9.32601 7.44971 9.32601 7.98682Z'/></svg>")}x-pw-tool-item.visibility>x-div{-webkit-mask-image:url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path d='M7.99993 6.00316C9.47266 6.00316 10.6666 7.19708 10.6666 8.66981C10.6666 10.1426 9.47266 11.3365 7.99993 11.3365C6.52715 11.3365 5.33324 10.1426 5.33324 8.66981C5.33324 7.19708 6.52715 6.00316 7.99993 6.00316ZM7.99993 7.00315C7.07946 7.00315 6.33324 7.74935 6.33324 8.66981C6.33324 9.59028 7.07946 10.3365 7.99993 10.3365C8.9204 10.3365 9.6666 9.59028 9.6666 8.66981C9.6666 7.74935 8.9204 7.00315 7.99993 7.00315ZM7.99993 3.66675C11.0756 3.66675 13.7307 5.76675 14.4673 8.70968C14.5344 8.97755 14.3716 9.24908 14.1037 9.31615C13.8358 9.38315 13.5643 9.22041 13.4973 8.95248C12.8713 6.45205 10.6141 4.66675 7.99993 4.66675C5.38454 4.66675 3.12664 6.45359 2.50182 8.95555C2.43491 9.22341 2.16348 9.38635 1.89557 9.31948C1.62766 9.25255 1.46471 8.98115 1.53162 8.71321C2.26701 5.76856 4.9229 3.66675 7.99993 3.66675Z'/></svg>");mask-image:url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path d='M7.99993 6.00316C9.47266 6.00316 10.6666 7.19708 10.6666 8.66981C10.6666 10.1426 9.47266 11.3365 7.99993 11.3365C6.52715 11.3365 5.33324 10.1426 5.33324 8.66981C5.33324 7.19708 6.52715 6.00316 7.99993 6.00316ZM7.99993 7.00315C7.07946 7.00315 6.33324 7.74935 6.33324 8.66981C6.33324 9.59028 7.07946 10.3365 7.99993 10.3365C8.9204 10.3365 9.6666 9.59028 9.6666 8.66981C9.6666 7.74935 8.9204 7.00315 7.99993 7.00315ZM7.99993 3.66675C11.0756 3.66675 13.7307 5.76675 14.4673 8.70968C14.5344 8.97755 14.3716 9.24908 14.1037 9.31615C13.8358 9.38315 13.5643 9.22041 13.4973 8.95248C12.8713 6.45205 10.6141 4.66675 7.99993 4.66675C5.38454 4.66675 3.12664 6.45359 2.50182 8.95555C2.43491 9.22341 2.16348 9.38635 1.89557 9.31948C1.62766 9.25255 1.46471 8.98115 1.53162 8.71321C2.26701 5.76856 4.9229 3.66675 7.99993 3.66675Z'/></svg>")}x-pw-tool-item.value>x-div{-webkit-mask-image:url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path fill-rule='evenodd' clip-rule='evenodd' d='M4 6h8v1H4V6zm8 3H4v1h8V9z'/><path fill-rule='evenodd' clip-rule='evenodd' d='M1 4l1-1h12l1 1v8l-1 1H2l-1-1V4zm1 0v8h12V4H2z'/></svg>");mask-image:url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path fill-rule='evenodd' clip-rule='evenodd' d='M4 6h8v1H4V6zm8 3H4v1h8V9z'/><path fill-rule='evenodd' clip-rule='evenodd' d='M1 4l1-1h12l1 1v8l-1 1H2l-1-1V4zm1 0v8h12V4H2z'/></svg>")}x-pw-tool-item.accept>x-div{-webkit-mask-image:url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path d='M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/></svg>");mask-image:url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path d='M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/></svg>")}x-pw-tool-item.cancel>x-div{-webkit-mask-image:url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>");mask-image:url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>")}x-pw-tool-item.succeeded>x-div{-webkit-mask-image:url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path d='M6.27 10.87h.71l4.56-4.56-.71-.71-4.2 4.21-1.92-1.92L4 8.6l2.27 2.27z'/><path fill-rule='evenodd' clip-rule='evenodd' d='M8.6 1c1.6.1 3.1.9 4.2 2 1.3 1.4 2 3.1 2 5.1 0 1.6-.6 3.1-1.6 4.4-1 1.2-2.4 2.1-4 2.4-1.6.3-3.2.1-4.6-.7-1.4-.8-2.5-2-3.1-3.5C.9 9.2.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1zm.5 12.9c1.3-.3 2.5-1 3.4-2.1.8-1.1 1.3-2.4 1.2-3.8 0-1.6-.6-3.2-1.7-4.3-1-1-2.2-1.6-3.6-1.7-1.3-.1-2.7.2-3.8 1-1.1.8-1.9 1.9-2.3 3.3-.4 1.3-.4 2.7.2 4 .6 1.3 1.5 2.3 2.7 3 1.2.7 2.6.9 3.9.6z'/></svg>")!important;mask-image:url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path d='M6.27 10.87h.71l4.56-4.56-.71-.71-4.2 4.21-1.92-1.92L4 8.6l2.27 2.27z'/><path fill-rule='evenodd' clip-rule='evenodd' d='M8.6 1c1.6.1 3.1.9 4.2 2 1.3 1.4 2 3.1 2 5.1 0 1.6-.6 3.1-1.6 4.4-1 1.2-2.4 2.1-4 2.4-1.6.3-3.2.1-4.6-.7-1.4-.8-2.5-2-3.1-3.5C.9 9.2.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1zm.5 12.9c1.3-.3 2.5-1 3.4-2.1.8-1.1 1.3-2.4 1.2-3.8 0-1.6-.6-3.2-1.7-4.3-1-1-2.2-1.6-3.6-1.7-1.3-.1-2.7.2-3.8 1-1.1.8-1.9 1.9-2.3 3.3-.4 1.3-.4 2.7.2 4 .6 1.3 1.5 2.3 2.7 3 1.2.7 2.6.9 3.9.6z'/></svg>")!important;background-color:#388a34!important;-webkit-mask-size:18px!important;mask-size:18px!important}x-pw-overlay{position:absolute;top:0;max-width:min-content;z-index:2147483647;background:transparent;pointer-events:auto}x-pw-overlay x-pw-tools-list{background-color:#fffd;box-shadow:#0000001a 0 5px 5px;border-radius:3px;border-bottom:none}x-pw-overlay x-pw-tool-item{margin:2px}textarea.text-editor{font-family:system-ui,Ubuntu,Droid Sans,sans-serif;flex:auto;border:none;margin:6px 10px;color:#333;outline:1px solid transparent!important;resize:none;padding:0;font-size:13px}textarea.text-editor.does-not-match{outline:1px solid red!important}x-div{display:block}x-spacer{flex:auto}*{box-sizing:border-box}*[hidden]{display:none!important}x-locator-editor{flex:none;width:100%;height:60px;padding:4px;border-bottom:1px solid #dddddd;outline:1px solid transparent}x-locator-editor.does-not-match{outline:1px solid red}.CodeMirror{width:100%!important;height:100%!important}
`;

// packages/playwright-core/src/server/injected/highlight.ts
var Highlight = class {
  constructor(injectedScript) {
    this._highlightEntries = [];
    this._language = "javascript";
    this._injectedScript = injectedScript;
    const document = injectedScript.document;
    this._isUnderTest = injectedScript.isUnderTest;
    this._glassPaneElement = document.createElement("x-pw-glass");
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
      });
    }
    this._actionPointElement = document.createElement("x-pw-action-point");
    this._actionPointElement.setAttribute("hidden", "true");
    this._glassPaneShadow = this._glassPaneElement.attachShadow({ mode: this._isUnderTest ? "open" : "closed" });
    this._glassPaneShadow.appendChild(this._actionPointElement);
    const styleElement = document.createElement("style");
    styleElement.textContent = highlight_default;
    this._glassPaneShadow.appendChild(styleElement);
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
    this._rafRequest = requestAnimationFrame(() => this.runHighlightOnRaf(selector));
  }
  uninstall() {
    if (this._rafRequest)
      cancelAnimationFrame(this._rafRequest);
    this._glassPaneElement.remove();
  }
  showActionPoint(x, y) {
    this._actionPointElement.style.top = y + "px";
    this._actionPointElement.style.left = x + "px";
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
  }
  updateHighlight(elements, options) {
    this._innerUpdateHighlight(elements, options);
  }
  maskElements(elements, color) {
    this._innerUpdateHighlight(elements, { color: color ? color : "#F0F" });
  }
  _innerUpdateHighlight(elements, options) {
    let color = options.color;
    if (!color)
      color = elements.length > 1 ? "#f6b26b7f" : "#6fa8dc7f";
    if (this._highlightIsUpToDate(elements, options.tooltipText))
      return;
    this.clearHighlight();
    for (let i = 0; i < elements.length; ++i) {
      const highlightElement = this._createHighlightElement();
      this._glassPaneShadow.appendChild(highlightElement);
      let tooltipElement;
      if (options.tooltipText) {
        tooltipElement = this._injectedScript.document.createElement("x-pw-tooltip");
        this._glassPaneShadow.appendChild(tooltipElement);
        const suffix = elements.length > 1 ? ` [${i + 1} of ${elements.length}]` : "";
        tooltipElement.textContent = options.tooltipText + suffix;
        tooltipElement.style.top = "0";
        tooltipElement.style.left = "0";
        tooltipElement.style.display = "flex";
      }
      this._highlightEntries.push({ targetElement: elements[i], tooltipElement, highlightElement, tooltipText: options.tooltipText });
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
  _highlightIsUpToDate(elements, tooltipText) {
    if (elements.length !== this._highlightEntries.length)
      return false;
    for (let i = 0; i < this._highlightEntries.length; ++i) {
      if (tooltipText !== this._highlightEntries[i].tooltipText)
        return false;
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
};

// packages/playwright-core/src/server/injected/recorder.ts
var NoneTool = class {
  cursor() {
    return "default";
  }
};
var InspectTool = class {
  constructor(recorder, assertVisibility) {
    this._hoveredModel = null;
    this._hoveredElement = null;
    this._recorder = recorder;
    this._assertVisibility = assertVisibility;
  }
  cursor() {
    return "pointer";
  }
  cleanup() {
    this._hoveredModel = null;
    this._hoveredElement = null;
  }
  onClick(event) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    consumeEvent(event);
    if (this._assertVisibility) {
      if ((_a = this._hoveredModel) == null ? void 0 : _a.selector) {
        (_c = (_b = this._recorder.delegate).recordAction) == null ? void 0 : _c.call(_b, {
          name: "assertVisible",
          selector: this._hoveredModel.selector,
          signals: []
        });
        (_e = (_d = this._recorder.delegate).setMode) == null ? void 0 : _e.call(_d, "recording");
        (_f = this._recorder.overlay) == null ? void 0 : _f.flashToolSucceeded("assertingVisibility");
      }
    } else {
      (_h = (_g = this._recorder.delegate).setSelector) == null ? void 0 : _h.call(_g, this._hoveredModel ? this._hoveredModel.selector : "");
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
    const model = this._hoveredElement ? generateSelector(this._recorder.injectedScript, this._hoveredElement, { testIdAttributeName: this._recorder.state.testIdAttributeName }) : null;
    if (((_a = this._hoveredModel) == null ? void 0 : _a.selector) === (model == null ? void 0 : model.selector))
      return;
    this._hoveredModel = model;
    this._recorder.updateHighlight(model, true, { color: this._assertVisibility ? "#8acae480" : void 0 });
  }
  onMouseEnter(event) {
    consumeEvent(event);
  }
  onMouseLeave(event) {
    consumeEvent(event);
    const window = this._recorder.injectedScript.window;
    if (window.top !== window && this._recorder.deepEventTarget(event).nodeType === Node.DOCUMENT_NODE) {
      this._hoveredElement = null;
      this._hoveredModel = null;
      this._recorder.updateHighlight(null, true);
    }
  }
  onKeyDown(event) {
    var _a, _b;
    consumeEvent(event);
    if (this._assertVisibility && event.key === "Escape")
      (_b = (_a = this._recorder.delegate).setMode) == null ? void 0 : _b.call(_a, "recording");
  }
  onKeyUp(event) {
    consumeEvent(event);
  }
  onScroll(event) {
    this._hoveredElement = null;
    this._hoveredModel = null;
    this._recorder.updateHighlight(null, false);
  }
};
var RecordActionTool = class {
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
    const window = this._recorder.injectedScript.window;
    if (window.top !== window && this._recorder.deepEventTarget(event).nodeType === Node.DOCUMENT_NODE) {
      this._hoveredElement = null;
      this._updateModelForHoveredElement();
    }
  }
  onFocus(event) {
    this._onFocus(true);
  }
  onInput(event) {
    var _a, _b, _c, _d;
    const target = this._recorder.deepEventTarget(event);
    if (target.nodeName === "INPUT" && target.type.toLowerCase() === "file") {
      (_b = (_a = this._recorder.delegate).recordAction) == null ? void 0 : _b.call(_a, {
        name: "setInputFiles",
        selector: this._activeModel.selector,
        signals: [],
        files: [...target.files || []].map((file) => file.name)
      });
      return;
    }
    if (["INPUT", "TEXTAREA"].includes(target.nodeName) || target.isContentEditable) {
      if (target.nodeName === "INPUT" && ["checkbox", "radio"].includes(target.type.toLowerCase())) {
        return;
      }
      if (this._consumedDueWrongTarget(event))
        return;
      (_d = (_c = this._recorder.delegate).recordAction) == null ? void 0 : _d.call(_c, {
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
        selector: this._hoveredModel.selector,
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
    const result = activeElement ? generateSelector(this._recorder.injectedScript, activeElement, { testIdAttributeName: this._recorder.state.testIdAttributeName }) : null;
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
    if (nodeName === "INPUT" && ["date"].includes(target.type))
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
  async _performAction(action) {
    var _a, _b;
    this._hoveredElement = null;
    this._hoveredModel = null;
    this._activeModel = null;
    this._recorder.updateHighlight(null, false);
    this._performingAction = true;
    await ((_b = (_a = this._recorder.delegate).performAction) == null ? void 0 : _b.call(_a, action).catch(() => {
    }));
    this._performingAction = false;
    this._onFocus(false);
    if (this._recorder.injectedScript.isUnderTest) {
      console.error("Action performed for test: " + JSON.stringify({
        // eslint-disable-line no-console
        hovered: this._hoveredModel ? this._hoveredModel.selector : null,
        active: this._activeModel ? this._activeModel.selector : null
      }));
    }
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
    const { selector, elements } = generateSelector(this._recorder.injectedScript, this._hoveredElement, { testIdAttributeName: this._recorder.state.testIdAttributeName });
    if (this._hoveredModel && this._hoveredModel.selector === selector)
      return;
    this._hoveredModel = selector ? { selector, elements } : null;
    this._recorder.updateHighlight(this._hoveredModel, true, { color: "#dc6f6f7f" });
  }
};
var TextAssertionTool = class {
  constructor(recorder, kind) {
    this._hoverHighlight = null;
    this._action = null;
    this._dialogElement = null;
    this._textCache = /* @__PURE__ */ new Map();
    this._recorder = recorder;
    this._kind = kind;
    this._acceptButton = this._recorder.document.createElement("x-pw-tool-item");
    this._acceptButton.title = "Accept";
    this._acceptButton.classList.add("accept");
    this._acceptButton.appendChild(this._recorder.document.createElement("x-div"));
    this._acceptButton.addEventListener("click", () => this._commit());
    this._cancelButton = this._recorder.document.createElement("x-pw-tool-item");
    this._cancelButton.title = "Close";
    this._cancelButton.classList.add("cancel");
    this._cancelButton.appendChild(this._recorder.document.createElement("x-div"));
    this._cancelButton.addEventListener("click", () => this._closeDialog());
  }
  cursor() {
    return "pointer";
  }
  cleanup() {
    this._closeDialog();
    this._hoverHighlight = null;
  }
  onClick(event) {
    var _a, _b, _c, _d, _e;
    consumeEvent(event);
    if (this._kind === "value") {
      const action = this._generateAction();
      if (action) {
        (_b = (_a = this._recorder.delegate).recordAction) == null ? void 0 : _b.call(_a, action);
        (_d = (_c = this._recorder.delegate).setMode) == null ? void 0 : _d.call(_c, "recording");
        (_e = this._recorder.overlay) == null ? void 0 : _e.flashToolSucceeded("assertingValue");
      }
    } else {
      if (!this._dialogElement)
        this._showDialog();
    }
  }
  onMouseDown(event) {
    const target = this._recorder.deepEventTarget(event);
    if (this._elementHasValue(target))
      event.preventDefault();
  }
  onMouseMove(event) {
    var _a;
    if (this._dialogElement)
      return;
    const target = this._recorder.deepEventTarget(event);
    if (((_a = this._hoverHighlight) == null ? void 0 : _a.elements[0]) === target)
      return;
    if (this._kind === "text")
      this._hoverHighlight = elementText(this._textCache, target).full ? { elements: [target], selector: "" } : null;
    else
      this._hoverHighlight = this._elementHasValue(target) ? generateSelector(this._recorder.injectedScript, target, { testIdAttributeName: this._recorder.state.testIdAttributeName }) : null;
    this._recorder.updateHighlight(this._hoverHighlight, true, { color: "#8acae480" });
  }
  onKeyDown(event) {
    var _a, _b;
    if (event.key === "Escape")
      (_b = (_a = this._recorder.delegate).setMode) == null ? void 0 : _b.call(_a, "recording");
    consumeEvent(event);
  }
  onScroll(event) {
    this._recorder.updateHighlight(this._hoverHighlight, false, { color: "#8acae480" });
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
      const { selector } = generateSelector(this._recorder.injectedScript, target, { testIdAttributeName: this._recorder.state.testIdAttributeName });
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
      this._hoverHighlight = generateSelector(this._recorder.injectedScript, target, { testIdAttributeName: this._recorder.state.testIdAttributeName, forTextExpect: true });
      this._recorder.updateHighlight(this._hoverHighlight, true, { color: "#8acae480" });
      return {
        name: "assertText",
        selector: this._hoverHighlight.selector,
        signals: [],
        text: normalizeWhiteSpace(elementText(this._textCache, target).full),
        substring: true
      };
    }
  }
  _renderValue(action) {
    if ((action == null ? void 0 : action.name) === "assertText")
      return normalizeWhiteSpace(action.text);
    if ((action == null ? void 0 : action.name) === "assertChecked")
      return String(action.checked);
    if ((action == null ? void 0 : action.name) === "assertValue")
      return action.value;
    return "";
  }
  _commit() {
    var _a, _b, _c, _d;
    if (!this._action || !this._dialogElement)
      return;
    this._closeDialog();
    (_b = (_a = this._recorder.delegate).recordAction) == null ? void 0 : _b.call(_a, this._action);
    (_d = (_c = this._recorder.delegate).setMode) == null ? void 0 : _d.call(_c, "recording");
  }
  _showDialog() {
    var _a;
    if (!((_a = this._hoverHighlight) == null ? void 0 : _a.elements[0]))
      return;
    this._action = this._generateAction();
    if (!this._action || this._action.name !== "assertText")
      return;
    this._dialogElement = this._recorder.document.createElement("x-pw-dialog");
    this._keyboardListener = (event) => {
      if (event.key === "Escape") {
        this._closeDialog();
        return;
      }
      if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
        if (this._dialogElement)
          this._commit();
        return;
      }
    };
    this._recorder.document.addEventListener("keydown", this._keyboardListener, true);
    const toolbarElement = this._recorder.document.createElement("x-pw-tools-list");
    const labelElement = this._recorder.document.createElement("label");
    labelElement.textContent = "Assert that element contains text";
    toolbarElement.appendChild(labelElement);
    toolbarElement.appendChild(this._recorder.document.createElement("x-spacer"));
    toolbarElement.appendChild(this._acceptButton);
    toolbarElement.appendChild(this._cancelButton);
    this._dialogElement.appendChild(toolbarElement);
    const bodyElement = this._recorder.document.createElement("x-pw-dialog-body");
    const action = this._action;
    const textElement = this._recorder.document.createElement("textarea");
    textElement.setAttribute("spellcheck", "false");
    textElement.value = this._renderValue(this._action);
    textElement.classList.add("text-editor");
    const updateAndValidate = () => {
      var _a2;
      const newValue = normalizeWhiteSpace(textElement.value);
      const target = (_a2 = this._hoverHighlight) == null ? void 0 : _a2.elements[0];
      if (!target)
        return;
      action.text = newValue;
      const targetText = normalizeWhiteSpace(elementText(this._textCache, target).full);
      const matches = newValue && targetText.includes(newValue);
      textElement.classList.toggle("does-not-match", !matches);
    };
    textElement.addEventListener("input", updateAndValidate);
    bodyElement.appendChild(textElement);
    this._dialogElement.appendChild(bodyElement);
    this._recorder.highlight.appendChild(this._dialogElement);
    const position = this._recorder.highlight.tooltipPosition(this._recorder.highlight.firstBox(), this._dialogElement);
    this._dialogElement.style.top = position.anchorTop + "px";
    this._dialogElement.style.left = position.anchorLeft + "px";
    textElement.focus();
  }
  _closeDialog() {
    if (!this._dialogElement)
      return;
    this._dialogElement.remove();
    this._recorder.document.removeEventListener("keydown", this._keyboardListener);
    this._dialogElement = null;
  }
};
var Overlay = class {
  constructor(recorder) {
    this._offsetX = 0;
    this._measure = { width: 0, height: 0 };
    this._recorder = recorder;
    const document = this._recorder.injectedScript.document;
    this._overlayElement = document.createElement("x-pw-overlay");
    const toolsListElement = document.createElement("x-pw-tools-list");
    this._overlayElement.appendChild(toolsListElement);
    const dragHandle = document.createElement("x-pw-tool-gripper");
    dragHandle.addEventListener("mousedown", (event) => {
      this._dragState = { offsetX: this._offsetX, dragStart: { x: event.clientX, y: 0 } };
    });
    dragHandle.appendChild(document.createElement("x-div"));
    toolsListElement.appendChild(dragHandle);
    this._recordToggle = this._recorder.injectedScript.document.createElement("x-pw-tool-item");
    this._recordToggle.title = "Record";
    this._recordToggle.classList.add("record");
    this._recordToggle.appendChild(this._recorder.injectedScript.document.createElement("x-div"));
    this._recordToggle.addEventListener("click", () => {
      var _a, _b;
      (_b = (_a = this._recorder.delegate).setMode) == null ? void 0 : _b.call(_a, this._recorder.state.mode === "none" || this._recorder.state.mode === "standby" || this._recorder.state.mode === "inspecting" ? "recording" : "standby");
    });
    toolsListElement.appendChild(this._recordToggle);
    this._pickLocatorToggle = this._recorder.injectedScript.document.createElement("x-pw-tool-item");
    this._pickLocatorToggle.title = "Pick locator";
    this._pickLocatorToggle.classList.add("pick-locator");
    this._pickLocatorToggle.appendChild(this._recorder.injectedScript.document.createElement("x-div"));
    this._pickLocatorToggle.addEventListener("click", () => {
      var _a, _b;
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
      (_b = (_a = this._recorder.delegate).setMode) == null ? void 0 : _b.call(_a, newMode[this._recorder.state.mode]);
    });
    toolsListElement.appendChild(this._pickLocatorToggle);
    this._assertVisibilityToggle = this._recorder.injectedScript.document.createElement("x-pw-tool-item");
    this._assertVisibilityToggle.title = "Assert visibility";
    this._assertVisibilityToggle.classList.add("visibility");
    this._assertVisibilityToggle.appendChild(this._recorder.injectedScript.document.createElement("x-div"));
    this._assertVisibilityToggle.addEventListener("click", () => {
      var _a, _b;
      if (!this._assertVisibilityToggle.classList.contains("disabled"))
        (_b = (_a = this._recorder.delegate).setMode) == null ? void 0 : _b.call(_a, this._recorder.state.mode === "assertingVisibility" ? "recording" : "assertingVisibility");
    });
    toolsListElement.appendChild(this._assertVisibilityToggle);
    this._assertTextToggle = this._recorder.injectedScript.document.createElement("x-pw-tool-item");
    this._assertTextToggle.title = "Assert text";
    this._assertTextToggle.classList.add("text");
    this._assertTextToggle.appendChild(this._recorder.injectedScript.document.createElement("x-div"));
    this._assertTextToggle.addEventListener("click", () => {
      var _a, _b;
      if (!this._assertTextToggle.classList.contains("disabled"))
        (_b = (_a = this._recorder.delegate).setMode) == null ? void 0 : _b.call(_a, this._recorder.state.mode === "assertingText" ? "recording" : "assertingText");
    });
    toolsListElement.appendChild(this._assertTextToggle);
    this._assertValuesToggle = this._recorder.injectedScript.document.createElement("x-pw-tool-item");
    this._assertValuesToggle.title = "Assert value";
    this._assertValuesToggle.classList.add("value");
    this._assertValuesToggle.appendChild(this._recorder.injectedScript.document.createElement("x-div"));
    this._assertValuesToggle.addEventListener("click", () => {
      var _a, _b;
      if (!this._assertValuesToggle.classList.contains("disabled"))
        (_b = (_a = this._recorder.delegate).setMode) == null ? void 0 : _b.call(_a, this._recorder.state.mode === "assertingValue" ? "recording" : "assertingValue");
    });
    toolsListElement.appendChild(this._assertValuesToggle);
    this._updateVisualPosition();
  }
  install() {
    this._recorder.highlight.appendChild(this._overlayElement);
    this._updateVisualPosition();
  }
  contains(element) {
    return isInsideScope(this._overlayElement, element);
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
    setTimeout(() => element.classList.remove("succeeded"), 2e3);
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
    var _a, _b;
    if (!event.buttons) {
      this._dragState = void 0;
      return false;
    }
    if (this._dragState) {
      this._offsetX = this._dragState.offsetX + event.clientX - this._dragState.dragStart.x;
      const halfGapSize = (this._recorder.injectedScript.window.innerWidth - this._measure.width) / 2 - 10;
      this._offsetX = Math.max(-halfGapSize, Math.min(halfGapSize, this._offsetX));
      this._updateVisualPosition();
      (_b = (_a = this._recorder.delegate).setOverlayState) == null ? void 0 : _b.call(_a, { offsetX: this._offsetX });
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
};
var Recorder = class {
  constructor(injectedScript) {
    this._listeners = [];
    this._actionSelectorModel = null;
    this.state = { mode: "none", testIdAttributeName: "data-testid", language: "javascript", overlay: { offsetX: 0 } };
    this.delegate = {};
    this.document = injectedScript.document;
    this.injectedScript = injectedScript;
    this.highlight = new Highlight(injectedScript);
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
    this._styleElement = this.document.createElement("style");
    this._styleElement.textContent = `
      body[data-pw-cursor=pointer] *, body[data-pw-cursor=pointer] *::after { cursor: pointer !important; }
      body[data-pw-cursor=text] *, body[data-pw-cursor=text] *::after { cursor: text !important; }
    `;
    this.installListeners();
    if (injectedScript.isUnderTest)
      console.error("Recorder script ready for test");
  }
  installListeners() {
    var _a;
    removeEventListeners(this._listeners);
    this._listeners = [
      addEventListener(this.document, "click", (event) => this._onClick(event), true),
      addEventListener(this.document, "auxclick", (event) => this._onClick(event), true),
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
    this.injectedScript.document.head.appendChild(this._styleElement);
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
    this.delegate = delegate;
    if (state.actionPoint && this.state.actionPoint && state.actionPoint.x === this.state.actionPoint.x && state.actionPoint.y === this.state.actionPoint.y) {
    } else if (!state.actionPoint && !this.state.actionPoint) {
    } else {
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
  updateHighlight(model, userGesture, options = {}) {
    var _a, _b;
    if (options.tooltipText === void 0 && (model == null ? void 0 : model.selector))
      options.tooltipText = asLocator(this.state.language, model.selector);
    this.highlight.updateHighlight((model == null ? void 0 : model.elements) || [], options);
    if (userGesture)
      (_b = (_a = this.delegate).highlightUpdated) == null ? void 0 : _b.call(_a);
  }
  _ignoreOverlayEvent(event) {
    const target = event.composedPath()[0];
    return target.nodeName.toLowerCase() === "x-pw-glass";
  }
  deepEventTarget(event) {
    var _a;
    for (const element of event.composedPath()) {
      if (!((_a = this.overlay) == null ? void 0 : _a.contains(element)))
        return element;
    }
    return event.composedPath()[0];
  }
};
function deepActiveElement(document) {
  let activeElement = document.activeElement;
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
function addEventListener(target, eventName, listener, useCapture) {
  target.addEventListener(eventName, listener, useCapture);
  const remove = () => {
    target.removeEventListener(eventName, listener, useCapture);
  };
  return remove;
}
function removeEventListeners(listeners) {
  for (const listener of listeners)
    listener();
  listeners.splice(0, listeners.length);
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
var PollingRecorder = class {
  constructor(injectedScript) {
    this._recorder = new Recorder(injectedScript);
    this._embedder = injectedScript.window;
    injectedScript.onGlobalListenersRemoved.add(() => this._recorder.installListeners());
    const refreshOverlay = () => {
      this._pollRecorderMode().catch((e) => console.log(e));
    };
    this._embedder.__pw_refreshOverlay = refreshOverlay;
    refreshOverlay();
  }
  async _pollRecorderMode() {
    const pollPeriod = 1e3;
    if (this._pollRecorderModeTimer)
      clearTimeout(this._pollRecorderModeTimer);
    const state = await this._embedder.__pw_recorderState().catch(() => {
    });
    if (!state) {
      this._pollRecorderModeTimer = setTimeout(() => this._pollRecorderMode(), pollPeriod);
      return;
    }
    const win = this._recorder.document.defaultView;
    if (win.top !== win) {
      state.actionPoint = void 0;
    }
    this._recorder.setUIState(state, this);
    this._pollRecorderModeTimer = setTimeout(() => this._pollRecorderMode(), pollPeriod);
  }
  async performAction(action) {
    await this._embedder.__pw_recorderPerformAction(action);
  }
  async recordAction(action) {
    await this._embedder.__pw_recorderRecordAction(action);
  }
  async setSelector(selector) {
    await this._embedder.__pw_recorderSetSelector(selector);
  }
  async setMode(mode) {
    await this._embedder.__pw_recorderSetMode(mode);
  }
  async setOverlayState(state) {
    await this._embedder.__pw_recorderSetOverlayState(state);
  }
};
var recorder_default = PollingRecorder;
