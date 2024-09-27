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
  }, [ref]);

  return (
    <>
      {Children.toArray(children)
        .slice(0, count)
        .map((child, index) => (
          <div className="slide-in-from-right" key={index}>
            {child}
          </div>
        ))}
      {count < Children.count(children) && (
        <div ref={ref} className={styles.observerElement} />
      )}
    </>
  );
};

export default LazyList;
