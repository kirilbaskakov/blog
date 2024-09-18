import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from './AboutUsCard.module.scss';

const AboutUsCard = ({
  title,
  subtitle,
  text,
  image
}: {
  title: string;
  subtitle: string;
  text: string;
  image: StaticImageData;
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <p className="body1 secondary">{text}</p>
      </div>
      <Image src={image} alt={title} />
    </div>
  );
};

export default AboutUsCard;
