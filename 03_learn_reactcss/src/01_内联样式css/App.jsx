import React, { PureComponent } from "react";

export class app extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "hello ReactCss",
      isStatus: true,
    };
  }
  render() {
    const { message, isStatus } = this.state;
    const bgcColor = isStatus ? "red" : "green";
    // 内连样式采用小驼峰的命名属性是javascript对象写法{{}}不是css的字符串
    return (
      <div>
        <h4 style={{ color: bgcColor }}>{message}</h4>
      </div>
    );
  }
}

export default app;
