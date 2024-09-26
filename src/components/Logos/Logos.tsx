import React from 'react';

import Image from 'next/image';

import Logo0 from '@/assets/Logo 0.png';
import Logo1 from '@/assets/Logo 1.png';
import Logo2 from '@/assets/Logo 2.png';
import Logo3 from '@/assets/Logo 3.png';
import Logo4 from '@/assets/Logo 4.png';
import Logo5 from '@/assets/Logo 5.png';

import styles from './Logos.module.scss';

const logos = [Logo0, Logo1, Logo2, Logo3, Logo4, Logo5];

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
