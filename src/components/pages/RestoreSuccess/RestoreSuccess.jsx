import React from 'react';
import { Link } from 'react-router-dom';

import { findPatchLogin } from 'utils/pages';

import Button from 'components/MaterialUi/Button/Button';

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
      <Button
        title="Go to Log In"
        type="submit"
        className={stylesLayout.submit}
        component={Link}
        to={findPatchLogin('login')}
      />
    </>
  );
};

export default RestoreSuccess;
