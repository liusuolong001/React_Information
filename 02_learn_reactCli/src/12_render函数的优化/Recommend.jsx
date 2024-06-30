import React, { Component } from "react";

export class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  shouldComponentUpdate(newProps, nextState) {
    if (this.props.count !== newProps.count) {
      return true;
    }
    return false;
  }
  render() {
    console.log("执行Recommend");
    return (
      <div>
        <h4>count:{this.props.count}</h4>
      </div>
    );
  }
}

export default Recommend;
