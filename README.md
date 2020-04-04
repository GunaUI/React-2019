# React-2019
Change different branch to get explore.
* Styling component
### 1st way external (recomended way)
* Create and import css with extension , !!remember we can avoid extention only in js file. in css its must to include extension
* use your class in jsx as "className"
* Webpack will add these css as internal css in index.html
```js
import React from 'react';
import './Person.css';
const personExport = ( properties ) => {
    return (
        <div className="Person">
            <p onClick={properties.clickme}>I'm {properties.name} and I am {properties.age} years old!</p>
            <p>{properties.children}</p>
            <input type="text" onChange={properties.heychanged} value={properties.name} />
        </div>
    )
};

export default personExport;
```
### 2nd way inline
* add constant say 
    ```css
        const styleguide = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
    ```
* bind this constant in html (jsx) as "style={styleguide}"



