import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useToken from 'hooks/auth';

import { findPatchPages, findPatchLogin } from 'utils/pages';

import Button from 'components/MaterialUi/Button/Button';
import Checkbox from 'components/MaterialUi/Checkbox/Checkbox';
import FormControlLabel from 'components/MaterialUi/FormControlLabel/FormControlLabel';

import stylesLayout from 'components/Layouts/Login/LoginLayout.module.scss';
import styles from 'components/pages/Login/Login.module.scss';

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [remember, setRemember] = useState(true);

  const { setToken } = useToken();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setToken(JSON.stringify({ username, password }), remember);
    navigate(findPatchPages('home'), { replace: true });
  };

  return (
    <>
      <div className={stylesLayout.title}>Log In</div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={stylesLayout.item}>
          <label className={stylesLayout.itemTitle}>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className={stylesLayout.item}>
          <label className={stylesLayout.itemTitle}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.rememberBlock}>
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                onChange={() => setRemember(!remember)}
              />
            }
            label="Remember me"
            typeTheme="Login"
          />
          <Link to={findPatchLogin('restore')} className={styles.restoreLink}>
            Forgot password
          </Link>
        </div>
        <Button title="Sign In" type="submit" className={stylesLayout.submit} />
      </form>
    </>
  );
};

export default Login;
