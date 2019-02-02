# React-2019
Change different branch to get explore.
* Outputting data in List
* Es6 Map function used to repeat the array list and form list of elemensts
```
    {this.state.persons.map((person, index) => {
            return <PersonImport
                deleteme={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                heychanged={(event) => this.nameChangedHandler(event, person.id)} />
        })}
```
### Delete a list
* ID is mandatory in list. without Id it will through error.
* This deletePersonHandler approach has flaw .
```
    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }
```
* The flaw of this approach is that in javascript, objects and arrays are reference types,
* so when I get persons from my state as I do here I actually get a pointer to the original person's object
* A good practice is to create a copy of your persons array before manipulating it and a simple way of doing this is by calling the slice method. Slice without arguments simply copies the full array and

```
    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons.slice();
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }
```
* More better way An alternative to this approach would be to use it a ES6 feature, the spread operator. 

```
    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }
```

### Flexible List
* List wise update element
```
nameChangedHandler = (event,id) => {
    //Find index of edited element
    const personIndex = this.state.persons.findIndex(person => {
        return person.id === id;
    });

    //Create copy of edited element
    const editedPerson = {
        ...this.state.persons[personIndex]
    };
    //Update the value to the person name
    editedPerson.name = event.target.value;

    // Again create copy with old value
    const updatedPersons = [...this.state.persons];

    // update the old copy with new value
    updatedPersons[personIndex] = editedPerson;

    // Set currents updated state.
    this.setState( {persons: updatedPersons} );

}
```

