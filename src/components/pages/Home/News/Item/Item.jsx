import React from 'react';
import PropTypes from 'prop-types';

import styles from './Item.module.scss';

const propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

const Item = ({ img, description, date }) => {
  return (
    <div className={styles.wrapper}>
      <img src={img} alt="news img" />
      <div className={styles.content}>
        <div className={styles.description}>{description}</div>
        <div className={styles.date}>{date}</div>
      </div>
    </div>
  );
};

Item.propTypes = propTypes;
export default Item;
