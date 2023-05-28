import React from 'react';

import Loader from 'components/Loader/Loader';

import styles from './AllGames.module.scss';

const AllGames = () => {
  return (
    <>
      <div className={styles.header}>header</div>
      <div className={styles.content}>content</div>
      <Loader />
    </>
  );
};

export default AllGames;
