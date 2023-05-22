import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import GameId from 'components/GameId/GameId';

import { VIEW_MODE } from 'utils/viewMode';

import styles from './SlidersHorizontalActive.module.scss';

const propTypes = {
  activeSlide: PropTypes.shape({
    imgSmall: PropTypes.string.isRequired,
    imgLarge: PropTypes.string.isRequired,
    banner: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  viewMode: PropTypes.string.isRequired
}

const SlidersHorizontalActive = ({ activeSlide, handleClick, viewMode }) => {
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
          <span className={styles.videoSlot}>{activeSlide.category}</span>
          <GameId gameId={activeSlide.id} />
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