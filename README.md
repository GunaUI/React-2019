# React-2019
Change different branch to get explore.
##  Component Update Lifecycle (for props Changes) - Refer
* REFER : ############ !!!!!!!!!!!! http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
* Just as we have a lifecycle for the component creation, we also have one for updating components.
* So when props or state change which are the two triggers you have for a component to be re-evaluated by React,

## Update phase (Refer Persons and person hook for update life cycle hook)
* getDerivedStateFromProps
    * This lifecycle then starts with getDerivedStateFromProps being called, a lifecycle method which you'll not use too often, you would use it to initialize the state of a component that updates based on props you're getting
    * so updated props you're getting most likely and that could be for example some form control which gets external properties and then you internally want to handle user input but initialize your state or update your state based on outside changes
    * actually, you very very rarely need that and often there is a more elegant way of updating your state or of managing your components based on external properties.
    * Nonetheless this hook exists, it's there for you to sync your local state inside of the component to your props you're getting, you should not cause side effects in here so don't send any HTTP requests or anything like that.

* shouldComponentUpdate
    * Thereafter we reach shouldComponentUpdate and that is a very interesting hook
    * so this lifecycle method or hook here is interesting because it allows you to cancel the updating process. So here you can decide whether or not React should continue evaluating and re-rendering the component.Now why would you do that? For performance optimization.
    * This should be used carefully because obviously, you can break your components if you block an update from happening incorrectly but it is very powerful since it allows you to also prevent unnecessary update cycles.
   
* render
     * Now after that, the render method is called and React then goes through the JSX code, evaluates that and basically constructs its virtual DOM and sees if it needs to update the real DOM.
    
* update child component props
    * Now there as always you prepare and structure your JSX code therefore. Now React then goes ahead and updates all child components of this component, so it evaluates all the child components you have in your JSX code of this main component
    * of course every child component then also goes through that lifecycle if it receives new props or state.

* getSnapshotBeforeUpdate
    * This is a lifecycle hook that takes the previous props and the previous state as input and that actually returns a snapshot object which you can freely configure and this also is a niche lifecycle hook which we'll not use too much,
    * you use it for last minute DOM operations but with that, I don't really mean changes to the DOM but things like getting the current scrolling position of the user.
    * So imagine that your upcoming update of your component will re-render the DOM and will add new elements on the DOM and you therefore want to restore the scrolling position of the user wants the update is done. Well then getSnapshotBeforeUpdate can give you that snapshot of the user state,
    * so of the scrolling position right before the update happens and then you can consume and use that snapshot once the update is done to scroll the user back to where he was or anything like that.

* componentDidUpdate
    * And last but not least once we're done with the update, componentDidUpdate is called. A lifecycle hook that signals that you are now done with the updating, that the render method has been executed and here you can now cause side effects, so here you could now make an HTTP request, though you'll have to watch out to not enter an infinite loop here
    * if you make an HTTP request and you get back a response and you then update your component and then this cycle starts again 
    * Now what you shouldn't do here outside of the, let's say then block of a promise of an HTTP request is updating the state with set state. It's fine to do it as a result of some async task you're kicking off here but you should not call it synchronously in componentDidUpdate because that will simply lead to an unnecessary re-render cycle.

### getDerivedStateFromProps
you'll not use too often you would use it to initialize the state of a component that updates based on props you're getting so updated props you're getting most likely and it could be for example some form control which gets external properties and then you internally want to handle user input but initialize. Very very rarely we will use but there is more elegant way of doing the same

### shouldComponentUpdate
very interesting hook,  it allows you to cancel the updating process.So here you can decide whether or not react should continue evaluating and re rendering the component. Now why would you do that ???  --> for performance optimization.

compare to current props to your next props to the upcoming props to find out if they changed and if they changed you want to permit this.

```jsx
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true; // You have to return true if React should continue updating or false if it shouldn't and of course you don't typically hardcode then in here but instead you add some condition where you
        // compare the current props to your next props, to the upcoming props to find out if they changed and if
        // they changed, you want to permit this.
    }
```

### getSnapshotBeforeUpdate
This is a lifecycle hook that takes the previous props and previous state as input and that actually returns a snapshot object which you can freely configure and this all is a niche lifecycle hook which will not use too much.

```jsx
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }
```
## Component Update Lifecycle (for state Changes)

* Most important takeaway, the hook you'll use by far most often will be componentDidUpdate which is after the update finished when you for example need to fetch new data from a server.

* Let's now also have a look at the lifecycle hook for internal changes when the state changes 

```js
    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    // componentWillMount() {
        //   console.log('[App.js] componentWillMount');
    // }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
    }
```

##Implementation

* First convert person  and persons component into class based component.
* in Class based component you can use only this.props .. we cant use properties and this.properties...



