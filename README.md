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
    ],
    otherState: 'some other value'
  });

//   So we can call useState again and there if we wanted to manage our other state, we could pass in our other state, some other value object here or if all we want to manage is a string, we could also just pass in that string as a default value,

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    // instead of this set state, it's now just setPersonsState
    setPersonsState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ],
      otherState : personsState.otherState  // this is not recommended way of doing..

    //   Now this is one way of doing it but the more elegant way is actually to not manually merge your states but instead use useState multiple times, whereas in class-based components, you only have one state property and this set state automatically merges changes with the old state to not discard any state, here you can have multiple useState calls.
    } )
  }

  const nameChangedHandler = (event) => {
    // instead of this set state, it's now just setPersonsState
    setPersonsState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ],
    } )
  }
    // We removed this.switchNameHandler and changed to switchNameHandler beacuse now its not class based component
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

* So now we have these two things, persons state gives you access to this object, so therefore in all the places where we previously used this state, we now replace this state in all these places with persons state because this state doesn't exist anymore, it only exists in class-based React components and we have no such class-based React component here anymore, it's a functional component.

* set persons state allows us to set a new state 

* As i said There is one important difference to the state in a class-based component though, it generally looks like it works the same but it doesn't.

* that is super important. When you're using React hooks, your function here which you get as the second element (setPersonsState) in that array does not merge whatever you pass to it with the old state, instead it replaces the old state with it and this is super important because this means that whenever you're updating the state like this, you have to manually make sure you include all old state data.

###  Stateless vs Stateful Components

* either way, no matter if you're creating a component with the class keyword or as a functional component, if you are managing state in it, either with the state property and this set state or with the React useState hook, no matter which of the approaches you're using, you can differentiate your components in stateful and stateless components

* A stateful component is a component that manages state, no matter if it's using the useState hook or a class-based approach with the state property. 

* it is a good practice to use as many of these stateless, dumb, presentational components as possible in your application.

* But the idea is that you restrict yourself to a setup where you have way more functional presentational components than stateful components. Now why? Because this makes your app easier to maintain and manage.

* You have a clear flow of data and it's very clear where your main logic sits and where your data changes and then is distributed to the rest of your app.

* If every component in your app manages its own state, you quickly end up with spaghetti code where everyone is doing everything and that can make your app very hard to reuse, to maintain and so on.



