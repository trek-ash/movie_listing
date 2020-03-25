import React, { useState } from 'react';
import './card.css'
const add_icon = require('../../../assets/icons/heart.png');
const fav_icon = require('../../../assets/icons/added_heart.png');
const remove_icon = require('../../../assets/icons/remove.png')
const MovieCard = (props) =>{
    const [isFav, setFav] = useState(props.isFavourite);
    return (
        <div className="card mt-4">
            <div className="card-header">
                {props.movie.original_title || props.movie.title}
                {   
                    isFav?
                    <>
                    <span 
                    className="float-right ml-3"
                    onClick={()=>{props.removeFromFavourite(props.movie.movie_id || props.movie.id); setFav(false)}}>
                        {/* Remove from favourite */}
                        
                        <img className="del-image cursor-pointer" src={remove_icon} alt="Remove"/>
                    </span>
                    </>
                    :<span 
                    className="float-right"
                    onClick={()=>{props.addToFavourite(props.movie.original_title, props.movie.overview, props.movie.id );setFav(true);}}>
                    <   img className="del-image cursor-pointer" src={add_icon} alt="Add"/>
                        
                    </span>    
                }
                
                
            </div>
            <div className="card-body">{props.movie.overview}</div>
            <div className="card-footer">
            
                {isFav?<img className="fav-image" src={fav_icon} alt="Fav"/>: ''}
                {props.movie.vote_average?<span className="float-right"><b>Rating:</b> {props.movie.vote_average}</span>: ''}
            </div>
        </div>
    )
}
export default MovieCard