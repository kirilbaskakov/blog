import React from 'react';
import PostCard from '../PostCard/PostCard';
import posts from '@/constants/posts';
import styles from './Posts.module.scss';

const Posts = () => {
  return (
    <div className={styles.container}>
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
};
export default Posts;
