
import React, { useState, useContext,useEffect } from 'react';
import { AuthContext } from './AuthContext';
import './css/ForgotPassword.css';
import Navbar from './Navbar';

const ForgotPassword = () => {
  const { forgotPassword, confirmPassword } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isVerificationCodeSent, setIsVerificationCodeSent] = useState(false);
  const [message, setMessage] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(username);
      setMessage('Verification code sent to your email.');
      setIsVerificationCodeSent(true);
    } catch (err) {
      setMessage(err.message || JSON.stringify(err));
    }
  };

  const handleConfirmPassword = async (e) => {
    e.preventDefault();
    try {
      await confirmPassword(username, verificationCode, newPassword);
      setMessage('Password reset successful! You can now log in.');
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

  return (
    <div>
      <Navbar />
    
    <div className="forgot-password-main">
      <div className="forgetpass-wrapper">
        <form onSubmit={!isVerificationCodeSent ? handleForgotPassword : handleConfirmPassword}>
          <h2>Reset Password</h2> 
          {!isVerificationCodeSent ? (
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
              <button type="submit">Send Verification Code</button>
            </>
          ) : (
            <>
              <div className="input-field">
                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  required
                />
                <label>Enter verification code</label>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <label>Enter new password</label>
              </div>
              <button className='reset-btn' type="submit">Reset Password</button>
            </>
          )}
          {message && <p className='message-forgot'>{message}</p>}
        </form>
      </div>
    </div>
    </div>
  );
};

export default ForgotPassword;
