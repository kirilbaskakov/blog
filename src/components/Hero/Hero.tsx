'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

import Link from 'next/link';

import getPosts from '@/api/getPosts';
import { showDate } from '@/utils';

import styles from './Hero.module.scss';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const {
    posts: [post]
  } = getPosts({ limit: 1 });
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <p className="cap1">
          {t('postedOn')} <b>{t(post.category)}</b>
        </p>
        <h1 className={styles.heroTitle}>{post.title}</h1>
        <p className="body1">
          By {post.author} | {showDate(post.date, i18n.language)}
        </p>
        <p className="body1">{post.text}</p>
        <Link className="button" href={`/${post.id}`}>
          {t('readMore') + ' >'}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
