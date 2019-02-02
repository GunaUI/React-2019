# React-2019
Change different branch to get explore.
* Two way data binding
* In person.js pass input element event value as  onChange={properties.heychanged} 
* To view the current value on load add value={properties.name} to the input element.
* In app.js receive as heychanged={this.nameChangedHandler} and set state of newly changed value as below
    ```
    nameChangedHandler = (event) => {
        this.setState( {
        persons: [
            { name: 'Max', age: 28 },
            { name: event.target.value, age: 29 },
            { name: 'Stephanie', age: 26 }
        ]
        } )
    }
    ```

## Two-way binding involves

React only (naturally) has one-way binding,  then you (manually) add the onChange event method to convert one-way binding into two-way binding.

the input text field element & its corresponding state > property > value.

The user types a character into the text field.

That character is set to the state via a setState() method.

This causes a re-render() of that DOM element > text field,

replacing the character (with the same character) the user entered.

So,  the used can't tell their character was replaced with the same character,

but,  this re-render() ensures the DOM &

other potential setState() invocations are kept up to date.

---------------------------------------------------------------------------------------------------------------------------------

React only has one-way binding.   React simulates Two-way binding.

It's the manual addition of the method that supplements for the missing part

of the Two-way binding.     MLR


https://stackoverflow.com/questions/34519889/can-anyone-explain-the-difference-between-reacts-one-way-data-binding-and-angula

=========================================================================


Your script works properly,  based on the current course code.

Soon,  you'll learn about using map() which will solve your problem.

Your Harsh (name) text <input .... /> is the only text <input .... /> that should properly work.

-----------------------------------------------------------------------------------------------------------------------------------------------------------

Every time you alter that text <input .... />,  the names inside the other text <input .... />s

are replaced with the same content,  so,  those other text <input .... />s appear to be non-altered.

Use the following (instead) & alter your Harsh (name).
```
nameChangedHandler = (event) => {
    this.setState({
        people: [
            {name: '111', age: '11'},
            {name: event.target.value, age: '25'},
            {name: '333', age: '33'},
            {name: '444', age: '44'}
        ]
    });
};
```
-----------------------------------------------------------------------------------------------------------------------------------------------------------

Why the other text <input .... />s won't change when you directly alter one:

Their value is set via:  value={props.name}.   That's all this value knows.

props.name is this.state.people[n].name.

this.state.people[n].name doesn't change,  so,  this means your text can't be changed.

-----------------------------------------------------------------------------------------------------------------------------------------------------------

You're getting the embedded <p> tag warning,  because,

you're placing a Person component inside a Person component.

This means you're embedding <p> tags.

https://stackoverflow.com/questions/8397852/why-p-tag-cant-contain-div-tag-inside-it   MLR

========================================================================================





