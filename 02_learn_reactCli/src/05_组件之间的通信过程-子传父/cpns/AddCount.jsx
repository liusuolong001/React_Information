import React, { Component } from "react";
import propsTypes from "prop-types";

export class AddCount extends Component {
  addCount(count) {
    this.props.addClick(count);
  }

  render() {
    return (
      <div>
        <button onClick={(e) => this.addCount(1)}>+1</button>
      </div>
    );
  }
}

AddCount.propsTypes = {
  addClick: propsTypes.func,
};

export default AddCount;
