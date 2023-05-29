import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import GameId from 'components/GameId/GameId';

import styles from 'components/GameItem/GameItem.module.scss';

const propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  style: PropTypes.string,
};
const defaultPropTypes = {
  style: null,
};

const GameItem = ({ item: { img, title, category, id }, style }) => (
  <div className={classNames(styles.wrapper, style)}>
    <img src={img} alt={title} />
    <div className={styles.content}>
      <span className={styles.videoSlot}>{category}</span>
      <GameId gameId={id} copyStyles={styles.copy} />
    </div>
    <div className={styles.title}>{title}</div>
  </div>
);

GameItem.propTypes = propTypes;
GameItem.defaultPropTypes = defaultPropTypes;
export default GameItem;
