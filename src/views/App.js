import Quick from "../core/instance/quick"
import Welcome from "./Welcome";


export default class App extends Quick.Component {
    constructor(params) {
        super(params)
    }
    render() {
        return (
            <div>
                <h1>Home with another comp</h1>
                <quick-router-link to="/" className="mr-3 text-20 font-smalll isActive link" download>Home</quick-router-link>
                <quick-router-link to="/about">About</quick-router-link>
                <Welcome name={"Quick.js"} />
            </div>
        )
    }

}

const state = ({
    count: 0,
    todos: ["buy", "test", "redeem"]
})



Quick.$listener("one", "click", function clickone() {
    console.log("clicked one");
})
