import getPost from '@/api/getPost';
import JoinUs from '@/components/JoinUs/JoinUs';
import PostBody from '@/components/PostBody/PostBody';
import PostHeader from '@/components/PostHeader/PostHeader';
import React from 'react';

const page = ({ params: { postId } }: { params: { postId: number } }) => {
  const post = getPost(postId);

  if (!post) {
    return null;
  }

  return (
    <main>
      <PostHeader post={post} />
      <PostBody />
      <JoinUs />
    </main>
  );
};

export default page;
