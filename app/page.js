import React from 'react';
import styles from './page.module.css';

export default function Page() {
  return (













    
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>CryptoWave</h1>
        <p>The future of cryptocurrency</p>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.features}>
          <div className={styles.featureCard}>
            <h2>Secure</h2>
            <p>Top-notch security measures to protect your assets.</p>
          </div>
          <div className={styles.featureCard}>
            <h2>Fast Transactions</h2>
            <p>Experience lightning-fast transaction speeds.</p>
          </div>
          <div className={styles.featureCard}>
            <h2>Global</h2>
            <p>Trade and transact with anyone, anywhere in the world.</p>
          </div>
          <div className={styles.featureCard}>
            <h2>Decentralized</h2>
            <p>Take control with a fully decentralized platform.</p>
          </div>
        </section>

        

        <section className={styles.infoBoxes}>
        <div className={styles.box}>
          <h3>Secure Transactions</h3>
          <p>Our platform uses advanced encryption methods to ensure your transactions are safe and secure.</p>
        </div>
        <div className={styles.box}>
          <h3>Real-time Data</h3>
          <p>Stay updated with real-time cryptocurrency prices and trends on our platform.</p>
        </div>
        <div className={styles.box}>
          <h3>User-Friendly Interface</h3>
          <p>With an intuitive design, our platform is easy to navigate even for crypto beginners.</p>
        </div>
      </section>






        <section className={styles.educationalResources}>
        <h2>Educational Resources</h2>
        <p>Explore our curated collection of articles, videos, and guides on cryptocurrencies and blockchain technology.</p>
        <div className={styles.resourcesGrid}>
          <div className={styles.resourceCard}>
            <img src="/public/1.jpeg" alt="Article 1" />
            <h3>Introduction to Cryptocurrencies</h3>
            <p>A beginner's guide to understanding the world of digital currencies.</p>
          </div>
          {/* ... more resource cards ... */}
        </div>
      </section>
         


        <section className={styles.testimonials}>
          <h2>What Our Users Say</h2>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialCardContent}>
              <p>"CryptoWave has transformed the way I trade and manage my cryptocurrencies. The platform is intuitive and secure!"</p>
              <p className={styles.testimonialAuthor}>- Jane Doe, Cryptocurrency Enthusiast</p>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialCardContent}>
              <p>"I'm impressed with the speed and efficiency of transactions on CryptoWave. It's a game-changer!"</p>
              <p className={styles.testimonialAuthor}>- John Smith, Blockchain Developer</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSocial}>
            <a href="#" className={styles.socialIcon}>
              <img src="/facebook-icon.png" alt="Facebook" />
            </a>
            <a href="#" className={styles.socialIcon}>
              <img src="/twitter-icon.png" alt="Twitter" />
            </a>
            <a href="#" className={styles.socialIcon}>
              <img src="/instagram-icon.png" alt="Instagram" />
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
