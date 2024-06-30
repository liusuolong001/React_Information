import React, { PureComponent } from "react";

// 高阶组件是参数为组件返回值为新组件的函数
function wrapperComponent(Cpn) {
  // 类组件
  class HocComponent extends PureComponent {
    render() {
      return <Cpn></Cpn>;
    }
  }
  return HocComponent;
}

export class CreateNewComponent extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "hello 高阶组件",
    };
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <h4>{message}</h4>
      </div>
    );
  }
}
const HocComponent = wrapperComponent(CreateNewComponent);

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "hello React",
    };
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <h4>{message}</h4>
        <HocComponent></HocComponent>
      </div>
    );
  }
}

export default App;
