import React from 'react'
import user from '../../assets/svg/user.svg'
// import logo from '../../assets/logo.png'
import "./Navbar.css"
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <>
            <div className="navbar">
                {/* <div className="svg-sidebar">
                    <img alt="" id="bar" className="image-svg user" />
                </div> */}
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/explore">Explore Data</Link></li>
                    <li><Link to="/quiz">Get Involved</Link></li>
                    <li><Link to="/resource">Resources</Link></li>
                    <li><Link to="/community">Community</Link></li>
                </ul>

                <div className="visible">
                    {localStorage.getItem('token')?<Link to='/user'><img className="image-svg user" src={user} alt="" /></Link>:<Link to='/register'><img className="image-svg user" src={user} alt="" /></Link>}
                    </div>
            </div>
        </>
    )
}

export default Navbar