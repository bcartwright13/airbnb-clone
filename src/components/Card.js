import React from "react"
import star from "../images/Red_star.svg.png"

export default function Card(props){
    let badgeText
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.location === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <div class = "card">
            {badgeText != null && <div className="card-badge">{badgeText}</div>}
            <img src= {`/images/${props.coverImg}`} alt="Event" width={200} height={260}/>

            <div class="below-image">
                <img class="star" src ={star} alt="red star"/>
                <p class="rating">{props.stats.rating}</p>
                <p class="trend-number">({props.stats.reviewCount}) | {props.location}</p>
            </div>
            <p>{props.title}</p>
            <p class = "price"><strong>From ${props.price}</strong> / person</p>
        </div>
    )
}