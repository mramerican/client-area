import React from 'react';
import PropTypes from 'prop-types';

import { FormControlLabel as MuiFormControlLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const propTypes = {
  typeTheme: PropTypes.string,
};
const defaultProps = {
  typeTheme: 'default',
};

const FormControlLabel = ({ typeTheme, ...props }) => {
  const theme = createTheme({
    components: {
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            marginLeft: '-8px',
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: '"Hind"',
            fontSize: typeTheme === 'default' ? 14 : 16,
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <MuiFormControlLabel {...props} />
    </ThemeProvider>
  );
};

FormControlLabel.propTypes = propTypes;
FormControlLabel.defaultProps = defaultProps;
export default FormControlLabel;
