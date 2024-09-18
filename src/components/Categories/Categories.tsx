import React from 'react';
import categoriesList from './categoriesList';
import CategoryCard from '../CategoryCard/CategoryCard';
import styles from './Categories.module.scss';

const Categories = () => {
  return (
    <div className={styles.categories}>
      <h2>Choose a category</h2>
      <div className={styles.cards}>
        {categoriesList.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
