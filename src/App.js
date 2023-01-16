import React from "react";
import "./app.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import CardApi from "./components/CardApi";

function App() {
  //iteration starts here
  const test = CardApi.map((detail) => {
    return (
      <Card
        key={detail.id}
        detail={detail}
        // title={detail.title}
        // price={detail.price}
        // star=""
        // reviewCount={detail.reviewCount}
        // rating={detail.rating}
        // country={detail.country}
        // openSpots={detail.openSpots}
        // location={detail.location}
      />
    );
  });
  // iteration ends here

  return (
    <div className="container">
      <NavBar />
      <Hero />
      <div className="cards--wrapper">
        {/* calling all cards contents */}
        {test}
      </div>
    </div>
  );
}

export default App;
