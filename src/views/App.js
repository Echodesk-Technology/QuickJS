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
