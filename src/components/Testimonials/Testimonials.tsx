import React from 'react';
import styles from './Testimonials.module.scss';
import ProfileIcon from '@/assets/Profile picture.png';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <div>
        <h4 className={styles.subtitle}>TESTIMONIALS</h4>
        <h3 className={styles.title}>What people say about our blog</h3>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
      <div className={styles.separator} />
      <div>
        <p className={styles.reviewText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className={styles.reviewInfo}>
          <div className={styles.profile}>
            <Image src={ProfileIcon} alt="Profile icon" />
            <div>
              <h4 className={styles.profileTitle}>Jonathan Vallem</h4>
              <p className={styles.profileSubtitle}>New york, USA</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
