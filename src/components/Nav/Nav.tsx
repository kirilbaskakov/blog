import React from 'react';

import Link from 'next/link';

import VideoButton from '../VideoButton/VideoButton';
import styles from './Nav.module.scss';

const Nav = ({ type }: { type: 'header' | 'footer' }) => {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.navTitle}>
        Modsen client blog
      </Link>
      <Link href="/" className={styles.navLink}>
        Home
      </Link>
      <Link href="/blog" className={styles.navLink}>
        Blog
      </Link>
      <Link href="/about" className={styles.navLink}>
        About us
      </Link>
      <Link href="/contact" className={styles.navLink}>
        Contact us
      </Link>
      {type === 'header' ? (
        <VideoButton />
      ) : (
        <Link href="/policy" className={styles.navLink}>
          Privacy policy
        </Link>
      )}
    </nav>
  );
};

export default Nav;
