import React from 'react';
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import './Landing.css';
import Login from './Login'
export default function Landing(props){
    const isAuthenticated = props.auth.isAuthenticated();
    return(
        isAuthenticated==null?
        <>  
            <div className='container mx-auto'>
                <Login auth={props.auth}/>
            </div>
        </>:
        <Redirect to="/home" />
    )
}