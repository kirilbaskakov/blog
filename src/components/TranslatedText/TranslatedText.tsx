'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const TranslatedText = ({ children }: { children: string }) => {
  const { t } = useTranslation();
  return <>{t(children)}</>;
};

export default TranslatedText;
