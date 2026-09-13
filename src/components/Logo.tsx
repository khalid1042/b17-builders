import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  darkBackground?: boolean;
}

export default function Logo({ className = '', darkBackground = false }: LogoProps) {
  // We use the generated eagle logo image for the brand
  return (
    <div className={`flex items-center justify-center ${className}`} style={{ userSelect: 'none' }}>
      <img
        src="/images/eagle_logo_transparent.png"
        alt="EAGLE ESTATE & BUILDERS"
        style={{
          height: '90px', /* Fit exactly inside 100px header */
          width: 'auto',
          objectFit: 'contain',
          display: 'block'
        }}
      />
    </div>
  );
}
