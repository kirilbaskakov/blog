import React from 'react';

import Image from 'next/image';

import FeaturedPostImage from '@/assets/FeaturedPost.jpg';

import styles from './BlogHeader.module.scss';

const BlogHeader = () => {
  return (
    <div className={styles.blogHeader}>
      <div>
        <p className="cap3">Featured post</p>
        <h2>Step-by-step guide to choosing great font pairs</h2>
        <p className="label1">By John Doe | May 23, 2022</p>
        <p className={styles.text + ' body1 secondary'}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <button className="button">Read More {'>'}</button>
      </div>
      <div className={styles.image}>
        <Image
          src={FeaturedPostImage}
          alt="Feature post image"
          width={400}
          height={350}
        />
      </div>
    </div>
  );
};

export default BlogHeader;
