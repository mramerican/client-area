import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { sidebarSelector, toggleVisible } from 'store/slices/sidebar';

import styles from './ToggleSidebar.module.scss';
const ToggleSidebar = () => {
  const dispatch = useDispatch()
  const isVisible = useSelector(sidebarSelector.getVisible)

  const handleClick = useCallback(() => {
    dispatch(toggleVisible(!isVisible))
    // eslint-disable-next-line
  }, [isVisible])

  return (
    <div
      className={classNames(styles.wrapper, {[styles.hideSidebar]: !isVisible})}
      onClick={handleClick}
    >
      <div className={classNames({[styles.right]: !isVisible, [styles.left]: isVisible})}></div>
    </div>
  );
};
export default ToggleSidebar;