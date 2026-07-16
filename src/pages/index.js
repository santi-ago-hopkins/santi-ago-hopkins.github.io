import React from 'react';
import '../fonts/fonts.css';

export default function Home() {
  return (
    <div className="container">
      <div className="home-inner">
        <h1 className="home-name">Santiago Hopkins</h1>
        <p className="home-tagline">
          a <span className="home-emphasis">mechanical engineer</span> and{' '}
          <span className="home-emphasis">programmer</span> making a difference in{' '}
          <span className="home-emphasis">robotics</span>
        </p>
      </div>
    </div>
  );
}
