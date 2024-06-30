const store = require('./store')
const {changeNameMethod,changeNumberMethod} = require('./store/actionCreators')
 

//默认返回一个函数 调用这个函数可以取消订阅
const unsubscribe =  store.subscribe(() => {
    console.log('只要state的值改变我就调用这个函数',store.getState());
}) 

// 通过dispatch去修改store里面的数据唯一的方法
store.dispatch(changeNameMethod('tangHua')) // 传入的是一个对象

// unsubscribe()
store.dispatch(changeNameMethod('niBing'))

store.dispatch(changeNumberMethod(90))
