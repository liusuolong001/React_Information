//node环境下使用required
const { createStore } = require("redux");
const reducer = require('./reducer')

// 传入一个函数自动执行了这个reducer的方法
const store = createStore(reducer);

module.exports = store;
