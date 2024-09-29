'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

import Link from 'next/link';

import getPosts from '@/api/getPosts';

import FeaturedPost from '../FeaturedPost/FeaturedPost';
import PostInfo from '../PostInfo/PostInfo';
import styles from './PostsBlock.module.scss';

const PostsBlock = () => {
  const { t } = useTranslation();
  const data = getPosts({ limit: 4 });

  return (
    <div className={styles.postsList}>
      <div>
        <h2>{t('featuredPost')}</h2>
        <FeaturedPost {...data.posts[0]} />
      </div>
      <div>
        <div className={styles.postsHeading}>
          <h2>{t('allPosts')}</h2>
          <Link href="/blog">{t('viewAll')}</Link>
        </div>
        <div>
          {data.posts.map(post => (
            <PostInfo key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsBlock;
