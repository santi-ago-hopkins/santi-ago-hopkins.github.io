import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
  { to: '/pdfs/m-santiago_hopkins_resume.pdf', label: 'Resume', isPdf: true },
  { to: '/pdfs/santiago-hopkins_portfolio_jan2025.pdf', label: 'Portfolio', isPdf: true },
  { to: '/pdfs/dbw-1.pdf', label: 'Drive-by-Wire Docs', isPdf: true },
  { to: '/fun', label: 'For Fun' },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="nav">
      <div className="nav-inner">
        {links.map(({ to, label, isPdf }) => {
          const isActive = !isPdf && location.pathname === to;
          const className = `nav-link${isActive ? ' active' : ''}`;

          if (isPdf) {
            return (
              <a key={to} href={to} target="_blank" rel="noopener noreferrer" className={className}>
                {label}
              </a>
            );
          }

          return (
            <Link key={to} to={to} className={className}>
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
