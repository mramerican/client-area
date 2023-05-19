import React from 'react';
import SlidersHorizontal from 'components/Sliders/SlidersHorizontal/SlidersHorizontal';
import ArrowCircleLink from 'components/pages/Home/ArrowCircleLink/ArrowCircleLink';
import { findPatch } from 'utils/pages';

import { data } from 'components/pages/Home/TopPerformers/data'
import styles from './TopPerformers.module.scss'
const TopPerformers = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>Top Performers</div>
        <ArrowCircleLink title="All Games" path={findPatch('all-games')} />
      </div>
      <SlidersHorizontal data={data} />
    </div>
  );
};

export default TopPerformers;