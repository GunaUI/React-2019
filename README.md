# React-2019
Change different branch to get explore.
* Passing reference between the component.
* In app.js pass props  as clickme={this.switchNameHandler.bind(this, 'Max!')

```js
<PersonImport 
name={this.state.persons[1].name} 
age={this.state.persons[1].age}
clickme={this.switchNameHandler.bind(this, 'Max!')}
changed={this.nameChangedHandler} >My Hobbies: Racing</PersonImport>
```
* In person.js receive those props and add to event onlick onClick={properties.clickme}

```js
import React from 'react';

const personExport = ( properties ) => {
    return (
        <div>
            <p onClick={properties.clickme}>I'm {properties.name} and I am {properties.age} years old!</p>
            <p>{properties.children}</p>
        </div>
    )
};

export default personExport;
```




