
// flushSync可以将批处理改为同步
import React, { Component, flushSync } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello React",
    };
  }
  handleClick() {
    this.setState({
      message: "React YYDS",
    });
    // 异步操作这个时候拿到的值依旧是Hello React (setState是异步执行 React中)
    console.log(this.state.message); //Hello React
  }
  //   React18 之前setSatet在setTimeout中或者原生dom事件中是同步的
  /*  setTimeout(() => {
    this.setState({
        message:'yinhao'
    })
    console.log(this.state.message); //yinhao
  }, 1); */
  render() {
    const { message } = this.state;
    return (
      <div>
        <h4>文本:{message}</h4>
        <button onClick={(e) => this.handleClick()}>改变文本</button>
      </div>
    );
  }
}

export default App;
