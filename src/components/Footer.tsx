import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        {/* Column 1 */}
        <div className={styles.footerColumn}>
          <Logo darkBackground className="mb-4 items-start" />
          <p className={styles.footerText} style={{ marginTop: '1.5rem' }}>
            EAGLE ESTATE & BUILDERS provides professional real estate and property solutions in Islamabad and surrounding areas, helping clients buy, sell, invest and build with confidence.
          </p>
        </div>

        {/* Column 2 */}
        <div className={styles.footerColumn}>
          <h3>Quick Links</h3>
          <ul className={styles.footerLinkList}>
            <li><Link href="/" className={styles.footerLink}>Home</Link></li>
            <li><Link href="/properties" className={styles.footerLink}>Properties</Link></li>
            <li><Link href="/projects" className={styles.footerLink}>Projects</Link></li>
            <li><Link href="/services" className={styles.footerLink}>Services</Link></li>
            <li><Link href="/about" className={styles.footerLink}>About</Link></li>
            <li><Link href="/contact" className={styles.footerLink}>Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className={styles.footerColumn}>
          <h3>Areas</h3>
          <ul className={styles.footerLinkList}>
            <li><span className={styles.footerLink}>F-7</span></li>
            <li><span className={styles.footerLink}>Faisal Hills</span></li>
            <li><span className={styles.footerLink}>F.M.C.</span></li>
            <li><span className={styles.footerLink}>B-17 Islamabad</span></li>
            <li><span className={styles.footerLink}>CDA Sectors</span></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className={styles.footerColumn}>
          <h3>Contact</h3>
          <p className={styles.footerText} style={{ color: '#E2B84B', fontWeight: 600, marginBottom: '1rem' }}>
            Muhammad Ibrahim
          </p>
          <div className={styles.contactItem}>
            <Phone size={18} className={styles.contactIcon} />
            <div>
              <a href="tel:+923435903722" className={styles.footerLink}>0343-5903722</a>
              <br />
              <a href="tel:+923379210797" className={styles.footerLink}>0337-9210797</a>
            </div>
          </div>
          <div className={styles.contactItem}>
            <Mail size={18} className={styles.contactIcon} />
            <a href="mailto:eagle.estate.builder@gmail.com" className={styles.footerLink}>eagle.estate.builder@gmail.com</a>
          </div>
          <div className={styles.contactItem}>
            <MapPin size={18} className={styles.contactIcon} />
            <span className={styles.footerText} style={{ marginBottom: 0 }}>
              Plot No. 4, C1 Block<br />
              Main Double Road<br />
              B17 Islamabad, Pakistan
            </span>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottomBar}`}>
        <p>&copy; {new Date().getFullYear()} EAGLE ESTATE & BUILDERS. All rights reserved.</p>
      </div>
    </footer>
  );
}
