'use client';

import React, { useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import categories from '@/constants/categories';

import CategoryCard from '../CategoryCard/CategoryCard';
import TagCard from '../TagCard/TagCard';
import TagInput from '../TagInput/TagInput';
import styles from './CategorySidebar.module.scss';
import { useTranslation } from 'react-i18next';

const CategorySidebar = ({ category }: { category: string }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [tags, setTags] = useState<string[]>(
    searchParams.get('tags')?.split(', ') ?? []
  );

  const onTagSelect = (tag: string) =>
    !tags.includes(tag) && setTags(tags => [...tags, tag]);

  const onTagDelete = (tag: string) => () => {
    setTags(tags.filter(name => name != tag));
  };

  const onSearch = () => {
    if (!tags.length) {
      router.push('?');
      return;
    }
    const params = new URLSearchParams({
      tags: tags.join(', ')
    });
    router.push(`?${params.toString()}`);
  };

  return (
    <div className={styles.categorySidebar}>
      <TagInput onSelect={onTagSelect} onSearch={onSearch} />
      <div>
        <h2>{t('categories')}</h2>
        <div className={styles.cards}>
          {categories.map(({ key, text, icon }) => (
            <CategoryCard
              key={key}
              title={t(key)}
              text={text}
              icon={icon}
              type="small"
              selected={category.toLowerCase() === key.toLowerCase()}
            />
          ))}
        </div>
      </div>
      {tags.length > 0 && (
        <div>
          <h2>{t('allTags')}</h2>
          <div className={styles.tags}>
            {tags.map(tag => (
              <TagCard key={tag} title={tag} onDelete={onTagDelete(tag)} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySidebar;
