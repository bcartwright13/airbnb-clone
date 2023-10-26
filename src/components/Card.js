import React from "react"
import image from "../images/katiee-zaferes.png"
import star from "../images/Red_star.svg.png"
export default function Card(){
    return (
        <div>
            <div class = "card">
                <img src = {image} alt="katie zaferes" width="200px"/>
                <div class="below-image">
                    <img class="star" src ={star} alt="red star"/>
                    <p class="rating">5.0</p>
                    <p class="trend-number">(5) USA</p>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p class = "price"><strong>From $136</strong> / person</p>
            </div>
        </div>
    )
}