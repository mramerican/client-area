import React from 'react';
import PropTypes from 'prop-types';
import { getType } from 'utils/gameItem';

import styles from './Type.module.scss';

const propTypes = {
  type: PropTypes.string.isRequired,
};

const Type = ({ type }) => {
  const typeConfig = getType(type);

  if (!typeConfig) {
    return null;
  }

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: typeConfig.color }}
    >
      {typeConfig.icon && typeConfig.icon({ className: styles.icon })}
      {type}
    </div>
  );
};

Type.propTypes = propTypes;
export default Type;
