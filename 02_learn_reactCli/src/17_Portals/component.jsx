import React, { PureComponent } from "react";

export class Component extends PureComponent {
  render() {
    return (
      <div className="component">
        <h4>{"我是DOM节点为test的组件"}</h4>
      </div>
    );
  }
}

export default Component;
