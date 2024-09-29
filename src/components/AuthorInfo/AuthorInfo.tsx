import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import getAuthor from '@/api/getAuthor';

import styles from './AuthorInfo.module.scss';

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
        <Link href={`/author/${authorId}`}>
          <h4>{author.name}</h4>
        </Link>
        <p className="body1 secondary">{author.origin}</p>
      </div>
    </div>
  );
};

export default AuthorInfo;
