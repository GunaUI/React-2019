import React from 'react';
import './Person.css';
import Radium from 'radium';
const personExport = ( properties ) => {
    const styleGuide = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className="Person" style={styleGuide}>
            <p onClick={properties.deleteme}>I'm {properties.name} and I am {properties.age} years old!</p>
            <p>{properties.children}</p>
            <input type="text" onChange={properties.heychanged} value={properties.name} />
        </div>
    )
};

export default Radium(personExport);