# React-2019
Change different branch to get explore.
## Functional Component React Hook

### useEffect
* use a fact basically combines the functionality or the use cases you can cover of all these class based lifecycle hooks in one react hook here.
* useEffect can import and add anywhere inside your functional component body.
* useEffect will take a function and run in every render cycle.

```
import React, { useEffect } from 'react';

useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
    });
```
* The above useEffect will run for all props changes.
#### Controlling the behaviour of useEffect.
* Now use a useEffect can be tricky to use though because right now it runs all the time.It combines component that mount and component to update.

* Now what if we were to send an HTTP request here but we only want to do that when the component is rendered for the first time and not for every render cycle. How  ??.

* Solution is add a second argument to the useEffect the second argument is an array , it might be empty or specific props

* If secific props means it will render only if that particular props change else if empty i will render for the first time and never run again.

```
useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
    }, [props.persons]);
```
* you clould use many useEffect as per your need.

#### Clean up work
* In class based component the componentWillUnmount will do the cleanup work . what about function based component ??
* In function based component we could use return statement inside useEffect that will run after useEffect, remember this also will controlled by the second param. if we did't pass anything cleanup work will run  "before" every useEffect. If it is empty array it will run only if that props completely unmount/destroyed form the dom. If second param has particular data if it changes it will run the useEffect and then it will run the cleanup work.

```
useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // Http request...
        setTimeout(() => {
            alert('Saved data to cloud!');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work ############################# in useEffect');
        };
    }, [props.person]);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });
```
#### Performance Optimisation.
* shouldComponentUpdate return default true will rerender dom always this will affect the performance , we could controll this will the below changes
```
shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        if (nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
    }
```
* Here persons is array (Reference type , please refer the below link for better understanding)

Refer : https://academind.com/learn/javascript/reference-vs-primitive-values/

#### React Memo
* shouldComponentUpdate will work in class based component only what about the functional based component??
* with this requirement here react memo come into picture.
* React memo this basically uses memorization which is a technique where reactwill memorize.So basically store a snapshot of this component and only if it's input changes it will re render it
* otherwise if these inputs do not change and some parent component wants to update this cockpit component
react we'll give back that stored component so therefore now initially does of course runs because there
is no stored data 
* react memo is a great way of also getting optimization for your functional components and thereforeit is a good idea to wrap functional components that might not need to update with every change.

```
    export default React.memo(cockpit);
```

Note: Functional componet use React.memo and in class based component use shouldComponentUpdate , is it necessary for all component ?? that  based on your decision.

#### PureComponent

* If you want to render dom if in case data/function changes no need to check all params in shouldComponentUpdate , we could remove shouldComponentUpdate and then extend your class form PureComponent this has the inbuilt params compare.

```
import React, { PureComponent } from 'react';
class PersonRepeat extends PureComponent {
    ......
}
```



