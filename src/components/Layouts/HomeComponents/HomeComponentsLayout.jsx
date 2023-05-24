import React from 'react';
import PropTypes from 'prop-types';

import { findPatch } from 'utils/pages';
import ArrowCircleLink from 'components/pages/Home/ArrowCircleLink/ArrowCircleLink';

import styles from 'components/Layouts/HomeComponents/HomeComponentsLayout.module.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
  linkPath: PropTypes.string.isRequired,
  linkTitle: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const HomeComponentsLayout = ({ title, linkPath, linkTitle, children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <ArrowCircleLink title={linkTitle} path={findPatch(linkPath)} />
      </div>
      {children}
    </div>
  );
};

HomeComponentsLayout.propTypes = propTypes;
export default HomeComponentsLayout;
