/*
 * @Description:
 * @Author: hao.a.yin
 * @Date: 2023-03-04 10:48:27
 * @LastEditors: Please set LastEditors
 */
import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "Hello React",
      arr: [
        { name: "海贼王", type: "18+" },
        { name: "火影忍者", type: "18+" },
        { name: "霸道总裁", type: "10+" },
      ],
    };
  }
  addArr() {
    // 不可变的数据就是不要直接修改引用类型(在PureComponent情况下)如数组对象先进行浅拷贝之后再修改 值类型可以直接修改
    const info = { name: "绿皮书", type: "20+" };
    const newArr = [...this.state.arr];
    newArr.push(info);
    this.setState({ arr: newArr });
  }
  render() {
    const { arr } = this.state;
    return (
      <div>
        <ul>
          {arr.map((it, index) => {
            return (
              <li key={index}>
                {it.name}_{it.type}
              </li>
            );
          })}
        </ul>
        <button onClick={(e) => this.addArr()}>添加</button>
      </div>
    );
  }
}

export default App;
