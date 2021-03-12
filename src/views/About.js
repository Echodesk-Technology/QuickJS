
import Quick from "../core/instance/quick"


export default class About extends Quick.Component {
    constructor(params) {
        super(params)
    }
    render() {
        return (
            <div class="container">
                <div class="logo-con">
                    <img class="quick-logo" src="https://res.cloudinary.com/serveryguken/image/upload/v1615188992/QuickJS/logo/quickjs-logo_wjx3dw.svg" />
                    <h1>About page</h1>
                </div>
                <div class="sec">
                    <h4>Go back</h4>
                    <div class="flex">
                        <quick-router-link to="/">Home</quick-router-link>
                        <quick-router-link to="/about">About</quick-router-link>
                    </div>
                </div>
            </div>
        )
    }

}




