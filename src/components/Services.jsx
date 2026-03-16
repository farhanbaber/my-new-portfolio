import React from 'react';
import styles from './Services.module.css';
import { 
  HiOutlineGlobe, 
  HiOutlineDeviceMobile, 
  HiOutlinePencil, 
  HiOutlineLightBulb, 
  HiOutlineCode, 
  HiOutlineDatabase 
} from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  const servicesData = [
    { title: "Full Stack Web/Dev", desc: "Building scalable, high-performance web applications using MERN stack.", icon: <HiOutlineGlobe />, },
    { title: "App Development", desc: "Creating intuitive and lightning-fast mobile experiences for global users.", icon: <HiOutlineDeviceMobile />, },
    { title: "UI/UX Designing", desc: "Crafting aesthetic and functional interfaces with modern luxury vibes.", icon: <HiOutlinePencil />, },
    { title: "IT Consulting", desc: "Expert guidance on digital transformation and technical architecture.", icon: <HiOutlineLightBulb />, },
    { title: "Software Dev", desc: "Custom enterprise-level software solutions designed for reliability.", icon: <HiOutlineCode />, },
    { title: "Database Dev", desc: "Architecting secure, optimized, and scalable database schemas.", icon: <HiOutlineDatabase />, }
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Expertise & Solutions</span>
          <h2 className={styles.title}>Premium <span>Services</span></h2>
        </div>

        <div className={styles.grid}>
          {servicesData.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconBox}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
              {/* <button className={styles.learnMore}>
                READ MORE <FaArrowRight className={styles.arrow} />
              </button> */}
              {/* Wapis animated icon! */}
              <div className={styles.cardBgIcon}>{service.icon}</div>
            </div>
          ))}
        </div>
        
        <div className={styles.trustFooter}>
          <p>Pushing the boundaries of digital excellence.</p>
          
          <div className={styles.btnWrapper}>
            <button className={styles.exploreBtn}>
              <span className={styles.btnText}>INITIATE PROJECT</span>
              <span className={styles.btnOverlay}></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;