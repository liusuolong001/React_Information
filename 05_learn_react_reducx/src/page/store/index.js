import {createStore,applyMiddleware,compose} from 'redux'
import reducer from './reducer'

import thunk from 'redux-thunk'  //react-redux通过需要action中dispatch返回一个函数的时候 所需要的中间介


// 开发模式打开redux-devtools   这个函数window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__    compose默认值
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store  = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store