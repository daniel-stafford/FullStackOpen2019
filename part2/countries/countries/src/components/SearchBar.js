import React from 'react';

const SearchBar = ({ search, setSearch }) => {
  const handleFilterChange = e => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <div>
        find countries:
        <input value={search} onChange={handleFilterChange} />
      </div>
    </div>
  );
};

export default SearchBar;
