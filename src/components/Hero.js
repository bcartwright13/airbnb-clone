import React from "react"
import image from "../images/hero-image.png"
export default function Hero(){
    return (
        <div>
            <img class="hero-image"src={image} alt="image of people" width="400px"/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by<br/>
                one-of-a-kind hosts-all without leaving<br/>
                home
            </p>
        </div>
    )
}