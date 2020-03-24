import React, { useState } from 'react'
const Form = (props) =>{
    const [email, updateEmail] = useState('')
    const [password, updatePassword] = useState('')
    return(
        <form onSubmit={e => {e.preventDefault(); props.action(email, password)}}>
            <input 
            type="email" 
            name="email" 
            className="form-control"
            value={email}
            onChange={e=>updateEmail(e.target.value)}
            placeholder="Enter email"
            id="email"/>
            <input 
            type="password" 
            name="password" 
            className="form-control mt-3"
            value={password}
            onChange={e=>updatePassword(e.target.value)}
            placeholder="Enter password"
            id="password"/>

            <button className="btn btn-primary float-right mt-4" type="submit">{props.role}</button>  
        </form>
    )
}

export default Form;