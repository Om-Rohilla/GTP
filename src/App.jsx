import React, { useState } from 'react';
import Game from './components/Game';
import "./styles/index.css"; 

const App = () => {
  return (
    <div id="app-container">
      <h1>🌱 Guess the Plant Game! 🌿</h1>
      <Game />
    </div>
  );
};

export default App;
