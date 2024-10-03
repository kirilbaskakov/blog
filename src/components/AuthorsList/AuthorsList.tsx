import React from 'react';

import { authorsRoute } from '@/constants/routes/apiRoutes';
import { AuthorType } from '@/types/AuthorType';

import AuthorCard from '../AuthorCard/AuthorCard';
import TranslatedText from '../TranslatedText/TranslatedText';
import styles from './AuthorList.module.scss';

const AuthorsList = async () => {
  const authors: AuthorType[] = await (
    await fetch(`${authorsRoute}?limit=4`)
  ).json();
  return (
    <div className={styles.authorsList}>
      <h2>
        <TranslatedText>{'authorsList'}</TranslatedText>
      </h2>
      <div className={styles.cards}>
        {authors.map(author => (
          <AuthorCard key={author.name} {...author} />
        ))}
      </div>
    </div>
  );
};

export default AuthorsList;
