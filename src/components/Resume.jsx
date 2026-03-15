import styles from './Resume.module.css';
import { FaGraduationCap, FaCalendarAlt, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiTypescript, SiBootstrap, SiTailwindcss, SiExpress, SiFirebase } from 'react-icons/si';

const Resume = () => {
  const education = [
    { 
      date: "2010 - 2025", 
      title: "Matriculation", 
      desc: "Completed Matriculation with a strong focus on science and logical reasoning, laying the foundation for technical studies." 
    },
    { 
      date: "2025 - 2027", 
      title: "FSC - Pre-Engineering", 
      desc: "Currently pursuing Pre-Engineering to strengthen mathematical and analytical skills for advanced computing." 
    },
    { 
      date: "2025 - 2026", 
      title: "Full Stack Development (SMIT)", 
      desc: "Completed intensive Full Stack Development training at Saylani Mass IT Consulting, mastering modern web technologies." 
    }
  ];

  const skillsList = [
    { name: "HTML5", icon: <FaHtml5 style={{color: '#E34F26'}} /> },
    { name: "CSS3", icon: <FaCss3Alt style={{color: '#1572B6'}} /> },
    { name: "JavaScript", icon: <FaJs style={{color: '#F7DF1E'}} /> },
    { name: "React", icon: <FaReact style={{color: '#61DAFB'}} /> },
    { name: "Node.js", icon: <FaNodeJs style={{color: '#339933'}} /> },
    { name: "MongoDB", icon: <SiMongodb style={{color: '#47A248'}} /> },
    { name: "Express", icon: <SiExpress style={{color: '#000000'}} /> },
    { name: "Firebase", icon: <SiFirebase style={{color: '#FFCA28'}} /> }, // PHP ki jaga Firebase
    { name: "TypeScript", icon: <SiTypescript style={{color: '#3178C6'}} /> },
    { name: "Bootstrap", icon: <SiBootstrap style={{color: '#7952B3'}} /> },
    { name: "GitHub", icon: <FaGithub style={{color: '#181717'}} /> }, // WordPress ki jaga GitHub
    { name: "Git", icon: <FaGitAlt style={{color: '#F05032'}} /> },
    { name: "MySQL", icon: <FaDatabase style={{color: '#4479A1'}} /> },
  ];

  return (
    <section className={styles.resumeSection}>
      <div className={styles.noiseOverlay}></div>

      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Professional <span>Resume</span></h2>
        
        <div className={styles.educationWrapper}>
          <h3 className={styles.columnHeader}><FaGraduationCap /> Academic & Professional Training</h3>
          <div className={styles.timeline}>
            {education.map((item, index) => (
              <div key={index} className={styles.cardWrapper}>
                <div className={styles.dot}></div>
                <div className={styles.card}>
                  <div className={styles.dateTag}><FaCalendarAlt /> {item.date}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
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
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;