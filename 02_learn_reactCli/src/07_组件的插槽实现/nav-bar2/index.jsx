import React, { Component } from "react";

export class NavBarTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { leftSlot, centerSlot } = this.props;
    return (
      <div className="nav-bar">
        <div className="left">{leftSlot}</div>
        <div className="center">{centerSlot}</div>
        <div className="right"></div>
      </div>
    );
  }
}

export default NavBarTwo;