const {CHANGE_NAME,CHANGE_NUM} = require('./constants')


// 初始化数据
const initialState = {
  name: "yinHao",
  age: 18,
  num: 10,
};

// 定义一个纯函数  state = initialState 代表默认第一次默认的值 使用switch结构更加清晰
function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name,
      };
    case CHANGE_NUM:
      return {
        ...state,
        num: state.num + action.num,
      };
    default:
      return state;
  }
}


module.exports = reducer