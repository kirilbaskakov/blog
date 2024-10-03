import { FieldError } from 'react-hook-form';

import classNames from 'classnames';

import styles from './Input.module.scss';

interface Props
  extends React.InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement> {
  error: FieldError | undefined;
  multiline?: boolean;
  register?: () => object;
}

const Input = ({ error, register, multiline = false, ...props }: Props) => {
  const Tag = multiline ? 'textarea' : 'input';
  return (
    <>
      <Tag
        className={classNames({
          [styles.input]: true,
          [styles.errorInput]: error
        })}
        {...props}
        {...(register ? register() : {})}
      />
      <p className={styles.error}>{error?.message}</p>
    </>
  );
};

export default Input;
