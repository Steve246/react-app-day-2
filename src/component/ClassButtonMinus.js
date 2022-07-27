import {Component} from "react"

class CounterButtonMinus extends Component {

    constructor(props) {
        super(props);
    }

    buttonMinus = () => {
        let numb = this.props.number - 1
        this.props.callback(numb)
    }

   

    render() {

        return (
            <div>
                <button onClick = {this.buttonMinus}> Decrement </button>
            </div>
        )

    }
}

export default CounterButtonMinus