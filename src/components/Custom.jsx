import React, { useEffect, useRef } from 'react';
import styles from './Custom.module.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    const moveCursor = (e) => {
      // Direct DOM manipulation for 60fps smoothness
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return <div ref={cursorRef} className={styles.cursor} />;
};

export default CustomCursor;