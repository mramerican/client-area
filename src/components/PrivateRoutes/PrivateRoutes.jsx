import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { getIsLoggedIn } from 'utils/auth';
import { getRoutPatch } from 'utils/route';

const propTypes = {
  Component: PropTypes.func.isRequired,
};

const PrivateRoutes = ({ Component }) => {
  const navigate = useNavigate();
  const isLoggedIn = getIsLoggedIn();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(getRoutPatch('login'));
    }
  }, [navigate]);

  return isLoggedIn ? <Component /> : null;
};

PrivateRoutes.propTypes = propTypes;
export default PrivateRoutes;
