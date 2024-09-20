import React from 'react';
import styles from './PostInfo.module.scss';
import Link from 'next/link';

const PostInfo = ({
  id,
  title,
  author,
  date,
  authorId
}: {
  id: number;
  authorId: number;
  title: string;
  author: string;
  date: string;
}) => {
  return (
    <div className={styles.postInfo}>
      <p className="label1">
        By <Link href={`/author/${authorId}`}>{author}</Link> | {date}
      </p>
      <h4>
        <Link href={`/${id}`} className={styles.title}>
          {title}
        </Link>
      </h4>
    </div>
  );
};

export default PostInfo;
