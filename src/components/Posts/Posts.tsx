import React from 'react';
import PostCard from '../PostCard/PostCard';
import styles from './Posts.module.scss';
import { PostType } from '@/types/PostType';

const Posts = ({ posts }: { posts: Array<PostType> }) => {
  return (
    <div className={styles.container}>
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
};
export default Posts;
