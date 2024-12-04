import React, { useState, useContext,useEffect } from 'react';
import { AuthContext } from './AuthContext';
import './css/Signup.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Signup = () => {
  const { signUp, confirmSignUp } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signUp(username, password, [{ Name: 'email', Value: email }]);
      setMessage('Signup successful! Check your email for the confirmation code.');
      setIsSignedUp(true);
    } catch (err) {
      setMessage(err.message || JSON.stringify(err));
    }
  };

  const handleConfirmation = async (e) => {
    e.preventDefault();
    try {
      await confirmSignUp(username, confirmationCode);
      setMessage('Confirmation successful! You can now log in.');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setMessage(err.message || JSON.stringify(err));
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


  // 

  return (
    <>
    <Navbar/>
    <div className="signup-main">
      <div className="signup-wrapper">
        <form className='signup-form ' onSubmit={!isSignedUp ? handleSignup : handleConfirmation}>
          <h2 className='signup-logo'>Signup</h2>
          {!isSignedUp ? (
            <>
              <div className="input-field">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <label>Enter your username</label>
              </div>
              
              <div className="input-field">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              <button className='sub-btn' type="submit">Signup</button>
            </>
          ) : (
            <>
              <div className="input-field">
                <input
                  type="text"
                  value={confirmationCode}
                  onChange={(e) => setConfirmationCode(e.target.value)}
                  required
                />
                <label className='ECC'>Enter confirmation code</label>
              </div>
              <button className='confirm-btn' type="submit">Confirm Signup</button>
            </>
          )}
          {message && <p className='message-signup'>{message}</p>}
        </form>
      </div>
    </div>
    </>
  );
};

export default Signup;
