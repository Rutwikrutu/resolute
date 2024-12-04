// src/MainPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/select')}>Option 1</button>
      <button onClick={() => navigate('/select')}>Option 2</button>
      <button onClick={() => navigate('/select')}>Option 3</button>
    </div>
  );
};

export default MainPage;
