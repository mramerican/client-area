import React from 'react';

import HomeComponentsLayout from 'components/Layouts/HomeComponentsLayout';
import SlidersHorizontal from 'components/Sliders/SlidersHorizontal/SlidersHorizontal';

import { data } from 'components/pages/Home/TopPerformers/data'
const TopPerformers = () => {
  return (
    <HomeComponentsLayout
      title="Top Performers"
      linkPath="all-games"
      linkTitle="All Games"
    >
      <SlidersHorizontal data={data} />
    </HomeComponentsLayout>
  );
};

export default TopPerformers;