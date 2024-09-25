import React from 'react';

import Link from 'next/link';

import styles from './JoinUs.module.scss';

const JoinUs = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Join our team to be a part of our story</h3>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <Link href="/contact" className="button">
        Join Now
      </Link>
    </div>
  );
};

export default JoinUs;
