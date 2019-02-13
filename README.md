# React-2019
Change different branch to get explore.
## Render JSX Adjacent
* Till now we have to give render JSX as single root now we can send adjacent JSX as follows,
* Multiple elements sits next to each other
* return as comma seperated array with unique Id

```
    return [
                <p key="i1" onClick={this.props.deleteme}>I'm {this.props.name} and I am {this.props.age} years old!</p>,
                <p key="i2" >{this.props.children}</p>,
                <input type="text" key="i3" onChange={this.props.heychanged} value={this.props.name} />
        ];
```




