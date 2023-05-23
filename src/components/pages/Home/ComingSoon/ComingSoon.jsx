import React from 'react';
import { useSelector } from 'react-redux';

import { viewModeSelector } from 'store/slices/viewMode';

import InViewLayout from 'components/Layouts/InViewLayout';
import HomeComponentsLayout from 'components/Layouts/HomeComponentsLayout';
import ComingSoonItem from 'components/pages/Home/ComingSoon/ComingSoonItem/ComingSoonItem';

import { VIEW_MODE } from 'utils/viewMode';
import { data } from './data'

import styles from './ComingSoon.module.scss'

const ComingSoon = () => {
  const viewMode = useSelector(viewModeSelector.getViewMode)
  const imgMode = viewMode === VIEW_MODE.SIMPLE ? 'imgSmall' : 'imgLarge'

  return (
    <HomeComponentsLayout
      linkPath="roadmap"
      title="Coming soon"
      linkTitle="Go to Roadmap"
    >
      <InViewLayout styleClass={styles.fadeInRight}>
        <div className={styles.wrapper}>
          {data.map((item, index) =>
            <ComingSoonItem item={item} imgMode={imgMode} key={index} />
          )}
        </div>
      </InViewLayout>
    </HomeComponentsLayout>
  );
};

export default ComingSoon;