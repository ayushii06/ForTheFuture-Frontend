import React, { useState } from 'react';
import QuizQuestion from '../QuizPage/QuizQuestion';
import '../QuizPage/quizpage.css'
import QuizComplete from './QuizComplete';

const QuizPg = () => {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    {
      question: 'Which gas is most responsible for the greenhouse effect?',
      options: ['Qxygen', 'Nitrogen', 'Carbon dioxide', 'Helium'],
      correctAnswer: 'Carbon dioxide',
    },
    {
      question: 'Which of the following is a renewable energy source?',
      options: ['Coal','Natural Gas','Solar Power','Nuclear Power'],
      correctAnswer: 'Solar Power',
    },
    {
      question: 'Earth Day is celebrated on ?',
      options: ['22 Apr', '15 Mar', '5 Jun', '7 Jan'],
      correctAnswer: '22 Apr',
    },
    {
      question: 'What is the primary effect of melting polar ice caps?',
      options: ['Increased global temperatures', 'Rising sea levels', 'More frequent earthquakes', 'Changes in ocean salinity'],
      correctAnswer: 'Rising sea levels',
    },
    {
      question: 'Which United Nations Sustainable Development Goal focuses specifically on climate action?',
      options: ['Goal 11', 'Goal 12', 'Goal 13', 'Goal 14'],
      correctAnswer: 'Goal 13',
    },
    {
      question: 'Which sector is the largest contributor to global greenhouse gas emissions?',
      options: ['Agriculture', 'Transportation', 'Industry', 'Energy Production'],
      correctAnswer: 'Energy Production',
    },
    {
      question: 'Which year was the Paris Agreement adopted?',
      options: ['2010', '2005', '2015', '2020'],
      correctAnswer: '2015',
    },
  ];

  const handleScoreChange = (increment) => {
    setScore(score + increment);
  };

  const goToNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div>
      {/* <p className='score'>Score: {score}</p> */}
      {currentQuestionIndex < questions.length ? (
        <QuizQuestion
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          correctAnswer={questions[currentQuestionIndex].correctAnswer}
          handleScoreChange={handleScoreChange}
          goToNextQuestion={goToNextQuestion}
        />
      ) : ( 
      <div className=''>
      <p className="quiz-com">Quiz Completed!</p>
      <p className="quiz-com score">You Scored {score} points</p>
  </div>
      )}
    </div>
  );
};

export default QuizPg;
