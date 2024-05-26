import React from 'react'
import './User.css'
import {Link, useNavigate } from 'react-router-dom'

function User() {
  let navigate=useNavigate();
 
  let names = localStorage.getItem('name')
  let email = localStorage.getItem('email')
  let age = localStorage.getItem('age')
 
   function handleClick(){
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    navigate('/')
    alert('You are logged out')
   }

  return (
    <>
        <div className="user-container">
            <p className="">Your Information</p>
       
            <div className="main-heading">
                <div className="upper-heading">
                    <h4 className='bold-black'>Name</h4>
                    <h5>Edit</h5>
                </div>
                <input type="text" value={names}/>
            </div>

            <div className="main-heading">
                <div className="upper-heading">
                    <h4 className='bold-black'>Email Address</h4>
                    <h5>Edit</h5>
                </div>
                <input type="email" value={email}/>
            </div>

            <div className="main-heading">
                <div className="upper-heading">
                    <h4 className='bold-black'>Age</h4>
                    <h5>Edit</h5>
                </div>
                <input type="email" value={age}/>
            </div>
            <div className='btn-container'>
            <Link  onClick={handleClick} className="text-center btns font-bold" to="/register" role="button">Logout</Link> 
            </div>
    
        </div>
    </>
  )
}

export default User