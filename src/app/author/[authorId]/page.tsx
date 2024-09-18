import AuthorHeader from '@/components/AuthorHeader/AuthorHeader';
import Posts from '@/components/Posts/Posts';
import React from 'react';
import styles from './page.module.scss';

const page = () => {
  return (
    <>
      <AuthorHeader />
      <main className={styles.main}>
        <h1>My posts</h1>
        <Posts />
      </main>
    </>
  );
};

export default page;
