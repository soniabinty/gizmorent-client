import React, { useState } from 'react';

const Filter = () => {
    const [sortOption, setSortOption] = useState("Default");
  
    const handleSortChange = (event) => {
      setSortOption(event.target.value);
     
      console.log("Selected Sort Option:", event.target.value);
    };
  return (
      <div className="flex justify-end max-sm:justify-start max-sm:mt-4">
               <select
                 value={sortOption}
                 onChange={handleSortChange}
                 className="border px-4 py-2 overflow-x-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-Primary"
               >
                 <option value="Default">Default</option>
                 <option value="HighToLow">Price - High to Low</option>
                 <option value="LowToHigh">Price - Low to High</option>
               </select>
             </div>
  );
};

export default Filter;