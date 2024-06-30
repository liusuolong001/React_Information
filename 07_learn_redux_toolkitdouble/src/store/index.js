import {configureStore} from '@reduxjs/toolkit'
import counterReduce from './modules/counter'
import listReduce from './modules/list'

const store = configureStore({
    reducer:{
        counter:counterReduce,
        list:listReduce
    }
})

export default store