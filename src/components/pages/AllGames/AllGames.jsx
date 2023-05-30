import classNames from 'classnames';
import GameItem from 'components/GameItem/GameItem';

import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';
import { viewModeSelector } from 'store/slices/viewMode';

import { data } from 'temporaryData/AllGames/data';
import { VIEW_MODE } from 'utils/viewMode';
import styles from './AllGames.module.scss';

const AllGames = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ref, inView] = useInView({});
  const viewMode = useSelector(viewModeSelector.getViewMode);

  const countSize = viewMode === VIEW_MODE.SIMPLE ? 15 : 18;

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
    if (inView) {
      const fetchItems = (async () => await fetch(currentPage))();
      fetchItems
        .then((results) => {
          if (results.length) {
            setCurrentPage((prevState) => prevState + 1);
            setItems((prevState) => prevState.concat(results));
          }

          if (!results.length || results.length < countSize) {
            setLoading(false);
          }
        })
        .catch(console.error);
    }
  }, [inView]);

  return (
    <>
      <div className={styles.header}>header</div>
      <div
        className={classNames(styles.content, { [styles.loading]: loading })}
      >
        {items.map((item) => (
          <GameItem key={item.id} item={item} style={styles.gameItemWrapper} />
        ))}
      </div>
      <div ref={ref}>{loading && <Loader />}</div>
    </>
  );
};

export default AllGames;
