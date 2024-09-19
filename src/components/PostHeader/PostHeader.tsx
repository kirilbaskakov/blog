import React from 'react';
import styles from './PostHeader.module.scss';
import AuthorInfo from '../AuthorInfo/AuthorInfo';

const PostHeader = () => {
  return (
    <div className={styles.postHeader}>
      <AuthorInfo />
      <h1>Step-by-step guide to choosing great font pairs</h1>
      <h4>Startup</h4>
    </div>
  );
};

export default PostHeader;
