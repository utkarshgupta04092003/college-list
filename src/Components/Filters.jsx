import React from 'react';

function Filters({ onFilterChange }) {
  const handleSortChange = (event) => {
    const sortBy = event.target.value;
    onFilterChange({ sortBy });
  };

  const handleSortOrderChange = (event) => {
    const sortOrder = event.target.value;
    onFilterChange({ sortOrder });
  };

  return (
    <div className="flex space-x-4">
      <select
        onChange={handleSortChange}
        className="border border-gray-300 rounded-md px-3 py-2"
      >
        <option value="">Sort by...</option>
        <option value="rating">Rating</option>
        <option value="fees">Fees</option>
        <option value="userReview">User Rating</option>
      </select>
      <select
        onChange={handleSortOrderChange}
        className="border border-gray-300 rounded-md px-3 py-2"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
}

export default Filters;
