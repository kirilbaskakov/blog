'use client';

import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import emailjs from '@emailjs/browser';
import classNames from 'classnames';

import validateEmail from '@/constants/validateEmail';

import Popup from '../Popup/Popup';
import styles from './ContactForm.module.scss';

interface Inputs {
  name: string;
  email: string;
  query: string;
  message: string;
  [key: string]: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const onPopupClose = () => setIsPopupOpen(false);

  const onSubmit: SubmitHandler<Inputs> = data => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_CONTACT_ID!,
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
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Full Name"
        className={classNames({ [styles.errorInput]: errors.name })}
        {...register('name', {
          required: 'Name is required',
          minLength: {
            value: 5,
            message: 'Name must be longer than 4 characters'
          },
          maxLength: {
            value: 49,
            message: 'Name must be shorter than 50 characters'
          }
        })}
      />
      <p className={styles.error}>{errors.name?.message}</p>
      <input
        placeholder="Your Email"
        className={classNames({ [styles.errorInput]: errors.email })}
        {...register('email', validateEmail)}
      />
      <p className={styles.error}>{errors.email?.message}</p>
      <input
        placeholder="Query Related"
        className={classNames({ [styles.errorInput]: errors.query })}
        {...register('query', {
          required: 'Query is required',
          maxLength: {
            value: 49,
            message: 'Query must be shorter than 50 characters'
          }
        })}
      />
      <p className={styles.error}>{errors.query?.message}</p>
      <textarea
        placeholder="Message"
        className={classNames({ [styles.errorInput]: errors.message })}
        {...register('message', {
          required: 'Message is required',
          maxLength: {
            value: 499,
            message: 'Query must be shorter than 500 characters'
          }
        })}
      />
      <p className={styles.error}>{errors.message?.message}</p>
      <button className="button">Send message</button>
      {isPopupOpen && (
        <Popup
          text="Your message has been sent successfully"
          isOpen={isPopupOpen}
          onClose={onPopupClose}
        />
      )}
    </form>
  );
};

export default ContactForm;
