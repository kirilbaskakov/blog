import React from 'react';
import styles from './PostsList.module.scss';
import FeaturedPost from '../FeaturedPost/FeaturedPost';
import FeaturedPostImage from '@/assets/FeaturedPost.jpg';
import PostInfo from '../PostInfo/PostInfo';
import Link from 'next/link';

const PostsList = () => {
  return (
    <div className={styles.postsList}>
      <div>
        <h2>Featured Post</h2>
        <FeaturedPost
          image={FeaturedPostImage}
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          author="John Doe"
          text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
          date="May 23, 2022"
        />
      </div>
      <div>
        <div className={styles.postsHeading}>
          <h2>All Posts</h2>
          <Link href="/blog">View All</Link>
        </div>
        <div>
          <PostInfo
            author="John Doe"
            title="8 Figma design systems that you can download for free today."
            date="Aug 23, 2022"
          />
          <PostInfo
            author="John Doe"
            title="8 Figma design systems that you can download for free today."
            date="Aug 23, 2022"
          />
          <PostInfo
            author="John Doe"
            title="8 Figma design systems that you can download for free today."
            date="Aug 23, 2022"
          />
          <PostInfo
            author="John Doe"
            title="8 Figma design systems that you can download for free today."
            date="Aug 23, 2022"
          />
        </div>
      </div>
    </div>
  );
};

export default PostsList;
