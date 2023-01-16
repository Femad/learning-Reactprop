import React from "react";
// import Logo from "../images/ninja.jpg";
import "../css/card.css";

function Card(props) {
  let badgeText;
  if (props.detail.openSpots === 0) {
    badgeText = "sold out";
  } else if (props.detail.location === "online") {
    badgeText = "online";
  }
  return (
    <div className="card--main">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.detail.img} alt="" className="card--pix" />
      <div className="card--stats">
        <div className="card--rating card bold ">
          Rating: {props.detail.rating}
        </div>
        <div className="card--country card grey bold">
          {props.detail.country}
        </div>
        <div className="card--reviewCount card bold">
          Reviews: {props.detail.reviewCount}
        </div>
        <div className="card--title card">{props.detail.title}</div>
        <div className="card--price card bold">From: ${props.detail.price}</div>
        <div className="card--price card bold location">
          {props.detail.location}
        </div>
      </div>
    </div>
  );
}

export default Card;
