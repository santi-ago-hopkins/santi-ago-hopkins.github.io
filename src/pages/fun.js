import React from 'react';
import BouncingSoccerBall from '../components/BouncingSoccerBall';
import '../fonts/fonts.css';

const Fun = () => {
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
      <BouncingSoccerBall />
      <div
        className="fun-text"
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        i use arch
      </div>
    </div>
  );
};

export default Fun;
