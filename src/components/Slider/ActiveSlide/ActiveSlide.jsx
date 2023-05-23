import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import GameId from 'components/GameId/GameId';

import { VIEW_MODE } from 'utils/viewMode';

import styles from 'components/Slider/ActiveSlide/ActiveSlide.module.scss';

const propTypes = {
  activeSlide: PropTypes.shape({
    imgSmall: PropTypes.string.isRequired,
    imgLarge: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    gameId: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    banner: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  viewMode: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['vertical', 'horizontal']).isRequired,
};

const ActiveSlide = ({ activeSlide, handleClick, viewMode, type }) => {
  const imgMode = viewMode === VIEW_MODE.SIMPLE ? 'imgSmall' : 'imgLarge';

  return (
    <div
      className={classNames(styles.wrapper, styles[type])}
      style={{ backgroundImage: `url(${activeSlide[imgMode]})` }}
      onClick={handleClick}
    >
      <div className={styles.gradient}>
        {activeSlide.banner && (
          <img
            src={activeSlide.banner}
            alt="active slide"
            className={styles.banner}
          />
        )}
        <div className={styles.content}>
          <span className={styles.category}>{activeSlide.category}</span>
          {type === 'vertical' && <GameId gameId={activeSlide.gameId} />}
        </div>
        {activeSlide.title && (
          <div
            dangerouslySetInnerHTML={{ __html: activeSlide.title }}
            className={styles.title}
          ></div>
        )}
        {activeSlide.date && (
          <div className={styles.date}>{activeSlide.date}</div>
        )}
        <div className={styles.description}>{activeSlide.description}</div>
        <Link className={styles.moreBtn} to={activeSlide.link}>
          Learn more
        </Link>
      </div>
    </div>
  );
};

ActiveSlide.propTypes = propTypes;

export default ActiveSlide;
