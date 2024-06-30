import React, { PureComponent, Fragment } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "Fragment渲染无需在添加额外的节点vue3中template",
      movies: [
        { label: "海贼王", value: 1 },
        { label: "火影忍者", value: 2 },
        { label: "赛600", value: 3 },
      ],
    };
  }
  render() {
    const { message, movies } = this.state;
    return (
      //语法糖<> 注意 如果需要在Fragment中添加key不能使用语法糖
      /*    <>
          <h4>{message}</h4>
        </> */

      /*    <Fragment>
        <h4>{message}</h4>
      </Fragment> */

      <h4>
        {movies.map((it) => {
          return (
            <Fragment key={it.value}>
              <div>{it.label}</div>
            </Fragment>
          );
        })}
      </h4>
    );
  }
}

export default App;
