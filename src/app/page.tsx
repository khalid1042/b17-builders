import React from 'react';
import Link from 'next/link';
import { Phone, Building2, Home, Search, ShieldCheck, Map, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import PropertySearch from '@/components/PropertySearch';
import PropertyCard from '@/components/PropertyCard';
import styles from './page.module.css';

// Using JSON-LD for local business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "EAGLE ESTATE & BUILDERS",
  "image": "/logo.svg",
  "description": "Professional real estate and property solutions in Islamabad and surrounding areas.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot No. 4, C1 Block, Main Double Road, B17",
    "addressLocality": "Islamabad",
    "addressCountry": "PK"
  },
  "telephone": ["+923435903722", "+923379210797"],
  "email": "eagle.estate.builder@gmail.com"
};

const DUMMY_PROPERTIES = [
  {
    id: "prop-1",
    title: "5 Marla Modern House",
    location: "B-17 Islamabad",
    price: "PKR 2.35 Crore",
    type: "House",
    size: "5 Marla",
    beds: 4,
    baths: 4,
    status: "For Sale" as const,
    image: "/images/images (1).jfif"
  },
  {
    id: "prop-2",
    title: "10 Marla Luxury Villa",
    location: "Faisal Hills",
    price: "PKR 4.50 Crore",
    type: "House",
    size: "10 Marla",
    beds: 5,
    baths: 6,
    status: "For Sale" as const,
    image: "/images/images (2).jfif"
  },
  {
    id: "prop-3",
    title: "Commercial Shop",
    location: "F-7 Markaz",
    price: "PKR 8.00 Crore",
    type: "Shop",
    size: "450 Sq Ft",
    status: "For Sale" as const,
    image: "/images/images (4).jfif"
  }
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      <main className="main-content">
        {/* HERO SECTION */}
        <section className={styles.hero}>
          {/* Pointing to the new B17 image. User needs to save it to public/images/b17-new.jpg */}
          <img src="/images/b17-new.jpg" alt="B17 F Block Markaz Islamabad New" className={styles.heroImage} loading="eager" />
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Find the Right Property.<br />Build Your Future.</h1>
            <p className={styles.heroSubtitle}>
              EAGLE ESTATE & BUILDERS provides professional real estate and property solutions in Islamabad and surrounding areas, helping clients buy, sell, invest and build with confidence.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/properties" className="btn-gold" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
                View Properties
              </Link>
              <a href="tel:+923435903722" className="btn-secondary" style={{ borderColor: 'var(--color-white)', color: 'var(--color-white)', fontSize: '1.125rem', padding: '1rem 2rem' }}>
                Contact Muhammad Ibrahim
              </a>
            </div>
          </div>
        </section>

        {/* PROPERTY SEARCH */}
        <div className="container">
          <PropertySearch />
        </div>

        {/* FEATURED PROPERTIES */}
        <section className={`${styles.section} ${styles.sectionLight}`}>
          <div className="container">
            <h2 className="section-title">Featured Properties</h2>
            <div className={styles.propertiesGrid}>
              {DUMMY_PROPERTIES.map(prop => (
                <PropertyCard key={prop.id} {...prop} />
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link href="/properties" className="btn-primary">
                View All Properties
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className={styles.section}>
          <div className="container">
            <h2 className="section-title">Our Services</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}><Home size={32} /></div>
                <h3 className={styles.serviceTitle}>Property Buying</h3>
                <p className={styles.serviceText}>Help clients identify suitable properties according to their budget and requirements.</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}><Building2 size={32} /></div>
                <h3 className={styles.serviceTitle}>Property Selling</h3>
                <p className={styles.serviceText}>Professional assistance for owners who want to sell their property at the best market value.</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}><Search size={32} /></div>
                <h3 className={styles.serviceTitle}>Property Consultation</h3>
                <p className={styles.serviceText}>Property-related consultation based on location, budget and purpose in Islamabad.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE EAGLE */}
        <section className={`${styles.section} ${styles.sectionLight}`}>
          <div className="container">
            <div className={styles.aboutSection}>
              <div>
                <img src="/images/images (5).jfif" alt="Eagle Estate Office" className={styles.aboutImage} />
              </div>
              <div className={styles.aboutContent}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Why Choose EAGLE ESTATE & BUILDERS?</h2>
                <ul className={styles.aboutList}>
                  <li>
                    <CheckCircle2 size={24} className={styles.aboutListIcon} />
                    <span><strong>Local Property Knowledge:</strong> Strong understanding of Islamabad and surrounding property markets.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={24} className={styles.aboutListIcon} />
                    <span><strong>Professional Guidance:</strong> Clear assistance throughout the property buying, selling or building process.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={24} className={styles.aboutListIcon} />
                    <span><strong>Client-Focused Service:</strong> Property recommendations tailored exactly to client requirements.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={24} className={styles.aboutListIcon} />
                    <span><strong>Investment Awareness:</strong> Help clients evaluate property opportunities carefully for maximum ROI.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* AREAS WE DEAL IN */}
        <section className={styles.section}>
          <div className="container">
            <h2 className="section-title">Areas We Deal In</h2>
            <div className={styles.areasGrid}>
              <div className={styles.areaCard}>
                <img src="/images/images (6).jfif" alt="F-7 Islamabad" className={styles.areaImage} loading="lazy" />
                <div className={styles.areaOverlay}></div>
                <div>
                  <h3 className={styles.areaTitle}>F-7</h3>
                  <div className={styles.areaSubtitle}>Premium Islamabad</div>
                </div>
              </div>
              <div className={styles.areaCard}>
                <img src="/images/images (7).jfif" alt="Faisal Hills" className={styles.areaImage} loading="lazy" />
                <div className={styles.areaOverlay}></div>
                <div>
                  <h3 className={styles.areaTitle}>Faisal Hills</h3>
                  <div className={styles.areaSubtitle}>Residential & Investment</div>
                </div>
              </div>
              <div className={styles.areaCard}>
                <img src="/images/images (8).jfif" alt="B-17 Islamabad" className={styles.areaImage} loading="lazy" />
                <div className={styles.areaOverlay}></div>
                <div>
                  <h3 className={styles.areaTitle}>B-17 Islamabad</h3>
                  <div className={styles.areaSubtitle}>Prime Location</div>
                </div>
              </div>
              <div className={styles.areaCard}>
                <img src="/images/images.jfif" alt="CDA Sectors" className={styles.areaImage} loading="lazy" />
                <div className={styles.areaOverlay}></div>
                <div>
                  <h3 className={styles.areaTitle}>CDA Sectors</h3>
                  <div className={styles.areaSubtitle}>Verified Properties</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT BANNER */}
        <section className={styles.sectionLight} style={{ paddingBottom: '5rem' }}>
          <div className="container">
            <div className={styles.contactBanner}>
              <h2>Looking to Buy, Sell or Invest?</h2>
              <p>Get in touch with Muhammad Ibrahim for professional property consultation.</p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="tel:+923435903722" className="btn-gold">
                  <Phone size={18} style={{ marginRight: '8px' }} />
                  0343-5903722
                </a>
                <a href="tel:+923379210797" className="btn-secondary" style={{ borderColor: 'var(--color-white)', color: 'var(--color-white)' }}>
                  <Phone size={18} style={{ marginRight: '8px' }} />
                  0337-9210797
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <MobileCTA />
    </>
  );
}
