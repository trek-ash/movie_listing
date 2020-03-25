import React from 'react';
import Form from '../Form';
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
        <div className='container mx-auto mt-5'>
            <h3>Please login to continue</h3>  <br/>
            <Form 
                    role='login'
                    action={onLogin}
            />   
            <div className='mt-4'> New User? <Link to={`/Register`}>Register</Link></div>
       </div>
    )
}