import React, { Component } from 'react';
import mycssModule from './App.css';
import PersonRepeat from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux'
import withClass from '../hoc/WithClass'
import AuthContext from '../context/auth-context';
// For component name use only caps (custom component) , small letter element is default jsx.
class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');

    this.state = {
      persons: [
        { id: 1, name: 'Max', age: 28 },
        { id: 2, name: 'Manu', age: 29 },
        { id: 3, name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false,
      showCockpit: true,
      changeCounter: 0,
      authenticated: false
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

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
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

    this.setState((prevState,props) =>{
        return {
          persons: updatedPersons,
          changeCounter: prevState.changeCounter + 1
        }
    });

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
  loginHandler = () => {
    this.setState({ authenticated: true });
  };
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
            isAuthenticated={this.state.authenticated}
          />;
        </div>
      )
    }
    
    return (
        <Aux>
          <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              appTitle={this.props.title}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              toggleClicked={this.togglePersonsHandler} 
            />
            ) : null}
            {personsVar}
          </AuthContext.Provider>
        </Aux>
    );
  }
}

export default withClass(App, mycssModule.App);
