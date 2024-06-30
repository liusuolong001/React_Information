import React, { PureComponent } from "react";

export class cartoon extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "子组件动画",
    };
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

export default cartoon;
