import React from 'react';

import cockpitCssModule from './Cockpit.css';

const cockpit = ( props ) => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = cockpitCssModule.Red;
    }

    if ( props.persons.length <= 2 ) {
        assignedClasses.push( cockpitCssModule.red ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
        assignedClasses.push( cockpitCssModule.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={cockpitCssModule.Cockpit}>
            <h1>{ props.appTitle }</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.toggleClicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;