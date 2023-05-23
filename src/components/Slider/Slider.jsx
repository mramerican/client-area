import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { viewModeSelector } from 'store/slices/viewMode';

import ActiveSlide from 'components/Slider/ActiveSlide/ActiveSlide';
import Thumbnail from 'components/Slider/Thumbnail/Thumbnail';

import styles from './Slider.module.scss';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(
    {
      gameId: PropTypes.number.isRequired,
    }
  )).isRequired,
  type: PropTypes.oneOf(['vertical', 'horizontal']).isRequired
}

const findNexSlide = (data, activeSlide) => {
  const findActiveIndex = data.findIndex(item => item.gameId === activeSlide.gameId)
  if (findActiveIndex < data.length - 1) {
    return data[findActiveIndex+1]
  }

  return data[0]
}

const Slider = ({ data, type }) => {
  const [activeSlide, setActiveSlide] = useState(data[0])
  const [pause, setPause] = useState(false);
  const viewMode = useSelector(viewModeSelector.getViewMode)

  const handleClickItem = useCallback((item) => {
    setActiveSlide(item)
    setPause(false)
  }, [])
  const handleClickSlide = useCallback(() => setPause(true), [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        setActiveSlide(findNexSlide(data, activeSlide));
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [activeSlide, data, pause])

  return (
    <div className={classNames(styles.wrapper, styles[type])}>
      <ActiveSlide
        key={activeSlide.gameId}
        activeSlide={activeSlide}
        handleClick={handleClickSlide}
        viewMode={viewMode}
        type={type}
      />
      <div className={styles.thumbnails}>
        {data.map(item => <Thumbnail
          key={item.gameId}
          isActive={item.gameId === activeSlide.gameId}
          item={item}
          handleClick={handleClickItem}
          viewMode={viewMode}
          type={type}
        />)}
      </div>
    </div>
  );
};

Slider.propTypes = propTypes

export default Slider;