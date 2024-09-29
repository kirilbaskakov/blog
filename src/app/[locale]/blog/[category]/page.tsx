import React from 'react';

import CategoryHeader from '@/components/CategoryHeader/CategoryHeader';
import CategorySidebar from '@/components/CategorySidebar/CategorySidebar';
import Posts from '@/components/Posts/Posts';

import styles from './page.module.scss';

const page = ({ params: { category } }: { params: { category: string } }) => {
  return (
    <>
      <CategoryHeader category={category} />
      <main className={styles.main}>
        <Posts category={category} />
        <CategorySidebar category={category} />
      </main>
    </>
  );
};

export default page;
