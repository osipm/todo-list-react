import { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.dincrement = this.dincrement.bind(this);
  }

  increment = () => {
    this.setState((prevState) => {
      return { count: this.state.count + 1 };
    });
  };

  dincrement() {
    this.setState((prevState) => {
      return { count: this.state.count - 1 };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.dincrement}>-</button>
      </div>
    );
  }
}

export default ClassCounter;
