import React, { Component } from "react";
// 父传子类型限制
import propTypes from "prop-types";

export class Banners extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { banners, title } = this.props;
    return (
      <div>
        <h4>{title}</h4>
        <ul>
          {banners.map((it) => {
            return <li key={it.acm}>{it.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

// react
Banners.propTypes = {
  banners: propTypes.array,
  title: propTypes.string,
};

// react不传默认展示
Banners.defaultProps = {
  banners: [],
  title: "不传",
};

export default Banners;
