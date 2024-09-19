import React from 'react';
import styles from './Testimonials.module.scss';
import AuthorInfo from '../AuthorInfo/AuthorInfo';

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
          <AuthorInfo />
          <div className={styles.arrows}>
            <button className={styles.arrow}></button>
            <button className={styles.arrow}></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
