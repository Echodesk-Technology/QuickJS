import QuickError from '../utils/quick-error';
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

class Quick {
    init(comp: any | void,name: any) {
        console.log(comp.prototype,name);
        
        
        const s1 = document.getElementsByTagName("script")
        const s = document.createElement("script")
        s.type = "text/javascript"
        const m = comp.toString().split(";")
        console.log(m);
        s.text = `${comp}\n${name}()`
        document.body.appendChild(s);
        window.onload = function () {
            `${comp}\n${name}()`
        }
    }
    use(func: any) {
        document.addEventListener("DOMContentLoaded", () => {
            func
        })
    }
    view(view: any) {
        document.querySelector("#app").innerHTML = view
    }
}



export default new Quick()