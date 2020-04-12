# React-2019
Change different branch to get explore.

## Setting State Correctly
* Now the good news is we're using set state correctly here, bad news is you can use it incorrectly but I will show you how and how to avoid it.
* So how could you use it in an invalid way?
* Let's say that whenever our name changes and we execute the name changed handler, we want to count that, so we essentially count every keystroke made or every change made.
* So in our name changed handler here, we would not just want to update persons but also some counter we keep track of
* Now therefore we can of course add a counter to our state object, here change counter and that starts at 0 and in named changed handler, we now call set state and we set change counter equal and now of course this always depends on the old state,

* Because we want to increment it by one, so we need the old change counter plus one and therefore of course we can say this state change counter plus one and now we have a setup where we should increment the change counter. 

```js
//Wrong method don't do like this
this.setState({
    return {
        changeCounter: this.state..changeCounter + 1
    }
});
```
* If I save this, let me bring up the React developer tools so that we can actually inspect our current state of the app component. So there we see the change counter and if I toggle my persons and I start typing here, xyzxyz..., you see this go up and you see that go down.

* So it seems to work, right and yet it is the wrong way of updating this. 

* Behind the scenes, set state does not immediately trigger an update of the state of this component in a re-render cycle,instead it's basically scheduled by React and React will then perform the state update and the re-render cycle when it has the available resources to do that,so when it basically decides that now is a good point of time to do that. Typically, that will of course be instantly especially in simple applications like this one but it's not guaranteed

* You call set state synchronously here but it's not guaranteed to execute and finish immediately 

* Let's say you're also calling set state somewhere else in your application which happens almost simultaneously to this set state update and for some reason, this does not execute immediately and the other set state update finishes earlier,

* better way of updating state when you are depending on the old state

* Set state does not only take a Javascript object, it also works when you pass in a function, so you can use either syntax.

* Now when you're doing state updates that don't depend on the old state, there is nothing wrong with just passing the object, so without the change counter, this is perfect.

* With the change counter however, you should use that optional syntax 

```js
// this is the better way to update change counter 
this.setState((prevState,props) =>{
    return {
        changeCounter: prevState.changeCounter + 1
    }
});
```

## Using PropTypes

* Now that we know how to update the state correctly, let me also explore how you can improve the way you're receiving props.

* you can be more clear about which props your component uses and to also throw an error or a warning if you try to pass in incorrect props

* Now if you are working on your own application and you're working alone, that is not really that important because you obviously know which props your components take but if you're building a library that you want to distribute to other people, let's say via npm or you're working in a bigger team, then you might have scenarios where people start using your component incorrectly because they don't know that age should be a number, maybe they try to pass in a string, wouldn't matter too much here but let's say you're using it in a calculation, then it might matter

* So it can help if you provide some instructions on which props these components accepts and which type of prop each prop should be, so that name should be a string and age maybe should be a number or whatever you need.

* And you can do this by importing or by installing an extra package

```js
npm install --save prop-types
```
* That is provided by the React community or by the official React team actually and it's not built into React core but it is part of React so to say, it's just an extra installation away because it's optional to use

```js
import React, { Component, Fragment } from 'react';
// here ..
import PropTypes from 'prop-types';
import withClass from '../../../hoc/WithClass'
import mycssClassModule from './Person.css';


class PersonExport extends Component {
    constructor(props) {
        super(props);
    }
   
    render() {
        console.log('[Person.js] rendering...');
        return (
                <Fragment>
                    <p onClick={this.props.deleteme}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input type="text" 
                    onChange={this.props.heychanged}
                    value={this.props.name} />
                </Fragment>
        );
    }
}
// here ..
PersonExport.propTypes = {
    deleteme: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    heychanged: PropTypes.func
};
export default withClass(PersonExport, mycssClassModule.Person);
```

* Let me now show you how to break it by going to app.js and there in the state which ultimately is the data we pass into the person component,let me switch that age of Max to a string

## Using Refs

* In person component, we have that input where we can change the name of a person, right? Now the approach or the way of changing this is absolutely fine here,

```js
<input type="text" onChange={this.props.heychanged} value={this.props.name} />
```
* however if you want to get access to an HTML element like this input but actually what I'm about to show you works with any HTML element, with any JSX element I should say here, then you are not limited to setting up two-way binding because that of course is nice for getting the value you entered but let's say you want to focus that input, let's say when we render all our persons here, the last person should automatically receive focus.

* Well then this is kind of hard to do here right, how do we focus this?

* React actually has an easier way for us to select an element, a concept called refs which stands for references.

* On any element and that does really mean not just on inputs but on any element including your own components, you can add a special ref keyword. Now ref, just like key, is a special property you can pass into any component, it is detected and understood by React.

* Now ref can be used in a couple of different ways and here is way number one which is supported in older versions of React too.
```js
class PersonExport extends Component {
    constructor(props) {
        super(props);
        //here..
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        if (this.props.age === 29){
            //here..
            this.inputElementRef.current.focus();
        }
    }
    render() {
        console.log('[Person.js] rendering...');
        return (
                <Fragment>
                    <p onClick={this.props.deleteme}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input type="text" 
                    onChange={this.props.heychanged}
                    //here..
                    ref={this.inputElementRef}
                    value={this.props.name} />
                </Fragment>
        );
    }
}
export default withClass(PersonExport, mycssClassModule.Person);
```
## Refs with React Hooks

* Now this how you can use refs in class-based components. What about functional components, how do you use references there, is it possible there?

```js
// **** we need to import useRef
import React, { useEffect, useRef } from 'react';

import cockpitCssModule from './Cockpit.css';

const cockpit = ( props ) => {
    // **** creating toggleBtnRef here ..
    const toggleBtnRef = useRef(null);
    //Just like component did mount and component did update, its basically runs after every render cycle
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        // setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);

        // **** trigger toggleBtnRef click immediate after page loads here ..
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work ############################# in useEffect');
        };
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });

// useEffect();
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = cockpitCssModule.Red;
    }

    if ( props.personsLength <= 2 ) {
        assignedClasses.push( cockpitCssModule.red ); // classes = ['red']
    }
    if ( props.personsLength <= 1 ) {
        assignedClasses.push( cockpitCssModule.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={cockpitCssModule.Cockpit}>
            <h1>{ props.appTitle }</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.toggleClicked}>Toggle Persons</button>
        </div>
    );
};

export default React.memo(cockpit);
```

## Understanding Prop Chain Problems

* we'll now dive into another exciting feature React offers you that can help you avoid overly long chains of passing props around. Now what do I mean by that?

* if you want pass some data to its child this needs to be passed from parent down to its child.. we're passing down props across multiple levels and for example, the persons component really only forwards the authentication status. It receives is authenticated as a prop but it doesn't really care and this is not so great because it simply leads to extra redundancy and it makes our components a bit less reusable because wherever we're using the persons component, we have to make sure we pass in is authenticated so that we can forward it and there, we have a feature called context which helps us solve the issue

* Context was introduced by React and it helps us handle cases like this, where you need certain data, certain state in multiple components and you don't want to pass that state across multiple layers of components just to get it from component A at the top to component D at the very bottom when the components B, C in between don't really care about it

* and that's exactly the use case here. We want to skip the persons component and with the React context feature, we can do that. How does it work then?

## Using the Context API - contextType & useContext() (React 16.6)

* for example here I'll set authenticated to false and I'll also add a login method here.

```js
// context/auth-context.js
import React from 'react';

const authContext = React.createContext({
    authenticated: false, // default value
    login: () => {} // default method
});

export default authContext;
```
* However this method will not do anything, it's an empty anonymous function and I'm adding this here because if I initialize my default value with everything I want to be able to access on this context from different components in my application, then I actually get better auto-completion from the IDE and that's the only reason

* and I don't really care too much about that default value here otherwise because now that authContext will be used in app.js and I will show you how to use it there and why doesn't matter what you set as a default value

* Now authContext can be used as a component and it should wrap and that's important, it should wrap all the parts of your application that need access to this context.

```js
//app.js
import AuthContext from '../context/auth-context';


state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };


  loginHandler = () => {
    this.setState({ authenticated: true });
  };


...
....

 render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
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
        //   Now this is in my context object that can now be accessed from cockpit and persons because they are inside of the provider wrapper
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }


```

* So let's now access this inside of persons, how can we get access to our authContext here?

```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
// here...
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
    // here...
  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log('[Person.js] rendering...');
    // here ....
    return (
      <Aux>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please log in</p>
        )}

        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          // ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);

```

* Now we have to use this loginHandler function for that ..

```js
// here ....
import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.css';
// here ....
import AuthContext from '../../context/auth-context';

const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  // here ....
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    // setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  // useEffect();

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }
    // here ....
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(Cockpit);

```