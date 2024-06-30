import React, { Component, PureComponent } from "react";
import { connect } from "react-redux";
import { decrement } from "../store/features/counter";

export class product extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "ProductCount",
      count: 0,
    };
  }

  decrement(num) {
    this.props.decrement(num);
  }
  render() {
    const { counter, banners, recommends } = this.props;
    const { message } = this.state;
    return (
      <div>
        <h4>
          {message}:{counter}
        </h4>
        <button onClick={(e) => this.decrement(10)}>-10</button>
        <br />
        {"banners"}
        <ul>
          {banners.map((it, index) => {
            return <ol key={index}>{it.title}</ol>;
          })}
        </ul>
        {"recommends"}
        <ul>
          {recommends.map((it, index) => {
            return <ol key={index}>{it.title}</ol>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStatToProps = (state) => {
  return {
    counter: state.counter.counter,
    banners: state.home.banners,
    recommends: state.home.recommends,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    decrement(num) {
      dispatch(decrement(num));
    },
  };
};

export default connect(mapStatToProps, mapDispatchToProps)(product);
