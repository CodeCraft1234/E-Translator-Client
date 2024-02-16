import React, { useEffect } from "react";
import "./Animation.css";

const Animation = () => {
  useEffect(() => {
    const words = [
      'Hello',
      "প্রোগ্রামিং হিরো",
      'বাংলা', 
      'Bonjour',
      'Hola',
      '안녕하세요',
      'Привет', 
      'مرحبا', 
      'नमस्ते', 
      'გამარჯობა', 
      'CodeCrafter'
    ];
    
    const generateFloatingWords = () => {
      const animation = document.querySelector('.animation-container');
      if (!animation) return;

      words.forEach(word => {
        const wordElement = document.createElement('div');
        wordElement.classList.add('floating-word');
        wordElement.textContent = word;
        animation.appendChild(wordElement);
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        wordElement.style.left = `${x}px`;
        wordElement.style.top = `${y}px`;

        const duration = (Math.random() * 5 + 5) + 's';
        wordElement.style.animationDuration = duration;

        const delay = (Math.random() * 3) + 's';
        wordElement.style.animationDelay = delay;

        const direction = Math.random() > 0.5 ? 'normal' : 'reverse';
        wordElement.style.animationDirection = direction;

        wordElement.addEventListener('animationend', () => {
          animation.removeChild(wordElement);
        });
      });
    };

    generateFloatingWords();
    const interval = setInterval(generateFloatingWords, 10000);
    return () => clearInterval(interval);
  }, []); 

  return (
    <div className="animation-container"></div>
  );
};

export default Animation;
