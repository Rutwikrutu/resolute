import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SelectionComponent = ({ selectedOptions, percentages, extraPrice }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    try {
      // Sending selected niches, their percentages, and extra price in one request to saveScholarSelection route
      // await axios.post('http://localhost:5000/saveScholarSelection', {
        await axios.post('https://backend.theresoluteinc.com/saveScholarSelection', {
        
        username: user.getUsername(),
        scholarSelections: selectedOptions,  // Scholar selections
        percentages: percentages,            // Corresponding percentages
        extraPrice: extraPrice               // Extra price if more than 15 selections
      });

      // Redirect after 3 seconds
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (err) {
      console.error('Error details:', err);
      alert('Error saving selections');
    }
  };

  return (
    <div className="container">
      <div className="card1">
        {selectedOptions.map((option) => (
          <div key={option}>
            <span>{option}: {percentages[option] || 0}%</span>  {/* Show percentages */}
          </div>
        ))}
        {extraPrice > 0 && <p>Extra Price: ${extraPrice}</p>}
        <button className="confirm-button glow-on" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default SelectionComponent;
