import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Filters from './Filters';
import './Home.css';
import Results from './Results';
import { Redirect, Link } from "react-router-dom";
import { api_key, movie_api_base_url } from '../../constants';
import Favourite from '../../services/favourites'
const favourite = new Favourite()

const Home = (props) => {
    let [searchRes, updateSearchRes] = useState('')
    let typingTimer;               
    let searchInterval = 2000; 
    const handleSearchChange = ()=>{
        let searchVal = document.getElementById("searchText").value;
        
        clearTimeout(typingTimer);
        if (searchVal) {
            typingTimer = setTimeout(()=> fetchSearchResult(searchVal), searchInterval);
        }
    }

    const fetchSearchResult = (searchVal) => {
        //do something
        let url = `${movie_api_base_url}/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false&query=${searchVal}`
        fetch(
            url,
            {
            method: "GET",
            }
        )
        .then((res)=> res.json())
        .then((res)=>{
            
            updateSearchRes(res)
        })
        
    }

    const addToFavourite = (title, overview, movie_id) => {
        
        let email = props.auth.getEmail()

        favourite.add(email, title, overview, movie_id)
    }

    const removeFromFavourite = (movie_id) => {
        
        let email = props.auth.getEmail()

        favourite.remove(email, movie_id)
    }

    useEffect(()=>{
        
    }, [searchRes])
    return (
                props.auth.isAuthenticated()?
                <>
                    
                    <div className="container home-card mt-5 p-5">
                        <div className="my-3 border-bottom">
                            <h6><Link to="/favourites">Your Favourites</Link></h6>
                        </div>
                            <h3>Search images based on the names</h3>  
                        
                            <Filters Change={handleSearchChange} />
                        <div className="result-area"> 
                            <Results result={searchRes} addToFavourite={addToFavourite} removeFromFavourite={removeFromFavourite}/>
                        </div>
                    </div>
                </>:
                <Redirect to="/" />
                  
           
            
  
    )
}

export default Home;