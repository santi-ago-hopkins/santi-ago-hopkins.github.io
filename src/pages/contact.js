import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function Contact() {
  return (
    <div style={{ 
      display: 'flex',  
      flexDirection: 'row', // Side-by-side layout
      minHeight: '100vh', 
      width: '100vw', 
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '-15rem',
      padding: '20px' // Add some padding for better spacing
    }}>
      <div style={{
        width: '300px', // Adjust this width as needed
        textAlign: 'left', // Left align text
        marginRight: '40px' // Space between text and image
      }}>
        <p style={{
          fontSize: '2rem', // Increased font size
          fontFamily: 'Montserrat, sans-serif',
          color: '#333',
          fontWeight: '700',
          marginBottom: '0.5rem',
        }}>
          Santiago Hopkins
        </p>
        <p style={{
          fontSize: '1.5rem',
          fontFamily: 'Montserrat, sans-serif',
          color: '#333',
          marginBottom: '0.5rem',
        }}>
          santiagohopkins@berkeley.edu
        </p>
        <p style={{
          fontSize: '1.5rem',
          fontFamily: 'Montserrat, sans-serif',
          color: '#333',
        }}>
          (818) 383-5442
        </p>
      </div>

      <StaticImage 
        src="../images/me.jpeg" // Path to your image
        alt="Santiago Hopkins"
        style={{
          borderRadius: '50%', // Makes the image circular
          width: '600px', // Increased size for a larger image
          height: '600px', // Keep height equal to width for a perfect circle
          marginRight: '-30vw',
          marginLeft: '12vw'
        }} 
      />
    </div>
  );
}
