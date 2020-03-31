# React-2019

## Section 3: Understanding the Base Features & Syntax

### Module Introduction

* let's dive into all the core react concepts and the base syntax of react.

### The Build Workflow

* Optimised code , Use Next Gen Javascript, 

* Use Dependency Management tool npm or yarn
* Use Bundler - Webpacl
* Use Compiler (Next Gen JS) - Babel + Present

###  Using Create React App

* Refer : https://github.com/facebook/create-react-app

* to use npm you need to install node js.

### Understanding the Folder Structure

* So let's know walk through all the files and folders we have here. On the root level, we get a couple of configuration files, these lock files here can basically be ignored,they're just locking in the versions of the dependencies we're using, 

* the general dependencies our project has are defined in the package.json files.

* And then you can see we have three dependencies in this project and this was all created by create react app.

* As you can see, we obviously import react, react scripts as I mentioned is a package offering all this build workflow, this development server, the next generation javascript feature support and all these things we're using in this project. 

* In the package.json file, there was a couple of scripts defined, you can run these scripts with npm run and then the script name.

```css
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

* The public folder is more interesting, it's basically the root folder which gets served by the web server in the end

* Here we got one important file index.html, this is a normal html page and it is the single page we have here. We will never add more html pages in this project, if you are creating a multi page project you would create multiple such projects here with create react app, you wouldn't add more html files here or you need your own workflow if you want to do that.

* So this is the single page, where in the end our script files will get injected by that build workflow which is why you don't see a script import here and you can edit this file but we won't write any html code here.

* I want to highlight this div here with the ID root, this will become important because this will be where we actually mount our react application later

* he manifest.json file is there because create react app gives us a progressive web app out of the box, a very basic one at least and gives us this manifest.json file where we can define some meta data about our application.

* Interesting for us is this source folder, here we get a couple of files and these are actually the files we will work in, this is actually our react application.

* Most important for us right now, the index.js file gets access to this root element in our dom, in our html file, so the element with the ID root which of course is this div we saw in the index.html file, this one, and there as you can see it, it renders our react application with the render method.

```js
ReactDOM.render(<App />, document.getElementById('root'));
```

* Now here is a reference of some app object or element which we import from an app file, the extension .js is left out because it's automatically added by our build workflow 

* if we have a look at this app.js file therefore, this is where we see our first and only react component we have in this starting project right now.

```js
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <PersonImport name="Guna" age="28" />
        <PersonImport name="Advik" age="29" >My Hobbies: Racing</PersonImport>
        <PersonImport name="Krishna" age="26" />
      </div>
    );
  }
}

export default App;
```

### Understanding Component Basics

* As I explained, react is all about creating components, basically custom html elements you could say, which you can then use to construct your application.

* This app component actually gets used in the index.js file where you render it into the place of this root element.(index.js)

* Typically, you render one root component,and in there you would nest all the other components your application might need and of course these components can then also be nested into each other but all the way up to the top, you only have one root component. 

* here we see one way, one of two ways of defining a react component.

* We create a javascript class with the class keyword and then we use the extends keyword to inherit from this component object or class to be precise which is imported up here from the react library.

*  I will soon show you a different way of creating components though.

* Now this class has one method, the render method. It needs to have that because react will call this method to render something to the screen.

* There is one important job every react component has to do, it has to return or render some html code which can be rendered to the dom to the screen.

* You can do other things in there too, reach out to the internet, do some calculations, listen to events, whatever you need in your application we will see all of that in that course but you always also need to render some html to the dom, this is so important to keep in mind.

* We then export this app class as the default export of this file, this is an ES6 feature and simply means if you import this whole file, you'll simply import this class because it's the default export.

* One side note, you might also see these components with .jsx as a file extension instead of js, the reason for this is code here. I referred to it as html which is returned. But in the end, this is not html, it looks like it but it is jsx so it is javascript looking a bit different, and this can be confusing at first when you are learning react, this might be one of the most confusing things actually. Important to know is this is just some syntactical sugar, it was basically invented by the react team and we can write it in our javascript files because of the build workflow we're using here, it will basically automatically transpile it to valid javascript in the end.

### Understanding JSX

* we just wrote here with react create element and the nested react create element is the exact equivalent of this jsx code and it's actually to what this code here will get compiled by one of the many build tools we get out of the box in this project. It is the reason why we need to import react even though we're not using it at all

* in our jsx code, we added a css class with class name not with class by the way.

### JSX Restrictions

* For example this class name thing here, jsx clearly looks like html and it should, it should allow us to write html-ish code in our javascript files, still since it isn't a javascript file and since it is javascript, some words can't be used. Class for example, which we would use in normal html to assign a css class can't be used because it's a reserved word in javascript,

* As you can see in our final code,this is translated to class though, it's not class name here once it has been rendered. 

* Now another restriction we face is our jsx expression must have one root element.

### Creating a Functional Component

* that react's all about components, you build your application with components and react as a library which makes building these components so easy.

* I want to create a component and we already did this, actually we got this out of the box in the app.js file by extending the component class from the react library. We can absolutely use this approach and it will become more important later when you learn also about state which basically allows you to change your component at runtime you could say.

* But most of the time, you should use a different form of component or of creating components, a better function, a simple javascript function, because in its simplest form a component is just a function which returns some jsx, some html you could say. 

* You could also use the ES5 syntax of creating a variable which holds a function which in the end would result in the same.

* , we need to import react because keep in mind this jsx syntax is transformed to react create element and to be able to call this method we need to import react, we don't need the component though because here we're not using a class which extends component, instead we're creating a function.

```js
import React from 'react';

const personExport = ( properties ) => {
    return (
        <div>
            <p>I'm {properties.name} and I am {properties.age} years old!</p>
            <p>{properties.children}</p>
        </div>
    )
};

export default personExport;
```


* When creating components, you have the choice between two different ways:

* Functional components (also referred to as "presentational", "dumb" or "stateless" components - more about this later in the course) => 
```js
const cmp = () => { return <div>some JSX</div> } (using ES6 arrow functions as shown here is recommended but optional)
```

* class-based components (also referred to as "containers", "smart" or "stateful" components) => 
```js
class Cmp extends Component { render () { return <div>some JSX</div> } } 
```

### Outputting Dynamic Content

* Refer above functional and class component

```js
import React from 'react';

const person = ( properties ) => {
    return (
        <div>
            <p>I'm Persom and I am {Math.floor(Math.random() * 3)} years old!</p>
        </div>
    )
};

export default person;
```

### Working with Props

* Refer above functional and class component

### Understanding the "children" Prop

* Refer above functional and class component

* {properties.children} -> We can simply do that by using single curly braces to put something dynamic, accessing props and then here, the special children property. This is a reserved word, we didn't pass anything as children on our persons, we only pass name and age. Children refers to any elements and this includes plain text as we have it here between the opening and closing tag of our component,

* and you could nest complex hmtl code in-between too.This doesn't have to be just text, could be unordered list with multiple list items, could be other react components, anything 

### Understanding & Using State

* In the last lectures we had a look at props, props simply an object giving us access to all the attributes we pass to our own components.

* Now sometimes you don't want to get some information from outside but you want to have it inside a component and change it from inside there too.


```js
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
        <PersonImport name="Guna" age="28" />
        <PersonImport name="Advik" age="29" >My Hobbies: Racing</PersonImport>
        <PersonImport name="Krishna" age="26" />
      </div>
    );
  }
}
```

* if we click it simply switches one of the names we use here, so where we simply put a caption of switch name maybe. first of all, we need to define these names here in a non-hardcoded way. so when we click 

* Right now it's hardcoded into our JSX code and this is okay here but if we later want to change it, we have to store it in some variable or something like that.

* Well this actually is a class and a class has properties, this is not just the case in Javascript but in other programming languages too.

* There is one special property you can define in any stateful component which extends component. not in presentational component

* we can define a special property named state, whereas props are set and passed from outside like name and age into the person component, state is managed from inside a component.

* Now important, this state property here is only available like this in components that extend components, so in class-based React components.

* having state in all your components and manipulating it from anywhere in your app makes your app quickly unpredictable and hard to manage especially as it grows.

* We initialize it by assigning a value and this value is a Javascript object.

* Again this is (state) a reserved word and we should use it if we want to manage, well some component internal data you should say

```js
class App extends Component {
    state = {
        persons: [
            { name: 'Guna',age: 14}
            { name: 'Sara sara saro..',age: 14}
            { name: 'Mouth saro',age: 14}
        ]
    }
    render() {
        return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button>Switch Name</button>
            <PersonImport name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <PersonImport name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Racing</PersonImport>
            <PersonImport name={this.state.persons[2].name} age={this.state.persons[2].age} />
        </div>
        );
    }
}
```

* Now I said state would be a special property, thus far we don't use it in a special way though, we can change this. State can be changed and if it changes and that's the special thing about it and it only works on that state property, if it changes, it will lead React to re-render our DOM or to update the DOM I should say.

* Let's now handle a click on this button, we do this by adding onClick.


```js
class App extends Component {
    state = {
        persons: [
            { name: 'Guna',age: 14},
            { name: 'Sara sara saro..',age: 14},
            { name: 'Mouth saro',age: 14}
        ],
        otherState : "SOme other value"
    }

    switchNameHandler = (newName) => {
        // console.log('Was clicked!');
        // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
        this.setState( {
        persons: [
            { name: newName, age: 28 },
            { name: 'Sara sara saro..',age: 14},
            { name: 'Mouth saro',age: 14}
        ]
        } )
    }

    render() {
        return (
        <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
            <PersonImport name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <PersonImport name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Racing</PersonImport>
            <PersonImport name={this.state.persons[2].name} age={this.state.persons[2].age} />
        </div>
        );
    }
}
```

* This is a method which allows us to update this special state property here and it will then ensure that React gets to know about this update and updates the DOM. set state takes an object as an argument and it will merge whatever we define here with our existing state.

* so "otherState"  would not get touched even if we only update persons. 

* it will not discard other state but it will simply merge the old state with the new one. We'll overwrite persons since we clearly define a new version of persons here but we'll leave other state untouched because we're not saying anything about it here and it will not discard it which of course is a good thing, you don't want to have to update everything about your state whenever you want to change only a tiny piece about it.

### Using the useState() Hook for State Manipulation

* prior to React version 16.8, this was the only way of managing state in React applications and to say this right away, it is the way we'll use throughout this course and I'll come back to why in a second. Now since React 16.8, there also is a way for us to manage state in functional components with a feature called React hooks.