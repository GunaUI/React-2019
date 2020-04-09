# React-2019
Change different branch to get explore.
### Comparing Stateless and Stateful Components
* let me dive into that stateless versus stateful or presentational versus container component thing again because that is really important to understand when working with React

* Now we're referring to stateful components when we're managing state in them, like we're doing in the app.js. We got state here and we're calling set state to change that state.

* Now a functional component that manages its own state with the useState would of course also be a stateful component

* so stateful does not automatically mean class-based component, though historically this has been the case because React hooks like useState are a really new feature and therefore, you will still find plenty of applications where state is only managed in class-based components.

* Still since React 16.8, stateful is not automatically a class-based component. It is a component that manages state with the useState hook.

* now what is a presentational component? It is a functional component that does not manage state. 

* Even though you could with useState, it is still a good practice to restrict yourself to a couple of components that are involved in the state management and of course, a couple depends on how big your app is

* in big apps that can easily be hundreds of components but the majority of your components should be presentational, stateless components, so functional components that don't manage state.

* So having a lot of dumb or presentational components is a good idea.

* The more you work with React, the more you'll get a feeling for which component now should manage some state so that its child components get the right inputs and which components would better be just presentational components

### Class-based vs Functional Components

* With class-based and functional components, it's important to understand which kind of component can do what, what their history is and what their future is.

* So class-based components, with that I simply mean components that extend that component object we can import from the React package and functional components are simply these functions that take props and return some JSX code.

* Now these components do differ when it comes to managing state and to something called lifecycle hooks.. which we will see soon..

* Class-based components can access state and they can change it with set state and they also can use these lifecycle hooks as you will learn.

* Functional components, there it's a bit tricky. In the past before React hooks were introduced, they couldn't manage state but since React hooks were introduced, they can with the useState hook. So access to state is actually possible but lifecycle hooks are still not supported.

* Functional components are way more powerful than they have been in the past though and the difference between class-based components and functional components therefore is way less strong than it used to be.

* Now regarding the way we access state and also props, it's important to know that in class-based components, you need the "this" keyword because state and props are properties of the component class

* In functional components, you get props as an argument and therefore you can just use propd no need to use this.props

* So when should you use what? When you're using a version of React that doesn't support React hooks, the answer is simple. When you're working with state or you need lifecycle hooks, use the class-based approach. If you're in a project that uses React hooks, it's less simple.

* Now the app.js file here simply doesn't receive any props or the app component doesn't receive any props but we can change this. In our index.js file,
```js
ReactDOM.render(<App appTitle="Relevant Persons" />, document.getElementById('root'));
```
* you can access this props in app.js render function as

```js
render () {
   
    return (
          <Cockpit
            title={this.props.appTitle}
          />
    );
  }
```
## Component Lifecycle

* what is the component lifecycle?

* The first important takeaway is, it's only available in class-based components.You will actually learn that functional components when using React hooks have an equivalent you could say but generally, it's only available in class-based components,
  * constructor()
  * getDerivedStateFromProps()
  * getShapshotBeforeUpdate()
  * componentDidCatch()
  * componentWillUnmount()
  * shouldComponentUpdate()
  * componentDidUpdate()
  * componentDidMount()
  * render()



Refer : https://blog.bitsrc.io/understanding-react-v16-4-new-component-lifecycle-methods-fa7b224efd7d

## Creation phase (order of componenet create phase)

* the lifecycle that runs when a component is rendered for the first time because it's rendered as part of a list or because we only conditionally show it.

    * constructor()
        * Now this is actually not a React lifecycle hook, instead it's a default ES6 class feature, the important thing there is this constructor will     receive the props of this component and you have to call super props in the constructor.
        ```js
        class App extends Component {
          constructor(props) {
            super(props);
          }
        }
        ```
        * Now what is the constructor therefore? You can do it for basic initialization work, for example for setting an initial state.
        * What you shouldn't do here is cause side effects. ie like sending a HTTP request or storing something in your local storage of the browser or sending some analytics to Google analytics.You don't really want to do things like that in the constructor because that can impact performance and cause unnecessary re-render cycles which of course are pretty bad and you want to avoid

    * getDerivedStateFromProps()
        * After the constructor, getDerivedStateFromProps runs. That is a lifecycle hook that was added With React 16.3
        * the idea here is that whenever your props change for your class-based component, you can sync your state to them and that will actually be very rare cases,
        * let me be very honest, you'll not use that lifecycle hook a lot but if you have some scenario where props of your component can change and then you want to update some internal state of that component, then this is the hook to use 
        * Now what you shouldn't do in there still is causing side effects, don't send HTTP requests in that hook, there are better places for that

    * render()
        * Now after these two hooks, the render method executes. We already know that, that is the method that returns JSX and that is really its job. You should use it only to prepare the data as you need it to lay out your JSX code and to render the HTML code so to say.
        * What you still shouldn't do in there is send HTTP requests or set any timeouts, so nothing which can block this rendering process.

    * RenderChildComponent()
        * Now when render runs and you do render any other React components in this class-based component, then these child components will now be rendered. So every child component you included in your rendered component here will then be rendered as well and only once all child components were rendered and that their lifecycle looks finished

    * componentdidMount()
      * your lifecycle hook here will finish for the creation when componentDidMount gets called. componentDidMount is a very important lifecycle hook which you'll use a lot when you're working with class-based components because here, you can cause side effects.
      * That is a typical hook you would use for making an HTTP request to get new data from the web.
      * What you shouldn't do in here is update the state, so don't call set state in here unless it's in,let's say the then block of a promise after you sent an HTTP request but don't call set state in here synchronously. So you can definitely set up some code that executes in the future which then updates the state,
      * for example when the response from the server is back but don't do it right away when componentDidMount runs that you immediately call set state because that will trigger a re-render cycle and that is bad for performance.

    * componentWillMount()
      * there were other hooks as well and these are still supported I'm saying was even though it still exists because whilst you can use it it's not insecure and nothing like that, these hooks were very rarely used and could be used incorrectly and therefore they will be removed in the future.
      * That was executed right before the componentWouldMount and indeed it would be hard to explain what kind of work you do in here, generally it would be something like preparing your state correctly and that is something you would now do in the getDerivedStateFromProps and both were actually relatively seldom to be used and therefore this will be removed
      * or if you just want to set some initial state based on props, use the constructor!
      
* Refer App.js ###************
### Constructor

The constructor gets executed and the constructor actually is a default ES6 classfeature,

it's not a method defined by react, what react does though is it creates the component in the end,

So it instantiates it and it parses on any props this component receives to the constructor.

if we do implement the constructor method we do have to call super and pass on props, this calls the

constructor of the parents class, and since we can only implement this method in stateful components, the parent class is this component.

object we imported from react. And by calling super and passing on props, things like this.props which

we then need to use anywhere else in the component get populated or managed by react.

So always call super and pass on props if you implement the constructor. 

What else may you do here and that of course is optional,

you may initialize the state in the constructor,

we did this by simply defining a state property

but you could also define this property here in the constructor and in older code snippets which had

access to the new javascript features we were using,

You saw that your comment

did initialize state in the constructor.

What you should never ever do there is cause side effects.

What are side effects? For example reaching out to a web server,

so requests which come back and then edit the state of your application, that is the side effect.

You should not do that in the constructor because this may lead to a re-rendering of your applicationand hence to performance issues,

it may also lead to your state becoming unpredictable.

#### super(props); 
    This will basically execute the constructor of the component you're extending.
You could initialise your state with this.state in constructor.

### getDerivedStateFromProps

*  this actually is a so-called static method, so you have to add the static keyword in front of it. This is just important for React so that React can execute this correctly.

```js
    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }
```
* you should return your updated state


### ComponentWillMount (LEGACY - Will be removed in future)

After constructor, another function gets executed, this function is the componentWillMount method.

Now this is a method defined by react and it is available because we extend that component from the

react library. componentWillMount exists for historic reasons mainly, you don't really use it that

often anymore.

If you use it, you want to use it to update your state here, or do some last minute optimizations but still you shouldn't cause side effects here,

you shouldn't reach out to the web.

Now as I mentioned, you don't really use it that often anymore,

it still exists but chances are you won't implement it in your application. 

### render

After componentWillMount, the component will render.

Now executing the render method does not mean that it accesses the real dom,

I will come back to how exactly react renders the real dom and updates to dom in this module again.

For now, you should know that render, executing the render method gives react the idea of what it should

render, how it would look like

if it then reaches out to the real dom and manipulates it,

depends on what does real dom looks like already.

If no changes need to be made, it doesn't go ahead and re-rendered it anyways.

But the render method is an important step because it clearly defines how your application or how this

component should look like from a html perspective.

So it's in the render method where you prepare and structure your jsx code, defining which content gets

rendered for this component.

### RenderChildComponent

Now thereafter, react of course also knows which child components this component has, because in

the end once you call render and define your jsx code it also knows which components you included in

there, like the persons component in our demo project.

So it will then go ahead and render all these child components,

### componentDidMount

Basically executing this process for every child component and thereafter it will call componentDidMount to basically tell you that this component was successfully mounted.

Now there in componentDidMount,

you can cause side effects, this is the point of time where you want to reach out to the web for example to fetch some data.

What you shouldn't do here is update the state though because that will trigger a re-render so that is

something you have to keep in mind,don't call this.setState in componentDidMount,this will trigger a re-rendering .

