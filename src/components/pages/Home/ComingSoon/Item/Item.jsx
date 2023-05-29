import React from 'react';
import PropTypes from 'prop-types';

import styles from 'components/pages/Home/ComingSoon/Item/Item.module.scss';

const propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    dateRelease: PropTypes.string.isRequired,
  }).isRequired,
};

const Item = ({ item: { img, title, dateRelease } }) => (
  <div className={styles.wrapper}>
    <img src={img} alt={title} />
    <div className={styles.title}>{title}</div>
    <div className={styles.dateRelease}>{dateRelease}</div>
  </div>
);

Item.propTypes = propTypes;
export default Item;
