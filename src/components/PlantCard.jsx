import React from "react";

const PlantCard = ({ plant }) => {
  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
    </div>
  );
};

export default PlantCard;
