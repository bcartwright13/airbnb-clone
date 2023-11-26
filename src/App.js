import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import cardData from "./data"


function App() {
  const cards = cardData.map(card => {
    return(
      <Card 
        img = {card.coverImg}
        rating = {card.stats.rating}
        reviewCount = {card.stats.reviewCount}
        location = {card.location}
        title = {card.title}
        price = {card.price}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
        
    </div>
  );
}

export default App;
