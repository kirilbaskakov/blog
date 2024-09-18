import categories from '@/constants/categories';
import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import styles from './CategorySidebar.module.scss';
import tags from '@/constants/tags';
import TagCard from '../TagCard/TagCard';

const CategorySidebar = () => {
  return (
    <div className={styles.categorySidebar}>
      <div className={styles.search}>
        <input placeholder="Search for tag..." />
        <button className="button">Search</button>
      </div>
      <div>
        <h2>Categories</h2>
        <div className={styles.cards}>
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} type="small" />
          ))}
        </div>
      </div>
      <div>
        <h2>All tags</h2>
        <div className={styles.tags}>
          {tags.map(tag => (
            <TagCard key={tag} title={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar;
