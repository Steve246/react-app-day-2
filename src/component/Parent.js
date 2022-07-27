import {Component} from 'react';
import Child from './Child'

import PropTypes from 'prop-types';
class Parent extends Component{
    render() {
        return (
            <div>
                <Child name = {this.props.name} age = {this.props.age}/>
            </div>
        )
    }
}

Parent.propTypes = {
    name: PropTypes.string
};

Parent.defaultProps = {
    name : "Default Props",
}


export default Parent;