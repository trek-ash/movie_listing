import React from 'react';
import Form from '../Form';
import {  Link,useHistory } from 'react-router-dom'
export default function Register(props){
    const history = useHistory()
    const onRegister = (email, password) =>{
        console.log(email, password)
        props.auth.register(email, password)
        .then(()=>{
            history.push('/home')
        })
        .catch(err=>{
            history.push('/register')
            
        })
        
    }
    return(
        <div className='container mx-auto mt-5'>
            <h3>Register yourself with us </h3> <br/>
            <Form 
                role='Register'
                action={onRegister}
            />
            <div className='mt-4'>Existing User: <Link to="/login">Login</Link></div>
        </div>
    )
}