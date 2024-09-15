import React from 'react';

export default function Resume() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Montserrat, sans-serif',
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Resume</h1>
      <p style={{ marginBottom: '20px' }}>Click below to view my resume:</p>
      <a 
        href="/pdfs/resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          fontSize: '1rem',
        }}
      >
        View Resume
      </a>
    </div>
  );
}
