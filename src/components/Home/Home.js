import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Home/Home.css'
import { useNavigate } from 'react-router-dom'
import earth from '../../assets/HomePageAssets/earth.jpg'
import trend from '../../assets/HomePageAssets/trends.jpg'
import questions from '../../assets/HomePageAssets/questions.jpg'
import community from '../../assets/HomePageAssets/community.jpg'
import resource from '../../assets/HomePageAssets/resource.jpg'

const Home = () => {
  let navigate = useNavigate();
  function handleClick(){
    navigate('/login')
  }
  return (
    <>
    <div className='home-container'>
      <p className="text-center welcome-heading font-bold">ForTheFuture<p className='appname font-bold'>Explore Real-Time Climate Data and Insights</p></p>
      <img style={{width:'29vw'}} src={earth} />
   </div>
    <p className="about-heading font-light">We're dedicated to providing you with real-time access to vital climate data and insights from around the world. Our platform empowers you to explore and 
understand the complex dynamics of our changing climate, so together, we can take informed action towards a sustainable future.</p>
<p className="head-home">"For the future, let's chart our course by understanding today's climate data."</p>

    <div className="btn-container">
    <Link className="text-center btns font-bold" to="/" role="button">Key Features</Link> 
    <div className="card">
      <div className="card-container">
        <img className="" src={trend} />
        <div className="right">
        <p className="title font-bold">TRACK CLIMATE DATA</p>
        <p className="content">Dive into interactive maps, charts, and visualizations to explore global climate trends and data.</p>
        </div>
       
      </div>
      <div className="card-container">
   
        <div className="right">
        <p className="title font-bold">Participate in quizzes</p>
        <p className="content"> Explore climate-themed quizzes or trivia challenges and  test your knowledge.</p>
        </div>
        <img className="" src={questions} />
      </div>
      <div className="card-container">
      <img className="" src={resource} />
        <div className="right">
        <p className="title font-bold">Explore Resources</p>
        <p className="content">Access educational materials, reports, and resources to deepen your understanding of climate science and environmental issues.</p>
        </div>      
      </div>

      <div className="card-container">
    
        <div className="right">
        <p className="title font-bold">Join Our Community</p>
        <p className="content">Join our community of climate-conscious individuals and share their insights, and ideas for positive changes and opportunities to get involved.</p>
      </div>
      <img className="" src={community} />
      </div>
    </div> 
    {localStorage.getItem('token')?<></>:<>
    <div className="sign-up-header">Sign up for our newsletter to receive updates on the latest climate research, events, and opportunities to get involved.</div>
  
    <Link className="text-center btns font-bold" to="/register" role="button">Sign Up</Link> 
    <p style={{margin:"6vh auto 14vh",
    fontSize: "22px"}} className="text-center font-light">Already have an account?<span className='login-link font-bold' onClick={handleClick}>Log In</span></p></>}
    </div>
    </>
  )
}

export default Home