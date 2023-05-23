import InViewLayout from 'components/Layouts/InViewLayout';
import React from 'react';
import { useSelector } from 'react-redux';

import { viewModeSelector } from 'store/slices/viewMode';

import HomeComponentsLayout from 'components/Layouts/HomeComponentsLayout';
import LatestReleasesItem from 'components/pages/Home/LatestReleases/LatestReleasesItem/LatestReleasesItem';

import { VIEW_MODE } from 'utils/viewMode';
import { data } from './data'

import styles from './LatestReleases.module.scss'

const LatestReleases = () => {
  const viewMode = useSelector(viewModeSelector.getViewMode)

  const imgMode = viewMode === VIEW_MODE.SIMPLE ? 'imgSmall' : 'imgLarge'
  const countSize = viewMode === VIEW_MODE.SIMPLE ? 5 : 6

  return (
    <HomeComponentsLayout
      linkPath="all-games"
      title="Latest Releases"
      linkTitle="All Games"
    >
      <InViewLayout styleClass={styles.fadeInLeft}>
        <div className={styles.wrapper}>
          {data.slice(0, countSize).map((item) =>
            <LatestReleasesItem item={item} imgMode={imgMode} key={item.id} />
          )}
        </div>
      </InViewLayout>
    </HomeComponentsLayout>
  );
};

export default LatestReleases;