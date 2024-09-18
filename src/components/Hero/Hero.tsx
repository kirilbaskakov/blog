import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h3 className={styles.heroSubtitle}>
          Posted on <b>startup</b>
        </h3>
        <h1 className={styles.heroTitle}>
          Step-by-step guide to choosing great font pairs
        </h1>
        <p className={styles.heroText}>By James West | May 23, 2022</p>
        <p className={styles.heroText}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <button className="button">Read more {'>'}</button>
      </div>
    </div>
  );
};

export default Hero;
