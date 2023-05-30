import GameItem from 'components/GameItem/GameItem';
import React from 'react';

import Loader from 'components/Loader/Loader';

import { data } from 'temporaryData/AllGames/data';
import styles from './AllGames.module.scss';

const AllGames = () => {
  return (
    <>
      <div className={styles.header}>header</div>
      <div className={styles.content}>
        {data.map((item) => (
          <GameItem key={item.id} item={item} style={styles.gameItemWrapper} />
        ))}
      </div>
      <Loader />
    </>
  );
};

export default AllGames;
