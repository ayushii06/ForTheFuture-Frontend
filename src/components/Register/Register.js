import React,{useState} from 'react'
import styles from '../Login/login.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

function Register() {

  let navigate = useNavigate();
 
  function handleClick(){
    navigate('/login')
  }
    const [credentials, setCredentials] = useState({ name: "", email: "",mobile:"", password: "" });
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5050/api/shico/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email,mobile: credentials.mobile, password: credentials.password }),

        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            //Save the auth taken and redirect
            // localStorage.setItem('token', json.authtoken)
            navigate("/login")

        }
        else {
            alert(json.error, "Invalid Credentials")
        }


  }
  return (
    
    <>
      <h1 className="login-heading">Hi, Register here!</h1>
         <div className="flex column container login-container">
       
        <form onSubmit={handleSubmit}>
           <div className="form-group">
            <label>Name</label>
                <input type="text" id="name" className='form-control' value={credentials.name} onChange={onChange} name="name" placeholder="Enter your name"/>
            </div>
            <div className="form-group">
            <label>Email</label>
                <input type="email" id="email" className='form-control' value={credentials.email} onChange={onChange} name="email" placeholder="Enter your email"/>
            </div>
            <div className="form-group">
            <label>Age</label>
                <input type="number" id="number" className='form-control' value={credentials.mobile} onChange={onChange} name="mobile" placeholder="Enter your age"/>
            </div>
            <div className="form-group">
            <label>Grade</label>
                <input type="password" id="password" className='form-control' value={credentials.password} onChange={onChange} name="password" placeholder="Enter your grade"/>
            </div>
            <div className="form-group">
            <label>Gender</label>
                <input type="password" id="password" className='form-control' value={credentials.password} onChange={onChange} name="password" placeholder="Enter your gender"/>
            </div>
          
          
        </form>

      
    </div>
    <div className="footer">
    <button className="text-center btns font-bold" to="/register" role="button">Submit</button> 
    <p style={{margin:"6vh auto 14vh",
    fontSize: "22px"}} className="text-center font-light">Already have an account?<span className='login-link font-bold' onClick={handleClick}>Log In</span></p>
    </div>

    </>
  )
}

export default Register