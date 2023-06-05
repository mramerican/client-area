import Checkbox from 'components/MaterialUi/Checkbox/Checkbox';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Type from 'components/GameItem/Type/Type';
import GameId from 'components/GameId/GameId';

import styles from 'components/GameItem/Card/Card.module.scss';

const propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.string,
  }).isRequired,
  checkbox: PropTypes.shape({
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
  }),
  style: PropTypes.string,
};
const defaultPropTypes = {
  item: {
    type: null,
  },
  style: null,
  checkbox: null,
};

const Card = ({
  item: { img, title, category, id, type },
  style,
  checkbox,
}) => (
  <div className={classNames(styles.wrapper, style)}>
    <img src={img} alt={title} />
    {type && <Type type={type} style={styles.typeWrapper} />}
    {checkbox && <Checkbox {...checkbox} />}
    <div className={styles.categoryWrapper}>
      <span className={styles.category}>{category}</span>
      <GameId gameId={id} copyStyles={styles.copy} />
    </div>
    <div className={styles.title}>{title}</div>
  </div>
);

Card.propTypes = propTypes;
Card.defaultPropTypes = defaultPropTypes;
export default Card;
