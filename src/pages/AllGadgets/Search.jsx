import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  return (
        <div className="relative flex items-center w-full ">
               <FaSearch className="absolute left-3 text-gray-500" />
               <input
                 type="text"
                 placeholder="Search By Title, Category..."
                 className="w-full pl-10 pr-4 py-2 border focus:border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-Primary"
               />
             </div>
           
  );
};

export default Search;