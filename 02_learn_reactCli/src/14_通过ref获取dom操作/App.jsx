/*
 * @Description:
 * @Author: hao.a.yin
 * @Date: 2023-03-04 12:32:53
 * @LastEditors: Please set LastEditors
 */
import React, { PureComponent, createRef } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "hello react",
    };
    this.domRef = createRef();
  }

  getDomOperate() {
    this.setState({
      message: "xxxx",
    });
    console.log(this.domRef.current);
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <h4 ref={this.domRef}>{message}</h4>
        <button onClick={(e) => this.getDomOperate()}>获取dom操作</button>
      </div>
    );
  }
}

export default App;
