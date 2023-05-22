import React from 'react';
import { useSelector } from 'react-redux';
import { viewModeSelector } from 'store/slices/viewMode';

import HomeComponentsLayout from 'components/Layouts/HomeComponentsLayout';
import ComingSoonItem from 'components/pages/Home/ComingSoon/ComingSoonItem/ComingSoonItem';

import { VIEW_MODE } from 'utils/viewMode';
import { data } from './data'

import styles from 'components/pages/Home/ComingSoon/ComingSoon.module.scss'

const ComingSoon = () => {
  const viewMode = useSelector(viewModeSelector.getViewMode)
  const imgMode = viewMode === VIEW_MODE.SIMPLE ? 'imgSmall' : 'imgLarge'

  return (
    <HomeComponentsLayout
      linkPath="roadmap"
      title="Coming soon"
      linkTitle="Go to Roadmap"
    >
      <div className={styles.wrapper}>
        {data.map((item, index) =>
          <ComingSoonItem item={item} imgMode={imgMode} key={index} />
        )}
      </div>
    </HomeComponentsLayout>
  );
};

export default ComingSoon;