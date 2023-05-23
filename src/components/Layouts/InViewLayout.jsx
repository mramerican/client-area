import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useInView } from 'react-intersection-observer';

const propTypes = {
  options: PropTypes.shape({
    threshold: PropTypes.number,
    triggerOnce: PropTypes.bool,
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  styleClass: PropTypes.string.isRequired,
};

const defaultProps = {
  options: {
    threshold: 0,
    triggerOnce: true,
  },
};

const InViewLayout = ({ options, children, styleClass }) => {
  const [ref, inView] = useInView(options);

  return (
    <div ref={ref} className={classNames({ [styleClass]: inView })}>
      {children}
    </div>
  );
};

InViewLayout.propTypes = propTypes;
InViewLayout.defaultProps = defaultProps;

export default InViewLayout;
