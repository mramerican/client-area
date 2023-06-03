import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getType } from 'utils/gameItem';
import styles from './Type.module.scss';

const propTypes = {
  type: PropTypes.string.isRequired,
  style: PropTypes.string,
};
const defaultPropTypes = {
  styles: null,
};

const Type = ({ type, style }) => {
  const typeConfig = getType(type);

  if (!typeConfig) {
    return null;
  }

  return (
    <div
      className={classNames(styles.wrapper, style)}
      style={{ backgroundColor: typeConfig.color }}
    >
      {typeConfig.icon && typeConfig.icon({ className: styles.icon })}
      {type}
    </div>
  );
};

Type.propTypes = propTypes;
Type.defaultPropTypes = defaultPropTypes;
export default Type;
