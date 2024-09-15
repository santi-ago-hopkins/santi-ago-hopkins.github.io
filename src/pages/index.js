import React, { useState } from 'react';
import '../fonts/fonts.css';
import FlippingText from '../components/FlippingText';

export default function Home() {
  const [titleComplete, setTitleComplete] = useState(false);

  return (
    <div style={{ 
      display: 'flex',  
      flexDirection: 'column',
      minHeight: '100vh', 
      width: '100vw', 
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '-10vh'
    }}>
      <div style={{
        textAlign: 'center',
      }}>
        <FlippingText 
          text="Santiago Hopkins"
          style={{
            fontSize: '6.5rem',
            color: 'black',
            fontFamily: 'soda_shake',
            fontWeight: 400,
          }}
          onComplete={() => setTitleComplete(true)}
        />
        <FlippingText 
          text="a mechanical engineer and programmer making a difference in urban mobility"
          delay={titleComplete ? 0 : 1500}
          highlightWords={['mechanical', 'engineer', 'programmer', 'urban', 'mobility']}
          style={{
            fontSize: '1.5rem',
            color: '#333',
            fontFamily: 'Montserrat, sans-serif',
            marginTop: '1rem',
            lineHeight: '1.5',
          }}
          onComplete={() => {/* You can add a function here if needed */}}
        />
      </div>
    </div>
  );
}
