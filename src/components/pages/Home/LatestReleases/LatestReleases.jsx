import React from 'react';
import { useSelector } from 'react-redux';

import { viewModeSelector } from 'store/slices/viewMode';

import AnimationLayout from 'components/Layouts/Animation/AnimationLayout';
import HomeComponentsLayout from 'components/Layouts/HomeComponents/HomeComponentsLayout';
import GameItem from 'components/GameItem/GameItem';

import { VIEW_MODE } from 'utils/viewMode';
import { data } from './data';

import styles from './LatestReleases.module.scss';

const LatestReleases = () => {
  const viewMode = useSelector(viewModeSelector.getViewMode);
  const countSize = viewMode === VIEW_MODE.SIMPLE ? 5 : 6;

  return (
    <HomeComponentsLayout
      linkPath="all-games"
      title="Latest Releases"
      linkTitle="All Games"
      styleWrapper={styles.wrapper}
      styleHeader={styles.header}
    >
      <AnimationLayout animation="fadeInLeft">
        <div className={styles.content}>
          {data.slice(0, countSize).map((item) => (
            <GameItem
              key={item.id}
              item={item}
              style={styles.gameItemWrapper}
            />
          ))}
        </div>
      </AnimationLayout>
    </HomeComponentsLayout>
  );
};

export default LatestReleases;
