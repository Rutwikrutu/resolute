// // // src/SelectionComponent.js
// import React, { useContext } from 'react';
// import { AuthContext } from './AuthContext';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const SelectionComponent = ({ selectedOptions }) => {
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     if (!user) {
//       navigate('/login');
//       return;
//     }

//     try {
//          await axios.post('https://backend.theresoluteinc.com/saveSelections', {
//         //  await axios.post('http://localhost:5000/saveSelections', {
//         username: user.getUsername(),
//         selections: selectedOptions
//       });
//       setTimeout(() => {
//         navigate('/');
//       }, 3000); // Redirect to home page after 3 seconds
//       // alert('Selections saved successfully');
//     } catch (err) {
//       console.error('Error details:', err);
//       alert('Error saving selections');
//     }
//   };

//   return (
   
//     <div className="container">
//       <div className="card1">
//         {/* <h1>Confirm Your Selections</h1> */}
//         {selectedOptions.map((option) => (
//           <div key={option}>
//             <span>{option}</span>
//           </div>
//         ))}
//         <button className="confirm-button glow-on" onClick={handleSubmit}>Submit</button>
//       </div>
//     </div>
  
//   );
// };

// export default SelectionComponent;


// import React, { useContext } from 'react';
// import { AuthContext } from './AuthContext';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const SelectionComponent = ({ selectedOptions }) => {
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     if (!user) {
//       navigate('/login');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:5000/saveSelections', {
//         username: user.getUsername(),
//         selections: selectedOptions
//       });
//       setTimeout(() => {
//         navigate('/');
//       }, 3000); // Redirect to home page after 3 seconds
//     } catch (err) {
//       console.error('Error details:', err);
//       alert('Error saving selections');
//     }
//   };

//   return (
//     <div className="container">
//       <div className="card1">
//         {/* Display the selections */}
//         {selectedOptions.map((option, index) => (
//           <div key={index}>
//             <span>{option.name}: {option.percentage}%</span> {/* Displaying the name and percentage */}
//           </div>
//         ))}
//         <button className="confirm-button glow-on" onClick={handleSubmit}>Submit</button>
//       </div>
//     </div>
//   );
// };

// export default SelectionComponent;

import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SelectionComponent = ({ selectedOptions }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    try {
      await axios.post('http://resolute-backend-env.eba-hzyudbpg.ap-south-1.elasticbeanstalk.com/saveSelections', {
        // await axios.post('https://backend.theresoluteinc.com/saveSelections', {
        username: user.getUsername(),
        selections: selectedOptions
      });
      setTimeout(() => {
        navigate('/');
      }, 3000); // Redirect to home page after 3 seconds
    } catch (err) {
      console.error('Error details:', err);
      alert('Error saving selections');
    }
  };

  return (
    <div className="container">
      <div className="card1">
        {selectedOptions.map((option, index) => (
          <div key={index}>
            {option.percentage ? (
              <span>{option.name}: {option.percentage}%</span> // For ScholarSelectionPage
            ) : (
              <span>{option}</span> // For Xpress and Prisma Pages
            )}
          </div>
        ))}
        <button className="confirm-button glow-on" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default SelectionComponent;

