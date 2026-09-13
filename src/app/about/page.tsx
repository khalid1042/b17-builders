import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <Header />
      <main className="main-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--color-primary-dark)' }}>Coming Soon</h1>
        <p style={{ fontSize: '1.25rem', color: '#525252', marginBottom: '2rem', maxWidth: '600px' }}>
          We are currently updating this page with the latest information about EAGLE ESTATE & BUILDERS. Please check back soon.
        </p>
        <Link href="/" className="btn-primary">
          Return to Home
        </Link>
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
