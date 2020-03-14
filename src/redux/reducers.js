import { CHANGE_LANGUAGE } from './actionTypes';

const initialState = {
    lng: "English"
}
function mySimpleReducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_LANGUAGE:
            return {
                ...state,
                lng: action.payload.lng,
            }
        default:
            return state
    }
}

export default mySimpleReducer;