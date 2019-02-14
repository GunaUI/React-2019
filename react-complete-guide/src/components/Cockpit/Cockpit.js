import React, { useEffect, useRef } from 'react';

import cockpitCssModule from './Cockpit.css';

const cockpit = ( props ) => {
    const toggleBtnRef = useRef(null);
    //Just like component did mount and component did update 
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        // setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work ############################# in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });

// useEffect();
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = cockpitCssModule.Red;
    }

    if ( props.personsLength <= 2 ) {
        assignedClasses.push( cockpitCssModule.red ); // classes = ['red']
    }
    if ( props.personsLength <= 1 ) {
        assignedClasses.push( cockpitCssModule.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={cockpitCssModule.Cockpit}>
            <h1>{ props.appTitle }</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.toggleClicked}>Toggle Persons</button>
        </div>
    );
};

export default React.memo(cockpit);