import React from 'react'
const MovieCard = (props) =>{
    return (
        <div className="card mt-4">
            <div className="card-header">
                <span 
                className="float-right"
                onClick={()=>props.addToFavourite(props.movie.original_title, props.movie.overview, props.movie.id)}>
                    Add to favourite
                </span>    
                {props.movie.original_title}
            </div>
            <div className="card-body">{props.movie.overview}</div>
            <div className="card-footer">
                <span className="float-right"><b>Rating:</b> {props.movie.vote_average}</span>
            </div>
        </div>
    )
}
export default MovieCard