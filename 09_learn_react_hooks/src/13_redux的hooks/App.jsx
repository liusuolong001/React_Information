import React, { memo, useState, useEffect } from "react";
import { connect } from "react-redux";
import { incrementAction } from "./store/features/counter";

const App = memo((props) => {
  const { count, increment } = props;
  const [message, setMessage] = useState("redux");

  function changeMessage() {
    setMessage("o.O");
  }

  function incrementHandle(e) {
    increment(e);
  }

  return (
    <div>
      <h4>{message}</h4>
      <button onClick={changeMessage}>message change</button>
      <h4>
        {"count"}:{count}
      </h4>
      <button onClick={(e) => incrementHandle(1)}>+1</button>
    </div>
  );
});

const mapStateToProps = (state) => {
  return {
    count: state.counter.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment(num) {
      dispatch(incrementAction(num));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
