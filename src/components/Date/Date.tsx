'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

import { showDate } from '@/utils';

const Date = ({ children }: { children: number }) => {
  const { i18n } = useTranslation();
  return <>{showDate(children, i18n.language)}</>;
};

export default Date;
