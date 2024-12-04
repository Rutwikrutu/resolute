
// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import './css/Navbar.css';
// import { AuthContext } from './AuthContext';

// const Navbar = () => {
//   const { user, signOut } = useContext(AuthContext);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
//       <div className="navbar-logo">
//         <Link to="/">Logo</Link>
//       </div>
//       <div className="hamburger-menu" onClick={toggleMenu}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//       <div className="close-menu" onClick={toggleMenu}>
//         &times;
//       </div>
//       <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
//         <Link to="/">Home</Link>
//         {!user && <Link to="/signup">Signup</Link>}
//         {!user && <Link to="/login">Login</Link>}
//         {user && (
//           <>
//             <Link to="/dashboard">Dashboard</Link>
//             <span className="navbar-user">Hello, {user.getUsername()}</span>
//             <Link to="#" onClick={signOut}>Logout</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';
import { AuthContext } from './AuthContext';
// import logo from '../assets/ResoluteLogoRutu.PNG'

// import logo from '../assets/The Resolute (Website) (4) (2)-copy (2).png';
import CLOGO7 from '../assets/THERESOLUTE7.png'
const Navbar = () => {
  const { user, signOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
      <div className="navbar-logo">
        <Link to="/">
          <img src={CLOGO7} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="close-menu" onClick={toggleMenu}>
        &times;
      </div>
      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        {!user && <Link to="/signup">Signup</Link>}
        {!user && <Link to="/login">Login</Link>}
        {user && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <span className="navbar-user">Hello, {user.getUsername()}</span>
            <Link to="#" onClick={signOut}>Logout</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

