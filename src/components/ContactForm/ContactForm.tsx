'use client';

import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import emailjs from '@emailjs/browser';

import validateEmail from '@/constants/validation/validateEmail';

import Input from '../Input/Input';
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
      <Input
        error={errors.name}
        placeholder={t('fullName')}
        register={() =>
          register('name', {
            required: t('nameRequired'),
            minLength: {
              value: 5,
              message: t('nameLonger')
            },
            maxLength: {
              value: 49,
              message: t('nameShorter')
            }
          })
        }
      />
      <Input
        error={errors.email}
        placeholder={t('yourEmail')}
        register={() => register('email', validateEmail(t))}
      />
      <Input
        error={errors.query}
        placeholder={t('queryRelated')}
        {...register('query', {
          required: t('queryRequired'),
          maxLength: {
            value: 49,
            message: t('queryShorter')
          }
        })}
      />
      <Input
        multiline={true}
        placeholder={t('message')}
        error={errors.message}
        {...register('message', {
          required: t('messageRequired'),
          maxLength: {
            value: 499,
            message: t('messageShorter')
          }
        })}
      />
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
