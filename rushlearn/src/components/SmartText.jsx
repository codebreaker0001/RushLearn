import React, { useState, useEffect } from 'react';
import './SmartText.css'
const Typewriter = ({ text, delay, onTypingComplete }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (!isDeleting && currentIndex <= text.length) {
        setCurrentText((prevText) => text.slice(0, currentIndex + 1));
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else if (isDeleting && currentIndex >= 0) {
        setCurrentText((prevText) => text.slice(0, currentIndex));
        setCurrentIndex((prevIndex) => prevIndex - 1);
      } else if (!isDeleting && currentIndex === text.length + 1) {
        setIsDeleting(true);
        onTypingComplete();
      } else if (isDeleting && currentIndex === -1) {
        clearInterval(typingEffect);
      }
    }, delay);

    return () => clearInterval(typingEffect);
  }, [currentIndex, text, delay, isDeleting, onTypingComplete]);

  return <span>{currentText}</span>;
};



const App = () => {
  const [isTypingCompleted, setIsTypingCompleted] = useState(false);

  const handleTypingComplete = () => {
    setTimeout(() => {
      setIsTypingCompleted(true);
    }, 1000); // Adjust the delay as needed
  };

  return (
    <div>
      <p className = "smarttext">Welcome to <span className='changer'><Typewriter text="RushLearn" delay={100} onTypingComplete={handleTypingComplete} />
      {isTypingCompleted && <Typewriter text=" Your Exam Time Friend" delay={100} onTypingComplete={handleTypingComplete} />}</span></p>
      
    </div>
  );
};

export default App;
