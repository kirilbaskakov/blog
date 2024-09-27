'use client';

import React from 'react';

import styles from './CategoryHeader.module.scss';
import { useTranslation } from 'react-i18next';

const CategoryHeader = ({ category }: { category: string }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.categoryHeader}>
      <div className={styles.content}>
        <h1 className="display">{t(category)}</h1>
        <p className="body1 secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <p className="cap3"> {t('blog').toUpperCase() + ' > ' + category}</p>
      </div>
    </div>
  );
};

export default CategoryHeader;
