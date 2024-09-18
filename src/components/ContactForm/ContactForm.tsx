'use client';

import React from 'react';
import styles from './ContactForm.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import classNames from 'classnames';
import emailjs from '@emailjs/browser';

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

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(process.env);
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
      data,
      {
        publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      }
    );
    reset();
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
        className={classNames({ [styles.errorInput]: errors.name })}
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email'
          }
        })}
      />
      <p className={styles.error}>{errors.email?.message}</p>
      <input
        placeholder="Query Related"
        className={classNames({ [styles.errorInput]: errors.name })}
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
        className={classNames({ [styles.errorInput]: errors.name })}
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
    </form>
  );
};

export default ContactForm;
