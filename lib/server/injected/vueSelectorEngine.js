"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VueEngine = void 0;

var _componentUtils = require("../common/componentUtils");

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
// @see https://github.com/vuejs/devtools/blob/14085e25313bcf8ffcb55f9092a40bc0fe3ac11c/packages/shared-utils/src/util.ts#L295
function basename(filename, ext) {
  const normalized = filename.replace(/^[a-zA-Z]:/, '').replace(/\\/g, '/');
  let result = normalized.substring(normalized.lastIndexOf('/') + 1);
  if (ext && result.endsWith(ext)) result = result.substring(0, result.length - ext.length);
  return result;
} // @see https://github.com/vuejs/devtools/blob/14085e25313bcf8ffcb55f9092a40bc0fe3ac11c/packages/shared-utils/src/util.ts#L41


function toUpper(_, c) {
  return c ? c.toUpperCase() : '';
} // @see https://github.com/vuejs/devtools/blob/14085e25313bcf8ffcb55f9092a40bc0fe3ac11c/packages/shared-utils/src/util.ts#L23


const classifyRE = /(?:^|[-_/])(\w)/g;

const classify = str => {
  return str && str.replace(classifyRE, toUpper);
};

function buildComponentsTreeVue3(instance) {
  // @see https://github.com/vuejs/devtools/blob/e7132f3392b975e39e1d9a23cf30456c270099c2/packages/app-backend-vue3/src/components/util.ts#L47
  function getComponentTypeName(options) {
    const name = options.name || options._componentTag || options.__playwright_guessedName;
    if (name) return name;
    const file = options.__file; // injected by vue-loader

    if (file) return classify(basename(file, '.vue'));
  } // @see https://github.com/vuejs/devtools/blob/e7132f3392b975e39e1d9a23cf30456c270099c2/packages/app-backend-vue3/src/components/util.ts#L42


  function saveComponentName(instance, key) {
    instance.type.__playwright_guessedName = key;
    return key;
  } // @see https://github.com/vuejs/devtools/blob/e7132f3392b975e39e1d9a23cf30456c270099c2/packages/app-backend-vue3/src/components/util.ts#L29


  function getInstanceName(instance) {
    const name = getComponentTypeName(instance.type || {});
    if (name) return name;
    if (instance.root === instance) return 'Root';

    for (const key in (_instance$parent = instance.parent) === null || _instance$parent === void 0 ? void 0 : (_instance$parent$type = _instance$parent.type) === null || _instance$parent$type === void 0 ? void 0 : _instance$parent$type.components) {
      var _instance$parent, _instance$parent$type, _instance$parent2;

      if (((_instance$parent2 = instance.parent) === null || _instance$parent2 === void 0 ? void 0 : _instance$parent2.type.components[key]) === instance.type) return saveComponentName(instance, key);
    }

    for (const key in (_instance$appContext = instance.appContext) === null || _instance$appContext === void 0 ? void 0 : _instance$appContext.components) {
      var _instance$appContext;

      if (instance.appContext.components[key] === instance.type) return saveComponentName(instance, key);
    }

    return 'Anonymous Component';
  } // @see https://github.com/vuejs/devtools/blob/e7132f3392b975e39e1d9a23cf30456c270099c2/packages/app-backend-vue3/src/components/util.ts#L6


  function isBeingDestroyed(instance) {
    return instance._isBeingDestroyed || instance.isUnmounted;
  } // @see https://github.com/vuejs/devtools/blob/e7132f3392b975e39e1d9a23cf30456c270099c2/packages/app-backend-vue3/src/components/util.ts#L16


  function isFragment(instance) {
    return instance.subTree.type.toString() === 'Symbol(Fragment)';
  } // @see https://github.com/vuejs/devtools/blob/e7132f3392b975e39e1d9a23cf30456c270099c2/packages/app-backend-vue3/src/components/tree.ts#L79


  function getInternalInstanceChildren(subTree) {
    const list = [];
    if (subTree.component) list.push(subTree.component);
    if (subTree.suspense) list.push(...getInternalInstanceChildren(subTree.suspense.activeBranch));

    if (Array.isArray(subTree.children)) {
      subTree.children.forEach(childSubTree => {
        if (childSubTree.component) list.push(childSubTree.component);else list.push(...getInternalInstanceChildren(childSubTree));
      });
    }

    return list.filter(child => {
      var _child$type$devtools;

      return !isBeingDestroyed(child) && !((_child$type$devtools = child.type.devtools) !== null && _child$type$devtools !== void 0 && _child$type$devtools.hide);
    });
  } // @see https://github.com/vuejs/devtools/blob/e7132f3392b975e39e1d9a23cf30456c270099c2/packages/app-backend-vue3/src/components/el.ts#L8


  function getRootElementsFromComponentInstance(instance) {
    if (isFragment(instance)) return getFragmentRootElements(instance.subTree);
    return [instance.subTree.el];
  } // @see https://github.com/vuejs/devtools/blob/e7132f3392b975e39e1d9a23cf30456c270099c2/packages/app-backend-vue3/src/components/el.ts#L15


  function getFragmentRootElements(vnode) {
    if (!vnode.children) return [];
    const list = [];

    for (let i = 0, l = vnode.children.length; i < l; i++) {
      const childVnode = vnode.children[i];
      if (childVnode.component) list.push(...getRootElementsFromComponentInstance(childVnode.component));else if (childVnode.el) list.push(childVnode.el);
    }

    return list;
  }

  function buildComponentsTree(instance) {
    return {
      name: getInstanceName(instance),
      children: getInternalInstanceChildren(instance.subTree).map(buildComponentsTree),
      rootElements: getRootElementsFromComponentInstance(instance),
      props: instance.props
    };
  }

  return buildComponentsTree(instance);
}

function buildComponentsTreeVue2(instance) {
  // @see https://github.com/vuejs/devtools/blob/e7132f3392b975e39e1d9a23cf30456c270099c2/packages/shared-utils/src/util.ts#L302
  function getComponentName(options) {
    const name = options.displayName || options.name || options._componentTag;
    if (name) return name;
    const file = options.__file; // injected by vue-loader

    if (file) return classify(basename(file, '.vue'));
  } // @see https://github.com/vuejs/devtools/blob/e7132f3392b975e39e1d9a23cf30456c270099c2/packages/app-backend-vue2/src/components/util.ts#L10


  function getInstanceName(instance) {
    const name = getComponentName(instance.$options || instance.fnOptions || {});
    if (name) return name;
    return instance.$root === instance ? 'Root' : 'Anonymous Component';
  } // @see https://github.com/vuejs/devtools/blob/14085e25313bcf8ffcb55f9092a40bc0fe3ac11c/packages/app-backend-vue2/src/components/tree.ts#L103


  function getInternalInstanceChildren(instance) {
    if (instance.$children) return instance.$children;
    if (Array.isArray(instance.subTree.children)) return instance.subTree.children.filter(vnode => !!vnode.component).map(vnode => vnode.component);
    return [];
  }

  function buildComponentsTree(instance) {
    return {
      name: getInstanceName(instance),
      children: getInternalInstanceChildren(instance).map(buildComponentsTree),
      rootElements: [instance.$el],
      props: instance._props
    };
  }

  return buildComponentsTree(instance);
}

function filterComponentsTree(treeNode, searchFn, result = []) {
  if (searchFn(treeNode)) result.push(treeNode);

  for (const child of treeNode.children) filterComponentsTree(child, searchFn, result);

  return result;
}

function findVueRoots() {
  const roots = []; // Vue3 roots are marked with [data-v-app] attribute

  for (const node of document.querySelectorAll('[data-v-app]')) {
    if (node._vnode && node._vnode.component) roots.push({
      root: node._vnode.component,
      version: 3
    });
  } // Vue2 roots are referred to from elements.


  const walker = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT);
  const vue2Roots = new Set();

  while (walker.nextNode()) {
    const element = walker.currentNode;
    if (element && element.__vue__) vue2Roots.add(element.__vue__.$root);
  }

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
    const {
      name,
      attributes
    } = (0, _componentUtils.parseComponentSelector)(selector);
    const vueRoots = findVueRoots();
    const trees = vueRoots.map(vueRoot => vueRoot.version === 3 ? buildComponentsTreeVue3(vueRoot.root) : buildComponentsTreeVue2(vueRoot.root));
    const treeNodes = trees.map(tree => filterComponentsTree(tree, treeNode => {
      if (name && treeNode.name !== name) return false;
      if (treeNode.rootElements.some(rootElement => !scope.contains(rootElement))) return false;

      for (const attr of attributes) {
        if (!(0, _componentUtils.checkComponentAttribute)(treeNode.props, attr)) return false;
      }

      return true;
    })).flat();
    const allRootElements = new Set();

    for (const treeNode of treeNodes) {
      for (const rootElement of treeNode.rootElements) allRootElements.add(rootElement);
    }

    return [...allRootElements];
  }

};
exports.VueEngine = VueEngine;