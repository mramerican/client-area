import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import { Select as MuiSelect } from '@mui/material';
import { createSvgIcon } from '@mui/material/utils';
import ListSubheader from '@mui/material/ListSubheader';
import Checkbox from 'components/MaterialUi/Checkbox/Checkbox';
import SelectTheme from 'components/MaterialUi/Select/SelectTheme';

import styles from './Select.module.scss';

const propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  search: PropTypes.bool,
};

const ExpandMoreIcon = createSvgIcon(
  <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" />,
  'ExpandMore',
);

const CloseIcon = createSvgIcon(
  <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />,
  'Close',
);
const Select = ({ items, title, search }) => {
  const [value, setValue] = useState([]);
  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);
  const handleClickClose = useCallback((item) => {
    setValue((prevState) => prevState.filter((el) => el !== item));
  }, []);

  console.log('search', search);
  const countSize = 1;

  return (
    <SelectTheme width={178}>
      <FormControl>
        <InputLabel>{title}</InputLabel>
        <MuiSelect
          multiple
          IconComponent={ExpandMoreIcon}
          value={value}
          onChange={handleChange}
          input={<OutlinedInput label={title} />}
          renderValue={(selected) => (
            <div className={styles.tagWrapper}>
              {selected.slice(0, countSize).map((item, index) => (
                <div key={index} className={styles.tag}>
                  {item}
                </div>
              ))}
              {selected.length > countSize && (
                <div className={styles.tagMore}>
                  +{selected.length - countSize}
                </div>
              )}
            </div>
          )}
        >
          {value.length > 0 && (
            <ListSubheader>
              <div className={styles.tagWrapper}>
                {value.map((item, index) => (
                  <div key={index} className={styles.tag}>
                    {item}
                    <CloseIcon onClick={() => handleClickClose(item)} />
                  </div>
                ))}
              </div>
            </ListSubheader>
          )}
          {items.map((option) => (
            <MenuItem key={option} value={option}>
              <Checkbox checked={value.indexOf(option) > -1} />
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    </SelectTheme>
  );
};

Select.propTypes = propTypes;
export default Select;
