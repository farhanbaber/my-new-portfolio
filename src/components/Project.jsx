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
  // 15 top-tier projects (Tumhare repos se select kiye hain)
  const projects = [
    { name: "Gold-website", title: "Fayaz Jewellers", desc: "Luxury jewelry brand with premium interface.", img: "/fayaz.jpg" },
    { name: "Ecommerce-Website", title: "Global Shop", desc: "Full-stack e-commerce solution with advanced filtering.", img: "/ecommerce.jpg" },
    { name: "My-portfolio", title: "Portfolio", desc: "My professional portfolio showcasing Curated Work.", img: "/portfolio.jpg" },
    { name: "Wedding-Nasheed", title: "WeddingNasheed", desc: "Responsive platform for traditional Islamic Nasheeds.", img: "/nasheed.jpg" },
    { name: "student-portal", title: "SMIT Portal", desc: "Advanced MERN stack management system.", img: "/portal.jpg" },
    { name: "full-stack-app", title: "Full Stack App", desc: "Complete robust application with modern stack.", img: "/app.jpg" },
    { name: "cars-website", title: "Cars Hub", desc: "Dynamic automobile marketplace with smart filtering.", img: "/cars.jpg" },
    { name: "AI-Assitant", title: "Nova AI", desc: "Voice-enabled AI assistant for real-time automation.", img: "/ai.jpg" },
    { name: "meta-Ai-project", title: "Meta Vision", desc: "Next-gen social layout with media processing.", img: "/meta.jpg" },
    { name: "Kbiz.com", title: "Kbiz Corporate", desc: "Corporate solution for business management.", img: "/kbiz.jpg" },
    { name: "Codanix-project", title: "Codanix Solutions", desc: "Premium tech agency service showcase platform.", img: "/codanix.jpg" },
    { name: "Image-slider", title: "Smooth Slider", desc: "Custom animated image slider with transitions.", img: "/slider.jpg" },
    { name: "Typing-Speed-", title: "Speed Typer", desc: "Interactive tool to test and improve typing speed.", img: "/typing.jpg" },
    { name: "Text-to-Speech-Converter", title: "Speech Lab", desc: "Modern utility for voice conversion and synthesis.", img: "/speech.jpg" },
    { name: "Netfilx-clone", title: "Netflix Clone", desc: "Visual replica of the famous streaming service UI.", img: "/netflix.jpg" }
  ];

  return (
    <section className={styles.projectSection}>
 <div className={styles.headerArea}>
  <p className={styles.subHeading}>Curated Portfolio</p>
  {/* Yahan maine "portfolioTitle" ki extra class add ki hai */}
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
            delay: 3500, // Slowed down for luxury feel
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // HOVER PAR RUK JAYEGA
          }}
          speed={1500} // Extra smooth transition speed
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
                  <a href={`https://github.com/farhanbaber/${project.name}`} target="_blank" rel="noreferrer" className={styles.actionBtn}>
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