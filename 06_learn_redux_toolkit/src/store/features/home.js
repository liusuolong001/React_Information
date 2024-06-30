import { createSlice } from "@reduxjs/toolkit";


const dateSlice = createSlice({
    name:'date',
    initialState:{
        banners:[],
        recommends:[]
    },
    reducers:{
        changeBanners(state,{payload}){
            state.banners =  payload
        },
        changeRecommends(state,{payload}){
            state.recommends  = payload
        }
    }
})



export const {changeBanners,changeRecommends}  = dateSlice.actions

export default dateSlice.reducer