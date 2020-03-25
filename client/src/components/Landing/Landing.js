import React from 'react';
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import './Landing.css';
import Login from './Login'
export default function Landing(props){
    const isAuthenticated = props.auth.isAuthenticated();
    return(
        isAuthenticated==null?  
        <>
            <Redirect to="/login" />  
        </>:
            <Redirect to="/home" />
    )
}