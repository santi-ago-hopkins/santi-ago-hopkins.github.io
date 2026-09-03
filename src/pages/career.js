import React from 'react';
import config from '../../site.config';
import { pageTitle } from '../title';

// The current role is highlighted. Entries dated "Present" are picked up
// automatically; set `current: true` on an entry to force it either way.
const isCurrent = (entry) =>
  entry.current !== undefined ? entry.current : /present/i.test(entry.dates);

const CareerItem = ({ title, company, dates, current }) => (
  <div className={`career-item${current ? ' current' : ''}`}>
    <p className="career-dates">{dates}</p>
    <div className="career-content">
      <h2 className="career-title">{title}</h2>
      <p className="career-company">{company}</p>
    </div>
  </div>
);

export default function Career() {
  return (
    <div className="container">
      <div className="career-list">
        {config.career.map((entry) => (
          <CareerItem
            key={`${entry.company}-${entry.title}`}
            {...entry}
            current={isCurrent(entry)}
          />
        ))}
      </div>
    </div>
  );
}

export const Head = () => <title>{pageTitle('/career')}</title>;
