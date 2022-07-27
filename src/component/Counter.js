import {Component} from "react"
import CounterButtonMinus from "./ClassButtonMinus"

import CounterButtonPlus from "./ClassButtonPlus"

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number : this.props.default
        }

        // this.increment = this.increment.bind(this)
    }

    // baru ditambah

    // increment = (val) => {
    //     this.setState({
    //         number:val
    //     })
    // }

    // decrement = (val) => {
    //     this.setState({
    //         number:val
    //     })
    // }

    callback = (val) => {
        this.setState({
            number: val
        })
    }

    
    // lama
    // increment() {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }

    // decrement = () => {
    //     this.setState({
    //         count: this.state.count -1 
    //     })

    // }

    // decrement arrow func gak pake bind, karena udh milik button
    // kalau fungsi biasa, harus pake bind

    render() {
        return (
            <div>
                <h1 className = "text-dark mx-2"> {this.state.number} </h1>
                <CounterButtonPlus callback = {this.callback} number = {this.state.number}/>
               
                <CounterButtonMinus callback = {this.callback} number = {this.state.number}/>
               
               
                 {/* <h1 className="text-dark mx-2"> {this.state.count} </h1>
                // <button onClick = { this.increment}> Tambah 1 </button>
                // <button onClick = {this.decrement}> Kurang 1 </button> */}
                 {/* pake bind this,  */}

            </div>

        )
    }
}

export default Counter