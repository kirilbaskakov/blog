import React from 'react';

import styles from './TagCard.module.scss';

const TagCard = ({ title }: { title: string }) => {
  return <div className={styles.tagCard}>{title}</div>;
};

export default TagCard;
