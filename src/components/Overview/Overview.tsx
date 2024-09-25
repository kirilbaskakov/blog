import React from 'react';

import Image from 'next/image';

import OverviewImage from '@/assets/Overview.png';

import styles from './Overview.module.scss';

const Overview = () => {
  return (
    <div className={styles.overview}>
      <Image src={OverviewImage} alt="Overview image" />
      <div className={styles.textBlock}>
        <div>
          <p className="cap1">Our mision</p>
          <h3>Creating valuable content for creatives all around the world</h3>
          <p className="body1 secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </p>
        </div>
        <div>
          <p className="cap1">Our vision</p>
          <h3>A platform that empowers individuals to improve</h3>
          <p className="body1 secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
