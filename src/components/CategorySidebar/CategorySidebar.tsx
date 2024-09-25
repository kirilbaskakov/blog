import React from 'react';

import categories from '@/constants/categories';
import tags from '@/constants/tags';

import CategoryCard from '../CategoryCard/CategoryCard';
import TagCard from '../TagCard/TagCard';
import styles from './CategorySidebar.module.scss';

const CategorySidebar = ({ category }: { category: string }) => {
  return (
    <div className={styles.categorySidebar}>
      <div className={styles.search}>
        <input placeholder="Search for tag..." />
        <button className="button">Search</button>
      </div>
      <div>
        <h2>Categories</h2>
        <div className={styles.cards}>
          {categories.map((item, index) => (
            <CategoryCard
              key={index}
              {...item}
              type="small"
              selected={category.toLowerCase() === item.title.toLowerCase()}
            />
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
