import React from 'react';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import styles from './MobileCTA.module.css';

export default function MobileCTA() {
  return (
    <div className={styles.mobileCta}>
      <a href="tel:+923435903722" className={styles.ctaBtn}>
        <Phone size={20} className={styles.icon} />
        Call
      </a>
      <a 
        href="https://wa.me/923379210797" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${styles.ctaBtn} ${styles.whatsapp}`}
      >
        <MessageCircle size={20} className={styles.icon} />
        WhatsApp
      </a>
      <a href="mailto:eagle.estate.builder@gmail.com" className={`${styles.ctaBtn} ${styles.primary}`}>
        <Mail size={20} className={styles.icon} />
        Enquire
      </a>
    </div>
  );
}
