import React, { Component } from 'react';

import mycssClassModule from './Person.css';

class PersonExport extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <div className={mycssClassModule.Person}>
                <p onClick={this.props.deleteme}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.heychanged} value={this.props.name} />
            </div>
        );
    }
}

export default PersonExport;
