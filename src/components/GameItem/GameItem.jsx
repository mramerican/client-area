import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Type from 'components/GameItem/Type/Type';
import GameId from 'components/GameId/GameId';

import styles from 'components/GameItem/GameItem.module.scss';

const propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.string,
  }).isRequired,
  style: PropTypes.string,
};
const defaultPropTypes = {
  item: {
    type: null,
  },
  style: null,
};

const GameItem = ({ item: { img, title, category, id, type }, style }) => (
  <div className={classNames(styles.wrapper, style)}>
    <img src={img} alt={title} />
    {type && <Type type={type} />}
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
