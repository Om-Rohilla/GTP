import React from "react";
import "../styles/index.css";

const Question = ({ question, options, onAnswer }) => {
  return (
    <div className="question-container">
      <div className="question-icon">❓</div>
      <p>{question}</p>
      <div className="options">
        {options.map((option) => (
          <button key={option} className="option-btn" onClick={() => onAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
