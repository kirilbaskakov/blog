'use client';

import React from 'react';

import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

import styles from './CategoryCard.module.scss';

const CategoryCard = ({
  icon,
  title,
  text,
  type = 'large',
  selected = false
}: {
  icon: StaticImageData;
  title: string;
  text: string;
  type?: 'small' | 'large';
  selected?: boolean;
}) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/blog/${title.toLocaleLowerCase()}`);
  };

  return (
    <div
      onClick={onClick}
      className={classNames({
        [styles.categoryCard]: true,
        [styles.small]: type === 'small',
        [styles.selected]: selected
      })}
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
