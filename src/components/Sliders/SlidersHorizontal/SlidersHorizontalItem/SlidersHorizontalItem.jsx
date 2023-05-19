import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { viewModeSelector } from 'store/slices/viewMode';
import { VIEW_MODE } from 'utils/viewMode';

import styles from './SlidersHorizontalItem.module.scss';

const propTypes = {
  item: PropTypes.shape({
    thumbnailImgSmall: PropTypes.string.isRequired,
    thumbnailImgLarge: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
}
const SlidersHorizontalItem = ({ item, isActive, handleClick }) => {
  const viewMode = useSelector(viewModeSelector.getViewMode)
  const imgMode = viewMode === VIEW_MODE.SIMPLE ? 'thumbnailImgSmall' : 'thumbnailImgLarge'

  return (
    <div
      className={styles.wrapper}
      onClick={() => handleClick(item)}
    >
      <img src={item[imgMode]} alt="thumbnails img" />
      <div className={styles.title} dangerouslySetInnerHTML={{__html: item.title}}></div>
      {isActive && <div className={styles.progress}>
        <div className={styles.processActive}></div>
        <div className={styles.processProgress}></div>
      </div>}
    </div>
  );
};

SlidersHorizontalItem.propTypes = propTypes;
export default SlidersHorizontalItem;