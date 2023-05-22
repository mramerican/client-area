import React from 'react';
import PropTypes from 'prop-types';

import styles from './ComingSoonItem.module.scss'

const propTypes = {
  item: PropTypes.shape({
    imgSmall: PropTypes.string.isRequired,
    imgLarge: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    dateRelease: PropTypes.string.isRequired
  }).isRequired,
  imgMode: PropTypes.string.isRequired
}

const ComingSoonItem = ({ item, imgMode }) => {
  return (
    <div className={styles.wrapper}>
      <img src={item[imgMode]} alt={item.title} />
      <div className={styles.title}>{item.title}</div>
      <div className={styles.dateRelease}>{item.dateRelease}</div>
    </div>
  );
};

ComingSoonItem.propTypes = propTypes
export default ComingSoonItem;