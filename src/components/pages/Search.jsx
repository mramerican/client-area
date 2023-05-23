import React from 'react';
import { useParams } from 'react-router-dom';

const Search = () => {
  const { searchText } = useParams();

  return (
    <div>
      Search: <strong>{searchText}</strong>
    </div>
  );
};

export default Search;
