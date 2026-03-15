import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navContainer}>
      {/* 1. Logo (Mobile par ab ye Left mein dikhega) */}
      <div className={styles.logoContainer}>
        <img src="/re-chlogo.png" alt="Logo" className={styles.logoImg} />
      </div>

      {/* 2. Navigation Links */}
      <ul className={`${styles.navLinks} ${isOpen ? styles.openMenu : ''}`}>
        <li onClick={() => setIsOpen(false)}>HOME</li>
        <li onClick={() => setIsOpen(false)}>ABOUT</li>
        <li onClick={() => setIsOpen(false)}>RESUME</li>
        <li onClick={() => setIsOpen(false)}>PROJECT</li>
        <li onClick={() => setIsOpen(false)}>SERVICE</li>
        <li onClick={() => setIsOpen(false)}>CONTACT</li>
      </ul>

      {/* 3. Email & Arrow (Desktop par Right mein) */}
      <div className={`${styles.emailContainer} ${styles.hideMobile}`}>
        {/* Navbar.jsx mein ye change karein */}
<a href="mailto:farhanbaber965@gmail.com" className={`${styles.emailContainer} ${styles.hideMobile}`}>
  <div className={styles.emailText}>
    <span>FARHANBABER965</span>
    <span>@GMAIL.COM</span>
  </div>
  <div className={styles.arrowWrapper}>
    <span className={styles.arrow}>↗</span>
  </div>
</a>
      </div>

      {/* 4. Hamburger (Mobile par ab ye Right mein dikhega) */}
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