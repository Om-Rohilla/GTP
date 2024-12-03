import React from "react";

const Question = ({ question, options, onAnswer }) => {
  return (
    <div className="question-card">
      <h2>{question}</h2>
      <div className="options">
        {options.map((option, index) => (
          <button key={index} onClick={() => onAnswer(option)} className="option-btn">
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
