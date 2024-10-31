import React, { useEffect, useState } from 'react';
import TypingEffect from './TypingEffect';
import TypingText from './TypingText'; 
import { ReactTyped } from "react-typed";
import { useNavigate } from 'react-router-dom';
import users from '../data/data.json';
import './Home.css';
import LoadingScreen from './LoadingScreen';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Home = () => {
  const [email, setEmail] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showTypedText, setShowTypedText] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [typingParagraphVisible, setTypingParagraphVisible] = useState(false);
  const [ruleIndex, setRuleIndex] = useState(0); // New state to track the current rule index
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  
  const handleButtonClick = () => {
    const user = users.find(user => user.email === email);
    if (user) {
      toast.success("Successfully logged in!");
      setIsLoading(true);
      setTimeout(() => {
        navigate("/dashboard", { state: { user } });
        setIsLoading(false);
      }, 2000);
    } else {
      toast.error("Invalid Email. Please try again.");
    }
  };

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowTypedText(true);
      setAboutVisible(true);
    }, 6000);
    const timer2 = setTimeout(() => {
      setTypingParagraphVisible(true);
    }, 7500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Show each rule point with a delay
  useEffect(() => {
    if (typingParagraphVisible && ruleIndex < rules.length) {
      const timer = setTimeout(() => {
        setRuleIndex((prevIndex) => prevIndex + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [typingParagraphVisible, ruleIndex]);

  const rules = [
    "> Discover New Events",
    "> Participate",
    "> Explore your progress",
    "> Share your achievements"
  ];

  return (
    <div id="ba" className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <ToastContainer />
      {isLoading && <LoadingScreen />}
      <nav className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">AceXplore</h1>
        <ul className="flex space-x-4">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <button onClick={toggleDarkMode} className="toggle-dark-mode-btn">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>

      <section className="p-8 text-center" id="home">
        <h2 className="text-6xl font-semibold mb-4">
          <TypingEffect 
            text="Welcome To AceXplore!!" 
            isDarkMode={isDarkMode} 
            typingSpeed={110} 
            revealSpeed={150}
            cursorChar="|" 
          />
        </h2>
        <p className="mb-7">
          Join us to{" "}
          {showTypedText && (
            <ReactTyped 
              strings={[
                `<span class="typed-text"> Code </span>`, 
                `<span class="typed-text"> Build </span>`, 
                `<span class="typed-text"> Progress </span>`, 
              ]}
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

      <section id="about" className={`about-card ${aboutVisible ? 'slide-in' : ''}`}>
  <p className="main-heading">An ACE-Ful way to Celebrate Participation Success</p>
  <p className="subtext">
    At <span className="highlighted-text">ACE</span>, we believe in recognizing every milestone.
    Our platform is designed to celebrate your achievements, no matter how big or small. Join us
    to discover exciting new events!!
  </p>
  <p className="subtext">
    <span className="highlighted-text">AceXplore</span> brings together innovators and achievers. We celebrate
    every step of your journey and recognize the hard work it takes to progress.
  </p>
  <p className="rules-title">The Rules are simple:</p>
  {rules.slice(0, ruleIndex).map((rule, index) => (
    <TypingText key={index} text={rule} typingSpeed={50} className="fade-in-paragraph" cursorChar="|" />
  ))}
  <div className="additional-content mt-6">
    <button className="explore-button">Explore More</button>
  </div>
</section>
    </div>
  );
};

export default Home;
