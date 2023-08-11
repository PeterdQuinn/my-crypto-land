import Image from 'next/image';
import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <div className={styles.hero}>
      <h1>Welcome to CryptoNest</h1>
      <p>Your ultimate destination for crypto insights and tools.</p>
      <button className={styles.cta}>Get Started</button>
    </div>
  );
}

function FeaturesSection() {
  return (
    <div className={styles.features}>
      <div className={styles.feature}>
        <h2>Crypto Tracking</h2>
        <p>Track your favorite cryptocurrencies in real-time.</p>
      </div>
      <div className={styles.feature}>
        <h2>Insights</h2>
        <p>Get the latest market insights and trends.</p>
      </div>
      <div className={styles.feature}>
        <h2>Trading Tools</h2>
        <p>Access advanced tools for crypto trading.</p>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <div className={styles.testimonials}>
      <div className={styles.testimonial}>
        <p>"CryptoNest has revolutionized the way I view the crypto market."</p>
        <span>- Alex Smith</span>
      </div>
      <div className={styles.testimonial}>
        <p>"The insights provided here are unmatched!"</p>
        <span>- Jamie Doe</span>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
      <div className={styles.socials}>
        {/* Add social media icons and links here */}
      </div>
    </div>
  );
}
