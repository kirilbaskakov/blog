'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';
import SocialWrapper from '@/assets/Social wrapper.svg';
import styles from './AuthorCard.module.scss';
import { useRouter } from 'next/navigation';

const AuthorCard = ({
  icon,
  name,
  job
}: {
  icon: StaticImageData;
  name: string;
  job: string;
}) => {
  const router = useRouter();

  const onClick = () => {
    router.replace(`/author/${name}`);
  };

  return (
    <div className={styles.card} onClick={onClick}>
      <Image src={icon} alt={name} className={styles.image} />
      <h4 className={styles.title}>{name}</h4>
      <p className={styles.job}>{job}</p>
      <Image src={SocialWrapper} alt="Social icons" />
    </div>
  );
};

export default AuthorCard;
