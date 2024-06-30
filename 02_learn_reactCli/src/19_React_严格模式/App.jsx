import React, { PureComponent } from "react";
import Component from "./component";
import { StrictMode } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "React严格模式",
    };
  }
  render() {
    // const { message } = this.state;
    return (
      <div>
        {/* 严格模式下会被执行两次生命周期用于检测你执行两次是否有一些bug 详细查看React官网->高级指引->严格模式 */}
        <StrictMode>
          <Component></Component>
        </StrictMode>
      </div>
    );
  }
}

export default App;
