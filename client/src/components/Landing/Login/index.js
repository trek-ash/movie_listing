import React from 'react';
import Form from '../Form';
import '../Landing.css';
import {  Link,useHistory } from 'react-router-dom'

export default function Login(props){
    const history = useHistory()

    const onLogin = (email, password) => {        
        props.auth.login(email, password)
        .then((res)=>{
                history.push('/home')
        })
        .catch(err=>{
            history.push('/login')
            
        })
    }
    return(
        <div className='container custom-card p-5 mx-auto mt-5'>
            <br /> <br /> 
            <h3>Please login to continue</h3>  <br/>
            <Form 
                    role='Login'
                    action={onLogin}
            />   
            <div className='mt-5'> New User? <Link to={`/Register`}>Register</Link></div>
            <br />
       </div>
    )
}