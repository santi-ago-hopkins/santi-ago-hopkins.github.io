import React from 'react';

export default function Contact() {
  return (
    <div style={{ 
      display: 'flex',  
      flexDirection: 'column',
      minHeight: '100vh', 
      width: '100vw', 
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '-15rem'

    }}>
      <div style={{
        width: '300px', // Adjust this width as needed
      }}>
        <p style={{
          fontSize: '1.5rem',
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
    </div>
  );
}
