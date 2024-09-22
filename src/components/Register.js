import React from 'react';
import '../css_files/Register.css'; // Adjust the path if necessary
import { FaGoogle, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'; // Social icons
import { GiCoffeeBeans } from 'react-icons/gi'; // Coffee Beans icon

const Register = () => {
  return (
  <div className="title-container">
    <h2>Register Here</h2>

    <div className="login-container">
      <div className="login-box">
        {/* Sign In Section */}
        <div className="sign-in-section">
          <h2>Sign In</h2>
          <div className="social-container">
            <button className="social-btn"><FaGoogle /></button>
            <button className="social-btn"><FaFacebook /></button>
            <button className="social-btn"><FaLinkedin /></button>
            <button className="social-btn"><FaGithub /></button>
          </div>
          <p>or use your email password</p>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#" className="forgot-password">Forgot Your Password?</a>
            <button className="sign-in-btn">Sign In</button>
          </form>
        </div>

        {/* Sign Up Section */}
        <div className="sign-up-section">
          <GiCoffeeBeans size={50} style={{ marginBottom: '20px' }} /> {/* Coffee Beans icon */}
          <h2>Hello, Friend!</h2>
          <p>Register with your personal details to use all of site features</p>
          <button className="sign-up-btn">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Register;
