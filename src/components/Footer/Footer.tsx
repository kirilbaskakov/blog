'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import SocialWrapper from '@/assets/Social wrapper.svg';
import styles from './Footer.module.scss';
import Nav from '../Nav/Nav';
import { SubmitHandler, useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import validateEmail from '@/constants/validateEmail';
import classNames from 'classnames';
import Popup from '../Popup/Popup';

const Footer = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<{ email: string }>();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const onPopupClose = () => setIsPopupOpen(false);

  const onSubmit: SubmitHandler<{ email: string }> = data => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_SUBSCRIBE_ID!,
        data,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
        }
      )
      .then(() => {
        setIsPopupOpen(true);
        reset();
      });
  };

  return (
    <footer className={styles.footer}>
      <Nav />
      <form className={styles.subscribeForm} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.subscribeTitle}>
          Subscribe to our news letter to get latest updates and news
        </h2>
        <input
          className={classNames({
            [styles.errorInput]: errors.email,
            [styles.subscribeInput]: true
          })}
          placeholder="Enter your email"
          {...register('email', validateEmail)}
        />
        <button className="button">Subscribe</button>
      </form>
      <div className={styles.contacts}>
        <div className={styles.address}>
          <p>Finstreet 118 2561 Fintown </p>
          <p>Hello@finsweet.com 020 7993 2905</p>
        </div>
        <Image src={SocialWrapper} alt="Social icons" />
      </div>
      {isPopupOpen && (
        <Popup
          text="You have successfully subscribed"
          isOpen={isPopupOpen}
          onClose={onPopupClose}
        />
      )}
    </footer>
  );
};

export default Footer;
