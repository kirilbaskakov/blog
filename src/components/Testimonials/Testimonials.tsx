'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import classNames from 'classnames';
import Image from 'next/image';

import NextIcon from '@/assets/icons/ArrowNext.png';
import PrevIcon from '@/assets/icons/ArrowPrev.png';
import reviews from '@/constants/data/reviews';
import { AnimationTypes } from '@/types/AnimationTypes';

import AuthorInfo from '../AuthorInfo/AuthorInfo';
import styles from './Testimonials.module.scss';

const Testimonials = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const [animationType, setAnimationType] = useState<AnimationTypes>(
    AnimationTypes.ANIMATE_LEFT
  );

  const onNext = () => {
    setIndex(index => (index + 1) % reviews.length);
    setAnimationType(AnimationTypes.ANIMATE_RIGHT);
  };

  const onPrev = () => {
    setIndex(index => (index - 1 + reviews.length) % reviews.length);
    setAnimationType(AnimationTypes.ANIMATE_LEFT);
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
            className={classNames({
              [styles.reviewText]: true,
              [styles.animateLeft]:
                animationType === AnimationTypes.ANIMATE_LEFT,
              [styles.animateRight]:
                animationType === AnimationTypes.ANIMATE_RIGHT
            })}
            key={reviews[index].text}
          >
            {reviews[index].text}
          </p>
          {animationType == AnimationTypes.ANIMATE_LEFT ? (
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
