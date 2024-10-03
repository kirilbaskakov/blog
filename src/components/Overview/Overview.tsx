'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

import Image from 'next/image';

import OverviewImage from '@/assets/about/Overview.png';

import styles from './Overview.module.scss';

const Overview = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.overview}>
      <Image src={OverviewImage} alt="Overview image" />
      <div className={styles.textBlock}>
        <div>
          <p className="cap1">{t('ourMission')}</p>
          <h3>{t('missionTitle')}</h3>
          <p className="body1 secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </p>
        </div>
        <div>
          <p className="cap1">{t('ourVision')}</p>
          <h3>{t('visionTitle')}</h3>
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
