import React from 'react';
import Form from '../Form';
import '../Landing.css';
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
        <div className='container custom-card p-5 mx-auto mt-5'><br /><br />
            <h3>Register yourself with us </h3> <br/>
            <Form 
                role='Register'
                action={onRegister}
            />
            <div className='mt-5'>Existing User? <Link to="/login">Login</Link></div><br></br>
        </div>
    )
}