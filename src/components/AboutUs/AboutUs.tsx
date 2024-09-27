'use client';

import React from 'react';

import Link from 'next/link';

import styles from './AboutUs.module.scss';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className={styles.pattern} />
      <div className={styles.container}>
        <div>
          <p className="cap1">{t('aboutUs')}</p>
          <h2>{t('aboutTitle')}</h2>
          <p className="body1 secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link href="/about" className={styles.link}>
            {t('readMore')} {'>'}
          </Link>
        </div>
        <div>
          <p className="cap1">{t('ourMission')}</p>
          <h3>{t('missionTitle')}</h3>
          <p className="body1 secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
