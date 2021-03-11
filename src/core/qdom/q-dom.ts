export default class QuickComponent  {
    constructor(f) {
    }
    setTitle(title) {
        document.title = title
    }
    async render() {
        return "";
    }
    method(f: any) {
        console.log(f);
        window.onload = function () {
            f
        }
    }
}