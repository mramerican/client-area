import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { viewModeSelector } from 'store/slices/viewMode';

import Loader from 'components/Loader/Loader';
import Card from 'components/GameItem/Card/Card';
import FullInfo from 'components/GameItem/FullInfo/FullInfo';

import { data } from 'temporaryData/AllGames/data';
import { VIEW_MODE } from 'utils/viewMode';
import styles from './AllGames.module.scss';

const AllGames = () => {
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
      <div className={styles.header}>header</div>
      <div
        className={classNames(styles.content, {
          [styles.loading]: showLoading,
          [styles.card]: typeView === 'card',
          [styles.fullInfo]: typeView === 'fullInfo',
        })}
      >
        {items.map((item) => (
          <GameItem key={item.id} item={item} style={styles.gameItemWrapper} />
        ))}
      </div>
      <div ref={ref}>{showLoading && <Loader />}</div>
    </>
  );
};

export default AllGames;
