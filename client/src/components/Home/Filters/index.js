import React from 'react';
import './Filters.css'

const Filters = (props)=>{
    return(
        <div>
            <input 
            type="text" 
            id="searchText"
            placeholder="Search ..."
            className="search-box my-3"
            onChange={props.Change}    
            />
        </div>
    )
}

export default Filters;