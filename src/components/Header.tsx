"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import styles from './Header.module.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Areas', path: '/areas' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} className={styles.navLink}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Call Btn */}
        <a href="tel:+923435903722" className={`btn-primary ${styles.callNowBtn}`}>
          <Phone size={18} style={{ marginRight: '8px' }} />
          Call Now
        </a>

        {/* Mobile Menu Toggle */}
        <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Toggle Menu">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.path} 
            className={styles.mobileNavLink}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <a href="tel:+923435903722" className={`btn-primary ${styles.mobileCallBtn}`}>
          <Phone size={18} style={{ marginRight: '8px' }} />
          Call Now
        </a>
      </div>
    </header>
  );
}
