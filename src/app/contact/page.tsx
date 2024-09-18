import ContactForm from '@/components/ContactForm/ContactForm';
import React from 'react';
import styles from './page.module.scss';

const page = () => {
  return (
    <div>
      <div>
        <p className="cap3">Contact us</p>
        <h1>Let’s Start a Conversation</h1>
        <p className="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>
      </div>
      <div className={styles.contactUs}>
        <div>
          <p>Working hours</p>
          <h5>Monday to Friday</h5>
          <h5>9:00 AM to 8:00 PM </h5>
          <p className="body1 secondary">Our Support Team is available 24/7</p>
        </div>
        <div>
          <p>Contact us</p>
          <h5>020 7993 2905</h5>
          <p className="body1 secondary">Our Support Team is available 24/7</p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default page;
