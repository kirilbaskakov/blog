import JoinUs from '@/components/JoinUs/JoinUs';
import PostBody from '@/components/PostBody/PostBody';
import PostHeader from '@/components/PostHeader/PostHeader';
import React from 'react';

const page = () => {
  return (
    <main>
      <PostHeader />
      <PostBody />
      <JoinUs />
    </main>
  );
};

export default page;
