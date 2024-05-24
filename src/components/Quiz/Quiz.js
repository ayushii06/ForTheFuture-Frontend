import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Quiz/Quiz.css'


function Quiz() {
  const navigate = useNavigate()
  const [click,setClick] = useState(false)
  function handleClick(){
    setClick(true)
  }
  function handleClicks(){
    navigate('/questions')
  }
  return (
  
      !click? <div style={{textAlign:'center',margin:'9vh auto'}}>
      <p className="text-center welcome-heading font-bold">Get Involved in The Community<p className='appname font-bold'>Explore Real-Time Climate Data and Insights</p></p>
      <p className="head-home quiz-heading">Test your knowledge about climate change and learn about the pressing issues facing our planet and discover how you can contribute to a more sustainable future.</p>
      <button className="text-center btns font-bold" onClick={handleClick}>Take Quiz</button> 

</div>: <div style={{textAlign:'center',margin:'9vh auto'}}>
<p className="instruction font-bold">Instructions :</p>
<div className='ol'>
  <p>1. The Quiz contains 7 questions.</p>
  <p>2. You will get 10s to answer each question.</p>
  <p>3. Correct answer will give you +1</p>
  <p>4. Answer the questions based on your understanding of climate science, environmental challenges, and sustainable development.</p>
</div>
<button style={{margin: '7vh 0px'}} className="text-center btns font-bold" onClick={handleClicks}>Take Quiz</button> 

</div>
    
   
  )
}

export default Quiz


