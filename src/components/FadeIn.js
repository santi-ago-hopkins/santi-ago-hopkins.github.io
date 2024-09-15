// src/components/FlippingText.js
import React, { useState, useEffect } from 'react';

const FlippingText = ({ text, style, onComplete }) => {
  const [displayText, setDisplayText] = useState(Array(text.length).fill(' '));

  useEffect(() => {
    const flipLetters = async () => {
      for (let i = 0; i < text.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setDisplayText(prev => {
          const newText = [...prev];
          newText[i] = text[i];
          return newText;
        });
      }
      // Signal completion after a short delay
      setTimeout(() => onComplete(), 500);
    };

    flipLetters();
  }, [text, onComplete]);

  return (
    <div style={style}>
      {displayText.map((letter, index) => (
        <span key={index} style={{ display: 'inline-block', animation: 'flipIn 0.5s ease-out' }}>
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </div>
  );
};

export default FlippingText;
