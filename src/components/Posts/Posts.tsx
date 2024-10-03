'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { postsRoute } from '@/constants/routes/apiRoutes';
import { PostType } from '@/types/PostType';

import PostCard from '../PostCard/PostCard';
import TranslatedText from '../TranslatedText/TranslatedText';
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
  const searchParams = useSearchParams();
  const tags = useMemo(
    () => searchParams.get('tags')?.split(', ') ?? [],
    [searchParams]
  );
  const [data, setData] = useState<{ amount: number; posts: PostType[] }>({
    amount: 0,
    posts: []
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let url = `${postsRoute}?page=${page}&limit=${LIMIT}&author_id=${authorId}`;
    if (category) {
      url += `&category=${category}`;
    }
    if (tags.length) {
      url += `&tags=${tags.join(', ')}`;
    }
    setIsLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .finally(() => setIsLoading(false));
  }, [authorId, category, page, tags]);

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

  const pages = Math.ceil(data.amount / LIMIT);

  return (
    <div className={styles.container} ref={listRef}>
      {isLoading && (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )}
      {!isLoading && data.posts.length == 0 && (
        <h2>
          <TranslatedText>noPostsFound</TranslatedText>
        </h2>
      )}
      {data.posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
      {pages > 1 && (
        <div className={styles.buttons}>
          <button disabled={page == 1} onClick={onPrevPage}>
            <h4>{'<'}</h4>
            <h4>
              <TranslatedText>prev</TranslatedText>
            </h4>
          </button>
          <button disabled={page === pages} onClick={onNextPage}>
            <h3>
              <TranslatedText>next</TranslatedText>
            </h3>
            <h3>{'>'}</h3>
          </button>
        </div>
      )}
    </div>
  );
};
export default Posts;
