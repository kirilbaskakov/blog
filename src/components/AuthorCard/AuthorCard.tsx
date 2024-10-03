'use client';

import React from 'react';

import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

import SocialIcons from '@/assets/icons/SocialIcons.svg';

import styles from './AuthorCard.module.scss';

const AuthorCard = ({
  id,
  icon,
  name,
  job
}: {
  id: number;
  icon: StaticImageData;
  name: string;
  job: string;
}) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/author/${id}`);
  };

  return (
    <div className={styles.card} onClick={onClick}>
      <Image src={icon} alt={name} className={styles.image} />
      <h3>{name}</h3>
      <p className="body1 secondary">{job}</p>
      <Image src={SocialIcons} alt="Social icons" />
    </div>
  );
};

export default AuthorCard;
