import React, { Component } from "react";
import propsTypes from "prop-types";

export class SubCount extends Component {
  subCount(count) {
    this.props.subClick(count)
  }

  render() {
    return (
      <div>
        <button onClick={(e) => this.subCount(1)}>-1</button>
      </div>
    );
  }
}

SubCount.propsTypes = {
  subClick: propsTypes.func,
};

export default SubCount;
