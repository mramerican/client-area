import React from 'react';

import Select from 'components/MaterialUi/Select/Select';

import styles from './Filters.module.scss';
import data from './data';
const Filters = () => {
  return (
    <div className={styles.wrapper}>
      {data.map((select, index) => (
        <Select key={index} {...select} />
      ))}
    </div>
  );
};

export default Filters;
