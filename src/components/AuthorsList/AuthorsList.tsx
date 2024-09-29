'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

import getAuthors from '@/api/getAuthors';

import AuthorCard from '../AuthorCard/AuthorCard';
import styles from './AuthorList.module.scss';

const AuthorsList = () => {
  const { t } = useTranslation();
  const authors = getAuthors();
  return (
    <div className={styles.authorsList}>
      <h3 className={styles.title}>{t('authorsList')}</h3>
      <div className={styles.cards}>
        {authors.map(author => (
          <AuthorCard key={author.name} {...author} />
        ))}
      </div>
    </div>
  );
};

export default AuthorsList;
