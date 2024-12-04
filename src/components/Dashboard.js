// import React, { useContext, useState, useEffect } from 'react';
// import { AuthContext } from './AuthContext'; // adjust the import path accordingly
// import axios from 'axios';
// import './css/Dashboard.css'; // Import the CSS file
// import Navbar from './Navbar';

// const Dashboard = () => {
//   const { user } = useContext(AuthContext); // Get the logged-in user
//   const [selections, setSelections] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (user) {
//       const fetchSelections = async () => {
//         try {
//            const response = await axios.get('http://localhost:5000/api/getSelections/', {
//           // const response = await axios.get('http://resolute-backend-env.eba-hzyudbpg.ap-south-1.elasticbeanstalk.com/api/getSelections/', {
//             params: { username: user.getUsername() },
//             withCredentials: true, // if using cookies or other credentials
//           });
//           setSelections(response.data);
//         } catch (err) {
//           console.error('Error in fetching selections:', err);
//           setError('Failed to fetch selections');
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchSelections();
//     } else {
//       setLoading(false);
//     }
//   }, [user]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!selections || selections.length === 0) {
//     return <div>No user data found</div>;
//   }

//   return (
//     <>
//     <Navbar/>
//     <div className='main-dashboard'>
//     <div className="dashboard-container">
//       <h2>Your Selections:</h2>
//       <ul>
//         {selections.map((selection, index) => (
//           <li key={index}>{selection}</li>
//         ))}
//       </ul>
//     </div>
//     </div>
//     </>
//   );
// };

// export default Dashboard;
// import React, { useContext, useState, useEffect } from 'react';
// import { AuthContext } from './AuthContext'; // adjust the import path accordingly
// import axios from 'axios';
// import './css/Dashboard.css'; // Import the CSS file
// import Navbar from './Navbar';

// const Dashboard = () => {
//   const { user } = useContext(AuthContext); // Get the logged-in user
//   const [selections, setSelections] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (user) {
//       const fetchSelections = async () => {
//         try {
//           const response = await axios.get('http://localhost:5000/api/getSelections/', {
//           // const response = await axios.get('https://backend.theresoluteinc.com/api/getSelections/', {
//           //   params: { username: user.getUsername() },
//             withCredentials: true, // if using cookies or other credentials
//           });
//           setSelections(response.data);
//         } catch (err) {
//           console.error('Error in fetching selections:', err);
//           setError('Failed to fetch selections');
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchSelections();
//     } else {
//       setLoading(false);
//     }
//   }, [user]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!selections || selections.length === 0) {
//     return <div>No user data found</div>;
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="main-dashboard">
//         <div className="dashboard-container">
//           <h2>Your Selections:</h2>
//           <ul>
//             {selections.map((selection, index) => (
//               <li key={index}>
//                 {/* Handle both string selections and object selections */}
//                 {typeof selection === 'string' 
//                   ? selection  // If it's a string, display it as-is
//                   : `${selection.name}: ${selection.percentage}%`} {/* If it's an object, display name and percentage */}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from './AuthContext'; // Adjust the import path accordingly
import axios from 'axios';
import './css/Dashboard.css'; // Import the CSS file
import Navbar from './Navbar';

const Dashboard = () => {
  const { user } = useContext(AuthContext); // Get the logged-in user from AuthContext
  const [selections, setSelections] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      const fetchSelections = async () => {
        try {
          // const response = await axios.get('http://localhost:5000/api/getSelections/', {
            const response = await axios.get('https://backend.theresoluteinc.com/api/getSelections/', {
            params: { username: user.getUsername() }, // Send the username as a query parameter
            withCredentials: true, // If using cookies or other credentials
          });
          setSelections(response.data);
        } catch (err) {
          console.error('Error in fetching selections:', err);
          setError('Failed to fetch selections');
        } finally {
          setLoading(false);
        }
      };

      fetchSelections();
    } else {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!selections || selections.length === 0) {
    return <div>No user data found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="main-dashboard">
        <div className="dashboard-container">
          <h2>Your Selections:</h2>
          <ul>
            {selections.map((selection, index) => (
              <li key={index}>
                {/* Handle both string selections and object selections */}
                {typeof selection === 'string' 
                  ? selection  // If it's a string, display it as-is
                  : `${selection.name}: ${selection.percentage}%`} {/* If it's an object, display name and percentage */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
