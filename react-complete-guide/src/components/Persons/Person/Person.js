import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withClass from '../../../hoc/WithClass'

import mycssClassModule from './Person.css';

import Aux from '../../../hoc/Aux'


class PersonExport extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        if (this.props.age === 29){
            this.inputElementRef.current.focus();
        }
    }
    render() {
        console.log('[Person.js] rendering...');
        return (
                <Fragment>
                    <p onClick={this.props.deleteme}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input type="text" 
                    onChange={this.props.heychanged}
                    ref={this.inputElementRef}
                    value={this.props.name} />
                </Fragment>
        );
    }
}

PersonExport.propTypes = {
    deleteme: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    heychanged: PropTypes.func
};
export default withClass(PersonExport, mycssClassModule.Person);
