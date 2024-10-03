import React from 'react';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { links } from '@/constants/routes/links';

import Date from '../Date/Date';
import TranslatedText from '../TranslatedText/TranslatedText';
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
  return (
    <div className={styles.card}>
      <Image src={image} alt={`${title} image`} />
      <div className={styles.text}>
        <p className="label1">
          By <Link href={`${links.author}/${authorId}`}>{author}</Link> |
          <Date>{date}</Date>
        </p>
        <h3>{title}</h3>
        <p className="body1 secondary">{text}</p>
        <Link href={`/${id}`} className="button">
          <TranslatedText>readMore</TranslatedText> {'>'}
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPost;
