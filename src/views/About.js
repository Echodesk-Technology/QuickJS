import QuickComponent from "../core/qdom/q-dom";

export default class About extends QuickComponent {
    constructor() {
        super()
        this.setTitle("About")
    }
    async render() {
        return  ` <div>
                <h1>About Page</h1>
                <quick-router-link to="/" name="Home">Home</quick-router-link>
                <quick-router-link to="/about" name="About">About</quick-router-link>
                <quick-router-link to="/contact">Contact</quick-router-link>
            </div>
            `

    }
}
