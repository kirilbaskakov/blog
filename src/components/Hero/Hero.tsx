import React from 'react';

import Link from 'next/link';

import { postsRoute } from '@/constants/routes/apiRoutes';
import { PostType } from '@/types/PostType';

import Date from '../Date/Date';
import TranslatedText from '../TranslatedText/TranslatedText';
import styles from './Hero.module.scss';

const Hero = async () => {
  const post: PostType = await (await fetch(`${postsRoute}/1`)).json();

  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <p className="cap1">
          <TranslatedText>postedOn</TranslatedText>{' '}
          <b>
            <TranslatedText>{post.category}</TranslatedText>
          </b>
        </p>
        <h1 className={styles.heroTitle}>{post.title}</h1>
        <p className="body1">
          By {post.author} | <Date>{post.date}</Date>
        </p>
        <p className="body1">{post.text}</p>
        <Link className="button" href={`/${post.id}`}>
          <TranslatedText>readMore</TranslatedText> {'>'}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
