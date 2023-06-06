import React from 'react';
import PropTypes from 'prop-types';

import { Button as MuiButton, styled } from '@mui/material';

const propTypes = {
  link: PropTypes.string,
  onClick: PropTypes.func,
  myheight: PropTypes.number,
  title: PropTypes.string.isRequired,
};
const defaultProps = {
  link: '',
  onClick: null,
  myheight: 40,
};

const CustomButton = styled(MuiButton)(({ myheight }) => ({
  color: '#FFF',
  backgroundColor: '#0099FA',
  borderRadius: 12,
  fontSize: 14,
  lineHeight: '24px',
  fontWeight: 400,
  textTransform: 'none',
  gridArea: 'btn',
  border: 'none',
  height: myheight,
  '&:hover': {
    backgroundColor: '#0069FF',
    border: 'none',
  },
}));

const Button = ({ title, ...props }) => {
  return (
    <CustomButton variant="outlined" {...props}>
      {title}
    </CustomButton>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;
