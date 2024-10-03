import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { authorsRoute } from '@/constants/routes/apiRoutes';
import { links } from '@/constants/routes/links';
import { AuthorType } from '@/types/AuthorType';

import styles from './AuthorInfo.module.scss';

const AuthorInfo = ({ authorId }: { authorId: number }) => {
  const [author, setAuthor] = useState<AuthorType | null>(null);

  useEffect(() => {
    fetch(`${authorsRoute}/${authorId}`)
      .then(response => response.json())
      .then(data => setAuthor(data));
  }, [authorId]);

  return (
    <div className={styles.authorInfo}>
      {author && (
        <>
          <Image
            src={author.icon}
            alt="Profile icon"
            className={styles.authorIcon}
          />
          <div>
            <Link href={`${links.author}/${authorId}`}>
              <h4>{author.name}</h4>
            </Link>
            <p className="body1 secondary">{author.origin}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default AuthorInfo;
