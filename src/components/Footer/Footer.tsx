import Image from 'next/image';
import React from 'react';
import SocialWrapper from '@/assets/Social wrapper.svg';
import styles from './Footer.module.scss';
import Nav from '../Nav/Nav';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Nav />
      <div className={styles.subscribeForm}>
        <h2 className={styles.subscribeTitle}>
          Subscribe to our news letter to get latest updates and news
        </h2>
        <input
          className={styles.subscribeInput}
          placeholder="Enter your email"
        />
        <button className="button">Subscribe</button>
      </div>
      <div className={styles.contacts}>
        <div className={styles.address}>
          <p>Finstreet 118 2561 Fintown </p>
          <p>Hello@finsweet.com 020 7993 2905</p>
        </div>
        <Image src={SocialWrapper} alt="Social icons" />
      </div>
    </footer>
  );
};

export default Footer;
