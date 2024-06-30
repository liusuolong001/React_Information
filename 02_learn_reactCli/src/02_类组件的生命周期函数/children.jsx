import React from "react";

class Children extends React.Component {
  // 类组件的生命周期执行顺序  先执行constructor在执行render在执行componentDidMount
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      message: "Hello 子组件",
    };
  }

  changeMes() {
    this.setState({ message: "message被修改" });
  }

  render() {
    console.log("render");
    const { message } = this.state;
    return (
      <div>
        <h4>{message}</h4>
        <button onClick={(e) => this.changeMes()}>修改Message</button>
      </div>
    );
  }

  // 组件被渲染到dom:被挂在到dom
  componentDidMount() {
    console.log("componentDidMount");
  }

  // 组件的dom被更新完成:dom发生更新
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  // 组件的dom中被别卸载掉:组件dom被卸载
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}

export default Children;
