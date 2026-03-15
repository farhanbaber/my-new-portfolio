import styles from './Home.module.css';

const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroCard}>
        {/* Main Big Headings */}
        <h1 className={styles.mainTitle}>SOFTWARE</h1>
        <div className={styles.subHeader}>
          <div className={styles.line}></div>
          <h2 className={styles.devTitle}>ARCHITECT</h2>
        </div>

        {/* Professional Skill Bar */}
        <div className={styles.skillBar}>
          <span>Full Stack Developer</span>
          <span className={styles.dot}></span>
          <span>AI Enthusiast</span>
          <span className={styles.dot}></span>
          <span>UI/UX Designer</span>
          <span className={styles.dot}></span>
          <span>Software Engineer</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;