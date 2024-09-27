import React from 'react';

import AuthorHeader from '@/components/AuthorHeader/AuthorHeader';
import Posts from '@/components/Posts/Posts';

import styles from './page.module.scss';

const page = ({ params: { authorId } }: { params: { authorId: number } }) => {
  return (
    <>
      <AuthorHeader authorId={authorId} />
      <main className={styles.main}>
        <h1>My posts</h1>
        <Posts authorId={authorId} />
      </main>
    </>
  );
};

export default page;
