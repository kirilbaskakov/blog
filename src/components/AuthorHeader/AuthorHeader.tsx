import React from 'react';

import Image from 'next/image';

import SocialIcons from '@/assets/icons/SocialIcons.svg';
import { authorsRoute } from '@/constants/routes/apiRoutes';
import { AuthorType } from '@/types/AuthorType';

import styles from './AuthorHeader.module.scss';

const AuthorHeader = async ({ authorId }: { authorId: number }) => {
  const author: AuthorType = await (
    await fetch(`${authorsRoute}/${authorId}`)
  ).json();

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
