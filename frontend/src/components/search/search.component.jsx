import React from 'react';

const Search = ({onSearch}) => {
  return (
    <div className='search'>
          <label>Search:</label>
          <input type="text" onChange={onSearch}></input>
    </div>
  );
};

export default Search;
