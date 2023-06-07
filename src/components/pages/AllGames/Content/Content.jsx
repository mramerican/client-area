import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

import Card from 'components/GameItem/Card/Card';
import FullInfo from 'components/GameItem/FullInfo/FullInfo';
import Loader from 'components/Loader/Loader';

import {
  allGamesSelector,
  selectItem,
  unSelectItem,
} from 'store/slices/allGames';
import { viewModeSelector } from 'store/slices/viewMode';

import { VIEW_MODE } from 'utils/viewMode';
import { data } from 'temporaryData/AllGames/data';

import styles from './Content.module.scss';

const Content = () => {
  const dispatch = useDispatch();
  const [showLoading, setShowLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [process, setProcess] = useState(false);
  const [ref, inView] = useInView({});
  const viewMode = useSelector(viewModeSelector.getViewMode);
  const viewType = useSelector(allGamesSelector.getViewType);

  const countElements =
    viewType === 'row' || viewMode === VIEW_MODE.SIMPLE ? 15 : 18;
  const GameComponent = viewType === 'row' ? FullInfo : Card;
  const imgSize = viewType === 'row' ? 'imgLarge' : 'imgSmall';

  const handleClickCheckbox = useCallback((itemId, isChecked) => {
    if (isChecked) {
      dispatch(selectItem(itemId));
    } else {
      dispatch(unSelectItem(itemId));
    }
  }, []);

  const fetch = (currentPage) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const grabData = data.slice(
          (currentPage - 1) * countElements,
          countElements * currentPage,
        );
        resolve(grabData);
      }, 3000);
    });
  };

  useEffect(() => {
    if (inView && !process) {
      setProcess(true);
      const fetchItems = (async () => await fetch(currentPage))();
      fetchItems
        .then((results) => {
          if (results.length) {
            setCurrentPage((prevState) => prevState + 1);
            setItems((prevState) => prevState.concat(results));
          }

          if (!results.length || results.length < countElements) {
            setShowLoading(false);
          } else {
            setProcess(false);
          }
        })
        .catch(console.error);
    }
  }, [inView]);

  return (
    <>
      <div
        className={classNames(styles.wrapper, {
          [styles.loading]: showLoading,
          [styles.card]: viewType === 'column',
          [styles.fullInfo]: viewType === 'row',
        })}
      >
        {items.map((item) => (
          <GameComponent
            key={item.id}
            item={{ img: item[imgSize], ...item }}
            style={styles.gameItemWrapper}
            checkbox
            onClick={handleClickCheckbox}
          />
        ))}
      </div>
      <div ref={ref}>{showLoading && <Loader />}</div>
    </>
  );
};

export default Content;
