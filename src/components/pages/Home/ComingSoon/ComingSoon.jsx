import React from 'react';
import { useSelector } from 'react-redux';

import { viewModeSelector } from 'store/slices/viewMode';

import AnimationLayout from 'components/Layouts/Animation/AnimationLayout';
import HomeComponentsLayout from 'components/Layouts/HomeComponents/HomeComponentsLayout';
import Item from 'components/pages/Home/ComingSoon/Item/Item';

import { VIEW_MODE } from 'utils/viewMode';
import { data } from './data';

import styles from './ComingSoon.module.scss';

const ComingSoon = () => {
  const viewMode = useSelector(viewModeSelector.getViewMode);
  const imgMode = viewMode === VIEW_MODE.SIMPLE ? 'imgSmall' : 'imgLarge';

  return (
    <HomeComponentsLayout
      linkPath="roadmap"
      title="Coming soon"
      linkTitle="Go to Roadmap"
    >
      <AnimationLayout animation="fadeInRight">
        <div className={styles.wrapper}>
          {data.map((item, index) => (
            <Item item={item} imgMode={imgMode} key={index} />
          ))}
        </div>
      </AnimationLayout>
    </HomeComponentsLayout>
  );
};

export default ComingSoon;
