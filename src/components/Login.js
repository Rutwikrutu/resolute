// src/Login.js

import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import "./css/LoginForm.css";
import backgroundImage from "../assets/banner3.jpg";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isNewPasswordRequired, setIsNewPasswordRequired] = useState(false);
  const navigate = useNavigate();
  /////Rutu's Code
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isNewPasswordRequired) {
        // Handle new password submission
        await signIn(username, password, newPassword);
        // alert('New password set and login successful');
        setMessage("New Password Set And Successfull");
      } else {
        await signIn(username, password);
        // alert('Login successful');
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (err) {
      if (err.message === "New password required") {
        setIsNewPasswordRequired(true);
      } else {
        // alert(err.message);
        setMessage(err.message);
      }
    }
  };

  // Rutu's Code

  // useEffect(() => {
  //   if (message) {
  //     const timer = setTimeout(() => {
  //       setMessage('');
  //     }, 8000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [message]);

  return (
    <>
      <Navbar />
      <div className="loginmain">
        <div className="login-wrapper">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2 className="Login-head">Login</h2>
            <div className="input-field">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label>Enter your email</label>
            </div>
            <div className="input-field">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Enter your password</label>
            </div>
            {isNewPasswordRequired && (
              <div className="input-field">
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <label>Enter new password</label>
              </div>
            )}
            <div className="forget">
              <label htmlFor="remember">
                {/* <input type="checkbox" id="remember" /> */}
                {/* <p>Remember me</p> */}
              </label>

            </div>
            <button className="Log-btn" type="submit">
              Log In
            </button>
            </form>
           
            {message && <p className="message">{message}</p>}
            

            {/* Rutu's code starts*/}
            {/* Rutu's code ends */}
            <div className="login-register">
              
              <p >
                Don't have an account? <a href="/signup">Register</a>
              </p>
              <a className="fp" href="/forgotpassword">
                Forgot password?
              </a>

            </div>

        </div>
        
      </div>
    </>
  );
};

export default Login;
