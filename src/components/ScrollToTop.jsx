import React, { useEffect, useState } from 'react';
import styles from './ScrollToTop.module.css';
import { FaChevronUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Jab 400px scroll ho jaye tab hi nazar aaye
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Ye slowly upar le kar jayega
    });
  };

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div 
      className={`${styles.wrapper} ${isVisible ? styles.visible : ''}`} 
      onClick={scrollToTop}
    >
      <svg width="50" height="50" className={styles.svg}>
        <circle
          className={styles.bgCircle}
          cx="25"
          cy="25"
          r={radius}
        />
        <circle
          className={styles.fillCircle}
          cx="25"
          cy="25"
          r={radius}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
        />
      </svg>
      <FaChevronUp className={styles.icon} />
    </div>
  );
};

export default ScrollToTop;