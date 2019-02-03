# React-2019
Change different branch to get explore.
## CSS Module
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