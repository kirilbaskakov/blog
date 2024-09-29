'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

import Link from 'next/link';

import styles from './JoinUs.module.scss';

const JoinUs = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h2>{t('joinTitle')}</h2>
      <p className="body1 secondary">
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
