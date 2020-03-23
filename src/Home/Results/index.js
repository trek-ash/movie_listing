import React from 'react'
const Results = (props) =>{
    return(
        <div>
            {props.result?.results?.map((mov)=> {
                return <div key={mov.id}>{mov.title}</div>
            })}
        </div>
    )
}
export default Results