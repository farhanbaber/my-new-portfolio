import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navContainer} ${scrolled ? styles.scrolled : ''}`}>
      
      {/* 1. Logo */}
      <div className={styles.logoContainer}>
        <a href="#HOME">
          <img src="/re-chlogo.png" alt="Logo" className={styles.logoImg} />
        </a>
      </div>

      {/* 2. Navigation Links with Hover Animation */}
      <ul className={`${styles.navLinks} ${isOpen ? styles.openMenu : ''}`}>
        <li><a href="#HOME" onClick={() => setIsOpen(false)}>HOME</a></li>
        <li><a href="#ABOUT" onClick={() => setIsOpen(false)}>ABOUT</a></li>
        <li><a href="#RESUME" onClick={() => setIsOpen(false)}>RESUME</a></li>
        <li><a href="#PROJECT" onClick={() => setIsOpen(false)}>PROJECT</a></li>
        <li><a href="#SERVICE" onClick={() => setIsOpen(false)}>SERVICE</a></li>
        <li><a href="#CONTACT" onClick={() => setIsOpen(false)}>CONTACT</a></li>
      </ul>

      {/* 3. Email Link */}
      <a href="mailto:farhanbaber965@gmail.com" className={`${styles.emailContainer} ${styles.hideMobile}`}>
        <div className={styles.emailText}>
          <span>FARHANBABER965</span>
          <span>@GMAIL.COM</span>
        </div>
        <div className={styles.arrowWrapper}>
          <span className={styles.arrow}>↗</span>
        </div>
      </a>

      {/* 4. Hamburger */}
      <div 
        className={`${styles.hamburger} ${isOpen ? styles.active : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </nav>
  );
};

export default Navbar;