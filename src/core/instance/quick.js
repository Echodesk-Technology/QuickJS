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
    init(comp, name) {
        console.log(comp.prototype, name);
        const s1 = document.getElementsByTagName("script");
        const s = document.createElement("script");
        s.type = "text/javascript";
        const m = comp.toString().split(";");
        console.log(m);
        s.text = `${comp}\n${name}()`;
        document.body.appendChild(s);
        window.onload = function () {
            `${comp}\n${name}()`;
        };
    }
    use(func) {
        document.addEventListener("DOMContentLoaded", () => {
            func;
        });
    }
    view(view) {
        document.querySelector("#app").innerHTML = view;
    }
}
export default new Quick();
