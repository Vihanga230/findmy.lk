import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
import { toOptimizedImage } from '../helpers/general';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.png'}
          title={`FindMy.lk \n Your Search Ends Here! `}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#PRIVACY POLICY'}>
          PRIVACY POLICY
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#TERMS AND CONDITIONS'}>
          VALUES
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#VALUES'}
          >
            TERMS AND CONDITIONS
          </ThemeLink>
        </div>

       <Container size={'large'} spacing={'min'}>
  <div className={styles.detailContainer} ref={historyRef}>
    <h3 style={{ marginBottom: "30px" }}>Privacy Policy</h3>
    <p>
      <strong>FindMy.lk</strong> values your privacy. This policy outlines how we collect, use, and protect your data when you use our website or purchase our Apple Find My-compatible trackers.
    </p>

    <h3>1. Information We Collect</h3>
    <p>
      - Personal details (name, email, address, payment info).<br />
      - Device and usage data (IP address, browser type, site interactions).<br />
      - Order details (purchase history, transaction records).
    </p>

    <h3>2. How We Use Your Data</h3>
    <p>
      - Process orders and payments.<br />
      - Provide customer support and updates.<br />
      - Improve our website and services.<br />
      - Prevent fraud and ensure security.
    </p>

    <h3>3. Sharing & Security</h3>
    <p>
      We do not sell your data. Limited sharing occurs with service providers (payments, shipping). We use industry-standard security measures to protect your information.
    </p>

    <h3>4. Your Rights</h3>
    <p>
      - Access, update, or delete your data.<br />
      - Opt-out of marketing emails.<br />
      - Manage cookies via browser settings.
    </p>

    <h3>5. Contact Us</h3>
    <p>
      For questions, contact us at:<br />
      <strong>Email:</strong> [Your Contact Email]
    </p>

    <p>By using our website, you agree to this policy.</p>
  </div>
</Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={toOptimizedImage('/about1.png')}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
          <h3>Our Values</h3>
<div ref={valuesRef}>
  
  
  <h4>Our Values</h4>
  <p>
    <strong>Trust</strong> – We give you Apple Find My-compatible trackers with reliability in mind, ensuring you never lose what matters. Stay connected with secure, precise tracking every time.
  </p>
  <p>
    <strong>Simplicity</strong> – Effortless setup and seamless integration with Apple Find My make tracking easy. No subscriptions, no hassle—just instant location updates when you need them.
  </p>
  <p>
    <strong>Efficiency</strong> – Find lost items in seconds with real-time tracking powered by Apple’s Find My network. Our smart trackers work fast, so you never waste time searching.
  </p>
  <p>
    <strong>Accessibility</strong> – Smart tracking should be for everyone—that’s why our Find My-compatible devices are user-friendly and affordable. Locate keys, bags, and more with just a tap.
  </p>

  

  <img alt={'founder'} src={toOptimizedImage('/about2.png')}></img>
</div>
<h3>Our Vision</h3>
<p>
  To be Sri Lanka’s most trusted online discovery platform.
</p>
<h3>Our Mission  </h3>
<p>
Our mission is to provide a seamless, reliable, and user-friendly platform that helps people in Sri Lanka easily track and find their valuables. With our Apple Find My-compatible trackers, you can locate your essentials, whether it's keys, bags, or even your pet—effortlessly and with complete peace of mind. </p>

      <h3>Terms and Conditions </h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
            

<p>
  Welcome to <strong>FindMy.lk</strong>. By using our website and purchasing our Apple Find My-compatible trackers, you agree to the following terms and conditions.
</p>



<h4>1. Orders & Payments</h4>
<p>
  - All purchases must be paid in full at the time of order.<br />
  - We accept major credit/debit cards and digital payment methods.
</p>

<h4>2. Returns & Refunds</h4>
<p>
  - <strong>Returns:</strong> You may return items within 14 days of delivery in their original condition and packaging.<br />
  - <strong>Refunds:</strong> Refunds are processed only within 24 hours of purchase. After this period, returns will be eligible for store credit.<br />
  - Initial return shipping fees are the responsibility of the customer. However, if the product is tested as defective after our tests, we will refund the return shipping fee.
</p>

<h4>3. Shipping & Delivery</h4>
<p>
  - Orders are processed within 1-3 business days.<br />
  - Delivery times vary based on location and chosen shipping method.
</p>

<h4>4. Contact Us</h4>
<p>
  For any inquiries regarding these terms, contact us at:<br />
  <strong>Email:</strong> [Your Contact Email]
</p>

<p>By making a purchase, you agree to these Terms and Conditions.</p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={toOptimizedImage('/about3.png')}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
