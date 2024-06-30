/*
 * @Description:
 * @Author: hao.a.yin
 * @Date: 2023-02-26 22:07:50
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from "react";
import Header from "./Header";
import Recommend from "./Recommend";

export class App extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // 将state里面的旧message与nextState里面的message进行比较如果改变return true 重新render渲染一下否则return false  nextState下一次state里面值改变的时候
    if (this.state.message !== nextState.message || this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }
  constructor() {
    super();
    this.state = {
      message: "App",
      count: 0,
    };
  }
  handleMessage() {
    this.setState({
      message: "App改变",
    });

    /*this.setState({
      message: "App",
    }); */
  }

  handleMessageAgain() {
    this.setState({
      message: "App又改变",
    });

    /*this.setState({
      message: "App",
    }); */
  }

  incrment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    console.log("执行app");
    const { message, count } = this.state;
    return (
      <div>
        <h4>文本:{message}</h4>
        <button onClick={(e) => this.handleMessage()}>改变文本</button>
        <button onClick={(e) => this.handleMessageAgain()}>又改变文本</button>
        <button onClick={(e) => this.incrment()}>加一</button>
        <Header message={message}></Header>
        <Recommend count={count}></Recommend>
      </div>
    );
  }
}

export default App;
