import React from "react"

export default function ProfileCard({name, age, avatar}) {
    return(
        <div style={{border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", marginBottom: "1rem"}}>
         <img style={{width: "100px", borderRadius:"50%"}} alt="avatar" src={avatar}  />
       <h3>{name}</h3>
       <p>Age: {age}</p>
        </div>
    )
}


