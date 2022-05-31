## Quiz 1 - Analyze
See this Simple Version of the Counter App based on React Class Component
```js
class Counter extends React.Component {
  constructor(){
    this.state = {
      counter: 0,
    }
  }

  render(){
    ...
  }
}
```
If we do this code below:
```js
this.setState({count: this.state.count + 1});
this.setState({count: this.state.count + 1});
this.setState({count: this.state.count + 1});

//What is the value of this console.log?
console.log(this.state.count)
```
What is the value of count?
---

## Quiz 2 - Analyze Again
Just analyze this piece of code, just same as before:
```js
export default class Counter extends React.Component {
  constructor(){...}

  increment(){
    this.setState({count: this.state.count + 1});
    this.setState({count: this.state.count + 1});
    this.setState({count: this.state.count + 1});
  }

  render(){...}
}
```
Just analyze what will show up on the screen? What will we count be after the user's click the "Increment" button?
---

## Quiz 3 - Analyze Again
```js
import React from 'react';

export default class Counter extends React.Component {
  constructor(){...}

  increment(){
    this.setState((state) =>{return {count: this.state.count + 1} });
    this.setState((state) =>{return {count: this.state.count + 1} });
    this.setState((state) =>{return {count: this.state.count + 1} });
  }
 
  render(){...}
}
```
Guess what the counter is gonna be incemented to?