import React from 'react';

import Image from 'next/image';

import logos from './logos';
import styles from './Logos.module.scss';

const Logos = () => {
  return (
    <div className={styles.logos}>
      {logos.map((logo, index) => (
        <Image key={index} src={logo} alt="Logo" />
      ))}
    </div>
  );
};

export default Logos;
