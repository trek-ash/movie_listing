import React from 'react';

const Filters = (props)=>{
    return(
        <div>
            <input 
            type="text" 
            id="searchText"
            placeholder="Enter Search"
            onChange={props.Change}    
            />
        </div>
    )
}

export default Filters;