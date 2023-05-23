import React from 'react';
import { useSelector } from 'react-redux';

import BannerLarge from 'images/HomePage/Banner/Banner_large.png';
import BannerSmall from 'images/HomePage/Banner/Banner_small.png';
import VectorLarge from 'images/HomePage/Banner/Vector_large.png';
import VectorSmall from 'images/HomePage/Banner/Vector_small.png';

import { viewModeSelector } from 'store/slices/viewMode';
import { VIEW_MODE } from 'utils/viewMode';

import styles from './Banner.module.scss'
const Banner = () => {
  const viewMode = useSelector(viewModeSelector.getViewMode)
  const banner = viewMode === VIEW_MODE.SIMPLE ? BannerSmall : BannerLarge
  const vector = viewMode === VIEW_MODE.SIMPLE ? VectorSmall : VectorLarge

  return (
    <div className={styles.wrapper} style={{ backgroundImage: `url(${banner})` }}>
      <div className={styles.title}>
        Welcome to Evoplay <span>Client Area</span>
      </div>
      <div className={styles.description}>
        Find everything you need right at your fingertips: games data, promotion materials, technical documentation, and more!
      </div>
      <div className={styles.bottomTitle}>
        Let&#39;s build the future of <span>iGaming</span> together!
      </div>
      <img src={vector} alt="Vector" className={styles.vector} />
    </div>
  );
};

export default Banner;