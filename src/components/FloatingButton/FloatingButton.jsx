import { useState, useEffect } from 'react';
import './FloatingButton.css';

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) { 
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToHeader = () => {
    const header = document.getElementById('header');
    if (header) {
      header.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`floating-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToHeader}
      title="Ir al inicio"
      aria-label="Ir al inicio"
    >
      ↑
    </button>
  );
};

export default FloatingButton;
