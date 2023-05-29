import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from 'components/Slider/Thumbnail/Thumbnail.module.scss';

const propTypes = {
  item: PropTypes.shape({
    thumbnailImg: PropTypes.string.isRequired,
    thumbnailTitle: PropTypes.string,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['vertical', 'horizontal']).isRequired,
};
const Thumbnail = ({ item, isActive, handleClick, type }) => (
  <div
    className={classNames(styles.wrapper, styles[type], {
      [styles.active]: isActive,
    })}
    onClick={() => handleClick(item)}
  >
    <img src={item.thumbnailImg} alt="thumbnails img" />
    {item.thumbnailTitle && (
      <div
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: item.thumbnailTitle }}
      ></div>
    )}
    {isActive && (
      <div className={styles.progress}>
        <div className={styles.processActive}></div>
        <div className={styles.processProgress}></div>
      </div>
    )}
  </div>
);
Thumbnail.propTypes = propTypes;
export default Thumbnail;
