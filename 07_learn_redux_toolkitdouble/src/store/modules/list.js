import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchHomeMultidataAction  = createAsyncThunk('fetch/multidata',async() => {
   const res = await axios.get("http://123.207.32.32:8000/home/multidata")
   return res.data
})

const listSlice = createSlice({
    name:"listSlice",
    initialState:{
        banners:[],
        recommends:[]
    },
    reducers:{
        getBannersList(state,{payload}) {
            console.log(payload);
        }
    },
    extraReducers:{
        [fetchHomeMultidataAction.pending](state,{payload}){
            console.log('pending');
        },
        [fetchHomeMultidataAction.fulfilled](state,{payload}){
            state.recommends = payload.data.recommend.list
        },
        [fetchHomeMultidataAction.rejected](state,{payload}){
            console.log('reject');
        }
    }
})




export const {getBannersList,getRecommendsList} = listSlice.actions

export default listSlice.reducer