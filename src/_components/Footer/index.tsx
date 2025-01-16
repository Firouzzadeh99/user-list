import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer_wrapper}>
      <p className={styles.footer__text}>Footer Content</p>
    </footer>
  );
};

export default Footer;