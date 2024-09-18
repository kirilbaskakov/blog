import React from 'react';
import styles from './AuthorList.module.scss';
import AuthorIcon from '@/assets/authorIcon.jpg';
import AuthorCard from '../AuthorCard/AuthorCard';

const authors = [
  { icon: AuthorIcon, name: 'Floyd Miles', job: 'Content Writer @Company' },
  { icon: AuthorIcon, name: 'Dianne Russell', job: 'Content Writer @Company' },
  { icon: AuthorIcon, name: 'Jenny Wilson', job: 'Content Writer @Company' },
  { icon: AuthorIcon, name: 'Leslie Alexander', job: 'Content Writer @Company' }
];

const AuthorsList = () => {
  return (
    <div className={styles.authorsList}>
      <h3 className={styles.title}>List of authors</h3>
      <div className={styles.cards}>
        {authors.map(author => (
          <AuthorCard key={author.name} {...author} />
        ))}
      </div>
    </div>
  );
};

export default AuthorsList;
