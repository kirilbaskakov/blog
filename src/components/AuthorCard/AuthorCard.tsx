import Image, { StaticImageData } from 'next/image';
import React from 'react';
import SocialWrapper from '@/assets/Social wrapper.svg';
import styles from './AuthorCard.module.scss';

const AuthorCard = ({
  icon,
  name,
  job
}: {
  icon: StaticImageData;
  name: string;
  job: string;
}) => {
  return (
    <div className={styles.card}>
      <Image src={icon} alt={name} className={styles.image} />
      <h4 className={styles.title}>{name}</h4>
      <p className={styles.job}>{job}</p>
      <Image src={SocialWrapper} alt="Social icons" />
    </div>
  );
};

export default AuthorCard;
