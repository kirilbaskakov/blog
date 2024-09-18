import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from './PostCard.module.scss';

const PostCard = ({
  image,
  category,
  title,
  text
}: {
  image: StaticImageData;
  category: string;
  title: string;
  text: string;
}) => {
  return (
    <div className={styles.postCard}>
      <Image src={image} alt={title} width={480} height={316} />

      <div className={styles.textBlock}>
        <p className="cap1">{category}</p>
        <h2>{title}</h2>
        <p className="body1 secondary">{text}</p>
      </div>
    </div>
  );
};

export default PostCard;
