# React-2019
Change different branch to get explore.
## Component Lifecycle

## Creation phase
    * constructor
    * getDerivedStateFromProps
    * componentWillMount
    * render
    * RenderChildComponent
    * componentdidMount

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

```
    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }
```


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

