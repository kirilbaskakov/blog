import React from 'react';

import Nav from '../Nav/Nav';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Nav type="header" />
    </header>
  );
};

export default Header;
