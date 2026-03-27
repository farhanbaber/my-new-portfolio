import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './Project.module.css';
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectSection = () => {
  // Mapping projects to your exact GitHub repository names
  const projects = [
    { name: "Gold-website", title: "Jewellers Hub", desc: "Luxury jewelry brand with premium interface.", img: "/gold-pro.png" },
    { name: "Ecommerce-Website", title: "Global Shop", desc: "Full-stack e-commerce solution with advanced filtering.", img: "/e-proj.png" },
    { name: "Qr-Code-Generator", title: "Qr Code Generator", desc: "Professional tool for generating custom QR codes.", img: "/qr-proj.png" },
    { name: "Wedding-Nasheed", title: "WeddingNasheed", desc: "Responsive platform for traditional Islamic Nasheeds.", img: "/wed-proj.png" },
    { name: "student-portal", title: "Student Portal", desc: "Advanced MERN stack management system.", img: "/portal-proj.png" },
    { name: "full-stack-app", title: "Full Stack App", desc: "Complete robust application with modern stack.", img: "/mern-proj.png" },
    { name: "cars-website", title: "Cars Hub", desc: "Dynamic automobile marketplace with smart filtering.", img: "/cars-proj.png" },
    { name: "AI-Assitant-Nova", title: "Nova AI", desc: "Voice-enabled AI assistant for real-time automation.", img: "/ai-proj.png" },
    { name: "meta-Ai-project", title: "Meta Vision", desc: "Next-gen social layout with media processing.", img: "/meta-proj.png" },
    { name: "Kbiz.com", title: "Kbiz Corporate", desc: "Corporate solution for business management.", img: "/kbiz.proj.png" },
    { name: "Codanix-project", title: "Codanix Solutions", desc: "Premium tech agency service showcase platform.", img: "/codanix.proj.png" },
    { name: "Image-slider", title: "Smooth Slider", desc: "Custom animated image slider with transitions.", img: "/img-sli-proj.png" },
    { name: "Typing-Speed-Test", title: "Speed Typer", desc: "Interactive tool to test and improve typing speed.", img: "/typing-proj.png" },
    { name: "Text-to-Speech-Converter", title: "Speech Lab", desc: "Modern utility for voice conversion and synthesis.", img: "/text-speech-proj.png" },
    { name: "Netfilx-clone", title: "Netflix Clone", desc: "Visual replica of the famous streaming service UI.", img: "/net-flix.png" }
  ];

  return (
    // Yahan ID add kar di hai
    <section id="projects-section" className={styles.projectSection}>
      <div className={styles.headerArea}>
        <p className={styles.subHeading}>Curated Portfolio</p>
        <h2 className={`${styles.mainTitle} ${styles.portfolioTitle}`}>
          Featured <span className={styles.mainspan}>Masterpieces</span>
        </h2>
      </div>

      <div className={styles.swiperContainer}>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: -20,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={1500}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={{
            nextEl: '.nextBtnCustom',
            prevEl: '.prevBtnCustom',
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className={styles.mySwiper}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div className={styles.card}>
                <div className={styles.imageBox}>
                  <img src={project.img} alt={project.title} loading="lazy" />
                </div>
                <div className={styles.content}>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <a 
                    href={`https://github.com/farhanbaber/${project.name}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.actionBtn}
                  >
                    EXPLORE <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={`prevBtnCustom ${styles.navBtn}`}><FaChevronLeft /></div>
        <div className={`nextBtnCustom ${styles.navBtn}`}><FaChevronRight /></div>
      </div>
    </section>
  );
};

export default ProjectSection;