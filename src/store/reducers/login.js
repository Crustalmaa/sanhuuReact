import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';
const initialState = {
    token: null, 
    userId: null, 
    error: null,
    loading: false, 
    email: ''
}
const loginStart =(state, action)=>{
    return updateObject(state, {loading: true, error: null});
}
const loginSuccess =(state, action)=>{
    return updateObject(state, {loading: false, error: null, token: action.token, userId: action.userId});
}
const loginFail =(state, action)=>{
    console.log("login Fail");
    return updateObject(state, {error: action.error, loading: false, token: null, userId: null, email: action.email});
}
const reducer =(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.LOGIN_START: return loginStart(state, action);
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
        case actionTypes.LOGIN_FAIL:  return loginFail(state, action);
        default : return state;
    }
}
export default reducer;