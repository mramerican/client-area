import React from 'react';
import classNames from 'classnames';

import Content from 'components/pages/AllGames/Content/Content';
import Sort from 'components/pages/AllGames/Sort/Sort';
import ViewType from 'components/pages/AllGames/ViewType/ViewType';
import Filters from 'components/pages/AllGames/Filters/Filters';

import { useSelector } from 'react-redux';
import { allGamesSelector } from 'store/slices/allGames';

import styles from './AllGames.module.scss';

const AllGames = () => {
  const viewType = useSelector(allGamesSelector.getViewType);

  return (
    <>
      <div className={styles.wrapperHeader}>
        <div className={styles.wrapperFilters}>
          <div className={styles.filters}>
            <Filters />
          </div>
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
