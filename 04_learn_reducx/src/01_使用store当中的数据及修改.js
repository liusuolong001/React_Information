const store = require('./store')
const {changeNameMethod,changeNumberMethod} = require('./store/actionCreators')

//通过getState()取出store的值
console.log(store.getState());


// 通过dispatch去修改store里面的数据唯一的方法
store.dispatch(changeNameMethod('gaoLingYuan')) // 传入的是一个对象

store.dispatch(changeNumberMethod(50)) // 传入的是一个对象

console.log(store.getState());