import React from "react";

const Teammembercard = ({Name,Jobtitle})=>{
    //adding {Name,jobtitle} for using it in the app.jsx
 

    return(
        <>
        <div className="details">
            <h1>Name: {Name}</h1>
            <h2>Job: {Jobtitle}</h2>
        </div>

        
        </>
    )
}

export default Teammembercard;