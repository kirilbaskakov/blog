import React from 'react';
import BlogImage1 from '@/assets/post1.jpg';
import BlogImage2 from '@/assets/post2.jpg';
import BlogImage3 from '@/assets/post3.jpg';
import BlogImage4 from '@/assets/post4.jpg';
import PostCard from '../PostCard/PostCard';
import styles from './AllPosts.module.scss';

const posts = [
  {
    image: BlogImage1,
    category: 'Startup',
    title: 'Design tips for designers that cover everything you need',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
  },
  {
    image: BlogImage2,
    category: 'Business',
    title: 'How to build rapport with your web design clients',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
  },
  {
    image: BlogImage3,
    category: 'Startup',
    title:
      'Logo design trends to avoid in 2022Logo design trends to avoid in 2022',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
  },
  {
    image: BlogImage4,
    category: 'Technology',
    title: '8 Figma design systems you can download for free today',
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
  }
];

const AllPosts = () => {
  return (
    <div className={styles.container}>
      <h1>All posts</h1>
      <div className={styles.separator} />
      <div>
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
