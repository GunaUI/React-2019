# React-2019
Change different branch to get explore.
## HOC - Higher Order Component
### Method 1
* Return a component with pros as pros.children

```js
    const aux = props => props.children;

    export default aux;
```
* Wrap the multiple adjacent render element with above component

```js
        return (
                <Aux>
                    <p onClick={this.props.deleteme}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.heychanged} value={this.props.name} />
                </Aux>
        );

```
### Method 2

* Return as default Fragment as below

```js
import React, { Component, Fragment } from 'react';

return (
                <Fragment>
                    <p onClick={this.props.deleteme}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.heychanged} value={this.props.name} />
                </Fragment>
        );

```
### Method 3 (with className)

* Return an wrapper with class name
* Create a custom component as below

```js
    import React from 'react';

    const withClass = props => (
        <div className={props.classes}>{props.children}</div>
    );

    export default withClass;
```
* Use  withClass component as below
```js
<WithClass classes={mycssModule.App}>

    ...... 

</WithClass>
```
### Method 4 (With a wrapper for children)

```js
    import React from 'react';

    const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
        <WrappedComponent {...props}/>
        </div>
    );
    };

    export default withClass;
```

* Use the above component as below

```js
import mycssModule from './App.css';
import Aux from '../hoc/Aux'
import withClass from '../hoc/WithClass'
return (
        <Aux>
          <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            toggleClicked={this.togglePersonsHandler} 
          />
          ) : null}
          {personsVar}
        </Aux>
    );

    ....
    .....

export default withClass(App, mycssModule.App);
```








