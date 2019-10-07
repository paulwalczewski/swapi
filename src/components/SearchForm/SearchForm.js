import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

const SearchForm = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    event.preventDefault();

    setSearchValue(event.target.value);
  }

  const handleSearch = (event) => {
    event.preventDefault();

    onSearch(searchValue);
  }
  
  return (
    <form className="searchForm" onSubmit={handleSearch}>
      <input placeholder="Enter your SW character's name!" value={searchValue} onChange={handleChange} type="text" /> 

      <button>Search</button>
    </form>
  )
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
}

export default memo(SearchForm);
