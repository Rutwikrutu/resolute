// // // ScholarSelectionPage.js
// // import React, { useState } from 'react';
// // import './css/ScholarSelectionPagecopy.css';
// // import Navbar from './Navbar.js';
// // import {
// //   Chart as ChartJS,
// //   ArcElement,
// //   Tooltip,
// //   Legend
// // } from 'chart.js';
// // import { Pie } from 'react-chartjs-2';

// // // Register necessary Chart.js components
// // ChartJS.register(ArcElement, Tooltip, Legend);

// // const ScholarSelectionPageCopy = () => {
// //   const options = [
// //     'Mathematics', 'General aptitude', 'English', 'General knowledge',
// //     'legal aptitude', 'logical reasoning', 'Current affairs', 'Geography',
// //     'History', 'chemistry', 'general science', 'economics', 'quantitative ability',
// //     'data interpretation', 'verbal ability', 'reading comprehension', 'general awareness',
// //     'ethics', 'Indian polity'
// //   ];

// //   const [selected, setSelected] = useState([]);
// //   const [percentages, setPercentages] = useState({});
// //   const [tooltipVisible, setTooltipVisible] = useState(null); // Track which tooltip is visible

// //   // const handleSelect = (name) => {
// //   //   setSelected((prevSelected) => {
// //   //     if (prevSelected.includes(name)) {
// //   //       const updated = prevSelected.filter((item) => item !== name);
// //   //       const updatedPercentages = { ...percentages };
// //   //       delete updatedPercentages[name];
// //   //       setPercentages(updatedPercentages);
// //   //       setTooltipVisible(null); // Hide the tooltip when deselecting
// //   //       return updated;
// //   //     } else if (prevSelected.length < 17) {
// //   //       setTooltipVisible(name); // Show the tooltip for the newly selected topic
// //   //       return [...prevSelected, name];
// //   //     } else {
// //   //       return prevSelected; // Limit to 17
// //   //     }
// //   //   });
// //   // };

// //   const handlePercentageChange = (name, value) => {
// //     setSelected((prevSelected) => {
// //       console.log(prevSelected);
// //       console.log(percentages);
      
      
// //       // If the topic is already selected, keep it selected
// //       if (prevSelected.includes(name)) {
// //         return prevSelected;
// //       }
// //       // If not selected, add it to the selected list (with a limit of 17)
// //       if (prevSelected.length < 17) {
// //         return [...prevSelected, name];
// //       }
// //       return prevSelected;  // If 17 topics are already selected, do nothing
// //     });
// //     const total = Object.values(percentages).reduce((acc, curr) => acc + curr, 0) - (percentages[name] || 0);
// //     if (total + value <= 100) {
// //       setPercentages((prev) => ({ ...prev, [name]: value }));
// //     }
// //   };

// //   const getRemainingPercentage = () => {
// //     return 100 - Object.values(percentages).reduce((acc, val) => acc + val, 0);
// //   };

// //   const pieChartData = {
// //     labels: selected,
// //     datasets: [
// //       {
// //         data: selected.map((name) => percentages[name] || 0),
// //         backgroundColor: selected.map((_, i) => `hsl(${i * 30}, 70%, 60%)`),
// //         hoverBackgroundColor: selected.map((_, i) => `hsl(${i * 30}, 70%, 50%)`),
// //       },
// //     ],
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <div className='scholar-main-container-copy'>
// //         <div className="scholar-selection-container-copy">
// //           {/* Scholar options on the left */}
// //           <div>
// //           <strong style={{color: 'white'}}>Remaining Weightage: {100 - (Object.values(percentages).reduce((a, b) => a + b, 0))}%</strong>
// //           <div className="scholar-options-copy" style={{marginTop: '5%'}}>
// //             {options.map((option, index) => (
// //               <>
// //                 <div>
// //                   <div style={{color: 'white'}}>{option}: {percentages[option] || 0}%</div>
// //                   <input
// //                     type="range"
// //                     min="0"
// //                     max={getRemainingPercentage() + (percentages[option] || 0)}
// //                     value={percentages[option] || 0}
// //                     onChange={(e) => {handlePercentageChange(option, parseInt(e.target.value))}}
// //                     />
// //                 </div>
// //               </>
// //             ))}
// //             </div>
// //           </div>

// //           {/* Pie Chart on the right */}
// //           {/* <div className="chart-container">
// //             <Pie data={pieChartData} />
// //           </div> */}
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// import React, { useState } from 'react';
// import './css/ScholarSelectionPagecopy.css';
// import Navbar from './Navbar.js';
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend
// } from 'chart.js';
// import SelectionComponent from './SelectionPage.js';

// // Register necessary Chart.js components
// ChartJS.register(ArcElement, Tooltip, Legend);

// const ScholarSelectionPageCopy = () => {
//   const options = [
//     'Mathematics', 'General aptitude', 'English', 'General knowledge',
//     'legal aptitude', 'logical reasoning', 'Current affairs', 'Geography',
//     'History', 'chemistry', 'general science', 'economics', 'quantitative ability',
//     'data interpretation', 'verbal ability', 'reading comprehension', 'general awareness',
//     'ethics', 'Indian polity'
//   ];

//   const [selected, setSelected] = useState([]);
//   const [percentages, setPercentages] = useState({});
//   const [isSelectionConfirmed, setIsSelectionConfirmed] = useState(false);
//   const [finalSelection, setFinalSelection] = useState([]); // Array format for SelectionComponent

//   const handlePercentageChange = (name, value) => {
//     setSelected((prevSelected) => {
//       if (!prevSelected.includes(name) && prevSelected.length < 17) {
//         return [...prevSelected, name];
//       }
//       return prevSelected;
//     });

//     const total = Object.values(percentages).reduce((acc, curr) => acc + curr, 0) - (percentages[name] || 0);
//     if (total + value <= 100) {
//       setPercentages((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleConfirm = () => {
//     // Convert the selected topics and percentages into an array format
//     const selectionArray = selected.map((name) => ({
//       name: name,
//       percentage: percentages[name],
//     }));

//     setFinalSelection(selectionArray);
//     setIsSelectionConfirmed(true); // Enable the submit button after confirmation
//   };

//   const pieChartData = {
//     labels: selected,
//     datasets: [
//       {
//         data: selected.map((name) => percentages[name] || 0),
//         backgroundColor: selected.map((_, i) => `hsl(${i * 30}, 70%, 60%)`),
//         hoverBackgroundColor: selected.map((_, i) => `hsl(${i * 30}, 70%, 50%)`),
//       },
//     ],
//   };

//   return (
//     <>
//       <Navbar />
//       <div className='scholar-main-container-copy'>
//         <div className="scholar-selection-container-copy">
//           {/* Scholar options on the left */}
//           <div>
//             <strong style={{color: 'white'}}>Remaining Weightage: {100 - (Object.values(percentages).reduce((a, b) => a + b, 0))}%</strong>
//             <div className="scholar-options-copy" style={{marginTop: '5%'}}>
//               {options.map((option, index) => (
//                 <div key={index}>
//                   <div style={{color: 'white'}}>{option}: {percentages[option] || 0}%</div>
//                   <input
//                     type="range"
//                     min="0"
//                     max={100 - Object.values(percentages).reduce((a, b) => a + b, 0) + (percentages[option] || 0)}
//                     value={percentages[option] || 0}
//                     onChange={(e) => handlePercentageChange(option, parseInt(e.target.value))}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Confirm Button */}
//           {selected.length > 0 && (
//             <button className="confirm-button glow-on" onClick={handleConfirm}>
//               Confirm Selections
//             </button>
//           )}

//           {/* Display SelectionComponent only if selection is confirmed */}
//           {isSelectionConfirmed && (
//             <SelectionComponent selectedOptions={finalSelection} />
//           )}

//         </div>
//       </div>
//     </>
//   );
// }

// export default ScholarSelectionPageCopy;
// import React, { useState } from 'react';
// import './css/ScholarSelectionPagecopy.css';
// import Navbar from './Navbar.js';
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend
// } from 'chart.js';
// import SelectionComponent from './SelectionPage.js';

// // Register necessary Chart.js components
// ChartJS.register(ArcElement, Tooltip, Legend);

// const ScholarSelectionPageCopy = () => {
//   const options = [
//     'Mathematics', 'General aptitude', 'English', 'General knowledge',
//     'legal aptitude', 'logical reasoning', 'Current affairs', 'Geography',
//     'History', 'chemistry', 'general science', 'economics', 'quantitative ability',
//     'data interpretation', 'verbal ability', 'reading comprehension', 'general awareness',
//     'ethics', 'Indian polity'
//   ];

//   const [selected, setSelected] = useState([]);
//   const [percentages, setPercentages] = useState({});
//   const [isSelectionConfirmed, setIsSelectionConfirmed] = useState(false);
//   const [finalSelection, setFinalSelection] = useState([]);

//   const handlePercentageChange = (name, value) => {
//     setSelected((prevSelected) => {
//       if (!prevSelected.includes(name) && prevSelected.length < 17) {
//         return [...prevSelected, name];
//       }
//       return prevSelected;
//     });

//     const total = Object.values(percentages).reduce((acc, curr) => acc + curr, 0) - (percentages[name] || 0);
//     if (total + value <= 100) {
//       setPercentages((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleConfirm = () => {
//     const selectionArray = selected.map((name) => ({
//       name: name,
//       percentage: percentages[name],
//     }));

//     setFinalSelection(selectionArray);
//     setIsSelectionConfirmed(true); // Show SelectionComponent directly after confirmation
//   };

//   return (
//     <>
//       <Navbar />
//       <div className='scholar-main-container-copy'>
//         <div className="scholar-selection-container-copy">
        
//         <strong style={{color: 'white',alignSelf:"center"}}>Remaining Weightage: {100 - (Object.values(percentages).reduce((a, b) => a + b, 0))}%</strong>
//           {/* Scholar options with sliders - Hide after confirmation */}
//           {!isSelectionConfirmed && (
            
//             <div className="scholar-options-copy" style={{marginTop: '5%'}}>
              
              
//               {options.map((option, index) => (
//                 <div key={index}>
//                   <div style={{color: 'white'}}>{option}: {percentages[option] || 0}%</div>
//                   <input
//                     type="range"
//                     min="0"
//                     max={100 - Object.values(percentages).reduce((a, b) => a + b, 0) + (percentages[option] || 0)}
//                     value={percentages[option] || 0}
//                     onChange={(e) => handlePercentageChange(option, parseInt(e.target.value))}
//                   />
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Confirm Button at the bottom */}
//           {!isSelectionConfirmed && selected.length > 0 && (
//             <button className="confirm-button glow-on" onClick={handleConfirm}>
//               Confirm Selections
//             </button>
//           )}

//           {/* Display SelectionComponent immediately after confirmation */}
//           {isSelectionConfirmed && (
//             <SelectionComponent selectedOptions={finalSelection} />
//           )}

//         </div>
//       </div>
//     </>
//   );
// }

// export default ScholarSelectionPageCopy;

import React, { useState } from 'react';
import './css/ScholarSelectionPagecopy.css';
import Navbar from './Navbar.js';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import SelectionComponent from './SelectionPage.js';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const ScholarSelectionPageCopy = () => {
  const options = [
    'Mathematics', 'General aptitude', 'English', 'General knowledge',
    'legal aptitude', 'logical reasoning', 'Current affairs', 'Geography',
    'History', 'chemistry', 'general science', 'economics', 'quantitative ability',
    'data interpretation', 'verbal ability', 'reading comprehension', 'general awareness',
    'ethics', 'Indian polity'
  ];

  const [selected, setSelected] = useState([]);
  const [percentages, setPercentages] = useState({});
  const [isSelectionConfirmed, setIsSelectionConfirmed] = useState(false);
  const [finalSelection, setFinalSelection] = useState([]);
  const [errorMessage, setErrorMessage] = useState(""); // State to track error message

  // Function to calculate the remaining weightage
  const remainingWeightage = 100 - Object.values(percentages).reduce((a, b) => a + b, 0);

  const handlePercentageChange = (name, value) => {
    // Check if the selected list is already at 17 niches and if the current name is not selected yet
    if (!selected.includes(name) && selected.length >= 17) {
      setErrorMessage("You can select a maximum of 17 niches.");
      return; // Stop the sliding action if already at 17 niches
    }

    // Clear error message if valid selection
    setErrorMessage("");

    // Update the selected list and percentages
    setSelected((prevSelected) => {
      if (!prevSelected.includes(name) && prevSelected.length < 17) {
        return [...prevSelected, name]; // Add to selected if not already selected
      }
      return prevSelected;
    });

    // Update percentages
    setPercentages((prev) => {
      if (value === 0) {
        // If percentage is set to 0, remove the niche from both selected and percentages
        setSelected((prevSelected) => prevSelected.filter((item) => item !== name));
        const { [name]: _, ...rest } = prev; // Remove the key from percentages
        return rest;
      } else {
        return { ...prev, [name]: value };
      }
    });
  };

  const handleConfirm = () => {
    if (remainingWeightage !== 0) {
      // If remaining weightage is not 0, show error message
      setErrorMessage("You need to allocate 100% of the weightage before confirming.");
      return;
    }

    // Clear any previous error message
    setErrorMessage("");

    // Create the final selection array
    const selectionArray = selected.map((name) => ({
      name: name,
      percentage: percentages[name],
    }));

    setFinalSelection(selectionArray);
    setIsSelectionConfirmed(true); // Show SelectionComponent directly after confirmation
  };

  return (
    <>
      <Navbar />
      <div className='scholar-main-container-copy'>
        <div className="scholar-selection-container-copy">
        
          <strong style={{color: 'white',alignSelf:"center"}}>
            Remaining Weightage: {remainingWeightage}%
          </strong>

          {/* Error message when the user tries to confirm without 100% weightage */}
          {errorMessage && (
            <div style={{color: 'red', textAlign: 'center', marginTop: '10px'}}>
              {errorMessage}
            </div>
          )}

          {/* Scholar options with sliders - Hide after confirmation */}
          {!isSelectionConfirmed && (
            <div className="scholar-options-copy" style={{marginTop: '5%'}}>
              {options.map((option, index) => (
                <div key={index}>
                  <div style={{color: 'white'}}>{option}: {percentages[option] || 0}%</div>
                  <input
                    type="range"
                    min="0"
                    max={100 - Object.values(percentages).reduce((a, b) => a + b, 0) + (percentages[option] || 0)}
                    value={percentages[option] || 0}
                    onChange={(e) => handlePercentageChange(option, parseInt(e.target.value))}
                    disabled={selected.length >= 17 && !selected.includes(option) && percentages[option] !== 0} // Disable if 17 niches are selected and this is a new one
                  />
                </div>
              ))}
            </div>
          )}

          {/* Confirm Button at the bottom */}
          {!isSelectionConfirmed && selected.length > 0 && (
            <button 
              className="confirm-button glow-on" 
              onClick={handleConfirm}
            >
              Confirm Selections
            </button>
          )}

          {/* Display SelectionComponent immediately after confirmation */}
          {isSelectionConfirmed && (
            <SelectionComponent selectedOptions={finalSelection} />
          )}

        </div>
      </div>
    </>
  );
}

export default ScholarSelectionPageCopy;
