import {createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name:'counterSlice',
  initialState:{
    value:99,
    message:'isEqual'
  },
  reducers:{
    incrementAction:(state,{payload}) => {
      state.value = state.value + payload
    },
    changeMessage:(state,{payload}) => {
      state.message = payload
    }
  }
})



export const { incrementAction,changeMessage }  = counterSlice.actions

export default counterSlice.reducer