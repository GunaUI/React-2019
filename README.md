# React-2019
Change different branch to get explore.
* Rendering data conditionally
* Toggle show hide with ternary operator as below

    ```
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
    ```
* React only render the element if condition satisfies.


