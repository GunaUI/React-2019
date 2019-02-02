import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PersonImport from './Person/Person';
// For component name use only caps (custom component) , small letter element is default jsx.
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }
  togglePersonsHandler = () => {
    console.log('togglePersonsHandler');
    this.setState({showPersons: !this.state.showPersons});
  }
// avoid below onClick - this is inefficient
  render () {
    const styleguide = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={styleguide} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {
          this.state.showPersons ?
          <div>
          <PersonImport 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <PersonImport 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            clickme={this.switchNameHandler.bind(this, 'Max!')}
            heychanged={this.nameChangedHandler} >My Hobbies: Racing</PersonImport>
          <PersonImport 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
        </div>
        : null
        }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
