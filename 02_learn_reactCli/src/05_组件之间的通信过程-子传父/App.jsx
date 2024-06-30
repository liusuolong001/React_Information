import React, { Component } from "react";
import AddCount from "./cpns/AddCount";
import SubCount from "./cpns/SubCount";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 10,
    };
  }

  addAppCount(count) {
    this.setState({
      count: this.state.count + count,
    });
  }

  subAppCount(count) {
    this.setState({
      count: this.state.count - count,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h4>当前计数:{count}</h4>
        <AddCount addClick={(count) => this.addAppCount(count)} />
        <SubCount subClick={(count) => this.subAppCount(count)} />
      </div>
    );
  }
}

export default App;
