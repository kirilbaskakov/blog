'use client';

import React from 'react';

import styles from './AboutUsHeader.module.scss';
import { useTranslation } from 'react-i18next';

const AboutUsHeader = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p className="cap3">{t('aboutUs')}</p>
        <h1>{t('aboutTitle')}</h1>
      </div>
      <p className="body1 secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};

export default AboutUsHeader;
