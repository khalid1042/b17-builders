import React from 'react';
import Link from 'next/link';
import { MapPin, BedDouble, Bath, Maximize, MessageCircle } from 'lucide-react';
import styles from './PropertyCard.module.css';

interface PropertyProps {
  id: string;
  title: string;
  location: string;
  price: string;
  type: string;
  size: string;
  beds?: number;
  baths?: number;
  image: string;
  status: 'For Sale' | 'For Rent';
}

export default function PropertyCard({
  id,
  title,
  location,
  price,
  type,
  size,
  beds,
  baths,
  image,
  status
}: PropertyProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.badge}>{status}</div>
        {/* Using standard img for simplicity here, but Next/Image is better for prod */}
        <img src={image} alt={title} className={styles.image} loading="lazy" />
      </div>
      
      <div className={styles.content}>
        <div className={styles.price}>{price}</div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.location}>
          <MapPin size={16} className={styles.locationIcon} />
          {location}
        </div>
        
        <div className={styles.features}>
          {beds && (
            <div className={styles.feature}>
              <BedDouble size={16} className={styles.featureIcon} />
              {beds} Beds
            </div>
          )}
          {baths && (
            <div className={styles.feature}>
              <Bath size={16} className={styles.featureIcon} />
              {baths} Baths
            </div>
          )}
          <div className={styles.feature}>
            <Maximize size={16} className={styles.featureIcon} />
            {size}
          </div>
        </div>
        
        <div className={styles.actions}>
          <Link href={`/properties/${id}`} className={styles.btnDetails}>
            View Details
          </Link>
          <a 
            href={`https://wa.me/923379210797?text=I'm interested in property ${id} - ${title}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnWhatsapp}
            aria-label="Contact on WhatsApp"
          >
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
