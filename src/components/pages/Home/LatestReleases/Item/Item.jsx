import React from 'react';
import PropTypes from 'prop-types';

import GameId from 'components/GameId/GameId';

import styles from 'components/pages/Home/LatestReleases/Item/Item.module.scss'

const propTypes = {
  item: PropTypes.shape({
    imgSmall: PropTypes.string.isRequired,
    imgLarge: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired,
  imgMode: PropTypes.string.isRequired
}

const Item = ({ item, imgMode }) => {
  return (
    <div className={styles.wrapper}>
      <img src={item[imgMode]} alt={item.title} />
      <div className={styles.content}>
        <span className={styles.videoSlot}>{item.category}</span>
        <GameId gameId={item.id} copyStyles={styles.copy} />
      </div>
      <div className={styles.title}>{item.title}</div>
    </div>
  );
};

Item.propTypes = propTypes
export default Item;