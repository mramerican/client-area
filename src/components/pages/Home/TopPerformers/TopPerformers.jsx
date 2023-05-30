import React from 'react';

import HomeComponentsLayout from 'components/Layouts/HomeComponents/HomeComponentsLayout';
import Slider from 'components/Slider/Slider';

import { data } from 'temporaryData/TopPerformers/data';
const TopPerformers = () => {
  return (
    <HomeComponentsLayout
      title="Top Performers"
      linkPath="all-games"
      linkTitle="All Games"
    >
      <Slider data={data} type="vertical" />
    </HomeComponentsLayout>
  );
};

export default TopPerformers;
