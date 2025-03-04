import React from "react";

const Teammembercard = ({Name,Jobtitle})=>{
    //adding {Name,jobtitle} for using it in the app.jsx
    const Name_1 = "John Doe"
    const Jobtitle_1 = "Software Enginner"

    const Name_2 = "Mark Smith"
    const Jobtitle_2 = "Software developer"

    return(
        <>
        <div className="details">
            <h1>Name: {Name_1}</h1>
            <h2>Job: {Jobtitle_1}</h2>
        </div>

        <div>
            <h1>Name: {Name_2}</h1>
            <h2>Job: {Jobtitle_2}</h2>
        </div>
        </>
    )
}

export default Teammembercard;