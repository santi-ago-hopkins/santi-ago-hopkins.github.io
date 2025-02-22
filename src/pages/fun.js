import React from 'react';
import BouncingSoccerBall from '../components/BouncingSoccerBall';

const Fun = () => {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden', position: 'relative' }}>
      <BouncingSoccerBall />
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'purple', // Change to your preferred color
        fontSize: '2rem', // Adjust the size as needed
        fontFamily: 'soda_shake',
        textAlign: 'center',
        zIndex: 1 // Ensure the text is above the canvas
      }}>
        i use arch
      </div>
    </div>
  );
};

export default Fun;
