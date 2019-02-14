# React-2019
Change different branch to get explore.
## Understanding Props chain 
* If we need to pass properties from parent to particular child component , we need to pass data through all the layers of child.This is not good.
* Solution - createContext , Lets say to send data from A component to E component without pass through B,C,D
* First step : Create a context with any data you want to use globally (!! where ever you need).

```
import React from 'react';

const authContext = React.createContext({
    authenticated: false,
    login: () => {}
});

export default authContext;
```
### Provider - Now wrap this a provider wherever it needs

```
import AuthContext from '../context/auth-context';

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
        >
          {this.state.showCockpit ? (
            <Cockpit
              appTitle={this.props.title}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              toggleClicked={this.togglePersonsHandler} 
            />
            ) : null}
            {personsVar}
          </AuthContext.Provider>
        </Aux>
    );

```
### Method 1 - Consume Context - Class based component

```
import AuthContext from '../../../context/auth-context';

// Use the same name (contextType) as below don't change this is static

static contextType = AuthContext;
```
* Now you can wrap as per your need 

```
{this.context.authenticated ? (
    <p>Authenticated!</p>
    ) : (
    <p>Please log in</p>
)}
```
* Now you access this inside your componentDidMount hook also

```
componentDidMount() {
        console.log(this.context.authenticated);
}
```
### Method 2 - Consume Context - functional based component

* Import the useContext hook

```
import React, { useEffect, useRef, useContext } from 'react';
mport AuthContext from '../../../context/auth-context';
```
* Create const for useContext - you can use any name not necessary (authContext)

```
const authContext = useContext(AuthContext);
```
* Now you can use as you need

```
<button onClick={authContext.login}>Log in</button>
```




