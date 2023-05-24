import React from 'react';

import Banner from 'components/pages/Home/Banner/Banner';
import TopPerformers from 'components/pages/Home/TopPerformers/TopPerformers';
import LatestReleases from 'components/pages/Home/LatestReleases/LatestReleases';
import ComingSoon from 'components/pages/Home/ComingSoon/ComingSoon';
import UpcomingPromotions from 'components/pages/Home/UpcomingPromotions/UpcomingPromotions';
import News from 'components/pages/Home/News/News';

const Home = () => {
  return (
    <>
      <Banner />
      <TopPerformers />
      <LatestReleases />
      <ComingSoon />
      <UpcomingPromotions />
      <News />
    </>
  );
};

export default Home;
