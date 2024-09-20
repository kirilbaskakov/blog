import React, { useEffect } from 'react';
import styles from './Popup.module.scss';

const Popup = ({
  isOpen,
  onClose,
  text
}: {
  isOpen: boolean;
  onClose: () => void;
  text: string;
}) => {
  useEffect(() => {
    let timer = null;
    if (isOpen) {
      timer = setTimeout(onClose, 3000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isOpen, onClose]);

  return <div className={styles.popup}>{text}</div>;
};

export default Popup;
