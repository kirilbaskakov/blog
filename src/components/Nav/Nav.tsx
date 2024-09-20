import Link from 'next/link';
import React from 'react';
import styles from './Nav.module.scss';
import VideoButton from '../VideoButton/VideoButton';

const Nav = () => {
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
      <VideoButton />
    </nav>
  );
};

export default Nav;
