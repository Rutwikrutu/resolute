// src/XpressSelectionPage.js

import React, { useState } from 'react';
import './css/xpressSelectionPage.css';
import SelectionComponent from './SelectionPage.js';
import Navbar from './Navbar.js';

const XpressSelectionPage = () => {
  const options = [
  //  'Key National & International Headlines ',
  //  'Economic Updates ',
  //  'Global Events & Developments ',
  //  'Investment Strategies',
  //  'Market Trends',
  //  'Personal Finance Tips',
  //  'Economic Updates',
  //  ' International Relations Overview',
  //  ' Current World Events',
  //  '  Emerging Technologies  ',
  //  ' Consumer Tech Trends',
  //  ' Digital Transformation ',
  //  ' Business News',
  //  '  Start-up Highlights',
  //  '  Entrepreneur Insights',
  //  ' Wellness Tips',
  //  ' Affordable Travel Destinations',
  //  '  Everyday Luxury Trends',
  //  'Time Management Tips ',
  //  'Leadership Lessons for All Levels',
  //  ' Motivation and Inspiration '

  "1.Daily News",
  " 2.Wealth & Investment",
  "3.Global Affairs",
  "4.Tech Insights",
  "5.Business & Innovation* ",
  " 6.Lifestyle & Well-being",
  "7.Personal Growth & Development"

  ];
  const [selected, setSelected] = useState([]);
  const [showSelectionComponent, setShowSelectionComponent] = useState(false);

  // const handleSelect = (name) => {
  //   setSelected((prevSelected) =>
  //     prevSelected.includes(name)
  //       ? prevSelected.filter((item) => item !== name)
  //       : [...prevSelected, name]
  //   );
  // };
  const handleSelect = (name) => {
    setSelected((prevSelected) => {
      if (prevSelected.includes(name)) {
        return prevSelected.filter((item) => item !== name);
      } else if (prevSelected.length < 9) { // Max 3 selections
        return [...prevSelected, name];
      } else {
        return prevSelected; // No more than 3 selections
      }
    });
  };

  const handleConfirm = () => {
    // Set the state to show the selection component
    setShowSelectionComponent(true);
  };

  return (
    <>
    <Navbar/>
    <div className='xpress-main-container'>
      <div className="xpress-selection-container">
        <h2>Select Xpress</h2>
        {!showSelectionComponent ? (
          <>
            <div className="xpress-options">
              {options.map((option, index) => (
                <div 
                  key={index} 
                  className={`xpress-option ${selected.includes(option) ? 'selected' : ''}`} 
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

export default XpressSelectionPage;






// import React, { useState } from 'react';
// import './css/xpressSelectionPage.css';
// import SelectionComponent from './SelectionPage.js';
// import Navbar from './Navbar.js';

// const XpressSelectionPage = () => {
//   const options = [
//     'Key National & International Headlines ',
//     'Economic Updates ',
//     'Global Events & Developments ',
//     'Investment Strategies',
//     'Market Trends',
//     'Personal Finance Tips',
//     'Economic Updates',
//     'International Relations Overview',
//     'Current World Events',
//     'Emerging Technologies',
//     'Consumer Tech Trends',
//     'Digital Transformation',
//     'Business News',
//     'Start-up Highlights',
//     'Entrepreneur Insights',
//     'Wellness Tips',
//     'Affordable Travel Destinations',
//     'Everyday Luxury Trends',
//     'Time Management Tips ',
//     'Leadership Lessons for All Levels',
//     'Motivation and Inspiration',
//   ];

//   const [selected, setSelected] = useState([]);
//   const [showSelectionComponent, setShowSelectionComponent] = useState(false);
//   const [hoveredOption, setHoveredOption] = useState(null); // Track hovered option

//   const handleSelect = (name) => {
//     setSelected((prevSelected) => {
//       if (prevSelected.includes(name)) {
//         return prevSelected.filter((item) => item !== name);
//       } else if (prevSelected.length < 9) {
//         return [...prevSelected, name];
//       } else {
//         return prevSelected;
//       }
//     });
//   };

//   const handleConfirm = () => {
//     setShowSelectionComponent(true);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="xpress-main-container">
//         <div className="xpress-selection-container">
//           <h2>Select Xpress</h2>
//           {!showSelectionComponent ? (
//             <>
//               <div className="xpress-options">
//                 {options.map((option, index) => (
//                   <div
//                     key={index}
//                     className={`xpress-option ${
//                       selected.includes(option) ? 'selected' : ''
//                     }`}
//                     onClick={() => handleSelect(option)}
//                     onMouseEnter={() => setHoveredOption(option)} // Show popup
//                     onMouseLeave={() => setHoveredOption(null)} // Hide popup
//                   >
//                     {option}
//                     {/* Tooltip for hovered option */}
//                     {hoveredOption === option && (
//                       <div className="tooltip">
//                         <p>{`Details about ${option}`}</p>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//               {selected.length > 0 && (
//                 <button className="confirm-button glow-on" onClick={handleConfirm}>
//                   Confirm to Send
//                 </button>
//               )}
//             </>
//           ) : (
//             <SelectionComponent selectedOptions={selected} />
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default XpressSelectionPage;
