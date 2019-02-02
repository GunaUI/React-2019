import React from 'react';

const personExport = ( properties ) => {
    return (
        <div>
            <p onClick={properties.clickme}>I'm {properties.name} and I am {properties.age} years old!</p>
            <p>{properties.children}</p>
        </div>
    )
};

export default personExport;