import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContentLayout.module.scss'

const propTypes = {
  children: PropTypes.node.isRequired
}
const ContentLayout = ({ children }) =>
  <div className={styles.wrapper}>
    <div className={styles.content}>
      {children}
    </div>
  </div>

ContentLayout.propTypes = propTypes;
export default ContentLayout;