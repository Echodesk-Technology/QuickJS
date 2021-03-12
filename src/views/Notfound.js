import Quick from "../core/instance/quick";

export default class NotFound extends Quick.Component{
    constructor() {
        super()
    }
    render() {
        return  (
            <div>
                <h1>404 Page</h1>
                <quick-router-link to="/" name="Home">Home</quick-router-link>
                <quick-router-link to="/about" name="About">About</quick-router-link>
                <quick-router-link to="/counter">Counter</quick-router-link>
            </div>
        )

    }
}
