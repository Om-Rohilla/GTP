import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";
import Question from "./Question";
import "../styles/animations.css";

const plantsData = {
  AloeVera: {
    name: "Aloe Vera",
    image: "https://imgs.search.brave.com/plgfiXkUvH8S7m5cGhI57lfZ7KvQgCrncpD1B5ebeC4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzkxLzUwLzEx/LzM2MF9GXzE5MTUw/MTEzMV84TTJkREUx/YUtpdUowOGRrWTY2/MEF3b1pBSnR4MXRF/ei5qcGc", // Change this URL
    info: "Aloe Vera is known for its skin soothing properties and is used widely in health and cosmetic products.",
    questions: [
      { question: "I am known for my soothing gel. Who am I?", options: ["Aloe Vera", "Neem", "Turmeric", "Mint"], answer: "Aloe Vera" },
      { question: "Which plant is used in skincare for burns and hydration?", options: ["Mint", "Aloe Vera", "Tulsi", "Ashwagandha"], answer: "Aloe Vera" },
    ]
  },
  Neem: {
    name: "Neem",
    image: "https://imgs.search.brave.com/UP1obHB_EDZG2czCOH6TLw_QrG7XS4MPmlwEHv9jbTQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3Lzk3LzI2LzE5/LzM2MF9GXzc5NzI2/MTkyOF9yc0hxOGFU/cFhieXlJSmdjMnlP/RmZNQlJXTGl0WGJ1/ai5qcGc", // Change this URL
    info: "Neem is well known for its medicinal properties, particularly for skin and health benefits.",
    questions: [
      { question: "Which plant is known for its antiviral and antifungal properties?", options: ["Neem", "Tulsi", "Aloe Vera", "Turmeric"], answer: "Neem" },
      { question: "Which plant's leaves are used for skincare and blood purification?", options: ["Neem", "Lemongrass", "Ashwagandha", "Mint"], answer: "Neem" },
    ]
  },
  Tulsi: {
    name: "Tulsi",
    image: "https://imgs.search.brave.com/wo5jENCO8PLhxdAwdyK-PyvG6pEA9S4XXaErNEbB8aE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ4/Mjk4MjczMi9waG90/by9tZWRpY2luYWwt/dHVsc2ktbGVhdmVz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1fSk5oZzVCcjJI/WkJibzB5UG1GdjAy/djFvZzZmTDJNa2hV/NkxPcTZkbWJVPQ", // Change this URL
    info: "Tulsi is considered sacred in Hinduism and is used for its medicinal properties, especially for respiratory health.",
    questions: [
      { question: "Which plant is considered sacred in Hinduism and is widely used for its medicinal properties?", options: ["Tulsi", "Neem", "Aloe Vera", "Mint"], answer: "Tulsi" },
      { question: "Which plant is commonly used to boost immunity and has a distinct aroma that is beneficial for respiratory health?", options: ["Tulsi", "Turmeric", "Ashwagandha", "Lemongrass"], answer: "Tulsi" },
    ]
  },
  Turmeric: {
    name: "Turmeric",
    image: "https://imgs.search.brave.com/lFZHP_eG7R4CrDZPyRqtWGKU5nzTKU9Xy0KCDRymSo4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTA5/MjE1NDYyL3Bob3Rv/L3R1cm1lcmljLXJv/b3QtcG93ZGVyLWFu/ZC1jYXBzdWxlcy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Q0ZvRGU0alcxNGdU/Q1pvS2oxeXBBUFhf/bTJ0Rmk0TTBseGZJ/R05tOTJuaz0", // Change this URL
    info: "Turmeric is known for its vibrant yellow color and is used in cooking and skincare for its anti-inflammatory properties.",
    questions: [
      { question: "Which plant is known for its vibrant yellow color and is commonly used in cooking and skincare for its anti-inflammatory properties?", options: ["Turmeric", "Neem", "Mint", "Tulsi"], answer: "Turmeric" },
      { question: "Which plant's root is often used in traditional medicine for its antibacterial and antioxidant properties?", options: ["Turmeric", "Ashwagandha", "Lemongrass", "Tulsi"], answer: "Turmeric" },
    ]
  },
  Lemongrass: {
    name: "Lemongrass",
    image: "https://imgs.search.brave.com/KOH0NtQbULhzdhMcq3FbeO6WEQJ81kiSrdmrQrGR-_Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTgw/ODMxMTk4L3Bob3Rv/L2xlbW9uLWdyYXNz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0zTDJ5c3EyRkVC/NHUxV0U5X1hsQ2VP/RHN0Z29ZTTFVNER5/UEc1X3Y4ODNBPQ", // Change this URL
    info: "Lemongrass is known for its citrus aroma and is used in teas and as a natural remedy for digestion.",
    questions: [
      { question: "Which plant is known for its citrus aroma and is used in teas and as a natural remedy for digestion?", options: ["Lemongrass", "Mint", "Tulsi", "Turmeric"], answer: "Lemongrass" },
      { question: "Which plant is commonly used in cooking and essential oils for its refreshing scent and calming properties?", options: ["Lemongrass", "Mint", "Tulsi", "Turmeric"], answer: "Lemongrass" },
    ]
  },
  Mint: {
    name: "Mint",
    image: "https://imgs.search.brave.com/9lTrYy4X4Pig5ojnoRv8Cx79w9AGCLYniYXjJbDeNro/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjEy/Mzg0MzQwL3Bob3Rv/L21pbnQtbGVhZi1j/bG9zZS11cC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Y2R3/dVlabEd2bDkycEMy/MGNtM3hBVGJkX3Nq/alZEa3VsdXJRdE9B/LVlfND0", // Change this URL
    info: "Mint is a fragrant herb commonly used in culinary dishes, teas, and for its medicinal properties, especially for digestion.",
    questions: [
      { question: "Which plant is commonly used in teas for its refreshing and soothing properties?", options: ["Mint", "Aloe Vera", "Tulsi", "Lemongrass"], answer: "Mint" },
      { question: "Which plant is often used to treat indigestion and can be added to cold beverages for a refreshing taste?", options: ["Mint", "Neem", "Ashwagandha", "Turmeric"], answer: "Mint" },
    ]
  },
  Ashwagandha: {
    name: "Ashwagandha",
    image: "https://imgs.search.brave.com/rMtP1oaNzy0FsHBH2rZUPJV4enM9-yuKNbVHC4YHDi4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ3/ODAyMTYwNS9waG90/by9hc2h3YWdhbmRo/YS1yb290cy1hbmQt/bGVhdmVzLW9uLXdo/aXRlLWJhY2tncm91/bmQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWNIUUdNWksz/UlJkZ2JqMkEwc2V6/c2tVektOaDJuWHAz/TGR1OHpQYkpsRXM9", // Change this URL
    info: "Ashwagandha is an adaptogen herb known for its stress-reducing properties and is used in traditional medicine.",
    questions: [
      { question: "Which plant is known for its stress-reducing and adaptogenic properties?", options: ["Ashwagandha", "Tulsi", "Mint", "Lemongrass"], answer: "Ashwagandha" },
      { question: "Which plant is commonly used to improve energy, reduce anxiety, and enhance overall vitality?", options: ["Ashwagandha", "Turmeric", "Neem", "Aloe Vera"], answer: "Ashwagandha" },
    ]
  },
};
const Game = () => {
  const [currentPlant, setCurrentPlant] = useState("AloeVera");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [wrongAnswerMessage, setWrongAnswerMessage] = useState("Wrong answer! Try "); // State for wrong answer message

  const plant = plantsData[currentPlant];
  if (!plant) {
    return <div>Loading...</div>;
  }

  const question = plant.questions[currentQuestion];

  const handleAnswer = (answer) => {
    if (answer === question.answer) {
      setScore((prev) => prev + 1);
      setIsRevealed(true);
      setWrongAnswerMessage(""); // Clear wrong answer message if correct
    } else {
      setScore((prev) => prev - 1);
      setWrongAnswerMessage("Wrong answer! Try again."); // Set the wrong answer message
      setTimeout(() => setWrongAnswerMessage(""), 2000); // Clear the message after 2 seconds
    }
  };

  const nextQuestion = () => {
    const nextIndex = currentQuestion + 1;
    if (nextIndex < plant.questions.length) {
      setCurrentQuestion(nextIndex);
      setIsRevealed(false);
    } else {
      nextPlant();
    }
  };

  const nextPlant = () => {
    setIsRevealed(false);
    setCurrentQuestion(0);
    const plantKeys = Object.keys(plantsData);
    const nextIndex = (plantKeys.indexOf(currentPlant) + 1) % plantKeys.length;
    if (nextIndex === 0) {
      setIsGameOver(true);
    } else {
      setCurrentPlant(plantKeys[nextIndex]);
    }
  };

  const restartGame = () => {
    setCurrentPlant("AloeVera");
    setCurrentQuestion(0);
    setScore(0);
    setIsGameOver(false);
    setIsRevealed(false);
    setWrongAnswerMessage(""); // Reset wrong answer message
  };

  if (isGameOver) {
    return (
      <div className="game-container card">
        <h2>Congratulations! 🌱</h2>
        <p>Your final score is: {score}</p>
        <p>"Thanks for playing! Have a nice day 🌟"</p>
        <button className="restart-btn" onClick={restartGame}>
          Restart Game
        </button>
      </div>
    );
  }

  return (
    <div className="game-container card">
      <PlantCard plant={plant} isRevealed={isRevealed} />
      {!isRevealed ? (
        <Question
          question={question.question}
          options={question.options}
          onAnswer={handleAnswer}
        />
      ) : (
        <div className="info-box">
          <h3>Well Done! 🎉</h3>
          <p>{plant.info}</p>
          {currentQuestion < plant.questions.length - 1 ? (
            <button className="next-btn" onClick={nextQuestion}>
              Next Question
            </button>
          ) : (
            <button className="next-btn" onClick={nextPlant}>
              Next Plant
            </button>
          )}
        </div>
      )}
      <p className="score">Score: {score}</p>
      {wrongAnswerMessage && <p className="incorrect">{wrongAnswerMessage}</p>} {/* Display wrong answer message */}
    </div>
  );
};

export default Game;
