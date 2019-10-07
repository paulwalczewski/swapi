import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';

const Pagination = ({ onChange, currentPage, totalPages }) => {  
  return (
    <div className="pagination">
      {(currentPage > 1) &&
        <button onClick={() => onChange(currentPage - 1)}>Prev</button>
      }
      <span>
        Results page: {currentPage} / {totalPages}
      </span>
      {(currentPage < totalPages) &&
        <button onClick={() => onChange(currentPage + 1)}>Next</button>
      }
    </div>
  )
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default memo(Pagination);
