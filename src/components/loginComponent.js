import React from "react";
import {Link} from 'react-router-dom';
function Login() {
  return (
    <div className="login-container">
      <div className="logo-container">
        <span className="logo">WeatherCheck</span>
      </div>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
      </form>
      <div className="btn-container">
        <Link to='dashboard'>Login</Link>
        <a href="#">Login with Facebook</a>
      </div>
      <div className="forgot-pw-container">
        <span>Forgotten Password</span>
      </div>
    </div>
  );
}

export default Login;
