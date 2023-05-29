import React from 'react';

import AnimationLayout from 'components/Layouts/Animation/AnimationLayout';
import HomeComponentsLayout from 'components/Layouts/HomeComponents/HomeComponentsLayout';
import Item from 'components/pages/Home/ComingSoon/Item/Item';

import { data } from './data';

import styles from './ComingSoon.module.scss';

const ComingSoon = () => (
  <HomeComponentsLayout
    linkPath="roadmap"
    title="Coming soon"
    linkTitle="Go to Roadmap"
    styleWrapper={styles.wrapper}
    styleHeader={styles.header}
  >
    <AnimationLayout animation="fadeInRight">
      <div className={styles.content}>
        {data.map((item, index) => (
          <Item item={item} key={index} />
        ))}
      </div>
    </AnimationLayout>
  </HomeComponentsLayout>
);

export default ComingSoon;
