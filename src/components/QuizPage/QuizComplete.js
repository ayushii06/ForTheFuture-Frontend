import React from 'react'

function QuizComplete(props) {
    const score = props;
  return (
    <div className='container'>
        <p className="">Quiz Completed!</p>
        <p className="">You Scored {score} points</p>
    </div>
  )
}

export default QuizComplete