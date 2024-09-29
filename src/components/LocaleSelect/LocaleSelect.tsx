'use client';

import React, { ChangeEventHandler } from 'react';
import { useTranslation } from 'react-i18next';

import { usePathname, useRouter } from 'next/navigation';

import languages from '@/constants/languages';
import i18nConfig from '@/i18nConfig';

import styles from './LocaleSelect.module.scss';

const LocaleSelect = () => {
  const router = useRouter();
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const currentPathname = usePathname();

  const handleChange: ChangeEventHandler<HTMLSelectElement> = event => {
    const newLocale = event.target.value;

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    if (currentLocale === i18nConfig.defaultLocale) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };
  return (
    <select
      data-testid="locale-select"
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
