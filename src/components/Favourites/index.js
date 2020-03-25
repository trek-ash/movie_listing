import React, { useState, useEffect } from 'react';
import { Redirect, useHistory, Link } from 'react-router-dom';
import MovieCard from '../Home/Movie_card';


const Favourites = (props) => {
    const history = useHistory()

    const [favourites, getFavourite] = useState(null)
    const removeFromFavourite = (movie_id) =>{
        props.favourite.remove(props.auth.getEmail(), movie_id)
        .then((res)=>{ 
            getFavourite(res.Body.favourites)
        })
    }
    useEffect(()=>{
        props.favourite.getFavourites(props.auth.getEmail()).then((res)=>{
            
            getFavourite(res)
        })
    }, [])
    return(
        <div>
        {
            props.auth.isAuthenticated?
            
            <>
            <div className="container mx-auto mt-5">
                <div className="my-3 border-bottom">
                    <Link to="/home">Home</Link>
                </div>
                <h3>My Favourites</h3>
                <div>
                {
                    favourites
                    ?.map((movie)=> {
                        return <MovieCard removeFromFavourite={removeFromFavourite} key={movie.movie_id} movie={movie} isFavourite='true'/>
                    })        
                    
                }</div>
            </div> 
            </>
            :
                <Redirect to="/" />
        }
        </div>
    )
}
export default Favourites;