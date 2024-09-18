import React from 'react';
import styles from './CategoryCard.module.scss';
import Image, { StaticImageData } from 'next/image';

const CategoryCard = ({
  icon,
  title,
  text,
  type = 'large'
}: {
  icon: StaticImageData;
  title: string;
  text: string;
  type?: 'small' | 'large';
}) => {
  return (
    <div
      className={
        styles.categoryCard + ' ' + (type == 'small' ? styles.small : '')
      }
    >
      <div className={styles.categoryIcon}>
        <Image src={icon} alt={`${title} icon`} />
      </div>
      <h3>{title}</h3>
      {type === 'large' && <p className="body1 secondary">{text}</p>}
    </div>
  );
};

export default CategoryCard;
