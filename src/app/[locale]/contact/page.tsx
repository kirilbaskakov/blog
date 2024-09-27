import React from 'react';

import ContactForm from '@/components/ContactForm/ContactForm';
import Map from '@/components/Map/Map';

import styles from './page.module.scss';
import initTranslations from '@/app/i18n';
import LazyList from '@/components/LazyList/LazyList';

const Contact = async ({
  params: { locale }
}: {
  params: { locale: string };
}) => {
  const { t } = await initTranslations(locale, ['default']);

  return (
    <div className={styles.contactBody}>
      <LazyList>
        <div>
          <p className="cap3">{t('contactUs')}</p>
          <h1>{t('contactHeader')}</h1>
          <p className="body1 secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
        </div>
        <div className={styles.contactUs}>
          <div>
            <p className={'body2 ' + styles.subtitle}>{t('workingHours')}</p>
            <h5>{t('monToFr')}</h5>
            <h5>9:00 AM to 8:00 PM </h5>
            <p className={'body1 ' + styles.text}>{t('teamAvaliable')}</p>
          </div>
          <div>
            <p className={'body2 ' + styles.subtitle}>{t('contactUs')}</p>
            <h5>020 7993 2905</h5>
            <p className={'body1 ' + styles.text}>hello@finsweet.com</p>
          </div>
        </div>
        <ContactForm />
        <Map />
      </LazyList>
    </div>
  );
};

export default Contact;
