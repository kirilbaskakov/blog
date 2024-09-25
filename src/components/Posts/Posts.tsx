'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';

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
  const listRef = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(1);

  const onPrevPage = () => {
    setPage(page => page - 1);
  };

  const onNextPage = () => {
    setPage(page => page + 1);
  };

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [page]);

  const data = useMemo(
    () => getPosts({ page, authorId, category, limit: LIMIT }),
    [authorId, category, page]
  );

  const pages = Math.ceil(data.amount / LIMIT);
  return (
    <div className={styles.container} ref={listRef}>
      {data.posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
      {pages > 1 && (
        <div className={styles.buttons}>
          <button disabled={page == 1} onClick={onPrevPage}>
            <h4>{'<'} Prev</h4>
          </button>
          <button disabled={page === pages} onClick={onNextPage}>
            <h3>Next {'>'}</h3>
          </button>
        </div>
      )}
    </div>
  );
};
export default Posts;
