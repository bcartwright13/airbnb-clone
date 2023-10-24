import React from "react"
import image from "../images/airbnb-logo.png"
import "../index.css"
export default function Navbar(){
    return (
        <nav>
            <img class = "logo" src= {image} alt="airbnb logo"/>
            <h2>airbnb</h2>
        </nav>
    )
}