import React, { useState } from 'react';

export default function Home() {
  const [expandedPdf, setExpandedPdf] = useState(null);

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
        fontFamily: 'Montserrat, sans-serif',
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
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      {/* Title */}
      <div style={{
        fontSize: '1.7rem',
        color: 'black',
        backgroundColor: '#add8e6',
        borderRadius: '8px',
        padding: '15px',
        textAlign: 'left',
        fontFamily: 'Montserrat, sans-serif',
        width: '97%',
        fontWeight: 400,
        marginBottom: '20px',
      }}>
        Santiago Hopkins
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
