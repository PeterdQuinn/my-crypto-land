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
      </main>
      
<footer className={styles.footer}>
  <div className={styles.footerContent}>
    <p>&copy; 2023 CryptoWave. All rights reserved.</p>
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
