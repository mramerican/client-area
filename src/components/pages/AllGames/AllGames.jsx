import ViewType from 'components/pages/AllGames/ViewType/ViewType';
import React from 'react';

import Content from 'components/pages/AllGames/Content/Content';
import Sort from 'components/pages/AllGames/Sort/Sort';

import styles from './AllGames.module.scss';

const AllGames = () => {
  return (
    <>
      <div className={styles.wrapperHeader}>
        <div className={styles.wrapperFilters}>
          <div className={styles.filters}>filters</div>
        </div>
        <div className={styles.wrapperSort}>
          <div className={styles.contentSort}>
            <Sort />
            <ViewType />
          </div>
        </div>
      </div>
      <Content />
    </>
  );
};

export default AllGames;
