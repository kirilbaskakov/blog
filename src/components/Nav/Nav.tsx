'use client';

import React, { useState } from 'react';

import Link from 'next/link';

import VideoButton from '../VideoButton/VideoButton';
import styles from './Nav.module.scss';
import { useTranslation } from 'react-i18next';
import LocaleSelect from '../LocaleSelect/LocaleSelect';

const links = [
  {
    href: '/',
    key: 'home'
  },
  {
    href: '/blog',
    key: 'blog'
  },
  {
    href: '/about',
    key: 'aboutUs'
  },
  {
    href: '/contact',
    key: 'contactUs'
  }
];

const Nav = ({ type }: { type: 'header' | 'footer' }) => {
  const { t } = useTranslation();
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
              {links.map(({ href, key }) => (
                <Link href={href} key={key} onClick={onBurgerClose}>
                  {t(key)}
                </Link>
              ))}
              <VideoButton />
            </div>
          </>
        )}
      </div>
      <Link href="/" className={styles.navTitle}>
        {t('title')}
      </Link>
      <LocaleSelect />
      <div className={styles.links}>
        {links.map(({ href, key }) => (
          <Link href={href} key={key} className={styles.navLink}>
            {t(key)}
          </Link>
        ))}
        {type === 'header' ? (
          <VideoButton />
        ) : (
          <Link href="/policy" className={styles.navLink}>
            {t('policy')}
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
