'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

import Image from 'next/image';
import Link from 'next/link';

import SpecialPostImage from '@/assets/home/SpeciaPost.webp';
import { links } from '@/constants/routes/links';

import styles from './SpecialPost.module.scss';

const SpecialPost = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={SpecialPostImage}
          alt="Special post image"
          layout="responsive"
        />
      </div>
      <div className={styles.textContainer}>
        <p className="cap1">{t('whyWeStarted')}</p>
        <h1>{t('specialPostTitle')}</h1>
        <p className="body1 secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>
        <Link href={links.aboutUs} className="button">
          {t('discover')} {'>'}
        </Link>
      </div>
    </div>
  );
};

export default SpecialPost;
