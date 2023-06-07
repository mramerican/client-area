import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectAll, allGamesSelector } from 'store/slices/allGames';

import FormControlLabel from 'components/MaterialUi/FormControlLabel/FormControlLabel';
import Checkbox from 'components/MaterialUi/Checkbox/Checkbox';

import styles from 'components/pages/AllGames/Sort/Sort.module.scss';
const Sort = () => {
  const dispatch = useDispatch();
  const checked = useSelector(allGamesSelector.getSelectAll);
  const handleClick = useCallback((event) => {
    dispatch(selectAll(event.target.checked));
  }, []);

  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={handleClick} />}
      label="Select All"
      className={styles.formControlLabel}
    />
  );
};

export default Sort;
