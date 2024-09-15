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
      setTimeout(() => {
        onComplete();
        setTimeout(() => setIsHighlighted(true), 750);
      }, 500);
    };

    flipLetters();
  }, [text, onComplete, delay]);

  const renderText = () => {
    const highlightRanges = [];
    highlightWords.forEach(phrase => {
      let startIndex = text.toLowerCase().indexOf(phrase.toLowerCase());
      while (startIndex !== -1) {
        highlightRanges.push({
          start: startIndex,
          end: startIndex + phrase.length
        });
        startIndex = text.toLowerCase().indexOf(phrase.toLowerCase(), startIndex + 1);
      }
    });

    highlightRanges.sort((a, b) => a.start - b.start);

    let currentHighlight = null;
    const elements = [];

    for (let i = 0; i < text.length; i++) {
      if (!currentHighlight && highlightRanges.some(range => range.start === i)) {
        currentHighlight = highlightRanges.find(range => range.start === i);
      }

      if (currentHighlight && i >= currentHighlight.start && i < currentHighlight.end) {
        if (i === currentHighlight.start) {
          elements.push(
            <span
              key={`highlight-${i}`}
              style={{
                backgroundColor: isHighlighted ? '#55aaff' : 'transparent',
                color: isHighlighted ? 'white' : 'inherit',
                padding: isHighlighted ? '0 4px' : '0',
                margin: isHighlighted ? '0 2px' : '0',
                borderRadius: '3px',
                transition: 'all 0.5s ease',
                display: 'inline-block',
              }}
            >
              {displayText.slice(currentHighlight.start, currentHighlight.end).map((char, index) => (
                <span
                  key={`highlight-char-${index}`}
                  style={{
                    display: 'inline-block',
                    animation: 'flipIn 0.5s ease-out',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          );
          i = currentHighlight.end - 1; // Skip to the end of the highlight
          currentHighlight = null;
        }
      } else {
        elements.push(
          <span
            key={`char-${i}`}
            style={{
              display: 'inline-block',
              animation: 'flipIn 0.5s ease-out',
            }}
          >
            {displayText[i] === ' ' ? '\u00A0' : displayText[i]}
          </span>
        );
      }
    }

    return elements;
  };

  return (
    <div style={style}>
      {renderText()}
    </div>
  );
};

export default FlippingText;
