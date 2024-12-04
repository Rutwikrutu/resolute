// // // // src/ScholarSelectionPage.js
// import React, { useState } from 'react';
// import './css/ScholarSelectionPage.css';
// import SelectionComponent from './SelectionPage.js';
// import Navbar from './Navbar.js';

// const ScholarSelectionPage = () => {
//   const options = [
//     'Mathematics', 
//     'General aptitude', 
//     'English', 
//     'General knowledge', 
//     'legal aptitude', 
//     'logical reasoning', 
//     'Current affairs', 
//     'Geography',
//     'History',
//     'chemistry',
//     'general science',
//     'economics',
//     'quantitative ability',
//     'data interpretation',
//     'verbal ability',
//     'reading comprehension',
//     'general awareness',
//     'ethics',
//     'Indian polity'


//   ];
//   const [selected, setSelected] = useState([]);
//   const [showSelectionComponent, setShowSelectionComponent] = useState(false);

//   // const handleSelect = (name) => {
//   //   setSelected((prevSelected) =>
//   //     prevSelected.includes(name)
//   //       ? prevSelected.filter((item) => item !== name)
//   //       : [...prevSelected, name]
//   //   );
//   // };
//   const handleSelect = (name) => {
//     setSelected((prevSelected) => {
//       if (prevSelected.includes(name)) {
//         return prevSelected.filter((item) => item !== name);
//       } else if (prevSelected.length < 17) { // Max 3 selections
//         return [...prevSelected, name];
//       } else {
//         return prevSelected; // No more than 3 selections
//       }
//     });
//   };

//   const handleConfirm = () => {
//     // Set the state to show the selection component
//     setShowSelectionComponent(true);
//   };

//   return (
    
//    <>
//    <Navbar/>
//     <div className='scholar-main-container'>
//       <div className="scholar-selection-container">
//         <h2>Select Scholars</h2>
//         {/* <h4> Pick and 5-9 niches</h4> */}
//         {!showSelectionComponent ? (
//           <>
//             <div className="scholar-options">
//               {options.map((option, index) => (
//                 <div 
//                   key={index} 
//                   className={`scholar-option ${selected.includes(option) ? 'selected' : ''}`} 
//                   onClick={() => handleSelect(option)}
//                 >
//                   {option}
//                 </div>
//               ))}
//             </div>
//             {/* Submit Button */}
//             {selected.length > 0 && (
//               <button className="confirm-button glow-on" onClick={handleConfirm}>
//                 Confirm to Send
//               </button>
//             )}
//           </>
//         ) : (
//           <SelectionComponent selectedOptions={selected} />
//         )}
//       </div>
//     </div>
//     </>
//   );
// };

// export default ScholarSelectionPage;

// above code is working in main 

// import React, { useState } from 'react';
// import './css/ScholarSelectionPage.css';
// import SelectionComponent from './SelectionPage.js';
// import Navbar from './Navbar.js';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// // Register the required components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const ScholarSelectionPage = () => {
//   const options = [
//     'Mathematics', 
//     'General aptitude', 
//     'English', 
//     'General knowledge', 
//     'legal aptitude', 
//     'logical reasoning', 
//     'Current affairs', 
//     'Geography',
//     'History',
//     'chemistry',
//     'general science',
//     'economics',
//     'quantitative ability',
//     'data interpretation',
//     'verbal ability',
//     'reading comprehension',
//     'general awareness',
//     'ethics',
//     'Indian polity'
//   ];

//   const [selected, setSelected] = useState([]);
//   const [weights, setWeights] = useState({});
//   const [showSelectionComponent, setShowSelectionComponent] = useState(false);

//   const handleSelect = (name) => {
//     setSelected((prevSelected) => {
//       if (prevSelected.includes(name)) {
//         const newWeights = { ...weights };
//         delete newWeights[name];
//         setWeights(newWeights);
//         return prevSelected.filter((item) => item !== name);
//       } else if (prevSelected.length < 17) {
//         return [...prevSelected, name];
//       } else {
//         return prevSelected;
//       }
//     });
//   };

//   const handleWeightChange = (name, value) => {
//     setWeights((prevWeights) => ({
//       ...prevWeights,
//       [name]: value,
//     }));
//   };

//   const handleConfirm = () => {
//     setShowSelectionComponent(true);
//   };

//   const totalWeight = Object.values(weights).reduce((sum, val) => sum + val, 0);

//   const chartData = {
//     labels: selected,
//     datasets: [
//       {
//         label: 'Weightage (%)',
//         data: selected.map((option) => weights[option] || 0),
//         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//       },
//     ],
//   };

//   return (
//     <>
//       <Navbar/>
//       <div className='scholar-main-container'>
//         <div className="scholar-selection-container">
//           <h2>Select Scholars</h2>
//           {!showSelectionComponent ? (
//             <>
//               <div className="scholar-options">
//                 {options.map((option, index) => (
//                   <div 
//                     key={index} 
//                     className={`scholar-option ${selected.includes(option) ? 'selected' : ''}`} 
//                     onClick={() => handleSelect(option)}
//                   >
//                     {option}
//                   </div>
//                 ))}
//               </div>
//               {selected.length > 0 && (
//                 <>
//                   <div className="slider-container">
//                     {selected.map((option, index) => (
//                       <div key={index} className="slider-item">
//                         <label>{option}</label>
//                         <input
//                           type="range"
//                           min="0"
//                           max="100"
//                           value={weights[option] || 0}
//                           onChange={(e) => handleWeightChange(option, parseInt(e.target.value))}
//                         />
//                         <span>{weights[option] || 0}%</span>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="chart-container">
//                     <Bar data={chartData} />
//                   </div>
//                   <div className="total-weight">
//                     <strong>Total Weightage: {totalWeight}%</strong>
//                   </div>
//                   <button className="confirm-button glow-on" onClick={handleConfirm}>
//                     Confirm to Send
//                   </button>
//                 </>
//               )}
//             </>
//           ) : (
//             <SelectionComponent selectedOptions={selected} weights={weights} />
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ScholarSelectionPage;

//calculaion of with pricing and slider 


// import React, { useState } from 'react';
// import './css/ScholarSelectionPage.css';
// import SelectionComponent from './SelectionPage1.js';
// import Navbar from './Navbar.js';
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend
// } from 'chart.js';  // Import necessary components
// import { Pie } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);  // Register the components you need

// const ScholarSelectionPage = () => {
//   const options = [
//     'Mathematics', 'General aptitude', 'English', 'General knowledge',
//     'legal aptitude', 'logical reasoning', 'Current affairs', 'Geography',
//     'History', 'chemistry', 'general science', 'economics', 'quantitative ability',
//     'data interpretation', 'verbal ability', 'reading comprehension', 'general awareness',
//     'ethics', 'Indian polity'
//   ];

//   const [selected, setSelected] = useState([]);
//   const [percentages, setPercentages] = useState({});
//   const [showSelectionComponent, setShowSelectionComponent] = useState(false);
//   const [extraPrice, setExtraPrice] = useState(0);

//   const handleSelect = (name) => {
//     setSelected((prevSelected) => {
//       if (prevSelected.includes(name)) {
//         const updated = prevSelected.filter((item) => item !== name);
//         const updatedPercentages = { ...percentages };
//         delete updatedPercentages[name];
//         setPercentages(updatedPercentages);
//         return updated;
//       } else if (prevSelected.length < 17) {
//         return [...prevSelected, name];
//       } else {
//         return prevSelected; // Limit to 17
//       }
//     });
//   };

//   const handlePercentageChange = (name, value) => {
//     const total = Object.values(percentages).reduce((acc, curr) => acc + curr, 0) - (percentages[name] || 0);
//     if (total + value <= 100) {
//       setPercentages((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleConfirm = () => {
//     if (selected.length > 15) {
//       setExtraPrice((selected.length - 15) * 10); // Example pricing logic
//     }
//     setShowSelectionComponent(true);
//   };

//   const data = {
//     labels: selected,
//     datasets: [
//       {
//         data: selected.map((name) => percentages[name] || 0),
//         backgroundColor: selected.map((_, i) => `hsl(${i * 30}, 70%, 60%)`),  // Assign different colors to each slice
//         hoverBackgroundColor: selected.map((_, i) => `hsl(${i * 30}, 70%, 50%)`),
//       },
//     ],
//   };

//   return (
//     <>
//       <Navbar />
//       <div className='scholar-main-container'>
//         <div className="scholar-selection-container">
//           <h2>Select Scholars</h2>
//           {!showSelectionComponent ? (
//             <>
//               <div className="scholar-options">
//                 {options.map((option, index) => (
//                   <div
//                     key={index}
//                     className={`scholar-option ${selected.includes(option) ? 'selected' : ''}`}
//                     onClick={() => handleSelect(option)}
//                   >
//                     {option}
//                   </div>
//                 ))}
//               </div>

//               {selected.length > 0 && (
//                 <>
//                   <div className="sliders-container">
//                     {selected.map((name) => (
//                       <div key={name}>
//                         <label>{name}: {percentages[name] || 0}%</label>
//                         <input
//                           type="range"
//                           min="0"
//                           max="100"
//                           value={percentages[name] || 0}
//                           onChange={(e) => handlePercentageChange(name, parseInt(e.target.value))}
//                         />
//                       </div>
//                     ))}
//                   </div>

//                   <Pie data={data} />
//                   <button className="confirm-button glow-on" onClick={handleConfirm}>
//                     Confirm to Send
//                   </button>
//                 </>
//               )}
//             </>
//           ) : (
//             <SelectionComponent selectedOptions={selected} extraPrice={extraPrice} />
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ScholarSelectionPage;
import React, { useState } from 'react';
import './css/ScholarSelectionPage.css';
import SelectionComponent from './SelectionPage1.js';
import Navbar from './Navbar.js';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const ScholarSelectionPage = () => {
  const options = [
    'Mathematics', 'General aptitude', 'English', 'General knowledge',
    'legal aptitude', 'logical reasoning', 'Current affairs', 'Geography',
    'History', 'chemistry', 'general science', 'economics', 'quantitative ability',
    'data interpretation', 'verbal ability', 'reading comprehension', 'general awareness',
    'ethics', 'Indian polity'
  ];

  const [selected, setSelected] = useState([]);
  const [percentages, setPercentages] = useState({});
  const [showSelectionComponent, setShowSelectionComponent] = useState(false);
  const [extraPrice, setExtraPrice] = useState(0);

  const handleSelect = (name) => {
    setSelected((prevSelected) => {
      if (prevSelected.includes(name)) {
        const updated = prevSelected.filter((item) => item !== name);
        const updatedPercentages = { ...percentages };
        delete updatedPercentages[name];
        setPercentages(updatedPercentages);
        return updated;
      } else if (prevSelected.length < 17) {
        return [...prevSelected, name];
      } else {
        return prevSelected; // Limit to 17
      }
    });
  };

  const handlePercentageChange = (name, value) => {
    const total = Object.values(percentages).reduce((acc, curr) => acc + curr, 0) - (percentages[name] || 0);
    if (total + value <= 100) {
      setPercentages((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleConfirm = () => {
    if (selected.length > 15) {
      setExtraPrice((selected.length - 15) * 10); // Example pricing logic
    }
    setShowSelectionComponent(true); // Show the next component after confirmation
  };

  const pieChartData = {
    labels: selected,
    datasets: [
      {
        data: selected.map((name) => percentages[name] || 0),
        backgroundColor: selected.map((_, i) => `hsl(${i * 30}, 70%, 60%)`),  // Color slices dynamically
        hoverBackgroundColor: selected.map((_, i) => `hsl(${i * 30}, 70%, 50%)`),
      },
    ],
  };

//   return (
//     <>
//       <Navbar />
//       <div className='scholar-main-container'>
//         <div className="scholar-selection-container">
//           <h2>Select Scholars</h2>
//           {!showSelectionComponent ? (
//             <>
//               <div className="scholar-options">
//                 {options.map((option, index) => (
//                   <div
//                     key={index}
//                     className={`scholar-option ${selected.includes(option) ? 'selected' : ''}`}
//                     onClick={() => handleSelect(option)}
//                   >
//                     {option}
//                   </div>
//                 ))}
//               </div>

//               {selected.length > 0 && (
//                 <>
//                   <div className="sliders-container">
//                     {selected.map((name) => (
//                       <div key={name}>
//                         <label>{name}: {percentages[name] || 0}%</label>
//                         <input
//                           type="range"
//                           min="0"
//                           max="100"
//                           value={percentages[name] || 0}
//                           onChange={(e) => handlePercentageChange(name, parseInt(e.target.value))}
//                         />
//                       </div>
//                     ))}
//                   </div>

//                   <div className="chart-container">
//                     <Pie data={pieChartData} />
//                   </div>

//                   <div className="total-weight">
//                     <strong>Total Weightage: {Object.values(percentages).reduce((a, b) => a + b, 0)}%</strong>
//                   </div>

//                   <button className="confirm-button glow-on" onClick={handleConfirm}>
//                     Confirm to Send
//                   </button>
//                 </>
//               )}
//             </>
//           ) : (
//             // Pass the selectedOptions, percentages, and extraPrice to SelectionComponent
//             <SelectionComponent
//               selectedOptions={selected}
//               percentages={percentages}
//               extraPrice={extraPrice}
//             />
//           )}
//         </div>
//       </div>
//     </>
//   );
// };
return (
  <>
    <Navbar />
    <div className='scholar-main-container'>
      <div className="scholar-selection-container">
        
        {/* Scholar options on the left */}
        <div className="scholar-options">
          {options.map((option, index) => (
            <div
              key={index}
              className={`scholar-option ${selected.includes(option) ? 'selected' : ''}`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>

        {/* Sliders and Pie Chart on the right */}
        <div className="scholar-selection-content">
          {selected.length > 0 && (
            <>
              <div className="sliders-container">
                {selected.map((name) => (
                  <div key={name}>
                    <label>{name}: {percentages[name] || 0}%</label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={percentages[name] || 0}
                      onChange={(e) => handlePercentageChange(name, parseInt(e.target.value))}
                    />
                  </div>
                ))}
              </div>

              <div className="chart-container">
                <Pie data={pieChartData} />
              </div>

              <div className="total-weight">
                {/* <strong>Total Weightage: {Object.values(percentages).reduce((a, b) => a + b, 0)}%</strong> */}
              </div>

              <button className="confirm-button glow-on" onClick={handleConfirm}>
                Confirm to Send
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  </>
);
}

export default ScholarSelectionPage;
