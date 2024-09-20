import React from 'react';
import styles from './PostsBlock.module.scss';
import FeaturedPost from '../FeaturedPost/FeaturedPost';
import PostInfo from '../PostInfo/PostInfo';
import Link from 'next/link';
import getPosts from '@/api/getPosts';

const PostsBlock = () => {
  const posts = getPosts({ limit: 4 });

  return (
    <div className={styles.postsList}>
      <div>
        <h2>Featured Post</h2>
        <FeaturedPost {...posts[0]} />
      </div>
      <div>
        <div className={styles.postsHeading}>
          <h2>All Posts</h2>
          <Link href="/blog">View All</Link>
        </div>
        <div>
          {posts.map(post => (
            <PostInfo key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsBlock;
