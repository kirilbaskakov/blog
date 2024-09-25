import React from 'react';

import Link from 'next/link';

import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <div>
      <div className={styles.pattern} />
      <div className={styles.container}>
        <div>
          <p className="cap1">About us</p>
          <h2>
            We are a community of content writers who share their learnings
          </h2>
          <p className="body1 secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link href="/about" className={styles.link}>
            Read more {'>'}
          </Link>
        </div>
        <div>
          <p className="cap1">Our mission</p>
          <h3>Creating valuable content for creatives all around the world</h3>
          <p className="body1 secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
