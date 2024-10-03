'use client';

import React from 'react';

import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

import { CategoryCardType } from '@/types/CategoryCardType';

import styles from './CategoryCard.module.scss';

const CategoryCard = ({
  icon,
  title,
  categoryKey,
  text,
  type = CategoryCardType.LARGE,
  selected = false
}: {
  icon: StaticImageData;
  categoryKey: string;
  title: string;
  text: string;
  type?: CategoryCardType;
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
        [styles.small]: type === CategoryCardType.SMALL,
        [styles.selected]: selected
      })}
    >
      <div className={styles.categoryIcon}>
        <Image src={icon} alt={`${title} icon`} />
      </div>
      <h3>{title}</h3>
      {type === CategoryCardType.LARGE && (
        <p className="body1 secondary">{text}</p>
      )}
    </div>
  );
};

export default CategoryCard;
