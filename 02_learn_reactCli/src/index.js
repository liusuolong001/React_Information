// import React from 'react';
import React from "react";
import ReactDOM from "react-dom/client";
// import App from './01_类组件和函数组件/App_class';
// import App from "./02_类组件的生命周期函数/App";
// import App from "./03_组件开发嵌套关系/App.jsx";
// import App from './04_组件之间的通信过程-父传子/App.jsx';
// import App from "./05_组件之间的通信过程-子传父/App.jsx";
// import App from './07_组件的插槽实现/App.jsx'
// import App from './11_setState的详细使用/App.jsx'
// import App from "./12_render函数的优化/App.jsx";
// import App from "./13_数据不可变的力量/App.jsx";
import App from "./14_通过ref获取dom操作/App.jsx";
// import App from "./15_Ref获取组件实列/App.jsx";
// import App from "./16_高阶组件/App.jsx";
// import App from "./17_Portals/App.jsx";
// import App from "./18_React_Fragments/App.jsx";
// import App from "./19_React_严格模式/App.jsx";
// import App from "./20_React_动画/cssTransition/App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // React.StrictMode严格模式执行了app两次
  //   <React.StrictMode>
  <App />
  //  </React.StrictMode>
);
