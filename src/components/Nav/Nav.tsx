'use client';

import React, { useState } from 'react';

import Link from 'next/link';

import VideoButton from '../VideoButton/VideoButton';
import styles from './Nav.module.scss';

const links = [
  {
    href: '/',
    title: 'Home'
  },
  {
    href: '/blog',
    title: 'Blog'
  },
  {
    href: '/about',
    title: 'About'
  },
  {
    href: '/contact',
    title: 'Contact us'
  }
];

const Nav = ({ type }: { type: 'header' | 'footer' }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const onBurgerClicked = () => {
    setIsBurgerOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const onBurgerClose = () => {
    setIsBurgerOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.burger}>
        <div className={styles.burgerBtn} onClick={onBurgerClicked}>
          <div />
          <div />
          <div />
        </div>
        {isBurgerOpen && (
          <>
            <div className={styles.overlay} onClick={onBurgerClose} />
            <div className={styles.dropdown}>
              {links.map(({ href, title }) => (
                <Link href={href} key={title} onClick={onBurgerClose}>
                  {title}
                </Link>
              ))}
              <VideoButton />
            </div>
          </>
        )}
      </div>
      <Link href="/" className={styles.navTitle}>
        Modsen client blog
      </Link>
      <div className={styles.links}>
        {links.map(({ href, title }) => (
          <Link href={href} key={title} className={styles.navLink}>
            {title}
          </Link>
        ))}
        {type === 'header' ? (
          <VideoButton />
        ) : (
          <Link href="/policy" className={styles.navLink}>
            Privacy policy
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
