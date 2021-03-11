import Quick from "../core/instance/quick"
import QuickComponent from "../core/qdom/q-dom";
export default class Home extends QuickComponent {
    constructor() {
        super()
        this.setTitle("Home")
    }
    async render() {
        return `<div>
            <h1>Home Page</h1>
            <quick-router-link to="/" name="Home">Home</quick-router-link>
            <quick-router-link to="/about" name="About">About</quick-router-link>
            <quick-router-link  to="/contact" download="run.js">Contact</quick-router-link>
            <h4 style="padding">Counter <span>${state.count}</span></h4>
            <button id="one">clickme</button>
        </div>
            `
    }
}

const state = {
    count: 0
}

function increment() {
    const one = document.getElementById("one");
    console.log(one);
}
const isinc = `
function increment () {
    const one = document.getElementById("one");
    console.log(one);
}
`
Quick.init(isinc, "increment")


