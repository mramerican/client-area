import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ReactComponent as CopyId } from 'images/Icons/CopyId.svg';

import styles from './GameId.module.scss';

const propTypes = {
  gameId: PropTypes.number.isRequired,
  copyStyles: PropTypes.string
}

const defaultProps = {
  copyStyles: null
}

const GameId = ({ gameId, copyStyles }) => {
  const [isCopy, setIsCopy] = useState(false)

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(gameId).then(() => setIsCopy(true))
  }, [gameId])

  return (
    <span className={styles.wrapper} onClick={copyToClipboard}>
      <span className={styles.number}>ID {gameId}</span>
      {isCopy && <span className={styles.checkIcon}></span>}
      {!isCopy && <CopyId className={classNames(styles.copy, copyStyles)} />}
    </span>
  );
};

GameId.propTypes = propTypes
GameId.defaultProps = defaultProps
export default GameId;