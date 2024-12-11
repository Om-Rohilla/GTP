import React from "react";
import "../styles/index.css";

const PlantCard = ({ plant, isRevealed }) => {
  return (
    <div className={`plant-card ${isRevealed ? "reveal" : "hidden"}`}>
      {isRevealed ? (
        <div className="card-front">
          <img src={plant.image} alt={plant.name} />
          <h2>{plant.name}</h2>
          <p>{plant.info}</p>
        </div>
      ) : (
        <div className="card-back"></div>
      )}
    </div>
  );
};

export default PlantCard;
