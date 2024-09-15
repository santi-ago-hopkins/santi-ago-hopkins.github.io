// src/components/FlippingText.js
import React, { useState, useEffect } from 'react';

const FlippingText = ({ text, style, onComplete, highlightWords = [], delay = 0 }) => {
  const [displayText, setDisplayText] = useState(Array(text.length).fill(' '));
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    const flipLetters = async () => {
      await new Promise(resolve => setTimeout(resolve, delay));
      for (let i = 0; i < text.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 25));
        setDisplayText(prev => {
          const newText = [...prev];
          newText[i] = text[i];
          return newText;
        });
      }
      // Signal completion after a short delay
      setTimeout(() => {
        onComplete();
        // Apply highlighting 0.75 seconds after completion
        setTimeout(() => setIsHighlighted(true), 750);
      }, 500);
    };

    flipLetters();
  }, [text, onComplete, delay]);

  const renderText = () => {
    const words = text.split(' ');
    let letterIndex = 0;

    return words.map((word, wordIndex) => {
      const shouldHighlight = highlightWords.some(hw => 
        word.toLowerCase().includes(hw.toLowerCase())
      );

      const wordSpan = (
        <span
          key={wordIndex}
          style={{
            backgroundColor: isHighlighted && shouldHighlight ? '#55aaff' : 'transparent',
            color: isHighlighted && shouldHighlight ? 'white' : 'inherit',
            padding: isHighlighted && shouldHighlight ? '0 4px' : '0',
            margin: isHighlighted && shouldHighlight ? '0 2px' : '0',
            borderRadius: isHighlighted && shouldHighlight ? '3px' : '0',
            transition: 'all 0.5s ease',
            display: 'inline-block',
          }}
        >
          {word.split('').map((letter, index) => (
            <span
              key={letterIndex + index}
              style={{
                display: 'inline-block',
                animation: 'flipIn 0.5s ease-out',
              }}
            >
              {displayText[letterIndex + index] === ' ' ? '\u00A0' : displayText[letterIndex + index]}
            </span>
          ))}
        </span>
      );

      letterIndex += word.length + 1; // +1 for the space
      return (
        <React.Fragment key={`word-${wordIndex}`}>
          {wordSpan}
          {wordIndex < words.length - 1 && ' '}
        </React.Fragment>
      );
    });
  };

  return (
    <div style={style}>
      {renderText()}
    </div>
  );
};

export default FlippingText;
