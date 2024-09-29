import React from 'react';
import { useTranslation } from 'react-i18next';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { showDate } from '@/utils';

import styles from './FeaturedPost.module.scss';

const FeaturedPost = ({
  id,
  image,
  title,
  author,
  authorId,
  text,
  date
}: {
  id: number;
  image: StaticImageData;
  title: string;
  author: string;
  authorId: number;
  text: string;
  date: number;
}) => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.card}>
      <Image src={image} alt={`${title} image`} />
      <div className={styles.text}>
        <p className="label1">
          By <Link href={`/author/${authorId}`}>{author}</Link> |{' '}
          {showDate(date, i18n.language)}
        </p>
        <h3>{title}</h3>
        <p className="body1 secondary">{text}</p>
        <Link href={`/${id}`} className="button">
          {t('readMore')} {'>'}
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPost;
