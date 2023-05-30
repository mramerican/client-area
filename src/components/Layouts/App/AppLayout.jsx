import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import useResizeViewMode from 'hooks/resize';

import { sidebarSelector } from 'store/slices/sidebar';

import styles from 'components/Layouts/App/AppLayout.module.scss';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
const AppLayout = ({ children }) => {
  const isVisibleSidebar = useSelector(sidebarSelector.getVisible);
  useResizeViewMode();

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.hideSidebar]: !isVisibleSidebar,
      })}
    >
      {children}
    </div>
  );
};

AppLayout.propTypes = propTypes;
export default AppLayout;
