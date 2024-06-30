import React, { PureComponent } from "react";

export class home extends PureComponent {
  constructor() {
    super();
    this.state = {
      list: [
        { label: "海泽", key: 1, children: [{ label: "海泽的儿子", key: 1 }] },
        { label: "火影", key: 2, children: [{ label: "火影的儿子", key: 2 }] },
        { label: "男孩", key: 3, children: [{ label: "男孩的儿子", key: 3 }] },
      ],
      active: 1,
    };
  }

  expandMethod(e) {
    this.setState({
      active: e.key,
    });
  }
  render() {
    const { list, active } = this.state;
    return (
      <div>
        <ul>
          {list.map((it, index) => {
            return (
              <ol key={index} onClick={(e) => this.expandMethod(it)} className="listExpand">
                {it.label}
                {it.children.map((it, index) => {
                  return (
                    <ol key={index} style={{ display: active === it.key ? "block" : "none" }} className="childrenListExpand">
                      {it.label}
                    </ol>
                  );
                })}
              </ol>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default home;
