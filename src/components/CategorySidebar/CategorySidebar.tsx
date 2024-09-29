'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useRouter, useSearchParams } from 'next/navigation';

import categories from '@/constants/categories';

import CategoryCard from '../CategoryCard/CategoryCard';
import TagCard from '../TagCard/TagCard';
import TagInput from '../TagInput/TagInput';
import styles from './CategorySidebar.module.scss';
import { TagType } from '@/types/TagType';
import getTags from '@/api/getTags';

const CategorySidebar = ({ category }: { category: string }) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();

  const allTags = getTags(i18n.language);

  const [tags, setTags] = useState<Array<TagType>>(() => {
    const values = searchParams.get('tags')?.split(', ');
    if (!values) {
      return [];
    }
    return values.map(value => ({
      value,
      title: allTags.find(tag => tag.value === value)?.title ?? ''
    }));
  });

  console.log(tags);

  const onTagSelect = (tag: TagType) =>
    !tags.find(({ value }) => value === tag.value) &&
    setTags(tags => [...tags, tag]);

  const onTagDelete = (tagValue: string) => () => {
    setTags(tags.filter(({ value }) => value != tagValue));
  };

  const onSearch = () => {
    if (!tags.length) {
      router.push('?');
      return;
    }
    const params = new URLSearchParams({
      tags: tags.map(({ value }) => value).join(', ')
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
              categoryKey={key}
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
              <TagCard
                key={tag.value}
                title={tag.title}
                onDelete={onTagDelete(tag.value)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategorySidebar;
