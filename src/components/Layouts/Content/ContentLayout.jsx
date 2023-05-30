import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import styles from 'components/Layouts/Content/ContentLayout.module.scss';
import { useLocation } from 'react-router-dom';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
const ContentLayout = ({ children }) => {
  const wrapperRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (wrapperRef && wrapperRef.current) {
      wrapperRef.current.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      {children}
    </div>
  );
};

ContentLayout.propTypes = propTypes;
export default ContentLayout;
