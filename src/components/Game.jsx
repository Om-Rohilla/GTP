import React, { useState } from "react";
import Question from "./Question";
import PlantCard from "./PlantCard";

const plantsData = {
  Tulsi: {
    name: "Tulsi",
    image: "https://imgs.search.brave.com/wo5jENCO8PLhxdAwdyK-PyvG6pEA9S4XXaErNEbB8aE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ4/Mjk4MjczMi9waG90/by9tZWRpY2luYWwt/dHVsc2ktbGVhdmVz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1fSk5oZzVCcjJI/WkJibzB5UG1GdjAy/djFvZzZmTDJNa2hV/NkxPcTZkbWJVPQ",  // Add the actual image URL
    questions: [
      {
        question: "Which part of Tulsi is commonly used for medicinal purposes?",
        options: ["Leaves", "Root", "Stem", "Flowers"],
        answer: "Leaves",
        info: "Tulsi leaves are considered sacred and are used in Ayurveda for various medicinal purposes.",
      },
      {
        question: "Tulsi is also known as?",
        options: ["Holy Basil", "Mint", "Rosemary", "Lavender"],
        answer: "Holy Basil",
        info: "Tulsi, or Holy Basil, is considered a sacred plant in Hinduism and has many health benefits.",
      },
    ],
  },
  Neem: {
    name: "Neem",
    image: "https://imgs.search.brave.com/f-aFIFKbnXlpnW_HNdiVU0-ytCDYW0MR4cy3mOztaHU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg0/Njk1NTMxL3Bob3Rv/L2hlcmJhbC1uZWVt/LWxlYXZlcy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9YVgz/a0Fua09ndTR6dGJs/NTNKa3J1OUt3cmpC/RUlla0hLZDRGMmVE/d0Q3Yz0",  // Add the actual image URL
    questions: [
      {
        question: "Neem is known for which of its properties?",
        options: ["Antibacterial", "Antiviral", "Antifungal", "All of the above"],
        answer: "All of the above",
        info: "Neem has powerful antibacterial, antiviral, and antifungal properties.",
      },
      {
        question: "Which part of Neem is most commonly used?",
        options: ["Leaves", "Bark", "Flowers", "Fruit"],
        answer: "Leaves",
        info: "Neem leaves are used in traditional medicine to treat a variety of ailments.",
      },
    ],
  },
  AloeVera: {
    name: "Aloe Vera",
    image: "https://imgs.search.brave.com/10RrrCzBLLCjqus9EWI516XI_tuPQ7Szr9_UXfnDCNo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOS8x/MC8wMi8xOS81Mi9n/cmVlbi00NTIxODMz/XzY0MC5qcGc", // Add the actual image URL
    questions: [
      {
        question: "Aloe Vera is known for which of its properties?",
        options: ["Healing", "Pain Relief", "Skin Moisturizing", "All of the above"],
        answer: "All of the above",
        info: "Aloe Vera is commonly used for its healing, pain-relieving, and moisturizing properties, especially for skin.",
      },
      {
        question: "Which part of Aloe Vera is used for medicinal purposes?",
        options: ["Leaves", "Root", "Flowers", "Stem"],
        answer: "Leaves",
        info: "The gel inside the leaves of Aloe Vera is used for treating burns, wounds, and other skin conditions.",
      },
    ],
  },
  Turmeric: {
    name: "Turmeric",
    image: "https://imgs.search.brave.com/SlycrLHVH4A_e8wACWrfZWKYG0w9V4p3nqDv3fTYSFQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2Lzk4Lzk5Lzg0/LzM2MF9GXzY5ODk5/ODQ3M190WTRzd0Np/OTNaNGhiVVlqTjB3/RHByU0RFcUkzdjc1/di5qcGc", // Add the actual image URL
    questions: [
      {
        question: "Turmeric is mainly known for which of its properties?",
        options: ["Antioxidant", "Anti-inflammatory", "Antibacterial", "All of the above"],
        answer: "All of the above",
        info: "Turmeric is widely known for its antioxidant, anti-inflammatory, and antibacterial properties.",
      },
      {
        question: "Which compound in Turmeric is responsible for its health benefits?",
        options: ["Curcumin", "Chlorophyll", "Caffeine", "Alkaline"],
        answer: "Curcumin",
        info: "Curcumin is the primary active compound in turmeric responsible for its health benefits.",
      },
    ],
  },
  Lemongrass: {
    name: "Lemongrass",
    image: "https://imgs.search.brave.com/1SuVL_Nw9JlvhFe8WOaMoMONPBbeUhX2rTUE1vBWMvo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGlua2ZsYW1pbmdv/YnJvdGhlcnMuY29t/LmF1L2Nkbi9zaG9w/L3Byb2R1Y3RzL2lt/YWdlXzY2NWYzYzcw/LTJmN2MtNDM5MC04/MmE4LTExMGQzNmI1/OWMwZF81MzB4QDJ4/LmpwZz92PTE2NTE5/NDM1MDk", // Add the actual image URL
    questions: [
      {
        question: "Lemongrass is commonly used for which purpose?",
        options: ["Culinary", "Medicinal", "Aromatic", "All of the above"],
        answer: "All of the above",
        info: "Lemongrass is used in cooking, traditional medicine, and as an aromatic herb.",
      },
      {
        question: "Which part of Lemongrass is used for medicinal purposes?",
        options: ["Leaves", "Root", "Flowers", "Stem"],
        answer: "Leaves",
        info: "The leaves of Lemongrass are used in teas and extracts for various medicinal benefits.",
      },
    ],
  },
  Mint: {
    name: "Mint",
    image: "https://imgs.search.brave.com/DwK4JJKQ5pCA-JHTRR8Ozznd1vkYBDJurBM8Pi0IUiw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQz/Nzg5NDMxNC9waG90/by9jbG9zZXVwLXNo/b3Qtb2YtYS1taW50/LXBsYW50LWdyb3dp/bmctYXQtdGhlLXZl/Z2V0YWJsZS1nYXJk/ZW4uanBnP2I9MSZz/PTYxMng2MTImdz0w/Jms9MjAmYz1fZ09Q/M0Q5MXhSWGdGTGIt/Z1FzcGZjNWo4VGtm/bi1VR3NFU3ItQ2lX/NFljPQ", // Add the actual image URL
    questions: [
      {
        question: "Mint is known for which of its properties?",
        options: ["Cooling", "Digestive Aid", "Aromatic", "All of the above"],
        answer: "All of the above",
        info: "Mint is widely used for its cooling properties, digestive aid, and aromatic qualities.",
      },
      {
        question: "Mint leaves are used for which purpose?",
        options: ["Culinary", "Medicinal", "Aromatic", "All of the above"],
        answer: "All of the above",
        info: "Mint leaves are used in cooking, teas, and for medicinal purposes like easing digestion.",
      },
    ],
  },
  Ashwagandha: {
    name: "Ashwagandha",
    image: "https://imgs.search.brave.com/DoWoCrdFzPivpNWhOKEMGHTinWDzOFOB_5Qaz1ny6xE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hc2h3YWdhbmRo/YS13aXRoYW5pYS1z/b21uaWZlcmEtZHJ5/LXJvb3Qtd2l0aC1m/cmVzaC1sZWF2ZXMt/bWVkaWNpbmFsLWhl/cmItaXNvbGF0ZWQt/d2hpdGVfNjkxNTc3/LTEzMzU3LmpwZz9z/ZW10PWFpc19oeWJy/aWQ", // Add the actual image URL
    questions: [
      {
        question: "Ashwagandha is known for which of its benefits?",
        options: ["Stress Reduction", "Energy Boost", "Improved Sleep", "All of the above"],
        answer: "All of the above",
        info: "Ashwagandha is commonly used to reduce stress, boost energy, and improve sleep quality.",
      },
      {
        question: "Which part of Ashwagandha is used for medicinal purposes?",
        options: ["Root", "Stem", "Leaves", "Flowers"],
        answer: "Root",
        info: "The root of Ashwagandha is used in traditional medicine for its adaptogenic properties.",
      },
    ],
  },
};

const Game = () => {
  const [currentPlant, setCurrentPlant] = useState("Tulsi");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [score, setScore] = useState(0); // Track the score

  const handleAnswer = (answer) => {
    const plant = plantsData[currentPlant];
    if (answer === plant.questions[questionIndex].answer) {
      setCorrectAnswer(true);
      setScore(score + 1); // Increase score for correct answer
      setShowImage(true);
    } else {
      setCorrectAnswer(false);
      setScore(score - 1); // Decrease score for incorrect answer
    }
  };

  const handleNextPlant = () => {
    const plantNames = Object.keys(plantsData);
    const nextPlantIndex = (plantNames.indexOf(currentPlant) + 1) % plantNames.length;
    if (nextPlantIndex === 0) {
      alert(`Game Over! Your score is: ${score}`);
      setScore(0);
      setCurrentPlant(plantNames[0]);
      setQuestionIndex(0);
    } else {
      setCurrentPlant(plantNames[nextPlantIndex]);
      setQuestionIndex(0);
      setShowImage(false);
      setCorrectAnswer(null);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentPlant("Tulsi");
    setQuestionIndex(0);
    setShowImage(false);
    setCorrectAnswer(null);
  };

  const plant = plantsData[currentPlant];
  const question = plant.questions[questionIndex];

  return (
    <div id="game-container">
      <Question
        question={question.question}
        options={question.options}
        onAnswer={handleAnswer}
      />
      {showImage && <PlantCard plant={plant} />}
      <div id="result">
        {correctAnswer === true && <p className="correct">Correct! 🎉</p>}
        {correctAnswer === false && <p className="incorrect">Wrong answer! Try again! 😔</p>}
      </div>
      <div>
        {Object.keys(plantsData).length === (questionIndex + 1) ? (
          <button onClick={handleRestart}>Restart Game</button>
        ) : (
          <button id="next-btn" onClick={handleNextPlant}>
            Next Plant
          </button>
        )}
      </div>
      <p>Score: {score}</p>
    </div>
  );
};

export default Game;
