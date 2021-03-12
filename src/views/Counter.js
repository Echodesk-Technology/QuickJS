import Quick from "../core/instance/quick"

const state = {
    count: 1
}
export default class Counter extends Quick.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 1
        }
    }

    componentDidMount() {
        console.log('Component mounted');
    }

    render() {
        return (
            <div class="counter-con">
                <p>Count: <span>{state.count}</span></p>
                <button class="increment">Increment</button>
                <button class="decrement">Decrement</button>
            </div>
        )
    }
}



Quick.$listener("increment", "click", function increment(_this) {
    state.count++
})
Quick.$listener("decrement", "click", function decrement() {
    console.log("clicked decre");
})
