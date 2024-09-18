import Image from 'next/image';
import React from 'react';
import AuthorImage from '@/assets/author1.png';
import SocialIcons from '@/assets/Social wrapper.svg';
import styles from './AuthorHeader.module.scss';

const AuthorHeader = () => {
  return (
    <div className={styles.authorHeader}>
      <Image src={AuthorImage} alt="Author image" />
      <div className={styles.textBlock}>
        <h1>Hey there, I’m Andrew Jonhson and welcome to my Blog</h1>
        <p className="body1 secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus.
        </p>
        <Image src={SocialIcons} alt="Social icons" />
      </div>
      <div className={styles.pattern} />
    </div>
  );
};

export default AuthorHeader;
