'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './PolicyHeader.module.scss';

const PolicyHeader = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.policyHeader}>
      <h1>{t('policy')}</h1>
      <p className="body1 secondary">{t('lastUpd')}</p>
    </div>
  );
};

export default PolicyHeader;
