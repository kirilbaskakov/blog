import React from 'react';
import { createInstance } from 'i18next';
import initTranslations from '@/app/i18n';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';

const withI18next = Story => {
  const i18n = createInstance();

  initTranslations('en', ['default'], i18n);
  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};

export default withI18next;
