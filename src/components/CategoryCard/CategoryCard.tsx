'use client';

import React from 'react';

import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

import styles from './CategoryCard.module.scss';
import { useTranslation } from 'react-i18next';

const CategoryCard = ({
  icon,
  title,
  categoryKey,
  text,
  type = 'large',
  selected = false
}: {
  icon: StaticImageData;
  categoryKey: string;
  title: string;
  text: string;
  type?: 'small' | 'large';
  selected?: boolean;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onClick = () => {
    router.push(`/blog/${categoryKey}?${searchParams.toString()}`);
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
