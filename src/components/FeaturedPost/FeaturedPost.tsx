import React from 'react';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

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
  date: string;
}) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt={`${title} image`} />
      <div className={styles.text}>
        <p className="label1">
          By <Link href={`/author/${authorId}`}>{author}</Link> | {date}
        </p>
        <h3>{title}</h3>
        <p className="body1 secondary">{text}</p>
        <Link href={`/${id}`} className="button">
          Read more {'>'}
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPost;
