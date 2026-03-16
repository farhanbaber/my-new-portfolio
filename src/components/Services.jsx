import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
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
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

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
    { plan: "Basic", price: "$99", features: ["Single Page App", "Responsive Design", "Basic SEO", "3 Days Support"] },
    { plan: "Professional", price: "$249", features: ["Full Stack App", "Admin Dashboard", "API Integration", "30 Days Support"] },
    { plan: "Enterprise", price: "$499", features: ["Custom Software", "Cloud Deployment", "Security Suite", "Lifetime Support"] }
  ];

  const testimonials = [
    { name: "Sarah Khan", role: "Direct Client", text: "Farhan transformed our vision into a high-end reality. The UI is beyond expectations!", img: "/client1.jpg" },
    { name: "Sir Ahmed", role: "Mentor / Instructor", text: "Outstanding technical grip on the MERN stack. His architectural logic is professional.", img: "/sir.jpg" },
    { name: "Tech Solutions Team", role: "Collaborator", text: "A great team player with amazing software development skills. Highly recommended!", img: "/team.jpg" }
  ];

  return (
    <>
      {/* 1. EXISTING SERVICES SECTION */}
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
              <button className={styles.exploreBtn}>
                <span className={styles.btnText}>INITIATE PROJECT</span>
                <span className={styles.btnOverlay}></span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NEW PRICING SECTION (Light Grey Cards, White BG) */}
      <section className={styles.pricingSection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.badge}>Investment Plans</span>
            <h2 className={styles.title}>Affordable <span>Value</span></h2>
          </div>

          <div className={styles.pricingGrid}>
            {pricingData.map((item, index) => (
              <div key={index} className={styles.priceCard}>
                <h4 className={styles.planName}>{item.plan}</h4>
                <div className={styles.priceTag}>{item.price}<span>/project</span></div>
                <ul className={styles.featureList}>
                  {item.features.map((f, i) => (
                    <li key={i}><HiOutlineCheckCircle /> {f}</li>
                  ))}
                </ul>
                <button className={styles.planBtn}>GET STARTED</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NEW TESTIMONIALS SECTION (2 on Laptop, 1 on Mobile) */}
      <section className={styles.testiSection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.badge}>Social Proof</span>
            <h2 className={styles.title}>Client <span>Testimonials</span></h2>
          </div>

          <div className={styles.testiSwiperWrapper}>
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                1024: { slidesPerView: 2 }, // Laptop par 2 cards
              }}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
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
                      <img src={t.img} alt={t.name} className={styles.userImg} />
                      <div>
                        <h5>{t.name}</h5>
                        <span>{t.role}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom Navigation & Bullets */}
            <div className={styles.swiperControls}>
              <div className="testiPrev"><FaChevronLeft /></div>
              <div className="custom-dots"></div>
              <div className="testiNext"><FaChevronRight /></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;