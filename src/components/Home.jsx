import styles from './Home.module.css';

const Hero = () => {
  return (
    <div className={styles.heroWrapper} id="HOME">
      <div className={styles.heroCard}>
        {/* Main Big Headings */}
        <h1 className={styles.mainTitle}>SOFTWARE</h1>
        <div className={styles.subHeader}>
          <div className={styles.line}></div>
          <h2 className={styles.devmain}>ARCHITECT</h2>
        </div>

        {/* Professional Skill Bar */}
        <div className={styles.skillBar}>
          {/* Har skill ko aik skillItem div mein rakho */}
          <div className={styles.skillItem}>
            <span className={styles.dot}></span>
            <span>Full Stack Developer</span>
          </div>

          <div className={styles.skillItem}>
            <span className={styles.dot}></span>
            <span>AI Enthusiast</span>
          </div>

          <div className={styles.skillItem}>
            <span className={styles.dot}></span>
            <span>Creative Technologist</span>
          </div>

          <div className={styles.skillItem}>
            <span className={styles.dot}></span>
            <span>Software Engineer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;