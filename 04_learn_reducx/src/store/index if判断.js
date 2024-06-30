
//node环境下使用required
const {createStore}  = require('redux')

// 初始化数据
const initialState = {
    name:'yinHao',
    age:18
}

// 定义一个纯函数  state = initialState 代表默认第一次默认的值
function reducer (state = initialState,action) {
    // 修改时候需要先将state浅拷贝一次再修改 如果直接修改state里面的值不起作用state不是响应式
    if(action.type ==='changeName') {
        // 返回一个新的对象
        return {...state,name:action.name}
    }
    return state
}


// 传入一个函数自动执行了这个reducer的方法
const store = createStore(reducer)


module.exports = store