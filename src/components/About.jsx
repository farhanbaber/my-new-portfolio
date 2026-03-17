import styles from './About.module.css';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.imageSide}>
          <div className={styles.largeFrame}>
            <div className={styles.imageWrapper}>
              <img src="/mypic.jpeg" alt="Farhan Baber" className={styles.profileImg} />
            </div>
            <div className={styles.nameBadgeWrapper}>
              <h4 className={styles.userName}>M FARHAN BABER</h4>
              <div className={styles.statusBadge}>
                <span>Available for Work</span>
                <div className={styles.pulseContainer}>
                  <div className={styles.greenDot}></div>
                  <div className={`${styles.bubble} ${styles.b1}`}></div>
                  <div className={`${styles.bubble} ${styles.b2}`}></div>
                  <div className={`${styles.bubble} ${styles.b3}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contentSide}>
          <h3 className={styles.introHeading}>
            Farhan Baber is a <span className={styles.skillBox}>Full Stack Engineer</span> 
            who is evolving into a <span className={styles.skillBox}>Software Engineer</span> 
            and pioneering in <span className={styles.skillBox}>AI Agents</span>
          </h3>
          <p className={styles.description}>
            I am a dedicated professional with a deep-rooted passion for architecting 
            robust, scalable digital systems. My journey involves bridging the gap between 
            complex backend logic and intuitive user experiences.
          </p>
          <p className={styles.description}>
            I have extensive experience working in the IT sector, specifically focusing on 
            Frontend technologies and Web Development. I have successfully completed 
            internships at <span className={styles.highlight}>Certura</span>, 
            <span className={styles.highlight}>Code Alpha</span> and <span className={styles.highlight}>smit</span> where I honed my skills 
            in building modern, responsive digital solutions.
          </p>

          <div className={styles.socialWrapper}>
            <a href="#" className={styles.iconBox}><FaLinkedinIn /></a>
            <a href="#" className={styles.iconBox}><FaGithub /></a>
            <a href="#" className={styles.iconBox}><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className={styles.buttonFullCenter}>
        <button className={styles.exploreBtn}>
           EXPLORE MY PROJECTS <i className="fa-solid fa-arrow-right"></i>
           <div className={styles.outerBorder}></div>
        </button>
      </div>
    </section>
  );
};

export default About;