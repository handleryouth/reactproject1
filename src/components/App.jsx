import React from "react";
import Cards from "./Cards.jsx";

function App() {
  return (
    <div className="column-container">
      <Cards
        className="sedans-container"
        logo="/images/icon-sedans.svg"
        header="SEDANS"
        paragraph="Choose a sedan for its affordability and excellent fuel economy. 
          Ideal for cruising in the city or on your next road trip."
      />

      <Cards
        className="suv-container"
        logo="/images/icon-suvs.svg"
        header="SUVs"
        paragraph="Take an SUV for its spacious interior, power, and versatility. 
    Perfect for your next family vacation and off-road adventures."
      />

      <Cards
        className="luxury-container"
        logo="/images/icon-luxury.svg"
        header="LUXURY"
        paragraph="Cruise in the best car brands without the bloated prices. 
        Enjoy the enhanced comfort of a luxury rental and arrive in style."
      />
    </div>
  );
}

export default App;
