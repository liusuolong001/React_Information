/*
 * @Description:
 * @Author: hao.a.yin
 * @Date: 2023-03-11 17:52:10
 * @LastEditors: Please set LastEditors
 */
import React, { PureComponent } from "react";

export class component extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "hello Component",
    };
  }
  changeMessage() {
    this.setState({
      message: "hello React",
    });
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <h4>{message}</h4>
      </div>
    );
  }
}

export default component;
