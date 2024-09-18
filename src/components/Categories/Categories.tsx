import React from 'react';
import categories from '@/constants/categories';
import CategoryCard from '../CategoryCard/CategoryCard';
import styles from './Categories.module.scss';

const Categories = () => {
  return (
    <div className={styles.categories}>
      <h2>Choose a category</h2>
      <div className={styles.cards}>
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
