import React from 'react';

export const Register = (props)=>{
    // console.log(props.reg);
    return(
        <form onSubmit = {props.reg}>
        <div className = "form-group">
        <label>Name</label>
        <input type="text" id = "name" placeholder = "Enter your name" className = "form-control"/>
        </div>
        <div className = "form-group">
        <label>Username</label>
        <input type="text" id = "username" placeholder = "Enter your username" className = "form-control"/>
        </div>
        <div className = "form-group">
        <label>Password</label>
        <input type="password" id = "pwd" placeholder = "Enter your password" className = "form-control"/>
        </div>
       <button>Submit</button>
       <h2>{props.regMsg}</h2>
    </form>
    )
 
}