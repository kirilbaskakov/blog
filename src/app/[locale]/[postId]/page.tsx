import React from 'react';

import getPost from '@/api/getPost';
import JoinUs from '@/components/JoinUs/JoinUs';
import LazyList from '@/components/LazyList/LazyList';
import PostBody from '@/components/PostBody/PostBody';
import PostHeader from '@/components/PostHeader/PostHeader';

const page = ({ params: { postId } }: { params: { postId: number } }) => {
  const post = getPost(postId);

  if (!post) {
    return null;
  }

  return (
    <main>
      <PostHeader post={post} />
      <LazyList>
        <PostBody />
        <JoinUs />
      </LazyList>
    </main>
  );
};

export default page;
