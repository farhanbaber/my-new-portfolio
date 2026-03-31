import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './Services.module.css';
import { 
  HiOutlineGlobe, 
  HiOutlineDeviceMobile, 
  HiOutlinePencil, 
  HiOutlineLightBulb, 
  HiOutlineCode, 
  HiOutlineDatabase,
  HiOutlineCheckCircle
} from "react-icons/hi";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaLinkedin } from "react-icons/fa";

const Services = () => {
  const servicesData = [
    { title: "Full Stack Web/Dev", desc: "Building scalable, high-performance web applications using MERN stack.", icon: <HiOutlineGlobe />, },
    { title: "App Development", desc: "Creating intuitive and lightning-fast mobile experiences for global users.", icon: <HiOutlineDeviceMobile />, },
    { title: "UI/UX Designing", desc: "Crafting aesthetic and functional interfaces with modern luxury vibes.", icon: <HiOutlinePencil />, },
    { title: "IT Consulting", desc: "Expert guidance on digital transformation and technical architecture.", icon: <HiOutlineLightBulb />, },
    { title: "Software Dev", desc: "Custom enterprise-level software solutions designed for reliability.", icon: <HiOutlineCode />, },
    { title: "Database Dev", desc: "Architecting secure, optimized, and scalable database schemas.", icon: <HiOutlineDatabase />, }
  ];

  const pricingData = [
    { plan: "Essential", price: "$99", features: ["Single Page Design", "Responsive Layout", "Basic SEO", "3 Days Support"] },
    { plan: "Premium", price: "$249", features: ["Full Stack Logic", "Admin Dashboard", "API Integration", "30 Days Support"] },
    { plan: "Elite", price: "$499", features: ["Custom Enterprise App", "Cloud Deployment", "Advanced Security", "Lifetime Support"] }
  ];

  // Yahan har client ka apna unique LinkedIn link add karein
  const testimonials = [
    { 
      name: "Tatheer Husssain", 
      role: "Ceo Tech4Edge", 
      text: "Farhan's expertise in the MERN stack is exceptional. He delivered a complex dashboard ahead of schedule with flawless UI.", 
      img: "/cl-2.jpeg",
      linkedin: "https://www.linkedin.com/in/tatheer-hussain?utm_source=share_via&utm_content=profile&utm_medium=member_ios" 
    },
    { 
      name: "Ramsha Baber", 
      role: "Doctor of Physiotherapy", 
      text : "Farhan delivered a premium digital identity for my practice. The clean, professional interface built instant trust with my patients.", 
      img: "/cl-1.jpeg",
      linkedin: "https://www.linkedin.com/in/dr-ramsha-fayaz-331613363?utm_source=share_via&utm_content=profile&utm_medium=member_ios" 
    },
    { 
      name: "Fayaz Baber", 
      role: "Gold Smith", 
      text: "Farhan transformed our brand into a digital masterpiece. The luxury gold-themed design and smooth animations perfectly reflect the elegance of our jewelry.", 
      img: "/cl-3.jpeg",
      linkedin: "https://www.linkedin.com/in/fayaz-baber" 
    }
  ];

  return (
    <div className={styles.mainWrapper}>
      {/* --- SECTION 1: SERVICES --- */}
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
                <div className={styles.cardBgIcon}>{service.icon}</div>
              </div>
            ))}
          </div>
          
          <div className={styles.trustFooter}>
            <p>Pushing the boundaries of digital excellence.</p>
            <div className={styles.btnWrapper}>
              <a 
                href="https://github.com/farhanbaber" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ textDecoration: 'none' }}
              >
                <button className={styles.exploreBtn}>
                  <span className={styles.btnText}>INITIATE PROJECT</span>
                  <span className={styles.btnOverlay}></span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: PRICING --- */}
      <section className={styles.pricingSection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.badge}>Pricing Models</span>
            <h2 className={styles.title}>Balanced <span>Value</span></h2>
          </div>

          <div className={styles.pricingGrid}>
            {pricingData.map((item, index) => (
              <div key={index} className={styles.priceCard}>
                <h4 className={styles.planName}>{item.plan}</h4>
                <div className={styles.priceTag}>{item.price}<span>/proj</span></div>
                <ul className={styles.featureList}>
                  {item.features.map((f, i) => (
                    <li key={i}><HiOutlineCheckCircle className={styles.check} /> {f}</li>
                  ))}
                </ul>
                <button className={styles.planBtn}>CHOOSE PLAN</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: TESTIMONIALS --- */}
      <section className={styles.testiSection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.badge}>Client Feedback</span>
            <h2 className={styles.title}>User <span>Stories</span></h2>
          </div>

          <div className={styles.testiSwiperWrapper}>
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                1024: { slidesPerView: 2, spaceBetween: 40 },
              }}
              loop={true}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              speed={1000}
              pagination={{ clickable: true, el: '.custom-dots' }}
              navigation={{ nextEl: '.testiNext', prevEl: '.testiPrev' }}
              className={styles.testiSwiper}
            >
              {testimonials.map((t, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.testiCard}>
                    <FaQuoteLeft className={styles.quoteIcon} />
                    <p className={styles.testiText}>{t.text}</p>
                    <div className={styles.testiUser}>
                      {/* Image + LinkedIn Icon Container */}
                      <div className={styles.clientImgBox}>
                        <img src={t.img} alt={t.name} className={styles.userImg} />
                        <a 
                          href={t.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={styles.linkedinLink}
                        >
                          <FaLinkedin className={styles.linkedinIcon} />
                        </a>
                      </div>
                      <div className={styles.userInfo}>
                        <h5>{t.name}</h5>
                        <span>{t.role}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            <div className={styles.swiperControls}>
              <div className={`testiPrev ${styles.navBtn}`}><FaChevronLeft /></div>
              <div className="custom-dots"></div>
              <div className={`testiNext ${styles.navBtn}`}><FaChevronRight /></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;