import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { viewType, allGamesSelector } from 'store/slices/allGames';
import classNames from 'classnames';

import { ReactComponent as ViewRow } from 'images/Icons/ViewRow.svg';
import { ReactComponent as ViewColumn } from 'images/Icons/ViewColumn.svg';

import styles from './ViewType.module.scss';

const ViewType = () => {
  const dispatch = useDispatch();
  const activeType = useSelector(allGamesSelector.getViewType);
  const handelClick = useCallback(
    (type) => (activeType !== type ? dispatch(viewType(type)) : null),
    [activeType],
  );

  return (
    <div className={styles.wrapper}>
      <ViewRow
        className={classNames(styles.icon, {
          [styles.activeIcon]: activeType === 'row',
        })}
        onClick={() => handelClick('row')}
      />
      <ViewColumn
        className={classNames(styles.icon, {
          [styles.activeIcon]: activeType === 'column',
        })}
        onClick={() => handelClick('column')}
      />
    </div>
  );
};

export default ViewType;
