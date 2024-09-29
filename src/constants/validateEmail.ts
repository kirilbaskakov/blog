import { TFunction } from 'i18next';

const validateEmail = (t: TFunction) => ({
  required: t('emailRequired'),
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: t('nonValidEmail')
  }
});

export default validateEmail;
