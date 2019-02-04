import React from 'react';

import PersonImport from './Person/Person';

const PersonRepeat = (props) => props.persons.map( ( person, index ) => {
        return <PersonImport
            deleteme={() => props.personClicked( index )}
            name={person.name}
            age={person.age}
            key={person.id}
            heychanged={( event ) => props.personChanged( event, person.id )} />
        } );

export default PersonRepeat;

