import React, { Component } from 'react';
import mycssModule from './App.css';
import PersonRepeat from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// For component name use only caps (custom component) , small letter element is default jsx.
class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');

    this.state = {
      persons: [
        { id: 'asfa1', name: 'Max', age: 28 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf11', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
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
  render () {
    console.log('[App.js] render');
    let personsVar = null;

    if ( this.state.showPersons ) {
      personsVar = (
        <div>
          <PersonRepeat
            persons={this.state.persons}
            personClicked={this.deletePersonHandler}
            personChanged={this.nameChangedHandler} 
          />;
        </div>
      )
    }
    
    return (
        <div className={mycssModule.App}>
          <Cockpit
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            toggleClicked={this.togglePersonsHandler} 
          />
          {personsVar}
        </div>
    );
  }
}

export default App;
