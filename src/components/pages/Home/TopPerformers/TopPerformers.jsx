import React from 'react';

import HomeComponentsLayout from 'components/Layouts/HomeComponentsLayout';
import Slider from 'components/Slider/Slider';

import { data } from 'components/pages/Home/TopPerformers/data'
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