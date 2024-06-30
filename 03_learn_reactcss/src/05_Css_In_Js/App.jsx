import React, { PureComponent } from "react";
// import Cpn from "./component/cpn";
// 引入声明的变量 返回的div将其包裹起来 里面就用嵌套的写法
import { Wrapper } from "./page.js";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "Css_In_JS",
    };
  }
  render() {
    const { message } = this.state;
    return (
      <Wrapper>
        <h4 className="page">{message}</h4>
      </Wrapper>
    );
  }
}

export default App;
