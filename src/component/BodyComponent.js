import {Component} from 'react';

const enigma = 'Enigmacamp'
const name = <h1> Hello  {enigma}</h1>

function sayHello(name) {
    return `Hello ${enigma}`
    
}

const buttonText = {
    text: 'Kirim Message'
  }

class BodyComponent extends Component{
    render() {
        
        return(
            <>
                {/* <h1> Body Component</h1>
                {name}
                <h1 class = "text-title"> {sayHello(enigma)} </h1>
                <h1 class = "text-title"> {sayHello(enigma)} </h1> */}

                {/* <button style = {buttonStyle}> {buttonText.text} </button> */}
                {/* <button class = "button-name"> {buttonText.text} </button>
                <label htmlFor='name'> Enter Name </label> */}
                <p> Welcome {this.props.firstName}</p>
            </>
        )
    }
}

//kalau pake class dibawahnya harus ditututp

export default BodyComponent