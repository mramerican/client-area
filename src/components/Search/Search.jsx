import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import { ReactComponent as SearchIcon } from 'images/Icons/Search.svg';
import { sidebarSelector, openSidebar } from 'store/slices/sidebar';

import { getRoutPatch } from 'utils/route';

import styles from './Search.module.scss';

const Search = () => {
  const dispatch = useDispatch();
  const isVisibleSidebar = useSelector(sidebarSelector.getVisible);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleClickIcon = useCallback(() => {
    if (!isVisibleSidebar) {
      dispatch(openSidebar());
      setTimeout(() => inputRef.current.focus(), 200);
    }
  }, [dispatch, isVisibleSidebar]);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        const searchText = event.target.value.trim();
        if (searchText) {
          navigate(getRoutPatch(`search/${searchText}`));
        }
      }
    },
    [navigate],
  );

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.hideSidebar]: !isVisibleSidebar,
      })}
    >
      <SearchIcon className={styles.icon} onClick={handleClickIcon} />
      <input
        ref={inputRef}
        type="text"
        className={styles.input}
        placeholder="Search"
        onKeyDown={handleKeyDown}
        name="Search"
      />
    </div>
  );
};

export default Search;
