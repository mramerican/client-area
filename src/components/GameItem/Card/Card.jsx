import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Type from 'components/GameItem/Type/Type';
import GameId from 'components/GameId/GameId';
import Checkbox from 'components/MaterialUi/Checkbox/Checkbox';

import { useSelector } from 'react-redux';
import { allGamesSelector } from 'store/slices/allGames';

import styles from 'components/GameItem/Card/Card.module.scss';

const propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func,
  checkbox: PropTypes.bool,
  style: PropTypes.string,
};
const defaultProps = {
  item: {
    type: null,
  },
  style: null,
  checkbox: false,
  onClick: () => {},
};

const Card = ({
  item: { img, title, category, id, type },
  style,
  checkbox,
  onClick,
}) => {
  const isCheckedAll = useSelector(allGamesSelector.getSelectAll);
  const checkedItems = useSelector(allGamesSelector.getSelectedItems);

  return (
    <div className={classNames(styles.wrapper, style)}>
      <div className={styles.imgWrapper}>
        <img src={img} alt={title} />
        {type && <Type type={type} />}
        {checkbox && (
          <Checkbox
            isOpacity
            checked={isCheckedAll || checkedItems.includes(id)}
            className={styles.checkbox}
            onChange={(event) => onClick(id, event.target.checked)}
          />
        )}
      </div>
      <div className={styles.categoryWrapper}>
        <span className={styles.category}>{category}</span>
        <GameId gameId={id} copyStyles={styles.copy} />
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
export default Card;
