import React, { useState } from 'react';
import styles from './Contact.module.css';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaLinkedinIn, FaInstagram, FaArrowRight, FaWhatsapp, FaTwitter, FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "ab2d3585-4afb-4cf5-a662-af54611a9147");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        event.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className={styles.contactSection}>
      {/* --- AMAZING SUCCESS OVERLAY --- */}
      {status === "success" && (
        <div className={styles.overlay}>
          <div className={styles.successCard}>
            <div className={styles.successIcon}><FaCheckCircle /></div>
            <h2>MESSAGE SENT!</h2>
            <p>Farhan Baber will get back to you shortly.</p>
            <button onClick={() => setStatus("idle")} className={styles.closeBtn}>CONTINUE</button>
          </div>
        </div>
      )}

      {/* --- SENDING LOADER --- */}
      {status === "sending" && (
        <div className={styles.overlay}>
          <div className={styles.loader}></div>
        </div>
      )}

      <div className={styles.container}>
        <div className={styles.topHeader}>
          <span className={styles.badge}>Available for Projects</span>
          <h2 className={styles.mainHeading}>Get In <span>Touch</span></h2>
        </div>

        <div className={styles.mainBox}>
          {/* Info Side stays same */}
          <div className={styles.infoSide}>
            <h2 className={styles.title}>Let’s talk <br /> on something <span className={styles.italic}>great</span></h2>
            <div className={styles.contactList}>
               <div className={styles.contactItem}><HiOutlineMail className={styles.icon} /> <a href="mailto:farhanbaber965@gmail.com">farhanbaber965@gmail.com</a></div>
               {/* Baqi contact items yahan rahenge */}
            </div>
          </div>

          <div className={styles.formSide}>
            <form onSubmit={onSubmit} className={styles.form}>
              <input type="hidden" name="subject" value="New Portfolio Inquiry" />
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;