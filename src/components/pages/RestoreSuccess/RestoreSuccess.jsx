import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import { findPatchLogin } from 'utils/pages';

import stylesLayout from 'components/Layouts/Login/LoginLayout.module.scss';
import styles from './RestoreSuccess.module.scss';

const RestoreSuccess = () => {
  return (
    <>
      <i className={styles.icon}></i>
      <div className={stylesLayout.title}>
        Reset password link has been sent to your email
      </div>
      <div className={styles.subTitle}>
        Please follow steps provided in the email.
      </div>
      <Link
        to={findPatchLogin('login')}
        className={classNames(stylesLayout.submit, styles.submit)}
      >
        Go to Log In
      </Link>
    </>
  );
};

export default RestoreSuccess;
