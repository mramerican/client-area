import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useInView } from 'react-intersection-observer';
import styles from 'styles/animation.scss';

const propTypes = {
  options: PropTypes.shape({
    threshold: PropTypes.number,
    triggerOnce: PropTypes.bool,
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  animation: PropTypes.string.isRequired,
};

const defaultProps = {
  options: {
    threshold: 0,
    triggerOnce: true,
  },
};

const AnimationLayout = ({ options, children, animation }) => {
  const [ref, inView] = useInView(options);

  return (
    <div ref={ref} className={classNames({ [styles[animation]]: inView })}>
      {children}
    </div>
  );
};

AnimationLayout.propTypes = propTypes;
AnimationLayout.defaultProps = defaultProps;

export default AnimationLayout;
