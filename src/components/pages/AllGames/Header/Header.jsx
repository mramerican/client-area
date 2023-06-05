import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.filters}>filters</div>
      <div className={styles.sort}>sort</div>
    </div>
  );
};

export default Header;
