'use client';

import React from 'react';

import styles from './Hero.module.scss';
import { useTranslation } from 'react-i18next';
import getPosts from '@/api/getPosts';
import { showDate } from '@/utils';
import Link from 'next/link';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const {
    posts: [post]
  } = getPosts({ limit: 1 });
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h3 className={styles.heroSubtitle}>
          {t('postedOn')} <b>{t(post.category)}</b>
        </h3>
        <h1 className={styles.heroTitle}>{post.title}</h1>
        <p className={styles.heroText}>
          By {post.author} | {showDate(post.date, i18n.language)}
        </p>
        <p className={styles.heroText}>{post.text}</p>
        <Link className="button" href={`/${post.id}`}>
          {t('readMore') + ' >'}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
