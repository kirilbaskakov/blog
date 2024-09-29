import React, { ChangeEventHandler, useState } from 'react';
import { useTranslation } from 'react-i18next';

import getTags from '@/api/getTags';
import { TagType } from '@/types/TagType';

import styles from './TagInput.module.scss';

const TagInput = ({
  onSelect,
  onSearch
}: {
  onSelect: (tag: TagType) => void;
  onSearch: () => void;
}) => {
  const { t, i18n } = useTranslation();
  const [search, setSearch] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const tags = getTags(i18n.language);

  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    setSearch(e.target.value);
  };

  const onFocus = () => setIsFocused(true);
  const onBlur = () => setTimeout(() => setIsFocused(false), 100);

  const onTagClick = (tag: TagType) => () => {
    setSearch('');
    onSelect(tag);
  };

  const currentTags = tags.filter(tag =>
    tag.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className={styles.search}>
      <div className={styles.inputContainer}>
        <input
          placeholder={t('searchForTag')}
          value={search}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {isFocused && (
          <div className={styles.variants}>
            {currentTags.map(tag => (
              <div key={tag.value} onClick={onTagClick(tag)}>
                {tag.title}
              </div>
            ))}
            {currentTags.length == 0 && <div>{t('noResults')}</div>}
          </div>
        )}
      </div>
      <button className="button" onClick={onSearch}>
        {t('search')}
      </button>
    </div>
  );
};

export default TagInput;
