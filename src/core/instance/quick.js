// interface IQuick {
//     readonly $el: Element,
// }
// function watchEffect(fn:P any) {
//     this.activeEffect = fn
//     fn()
//     this.activeEffect = null
// }
class Dep {
    constructor() {
        this.subscribers = new Set();
    }
    depend(activeEffect) {
        if (activeEffect)
            this.subscribers.add(activeEffect);
    }
    notify() {
        this.subscribers.forEach((sub) => {
            sub();
        });
    }
}
class Quick {
    reactive(obj) {
        Object.keys(obj).forEach((key) => {
            const dep = new Dep();
            let value = obj[key];
            Object.defineProperty(obj, key, {
                get() {
                    dep.depend();
                    return value;
                },
                set(newValue) {
                    if (newValue !== value) {
                        value = newValue;
                        dep.notify();
                    }
                },
            });
        });
        return obj;
    }
    // component(comp: any | void) {
    //     if(!comp) {
    //         new QuickError("component not defined");
    //         return false
    //     }
    //     if(comp.name=== "root" && !comp.selector) {
    //         new QuickError("Cannot read property 'selector' of undefined");
    //     }
    //         let elem;
    //         if(comp.name === "root") {
    //             elem = document.getElementById(comp.selector);
    //         }
    //         else {
    //             elem = document.getElementById("app");
    //         }
    //         const data = comp.data;
    //         const methods = comp.methods
    //         const methodsArray = Array(methods).slice();
    //         methodsArray.forEach((method: void) => {
    //             this.use(method)
    //             return method
    //         })
    //         const template = comp.template;
    //         return comp
    // }
    // render(component: any| void) {
    //     if(!component) {
    //         new QuickError("component not defined");
    //         return false
    //     }
    //     if(!component.selector) {
    //         new QuickError("Cannot read property 'selector' of undefined");
    //     }
    //     if(component.name === "root") {
    //         document.getElementById(component.selector).innerHTML = component.template(component.data,component.methods);
    //     }
    // }
    use(func) {
        document.addEventListener("DOMContentLoaded", () => {
            func;
        });
    }
}
export default new Quick();
