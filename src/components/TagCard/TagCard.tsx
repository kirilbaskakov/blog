import React from 'react';

import styles from './TagCard.module.scss';

const TagCard = ({
  title,
  onDelete
}: {
  title: string;
  onDelete: () => void;
}) => {
  return (
    <div className={styles.tagCard}>
      {title}
      <button className={styles.closeButton} onClick={onDelete}>
        ×
      </button>
    </div>
  );
};

export default TagCard;
