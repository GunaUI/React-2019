import React from 'react';
import './Person.css';
const personExport = ( properties ) => {
    return (
        <div className="Person">
            <p onClick={properties.deleteme}>I'm {properties.name} and I am {properties.age} years old!</p>
            <p>{properties.children}</p>
            <input type="text" onChange={properties.heychanged} value={properties.name} />
        </div>
    )
};

export default personExport;