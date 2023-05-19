import SlidersHorizontalActive
  from 'components/Sliders/SlidersHorizontal/SlidersHorizontalActive/SlidersHorizontalActive';
import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';


import SlidersHorizontalItem from 'components/Sliders/SlidersHorizontal/SlidersHorizontalItem/SlidersHorizontalItem';

import styles from './SlidersHorizontal.module.scss';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      thumbnailImgSmall: PropTypes.string.isRequired,
      thumbnailImgLarge: PropTypes.string.isRequired,
      imgSmall: PropTypes.string.isRequired,
      imgLarge: PropTypes.string.isRequired,
      banner: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }
  )).isRequired
}

const findNexSlide = (data, activeSlide) => {
  const findActiveIndex = data.findIndex(item => item.id === activeSlide.id)
  if (findActiveIndex < data.length - 1) {
    return data[findActiveIndex+1]
  }

  return data[0]
}

const SlidersHorizontal = ({ data }) => {
  const [activeSlide, setActiveSlide] = useState(data[0])
  const [pause, setPause] = useState(false);

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
    <div className={styles.wrapper}>
      <SlidersHorizontalActive
        key={activeSlide.id}
        activeSlide={activeSlide}
        handleClick={handleClickSlide}
      />
      <div className={styles.thumbnails}>
        {data.map(item => <SlidersHorizontalItem
          key={item.id}
          isActive={item.id === activeSlide.id}
          item={item}
          handleClick={handleClickItem}
        />)}
      </div>
    </div>
  );
};

SlidersHorizontal.propTypes = propTypes

export default SlidersHorizontal;