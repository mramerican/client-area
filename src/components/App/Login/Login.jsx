import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginLayout from 'components/Layouts/Login/LoginLayout';
import { LoginPages } from 'components/pages';

const Login = () => (
  <LoginLayout>
    <Routes>
      {Object.keys(Login).map((key) => (
        <Route {...Login[key]} key={key} />
      ))}
      <Route path="*" element={LoginPages.login.element} />
    </Routes>
  </LoginLayout>
);
export default Login;
