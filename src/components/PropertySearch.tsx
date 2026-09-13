"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import styles from './PropertySearch.module.css';

export default function PropertySearch() {
  const [activeTab, setActiveTab] = useState<'Buy' | 'Rent' | 'Sell'>('Buy');

  return (
    <div className={styles.searchSection}>
      <div className={styles.searchTabs}>
        {['Buy', 'Rent', 'Sell'].map((tab) => (
          <button 
            key={tab}
            className={`${styles.searchTab} ${activeTab === tab ? styles.active : ''}`}
            onClick={() => setActiveTab(tab as any)}
          >
            {tab}
          </button>
        ))}
      </div>

      <form className={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Location</label>
          <select className={styles.select}>
            <option>All Locations</option>
            <option>Islamabad</option>
            <option>B-17</option>
            <option>Faisal Hills</option>
            <option>F-7</option>
            <option>CDA Sectors</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Property Type</label>
          <select className={styles.select}>
            <option>All Types</option>
            <option>House</option>
            <option>Plot</option>
            <option>Apartment</option>
            <option>Commercial</option>
            <option>Farmhouse</option>
            <option>Office</option>
            <option>Shop</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Min Budget (PKR)</label>
          <select className={styles.select}>
            <option>Any</option>
            <option>1 Crore</option>
            <option>2 Crore</option>
            <option>5 Crore</option>
            <option>10 Crore</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Max Budget (PKR)</label>
          <select className={styles.select}>
            <option>Any</option>
            <option>5 Crore</option>
            <option>10 Crore</option>
            <option>20 Crore</option>
            <option>50 Crore+</option>
          </select>
        </div>

        <button type="submit" className={`btn-primary ${styles.btnSearch}`}>
          <Search size={18} style={{ marginRight: '8px' }} />
          Search
        </button>
      </form>
    </div>
  );
}
