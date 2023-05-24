import React from 'react';
import { useSelector } from 'react-redux';

import HomeComponentsLayout from 'components/Layouts/HomeComponents/HomeComponentsLayout';
import Main from 'components/pages/Home/News/Main/Main';
import Item from 'components/pages/Home/News/Item/Item';

import { viewModeSelector } from 'store/slices/viewMode';
import { VIEW_MODE } from 'utils/viewMode';

import { news } from 'components/pages/Home/News/data';

import styles from './News.module.scss';

const News = () => {
  const viewMode = useSelector(viewModeSelector.getViewMode);
  const countSize = viewMode === VIEW_MODE.SIMPLE ? 3 : 4;

  return (
    <HomeComponentsLayout
      linkPath="news"
      title="News and Updates"
      linkTitle="All News"
    >
      <div className={styles.wrapper}>
        <Main />
        <div className={styles.newsItems}>
          {news.slice(0, countSize).map((item, index) => (
            <Item
              key={index}
              date={item.date}
              img={item.img}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </HomeComponentsLayout>
  );
};

export default News;
