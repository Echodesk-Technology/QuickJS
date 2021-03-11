import QuickComponent from "../core/qdom/q-dom";

export default class Contact extends QuickComponent {
    constructor() {
        super()
        this.setTitle("Contact")
    }
    async render() {
        return  ` <div>
                <h1>Contact Page</h1>
                <quick-router-link to="/" name="Home">Home</quick-router-link>
                <quick-router-link to="/about" name="About">About</quick-router-link>
                <quick-router-link to="/contact">Contact</quick-router-link>
            </div>
            `

    }
}
