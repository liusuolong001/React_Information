import React, { PureComponent } from "react";
import Cpn from "./component/cpn";
// react书写.module css 解决多个css文件相互影响问题
import pageStyle from "./page.module.css";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "modules的css",
    };
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        {/* 写法导入模块一样导入css文件 书写{} */}
        <h4 className={pageStyle.page}>{message}</h4>
        <Cpn></Cpn>
      </div>
    );
  }
}

export default App;
