import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ReactComponent as ArrowCircle } from 'images/Icons/ArrowCircle.svg'
import styles from './ArrowCircleLink.module.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

const ArrowCircleLink = ({ title, path }) => {
  return (
    <Link to={path} className={styles.link}>
      {title}
      <ArrowCircle className={styles.icon} />
    </Link>
  );
};

ArrowCircleLink.propTypes = propTypes;
export default ArrowCircleLink;