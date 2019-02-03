# React-2019
Change different branch to get explore.
## CSS Module Pseudo
* Advantage of css module is  that you no longer have to worry about naming conflicts or collisions in your CSS. All your CSS is now locally scoped to the component you're using it in.

### STEPS
* run the below script

```
    npm run eject
```
* Add the below line in your webpack.config.js (search exclude: cssModuleRegex,) and replace the below changes

```
    exclude: cssModuleRegex,
    use: getStyleLoaders({
        importLoaders: 1,
        modules: true,
        localIdentName: '[name]__[local]__[hash:base64:5]'
        
    }),
```
* Now you can use css as Module like below

```
import mycssModule from './App.css';


<div className={mycssModule.App}>


classes.push( mycssModule.red );
```

By the way, if you somehow also want to define a global (i.e. un-transformed) CSS class in such a .css  file, you can prefix the selector with :global .

```
Example:

:global .Post { ... } 

```

Now you can use className="Post"  anywhere in your app and receive that styling.

### CSS Module Pseudo class
* in css file add as normal css selector and sub selector
```
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

```
styleguide = mycssModule.Red;
```
* Please media query and clear idea refer files for more.
