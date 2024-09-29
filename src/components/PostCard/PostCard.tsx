'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

import styles from './PostCard.module.scss';

const PostCard = ({
  id,
  image,
  category,
  title,
  text
}: {
  id: number;
  image: StaticImageData;
  category: string;
  title: string;
  text: string;
}) => {
  const { t } = useTranslation();
  const router = useRouter();

  const onClick = () => {
    router.push(`/${id}`);
  };

  return (
    <div className={styles.postCard} onClick={onClick}>
      <Image src={image} alt={title} width={480} height={316} />

      <div className={styles.textBlock}>
        <p className="cap1">{t(category.toLowerCase())}</p>
        <h2>{title}</h2>
        <p className="body1 secondary">{text}</p>
      </div>
    </div>
  );
};

export default PostCard;
