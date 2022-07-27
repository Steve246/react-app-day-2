import {Component} from "react";

class Greet extends Component {
    constructor(props) {
        super(props);
        //state adalah sebuah object
        this.state = {name : 'EnigmaCamp'}
    }

    change = () => {
        // setState merubah value dlm component (me Render)
        this.setState({name: "IT Bootcamp"})
    }

    changeSemula = () => {
        // setState merubah value dlm component (me Render)
        this.setState({name : 'EnigmaCamp'})
    }

    changeBebas = (ev) => {

        this.setState({name: ev.target.value})

    }

    render () {
        return (
            <div> 
                <h2> It is {this.state.name} </h2>
                <button onClick = {this.change}> Ubah </button>
                <br/>
                <button onClick = {this.changeSemula}> Ubah Semula </button>
                <input type = "text" value = {this.state.name} onChange = {this.changeBebas}/>
            </div>
        )
    }
}

export default Greet