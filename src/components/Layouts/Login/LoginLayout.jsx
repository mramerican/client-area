import React from 'react';
import PropTypes from 'prop-types';

import Logo from 'images/Logo/LogoLogin.png';
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
      <div className={styles.logo}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

LoginLayout.propTypes = propTypes;
export default LoginLayout;
