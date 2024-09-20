import Posts from '@/components/Posts/Posts';
import CategoryHeader from '@/components/CategoryHeader/CategoryHeader';
import CategorySidebar from '@/components/CategorySidebar/CategorySidebar';
import React from 'react';
import styles from './page.module.scss';
import getPosts from '@/api/getPosts';

const page = ({ params: { category } }: { params: { category: string } }) => {
  const posts = getPosts({ category });

  return (
    <>
      <CategoryHeader category={category} />
      <main className={styles.main}>
        <Posts posts={posts} />
        <CategorySidebar category={category} />
      </main>
    </>
  );
};

export default page;
