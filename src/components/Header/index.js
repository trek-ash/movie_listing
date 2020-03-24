import React from 'react';
import { useHistory } from 'react-router-dom'
import './header.css'
const Header = (props)=>{
    const history = useHistory()
    const isAuthenticated = props.auth.isAuthenticated()
    const onLogout = () => { 
      props.auth.logout()
      history.push('/')
    }
    return (
        <nav className="py-5 px-4 border-bottom">
          {
            isAuthenticated?
            <>
            <div className="clear-both"></div>
            <button 
            className="float-right btn btn-danger"
            onClick={onLogout}
            >
              Logout
            </button>   
            </>:
            ''
          }
          <h1>Movie Finder | <small>Search what to watch next</small></h1>
          

          
          
        </nav>
    )
}

export default Header;