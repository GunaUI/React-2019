import React, { Component } from 'react';

import mycssClassModule from './Person.css';

class PersonExport extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return [
                <p key="i1" onClick={this.props.deleteme}>I'm {this.props.name} and I am {this.props.age} years old!</p>,
                <p key="i2" >{this.props.children}</p>,
                <input type="text" key="i3" onChange={this.props.heychanged} value={this.props.name} />
        ];
    }
}

export default PersonExport;
