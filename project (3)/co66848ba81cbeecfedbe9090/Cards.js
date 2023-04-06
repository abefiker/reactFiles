import React from "react"
export default function Card(props){
    console.log(props)
    return (
        <div className="place-div">
        <img className="main-img" src={props.data.imageUrl}/>
            <div className="text">
                    <div className="desc">
                        <img className="icon" src="../images/Fill-219.png"/>
                        <h3>{props.data.location}</h3>
                        <a href={props.data.googleMapsUrl}>Views On Google Maps</a>
                    </div>
                    <h1 >{props.data.title}</h1>
                    <h3>{props.data.startDate} - {props.data.endDate}</h3> 
                   <p>{props.data.description}</p>   
            </div>
        </div>
    )
}