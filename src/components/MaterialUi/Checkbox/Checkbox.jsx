import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox as MuiCheckbox, styled } from '@mui/material';

const propTypes = {
  isOpacity: PropTypes.bool,
};
const defaultProps = {
  isOpacity: false,
};

const defaultConfig = {
  borderRadius: 4,
  width: 20,
  height: 20,
};

const Icon = styled('span')({
  ...defaultConfig,
  border: '1px solid rgba(169,174,180,.5)',
  backgroundColor: '#FFFFFF',
  'input:hover ~ &': {
    borderColor: '#0099FA',
  },
});

const IconOpacity = styled('span')({
  ...defaultConfig,
  border: '1px solid #FFFFFF',
  backgroundColor: 'rgba(255,255,255,.5)',
  'input:hover ~ &': {
    backgroundColor: 'rgba(255,255,255,.8)',
    borderColor: '#0099FA',
  },
});

const CheckedIcon = styled(Icon)({
  backgroundColor: '#FFFFFF',
  borderColor: '#0099FA',
  '&:after': {
    display: 'block',
    content: '""',
    width: 7,
    height: 12,
    boxSizing: 'border-box',
    position: 'absolute',
    left: 13.5,
    top: 8,
    borderColor: '#0099FA',
    borderWidth: '0 2px 2px 0',
    borderStyle: 'solid',
    transformOrigin: 'bottom left',
    transform: 'rotate(45deg)',
  },
  'input:hover ~ &': {
    backgroundColor: '#FFFFFF',
  },
});

const Checkbox = ({ isOpacity, ...props }) => (
  <MuiCheckbox
    name="MuiCheckbox"
    icon={isOpacity ? <IconOpacity /> : <Icon />}
    checkedIcon={<CheckedIcon />}
    {...props}
  />
);

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;
export default Checkbox;
