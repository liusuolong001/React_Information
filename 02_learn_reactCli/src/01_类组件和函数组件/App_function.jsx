export function App() {
  // this关键字不会指向组件实列
  // 没有内部状态状态
  // 不需要继承React.Component
  // 不会更新挂载没有生命周期 早些只是为了渲染
  // 返回和类组件一样
  return <h4>Hello 函数式组件</h4>;
}

export default App;
