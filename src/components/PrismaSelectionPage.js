// src/PrismaSelectionPage.js


import React, { useState } from 'react';
// import './css/PrismaSelectionPage.css';
import './css/PrismaSelectionPage.css';

import SelectionComponent from './SelectionPage.js';
import Navbar from './Navbar.js';

const PrismaSelectionPage = () => {
  // const options = ['Wealth Management',
  //                 'Investment Strategies',
  //                 ' Private Equity News',
  //                 'Market Forecasts',
  //                 'Global Economy Trends',
  //                 ' Real Estate Insights  ',
  //                 ' Business Innovations ',
  //                 'Leadership Insights',
  //                 ' Executive Leadership',
  //                 ' Luxury Lifestyle',
  //                 'Fine Dining & Wines',
  //                 'Travel Destinations',
  //                 'Exclusive Travel & Leisure ',
  //                 'Wellness & Fitness Trends',
  //                 ' Philanthropy',
  //                 'Art & Collectibles',
  //                 'Legacy Planning',
  //                 'Prestige & Legacy',
  //                 'Start-up Spotlights ',
  //                 'Emerging Technologies ',
  //                 ' Breakthrough Gadgets',
  //                 'High-End Innovations',
  //                 ' Artificial Intelligence Trends',
  //                 'Cybersecurity Updates',
  //                 'Space Exploration News',
  //                 'Green Tech Solutions',
  //                 ' Digital Transformation Insights',
  //                 'Philosophical Quotes',
  //                 'Classic Literature Excerpts',
  //                 'Thought-Provoking Essays',
  //                 ' Modern Thought Leadership',
  //                 ' Personal Growth Anecdotes ',
  //                 ' Minimalist & Stoic Reflections',
  //                 ' Lessons from History & Culture',
  //                 'Spiritual & Mindfulness Insights'

  // ];

  const options = ["1. Wealth & Investment",
                  "2.Global Affairs",
                  " 3.Luxury Lifestyle",
                  "4.Prestige & Legacy",
                  " 5.Start-up Spotlights",
                  " 6.Tech Insights & Innovations",
                  "7. *Perspectives & Reflections",

];
  const [selected, setSelected] = useState([]);
  const [showSelectionComponent, setShowSelectionComponent] = useState(false);


  const handleSelect = (name) => {
    setSelected((prevSelected) => {
      if (prevSelected.includes(name)) {
        return prevSelected.filter((item) => item !== name);
      } else if (prevSelected.length < 5) { // Max 3 selections
        return [...prevSelected, name];
      } else {
        return prevSelected; // No more than 3 selections
      }
    });
  };
  const handleConfirm = () => {
    setShowSelectionComponent(true);
  };

  return (
    <>
    <Navbar/>
    <div className='prisma-main-container'>
    <div className="prisma-selection-container">
      <h2>Select Prima </h2>
      {!showSelectionComponent ? (
        <>
          <div className="prisma-options">
            {options.map((option, index) => (
              <div 
                key={index} 
                className={`prisma-option ${selected.includes(option) ? 'selected' : ''}`} 
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
          {/* Submit Button */}
          {selected.length > 0 && (
            <button className="confirm-button glow-on" onClick={handleConfirm}>
              Confirm to Send
            </button>
          )}
        </>
      ) : (
        <SelectionComponent selectedOptions={selected} />
      )}
    </div>
  </div>
  </>
);
};

export default PrismaSelectionPage;
