import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';

import { sidebarSelector, openSidebar } from 'store/slices/sidebar';

import styles from 'components/Sidebar/Item/Item.module.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  path: PropTypes.string,
  subNav: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

const defaultProps = {
  path: null,
  subNav: null,
};
const Item = ({ title, icon, path, subNav }) => {
  const dispatch = useDispatch();
  const [subnav, setSubnav] = useState(false);
  const isVisibleSidebar = useSelector(sidebarSelector.getVisible);
  const location = useLocation();

  const toggleSubNav = useCallback(
    () => setSubnav((prevState) => !prevState),
    [],
  );

  useEffect(() => {
    if (subNav && subnav && !isVisibleSidebar) {
      dispatch(openSidebar());
    }
    // eslint-disable-next-line
  }, [subnav, subNav]);

  useEffect(() => {
    if (!subnav && subNav) {
      const isActiveSubNav = subNav.find(
        (element) => element.path === location.pathname,
      );
      if (isActiveSubNav) {
        toggleSubNav();
      }
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  const dropDownArrow = (
    <div
      className={classNames(styles.arrow, {
        [styles.arrowUp]: subnav,
        [styles.arrowDown]: !subnav,
      })}
    ></div>
  );

  return (
    <>
      <NavLink
        to={path}
        className={({ isActive }) =>
          classNames(styles.wrapper, {
            [styles.open]: subnav,
            [styles.active]: isActive && !subNav,
          })
        }
        onClick={subNav && toggleSubNav}
      >
        <div className={styles.content}>
          {icon({ className: styles.icon })}
          {isVisibleSidebar && <span className={styles.label}>{title}</span>}
        </div>
        {subNav && dropDownArrow}
      </NavLink>
      {isVisibleSidebar &&
        subnav &&
        subNav.map((subItem) => (
          <NavLink
            to={subItem.path}
            key={subItem.title}
            className={({ isActive }) =>
              classNames(styles.dropdownLink, {
                [styles.activeSub]: isActive,
              })
            }
          >
            <span className={styles.label}>{subItem.title}</span>
          </NavLink>
        ))}
    </>
  );
};

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;
