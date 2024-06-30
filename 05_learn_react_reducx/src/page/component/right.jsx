import React, { PureComponent } from "react";
import { incrmentNum, reduceNum } from "../store/actionCreators";
import { connect } from "react-redux";

export class right extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      count: 5,
    };
  }

  calcNumber(num, status) {
    if (status) {
      this.props.incrmentNumber(num);
      return false;
    }
    this.props.reduceNumber(num);
  }

  render() {
    const { count, banners } = this.props;
    return (
      <div>
        <h4>right:{count}</h4>
        <button onClick={(e) => this.calcNumber(5, true)}>+5</button>
        <button onClick={(e) => this.calcNumber(10, false)}>-10</button>
        <ul>
          {banners.map((it) => {
            return <ol key={it.acm}>{it.title}</ol>;
          })}
        </ul>
      </div>
    );
  }
}

// connect 是传入两个参数 第一个参数是拿到state的值 第二个参数是通过dispatch修改store的值

// connect()() 先掉用connect的函数返回一个函数(这个函数是一个高阶组件) 高阶组件在传入一个组件返回一个新组件

// 第一个参数是拿到state的值
const mapStateToProps = (state) => {
  return {
    count: state.count,
    banners: state.banners,
  };
};

// 第二个参数是修改state的值
const mapDispatchToProps = (dispatch) => {
  return {
    incrmentNumber(num) {
      dispatch(incrmentNum(num));
    },
    reduceNumber(num) {
      dispatch(reduceNum(num));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(right);
