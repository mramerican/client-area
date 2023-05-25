import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import { findPatchPages } from 'utils/pages';
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
  styleWrapper: PropTypes.string,
  styleHeader: PropTypes.string,
};

const defaultProps = {
  styleWrapper: styles.content,
  styleHeader: null,
};

const HomeComponentsLayout = ({
  title,
  linkPath,
  linkTitle,
  children,
  styleWrapper,
  styleHeader,
}) => {
  return (
    <div className={classNames(styles.wrapper, styleWrapper)}>
      <div className={classNames(styles.header, styleHeader)}>
        <div className={styles.title}>{title}</div>
        <ArrowCircleLink title={linkTitle} path={findPatchPages(linkPath)} />
      </div>
      {children}
    </div>
  );
};

HomeComponentsLayout.propTypes = propTypes;
HomeComponentsLayout.defaultProps = defaultProps;
export default HomeComponentsLayout;
