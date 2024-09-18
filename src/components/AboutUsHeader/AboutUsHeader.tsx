import React from 'react';
import styles from './AboutUsHeader.module.scss';

const AboutUsHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <p className="cap3">About us</p>
        <h1>We are a team of content writers who share their learnings</h1>
      </div>
      <p className="body1 secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
};

export default AboutUsHeader;
