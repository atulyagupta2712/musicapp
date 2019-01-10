import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
export const Login=(props)=>{
    return(
        <form onSubmit = {props.login}>
            <div className = "form-group">
            <label>Username</label>
            <input id = "username" className = "form-control" id = "username" placeholder = "Enter your username" type="text"/>
            </div>
            <div className = "form-group">
            <label>Password</label>
            <input type="password" id = "pwd" className = "form-control" placeholder = "Enter your password"/>
            </div>
            <button>Login</button>
            <h2>{props.loginMsg}</h2>
        </form>
    )
}