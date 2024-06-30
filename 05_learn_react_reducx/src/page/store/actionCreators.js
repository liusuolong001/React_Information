import * as actionType from './constants'

import axios from 'axios'

export const incrmentNum = (num) =>  {
    return {
       type:actionType.INCRMENT_NUM,
       num  
    }
}

export const reduceNum = (num) =>  {
    return {
       type:actionType.REDUCE_NUM,
       num  
    }
}

export const changeBannersMethod = (banners) =>  {
    return {
       type:actionType.CHANGE_BANNERS,
       banners  
    }
}


export const changeRecommendMethod = (recommends) =>  {
    return {
       type:actionType.CHANGE_RECOMMEND,
       recommends
    }
}


export const getRecommendsListMethod= () => {
    return function(dispatch, getState) {
        axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
            const recommends = res.data.data.recommend.list;
            dispatch(changeRecommendMethod(recommends))
          });
    }
}


