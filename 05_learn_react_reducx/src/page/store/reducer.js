
import * as actionType from './constants'

const initialState = {
    count:10,
    banners:[],
    recommends:[]
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionType.INCRMENT_NUM:
            return {
              ...state,
              count: state.count + action.num,
            };
            case actionType.REDUCE_NUM:
            return {
              ...state,
              count: state.count - action.num,
            };
            case actionType.CHANGE_BANNERS:
            return {
            ...state,
            banners: action.banners
            };
            case actionType.CHANGE_RECOMMEND:
            return {
            ...state,
            recommends: action.recommends
            };
        default:
      return state;
    }
}

export default reducer