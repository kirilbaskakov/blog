import React from 'react';
import styles from './Testimonials.module.scss';
import AuthorInfo from '../AuthorInfo/AuthorInfo';
import reviews from '@/constants/reviews';

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
        <p className={styles.reviewText}>{reviews[0].text}</p>
        <div className={styles.reviewInfo}>
          <AuthorInfo authorId={reviews[0].authorId} />
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
