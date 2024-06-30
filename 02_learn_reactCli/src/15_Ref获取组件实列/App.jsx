/*
 * @Description:
 * @Author: hao.a.yin
 * @Date: 2023-03-04 12:32:53
 * @LastEditors: Please set LastEditors
 */
import React, { PureComponent, createRef } from "react";
import Component from "./component.jsx";
import FunComponent from "./funComponent.jsx";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "hello react",
    };
    this.componentRef = createRef();
    this.funComponentRef = createRef();
  }

  getDomOperate() {
    // 执行子组件里面的方法和数据
    this.componentRef.current.changeMessage();
    console.log(this.componentRef);
    // console.log("message============", this.componentRef.current.state.message);
    console.log(this.funComponentRef);
  }
  render() {
    return (
      <div>
        <Component ref={this.componentRef}></Component>
        <FunComponent ref={this.funComponentRef}></FunComponent>
        <button onClick={(e) => this.getDomOperate()}>获取dom操作</button>
      </div>
    );
  }
}

export default App;
