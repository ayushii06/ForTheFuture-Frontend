import React, { useState, useEffect } from 'react';

const QuizQuestion = ({ question, options, correctAnswer, handleScoreChange, goToNextQuestion }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleClick = (option) => {
    if (!isAnswered) {
      setSelectedOption(option);
      setIsAnswered(true);
      if (option === correctAnswer) {
        handleScoreChange(1);
      } else {
        handleScoreChange(0);
      }
    }
  };

  const getOptionStyle = (option) => {
    if (!isAnswered) {
      return {};
    }
    if (option === correctAnswer) {
      return { backgroundColor: 'green', color: 'white' };
    }
    if (option === selectedOption) {
      return { backgroundColor: '#ff1c1c', color: 'white' };
    }
    return {};
  };

  useEffect(() => {
    // Reset the question state when the question changes
    setSelectedOption(null);
    setIsAnswered(false);
  }, [question]);

  return (
    <div className='ques-container'>
      <h3 className='question'>{question}</h3>
      <div className="answers">
      {options.map((option, index) => (
        <p
          key={index}
          onClick={() => handleClick(option)}
          style={getOptionStyle(option)}
        >
          {option}
        </p>
       
      ))} </div>
      {isAnswered && (
        <button className='btn-next' onClick={goToNextQuestion}>Next Question</button>
      )}
    </div>
  );
};

export default QuizQuestion;