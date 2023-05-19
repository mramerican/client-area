import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import throttle from 'lodash.throttle'

import { sidebarSelector } from 'store/slices/sidebar';
import { setViewMode } from 'store/slices/viewMode';
import { getViewMode } from 'utils/viewMode';

import styles from './AppLayout.module.scss'

const propTypes = {
  children: PropTypes.node.isRequired,
}
const AppLayout = ({ children }) => {
  const dispatch = useDispatch()
  const isVisibleSidebar = useSelector(sidebarSelector.getVisible)

  useEffect(() => {
    const debouncedHandleResize = throttle(() => {
      dispatch(setViewMode(getViewMode(window.innerWidth)))
    }, 1000)
    window.addEventListener('resize', debouncedHandleResize)

    return () => window.removeEventListener('resize', debouncedHandleResize)
  }, [dispatch])

  return (
    <div className={classNames(styles.wrapper, {
      [styles.hideSidebar]: !isVisibleSidebar
    })}>
      {children}
    </div>
  );
};

AppLayout.propTypes = propTypes;
export default AppLayout;