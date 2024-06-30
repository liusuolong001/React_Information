const {CHANGE_NAME,CHANGE_NUM} = require('./constants')

// 将action抽到一个actionCreateors.js文件中然后导出
const changeNameMethod  = (name) => {
    return {
        type:CHANGE_NAME,
        name
    }
}

const changeNumberMethod  = (num) => {
    return {
        type:CHANGE_NUM,
        num
    }
}

module.exports = {
    changeNameMethod,
    changeNumberMethod
}