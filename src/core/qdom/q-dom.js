export default class QuickComponent {
    constructor(f) {
    }
    setTitle(title) {
        document.title = title;
    }
    async render() {
        return "";
    }
    method(f) {
        console.log(f);
        window.onload = function () {
            f;
        };
    }
}
