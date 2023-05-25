import React from 'react';

import Pages from 'components/App/Pages/Pages';
import Login from 'components/App/Login/Login';

import useToken from 'hooks/auth';

import 'styles/main.scss';

const App = () => {
  const { token } = useToken();

  if (!token) {
    return <Login />;
  }

  return <Pages />;
};

export default App;
