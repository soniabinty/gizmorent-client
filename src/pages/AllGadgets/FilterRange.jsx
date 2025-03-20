import React, { useState } from 'react';

const FilterRange = () => {
  const [value, setValue] = useState(30);
  return (
    <div className="max-w-sm mx-auto">
    <h2 className="text-lg font-semibold mb-2">Filter By Price</h2>
    <p className="text-gray-500 mb-2">Your range: {value - 1} - {value}</p>
    <input
      type="range"
      min={0}
      max={100}
      value={value}
      onChange={(e) => setValue(parseInt(e.target.value))}
      className="range range-xs w-full accent-red-500"
    />
  </div>
  );
};

export default FilterRange;