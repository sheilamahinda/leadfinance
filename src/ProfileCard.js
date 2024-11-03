import React from 'react';
import './ProfileCard.css';
import './LoginPage.css'
import { Link, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';

export const ProfileCard = ({ name, image, description,handleNavigate }) => {
  return (
    <div className="card" onClick={handleNavigate}>
      <div className="card-header">
        <img src={image} alt={`${name}'s profile`} className="profile-image" />
      </div>
      <div className="card-body">
        <h3>{name}</h3>
        <h3>{description}</h3>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-pinterest"></i></a>
        </div>
      </div>
    </div>
  );
};


 const Profiles = () => {
const navigate=useNavigate()

  const handleNavigate=(arg)=>{
    navigate('/LoginPage',{state:{arg}})
  }



  return (
<>
<div className="login-page">
      <header>
        <nav className="navbar">
        <div className="logo">
  <img src="/wifiii.png" alt="Native English Logo" style={{ height: "80px" }} />
</div>

          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><Link to="/dashboard">Profile/Dashboard</Link></li>
          </ul>
          <button className="contact-btn">Contact</button>
        </nav>
      </header>

     <Stack direction="row" justifyContent="center">
                <ProfileCard
                  name=""
                  image="/std.png" // Replace with actual path
                  description="Here to learn"
                  handleNavigate={()=>handleNavigate('student')}
                />
                <ProfileCard
                  name=""
                  image="/tch.png" // Replace with actual path
                  description="Here to share knowledge"
                  handleNavigate={()=>handleNavigate('lecturer')}
                />
      </Stack> 

    </div>
</>
  );
};


export default Profiles;