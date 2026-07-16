import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function Contact() {
  return (
    <div className="container">
      <div className="contact-grid">
        <div className="contact-info">
          <p className="contact-name">Santiago Hopkins</p>
          <p>santiagohopkins@berkeley.edu</p>
          <p>(818) 383-5442</p>
        </div>

        <div className="contact-photo-wrap">
          <StaticImage src="../images/me.jpeg" alt="Santiago Hopkins" className="contact-photo" />
        </div>
      </div>
    </div>
  );
}
