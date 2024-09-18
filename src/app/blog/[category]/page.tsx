import Posts from '@/components/Posts/Posts';
import CategoryHeader from '@/components/CategoryHeader/CategoryHeader';
import CategorySidebar from '@/components/CategorySidebar/CategorySidebar';
import React from 'react';
import styles from './page.module.scss';

const page = ({ params }: { params: { category: string } }) => {
  return (
    <>
      <CategoryHeader category={params.category} />
      <main className={styles.main}>
        <Posts />
        <CategorySidebar />
      </main>
    </>
  );
};

export default page;
