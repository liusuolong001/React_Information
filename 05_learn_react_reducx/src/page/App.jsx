import React, { Component } from "react";
// 组件
import Left from "./component/left";
import Right from "./component/right";
import Banners from "./component/banners";
import Recommend from "./component/recommend";
// 样式
import "./App.css";
// store
import store from "./store/index";

import { incrmentNum, reduceNum } from "./store/actionCreators";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      count: store.getState().count,
    };
  }

  componentDidMount() {
    const unsubscribe = store.subscribe(() => {
      const state = store.getState();
      console.log(state);
      this.setState({ count: state.count });
    });
  }

  appIncrment(num) {
    store.dispatch(incrmentNum(num));
  }

  appReduce(num) {
    store.dispatch(reduceNum(num));
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h4> app: {count}</h4>
        <button onClick={() => this.appIncrment(1)}>app: +1</button>
        <button onClick={() => this.appReduce(1)}>app: -1</button>
        <div className="page">
          <Left></Left>
          <Right></Right>
          <Banners></Banners>
          <Recommend></Recommend>
        </div>
      </div>
    );
  }
}

export default App;
