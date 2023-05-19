import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ReactComponent as CopyId } from 'images/Icons/CopyId.svg';

import { viewModeSelector } from 'store/slices/viewMode';
import { VIEW_MODE } from 'utils/viewMode';

import styles from './SlidersHorizontalActive.module.scss';

const propTypes = {
  activeSlide: PropTypes.shape({
    imgSmall: PropTypes.string.isRequired,
    imgLarge: PropTypes.string.isRequired,
    banner: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired
}

const SlidersHorizontalActive = ({ activeSlide, handleClick }) => {
  const [isCopy, setIsCopy] = useState(false)
  const viewMode = useSelector(viewModeSelector.getViewMode)

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(activeSlide.id).then(_ => setIsCopy(true))
  }, [activeSlide.id])

  const imgMode = viewMode === VIEW_MODE.SIMPLE ? 'imgSmall' : 'imgLarge'

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${activeSlide[imgMode]})` }}
      onClick={handleClick}
    >
      <div className={styles.gradient}>
        <img src={activeSlide.banner} alt="active slide" className={styles.banner} />
        <div className={styles.content}>
          <span className={styles.videoSlot}>Video slot</span>
          <span className={styles.gameId} onClick={copyToClipboard}>
              <span className={styles.number}>ID {activeSlide.id}</span>
            {isCopy && <span className={styles.checkIcon}></span>}
            {!isCopy && <CopyId className={styles.copy} />}
            </span>
        </div>
        <div className={styles.description}>
          {activeSlide.description}
        </div>
        <Link className={styles.moreBtn} to={activeSlide.link}>Learn more</Link>
      </div>
    </div>
  );
};

SlidersHorizontalActive.propTypes = propTypes;

export default SlidersHorizontalActive;