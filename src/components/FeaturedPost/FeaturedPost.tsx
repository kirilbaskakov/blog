import React from 'react';
import styles from './FeaturedPost.module.scss';
import Image, { StaticImageData } from 'next/image';

const FeaturedPost = ({
  image,
  title,
  author,
  text,
  date
}: {
  image: StaticImageData;
  title: string;
  author: string;
  text: string;
  date: string;
}) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt={`${title} image`} />
      <p className="label1">
        By {author} | {date}
      </p>
      <h3>{title}</h3>
      <p className="body1 secondary">{text}</p>
      <button className="button">Read more {'>'}</button>
    </div>
  );
};

export default FeaturedPost;
