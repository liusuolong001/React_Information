import React, { Component } from "react";
import propsTypes from "prop-types";
import "./style.css";

export class NavBar extends Component {
  render() {
    // 插槽children在this.props里面
    const { children } = this.props;
    return (
      <div className="nav-bar">
        <div className="left">{children[0]}</div>
        <div className="center">{children[1]}</div>
        <div className="right">right</div>
      </div>
    );
  }
}

NavBar.propsTypes = {
  children: propsTypes.array,
};

export default NavBar;
