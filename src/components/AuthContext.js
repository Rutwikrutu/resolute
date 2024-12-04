import React, { createContext, useState, useEffect } from 'react';
import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';



const poolData = {
  UserPoolId: process.env.REACT_APP_USER_POOL_ID,
  ClientId: process.env.REACT_APP_CLIENT_ID,
};



const UserPool = new CognitoUserPool(poolData);
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = UserPool.getCurrentUser();
    if (currentUser) {
      currentUser.getSession((err, session) => {
        if (session) {
          setUser(currentUser);
        }
      });
    }
  }, []);

  const signIn = (Username, Password, newPassword = null) => {
    return new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool: UserPool });
      const authDetails = new AuthenticationDetails({ Username, Password });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          setUser(user);
          resolve(data);
        },
        onFailure: (err) => {
          reject(err);
        },
        newPasswordRequired: (challenge) => {
          if (newPassword === null) {
            reject(new Error('New password required'));
            return;
          }
          user.completeNewPasswordChallenge(newPassword, challenge.requiredAttributes, {
            onSuccess: (data) => {
              setUser(user);
              resolve(data);
            },
            onFailure: (err) => {
              reject(err);
            },
          });
        },
      });
    });
  };

  const signUp = (Username, Password, attributes) => {
    return new Promise((resolve, reject) => {
      UserPool.signUp(Username, Password, attributes, null, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });
  };

  const confirmSignUp = (Username, code) => {
    return new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool: UserPool });
      user.confirmRegistration(code, true, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });
  };

  const signOut = () => {
    const currentUser = UserPool.getCurrentUser();
    if (currentUser) {
      currentUser.signOut();
      setUser(null);
      
    }
  };
  const forgotPassword = (Username) => {
    return new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool: UserPool });
      user.forgotPassword({
        onSuccess: (data) => resolve(data),
        onFailure: (err) => reject(err),
      });
    });
  };

  const confirmPassword = (Username, verificationCode, newPassword) => {
    return new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool: UserPool });
      user.confirmPassword(verificationCode, newPassword, {
        onSuccess: (data) => resolve(data),
        onFailure: (err) => reject(err),
      });
    });
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, confirmSignUp, signOut, forgotPassword, confirmPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };




