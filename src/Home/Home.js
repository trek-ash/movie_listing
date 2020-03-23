import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Filters from './Filters';
import Results from './Results';
import { api_key, movie_api_base_url } from '../constants';
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
            console.log(res)
            updateSearchRes(res)
        })
        console.log(searchVal)
    }

    useEffect(()=>{
        console.log(searchRes)
    }, [searchRes])
    return (
        <div>

            Home here!!

            <div> 
                <Filters Change={handleSearchChange} />
                <Results result={searchRes}/>
            </div>
        </div> 
    )
}

export default Home;