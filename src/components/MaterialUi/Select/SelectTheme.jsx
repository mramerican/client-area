import PropTypes from 'prop-types';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  width: PropTypes.number.isRequired,
};
const SelectTheme = ({ children, width }) => {
  const theme = createTheme({
    components: {
      MuiFormControl: {
        styleOverrides: {
          root: {
            width: width,
            ['&:hover .MuiFormLabel-root ']: {
              color: '#090A0B',
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            fontFamily: 'inherit',
            fontSize: 14,
            lineHeight: '22px',
            height: 40,
            ['& fieldset']: {
              borderRadius: '12px',
              borderColor: '#EAEBEE',
              backgroundColor: '#FFF',
            },
            ['&.Mui-focused']: {
              ['& fieldset']: {
                borderColor: '#0099FA !important',
                borderWidth: '1px !important',
              },
            },
            ['&:hover']: {
              ['& fieldset']: {
                borderColor: '#888B8D !important',
              },
            },
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          filled: {
            transform: 'translate(14px, -7px) scale(0.75) !important',
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            transform: 'translate(14px, 9px) scale(1)',
            fontFamily: 'inherit',
            fontSize: 14,
            lineHeight: '22px',
            fontWeight: 400,
            color: 'rgba(136, 139, 141, 0.5)',
            ['&.Mui-focused']: {
              transform: 'translate(14px, -7px) scale(0.75);',
              color: '#0099FA',
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          select: {
            padding: '0 15px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            marginTop: 5,
            borderRadius: '12px',
            padding: '8px 12px',
          },
        },
      },
      MuiPopover: {
        styleOverrides: {
          paper: {
            maxWidth: width + 50,
            maxHeight: 400,
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontFamily: 'inherit',
            fontSize: 14,
            lineHeight: '18px',
            padding: 0,
            paddingRight: 5,
            borderRadius: '12px',
            color: '#888B8D',
            ['&:hover']: {
              backgroundColor: '#FAFAFA',
            },
            ['&.Mui-focusVisible']: {
              backgroundColor: '#FAFAFA',
            },
            ['&.Mui-selected']: {
              color: '#090A0B',
              backgroundColor: '#FFFFFF',
            },
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            paddingTop: 0,
          },
        },
      },
      MuiListItemText: {
        styleOverrides: {
          root: {
            marginLeft: 11,
          },
        },
      },
      MuiListSubheader: {
        styleOverrides: {
          root: {
            padding: 0,
            fontFamily: 'inherit',
            marginBottom: 5,
            backgroundColor: '#FFFFFF',
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: 'inherit',
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            zIndex: 1,
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

SelectTheme.propTypes = propTypes;
export default SelectTheme;
