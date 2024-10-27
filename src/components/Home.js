import React, { useEffect, useState } from 'react';
import TypingEffect from './TypingEffect';
import './Home.css';
import {ReactTyped} from "react-typed";

const Home = () => {
  const [email, setEmail] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showTypedText, setShowTypedText] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleButtonClick = () => {
    console.log("Redirect to user dashboard for:", email);
  };

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
  
  useEffect(()=>{
    const timer =setTimeout(()=>{
      setShowTypedText(true);
    }, 6000);
    return ()=> clearTimeout(timer);
  }, []);

  return (
    <div id="ba" className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <nav className="p-4 flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold">AceXplore</h1>
        <ul className="flex space-x-4">
          <li><a href="#home">Home</a></li>
          <li><a href="#events">Events</a></li>
        </ul>
        <button onClick={toggleDarkMode} className="toggle-dark-mode-btn">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>

      <section className="p-8 text-center" id="home">
        <h2 className="text-3xl font-semibold mb-4">
          <TypingEffect text="Welcome  To  AceXplore!!" typingSpeed={100} revealSpeed={150} />
        </h2>
        <p className="mb-6">
           Join us to{" "}
            {showTypedText && (<ReactTyped 
               strings={["Code", "Build", "Progress"]}
               typeSpeed={100}
               loop
               backSpeed={20}
               cursorChar=">"
               showCursor={true}
            />
            )}
        </p>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          className="input-field"
        />
        <button onClick={handleButtonClick} className="dashboard-button">
          Go to Dashboard
        </button>
      </section>

      <section id="events" className="p-8 event-section">
        <h2 className="text-2xl font-semibold text-center mb-6">Nexus `24</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="event-card transform transition duration-500 hover:scale-105"
            >
              <img
                src={`https://placeimg.com/640/480/nature/${index + 1}`}
                alt={`Event ${index + 1}`}
                className="event-image"
              />
              <div className="event-info">
                <h3 className="event-title">Event Title {index + 1}</h3>
                <p className="event-description">Event description goes here...</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
