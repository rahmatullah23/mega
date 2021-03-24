import React, { useState } from 'react';

const Country = (props) => {
    
    // console.log(country.name)
    // const {name,}
    return (
        <>
       
        <div className="col-md-2">
            <h4>{props.country.name}</h4>
           <button onClick={()=>props.handleCountry(props.country)} >add country</button>

        </div>
        </>
    );
};

export default Country;