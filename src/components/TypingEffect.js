import React, { useEffect, useState } from 'react';
import './TypingEffect.css';

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split('');

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState(Array(text.length).fill(''));
  const [letterIndex, setLetterIndex] = useState(0);
  const [finished, setFinished] = useState(false);
   
  useEffect(() => {
    let randomizeInterval;
    let revealInterval;

    // Function to randomize letters during reveal phase
    const randomizeLetters = () => {
      if (finished) return;
      setDisplayedText((prev) =>
        prev.map((char, index) =>
          index < letterIndex ? char : alphabet[Math.floor(Math.random() * alphabet.length)]
        )
      );
    };

    // Reveal letters one by one in a set interval
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

    // Start intervals for randomizing and revealing letters
    randomizeInterval = setInterval(randomizeLetters, 75);
    revealInterval = setInterval(revealLetter, 150);

    return () => {
      clearInterval(randomizeInterval);
      clearInterval(revealInterval);
    };
  }, [letterIndex, text, finished]);

  return (
    <div className="typing-effect">
      {displayedText.map((char, index) => (
        <span
          key={index}
          className={`typing-char ${index < letterIndex ? "glow" : "hover-effect"}`}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default TypingEffect;
