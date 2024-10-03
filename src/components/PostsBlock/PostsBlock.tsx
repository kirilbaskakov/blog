import React from 'react';

import Link from 'next/link';

import { postsRoute } from '@/constants/routes/apiRoutes';
import { links } from '@/constants/routes/links';
import { PostType } from '@/types/PostType';

import FeaturedPost from '../FeaturedPost/FeaturedPost';
import PostInfo from '../PostInfo/PostInfo';
import TranslatedText from '../TranslatedText/TranslatedText';
import styles from './PostsBlock.module.scss';

const PostsBlock = async () => {
  const { posts }: { posts: PostType[] } = await (
    await fetch(`${postsRoute}?limit=4`)
  ).json();

  return (
    <div className={styles.postsList}>
      <div>
        <h2>
          <TranslatedText>featuredPost</TranslatedText>
        </h2>
        <FeaturedPost {...posts[0]} />
      </div>
      <div>
        <div className={styles.postsHeading}>
          <h2>
            <TranslatedText>allPosts</TranslatedText>
          </h2>
          <Link href={links.blog}>
            <TranslatedText>viewAll</TranslatedText>
          </Link>
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
