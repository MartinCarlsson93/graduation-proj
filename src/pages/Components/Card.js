import React from "react";

function Card(props) {
  console.log(props);
  return (
    <div style={{ backgroundColor: "cyan", margin: "16px", width: "250px" }}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
