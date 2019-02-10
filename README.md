# React-2019
Change different branch to get explore.
## Update phase
    * getDerivedStateFromProps
    * shouldComponentUpdate
    * render
    * update child component props
    * getSnapshotBeforeUpdate
    * componentDidUpdate

### getDerivedStateFromProps
you'll not use too often you would use it to initialize the state of a component that updates based on props you're getting so updated props you're getting most likely and it could be for example some form control which gets external properties and then you internally want to handle user input but initialize. Very very rarely we will use but there is more elegant way of doing the same

### shouldComponentUpdate
very interesting hook,  it allows you to cancel the updating process.So here you can decide whether or not react should continue evaluating and re rendering the component. Now why would you do that ???  --> for performance optimization.

compare to current props to your next props to the upcoming props to find out if they changed and if they changed you want to permit this.

```
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }
```

### getSnapshotBeforeUpdate
This is a lifecycle hook that takes the previous props and previous state as input and that actually returns a snapshot object which you can freely configure and this all is a niche lifecycle hook which will not use too much.

```
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }
```

##Implementation

* First convert person  and persons component into class based component.
* in Class based component you can use only this.props .. we cant use properties and this.properties...



