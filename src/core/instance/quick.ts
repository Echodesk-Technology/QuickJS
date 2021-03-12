import QuickError from '../utils/quick-error';
import * as snabbdom from "../../node_modules/snabbdom/build/package/init"
import { propsModule } from "../../node_modules/snabbdom/build/package/modules/props"


const reconcile = snabbdom.init([propsModule]);

const root = document.getElementById('app')
import { h } from "../../node_modules/snabbdom/build/package/h"
const init = require('snabbdom-to-html/init')
const modules = require('snabbdom-to-html/modules')
const toHTML = init([
    modules.class,
    modules.props,
    modules.attributes,
    modules.style
])
declare global {
    interface Window { state: any }
}
// interface IQuick {
//     readonly $el: Element,
// }
// function watchEffect(fn:P any) {
//     this.activeEffect = fn
//     fn()
//     this.activeEffect = null
// }

class Dep {
    subscribers = new Set()
    depend(activeEffect?) {
        if (activeEffect) this.subscribers.add(activeEffect)
    }
    notify() {
        this.subscribers.forEach((sub: any | void) => {
            sub()
        })
    }
}

class Component {
    constructor(params: any) {
        let t: any = this
        t.params = params
    }

    componentDidMount() { }

    setState(partialState) {
        const _this: any = this
        _this.state = {
            ..._this.state,
            ...partialState
        }
        Quick.__updater(_this);
    }

    render(el, r?: any) {
        reconcile(root, el);
    }
}
const _pt: any = Component.prototype
_pt.isQuickClassComponent = true;

const render = async (el, r?: any) => {
    reconcile(root, el);
};

const $init = () => {
    const fav = document.createElement("link")
    fav.href = "/favicon.ico"
    fav.rel = "icon"
    const h = document.getElementsByTagName("head")
    console.log(h);
};


const $listener = (target, type, fn, prevent: boolean) => {
    document.addEventListener(type, (e) => {
        if (e.target.id === target) {
            fn()
        }
        if (e.target.className === target) {
            fn()
        }
        else {
            return false
        }
    });

    if (prevent) {
        document.addEventListener(type, (e: any) => {
            e.preventDefault();
            if (target === "" || !target) {
                new QuickError(`target not passed to listener`)
            }
            if (e.target.id === target) {
                e.preventDefault();
                fn()
            }
            if (e.target.className === target) {
                e.preventDefault();
                fn()
            }
            else {
                return false
            }
        });
    }
};


const use = (func: any) => {
    document.addEventListener("DOMContentLoaded", () => {
        func
    })
};

const view = (view: any) => {
    const renderViewtoHTML = toHTML(view)
    document.querySelector("#app").innerHTML = renderViewtoHTML
};

const createElement = (type, props = {}, ...children: any) => {
    children = children.flat();
    if (type.prototype && type.prototype.isQndReactClassComponent) {
        const componentInstance = new type(props);

        return componentInstance.render();
    }
    if (typeof (type) == 'function') {
        return type(props);
    }
    props = props || {};
    let dataProps = {};
    let eventProps = {};
    for(let propKey in props) {
        // event props always startwith on eg. onClick, onChange etc.
        if (propKey.startsWith('on')) {
          // onClick -> click
          const event = propKey.substring(2).toLowerCase();
    
          eventProps[event] = props[propKey];
        }
        else {
          dataProps[propKey] = props[propKey];
        }
      }
    return h(type, { props }, children);
};


const __updater = (instance) => { return instance}

const $config = (env) => {
    if (env === "production") {
    }
    if (env === "development") {
    }
    if (!env || env === "") {
    }

}

const Quick = {
    Component,
    use,
    view,
    createElement,
    __updater,
    $config,
    render,
    $init,
    $listener
}




Quick.use(Quick.$init)
Quick.use(Quick.$listener)
export default Quick