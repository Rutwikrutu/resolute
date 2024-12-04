// import React from 'react';
// import './css/HomeCards.css';
// import prisma from '../assets/chi prima.png'
// import express from '../assets/chi xpress.png'
// import scholar from '../assets/chi scholar.jpg'
// import { useNavigate } from 'react-router-dom';


// const HomeCards = () => {
//     const navigate=useNavigate();

//     const schlorclick= ()=> {
//       navigate('/scholarSelectionPageCopy')
//     };

//     const prismaclick= ()=> {
//         navigate('/prismaselection')
//       };
//       const xpressclick= ()=> {
//         navigate('/xpressselection')
//       };
//     return (
//         <div className='homecardmaindiv'>
//         <div className="container1">
//             <h1>Your News, Your Way</h1>
//             <p>Choose the perfect plan for you.</p>
//             <div className="plans">
//                 <div className="plan"  onClick={schlorclick}>
//                     <img src={scholar} alt="Scholar Plan" />
//                     <div className="text-overlay">
//                         <h2>Scholar</h2>
//                         <h3>SOME BIG TEXT</h3>
//                         <p className="description">
//                             uebwy e89bw9ybrd89 wb8fb wyfcu bdiufysb uydb usfd fusdusdusfgsfhushf usdfug s9ud usdhsiu
//                             gffuouebwy e89bw9ybrd89 wb8fb wyfcu bdiufysb uydb usfd fusdusdusfgsfhushf usdfug s9ud usdhsiu
//                             gffuouebwy e89bw9ybrd89 wb8fb wyfcu bdiufysb uydb usfd fusdusdusfgsfhushf usdfug s9ud usdhsiu
//                             gffuouebwy e89bw9ybrd89 wb8fb wyfcu bdiufysb uydb usfd fusdusdusfgsfhushf usdfug s9ud usdhsiu
//                             gffu
//                         </p>
//                         {/* <p className="amount">499₹</p> */}
//                     </div>
//                 </div>
//                 <div className="plan" onClick={xpressclick}>
//                     <img src={express} alt="Xpress Plan"  />
//                     <div className="text-overlay">
//                         <h2>Xpress</h2>
//                         <h3>SOME BIG TEXT</h3>
//                         <p className="description">
//                             Some random text so that it doesn't look annoying<br />
//                             Another random point to prove my point<br />
//                             I swear this is the last<br />
//                         </p>
//                         {/* <p className="amount">599₹</p> */}
//                     </div>
//                 </div>
//                 <div className="plan"  onClick={prismaclick}>
//                     <img src={prisma} alt="Prima Plan"  />
//                     <div className="text-overlay">
//                         <h2>Prima</h2>
//                         <h3>SOME BIG TEXT</h3>
//                         <p className="description"></p>
//                         {/* <p className="amount">599₹</p> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </div>
//     );
// };

// export default HomeCards;
import React from 'react';
import './css/HomeCards.css';
import prisma from '../assets/chi prima.png'
import express from '../assets/chi xpress.png'
import scholar from '../assets/chi scholar.jpg'
import { useNavigate } from 'react-router-dom';


const HomeCards = () => {
    const navigate=useNavigate();

    const schlorclick= ()=> {
      navigate('/scholarSelectionPageCopy')
    };

    const prismaclick= ()=> {
        navigate('/prismaselection')
      };
      const xpressclick= ()=> {
        navigate('/xpressselection')
      };
    return (
        <div className='homecardmaindiv'>
        <div className="container1">
            <h1>Your News, Your Way</h1>
            <p>Choose the perfect plan for you.</p>
            <div className="plans">
                <div className="plan"  onClick={schlorclick}>
                    <img src={scholar} alt="Scholar Plan" />
                    <div className="text-overlay">
                        <h2>Scholar</h2>
                        {/* <h3>SOME BIG TEXT</h3> */}
                        <p className="description">
                        For those students who go through many newspapers a day to crack competitive 
                        exams.
                        </p>
                        <p className="amount">799₹/month</p>
                    </div>
                </div>
                <div className="plan" onClick={xpressclick}>
                <img src={prisma} alt="Prima Plan"  />

                    <div className="text-overlay">
                        <h2>Xpress</h2>
                        {/* <h3>SOME BIG TEXT</h3> */}
                        <p className="description">
                        For those who don't wait for  the world , always in a hurry , always well informed . you get customised news from the niches you select that resonates best with your interests.
                        <br />
                        </p>
                        <p className="amount">599₹/month</p>
                    </div>
                </div>
                <div className="plan"  onClick={prismaclick}>
                <img src={express} alt="Xpress Plan"  />

                    <div className="text-overlay">
                        <h2>Prima</h2>
                        {/* <h3>SOME BIG TEXT</h3> */}
                        <p className="description">For those who run the world , features . Your get exclusive niches and exclusive articles for our premium users .</p>
                        <p className="amount">899₹/month</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default HomeCards;
