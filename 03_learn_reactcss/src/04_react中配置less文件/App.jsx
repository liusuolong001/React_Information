import React, { PureComponent } from "react";
// import Cpn from "./component/cpn";
import "./page.module.less";

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
        <h4 className="page">{message}</h4>
      </div>
    );
  }
}

export default App;
