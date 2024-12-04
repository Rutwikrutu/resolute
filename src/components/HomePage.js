
// HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './css/HomePage.css';
import bannerimg from '../assets/chi prima.png'
import HomeBanner from './HomeBanner';
import HomeCards from './HomeCards';
import FAQAccordion from './Faq';
import GlassmorphismComponent from './aboutus';




const HomePage = () => {
  const navigate = useNavigate();



  return (
    <>
      <Navbar />
      <HomeBanner/>
      <GlassmorphismComponent/>
      <HomeCards/>
      <FAQAccordion/>
      
      
    </>
  );
};

export default HomePage;
