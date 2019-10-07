import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './SearchResults.css';

const SearchResults = ({ results }) => {  
  return (
    <table className="searchResults">
      <thead>
        <tr>
          <th>Name</th>
          <th>Mass</th>
          <th>Eye Color</th>
          <th>Skin Color</th>
        </tr>
      </thead>
      <tbody>
      {results.map((result) => (
        <tr key={result.name}>
          <td>
            {result.name}
          </td>
          <td>
            {result.mass}
          </td>
          <td>
            {result.eye_color}
          </td>
          <td>
            {result.skin_color}
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
}

export default memo(SearchResults);
