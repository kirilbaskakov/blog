import React from 'react';
import styles from './PolicyHeader.module.scss';

const PolicyHeader = () => {
  return (
    <div className={styles.policyHeader}>
      <h1>Privacy Policy</h1>
      <p className="body1 secondary">Last Updated on 27th January 2022</p>
    </div>
  );
};

export default PolicyHeader;
