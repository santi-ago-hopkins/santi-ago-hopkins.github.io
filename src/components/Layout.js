import React from 'react';
import '../styles/global.css';
import Navigation from './Navigation';
import Image from './Image';
import config from '../../site.config';

/**
 * The shell around every page: the name and portrait on the home page, the
 * nav sidebar, and the footer. Gatsby owns routing, so `children` is the
 * page itself.
 */
const Layout = ({ children, location }) => {
  const pathname = location ? location.pathname : '/';
  const isHome = pathname.replace(/\/+$/, '') === '';

  return (
    <div className="app-shell">
      {isHome && (
        <header className="site-header">
          <h1 className="site-name">{config.name}</h1>
          {config.tagline && <p className="site-tagline">{config.tagline}</p>}
        </header>
      )}

      <div className="sidebar">
        {isHome && config.photo && (
          <Image
            src={config.photo}
            alt={config.name}
            variant="square"
            className="sidebar-photo"
          />
        )}
        <Navigation pathname={pathname} />
      </div>

      <div className="main-column">
        <div className="page-shell">{children}</div>
        <footer className="footer">{config.footer}</footer>
      </div>
    </div>
  );
};

export default Layout;
