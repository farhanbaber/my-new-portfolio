import React from "react";
import styles from "./Loader.module.css";

const Loader = ({ isExiting }) => {
  return (
    <div className={`${styles.wrapper} ${isExiting ? styles.loaderExiting : ""}`}>
      <div className={styles.content}>
        <div className={styles.logoFrame}>
          <img src="/re-chlogo.png" alt="FB Logo" className={styles.logo} />
        </div>
        
        <div className={styles.progressTrack}>
          <div className={styles.progressBar}></div>
        </div>

        <div className={styles.textStack}>
          <span className={styles.status}>INITIALIZING</span>
          <span className={styles.identity}>FARHAN BABER | DEV STUDIO</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;