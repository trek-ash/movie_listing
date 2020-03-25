import { api_base_url } from '../../constants'; 
var jwt = require("jsonwebtoken");

class Auth {
    
    login = (email, password) =>{
        const requestOptions = {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({ email: email, password: password})
        };
        return new Promise((res, rej)=>{
            fetch(
                `${api_base_url}/login`,
                requestOptions
            )
            .then(response => {
                
                if(response.status===400)
                    return res(false)
                
                else return response.json()
            })
            .then(response => {
                if(response){
                    this.email = email
                    this.setSession(response)
                    res(true)
                }
                else
                    res(false)
            })
            .catch(err=>rej(err))
        })
        
    }

    register = (email, password) => {
        const requestOptions = {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({ email: email, password: password})
        };
        return new Promise((res, rej)=>{
            fetch(
                `${api_base_url}/register`,
                requestOptions
            )
            .then(response => {
                
                return response.json()
            })
            .then(response => {
                
                if(response){
                    this.email=email
                    this.setSession(response)
                    res(true)
                }
                else
                    res(false)
            })
            .catch(err=>{
                
                rej(err)
            })
        })
        
    }

    handleAuthentication = () => {
        
    }

    // Sets user details in localStorage
    setSession = (accessToken) => {
        localStorage.setItem('access_token', accessToken.Body.split(' ')[1]);
    }

    // removes user details from localStorage
    logout = () => {
        localStorage.removeItem('access_token');
    }

    // checks if the user is authenticated
    isAuthenticated = () => {
        let isAuthenticated = localStorage.getItem('access_token');
        // return new Date().getTime() < expiresAt.exp;;
        
        return isAuthenticated
    }

    getEmail = () => {
        const token = localStorage.getItem('access_token')
        return jwt.decode(token).email;
    }    


}

export default Auth;