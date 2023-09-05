import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>CryptoWave</h1>
        <p>The future of cryptocurrency</p>
      </header>
      <main className={styles.mainContent}>
        {/* ... (other sections remain unchanged) ... */}
        
        <section className={styles.educationalResources}>
          <h2>Educational Resources</h2>
          <p>Explore our curated collection of articles, videos, and guides on cryptocurrencies and blockchain technology.</p>
          <div className={styles.resourcesGrid}>
            <div className={styles.resourceCard}>
              <Image src="/public/1.jpeg" alt="Article 1" width={500} height={300} />
              <h3>Introduction to Cryptocurrencies</h3>
              <p>A beginner&apos;s guide to understanding the world of digital currencies.</p>
            </div>
            {/* ... more resource cards ... */}
          </div>
        </section>

        <section className={styles.testimonials}>
          <h2>What Our Users Say</h2>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialCardContent}>
              <p>&quot;CryptoWave has transformed the way I trade and manage my cryptocurrencies. The platform is intuitive and secure!&quot;</p>
              <p className={styles.testimonialAuthor}>- Jane Doe, Cryptocurrency Enthusiast</p>
            </div>
          </div>
          {/* ... (other testimonials remain unchanged) ... */}
        </section>
      </main>
      
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSocial}>
            <a href="#" className={styles.socialIcon}>
              <Image src="/facebook-icon.png" alt="Facebook" width={24} height={24} />
            </a>
            <a href="#" className={styles.socialIcon}>
              <Image src="/twitter-icon.png" alt="Twitter" width={24} height={24} />
            </a>
            <a href="#" className={styles.socialIcon}>
              <Image src="/instagram-icon.png" alt="Instagram" width={24} height={24} />
            </a>
          </div>
          <div className={styles.footerLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
