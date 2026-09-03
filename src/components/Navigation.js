import React from 'react';
import { Link } from 'gatsby';
import config from '../../site.config';

const normalize = (path) => path.replace(/\/+$/, '') || '/';

// A nav entry is active on its own page and on anything nested under it, so a
// blog post keeps "Blog" highlighted.
const isActive = (pathname, path) => {
  const here = normalize(pathname);
  const target = normalize(path);
  return target === '/' ? here === '/' : here === target || here.startsWith(`${target}/`);
};

const Navigation = ({ pathname }) => (
  <nav className="nav">
    <div className="nav-inner">
      {config.nav.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className={`nav-link${isActive(pathname, path) ? ' active' : ''}`}
        >
          {label}
        </Link>
      ))}
    </div>
  </nav>
);

export default Navigation;
