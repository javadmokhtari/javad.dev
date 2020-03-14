import { CHANGE_LANGUAGE } from './actionTypes';

const changeLanguge = (lng) => {
    return {
        type: CHANGE_LANGUAGE,
        payload: {
            lng: lng
        }
    }
}

export default changeLanguge;
