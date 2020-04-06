import React, { Component } from 'react';
// import logo from './logo.svg';
import mycssModule from './App.css';
import PersonImport from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
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
    let styleguide = '';
    let personsVar = null;

    if ( this.state.showPersons ) {
      personsVar = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary>
              <PersonImport
              deleteme={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              heychanged={(event) => this.nameChangedHandler(event, person.id)} />
              </ErrorBoundary>
          })}
        </div>
      )
      styleguide = mycssModule.Red;
    }

    const classes = [];
    if ( this.state.persons.length <= 2 ) {
      classes.push( mycssModule.red ); // classes = ['red']
    }
    if ( this.state.persons.length <= 1 ) {
      classes.push( mycssModule.bold ); // classes = ['red', 'bold']
    }
    
    return (
        <div className={mycssModule.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join( ' ' )}>This is really working!</p>
          <button  className={styleguide} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {personsVar}
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
