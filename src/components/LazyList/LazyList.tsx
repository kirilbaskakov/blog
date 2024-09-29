'use client';

import React, { Children, ReactNode, useEffect, useRef, useState } from 'react';

import styles from './LazyList.module.scss';

const LazyList = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const observer = new IntersectionObserver(entries => {
      const target = entries[0];
      if (target.isIntersecting) {
        setCount(count => count + 1);
      }
    });
    const current = ref.current;
    observer.observe(current);
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [count, ref]);

  return (
    <div className={styles.lazyList}>
      {Children.toArray(children).slice(0, count)}
      {count < Children.count(children) && (
        <div ref={ref} className={styles.observerElement} />
      )}
    </div>
  );
};

export default LazyList;
