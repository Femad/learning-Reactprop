import React from "react";
import Card from "./Card";
import "../css/cardsContainer.css";

function CardsContainer() {
  return (
    <div className="cards--wrapper">
      <Card
        img="./images/itachi.jpg"
        title="Life experience with cartoons"
        price={100}
        star=""
        reviewCount={6}
        rating="5.0"
        country="USA"
      />
      <Card
        img="./images/kaneki.jpg"
        title="Life experience with cartoons"
        price={80}
        star=""
        reviewCount={5}
        rating="5.7"
        country="JAMAICA"
      />
      <Card
        img="./images/nezuko.jpg"
        title="Life experience with cartoons"
        price={110}
        star=""
        reviewCount={5}
        rating="4.0"
        country="SCOTLAND"
      />
    </div>
  );
}

export default CardsContainer;
