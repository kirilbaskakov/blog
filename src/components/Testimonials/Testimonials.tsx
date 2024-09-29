'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Image from 'next/image';

import NextIcon from '@/assets/ArrowNext.png';
import PrevIcon from '@/assets/ArrowPrev.png';
import reviews from '@/constants/reviews';

import AuthorInfo from '../AuthorInfo/AuthorInfo';
import styles from './Testimonials.module.scss';

const Testimonials = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [animationType, setAnimationType] = useState<
    'animateLeft' | 'animateRight'
  >('animateLeft');

  const onNext = () => {
    setIndex(index => (index + 1) % reviews.length);
    setAnimationType('animateRight');
  };

  const onPrev = () => {
    setIndex(index => (index - 1 + reviews.length) % reviews.length);
    setAnimationType('animateLeft');
  };

  return (
    <div className={styles.testimonials}>
      <div>
        <p className="cap1">{t('testimonials')}</p>
        <h2 className={styles.title}>{t('testimonialsTitle')}</h2>
        <p className={styles.text + ' body1 secondary'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
      <div className={styles.separator} />
      <div className={styles.carousel}>
        <div style={{ position: 'relative' }}>
          <p
            className={styles.reviewText + ' ' + styles[animationType]}
            key={reviews[index].text}
          >
            {reviews[index].text}
          </p>
          {animationType == 'animateLeft' ? (
            <p
              className={styles.reviewText + ' ' + styles.animateToRight}
              key={reviews[(index + 1) % reviews.length].text}
            >
              {reviews[(index + 1) % reviews.length].text}
            </p>
          ) : (
            <p
              className={styles.reviewText + ' ' + styles.animateToLeft}
              key={reviews[(index - 1 + reviews.length) % reviews.length].text}
            >
              {reviews[(index - 1 + reviews.length) % reviews.length].text}
            </p>
          )}
        </div>

        <div className={styles.reviewInfo}>
          <AuthorInfo
            key={reviews[index].authorId}
            authorId={reviews[index].authorId}
          />
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
