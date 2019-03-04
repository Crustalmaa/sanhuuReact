import * as actionTypes from './actionTypes';
import axios from 'axios';
export const loginStart = ()=>{
    return{
        type: actionTypes.LOGIN_START
    }
}
export const loginSuccess = (token, userId)=>{
    return{
        type: actionTypes.LOGIN_SUCCESS, 
        token: token, 
        userId: userId, 
        loading: false, 
        error: null, 
        email: ''
    }
}
export const loginFail = (err, email)=>{
    return{
        type: actionTypes.LOGIN_FAIL, 
        error: err, 
        loading: false, 
        token: null, 
        userId: null, 
        email: email
    }
}
export const logout =()=>{
    return{
        type: actionTypes.LOGOUT
    }
}
export const checkAuthTimeout =(expirationTime)=>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch(logout());
        }, expirationTime );
    }
}
export const login =(email, password)=>{
    return dispatch =>{
            dispatch(loginStart());
            let loginValue = {
                email: email, 
                password: password
            }
            console.log("login action ", email, password);
            axios.post("http://localhost:5000/api/users/login", loginValue)
                .then(res =>{
                    console.log("login res ", res);
                    if(res.data.error === null){
                        dispatch(loginSuccess(res.data.token, res.data.userId));
                        dispatch(checkAuthTimeout(res.data.expiresIn));
                        this.props.history.push("/current");
                    }else{
                        //console.log(res);
                        dispatch(loginFail(res.data.error, res.data.email));
                        //alert("Error occured");
                    }
                })
                .catch(err=>{
                    dispatch(loginFail(err, email));
                    //console.log('login err ', err);
                   // console.log(err);
                });
                
        }
    
}