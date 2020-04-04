# React-2019
Change different branch to get explore.
* Rendering data conditionally Part 2 (recomended)
* Toggle show hide with javascript  variable in render function before it return like below

```js
let persons = null;

    if ( this.state.showPersons ) {
      persons = (
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
      )
    }

```
```js
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={styleguide} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
```


