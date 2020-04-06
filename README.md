# React-2019
Change different branch to get explore.
## CSS Module Pseudo
* Advantage of css module is  that you no longer have to worry about naming conflicts or collisions in your CSS. All your CSS is now locally scoped to the component you're using it in.

### STEPS
* run the below script

```js
    npm run eject
```
* Add the below line in your webpack.config.js (search exclude: cssModuleRegex,) and replace the below changes

```js
    exclude: cssModuleRegex,
    use: getStyleLoaders({
        importLoaders: 1,
        modules: true,
        localIdentName: '[name]__[local]__[hash:base64:5]'
        
    }),
```
* Now you can use css as Module like below

```js
import mycssModule from './App.css';


<div className={mycssModule.App}>


classes.push( mycssModule.red );
```

By the way, if you somehow also want to define a global (i.e. un-transformed) CSS class in such a .css  file, you can prefix the selector with :global .

```js
Example:

:global .Post { ... } 

```

Now you can use className="Post"  anywhere in your app and receive that styling.

### CSS Module Pseudo class
* in css file add as normal css selector and sub selector
```js
.App button {
    background-color: green;
    font:inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    color: white;
}
.App button:hover {
    background-color: lightgreen;
    color: black;
}
.App button.Red {
    background-color: red;
}
.App button.Red:hover {
    background-color: salmon;
    color: black;
}
```
* Eventhough its coded witj subselector you can use this as sperate also like below

```js
styleguide = mycssModule.Red;
```
* Please media query and clear idea refer files for more.

### Working with the React Developer Tools

* Refer : https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en

* Once you added them you probably need to restart chrome and thereafter in the Chrome developer tools. You should find queue entries here components and profiler with this react symbol next to them.

* And if you click on components you'll see a representation of the react components currently rendered on the screen.

###  Using Error Boundaries (React 16+)

* Create a new component ErrorBoundary.js

```js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>;
        } else {
            return this.props.children;
            // that's important when accessing prop's in a class component, you need to add this in the front of it just as you did with state.
        }
    }
}

export default ErrorBoundary;
```
* componentDidCatch, this is a method which receives potential error and some additional information passed into it automatically by react and componentDidCatch will be executed whenever a component we wrap with the error boundary throws an error,

* So now this.props.children is whatever we wrap inside of error boundary, this should be our default case but if we get an error thrown by something we wrap inside error boundary, this method here will fire and hasError will be set True and hence we can return this.

* Let's now start using it.

```js
//App.js
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
...
..
 return <ErrorBoundary key={person.id}>
              <PersonImport
              deleteme={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              heychanged={(event) => this.nameChangedHandler(event, person.id)} />
              </ErrorBoundary>
```
* After wrapping this make sure you have key attirbute in the errorboundry component

* This does not mean that you should cluster your whole application with error boundaries, only use them when it makes sense. So basically only use them if you have some code you know that it may fail, don't wrap any other code because if normal code fails, you as a developer probably made a mistake during development, only use error boundaries for cases where you know that it might fail and you can't control that.

* Then this might be a nice tool for production to show a custom error message and not have the whole application fail, because the react application will then actually still work fine and only the problematic component will be replaced with your custom error message. So error boundary is a nice tool to know, not a tool to use anywhere in your application