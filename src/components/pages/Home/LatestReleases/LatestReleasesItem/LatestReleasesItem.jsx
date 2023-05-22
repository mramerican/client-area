import React from 'react';
import PropTypes from 'prop-types';

import styles from './LatestReleasesItem.module.scss'

const propTypes = {
  item: PropTypes.shape({
    imgSmall: PropTypes.string.isRequired,
    imgLarge: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired,
  imgMode: PropTypes.string.isRequired
}

const LatestReleasesItem = ({ item, imgMode }) => {
  return (
    <div className={styles.wrapper}>
      <img src={item[imgMode]} alt={item.title} />
      <div className={styles.content}>
        <span className={styles.videoSlot}>Video slot</span>
        <span className={styles.gameId}>ID {item.id}</span>
      </div>
      <div className={styles.title}>{item.title}</div>
    </div>
  );
};

LatestReleasesItem.propTypes = propTypes
export default LatestReleasesItem;