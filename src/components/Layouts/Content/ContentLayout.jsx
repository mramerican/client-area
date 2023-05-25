import React from 'react';
import PropTypes from 'prop-types';

import styles from 'components/Layouts/Content/ContentLayout.module.scss';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
const ContentLayout = ({ children }) => (
  <div className={styles.wrapper}>
    {children}
    {/*<div className={styles.content}>{children}</div>*/}
  </div>
);

ContentLayout.propTypes = propTypes;
export default ContentLayout;
