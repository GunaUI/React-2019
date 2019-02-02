import React from 'react';

const personExport = ( properties ) => {
    return (
        <div>
            <p onClick={properties.clickme}>I'm {properties.name} and I am {properties.age} years old!</p>
            <p>{properties.children}</p>
            <input type="text" onChange={properties.heychanged} value={properties.name} />
        </div>
    )
};

export default personExport;