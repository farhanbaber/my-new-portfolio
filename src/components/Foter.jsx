import React from 'react';
import styles from './Foter.module.css';

const Foter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.copyright}>
            © {currentYear} <span className={styles.name}>Farhan Baber</span>. All Rights Reserved.
          </p>
          <div className={styles.divider}></div>
          <p className={styles.tagline}>Built with Passion & Precision</p>
        </div>
      </div>
    </footer>
  );
};

export default Foter;