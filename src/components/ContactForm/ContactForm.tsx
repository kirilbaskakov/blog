'use client';

import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
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
        placeholder={t('fullName')}
        className={classNames({ [styles.errorInput]: errors.name })}
        {...register('name', {
          required: t('nameRequired'),
          minLength: {
            value: 5,
            message: t('nameLonger')
          },
          maxLength: {
            value: 49,
            message: t('nameShorter')
          }
        })}
      />
      <p className={styles.error}>{errors.name?.message}</p>
      <input
        placeholder={t('yourEmail')}
        className={classNames({ [styles.errorInput]: errors.email })}
        {...register('email', validateEmail(t))}
      />
      <p className={styles.error}>{errors.email?.message}</p>
      <input
        placeholder={t('queryRelated')}
        className={classNames({ [styles.errorInput]: errors.query })}
        {...register('query', {
          required: t('queryRequired'),
          maxLength: {
            value: 49,
            message: t('queryShorter')
          }
        })}
      />
      <p className={styles.error}>{errors.query?.message}</p>
      <textarea
        placeholder={t('message')}
        className={classNames({ [styles.errorInput]: errors.message })}
        {...register('message', {
          required: t('messageRequired'),
          maxLength: {
            value: 499,
            message: t('messageShorter')
          }
        })}
      />
      <p className={styles.error}>{errors.message?.message}</p>
      <button className="button">{t('sendMessage')}</button>
      {isPopupOpen && (
        <Popup
          text={t('contactMsg')}
          isOpen={isPopupOpen}
          onClose={onPopupClose}
        />
      )}
    </form>
  );
};

export default ContactForm;
