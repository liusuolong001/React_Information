import React, { PureComponent } from "react";
import childrenPageStyle from "./childrenPage.module.css";

export class cpn extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "module子组件",
    };
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <h4 className={childrenPageStyle.page}>{message}</h4>
      </div>
    );
  }
}

export default cpn;
