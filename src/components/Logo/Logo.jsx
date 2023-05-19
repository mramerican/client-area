import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import LogoWitchText from 'images/Logo/LogoWitchText.svg';
import ShortLogo from 'images/Logo/Logo.svg';

import { sidebarSelector } from 'store/slices/sidebar';
import { findPatch } from 'utils/pages';

import styles from './Logo.module.scss';

const Logo = () => {
  const isVisibleSidebar = useSelector(sidebarSelector.getVisible)

  return (
    <div className={classNames(styles.wrapper, {
      [styles.hideSidebar]: !isVisibleSidebar
    })}>
      <Link to={findPatch('home')}>
        <img src={isVisibleSidebar ? LogoWitchText : ShortLogo } alt="EvoPlay client area" />
      </Link>
    </div>
  );
};

export default Logo;