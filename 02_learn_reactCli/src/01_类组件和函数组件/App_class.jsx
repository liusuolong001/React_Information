import React from "react";

// 类组件
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello React", 
    };
  }

  render() {
    const { message } = this.state;
    return <h4>{message}</h4>;
  }
}

export default App;
