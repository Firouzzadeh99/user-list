import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header_wrapper}>
      <h1 className={styles.header__title}>Header Title</h1>
    </header>
  );
};

export default Header;