import React from 'react';
import mycssClassModule from './Person.css';
const personExport = ( properties ) => {
    console.log('[personExport - Person.js] child component rendering ...'); 
    return (
        <div className={mycssClassModule.Person}>
            <p onClick={properties.deleteme}>I'm {properties.name} and I am {properties.age} years old!</p>
            <p>{properties.children}</p>
            <input type="text" onChange={properties.heychanged} value={properties.name} />
        </div>
    )
};

export default personExport;