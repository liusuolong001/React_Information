import React from "react";
import Children from "./children";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello 父组件",
      status: true,
    };
  }

  hidAssembly() {
    this.setState({
      status: !this.state.status,
    });
  }

  render() {
    const { message, status } = this.state;
    return (
      <div>
        <h4>{message}</h4>
        <button onClick={(e) => this.hidAssembly()}>销毁组件</button>
        {status && <Children />}
      </div>
    );
  }
}

export default App;
