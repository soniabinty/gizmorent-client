import React from 'react';

const TopRenter = () => {
  const renters = [
    {
      company: "Macbook Pro 13",
      rent: "12",
    },
    {
      company: "Dell XPS 15",
      rent: "10",
    },
    {
      company: "Lenovo ThinkPad X1",
      rent: "8",
    },
    {
      company: "HP Spectre x360",
      rent: "14",
    },
    {
      company: "Asus ROG Zephyrus",
      rent: "16",
    },
  
  ];
  
  return (
    <div className="py-6 px-4 border border-gray-300 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Top Renters</h2>
    
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* Table Head */}
          <thead>
            <tr className="text-gray-500 text-sm">
              <th>Company</th>
              <th>Rents</th>
            
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {renters.map((renter) => (
              <tr key={renter.id} className="hover:bg-gray-100">
               
                <td>{renter.company}</td>
                <td>{renter.rent}K</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopRenter;