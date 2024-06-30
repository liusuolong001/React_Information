import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        count:99,
    },
    reducers:{
        incremented(state,{payload}){
            state.count  = state.count + payload
        },
        decremented(state,action){

        }
    }
})



export const { incremented,decremented } = counterSlice.actions

export default counterSlice.reducer