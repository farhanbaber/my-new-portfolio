import React from 'react';
import styles from './Resume.module.css';
import { 
  FaGraduationCap, FaCalendarAlt, FaHtml5, FaCss3Alt, 
  FaJs, FaReact, FaNodeJs, FaGithub, FaGitAlt, 
  FaDownload 
} from 'react-icons/fa';
import { 
  SiMongodb, SiBootstrap, SiExpress, SiFirebase 
} from 'react-icons/si';

const Resume = () => {
  // Education order updated: Latest on top
  const education = [
    { 
      date: "2010 - 2025", 
      title: "Schooling & Matriculation", 
      desc: "Completed foundational science education with a strong focus on logical reasoning." 
    },
    { 
      date: "2025 - 2027", 
      title: "FSC - Pre-Engineering", 
      desc: "Currently pursuing Pre-Engineering to strengthen analytical skills and mathematical foundations." 
    },
    { 
      date: "2025 - 2026", 
      title: "Full Stack Development (SMIT)", 
      desc: "Completed intensive MERN Stack training at Saylani Mass IT Consulting, focusing on scalable web architectures." 
    }
  ];

  const skillsList = [
    { name: "HTML5", icon: <FaHtml5 style={{color: '#E34F26'}} /> },
    { name: "CSS3", icon: <FaCss3Alt style={{color: '#1572B6'}} /> },
    { name: "JavaScript", icon: <FaJs style={{color: '#F7DF1E'}} /> },
    { name: "React", icon: <FaReact style={{color: '#61DAFB'}} /> },
    { name: "Node.js", icon: <FaNodeJs style={{color: '#339933'}} /> },
    { name: "Firebase", icon: <SiFirebase style={{color: '#FFCA28'}} /> },
    { name: "MongoDB", icon: <SiMongodb style={{color: '#47A248'}} /> },
    { name: "Express.js", icon: <SiExpress style={{color: '#000000'}} /> },
    { name: "GitHub", icon: <FaGithub style={{color: '#181717'}} /> },
    { name: "Git", icon: <FaGitAlt style={{color: '#F05032'}} /> },
    { name: "Bootstrap", icon: <SiBootstrap style={{color: '#7952B3'}} /> },
    
  ];

  return (
    <section className={styles.resumeSection}>
      <div className={styles.noiseOverlay}></div>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Professional <span className={styles.mainspan}>Resume</span></h2>
        
        <div className={styles.educationWrapper}>
          <h3 className={styles.columnHeader}><FaGraduationCap /> Academic Training</h3>
          <div className={styles.timeline}>
            {education.map((item, index) => (
              <div key={index} className={styles.cardWrapper}>
                <div className={styles.dot}></div>
                <div className={styles.card}>
                  <span className={styles.dateTag}><FaCalendarAlt /> {item.date}</span>
                  <h4 className={styles.eduTitle}>{item.title}</h4>
                  <p className={styles.eduDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.skillsWrapper}>
          <h3 className={styles.columnHeader}>Technical Arsenal</h3>
          <div className={styles.skillsGrid}>
            {skillsList.map((skill, index) => (
              <div key={index} className={styles.skillPill}>
                <span className={styles.skillIcon}>{skill.icon}</span>
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.buttonFullCenter}>
          <a href="resume.png" download="Farhan_Baber_CV.pdf" className={styles.exploreBtn}>
            DOWNLOAD CV <FaDownload style={{marginLeft: '10px'}} />
            <div className={styles.outerBorder}></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;