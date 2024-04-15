import React from 'react';

function Filters({ onFilterChange, handleInputChange }) {
    const handleSortChange = (event) => {
        const sortBy = event.target.value;
        onFilterChange({ sortBy });
    };

    const handleSortOrderChange = (event) => {
        const sortOrder = event.target.value;
        onFilterChange({ sortOrder });
    };



    return (
        <div className="flex  justify-center mt-10">
            {/* search by name */}
            <input
                type="text"
                placeholder="Search by college name..."

                onChange={(e) => handleInputChange(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 m-3"
            />

            {/* select filter */}
            <select
                onChange={handleSortChange}
                className="border border-gray-300 rounded-md px-3 py-2 m-3"
            >
                <option value="">Sort by...</option>
                <option value="rating">Rating</option>
                <option value="fees">Fees</option>
                <option value="userReview">User Rating</option>
            </select>

            {/* select sorted way */}
            <select
                onChange={handleSortOrderChange}
                className="border border-gray-300 rounded-md px-3 py-2 m-3"
            >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
    );
}

export default Filters;
