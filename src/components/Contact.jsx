import React, { useState } from 'react';
import styles from './Contact.module.css';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaLinkedinIn, FaBehance, FaInstagram, FaArrowRight, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    
    // Yahan apni Web3Forms Key zaroor dalna jani
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Message Sent Successfully! ✅");
      event.target.reset();
    } else {
      setResult("Error! Please try again.");
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        
        <div className={styles.topHeader}>
          <span className={styles.badge}>Available for Projects</span>
          <h2 className={styles.mainHeading}>Get In <span>Touch</span></h2>
        </div>

        <div className={styles.mainBox}>
          {/* LEFT SIDE: INFO */}
          <div className={styles.infoSide}>
            <h2 className={styles.title}>
              Let’s talk <br /> on something <span className={styles.italic}>great</span> together
            </h2>
            
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <HiOutlineMail className={styles.icon} />
                <a href="mailto:farhanbaber@gmail.com">farhanbaber@gmail.com</a>
              </div>
              <div className={styles.contactItem}>
                <HiOutlinePhone className={styles.icon} />
                <a href="tel:+923001234567">+92 300 1234567</a>
              </div>
              <div className={styles.contactItem}>
                <HiOutlineLocationMarker className={styles.icon} />
                <span>Peshawar, Pakistan</span>
              </div>

              <div className={styles.inlineSocials}>
                <a href="https://wa.me/923001234567" target="_blank" className={styles.wa}><FaWhatsapp /></a>
                <a href="#" target="_blank"><FaTwitter /></a>
                <a href="#" target="_blank"><FaInstagram /></a>
                <a href="#" target="_blank"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: FORM */}
          <div className={styles.formSide}>
            <form onSubmit={onSubmit} className={styles.form}>
              <p className={styles.formLabel}>I'm interested in:</p>
              <div className={styles.interestGrid}>
                {["UX/UI", "Web Design", "MERN Stack", "Other"].map((item, i) => (
                  <label key={i} className={styles.chip}>
                    <input type="radio" name="interest" value={item} required />
                    <span>{item}</span>
                  </label>
                ))}
              </div>

              <div className={styles.inputWrapper}>
                <input type="text" name="name" className={styles.input} placeholder="Your name" required />
                <input type="email" name="email" className={styles.input} placeholder="Your email" required />
                <textarea name="message" className={styles.input} rows="3" placeholder="Tell me about your project" required></textarea>
              </div>

              <button type="submit" className={styles.animatedBtn}>
                <span className={styles.btnText}>SEND MESSAGE</span>
                <span className={styles.btnIcon}><FaArrowRight /></span>
                <div className={styles.btnBackground}></div>
              </button>
              
              {result && <p className={styles.statusText}>{result}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;