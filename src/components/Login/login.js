import React, { useState } from 'react'
import '../Login/login.css'
import { Link, useNavigate} from 'react-router-dom'

const Login=()=> {
  let navigate = useNavigate();
  function handleClick(){
    navigate('/community')
  }
  
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
  
      const response = await fetch("https://forthefuture.onrender.com/api/v1/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: credentials.email, password: credentials.password }),

      });
      const json = await response.json();
      
      console.log(json)
      if (json.success) {
          //Save the auth taken and redirect
          
          localStorage.setItem('token', json.token)
          localStorage.setItem('username', json.user.username)
          localStorage.setItem('email', json.user.email)
          localStorage.setItem('age', json.user.age)
          console.log(json.token)
          navigate("/")


      }
      else {
          alert("Invalid Credentials")
      }

  }
  
  return (
    <>
   
   <h1 className="login-heading">Hi, Login Here</h1>
  
    <div className="flex column container login-container">
       
        <form action="post" >
           <div style={{width: "30vw",margin:"16px auto"}} className="form-group">
                <input type="email" id="email" value={credentials.email} onChange={onChange} name="email" placeholder="Enter your email"/>
                </div>
                <div style={{width: "30vw",margin:"16px auto"}} className="form-group">
                <input type="password" id="password" value={credentials.password} onChange={onChange} name="password" placeholder="Enter your password"/>
            </div>
          
        </form>

        
    </div>
    <div className="footer">
    <button className="text-center btns font-bold" to="/register" role="button" onClick={handleSubmit}>Verify</button>
    <p style={{margin:"6vh auto 14vh",
    fontSize: "22px"}} className="text-center font-light">Don't have an account yet ?<span className='login-link font-bold' onClick={handleClick}>Register here</span></p>
        </div>
    </>
  )
}

export default Login