import React from 'react';

import { PostType } from '@/types/PostType';

import AuthorInfo from '../AuthorInfo/AuthorInfo';
import styles from './PostHeader.module.scss';

const PostHeader = ({ post }: { post: PostType }) => {
  return (
    <div className={styles.postHeader}>
      <AuthorInfo authorId={post.authorId} />
      <h1>{post.title}</h1>
      <h4>{post.category}</h4>
    </div>
  );
};

export default PostHeader;
