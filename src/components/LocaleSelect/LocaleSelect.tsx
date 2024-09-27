'use client';

import React, { ChangeEventHandler } from 'react';
import styles from './LocaleSelect.module.scss';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

const languages = [
  {
    title: 'English',
    value: 'en'
  },
  {
    title: 'Русский',
    value: 'ru'
  }
];

const LocaleSelect = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = event => {
    const newLocale = event.target.value;
    const currentPath = window.location.pathname;

    const withoutCurrentLocale = currentPath.replace('/ru', '');
    router.push(`/${newLocale}${withoutCurrentLocale}`);
    i18n.changeLanguage(newLocale);
  };
  return (
    <select
      className={styles.select}
      defaultValue={i18n.language}
      onChange={handleChange}
    >
      {languages.map(({ title, value }) => (
        <option key={title} value={value}>
          {title}
        </option>
      ))}
    </select>
  );
};

export default LocaleSelect;
