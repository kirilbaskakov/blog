import React from 'react';
import styles from './Logos.module.scss';
import LogosIcon from '@/assets/Logos.png';
import Image from 'next/image';

const Logos = () => {
  return (
    <div className={styles.logos}>
      <Image src={LogosIcon} alt="Logos" />
    </div>
  );
};

export default Logos;
