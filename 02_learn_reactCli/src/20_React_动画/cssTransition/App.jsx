import React, { PureComponent, createRef } from "react";
// 组件
import Cartoon from "./cartoon";
// 第三方库 显示与隐藏的动画
import { CSSTransition } from "react-transition-group";
// css
import "./styles.css";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "React动画",
      isCartoon: false,
    };

    // 严格模式下解决findDOMNode报错 因为react-transition-group底层还在用findDOMNode但是严格模式下findDOMNode已经不准使用了
    this.componentRef = createRef();
  }
  render() {
    const { isCartoon } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ isCartoon: !isCartoon })}>切换</button>
        {/* in代表进入或者退出状态 timeout必填代表进入时间 unmountOnExit必填退出动画后将其移出 classNames必填  CSSTransition里面API*/}
        <CSSTransition in={isCartoon} timeout={3000} unmountOnExit={true} classNames="cartoon">
          {/* 组件这里不能这么移除findDOMNode错误 */}
          <Cartoon></Cartoon>
          {/* 元素这里可以这么移除findDOMNode nodeRef={this.componentRef}*/}
          {/* <div ref={this.componentRef}>{"yinHao"}</div> */}
        </CSSTransition>
      </div>
    );
  }
}

export default App;
