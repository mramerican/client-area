import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Logo } from 'images/Logo/LogoLogin.svg';
import styles from './LoginLayout.module.scss';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const LoginLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Logo className={styles.logo} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

LoginLayout.propTypes = propTypes;
export default LoginLayout;
