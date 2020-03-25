import React, { useState } from 'react'
import './Form.css';
const Form = (props) =>{
    const [email, updateEmail] = useState('')
    const [password, updatePassword] = useState('')
    return(
        <form onSubmit={e => {e.preventDefault(); props.action(email, password)}}>
            <br /> 
            <input 
            type="email" 
            name="email" 
            className="form-control"
            value={email}
            onChange={e=>updateEmail(e.target.value)}
            placeholder="Enter email"
            id="email"/>
            <br /> 
            <input 
            type="password" 
            name="password" 
            className="form-control mt-3"
            value={password}
            onChange={e=>updatePassword(e.target.value)}
            placeholder="Enter password"
            id="password"/>
            <div className="clear-both"></div>
            <button className="btn btn-outline-primary float-right mt-5" type="submit">{props.role}</button> 
            <br /> 
        </form>
    )
}

export default Form;