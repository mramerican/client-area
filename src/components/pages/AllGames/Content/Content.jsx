import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

import Card from 'components/GameItem/Card/Card';
import FullInfo from 'components/GameItem/FullInfo/FullInfo';
import Loader from 'components/Loader/Loader';

import { viewModeSelector } from 'store/slices/viewMode';
import { data } from 'temporaryData/AllGames/data';
import { VIEW_MODE } from 'utils/viewMode';

import styles from './Content.module.scss';

const Content = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [process, setProcess] = useState(false);
  const [ref, inView] = useInView({});
  const viewMode = useSelector(viewModeSelector.getViewMode);

  // const typeView = 'card';
  const typeView = 'fullInfo';
  let countSize = 10;
  let GameItem = FullInfo;

  if (typeView === 'card') {
    countSize = viewMode === VIEW_MODE.SIMPLE ? 15 : 18;
    GameItem = Card;
  }

  const fetch = (currentPage) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const grabData = data.slice(
          (currentPage - 1) * countSize,
          countSize * currentPage,
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

          if (!results.length || results.length < countSize) {
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
          [styles.card]: typeView === 'card',
          [styles.fullInfo]: typeView === 'fullInfo',
        })}
      >
        {items.map((item) => (
          <GameItem
            key={item.id}
            item={item}
            style={styles.gameItemWrapper}
            checkbox={{}}
          />
        ))}
      </div>
      <div ref={ref}>{showLoading && <Loader />}</div>
    </>
  );
};

export default Content;
