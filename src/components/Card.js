import React from "react"
import star from "../images/Red_star.svg.png"

export default function Card(props){
    return (
        <div class = "card">
            <img src= {`/images/${props.img}`} alt="Event image" width={200} height={280}/>

            <div class="below-image">
                <img class="star" src ={star} alt="red star"/>
                <p class="rating">{props.rating}</p>
                <p class="trend-number">({props.reviewCount}) | {props.location}</p>
            </div>
            <p>{props.title}</p>
            <p class = "price"><strong>From ${props.price}</strong> / person</p>
        </div>
    )
}