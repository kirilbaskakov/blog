import React from 'react';
import styles from './CategoryCard.module.scss';
import Image, { StaticImageData } from 'next/image';

const CategoryCard = ({
  icon,
  title,
  text
}: {
  icon: StaticImageData;
  title: string;
  text: string;
}) => {
  return (
    <div className={styles.categoryCard}>
      <div className={styles.categoryIcon}>
        <Image src={icon} alt={`${title} icon`} />
      </div>
      <h3>{title}</h3>
      <p className="body1 secondary">{text}</p>
    </div>
  );
};

export default CategoryCard;
