import React from 'react';
import styles from './AuthorInfo.module.scss';
import Image from 'next/image';
import getAuthor from '@/api/getAuthor';

const AuthorInfo = ({ authorId }: { authorId: number }) => {
  const author = getAuthor(authorId);

  if (!author) {
    return null;
  }

  return (
    <div className={styles.authorInfo}>
      <Image
        src={author.icon}
        alt="Profile icon"
        className={styles.authorIcon}
      />
      <div>
        <h4 className={styles.authorTitle}>{author.name}</h4>
        <p className={styles.authorSubtitle}>{author.origin}</p>
      </div>
    </div>
  );
};

export default AuthorInfo;
