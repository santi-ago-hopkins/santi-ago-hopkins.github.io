import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const NavLink = ({ to, children, isPdf }) => {
    const linkStyle = {
      color: 'black',
      textDecoration: 'none',
      padding: '10px 15px',
      borderRadius: '5px',
      transition: 'background-color 0.3s',
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '1rem',
      marginTop: '-10vh',
      backgroundColor: location.pathname === to ? '#ff9e99' : 'transparent',
    };

    if (isPdf) {
      return (
        <a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        to={to}
        style={linkStyle}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      padding: '10px',
      display: 'flex',
      marginLeft:'20vw',
      marginRight:'20vw',
      justifyContent: 'space-around',
      alignItems: 'center',
    }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/pdfs/resume.pdf" isPdf>Resume</NavLink>
      <NavLink to="/pdfs/portfolio.pdf" isPdf>Portfolio</NavLink>
      <NavLink to="/fun">For Fun</NavLink>
    </nav>
  );
};

export default Navigation;
