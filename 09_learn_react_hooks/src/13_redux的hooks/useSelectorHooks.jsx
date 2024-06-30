import React, { memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { incrementAction, changeMessage } from "./store/features/counter";

const UseEqualHooks = memo(() => {
  //首字母大写
  const { message } = useSelector((state) => {
    return {
      message: state.counter.message,
    };
  }, shallowEqual);

  console.log("UseEqualHooks");

  const dispatch = useDispatch();
  function messageMethod(e) {
    dispatch(changeMessage(e));
  }
  return (
    <div>
      <h4>useEqualHooks:{message}</h4>
      <button onClick={(e) => messageMethod("Sb")}>changeMessage</button>
    </div>
  );
});

const useSelectorHooks = memo(() => {
  const { count } = useSelector((state) => {
    return {
      count: state.counter.value,
    };
  }, shallowEqual);

  console.log("selectHooks");

  const dispatch = useDispatch();
  function incrementNum(e) {
    dispatch(incrementAction(e));
  }

  return (
    <div>
      <h4>
        {"Number"}:{count}
      </h4>
      <button onClick={(e) => incrementNum(1)}>+1</button>

      <UseEqualHooks></UseEqualHooks>
    </div>
  );
});

export default useSelectorHooks;
