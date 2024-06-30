import React, { PureComponent } from "react";
import Cpn from "./component/cpn";
// react书写普通css 缺点会有作用域各个文件之间会造成污染
import "./page.css";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "普通css",
    };
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <h4 className="page">{message}</h4>
        <Cpn></Cpn>
      </div>
    );
  }
}

export default App;
