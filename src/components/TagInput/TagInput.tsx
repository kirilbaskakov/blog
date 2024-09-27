import React, { ChangeEventHandler, useState } from 'react';

import tags from '@/constants/tags';

import styles from './TagInput.module.scss';
import { useTranslation } from 'react-i18next';

const TagInput = ({
  onSelect,
  onSearch
}: {
  onSelect: (tag: string) => void;
  onSearch: () => void;
}) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    setSearch(e.target.value);
  };

  const onFocus = () => setIsFocused(true);
  const onBlur = () => setTimeout(() => setIsFocused(false), 100);

  const onTagClick = (tag: string) => () => {
    setSearch('');
    onSelect(tag);
  };

  const currentTags = tags.filter(tag =>
    tag.toLocaleLowerCase().includes(search.toLocaleLowerCase())
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
              <div key={tag} onClick={onTagClick(tag)}>
                {tag}
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