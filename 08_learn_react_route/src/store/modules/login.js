import {createSlice} from '@reduxjs/toolkit'

const loginSlice = createSlice({
    name:'login',
    initialState:{
        isLogin:false
    },
    reducers:{
        changeLoginMethods(state,{payload}){
            state.isLogin = payload
        }
    }
})



export const {changeLoginMethods} = loginSlice.actions

export default loginSlice.reducer