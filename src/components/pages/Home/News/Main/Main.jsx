import React from 'react';
import { useSelector } from 'react-redux';

import { viewModeSelector } from 'store/slices/viewMode';
import { VIEW_MODE } from 'utils/viewMode';

import { mainNews } from 'components/pages/Home/News/data';
import styles from './Main.module.scss';

const Main = () => {
  const viewMode = useSelector(viewModeSelector.getViewMode);
  const imgMode = viewMode === VIEW_MODE.SIMPLE ? 'imgSmall' : 'imgLarge';

  return (
    <div className={styles.wrapper}>
      <img src={mainNews[imgMode]} alt="Main News" />
      <div className={styles.content}>
        <div className={styles.description}>{mainNews.description}</div>
        <div className={styles.date}>{mainNews.date}</div>
      </div>
    </div>
  );
};

export default Main;
