import React from 'react';
import styles from './AuthorInfo.module.scss';
import Image from 'next/image';
import ProfileIcon from '@/assets/Profile picture.png';

const AuthorInfo = () => {
  return (
    <div className={styles.profile}>
      <Image src={ProfileIcon} alt="Profile icon" />
      <div>
        <h4 className={styles.profileTitle}>Jonathan Vallem</h4>
        <p className={styles.profileSubtitle}>New york, USA</p>
      </div>
    </div>
  );
};

export default AuthorInfo;
