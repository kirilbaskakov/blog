'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Link from 'next/link';

import { links, navLinks } from '@/constants/routes/links';

import LocaleSelect from '../LocaleSelect/LocaleSelect';
import VideoButton from '../VideoButton/VideoButton';
import styles from './Nav.module.scss';

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
              {Object.entries(navLinks).map(([key, href]) => (
                <Link href={href} key={href} onClick={onBurgerClose}>
                  {t(key)}
                </Link>
              ))}
              <VideoButton />
            </div>
          </>
        )}
      </div>
      <Link href={links.home} className={styles.navTitle}>
        {t('title')}
      </Link>
      <LocaleSelect />
      <div className={styles.links}>
        {Object.entries(navLinks).map(([key, href]) => (
          <Link href={href} key={key} className={styles.navLink}>
            {t(key)}
          </Link>
        ))}
        {type === 'header' ? (
          <VideoButton />
        ) : (
          <Link href={links.policy} className={styles.navLink}>
            {t('policy')}
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
