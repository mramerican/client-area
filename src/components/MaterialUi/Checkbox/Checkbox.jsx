import React from 'react';

import { Checkbox as MuiCheckbox, styled } from '@mui/material';

import styles from './Checkbox.module.scss';

const Icon = styled('span')({
  borderRadius: 4,
  width: 20,
  height: 20,
  border: '1px solid #FFFFFF',
  backgroundColor: 'rgba(255,255,255,.5)',
  'input:hover ~ &': {
    backgroundColor: 'rgba(255,255,255,.8)',
    borderColor: '#0099FA',
  },
});

const CheckedIcon = styled(Icon)({
  backgroundColor: '#FFF',
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
    backgroundColor: '#FFF',
  },
});

const Checkbox = (props) => {
  return (
    <div className={styles.wrapper}>
      <MuiCheckbox {...props} icon={<Icon />} checkedIcon={<CheckedIcon />} />
    </div>
  );
};

export default Checkbox;
