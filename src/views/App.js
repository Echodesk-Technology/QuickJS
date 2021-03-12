import Quick from "../core/instance/quick"
import Welcome from "./Welcome";


export default class App extends Quick.Component {
    constructor(params) {
        super(params)
    }
    render() {
        return (
            <div class="container">
                <div class="logo-con">
                    <img class="quick-logo" src="https://res.cloudinary.com/serveryguken/image/upload/v1615188992/QuickJS/logo/quickjs-logo_wjx3dw.svg" />
                </div>
                <div class="welcome">
                    <Welcome name={"Quick.js"} />
                </div>
                <div class="sec">
                    <h4>Check out Routes</h4>
                    <div class="flex">
                        <quick-router-link to="/">Home</quick-router-link>
                        <quick-router-link to="/about">About</quick-router-link>
                    </div>
                </div>
            </div>
        )
    }

}




Quick.$listener("one", "click", function clickone() {
    console.log("clicked one");
})
