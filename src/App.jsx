import React from "react";
import Game from "./components/Game";
import "./styles/index.css";

const App = () => {
  return (
    <div className="game-container">
      <div className="title-card">
        <h1 className="title">🌿 Guess the Plant Game!</h1>
      </div>
      
      <Game />
    </div>
  );
};

export default App;
