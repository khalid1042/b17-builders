import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import { Phone, Mail, MapPin } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact Us - EAGLE ESTATE & BUILDERS',
  description: 'Get in touch with EAGLE ESTATE & BUILDERS for property consultation in Islamabad.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      
      <main className="main-content">
        <div className={styles.contactHeader}>
          <div className="container">
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.subtitle}>
              We are here to help you find the right property. Reach out to Muhammad Ibrahim for direct assistance.
            </p>
          </div>
        </div>

        <section className={styles.contactSection}>
          <div className={`container ${styles.contactGrid}`}>
            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Get In Touch</h2>
              
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><Phone size={24} /></div>
                <div>
                  <h3 className={styles.infoTitle}>Phone & WhatsApp</h3>
                  <p className={styles.infoText}>
                    <a href="tel:+923435903722" style={{ color: 'inherit' }}>0343-5903722</a><br />
                    <a href="tel:+923379210797" style={{ color: 'inherit' }}>0337-9210797</a> (WhatsApp)
                  </p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><Mail size={24} /></div>
                <div>
                  <h3 className={styles.infoTitle}>Email</h3>
                  <p className={styles.infoText}>
                    <a href="mailto:eagle.estate.builder@gmail.com" style={{ color: 'inherit' }}>eagle.estate.builder@gmail.com</a>
                  </p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><MapPin size={24} /></div>
                <div>
                  <h3 className={styles.infoTitle}>Office Location</h3>
                  <p className={styles.infoText}>
                    Plot No. 4, C1 Block<br />
                    Main Double Road<br />
                    B17 Islamabad, Pakistan
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.contactForm}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Send an Enquiry</h2>
              <form>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="name">Name</label>
                    <input type="text" id="name" className={styles.input} placeholder="Your Full Name" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" className={styles.input} placeholder="03XXXXXXXXX" required />
                  </div>
                </div>
                
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">Email Address</label>
                    <input type="email" id="email" className={styles.input} placeholder="your@email.com" />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="interest">Interested In</label>
                    <select id="interest" className={styles.select}>
                      <option>Buying a Property</option>
                      <option>Selling a Property</option>
                      <option>Renting a Property</option>
                      <option>Property Investment</option>
                      <option>Construction Services</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                </div>
                
                <div className={styles.formGroup} style={{ marginBottom: '1.5rem' }}>
                  <label className={styles.label} htmlFor="message">Message</label>
                  <textarea id="message" className={styles.textarea} placeholder="How can we help you?" required></textarea>
                </div>
                
                <button type="button" className="btn-primary" style={{ width: '100%' }}>
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <div className={styles.mapSection}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.938830155026!2d72.8130!3d33.8150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQ4JzU0LjAiTiA3MsKwNDgnNDYuOCJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
            className={styles.mapIframe}
            allowFullScreen={false} 
            loading="lazy" 
            title="EAGLE ESTATE & BUILDERS Location"
          ></iframe>
        </div>
      </main>

      <Footer />
      <MobileCTA />
    </>
  );
}
