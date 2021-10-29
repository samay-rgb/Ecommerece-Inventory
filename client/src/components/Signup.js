import React from "react";
import { Link } from "react-router-dom";
import "../Signup.css";
function SignUpIn() {

  return (
    <div>
      <h2 className="h2">Welcome To Amazkart</h2>
      <div
        className="containerl "
        id="container "
      >
        <div className="form-container sign-in-container">
          <form className="login_form" action="#">
            <h1 className="h1">Sign in</h1>
            <span className="span">or use your account</span>
            <input className="login_input" type="email" placeholder="Email" />
            <input
              className="login_input"
              type="password"
              placeholder="Password"
            />
            <button className="bn">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="h1">Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost bn my-3"
                id="signIn"
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right my-4">
              <h1 className="h1">Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <Link to="/form" style={{textDecoration:'none',color:'white'}}>
              <button className="ghost bn my-6" id="signUp">
                Sign Up
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUpIn;
