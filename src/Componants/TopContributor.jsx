import React from "react";

const TopContributor = () => {
  // Sample static data for top contributors; replace with dynamic data as needed
  const contributors = [
    {
      id: 1,
      name: "Alice Johnson",
      avatar: "https://via.placeholder.com/150",
      contributions: 150,
    },
    {
      id: 2,
      name: "Bob Smith",
      avatar: "https://via.placeholder.com/150",
      contributions: 120,
    },
    {
      id: 3,
      name: "Charlie Brown",
      avatar: "https://via.placeholder.com/150",
      contributions: 100,
    },
  ];

  return (
    <section className="p-4 bg-gray-100 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Top Contributors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {contributors.map((contributor) => (
          <div
            key={contributor.id}
            className="bg-white shadow-md rounded-lg p-4 flex items-center"
          >
            <img
              src={contributor.avatar}
              alt={contributor.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold">{contributor.name}</h3>
              <p className="text-gray-600">
                {contributor.contributions} Contributions
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopContributor;
