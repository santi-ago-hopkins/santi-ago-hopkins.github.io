import React, { useState } from 'react';
import '../fonts/fonts.css';
import FlippingText from '../components/FlippingText';

export default function Home() {
  const [expandedPdf, setExpandedPdf] = useState(null);
  const [titleComplete, setTitleComplete] = useState(false);

  const toggleExpand = (pdfName) => {
    setExpandedPdf(expandedPdf === pdfName ? null : pdfName);
  };

  const PdfViewer = ({ title, src }) => (
    <div 
      style={{ 
        backgroundColor: '#f0f0f0',
        padding: '10px', 
        flex: 1,
        borderRadius: '10px',
      }}
    >
      <h2 style={{ 
        textAlign: 'center', 
        fontFamily: 'soda_shake',
        fontWeight: 300,
        fontSize: '1.2rem',
      }}>
        {title}
      </h2>
      <div 
        style={{ 
          cursor: 'pointer',
          borderRadius: '8px',
          overflow: 'hidden',
          height: '500px',
        }}
        onClick={() => toggleExpand(src)}
      >
        <iframe
          src={src}
          style={{ 
            width: '100%', 
            height: '100%',
            border: 'none',
            pointerEvents: 'none',
          }}
          title={title}
        ></iframe>
      </div>
    </div>
  );

  return (
    <div style={{ 
      display: 'flex',  
      flexDirection: 'column',
      height: '100vh', 
      width: '100vw', 
      backgroundColor: 'white'
    }}>
      <div style={{
        marginTop: '40vh',
        marginBottom: '60vh',
        marginLeft: '10vw',  // Offset to the left
      }}>
        <FlippingText 
          text="Santiago Hopkins"
          style={{
            fontSize: '6.5rem',
            color: 'black',
            fontFamily: 'soda_shake',
            fontWeight: 400,
            textAlign: 'left',
          }}
          onComplete={() => setTitleComplete(true)}
        />
        <FlippingText 
          text="a mechanical engineer and programmer making a difference in urban mobility"
          delay={titleComplete ? 0 : 1500}  // Start after title if it's complete, otherwise wait 1.5s
          highlightWords={['mechanical', 'engineer', 'programmer', 'urban', 'mobility']}
          style={{
            fontSize: '1.5rem',
            color: '#333',
            fontFamily: 'Montserrat, sans-serif',
            marginTop: '1rem',
            textAlign: 'left',
            lineHeight: '1.5',
          }}
          onComplete={() => {/* You can add a function here if needed */}}
        />
      </div>

      {/* Container for Resume and Portfolio */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px',
      }}>
        <PdfViewer title="Resume" src="/pdfs/resume.pdf" />
        <PdfViewer title="Portfolio" src="/pdfs/portfolio.pdf" />
      </div>

      {/* Contact Info */}
      <div style={{
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#ff9e99',
        borderRadius: '8px',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1rem',
        textAlign: 'center',
      }}>
        <h3 style={{ marginBottom: '10px', fontWeight: 400 }}>:-)</h3>
        <p>santiagohopkins@berkeley.edu</p>
      </div>

      {expandedPdf && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div 
            style={{
              width: '90%',
              height: '90%',
              backgroundColor: 'white',
              borderRadius: '10px',
              padding: '20px',
              position: 'relative',
            }}
          >
            <button
              onClick={() => setExpandedPdf(null)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                padding: '5px 10px',
                backgroundColor: '#f0f0f0',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontFamily: 'Montserrat, sans-serif',
                zIndex: 1,
              }}
            >
              Exit
            </button>
            <iframe
              src={expandedPdf}
              style={{ 
                width: '100%', 
                height: '100%', 
                border: 'none',
                borderRadius: '8px',
              }}
              title="Expanded PDF"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
