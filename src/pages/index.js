import React from 'react';
import Prose from '../components/Prose';
import config from '../../site.config';

// The name, tagline and portrait are rendered by the shell (src/app.js) so
// they can sit above and beside this column, matching the home layout.
export default function Home() {
  const { bio, email, phone, phoneHref, links } = config;

  return (
    <div className="container">
      <div className="home-inner">
        {bio.length > 0 && (
          <div className="home-bio">
            {bio.map((paragraph) => (
              <Prose key={paragraph} text={paragraph} />
            ))}
          </div>
        )}

        <div className="home-contact">
          {email && <a href={`mailto:${email}`}>{email}</a>}
          {phone && (
            <a href={`tel:${phoneHref || phone.replace(/[^\d+]/g, '')}`}>{phone}</a>
          )}
          {links.map(({ label, href }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export const Head = () => <title>{config.siteTitle}</title>;
