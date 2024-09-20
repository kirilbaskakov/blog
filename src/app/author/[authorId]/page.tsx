import AuthorHeader from '@/components/AuthorHeader/AuthorHeader';
import Posts from '@/components/Posts/Posts';
import React from 'react';
import styles from './page.module.scss';
import getPosts from '@/api/getPosts';

const page = ({ params: { authorId } }: { params: { authorId: number } }) => {
  const posts = getPosts({ authorId });
  return (
    <>
      <AuthorHeader authorId={authorId} />
      <main className={styles.main}>
        <h1>My posts</h1>
        <Posts posts={posts} />
      </main>
    </>
  );
};

export default page;
