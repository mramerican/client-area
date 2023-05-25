import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import useToken from 'hooks/auth';
import { getRoutPatch } from 'utils/route';

const propTypes = {
  Component: PropTypes.func.isRequired,
};

const PrivateRoutes = ({ Component }) => {
  const navigate = useNavigate();
  const { token } = useToken();

  useEffect(() => {
    if (!token) {
      navigate(getRoutPatch('login'));
    }
  }, [navigate]);

  return token ? <Component /> : null;
};

PrivateRoutes.propTypes = propTypes;
export default PrivateRoutes;
