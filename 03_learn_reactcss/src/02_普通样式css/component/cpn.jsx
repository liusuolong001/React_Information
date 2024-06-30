import React, { PureComponent } from "react";
import "./childrenPage.css";

export class cpm extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "子组件",
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

export default cpm;
