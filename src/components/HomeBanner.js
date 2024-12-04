// import React from 'react';
// import './css/HomeBanner.css'; // Ensure you have the CSS file in the same directory
// import banimg from '../assets/Grafica 3.png'
// import banimg1 from "../assets/The_Resolute__Website___1_-removebg.png"

// const HomeBanner = () => {
//   return (
//     <div className="containerbanner">
//     <div className="home-banner">
//       <div className="left-side">
//         <img src= {banimg1}alt="Banner" />
        
//       </div>
//       <div className="right-side">
//         <h1>
//           Welcome to <span className="highlight"> the Resolute</span>
//         </h1>
//         <h2>craft Your news </h2>

//         <h2> Intelligent News Crafting </h2>

//         <div className="buttons">
//           <button className="explore-btn glow-on-hover" >Explore Now</button>
          
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default HomeBanner;
import React from 'react';
import './css/HomeBanner.css';
// import banimg1 from "../assets/The_Resolute__Website___1_-removebg.png";
import banimg1 from "../assets/main-banner.png";

const HomeBanner = () => {
  return (
    <div className="containerbanner">
      <div className="home-banner">
        <div className="left-side">
          <img src={banimg1} alt="Banner" />
        </div>
        <div className="right-side">
          <h1 className='Welcome'>
            Welcome to <span className="highlight" style={{ fontFamily: 'Lobster, cursive' }}> the Resolute</span>
          </h1>
          <h2>Craft Your News</h2>
          <h2 className='seperate-color'>Intelligent News Crafting</h2>
          <div className="buttons">
            <button className="explore-btn glow-on-hover">Explore Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;

