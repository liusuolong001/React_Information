import React, { memo, useState, useEffect } from "react";

const App = memo(() => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("当render执行之后我执行,相当于class组件里面的componentDidMount");
  });

  return (
    <div>
      <h4>{count}</h4>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
    </div>
  );
});

export default App;
