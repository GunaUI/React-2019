# React-2019
Change different branch to get explore.
## Project Structure
* src
    * assets
    * components
        * Persons
        * Cockpit 
    * containers
        * App.js
        * App.css
* index.js
* index.css

## Splitting App into components

* Person.js : onClick={properties.deleteme}  ->  Persons.js : deleteme={() => props.personClicked( index )} -> App.js : personClicked={this.deletePersonHandler}

* Person.js : onChange={properties.heychanged} -> Persons.js : heychanged={( event ) => props.personChanged( event, person.id )} -> App.js : personChanged={this.nameChangedHandler} 

* Cockpit.js : onClick={props.toggleClicked} -> App.js : toggleClicked={this.togglePersonsHandler}

* Move css to respective components.

* Use functional component as much as possible, use few or one stateful component. This will help us to manage easily.

* Refer stateful vs stateless png in folder.