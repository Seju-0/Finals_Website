import React from 'react';
import './Login.css'; // Import the CSS file for styling
import { GiCoffeeBeans } from "react-icons/gi"; // Coffee Beans icon

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        {/* Sign In Section */}
        <div className="sign-in-section">
          <h2 data-text="Sign-in">Sign-in</h2>
          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <a href="#" className="forgot-password">Forgot Your Password?</a>
            <button type="submit" className="sign-in-btn">Sign In</button>
          </form>
        </div>

        {/* Sign Up Section */}
        <div className="sign-up-section">
          <GiCoffeeBeans size={50} style={{ marginBottom: '10px' }} />
          <h1 data-text="Hello Friend!">Hello Friend!</h1>
          <p>Register Now to get exclusive deals and discounts!!</p>
          <button className="sign-up-btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;