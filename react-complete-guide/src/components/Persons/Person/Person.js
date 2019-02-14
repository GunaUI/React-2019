import React, { Component, Fragment } from 'react';
import withClass from '../../../hoc/WithClass'

import mycssClassModule from './Person.css';

import Aux from '../../../hoc/Aux'

class PersonExport extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
                <Fragment>
                    <p onClick={this.props.deleteme}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.heychanged} value={this.props.name} />
                </Fragment>
        );
    }
}

export default withClass(PersonExport, mycssClassModule.Person);
