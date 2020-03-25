import React from 'react'
import MovieCard from '../Movie_card'

const Results = (props) =>{
    return(
        <div className="mt-4 border p-2">
            {
                !props.result ?
                'No Results'
                :
                props.result?.results?.map((movie)=> {
                    return <MovieCard addToFavourite={props.addToFavourite} removeFromFavourite={props.removeFromFavourite} key={movie.id} movie={movie}/>
                })
            }
        </div>
    )
}
export default Results