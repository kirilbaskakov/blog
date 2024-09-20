'use client';

import React, { useState } from 'react';
import styles from './Testimonials.module.scss';
import AuthorInfo from '../AuthorInfo/AuthorInfo';
import reviews from '@/constants/reviews';
import PrevIcon from '@/assets/ArrowPrev.png';
import NextIcon from '@/assets/ArrowNext.png';
import Image from 'next/image';

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const onNext = () => setIndex(index => (index + 1) % reviews.length);

  const onPrev = () =>
    setIndex(index => (index - 1 + reviews.length) % reviews.length);

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
        <p className={styles.reviewText}>{reviews[index].text}</p>
        <div className={styles.reviewInfo}>
          <AuthorInfo authorId={reviews[index].authorId} />
          <div className={styles.arrows}>
            <button className={styles.arrowPrev} onClick={onPrev}>
              <Image src={PrevIcon} alt="Left arrow" />
            </button>
            <button className={styles.arrowNext} onClick={onNext}>
              <Image src={NextIcon} alt="Right arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
