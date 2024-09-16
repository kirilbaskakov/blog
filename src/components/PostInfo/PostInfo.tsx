import React from 'react';
import styles from './PostInfo.module.scss';

const PostInfo = ({
  title,
  author,
  date
}: {
  title: string;
  author: string;
  date: string;
}) => {
  return (
    <div className={styles.postInfo}>
      <p className="label1">
        By {author} | {date}
      </p>
      <h4>{title}</h4>
    </div>
  );
};

export default PostInfo;
