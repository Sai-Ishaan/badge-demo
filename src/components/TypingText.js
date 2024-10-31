// TypingText.js
import React, { useState, useEffect } from 'react';

const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100); // Speed of typing effect (in milliseconds)

      return () => clearTimeout(timer);
    }
  }, [charIndex, text]);

  return <h2 className="text-2xl font-semibold about-typing-text">{displayedText}</h2>;
};

export default TypingText;
