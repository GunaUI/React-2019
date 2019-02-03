import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PersonImport from './Person/Person';
// For component name use only caps (custom component) , small letter element is default jsx.
class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }


  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    const editedPerson = {
      ...this.state.persons[personIndex]
    };

    editedPerson.name = event.target.value;

    const updatedPersons = [...this.state.persons];
    updatedPersons[personIndex] = editedPerson;

    this.setState( {persons: updatedPersons} );

  }
  togglePersonsHandler = () => {
    console.log('togglePersonsHandler');
    this.setState({showPersons: !this.state.showPersons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
// avoid below onClick - this is inefficient
  render () {
    const styleguide = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      color: 'white'
    };
    let personsVar = null;

    if ( this.state.showPersons ) {
      personsVar = (
        <div>
          {this.state.persons.map((person, index) => {
            return <PersonImport
              deleteme={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              heychanged={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      )
      styleguide.backgroundColor = 'red';
    }

    const classes = [];
    if ( this.state.persons.length <= 2 ) {
      classes.push( 'red' ); // classes = ['red']
    }
    if ( this.state.persons.length <= 1 ) {
      classes.push( 'bold' ); // classes = ['red', 'bold']
    }
    
    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join( ' ' )}>This is really working!</p>
          <button style={styleguide} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {personsVar}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
