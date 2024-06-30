import React, { memo } from "react";
import { useState } from "react";

const App = memo(() => {
  const [message, setMessage] = useState("hello useState");
  const [age, setAge] = useState(0);

  function changeMessage() {
    setMessage("SB");
  }

  function changeAge() {
    setAge((e) => e + 1);
    setAge((e) => e + 1); // 函数会将1作为待定状态,并返回2作为下个状态
    // setAge(age + 1);  // set 函数不会更新已经运行代码中的
  }

  function loopArray() {
    const a = [];
    for (let i = 0; i < 5; i++) {
      a.push({
        id: i + 1,
        text: "sb" + (i + 1),
      });
    }
    return a;
  }

  const [a, seta] = useState(loopArray);

  return (
    <div>
      <h4>{message}</h4>
      <button onClick={changeMessage}>Message change</button>
      <h4>{age}</h4>
      <button onClick={changeAge}>Age change</button>
      <ul>
        {a.map((it, index) => {
          return <ol key={index}>{it.text}</ol>;
        })}
      </ul>
    </div>
  );
});

export default App;
