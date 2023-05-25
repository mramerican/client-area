import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useToken from 'hooks/auth';

import { findPatch } from 'utils/pages';

import styles from './Login.module.scss';

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const { setToken } = useToken();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setToken(JSON.stringify({ username, password }));
    navigate(findPatch('home'));
  };

  return (
    <>
      <div className={styles.title}>Log In</div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.item}>
          <label className={styles.itemTitle}>Username</label>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div className={styles.item}>
          <label className={styles.itemTitle}>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.submit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
