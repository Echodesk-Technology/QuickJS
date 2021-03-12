import Quick from "../instance/quick";
import * as snabbdom from "../../node_modules/snabbdom/build/package/init";
import { propsModule } from "../../node_modules/snabbdom/build/package/modules/props";
const eventlistenersModule = require('../../node_modules/snabbdom/build/package/modules/eventlisteners');
const reconcile = snabbdom.init([propsModule, eventlistenersModule]);
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
Quick.__updater;
any = (componentInstance) => {
    const oldVNode = componentInstance.__vNode;
    const newVNode = componentInstance.render();
    componentInstance.__vNode = reconcile(oldVNode, newVNode);
};
const QuickDom = {
    render
};
export default QuickDom;
