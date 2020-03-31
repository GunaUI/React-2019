# React-2019
Change different branch to get explore.
## Use State Hook (!! OPTIONAL) Make sure react 16.8 and above

* Change app.js to functional component from class based component
* Use state is the hook that allows us to manage state and a functional component.
* One difference between class based and this funtional based hook is in class based on set state it will merge with the existing state but in functional base update state it will replace the entire state.

```js
import React, { useState } from 'react';
import './App.css';
import PersonImport from './Person/Person';
// For component name use only caps (custom component) , small letter element is default jsx.
const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    setPersonsState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  const nameChangedHandler = (event) => {
    setPersonsState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => switchNameHandler('Maximilian!!')}>Switch Name</button>
        <PersonImport 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age} />
        <PersonImport 
          name={personsState.persons[1].name} 
          age={personsState.persons[1].age}
          click={switchNameHandler.bind(this, 'Max!')}
          changed={nameChangedHandler} >My Hobbies: Racing</PersonImport>
        <PersonImport 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age} />
      </div>
    );
}

export default App;

```






