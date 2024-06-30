import React, { Component } from "react";
import NavBar from "./nav-bar";
import NavBarTwo from "./nav-bar2";

export class app extends Component {
  render() {
    return (
      <div>
        {/*第一种插槽 如果存在多个this.props.children里面就是数组存在单个children就是单个值 */}
        <NavBar>
          <h4>标题</h4>
          <button>按钮</button>
        </NavBar>
        {/* 第二种插槽 */}
        <NavBarTwo leftSlot={<h4>第二种插槽</h4>} centerSlot={<button>按钮点击</button>}></NavBarTwo>
      </div>
    );
  }
}

export default app;
