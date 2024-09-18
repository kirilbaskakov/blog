import AllPosts from '@/components/AllPosts/AllPosts';
import BlogHeader from '@/components/BlogHeader/BlogHeader';
import Categories from '@/components/Categories/Categories';
import JoinUs from '@/components/JoinUs/JoinUs';
import React from 'react';

const page = () => {
  return (
    <>
      <BlogHeader />
      <main>
        <AllPosts />
        <Categories />
        <JoinUs />
      </main>
    </>
  );
};

export default page;
