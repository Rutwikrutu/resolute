import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import MainPage from './components/MainPage';
import SelectionPage from './components/SelectionPage';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import ScholarSelectionPage from './components/ScholarSelectionPage';
import PrismaSelectionPage from './components/PrismaSelectionPage';
import XpressSelectionPage from './components/XpressSelectionPage';
import HomePage from './components/HomePage';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Pagenotfound from './components/Pagenotfound';
import Dashboard from './components/Dashboard';
import ScholarSelectionPageCopy from './components/ScholarSelectionPageCopy'





const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/select" element={<SelectionPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/scholarselection" element={<ScholarSelectionPage />} />
          <Route path="/prismaselection" element={<PrismaSelectionPage />} />
          <Route path="/xpressselection" element={<XpressSelectionPage />} />
          <Route path="/ScholarSelectionPageCopy" element={<ScholarSelectionPageCopy />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
