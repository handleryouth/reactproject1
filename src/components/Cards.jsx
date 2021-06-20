import React from "react";

function Card(props) {


  return (
    <div className={props.className}>
      <img src={props.logo} alt="images" />
      <h1 className="header">{props.header}</h1>
      <p className="paragraph">{props.paragraph}</p>
      <button className="button">Learn More</button>
    </div>
  );
}

export default Card;
