import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { findPatchLogin } from 'utils/pages';

import Button from 'components/MaterialUi/Button/Button';

import stylesLayout from 'components/Layouts/Login/LoginLayout.module.scss';
import styles from 'components/pages/RestorePassword/RestorePassword.module.scss';

const RestorePassword = () => {
  const [email, setUserEmail] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    navigate(findPatchLogin('restore-success'));
  };

  return (
    <>
      <div className={stylesLayout.title}>Restore password</div>
      <div className={styles.description}>
        Please enter an email linked to your account and we will send you a new
        password. If you forget the email linked to the account, please contact
        your account manager
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={stylesLayout.item}>
          <label className={stylesLayout.itemTitle}>Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <Button
          title="Get New Password"
          type="submit"
          className={stylesLayout.submit}
        />
        <Link to={findPatchLogin('login')} className={styles.loginLink}>
          Back to Log In
        </Link>
      </form>
    </>
  );
};

export default RestorePassword;
