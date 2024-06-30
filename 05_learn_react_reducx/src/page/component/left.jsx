import React, { PureComponent } from "react";
import store from "../store";
import { incrmentNum, reduceNum } from "../store/actionCreators";

export class left extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: store.getState().count,
    };
  }

  componentDidMount() {
    const unsubscribe = store.subscribe(() => {
      const state = store.getState();
      this.setState({ count: state.count });
    });
  }

  leftIncrment(num) {
    store.dispatch(incrmentNum(num));
  }

  leftReduce(num) {
    store.dispatch(reduceNum(num));
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h4>left:{count}</h4>
        <button onClick={() => this.leftIncrment(1)}>left: +1</button>
        <button onClick={() => this.leftIncrment(5)}>left: +5</button>
        <button onClick={() => this.leftReduce(1)}>left: -1</button>
      </div>
    );
  }
}

export default left;
