import React from 'react';
import classes from './Login.module.css';

import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import {Route} from 'react-router-dom';
import Spinner from '../../components/UI/Spinner/Spinner';
import logo from '../../assets/kd-logo.png';
class Login extends React.Component{
    state = {
        loginform: {
            email:{
                elementType: 'input', 
                elementConfig: {
                    type: 'text', 
                    placeholder: 'Email'
                }, 
                value: '', 
                validation: {
                    required: true, 
                    minLength: 5, 
                    maxLength: 30
                }, 
                valid: false, 
                touched: false
                }, 
            password: {
                elementType: 'input', 
                elementConfig: {
                    type: 'password', 
                    placeholder: 'Нууц үг'
                }, 
                value: '', 
                validation: {
                    required: true, 
                    minLength: 1, 
                    maxLength: 30
                }, 
                valid: false, 
                touched: false
            }, 
        }, 
        isformValid: false, 
        

    }
    loginClicked=(event)=>{
        event.preventDefault();
        
        this.props.onLogin(this.state.loginform.email.value, this.state.loginform.password.value);
        
        console.log("login Clicked");
    }
    onChangeHandler=(event, id)=>{
        let tempForm = null;
        tempForm = {...this.state.loginform};
        tempForm[id].value = event.target.value;
        tempForm[id].valid = this.checkValidity(event.target.value, tempForm[id].validation);
        tempForm[id].touched = true;
        let formvalid = true;
        
        for(let i in tempForm){
            
            formvalid = formvalid && tempForm[i].valid;
        }
       
        console.log("on change handler =================");
       console.log(this.state);
        this.setState({loginform: tempForm, isformValid: formvalid});

        
    }
    checkValidity=(value, rule) =>{
        if(!rule){
            return true;
        }
        let isValid = true;
        if(rule.required){
            if(rule.maxLength){
                console.log("max length ", value.length <=rule.maxLength);
                isValid = isValid && value.length <= rule.maxLength;
            }
            if(rule.minLength){
                console.log("min length ", value.length >=rule.minLength);
                isValid = isValid && value.length >= rule.minLength;
            }
            console.log(isValid + "  "+ value);
        }
        return isValid;
    }
    render(){
        console.log(this.props);
        let formElements = {...this.state.loginform};
        const elementFormList = [];
        for(let i in formElements){
            elementFormList.push({id: i, config: formElements[i]});
        }
        let form = (
            <form onSubmit = {this.loginClicked}>
                {
                    elementFormList.map(igkey =>{
                        return(
                            <div className = {classes.FormGroup} key = {igkey.id}>
                                <label htmlFor= {igkey.id}>{igkey.config.elementConfig.placeholder}</label>
                                <input type={igkey.config.elementConfig.type} id = {igkey.id} 
                                onChange = {(event)=>this.onChangeHandler(event, igkey.id)}
                                placeholder = {igkey.config.elementConfig.placeholder}  
                                value = {igkey.config.value} className = {[classes.FormInput, (igkey.config.touched  && igkey.config.valid) ? classes.Success: (igkey.config.touched && !igkey.config.valid) ? classes.Fail: null].join(' ')}/>
                            </div>
                        )
                    })
                }
                <button className = {classes.loginButton} disabled = {!this.state.isformValid}>Login</button>
            </form>
        );
        if(this.props.loading){
            form = <Spinner />;
        }
        let errors = [];
        if(this.props.error){
            for(let i in this.props.error){
                errors.push({id: i, msg: this.props.error[i]});
            }
            
        }else{
            //this.state.loginform.email.value = this.props.email;
        }
        return(
            <div className = {classes.Login}>
                <div className = {classes.LoginContainer}>
                <img src={logo} alt="" width = "200px"/>
                    <div className = {classes.ErrorContainer}>
                        {errors.map(igkey=>{
                            return(
                                <p key ={igkey.id}>{igkey.msg}</p>
                            )
                        })}
                    </div>
                    
                    <h3>Login form</h3>
                    <div className = {classes.LoginForm}>
                        {form}
                    </div>
                </div>
                
            </div>
        );
    }
}
const mapStateToProps = state =>{
    console.log("map state to props " , state.login);
    return{
        email: state.login.email, 
        error: state.login.error, 
        loading: state.login.loading
    }
}
const mapDispatchToProps =dispatch=>{
    return{
        onLogin: (email, password)=>dispatch(actions.login(email, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);