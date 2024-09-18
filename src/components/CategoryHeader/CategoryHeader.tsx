import React from 'react';
import styles from './CategoryHeader.module.scss';
import capitalize from '@/utils/capitalize';

const CategoryHeader = ({ category }: { category: string }) => {
  return (
    <div className={styles.categoryHeader}>
      <div className={styles.content}>
        <h1 className="display">{capitalize(category)}</h1>
        <p className="body1 secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <p className="cap3">BLOG {'> ' + category}</p>
      </div>
    </div>
  );
};

export default CategoryHeader;
