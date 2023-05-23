import React from 'react';

import Banner from 'components/pages/Home/Banner/Banner';
import TopPerformers from 'components/pages/Home/TopPerformers/TopPerformers';
import LatestReleases from 'components/pages/Home/LatestReleases/LatestReleases';
import ComingSoon from 'components/pages/Home/ComingSoon/ComingSoon';
import UpcomingPromotions from 'components/pages/Home/UpcomingPromotions/UpcomingPromotions';

const Home = () => {
  return (
    <>
      <Banner />
      <TopPerformers />
      <LatestReleases />
      <ComingSoon />
      <UpcomingPromotions />
    </>
  );
};

export default Home;