import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useToken from 'hooks/auth';

import { findPatchPages, findPatchLogin } from 'utils/pages';

import styles from 'components/pages/Login/Login.module.scss';
import stylesLayout from 'components/Layouts/Login/LoginLayout.module.scss';

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
          <div className={styles.remember}>
            <label>
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              Remember me
            </label>
          </div>
          <Link to={findPatchLogin('restore')} className={styles.restoreLink}>
            Forgot password
          </Link>
        </div>
        <button type="submit" className={stylesLayout.submit}>
          Sign In
        </button>
      </form>
    </>
  );
};

export default Login;
