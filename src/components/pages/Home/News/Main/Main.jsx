import React from 'react';

import { mainNews } from 'components/pages/Home/News/data';
import styles from './Main.module.scss';

const Main = () => (
  <div className={styles.wrapper}>
    <img src={mainNews.img} alt="Main News" />
    <div className={styles.content}>
      <div className={styles.description}>{mainNews.description}</div>
      <div className={styles.date}>{mainNews.date}</div>
    </div>
  </div>
);
export default Main;
