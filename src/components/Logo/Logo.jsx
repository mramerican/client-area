import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import LogoWitchText from 'images/Logo/LogoWitchText.svg';
import ShortLogo from 'images/Logo/Logo.svg';

import { sidebarSelector } from 'store/slices/sidebar';

import styles from './Logo.module.scss';

const Logo = () => {
  const isVisibleSidebar = useSelector(sidebarSelector.getVisible)

  return (
    <div className={classNames(styles.wrapper, {
      [styles.hideSidebar]: !isVisibleSidebar
    })}>
      <a href="/">
        <img src={isVisibleSidebar ? LogoWitchText : ShortLogo } alt="EvoPlay client area" />
      </a>
    </div>
  );
};

export default Logo;