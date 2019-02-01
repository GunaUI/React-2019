import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import PersonImport from './Person/Person';
// For component name use only caps (custom component) , small letter element is default jsx.
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <PersonImport name="Guna" age="28" />
        <PersonImport name="Advik" age="29" >My Hobbies: Racing</PersonImport>
        <PersonImport name="Krishna" age="26" />
      </div>
    );
  }
}

export default App;
