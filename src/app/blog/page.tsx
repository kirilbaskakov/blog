import Posts from '@/components/Posts/Posts';
import BlogHeader from '@/components/BlogHeader/BlogHeader';
import Categories from '@/components/Categories/Categories';
import JoinUs from '@/components/JoinUs/JoinUs';
import React from 'react';
import styles from './page.module.scss';
import getPosts from '@/api/getPosts';

const page = () => {
  const posts = getPosts();
  return (
    <>
      <BlogHeader />
      <main>
        <div className={styles.container}>
          <h1>All posts</h1>
          <div className={styles.separator} />
          <div>
            <Posts posts={posts} />
          </div>
        </div>
        <Categories />
        <JoinUs />
      </main>
    </>
  );
};

export default page;
