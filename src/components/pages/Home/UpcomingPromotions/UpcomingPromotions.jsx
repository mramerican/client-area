import React from 'react';
import { useSelector } from 'react-redux';
import { viewModeSelector } from 'store/slices/viewMode';

import HomeComponentsLayout from 'components/Layouts/HomeComponents/HomeComponentsLayout';
import AnimationLayout from 'components/Layouts/Animation/AnimationLayout';
import Slider from 'components/Slider/Slider';

import { VIEW_MODE } from 'utils/viewMode';
import { data } from 'temporaryData/UpcomingPromotions/data';

import styles from './UpcomingPromotions.module.scss';

const UpcomingPromotions = () => {
  const viewMode = useSelector(viewModeSelector.getViewMode);
  const countSize = viewMode === VIEW_MODE.SIMPLE ? 3 : 4;

  return (
    <HomeComponentsLayout
      title="Upcoming Promotions"
      linkPath="tournaments"
      linkTitle="All Promotions"
      styleWrapper={styles.wrapper}
      styleHeader={styles.header}
    >
      <AnimationLayout animation="fadeInUp">
        <div className={styles.content}>
          <Slider data={data.slice(0, countSize)} type="horizontal" />
        </div>
      </AnimationLayout>
    </HomeComponentsLayout>
  );
};

export default UpcomingPromotions;
