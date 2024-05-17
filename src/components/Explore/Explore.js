import React from 'react'
import { Link } from 'react-router-dom'
import '../Explore/Explore.css'

function Explore() {
  return (
    <>
    <div className="text-center">
    <p className='appname font-bold'>Great! You're now registered</p>
    <p className="h-1">Input your details about your day</p>
    <p className="h-2">(It’s important so that we can personalize your time table :)</p>
    <div className="input-container">
        <div className="form-que flex-container">
            <p className="ques">When do you go to sleep ?</p>
            <input type='time'></input>
        </div>
        <div className="form-que flex-container">
            <p className="ques">Do you have school 5 days a week or 6 days a week?</p>
            <input></input>
        </div>
        <div className="form-que flex-container">
            <p className="ques">At what time your school start?</p>
            <input type='time'></input>
        </div>
        <div className="form-que flex-container">
            <p className="ques">How much time you want to dedicate to leisure?</p>
            <input type='text'></input>
        </div>
        <div className="form-que flex-container">
            <p className="ques">Any specific time you want to utilize?</p>
            <input type='text'></input>
        </div>
        <Link className="text-center btns font-bold" to="/timetable" role="button">Generate TimeTable</Link> 
        
    </div>
    </div>
    </>
  )
}

export default Explore