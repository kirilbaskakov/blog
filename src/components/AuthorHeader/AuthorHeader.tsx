import React from 'react';

import Image from 'next/image';

import getAuthor from '@/api/getAuthor';
import SocialIcons from '@/assets/Social wrapper.svg';

import styles from './AuthorHeader.module.scss';

const AuthorHeader = ({ authorId }: { authorId: number }) => {
  const author = getAuthor(authorId);

  if (!author) {
    return null;
  }

  return (
    <div className={styles.authorHeader}>
      <Image src={author?.icon} alt="Author image" />
      <div className={styles.textBlock}>
        <h1>Hey there, I’m {author?.name} and welcome to my Blog</h1>
        <p className="body1 secondary">{author?.description}</p>
        <Image src={SocialIcons} alt="Social icons" />
      </div>
      <div className={styles.pattern} />
    </div>
  );
};

export default AuthorHeader;
