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
        src="/images/eagle_logo.png"
        alt="EAGLE ESTATE & BUILDERS"
        style={{
          height: '80px', /* Constrain height to fit inside the 90px header */
          width: 'auto',
          objectFit: 'contain',
          display: 'block'
        }}
      />
    </div>
  );
}
