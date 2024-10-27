import React, { useEffect, useState } from 'react';
import './TypingEffect.css';

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split('');

const TypingEffect = ({ text, isDarkMode }) => {
  const [displayedText, setDisplayedText] = useState(Array(text.length).fill(''));
  const [letterIndex, setLetterIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let randomizeInterval;
    let revealInterval;

    const randomizeLetters = () => {
      if (finished) return;
      setDisplayedText((prev) =>
        prev.map((char, index) =>
          index < letterIndex ? char : alphabet[Math.floor(Math.random() * alphabet.length)]
        )
      );
    };

    const revealLetter = () => {
      setDisplayedText((prev) => {
        const newDisplay = [...prev];
        newDisplay[letterIndex] = text[letterIndex];
        return newDisplay;
      });

      setLetterIndex((prev) => prev + 1);

      if (letterIndex >= text.length - 1) {
        setFinished(true);
        clearInterval(revealInterval);
        clearInterval(randomizeInterval);
      }
    };

    randomizeInterval = setInterval(randomizeLetters, 75);
    revealInterval = setInterval(revealLetter, 150);

    return () => {
      clearInterval(randomizeInterval);
      clearInterval(revealInterval);
    };
  }, [letterIndex, text, finished]);

  return (
    <div className={isDarkMode ? 'typing-effect-dark' : 'typing-effect-light'}>
      {displayedText.map((char, index) => (
        <span
          key={index}
          className={`typing-char ${index < letterIndex ? (isDarkMode ? "glow-dark" : "glow-light") : "hover-effect"}`}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default TypingEffect;
