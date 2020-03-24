import React from 'react';
import { Redirect } from 'react-router-dom';
const Favourites = (props) => {
    return(
        <div>
        {
            props.auth.isAuthenticated?
            <>
            <div>
                My Favourites
            </div> 
            </>:
                <Redirect to="/" />
        }
        </div>
    )
}
export default Favourites;