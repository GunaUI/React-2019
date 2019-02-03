# React-2019
Change different branch to get explore.
* Dynamically change style in component
## Inline style dynamically

```
styleguide.backgroundColor = 'red';
```

## Style className dynamically.
* in render function before return.

```
    const classes = [];
        if ( this.state.persons.length <= 2 ) {
            classes.push( 'red' ); // classes = ['red']
        }
        if ( this.state.persons.length <= 1 ) {
            classes.push( 'bold' ); // classes = ['red', 'bold']
        }
```
* In Html (JSX)

```
className={classes.join( ' ' )}
```
* here join converts array to string.

## Sudo class style selector 

* sudo classes are not css property for that we need to add some third party plugin - radium

```
    npm install --save radium
```
* Next we need to import radium to our component either specific or common component

```
    import Radium from 'radium';
```
* Then before export that component we need to wrap that component with radium component like below

```
    export default Radium(App);
```
* Now we can use pseudo class below example
```
const styleguide = {
    backgroundColor: 'green',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    color: 'white',
    ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
    }
};
```

```
styleguide.backgroundColor = 'red';
styleguide[':hover'] = {
    backgroundColor: 'salmon',
    color: 'black'
};
```
## Radium for media quries

* Without radium also normally with className, we could use media quries in our css

```
@media (min-width: 500px) {
    .Person {
        width: 450px;
    }
}

```
* With Radium we could add media queires with our styleguide constant as below

```
    const styleGuide = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

```
* use the above constant as 

```
style={styleGuide}
```
* !!!! Important - to use radium media queries we need to import {StyleRoot} also from radim

```
import Radium , { StyleRoot } from 'radium';
```
* And also its very important to wrap your component JSX with <StyleRoot> element as below

```
    return (
        <StyleRoot>
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join( ' ' )}>This is really working!</p>
            <button style={styleguide} onClick={this.togglePersonsHandler}>Toggle Persons</button>
            {personsVar}
        </div>
        </StyleRoot>
    );
```

