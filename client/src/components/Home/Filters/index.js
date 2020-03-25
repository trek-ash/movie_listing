import React from 'react';

const Filters = (props)=>{
    return(
        <div>
            <input 
            type="text" 
            id="searchText"
            placeholder="Search ..."
            className="form-control"
            onChange={props.Change}    
            />
        </div>
    )
}

export default Filters;