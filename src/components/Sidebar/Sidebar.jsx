import React from 'react';
import { useSelector } from 'react-redux';

import Logo from 'components/Logo/Logo'
import Search from 'components/Search/Search';
import Copyright from 'components/Copyrighr/Copyright';
import SidebarItem from 'components/Sidebar/SidebarItem/SidebarItem';

import { sidebarSelector } from 'store/slices/sidebar';

import { SidebarData } from './SidebarData';

import styles from './Sidebar.module.scss'

const Sidebar = () => {
  const isVisibleSidebar = useSelector(sidebarSelector.getVisible)

  return (
    <div className={styles.wrapper}>
      <div>
        <Logo />
        <Search />
        <div>
          {SidebarData && SidebarData.map((item) => <SidebarItem {...item} key={item.title} />)}
        </div>
      </div>
      {isVisibleSidebar && <Copyright />}
    </div>
  );
};

export default Sidebar;