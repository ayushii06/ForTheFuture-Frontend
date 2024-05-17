import React from 'react'
import { Link } from 'react-router-dom'
import '../Quiz/Quiz.css'

function Quiz() {
  return (
    <div style={{textAlign:'center',margin:'9vh auto'}}>
              <p className="text-center welcome-heading font-bold">Get Involved in The Community<p className='appname font-bold'>Explore Real-Time Climate Data and Insights</p></p>
              <p className="head-home quiz-heading">Test your knowledge about climate change and learn about the pressing issues facing our planet and discover how you can contribute to a more sustainable future.</p>
              <Link className="text-center btns font-bold" to="/input" role="button">Take Quiz</Link> 
  
    </div>
  )
}

export default Quiz