import React, { Component } from "react";

export class Header extends Component {
  //  shouldComponentUpdate性能优化传入两个只nextProps,nextState返回Boolean 要相比较父组件的值改变没有必须将其传入子组件
  shouldComponentUpdate(nextProps, nextState) {
    // 新旧两值进行比较如果改变执行shouldComponentUpdate重新render渲染一下  nextProps下一次传入改变的只值
    if (this.props.message !== nextProps.message) {
      console.log("nextProps.message=============", nextProps.message);
      console.log("this.props.message=============", this.props.message);
      return true;
    }
    return false;
  }
  constructor(props) {
    super(props);
    this.state = {
      HeaderMessage: "Header",
    };
  }
  render() {
    console.log("执行Header");
    // console.log(this.props.message);
    const { HeaderMessage } = this.state;
    return (
      <div>
        <h4>文本:{HeaderMessage}</h4>
      </div>
    );
  }
}

export default Header;
