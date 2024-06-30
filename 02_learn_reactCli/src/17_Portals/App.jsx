import React, { PureComponent } from "react";
import { createPortal } from "react-dom";
import Component from "./component";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "我是DOM节点为root的文本",
    };
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <h4>{message}</h4>
        {/*createPortal是一个函数第一个参数可以传入一个元素或者组件 第二个可以传入do */}
        <h4>{createPortal(<Component></Component>, document.querySelector("#test"))}</h4>
      </div>
    );
  }
}

export default App;
