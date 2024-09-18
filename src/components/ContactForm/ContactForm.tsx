import React from 'react';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
  return (
    <form className={styles.form}>
      <input placeholder="Full Name" />
      <input placeholder="Your Email" />
      <input placeholder="Query Related" />
      <textarea placeholder="Message" cols={100} />
      <button className="button">Send message</button>
    </form>
  );
};

export default ContactForm;
