import React from 'react';
import PropTypes from 'prop-types';

import styles from 'components/pages/Home/ComingSoon/Item/Item.module.scss';

const propTypes = {
  item: PropTypes.shape({
    imgSmall: PropTypes.string.isRequired,
    imgLarge: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    dateRelease: PropTypes.string.isRequired,
  }).isRequired,
  imgMode: PropTypes.string.isRequired,
};

const Item = ({ item, imgMode }) => {
  return (
    <div className={styles.wrapper}>
      <img src={item[imgMode]} alt={item.title} />
      <div className={styles.title}>{item.title}</div>
      <div className={styles.dateRelease}>{item.dateRelease}</div>
    </div>
  );
};

Item.propTypes = propTypes;
export default Item;
