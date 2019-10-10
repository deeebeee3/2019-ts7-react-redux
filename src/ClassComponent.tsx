import React from 'react';

interface AppProps {
  color?: string
}

interface AppState {
  counter: number
}

class ClassComponent extends React.Component<AppProps, AppState>{

  //overriding state in React.Component - S = {}
  //this method is more straight forward than the constructor method for initializing the state object
  //state = { counter: 0 }; 

  constructor(props: AppProps) {
    super(props)

    //state: Readonly<S> is an empty object in React.Component
    //interface Component<P = {}, S = {}, SS = any>
    this.state = { counter: 0 };
  }


  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    )
  }
}

export default ClassComponent;