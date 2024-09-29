import React from 'react';

import initTranslations from '@/app/i18n';
import AuthorHeader from '@/components/AuthorHeader/AuthorHeader';
import LazyList from '@/components/LazyList/LazyList';
import Posts from '@/components/Posts/Posts';

import styles from './page.module.scss';

const Author = async ({
  params: { locale, authorId }
}: {
  params: { locale: string; authorId: number };
}) => {
  const { t } = await initTranslations(locale, ['default']);
  return (
    <>
      <AuthorHeader authorId={authorId} />
      <main className={styles.main}>
        <LazyList>
          <h1>{t('myPosts')}</h1>
          <Posts authorId={authorId} />
        </LazyList>
      </main>
    </>
  );
};

export default Author;
