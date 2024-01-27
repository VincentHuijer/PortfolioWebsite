import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log('Search term:', searchTerm);
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 p-2 rounded-l-md focus:outline-none"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
