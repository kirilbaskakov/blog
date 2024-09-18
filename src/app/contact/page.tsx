import ContactForm from '@/components/ContactForm/ContactForm';
import React from 'react';
import styles from './page.module.scss';
import Map from '@/components/Map/Map';

const page = () => {
  return (
    <div className={styles.contactBody}>
      <div>
        <p className="cap3">Contact us</p>
        <h1>Let’s Start a Conversation</h1>
        <p className="body1 secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>
      </div>
      <div className={styles.contactUs}>
        <div>
          <p className={'body2 ' + styles.subtitle}>Working hours</p>
          <h5>Monday to Friday</h5>
          <h5>9:00 AM to 8:00 PM </h5>
          <p className={'body1 ' + styles.text}>
            Our Support Team is available 24/7
          </p>
        </div>
        <div>
          <p className={'body2 ' + styles.subtitle}>Contact us</p>
          <h5>020 7993 2905</h5>
          <p className={'body1 ' + styles.text}>hello@finsweet.com</p>
        </div>
      </div>
      <ContactForm />
      <Map />
    </div>
  );
};

export default page;
