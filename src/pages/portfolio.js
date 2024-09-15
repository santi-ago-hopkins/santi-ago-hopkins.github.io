import React from 'react';

export default function Portfolio() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Montserrat, sans-serif',
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Portfolio</h1>
      <p style={{ marginBottom: '20px' }}>Click below to view my portfolio:</p>
      <a 
        href="/pdfs/portfolio.pdf"  // Updated link to point to the correct location
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          fontSize: '1rem',
        }}
      >
        View Portfolio
      </a>
    </div>
  );
}
