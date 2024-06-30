import {createSlice} from '@reduxjs/toolkit'


const counterSlice  = createSlice({
    name:'counter',
    initialState:{
        counter:999
    },
    reducers:{
        increment(state,{payload}){
            state.counter = state.counter + payload
        },

        decrement(state,{payload}){ 
            state.counter = state.counter - payload
        }
    }
})


export const {increment,decrement} = counterSlice.actions //导出的是counterSlice里面的actions

export default counterSlice.reducer   //导出的是counterSlice里面的reducer