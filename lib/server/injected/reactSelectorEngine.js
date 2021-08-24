"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactEngine = void 0;

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
function getComponentName(reactElement) {
  // React 16+
  // @see https://github.com/baruchvlz/resq/blob/5c15a5e04d3f7174087248f5a158c3d6dcc1ec72/src/utils.js#L16
  if (typeof reactElement.type === 'function') return reactElement.type.displayName || reactElement.type.name || 'Anonymous';
  if (typeof reactElement.type === 'string') return reactElement.type; // React 15
  // @see https://github.com/facebook/react/blob/2edf449803378b5c58168727d4f123de3ba5d37f/packages/react-devtools-shared/src/backend/legacy/renderer.js#L59

  if (reactElement._currentElement) {
    const elementType = reactElement._currentElement.type;
    if (typeof elementType === 'string') return elementType;
    if (typeof elementType === 'function') return elementType.displayName || elementType.name || 'Anonymous';
  }

  return '';
}

function getChildren(reactElement) {
  // React 16+
  // @see https://github.com/baruchvlz/resq/blob/5c15a5e04d3f7174087248f5a158c3d6dcc1ec72/src/utils.js#L192
  if (reactElement.child) {
    const children = [];

    for (let child = reactElement.child; child; child = child.sibling) children.push(child);

    return children;
  } // React 15
  // @see https://github.com/facebook/react/blob/2edf449803378b5c58168727d4f123de3ba5d37f/packages/react-devtools-shared/src/backend/legacy/renderer.js#L101


  if (!reactElement._currentElement) return [];

  const isKnownElement = reactElement => {
    var _reactElement$_curren;

    const elementType = (_reactElement$_curren = reactElement._currentElement) === null || _reactElement$_curren === void 0 ? void 0 : _reactElement$_curren.type;
    return typeof elementType === 'function' || typeof elementType === 'string';
  };

  if (reactElement._renderedComponent) {
    const child = reactElement._renderedComponent;
    return isKnownElement(child) ? [child] : [];
  }

  if (reactElement._renderedChildren) return [...Object.values(reactElement._renderedChildren)].filter(isKnownElement);
  return [];
}

function getProps(reactElement) {
  var _reactElement$_curren2;

  const props = // React 16+
  reactElement.memoizedProps || ( // React 15
  (_reactElement$_curren2 = reactElement._currentElement) === null || _reactElement$_curren2 === void 0 ? void 0 : _reactElement$_curren2.props);
  if (!props || typeof props === 'string') return props;
  const result = { ...props
  };
  delete result.children;
  return result;
}

function buildComponentsTree(reactElement) {
  var _reactElement$_render;

  const treeNode = {
    name: getComponentName(reactElement),
    children: getChildren(reactElement).map(buildComponentsTree),
    rootElements: [],
    props: getProps(reactElement)
  };
  const rootElement = // React 16+
  // @see https://github.com/baruchvlz/resq/blob/5c15a5e04d3f7174087248f5a158c3d6dcc1ec72/src/utils.js#L29
  reactElement.stateNode || // React 15
  reactElement._hostNode || ((_reactElement$_render = reactElement._renderedComponent) === null || _reactElement$_render === void 0 ? void 0 : _reactElement$_render._hostNode);

  if (rootElement instanceof Element) {
    treeNode.rootElements.push(rootElement);
  } else {
    for (const child of treeNode.children) treeNode.rootElements.push(...child.rootElements);
  }

  return treeNode;
}

function filterComponentsTree(treeNode, searchFn, result = []) {
  if (searchFn(treeNode)) result.push(treeNode);

  for (const child of treeNode.children) filterComponentsTree(child, searchFn, result);

  return result;
}

function findReactRoots() {
  const roots = [];
  const walker = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, {
    acceptNode: function (node) {
      // @see https://github.com/baruchvlz/resq/blob/5c15a5e04d3f7174087248f5a158c3d6dcc1ec72/src/utils.js#L329
      if (node.hasOwnProperty('_reactRootContainer')) {
        roots.push(node._reactRootContainer._internalRoot.current);
        return NodeFilter.FILTER_REJECT;
      }

      for (const key of Object.keys(node)) {
        // @see https://github.com/baruchvlz/resq/blob/5c15a5e04d3f7174087248f5a158c3d6dcc1ec72/src/utils.js#L334
        if (key.startsWith('__reactInternalInstance') || key.startsWith('__reactFiber')) {
          roots.push(node[key]);
          return NodeFilter.FILTER_REJECT;
        }
      }

      return NodeFilter.FILTER_ACCEPT;
    }
  });

  while (walker.nextNode());

  return roots;
}

const ReactEngine = {
  queryAll(scope, selector) {
    const {
      name,
      attributes
    } = (0, _componentUtils.parseComponentSelector)(selector);
    const reactRoots = findReactRoots();
    const trees = reactRoots.map(reactRoot => buildComponentsTree(reactRoot));
    const treeNodes = trees.map(tree => filterComponentsTree(tree, treeNode => {
      if (name && treeNode.name !== name) return false;
      if (treeNode.rootElements.some(domNode => !scope.contains(domNode))) return false;

      for (const attr of attributes) {
        if (!(0, _componentUtils.checkComponentAttribute)(treeNode.props, attr)) return false;
      }

      return true;
    })).flat();
    const allRootElements = new Set();

    for (const treeNode of treeNodes) {
      for (const domNode of treeNode.rootElements) allRootElements.add(domNode);
    }

    return [...allRootElements];
  }

};
exports.ReactEngine = ReactEngine;