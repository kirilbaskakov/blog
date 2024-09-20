import React from 'react';
import styles from './PostHeader.module.scss';
import AuthorInfo from '../AuthorInfo/AuthorInfo';
import { PostType } from '@/types/PostType';

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
