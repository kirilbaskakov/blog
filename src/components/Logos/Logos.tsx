import React from 'react';

import Image from 'next/image';

import LogosIcon from '@/assets/Logos.png';

import styles from './Logos.module.scss';

const Logos = () => {
  return (
    <div className={styles.logos}>
      <Image src={LogosIcon} alt="Logos" />
    </div>
  );
};

export default Logos;
