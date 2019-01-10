import React from 'react';
import {NavLink} from 'react-router-dom';

export const Nav = (props)=>{
  // var name = localStorage.getItem('name');
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand"><NavLink to = "/" activeClassName = "active">Navbar</NavLink></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav mr-auto">

         </ul>
          <form className="form-inline my-2 my-lg-0">
          {!props.isUser ?
          <ul className="navbar-nav mr-auto">
         
           <li className="nav-item">
              <a className="nav-link"><NavLink to = "/login">Login</NavLink></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"><NavLink to = "/register">Register</NavLink></a>
            </li>
          
          
          </ul>
          :
          <ul className="navbar-nav mr-auto">
         
          <li className="nav-item">
             <a className="nav-link"><NavLink to = "/list">Songs List</NavLink></a>
           </li>
           <li className="nav-item">
             <a className="nav-link"><NavLink to = "/addSong">Add your song!</NavLink></a>
           </li>
           <li className="nav-item">
             <a className="nav-link"><NavLink to = "/register">Playlist</NavLink></a>
           </li>
         
         </ul>
          }
          </form>
        </div>
      </nav>
    )
}