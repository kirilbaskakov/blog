'use client';

import React, { MouseEventHandler } from 'react';

import Link from 'next/link';

import styles from './PostInfo.module.scss';
import { useRouter } from 'next/navigation';
import showDate from '@/utils/showDate';
import { useTranslation } from 'react-i18next';

const PostInfo = ({
  id,
  title,
  author,
  date,
  authorId
}: {
  id: number;
  authorId: number;
  title: string;
  author: string;
  date: number;
}) => {
  const router = useRouter();
  const { i18n } = useTranslation();

  const onPostClick = () => {
    router.push(`${id}`);
  };

  const onAuthorClick: MouseEventHandler = e => {
    e.stopPropagation();
  };

  return (
    <div className={styles.postInfo} onClick={onPostClick}>
      <p className="label1">
        By{' '}
        <Link href={`/author/${authorId}`} onClick={onAuthorClick}>
          {author}
        </Link>{' '}
        | {showDate(date, i18n.language)}
      </p>
      <h4>
        <Link href={`/${id}`} className={styles.title}>
          {title}
        </Link>
      </h4>
    </div>
  );
};

export default PostInfo;
