import classNames from 'classnames';
import React from 'react';

import Content from 'components/pages/AllGames/Content/Content';
import Sort from 'components/pages/AllGames/Sort/Sort';
import ViewType from 'components/pages/AllGames/ViewType/ViewType';

import { useSelector } from 'react-redux';
import { allGamesSelector } from 'store/slices/allGames';

import styles from './AllGames.module.scss';

const AllGames = () => {
  const viewType = useSelector(allGamesSelector.getViewType);

  return (
    <>
      <div className={styles.wrapperHeader}>
        <div className={styles.wrapperFilters}>
          <div className={styles.filters}>filters</div>
        </div>
        <div className={styles.wrapperSort}>
          <div
            className={classNames(styles.contentSort, {
              [styles.columnType]: viewType === 'column',
            })}
          >
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
