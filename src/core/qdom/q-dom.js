"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quick_1 = require("../instance/quick");
const snabbdom = require("../../node_modules/snabbdom/build/package/init");
const props_1 = require("../../node_modules/snabbdom/build/package/modules/props");
const eventlistenersModule = require('../../node_modules/snabbdom/build/package/modules/eventlisteners');
const reconcile = snabbdom.init([props_1.propsModule, eventlistenersModule]);
let rootVNode;
const render = (el, rootDomElement) => {
    // logic to put el into the rootDomElement
    // ie. QndReactDom.render(<App />, document.getElementById('root'));
    // happens when we call render for the first time
    if (rootVNode == null) {
        rootVNode = rootDomElement;
    }
    // remember the VNode that reconcile returns
    rootVNode = reconcile(rootVNode, el);
};
quick_1.default.__updater = (componentInstance) => {
    const oldVNode = componentInstance.__vNode;
    const newVNode = componentInstance.render();
    componentInstance.__vNode = reconcile(oldVNode, newVNode);
};
const QuickDom = {
    render
};
exports.default = QuickDom;
