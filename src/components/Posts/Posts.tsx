'use client';

import React, { useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useSearchParams } from 'next/navigation';

import getPosts from '@/api/getPosts';

import PostCard from '../PostCard/PostCard';
import styles from './Posts.module.scss';

const LIMIT = 4;

const Posts = ({
  authorId,
  category
}: {
  authorId?: number;
  category?: string;
}) => {
  const { t } = useTranslation();
  const listRef = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(1);
  const searchParams = useSearchParams();
  const tags = useMemo(
    () => searchParams.get('tags')?.split(', ') ?? [],
    [searchParams]
  );

  const scrollToTop = () => {
    setTimeout(() => {
      if (listRef.current) {
        listRef.current.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }, 0);
  };

  const onPrevPage = () => {
    setPage(page => page - 1);
    scrollToTop();
  };

  const onNextPage = () => {
    setPage(page => page + 1);
    scrollToTop();
  };

  const data = useMemo(
    () => getPosts({ page, authorId, category, tags, limit: LIMIT }),
    [authorId, category, page, tags]
  );

  const pages = Math.ceil(data.amount / LIMIT);
  return (
    <div className={styles.container} ref={listRef}>
      {data.posts.length == 0 && <h2>{t('noPostsFound')}</h2>}
      {data.posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
      {pages > 1 && (
        <div className={styles.buttons}>
          <button disabled={page == 1} onClick={onPrevPage}>
            <h4>{'<'}</h4>
            <h4>{t('prev')}</h4>
          </button>
          <button disabled={page === pages} onClick={onNextPage}>
            <h3>{t('next')}</h3>
            <h3>{'>'}</h3>
          </button>
        </div>
      )}
    </div>
  );
};
export default Posts;
