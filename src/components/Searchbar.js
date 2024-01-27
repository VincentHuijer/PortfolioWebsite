import React, { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        placeholder="zoek"
        className="border border-gray-300 p-1 rounded-l-md focus:outline-none"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button
        onClick={handleSearch}
      >
        <FontAwesomeIcon icon={faSearch} className='ml-2 p-1 border-gray-600 outline '/>
      </button>
    </div>
  );
};

export default SearchBar;
