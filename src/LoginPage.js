import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src="/wifiii.png" alt="Native English Logo" />
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

      <section className="login-container">
        <div className="login-left">
          <h1>Login</h1>
          <p>Welcome</p>
          <p>If you don't have an account, register. You can <Link to="/SignUp">Register here!</Link></p> {/* Updated here */}
          <img src="/lapt.png" alt="Login illustration" className="login-illustration" />
        </div>

        <div className="login-right">
          <h2>Sign in</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <input type="text" placeholder="Enter email or user name" />
            <input type="password" placeholder="Password" />
            <div className="forgot-password">
              <a href="#forgot-password">Forgot password?</a>
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>
          <div className="or">
            <p>or continue with</p>
            <div className="social-login-icons">
              <i className="fab fa-facebook"></i>
              <img
    src="/gig.png" // Replace with actual path
    alt="Google"
    className="social-icon"
  />
              <i className="fab fa-apple"></i>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-container">
          <div className="subscribe-section">
            <h4>Subscribe Newsletters</h4>
            <p>Stay updated with our latest courses and resources by subscribing to our newsletter.</p>
            <input type="email" placeholder="Enter Your Email" />
            <button className="subscribe-btn">SUBSCRIBE NOW</button>
          </div>
          <div className="footer-bottom">
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#disclaimer">Disclaimer</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
            <p>© 2024 Native English. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LoginPage;



