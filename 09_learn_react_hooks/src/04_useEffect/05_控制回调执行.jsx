import React, { memo, useState, useEffect } from "react";

const effect = memo(() => {
  const [count, setCount] = useState(99);
  const [message, setMessage] = useState("Hello useEffect");

  useEffect(() => {
    console.log("每次render重新渲染我会执行");

    return () => {
      console.log("清除机制");
    };
  }, [count]);

  useEffect(() => {
    console.log("我是Message");
  }, [message]);

  return (
    <div>
      <h4>{count}</h4>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <h4>{message}</h4>
      <button onClick={(e) => setMessage("SB")}>Message</button>
    </div>
  );
});

export default effect;
