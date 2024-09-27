'use client';

import React from 'react';

import Link from 'next/link';

import styles from './JoinUs.module.scss';
import { useTranslation } from 'react-i18next';

const JoinUs = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{t('joinTitle')}</h3>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <Link href="/contact" className="button">
        {t('joinNow')}
      </Link>
    </div>
  );
};

export default JoinUs;
