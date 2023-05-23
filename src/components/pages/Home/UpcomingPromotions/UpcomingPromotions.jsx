import React from 'react';
import { useSelector } from 'react-redux';
import { viewModeSelector } from 'store/slices/viewMode';

import HomeComponentsLayout from 'components/Layouts/HomeComponentsLayout';
import Slider from 'components/Slider/Slider';

import { VIEW_MODE } from 'utils/viewMode';
import { data } from './data';

const UpcomingPromotions = () => {
  const viewMode = useSelector(viewModeSelector.getViewMode);
  const countSize = viewMode === VIEW_MODE.SIMPLE ? 3 : 4;

  return (
    <HomeComponentsLayout
      title="Upcoming Promotions"
      linkPath="tournaments"
      linkTitle="All Promotions"
    >
      <Slider data={data.slice(0, countSize)} type="horizontal" />
    </HomeComponentsLayout>
  );
};

export default UpcomingPromotions;
