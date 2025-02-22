import * as actionTypes from '../actions/actionTypes';
import { updateObject} from '../utility'

// Here initial state of the entire app

const initialState = {
    token: null,
    error: null,
    loading: false
}

 // the following methods are the auxiliars for the reducer
const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
}


const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token,
        error: null,
        loading: false
    });
}


const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
}


const authLogout = (state, action) => {
    return updateObject(state, {
        token: null
    });
}

// reducer
const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default:
            return state;
    }

}

export default reducer;
