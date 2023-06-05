import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Popover as MuiPopover } from '@mui/material';

import styles from 'components/GameItem/FullInfo/FullInfo.module.scss';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  countMore: PropTypes.number.isRequired,
};

const Popover = ({ data, countMore }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = createTheme({
    components: {
      MuiPopover: {
        styleOverrides: {
          paper: {
            borderRadius: '12px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
          },
        },
      },
    },
  });
  const anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'right',
  };
  const transformOrigin = {
    vertical: 'top',
    horizontal: 'right',
  };

  return (
    <>
      <span className={styles.tagMore} onClick={handleClick}>
        +{data.length - countMore}
      </span>
      <ThemeProvider theme={theme}>
        <MuiPopover
          id={anchorEl ? 'simple-popover' : undefined}
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={anchorOrigin}
          transformOrigin={transformOrigin}
        >
          <div className={classNames(styles.tag, styles.popover)}>
            {data.map((value, index) => (
              <span key={index}>{value}</span>
            ))}
          </div>
        </MuiPopover>
      </ThemeProvider>
    </>
  );
};

Popover.propTypes = propTypes;
export default Popover;
